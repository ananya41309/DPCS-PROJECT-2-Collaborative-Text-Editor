// src/paste-rules-plugin.ts
import {
  Fragment,
  Slice
} from "prosemirror-model";
import { Plugin, PluginKey } from "prosemirror-state";
import { ExtensionPriority } from "@remirror/core-constants";
import { findMatches, includes, isFunction, range, sort } from "@remirror/core-helpers";
function pasteRules(pasteRules2) {
  const sortedPasteRules = sort(
    pasteRules2,
    (a, z) => {
      var _a, _b;
      return ((_a = z.priority) != null ? _a : ExtensionPriority.Low) - ((_b = a.priority) != null ? _b : ExtensionPriority.Low);
    }
  );
  const regexPasteRules2 = [];
  const filePasteRules = [];
  for (const rule of sortedPasteRules) {
    if (isRegexPastRule(rule)) {
      regexPasteRules2.push(rule);
    } else {
      filePasteRules.push(rule);
    }
  }
  let view;
  return new Plugin({
    key: pastePluginKey,
    view: (editorView) => {
      view = editorView;
      return {};
    },
    props: {
      // The regex based paste rules are passed into this function to take care of.
      transformPasted: (slice) => {
        var _a, _b, _c, _d;
        const $pos = view.state.selection.$from;
        const nodeName = $pos.node().type.name;
        const markNames = new Set($pos.marks().map((mark) => mark.type.name));
        for (const rule of regexPasteRules2) {
          if (
            // The parent node is ignored.
            ((_a = rule.ignoredNodes) == null ? void 0 : _a.includes(nodeName)) || // The current position contains ignored marks.
            ((_b = rule.ignoredMarks) == null ? void 0 : _b.some((ignored) => markNames.has(ignored)))
          ) {
            continue;
          }
          const textContent = (_d = (_c = slice.content.firstChild) == null ? void 0 : _c.textContent) != null ? _d : "";
          const canBeReplaced = !view.state.selection.empty && slice.content.childCount === 1 && textContent;
          const match = findMatches(textContent, rule.regexp)[0];
          if (canBeReplaced && match && rule.type === "mark" && rule.replaceSelection) {
            const { from, to } = view.state.selection;
            const textSlice = view.state.doc.slice(from, to);
            const textContent2 = textSlice.content.textBetween(0, textSlice.content.size);
            if (typeof rule.replaceSelection !== "boolean" ? rule.replaceSelection(textContent2) : rule.replaceSelection) {
              const newTextNodes = [];
              const { getAttributes, markType } = rule;
              const attributes = isFunction(getAttributes) ? getAttributes(match, true) : getAttributes;
              const mark = markType.create(attributes);
              textSlice.content.forEach((textNode) => {
                if (textNode.isText) {
                  const marks = mark.addToSet(textNode.marks);
                  newTextNodes.push(textNode.mark(marks));
                }
              });
              return Slice.maxOpen(Fragment.fromArray(newTextNodes));
            }
          }
          const { nodes: transformedNodes, transformed } = regexPasteRuleHandler(
            slice.content,
            rule,
            view.state.schema
          );
          if (transformed) {
            slice = rule.type === "node" && rule.nodeType.isBlock ? new Slice(Fragment.fromArray(transformedNodes), 0, 0) : new Slice(Fragment.fromArray(transformedNodes), slice.openStart, slice.openEnd);
          }
        }
        return fixSliceOpening(slice);
      },
      handleDOMEvents: {
        // Handle paste for pasting content.
        paste: (view2, clipboardEvent) => {
          var _a, _b;
          const event = clipboardEvent;
          if (!((_b = (_a = view2.props).editable) == null ? void 0 : _b.call(_a, view2.state))) {
            return false;
          }
          const { clipboardData } = event;
          if (!clipboardData) {
            return false;
          }
          const allFiles = [...clipboardData.items].map((data) => data.getAsFile()).filter((file) => !!file);
          if (allFiles.length === 0) {
            return false;
          }
          const { selection } = view2.state;
          for (const { fileHandler, regexp } of filePasteRules) {
            const files = regexp ? allFiles.filter((file) => regexp.test(file.type)) : allFiles;
            if (files.length === 0) {
              continue;
            }
            if (fileHandler({ event, files, selection, view: view2, type: "paste" })) {
              event.preventDefault();
              return true;
            }
          }
          return false;
        },
        // Handle drop for pasting content.
        drop: (view2, dragEvent) => {
          var _a, _b, _c, _d;
          const event = dragEvent;
          if (!((_b = (_a = view2.props).editable) == null ? void 0 : _b.call(_a, view2.state))) {
            return false;
          }
          const { dataTransfer, clientX, clientY } = event;
          if (!dataTransfer) {
            return false;
          }
          const allFiles = getDataTransferFiles(event);
          if (allFiles.length === 0) {
            return false;
          }
          const pos = (_d = (_c = view2.posAtCoords({ left: clientX, top: clientY })) == null ? void 0 : _c.pos) != null ? _d : view2.state.selection.anchor;
          for (const { fileHandler, regexp } of filePasteRules) {
            const files = regexp ? allFiles.filter((file) => regexp.test(file.type)) : allFiles;
            if (files.length === 0) {
              continue;
            }
            if (fileHandler({ event, files, pos, view: view2, type: "drop" })) {
              event.preventDefault();
              return true;
            }
          }
          return false;
        }
      }
    }
  });
}
var pastePluginKey = new PluginKey("pasteRule");
function createPasteRuleHandler(transformer, schema) {
  return function handler(props) {
    const { fragment, rule, nodes } = props;
    const { regexp, ignoreWhitespace, ignoredMarks, ignoredNodes } = rule;
    let transformed = false;
    fragment.forEach((child) => {
      var _a;
      if ((ignoredNodes == null ? void 0 : ignoredNodes.includes(child.type.name)) || isCodeNode(child)) {
        nodes.push(child);
        return;
      }
      if (!child.isText) {
        const childResult = handler({ fragment: child.content, rule, nodes: [] });
        transformed || (transformed = childResult.transformed);
        const content = Fragment.fromArray(childResult.nodes);
        if (child.type.validContent(content)) {
          nodes.push(child.copy(content));
        } else {
          nodes.push(...childResult.nodes);
        }
        return;
      }
      if (child.marks.some((mark) => isCodeMark(mark) || (ignoredMarks == null ? void 0 : ignoredMarks.includes(mark.type.name)))) {
        nodes.push(child);
        return;
      }
      const text = (_a = child.text) != null ? _a : "";
      let pos = 0;
      for (const match of findMatches(text, regexp)) {
        const capturedValue = match[1];
        const fullValue = match[0];
        if (
          // This helps prevent matches which are only whitespace from triggering
          // an update.
          ignoreWhitespace && (capturedValue == null ? void 0 : capturedValue.trim()) === "" || !fullValue
        ) {
          return;
        }
        const start = match.index;
        const end = start + fullValue.length;
        if (start > pos) {
          nodes.push(child.cut(pos, start));
        }
        let textNode = child.cut(start, end);
        if (fullValue && capturedValue) {
          const startSpaces = fullValue.search(/\S/);
          const textStart = start + fullValue.indexOf(capturedValue);
          const textEnd = textStart + capturedValue.length;
          if (startSpaces) {
            nodes.push(child.cut(start, start + startSpaces));
          }
          textNode = child.cut(textStart, textEnd);
        }
        transformer({ nodes, rule, textNode, match, schema });
        transformed = true;
        pos = end;
      }
      if (text && pos < text.length) {
        nodes.push(child.cut(pos));
      }
    });
    return { nodes, transformed };
  };
}
function markRuleTransformer(props) {
  var _a;
  const { nodes, rule, textNode, match, schema } = props;
  const { transformMatch, getAttributes, markType } = rule;
  const attributes = isFunction(getAttributes) ? getAttributes(match, false) : getAttributes;
  const text = (_a = textNode.text) != null ? _a : "";
  const mark = markType.create(attributes);
  const transformedCapturedValue = transformMatch == null ? void 0 : transformMatch(match);
  if (transformedCapturedValue === "") {
    return;
  }
  if (transformedCapturedValue === false) {
    nodes.push(schema.text(text, textNode.marks));
    return;
  }
  const marks = mark.addToSet(textNode.marks);
  nodes.push(schema.text(transformedCapturedValue != null ? transformedCapturedValue : text, marks));
}
function textRuleTransformer(props) {
  var _a;
  const { nodes, rule, textNode, match, schema } = props;
  const { transformMatch } = rule;
  const transformedCapturedValue = transformMatch == null ? void 0 : transformMatch(match);
  if (transformedCapturedValue === "" || transformedCapturedValue === false) {
    return;
  }
  const text = (_a = transformedCapturedValue != null ? transformedCapturedValue : textNode.text) != null ? _a : "";
  nodes.push(schema.text(text, textNode.marks));
}
function nodeRuleTransformer(props) {
  const { nodes, rule, textNode, match } = props;
  const { getAttributes, nodeType, getContent } = rule;
  const attributes = isFunction(getAttributes) ? getAttributes(match, false) : getAttributes;
  const content = (getContent ? getContent(match) : textNode) || void 0;
  nodes.push(nodeType.createChecked(attributes, content));
}
function regexPasteRuleHandler(fragment, rule, schema) {
  const nodes = [];
  switch (rule.type) {
    case "mark":
      return createPasteRuleHandler(markRuleTransformer, schema)({ fragment, nodes, rule });
    case "node":
      return createPasteRuleHandler(nodeRuleTransformer, schema)({ fragment, nodes, rule });
    default:
      return createPasteRuleHandler(textRuleTransformer, schema)({ fragment, nodes, rule });
  }
}
var regexPasteRules = ["mark", "node", "text"];
function isRegexPastRule(rule) {
  return includes(regexPasteRules, rule.type);
}
function isInCode(selection, { contained = true } = {}) {
  if (selection.empty) {
    return resolvedPosInCode(selection.$head);
  }
  if (contained) {
    return resolvedPosInCode(selection.$head) && resolvedPosInCode(selection.$anchor);
  }
  return resolvedPosInCode(selection.$head) || resolvedPosInCode(selection.$anchor);
}
function resolvedPosInCode($pos) {
  for (const depth of range($pos.depth, 1)) {
    if (isCodeNode($pos.node(depth))) {
      return true;
    }
  }
  for (const mark of $pos.marks()) {
    if (isCodeMark(mark)) {
      return true;
    }
  }
  return false;
}
function isCodeNode(node) {
  var _a;
  return node.type.spec.code || ((_a = node.type.spec.group) == null ? void 0 : _a.split(" ").includes("code"));
}
function isCodeMark(mark) {
  var _a;
  return mark.type.name === "code" || ((_a = mark.type.spec.group) == null ? void 0 : _a.split(" ").includes("code"));
}
function getDataTransferFiles(event) {
  var _a, _b;
  const { dataTransfer } = event;
  if (!dataTransfer) {
    return [];
  }
  if (((_a = dataTransfer.files) == null ? void 0 : _a.length) > 0) {
    return [...dataTransfer.files];
  }
  if ((_b = dataTransfer.items) == null ? void 0 : _b.length) {
    return [...dataTransfer.items].map((item) => item.getAsFile()).filter((item) => !!item);
  }
  return [];
}
function fixSliceOpening(slice) {
  const max = Slice.maxOpen(slice.content);
  return max.openStart < slice.openStart || max.openEnd < slice.openEnd ? max : slice;
}
export {
  isInCode,
  pasteRules
};
