var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/command-utils.ts
import { ErrorConstant as ErrorConstant3 } from "@remirror/core-constants";
import { assertGet as assertGet2, invariant as invariant3, isNumber as isNumber3, isString as isString4, object as object2 } from "@remirror/core-helpers";
import { TextSelection as TextSelection2 } from "@remirror/pm/state";
import { findWrapping, liftTarget } from "@remirror/pm/transform";

// src/core-utils.ts
import { cssifyObject } from "css-in-js-utils";
import { getDomDocument } from "get-dom-document";
import {
  __INTERNAL_REMIRROR_IDENTIFIER_KEY__,
  ErrorConstant as ErrorConstant2,
  LEAF_NODE_REPLACING_CHARACTER
} from "@remirror/core-constants";
import {
  assert,
  assertGet,
  clamp as clamp2,
  includes as includes2,
  invariant as invariant2,
  isArray as isArray2,
  isNullOrUndefined as isNullOrUndefined2,
  isNumber as isNumber2,
  isObject as isObject2,
  isString as isString3,
  keys,
  omit,
  sort,
  uniqueBy,
  unset
} from "@remirror/core-helpers";
import {
  DOMParser as PMDomParser,
  DOMSerializer,
  Fragment,
  Mark,
  MarkType,
  Node as PMNode,
  NodeType,
  ResolvedPos as PMResolvedPos,
  Schema
} from "@remirror/pm/model";
import {
  AllSelection,
  EditorState as PMEditorState,
  NodeSelection,
  Selection as PMSelection2,
  TextSelection,
  Transaction as PMTransaction
} from "@remirror/pm/state";
import {
  AddMarkStep,
  RemoveMarkStep,
  ReplaceAroundStep,
  ReplaceStep
} from "@remirror/pm/transform";

// src/environment.ts
var environment = {
  /**
   * Verifies that the environment has both a window and window.document
   */
  get isBrowser() {
    return !!(typeof window !== "undefined" && typeof window.document !== "undefined" && window.navigator && window.navigator.userAgent);
  },
  /**
   * Verifies that the environment is JSDOM
   */
  get isJSDOM() {
    return environment.isBrowser && window.navigator.userAgent.includes("jsdom");
  },
  /**
   * Verifies that the environment has a nodejs process and is therefore a node environment
   */
  get isNode() {
    return typeof process !== "undefined" && process.versions != null && process.versions.node != null;
  },
  /**
   * True when on an iOS device.
   */
  get isIos() {
    return environment.isBrowser && /iPod|iPhone|iPad/.test(navigator.platform);
  },
  /**
   * True when running on macOS
   */
  get isMac() {
    return environment.isBrowser && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  },
  /**
   * Verify that this is an apple device either on the client or server.
   */
  get isApple() {
    return environment.isNode ? process.platform === "darwin" : environment.isBrowser ? /Mac|iPod|iPhone|iPad/.test(window.navigator.platform) : false;
  },
  /**
   * True when running in DEVELOPMENT environment
   */
  get isDevelopment() {
    return process.env.NODE_ENV === "development";
  },
  /**
   * True when running unit tests
   */
  get isTest() {
    return process.env.NODE_ENV === "test";
  },
  /**
   * True when running in PRODUCTION environment
   */
  get isProduction() {
    return process.env.NODE_ENV === "production";
  }
};

// src/prosemirror-utils.ts
import { ErrorConstant } from "@remirror/core-constants";
import {
  entries,
  invariant,
  isArray,
  isEmptyObject,
  isNonEmptyArray,
  isNullOrUndefined,
  isString as isString2,
  object
} from "@remirror/core-helpers";
import { Selection as PMSelection } from "@remirror/pm/state";

// src/dom-utils.ts
import parse from "parenthesis";
import { clamp, findMatches, includes, isNumber, isObject, isString } from "@remirror/core-helpers";
function getStyle(element, property) {
  var _a, _b;
  const view = maybeGetWindowFromElement(element);
  return (_b = (_a = view == null ? void 0 : view.getComputedStyle(element)) == null ? void 0 : _a.getPropertyValue(property)) != null ? _b : "";
}
function setStyle(target, styles) {
  return Object.assign(target.style, styles);
}
var DOM_SIZE_UNITS = [
  "px",
  "rem",
  "em",
  "in",
  "q",
  "mm",
  "cm",
  "pt",
  "pc",
  "vh",
  "vw",
  "vmin",
  "vmax"
];
var CSS_DIMENSION_REGEX = /[\d-.]+(\w+)$/;
function parseSizeUnit(fontSize = "0") {
  var _a;
  const length = fontSize || "0";
  const value = Number.parseFloat(length);
  const match = length.match(CSS_DIMENSION_REGEX);
  const unit = ((_a = match == null ? void 0 : match[1]) != null ? _a : "px").toLowerCase();
  return [value, includes(DOM_SIZE_UNITS, unit) ? unit : "px"];
}
var PIXELS_PER_INCH = 96;
var MILLIMETERS_PER_INCH = 25.4;
var POINTS_PER_INCH = 72;
var PICAS_PER_INCH = 6;
function getFontSize(element) {
  if (isElementDomNode(element)) {
    return getStyle(element, "font-size") || getFontSize(element.parentElement);
  }
  const view = maybeGetWindowFromElement(element);
  return view ? getStyle(view.document.documentElement, "font-size") : "";
}
function createUnitConverter(element) {
  const view = getWindowFromElement(element);
  const root = view.document.documentElement || view.document.body;
  return (value, unit) => {
    switch (unit) {
      case "rem":
        return value * extractPixelSize(getFontSize(root));
      case "em":
        return value * extractPixelSize(getFontSize(element), element == null ? void 0 : element.parentElement);
      case "in":
        return value * PIXELS_PER_INCH;
      case "q":
        return value * PIXELS_PER_INCH / MILLIMETERS_PER_INCH / 4;
      case "mm":
        return value * PIXELS_PER_INCH / MILLIMETERS_PER_INCH;
      case "cm":
        return value * PIXELS_PER_INCH * 10 / MILLIMETERS_PER_INCH;
      case "pt":
        return value * PIXELS_PER_INCH / POINTS_PER_INCH;
      case "pc":
        return value * PIXELS_PER_INCH / PICAS_PER_INCH;
      case "vh":
        return (value * view.innerHeight || root.clientWidth) / 100;
      case "vw":
        return (value * view.innerWidth || root.clientHeight) / 100;
      case "vmin":
        return value * Math.min(view.innerWidth || root.clientWidth, view.innerHeight || root.clientHeight) / 100;
      case "vmax":
        return value * Math.max(view.innerWidth || root.clientWidth, view.innerHeight || root.clientHeight) / 100;
      default:
        return value;
    }
  };
}
var CSS_FUNCTION_REGEX = /^([a-z]+)\((.+)\)$/i;
function parseCSSFunction(cssFunc, unitConvertor) {
  if (!CSS_FUNCTION_REGEX.test(cssFunc)) {
    return Number.NaN;
  }
  const tokens = parse(cssFunc, {
    brackets: ["()"],
    escape: "_",
    flat: true
  });
  if (!tokens || tokens.length === 0) {
    return Number.NaN;
  }
  function replaceTokenReferences(str) {
    return str.replace(/_(\d+)_/g, (_, refIndex) => {
      var _a;
      const tokenIndex = Number.parseFloat(refIndex);
      return (_a = tokens[tokenIndex]) != null ? _a : "";
    });
  }
  const firstToken = getMatchString(tokens, 0);
  for (const match of findMatches(firstToken, CSS_FUNCTION_REGEX)) {
    const funcName = getMatchString(match, 1);
    const funcArgs = replaceTokenReferences(getMatchString(match, 2));
    const args = funcArgs.split(/\s*,\s*/);
    const values = args.map((arg) => {
      if (CSS_FUNCTION_REGEX.test(arg)) {
        const nestedFunction = replaceTokenReferences(arg);
        return parseCSSFunction(nestedFunction, unitConvertor);
      }
      return parseCSSDimension(arg, unitConvertor);
    });
    switch (funcName) {
      case "min":
        return Math.min(...values);
      case "max":
        return Math.max(...values);
      case "clamp": {
        const [min, value, max] = values;
        if (isNumber(min) && isNumber(value) && isNumber(max)) {
          return clamp({ min, max, value });
        }
        break;
      }
      case "calc":
        return Number.NaN;
      default:
        return Number.NaN;
    }
  }
  return Number.NaN;
}
function parseCSSDimension(dimension, unitConvertor) {
  const [value, unit] = parseSizeUnit(dimension);
  return unitConvertor(value, unit);
}
function extractPixelSize(size, element) {
  const unitConvertor = createUnitConverter(element);
  return CSS_FUNCTION_REGEX.test(size) ? parseCSSFunction(size.toLowerCase(), unitConvertor) : parseCSSDimension(size, unitConvertor);
}
function convertPixelsToDomUnit(size, to, element) {
  const view = getWindowFromElement(element);
  const root = view.document.documentElement || view.document.body;
  const pixelValue = extractPixelSize(size, element);
  switch (to) {
    case "px":
      return pixelValue;
    case "rem":
      return pixelValue / extractPixelSize(getFontSize(root));
    case "em":
      return pixelValue * extractPixelSize(getFontSize(element), element == null ? void 0 : element.parentElement);
    case "in":
      return pixelValue / PIXELS_PER_INCH;
    case "q":
      return pixelValue / PIXELS_PER_INCH * MILLIMETERS_PER_INCH * 4;
    case "mm":
      return pixelValue / PIXELS_PER_INCH * MILLIMETERS_PER_INCH;
    case "cm":
      return pixelValue / PIXELS_PER_INCH / 10 * MILLIMETERS_PER_INCH;
    case "pt":
      return pixelValue / PIXELS_PER_INCH * POINTS_PER_INCH;
    case "pc":
      return pixelValue / PIXELS_PER_INCH * PICAS_PER_INCH;
    case "vh":
      return pixelValue / (view.innerHeight || root.clientWidth) * 100;
    case "vw":
      return pixelValue / (view.innerWidth || root.clientHeight) * 100;
    case "vmin":
      return pixelValue / Math.min(view.innerWidth || root.clientWidth, view.innerHeight || root.clientHeight) * 100;
    case "vmax":
      return pixelValue / Math.max(view.innerWidth || root.clientWidth, view.innerHeight || root.clientHeight) * 100;
    default:
      return pixelValue;
  }
}
function isDomNode(domNode) {
  return isObject(domNode) && isNumber(domNode.nodeType) && isString(domNode.nodeName);
}
function isElementDomNode(domNode) {
  return isDomNode(domNode) && domNode.nodeType === 1 /* ELEMENT_NODE */;
}
function isTextDomNode(domNode) {
  return isDomNode(domNode) && domNode.nodeType === 3 /* TEXT_NODE */;
}
function mergeDOMRects(rect1, rect2) {
  const left = Math.min(rect1.left, rect2.left);
  const right = Math.max(rect1.right, rect2.right);
  const top = Math.min(rect1.top, rect2.top);
  const bottom = Math.max(rect1.bottom, rect2.bottom);
  const width = right - left;
  const height = bottom - top;
  return new DOMRect(left, top, width, height);
}

// src/prosemirror-utils.ts
function isNodeOfType(props) {
  const { types, node } = props;
  if (!node) {
    return false;
  }
  const matches = (type) => type === node.type || type === node.type.name;
  if (isArray(types)) {
    return types.some(matches);
  }
  return matches(types);
}
function cloneTransaction(tr) {
  return Object.assign(Object.create(tr), tr).setTime(Date.now());
}
function diff(primary, other) {
  return primary.filter((item, index) => item !== other[index]);
}
function applyClonedTransaction(props) {
  const { clone, tr } = props;
  const steps = diff(clone.steps, tr.steps);
  for (const step of steps) {
    tr.step(step);
  }
}
function composeTransactionSteps(transactions, oldState) {
  const { tr } = oldState;
  transactions.forEach((transaction) => {
    transaction.steps.forEach((step) => {
      tr.step(step);
    });
  });
  return tr;
}
function markEqualsType(props) {
  const { types, mark } = props;
  return mark ? Array.isArray(types) && types.includes(mark.type) || mark.type === types : false;
}
function removeNodeAtPosition({ pos, tr }) {
  const node = tr.doc.nodeAt(pos);
  if (node) {
    tr.delete(pos, pos + node.nodeSize);
  }
  return tr;
}
function replaceNodeAtPosition({
  pos,
  tr,
  content
}) {
  const node = tr.doc.nodeAt(pos);
  if (node) {
    tr.replaceWith(pos, pos + node.nodeSize, content);
  }
  return tr;
}
function findElementAtPosition(position, view) {
  const dom = view.domAtPos(position);
  const node = dom.node.childNodes[dom.offset];
  if (isTextDomNode(dom.node)) {
    return dom.node.parentNode;
  }
  if (isNullOrUndefined(node) || isTextDomNode(node)) {
    return dom.node;
  }
  return node;
}
function findParentNode(props) {
  const { predicate, selection } = props;
  const $pos = isEditorState(selection) ? selection.selection.$from : isSelection(selection) ? selection.$from : selection;
  for (let depth = $pos.depth; depth > 0; depth--) {
    const node = $pos.node(depth);
    const pos = depth > 0 ? $pos.before(depth) : 0;
    const start = $pos.start(depth);
    const end = pos + node.nodeSize;
    if (predicate(node, pos)) {
      return { pos, depth, node, start, end };
    }
  }
  return;
}
function findNodeAtPosition($pos) {
  const { depth } = $pos;
  const pos = depth > 0 ? $pos.before(depth) : 0;
  const node = $pos.node(depth);
  const start = $pos.start(depth);
  const end = pos + node.nodeSize;
  return { pos, start, node, end, depth };
}
function findNodeAtSelection(selection) {
  const parentNode = findParentNode({ predicate: () => true, selection });
  invariant(parentNode, { message: "No parent node found for the selection provided." });
  return parentNode;
}
function findParentNodeOfType(props) {
  const { types, selection } = props;
  return findParentNode({ predicate: (node) => isNodeOfType({ types, node }), selection });
}
function findPositionOfNodeBefore(value) {
  const $pos = isResolvedPos(value) ? value : isSelection(value) ? value.$from : value.selection.$from;
  if (isNullOrUndefined($pos)) {
    throw new Error("Invalid value passed in.");
  }
  const { nodeBefore } = $pos;
  const selection = PMSelection.findFrom($pos, -1);
  if (!selection || !nodeBefore) {
    return;
  }
  const parent = findParentNodeOfType({ types: nodeBefore.type, selection });
  return parent ? parent : {
    node: nodeBefore,
    pos: selection.$from.pos,
    end: selection.$from.end(),
    depth: selection.$from.depth + 1,
    start: selection.$from.start(selection.$from.depth + 1)
  };
}
function removeNodeBefore(tr) {
  const result = findPositionOfNodeBefore(tr.selection);
  if (result) {
    removeNodeAtPosition({ pos: result.pos, tr });
  }
  return tr;
}
function findSelectedNodeOfType(props) {
  const { types, selection } = props;
  if (!isNodeSelection(selection) || !isNodeOfType({ types, node: selection.node })) {
    return;
  }
  return {
    pos: selection.$from.pos,
    depth: selection.$from.depth,
    start: selection.$from.start(),
    end: selection.$from.pos + selection.node.nodeSize,
    node: selection.node
  };
}
function findPositionOfNodeAfter(value) {
  const $pos = isResolvedPos(value) ? value : isSelection(value) ? value.$from : value.selection.$from;
  if (isNullOrUndefined($pos)) {
    throw new Error("Invalid value passed in.");
  }
  const { nodeAfter } = $pos;
  const selection = PMSelection.findFrom($pos, 1);
  if (!selection || !nodeAfter) {
    return;
  }
  const parent = findParentNodeOfType({ types: nodeAfter.type, selection });
  return parent ? parent : {
    node: nodeAfter,
    pos: selection.$from.pos,
    end: selection.$from.end(),
    depth: selection.$from.depth + 1,
    start: selection.$from.start(selection.$from.depth + 1)
  };
}
function removeNodeAfter(tr) {
  const result = findPositionOfNodeAfter(tr.selection);
  if (result) {
    removeNodeAtPosition({ pos: result.pos, tr });
  }
  return tr;
}
function isSelectionEmpty(value) {
  return isSelection(value) ? value.empty : value.selection.empty;
}
function hasTransactionChanged(tr) {
  return tr.docChanged || tr.selectionSet;
}
function isNodeActive(props) {
  return !!getActiveNode(props);
}
function getActiveNode(props) {
  var _a;
  const { state, type, attrs } = props;
  const { selection, doc } = state;
  const nodeType = isString2(type) ? doc.type.schema.nodes[type] : type;
  invariant(nodeType, { code: ErrorConstant.SCHEMA, message: "No node exists for ".concat(type) });
  const active = (_a = findSelectedNodeOfType({ selection, types: type })) != null ? _a : findParentNode({ predicate: (node) => node.type === nodeType, selection });
  if (!attrs || isEmptyObject(attrs) || !active) {
    return active;
  }
  return active.node.hasMarkup(nodeType, __spreadValues(__spreadValues({}, active.node.attrs), attrs)) ? active : void 0;
}
function schemaToJSON(schema) {
  const nodes = object();
  const marks = object();
  for (const [key, { spec }] of entries(schema.nodes)) {
    nodes[key] = spec;
  }
  for (const [key, { spec }] of entries(schema.marks)) {
    marks[key] = spec;
  }
  return {
    nodes,
    marks
  };
}
function chainKeyBindingCommands(...commands) {
  return (props) => {
    if (!isNonEmptyArray(commands)) {
      return false;
    }
    const [command, ...rest] = commands;
    let calledNext = false;
    const createNext = (...nextCommands) => () => {
      if (!isNonEmptyArray(nextCommands)) {
        return false;
      }
      calledNext = true;
      const [, ...nextRest] = nextCommands;
      return chainKeyBindingCommands(...nextCommands)(__spreadProps(__spreadValues({}, props), {
        next: createNext(...nextRest)
      }));
    };
    const next = createNext(...rest);
    const exitEarly = command(__spreadProps(__spreadValues({}, props), { next }));
    if (calledNext || exitEarly) {
      return exitEarly;
    }
    return next();
  };
}
function mergeKeyBindingCreator(extensionKeymaps, mapper) {
  var _a;
  const previousCommandsMap = /* @__PURE__ */ new Map();
  const mappedCommands = object();
  for (const extensionKeymap of extensionKeymaps) {
    for (const [key, newCommand] of entries(extensionKeymap)) {
      const previousCommands = (_a = previousCommandsMap.get(key)) != null ? _a : [];
      const commands = [...previousCommands, newCommand];
      const command = chainKeyBindingCommands(...commands);
      previousCommandsMap.set(key, commands);
      mappedCommands[key] = mapper(command);
    }
  }
  return mappedCommands;
}
function mergeKeyBindings(extensionKeymaps) {
  return mergeKeyBindingCreator(extensionKeymaps, (command) => command);
}
function mergeProsemirrorKeyBindings(extensionKeymaps) {
  return mergeKeyBindingCreator(
    extensionKeymaps,
    // Convert the command to have a signature of the
    // [[`ProsemirrorCommandFunction`]].
    (command) => (state, dispatch, view) => command({ state, dispatch, view, tr: state.tr, next: () => false })
  );
}
function containsAttributes(nodeOrMark, attrs) {
  var _a;
  const currentAttrs = (_a = nodeOrMark.attrs) != null ? _a : {};
  return Object.entries(attrs).every(([name, value]) => currentAttrs[name] === value);
}

// src/core-utils.ts
function isRangeStep(step) {
  return isValidStep(step, [AddMarkStep, ReplaceAroundStep, ReplaceStep, RemoveMarkStep]);
}
function isRemirrorType(value) {
  return isObject2(value);
}
function isIdentifierOfType(value, type) {
  return isArray2(type) ? includes2(type, value[__INTERNAL_REMIRROR_IDENTIFIER_KEY__]) : type === value[__INTERNAL_REMIRROR_IDENTIFIER_KEY__];
}
function isNodeType(value) {
  return isObject2(value) && value instanceof NodeType;
}
function getNodeType(type, schema) {
  return isString3(type) ? assertGet(schema.nodes, type) : type;
}
function isMarkType(value) {
  return isObject2(value) && value instanceof MarkType;
}
function getMarkType(type, schema) {
  return isString3(type) ? assertGet(schema.marks, type) : type;
}
function isProsemirrorNode(value) {
  return isObject2(value) && value instanceof PMNode;
}
function isProsemirrorFragment(value) {
  return isObject2(value) && value instanceof Fragment;
}
function isProsemirrorMark(value) {
  return isObject2(value) && value instanceof Mark;
}
function isEditorState(value) {
  return isObject2(value) && value instanceof PMEditorState;
}
function isTransaction(value) {
  return isObject2(value) && value instanceof PMTransaction;
}
function isEditorSchema(value) {
  return isObject2(value) && value instanceof Schema;
}
function isTextSelection(value) {
  return isObject2(value) && value instanceof TextSelection;
}
function isAllSelection(value) {
  return isObject2(value) && value instanceof AllSelection;
}
function isSelection(value) {
  return isObject2(value) && value instanceof PMSelection2;
}
function isResolvedPos(value) {
  return isObject2(value) && value instanceof PMResolvedPos;
}
function rangeHasMark(props) {
  const { trState, from, to, type, attrs = {} } = props;
  const { doc } = trState;
  const markType = getMarkType(type, doc.type.schema);
  if (Object.keys(attrs).length === 0) {
    return doc.rangeHasMark(from, to, markType);
  }
  let found = false;
  if (to > from) {
    doc.nodesBetween(from, to, (node) => {
      var _a;
      if (found) {
        return false;
      }
      const marks = (_a = node.marks) != null ? _a : [];
      found = marks.some((mark) => {
        if (mark.type !== markType) {
          return false;
        }
        return containsAttributes(mark, attrs);
      });
      return !found;
    });
  }
  return found;
}
function isNodeSelection(value) {
  return isObject2(value) && value instanceof NodeSelection;
}
function isMarkActive(props) {
  const { trState, type, attrs = {}, from, to } = props;
  const { selection, doc, storedMarks } = trState;
  const markType = isString3(type) ? doc.type.schema.marks[type] : type;
  invariant2(markType, {
    code: ErrorConstant2.SCHEMA,
    message: "Mark type: ".concat(type, " does not exist on the current schema.")
  });
  if (from && to) {
    try {
      return Math.max(from, to) < doc.nodeSize && rangeHasMark(__spreadProps(__spreadValues({}, props), { from, to }));
    } catch (e) {
      return false;
    }
  }
  if (selection.empty) {
    const marks = storedMarks != null ? storedMarks : selection.$from.marks();
    return marks.some((mark) => {
      if (mark.type !== type) {
        return false;
      }
      return containsAttributes(mark, attrs != null ? attrs : {});
    });
  }
  return rangeHasMark(__spreadProps(__spreadValues({}, props), { from: selection.from, to: selection.to }));
}
function canInsertNode(state, type) {
  const { $from } = state.selection;
  for (let depth = $from.depth; depth >= 0; depth--) {
    const index = $from.index(depth);
    try {
      if ($from.node(depth).canReplaceWith(index, index, type)) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}
function isDocNodeEmpty(node) {
  const nodeChild = node.content.firstChild;
  if (node.childCount !== 1 || !nodeChild) {
    return false;
  }
  return nodeChild.type.isBlock && !nodeChild.childCount && nodeChild.nodeSize === 2 && (isNullOrUndefined2(nodeChild.marks) || nodeChild.marks.length === 0);
}
function isDefaultDocNode(doc, options = {}) {
  const defaultDoc = getDefaultDocNode(doc.type.schema);
  if (!defaultDoc) {
    return false;
  }
  const { ignoreAttributes, ignoreDocAttributes } = options;
  if (ignoreAttributes) {
    return prosemirrorNodeEquals(defaultDoc, doc);
  }
  if (ignoreDocAttributes) {
    return defaultDoc.content.eq(doc.content);
  }
  return defaultDoc.eq(doc);
}
function prosemirrorNodeEquals(node, other) {
  if (node === other) {
    return true;
  }
  const identicalMarkup = node.type === other.type && Mark.sameSet(node.marks, other.marks);
  function contentEquals() {
    if (node.content === other.content) {
      return true;
    }
    if (node.content.size !== other.content.size) {
      return false;
    }
    const nodeChildren = [];
    const otherChildren = [];
    node.content.forEach((node2) => nodeChildren.push(node2));
    other.content.forEach((node2) => otherChildren.push(node2));
    for (const [index, nodeChild] of nodeChildren.entries()) {
      const otherChild = otherChildren[index];
      if (!otherChild) {
        return false;
      }
      if (!prosemirrorNodeEquals(nodeChild, otherChild)) {
        return false;
      }
    }
    return true;
  }
  return identicalMarkup && contentEquals();
}
function getDefaultDocNode(schema) {
  var _a, _b;
  return (_b = (_a = schema.nodes.doc) == null ? void 0 : _a.createAndFill()) != null ? _b : void 0;
}
function getDefaultBlockNode(schema) {
  for (const type of Object.values(schema.nodes)) {
    if (type.name === "doc") {
      continue;
    }
    if (type.isBlock || type.isTextblock) {
      return type;
    }
  }
  invariant2(false, {
    code: ErrorConstant2.SCHEMA,
    message: "No default block node found for the provided schema."
  });
}
function isDefaultBlockNode(node) {
  return node.type === getDefaultBlockNode(node.type.schema);
}
function isEmptyBlockNode(node) {
  return !!node && node.type.isBlock && !node.textContent && !node.childCount;
}
function getMarkAttributes(trState, type) {
  const { from, to } = trState.selection;
  const marks = [];
  trState.doc.nodesBetween(from, to, (node) => {
    marks.push(...node.marks);
  });
  const mark = marks.find((markItem) => markItem.type.name === type.name);
  if (mark) {
    return mark.attrs;
  }
  return false;
}
function getMarkRange($pos, type, $end) {
  const start = $pos.parent.childAfter($pos.parentOffset);
  if (!start.node) {
    return;
  }
  const typeName = isString3(type) ? type : type.name;
  const mark = start.node.marks.find(({ type: markType }) => markType.name === typeName);
  let startIndex = $pos.index();
  let startPos = $pos.start() + start.offset;
  let endIndex = startIndex + 1;
  let endPos = startPos + start.node.nodeSize;
  if (!mark) {
    if ($end && endPos < $end.pos) {
      return getMarkRange($pos.doc.resolve(endPos + 1), type, $end);
    }
    return;
  }
  while (startIndex > 0 && mark.isInSet($pos.parent.child(startIndex - 1).marks)) {
    startIndex -= 1;
    startPos -= $pos.parent.child(startIndex).nodeSize;
  }
  while (endIndex < $pos.parent.childCount && mark.isInSet($pos.parent.child(endIndex).marks)) {
    endPos += $pos.parent.child(endIndex).nodeSize;
    endIndex += 1;
  }
  const text = $pos.doc.textBetween(startPos, endPos, LEAF_NODE_REPLACING_CHARACTER, "\n\n");
  return { from: startPos, to: endPos, text, mark };
}
function getMarkRanges(selection, type) {
  const markRanges = [];
  const { $from, $to } = selection;
  let $pos = $from;
  while (true) {
    const range = getMarkRange($pos, type, $to);
    if (!range) {
      return markRanges;
    }
    markRanges.push(range);
    if (range.to < $to.pos) {
      $pos = $from.doc.resolve(range.to + 1);
      continue;
    }
    return markRanges;
  }
}
function isValidStep(step, StepTypes) {
  return StepTypes.length === 0 || StepTypes.some((Constructor) => step instanceof Constructor);
}
function removeOverlappingChangedRanges(ranges) {
  const uniqueRanges = uniqueBy(
    ranges,
    ({ from, to, prevFrom, prevTo }) => "".concat(from, "_").concat(to, "_").concat(prevFrom, "_").concat(prevTo)
  );
  return uniqueRanges.filter(
    (range, i, arr) => !arr.some((otherRange, j) => {
      if (i === j) {
        return false;
      }
      return range.prevFrom >= otherRange.prevFrom && range.prevTo <= otherRange.prevTo && range.from >= otherRange.from && range.to <= otherRange.to;
    })
  );
}
function getChangedRanges(tr, StepTypes = []) {
  const ranges = [];
  const { steps, mapping } = tr;
  const inverseMapping = mapping.invert();
  steps.forEach((step, i) => {
    if (!isValidStep(step, StepTypes)) {
      return;
    }
    const rawRanges = [];
    const stepMap = step.getMap();
    const mappingSlice = mapping.slice(i);
    if (stepMap.ranges.length === 0 && isRangeStep(step)) {
      const { from, to } = step;
      rawRanges.push({ from, to });
    } else {
      stepMap.forEach((from, to) => {
        rawRanges.push({ from, to });
      });
    }
    rawRanges.forEach((range) => {
      const from = mappingSlice.map(range.from, -1);
      const to = mappingSlice.map(range.to);
      ranges.push({
        from,
        to,
        prevFrom: inverseMapping.map(from, -1),
        prevTo: inverseMapping.map(to)
      });
    });
  });
  const sortedRanges = sort(ranges, (a, z) => a.from - z.from);
  return removeOverlappingChangedRanges(sortedRanges);
}
function getChangedNodeRanges(tr, StepTypes) {
  const nodeRanges = [];
  const ranges = getChangedRanges(tr, StepTypes);
  for (const range of ranges) {
    try {
      const $from = tr.doc.resolve(range.from);
      const $to = tr.doc.resolve(range.to);
      const nodeRange = $from.blockRange($to);
      if (nodeRange) {
        nodeRanges.push(nodeRange);
      }
    } catch (e) {
    }
  }
  return nodeRanges;
}
function getTextContentFromSlice(slice) {
  var _a, _b;
  return (_b = (_a = slice.content.firstChild) == null ? void 0 : _a.textContent) != null ? _b : "";
}
function getSelectedGroup(state, exclude) {
  if (!isTextSelection(state.selection)) {
    return;
  }
  let { from, to } = state.selection;
  const getChar = (start, end) => getTextContentFromSlice(
    TextSelection.between(state.doc.resolve(start), state.doc.resolve(end)).content()
  );
  for (let char = getChar(from - 1, from); char && !exclude.test(char); from--, char = getChar(from - 1, from)) {
  }
  for (let char = getChar(to, to + 1); char && !exclude.test(char); to++, char = getChar(to, to + 1)) {
  }
  if (from === to) {
    return;
  }
  const text = state.doc.textBetween(from, to, LEAF_NODE_REPLACING_CHARACTER, "\n\n");
  return { from, to, text };
}
function getSelectedWord(state) {
  return getSelectedGroup(state, /\W/);
}
function getMatchString(match, index = 0) {
  const value = isArray2(match) ? match[index] : match;
  assert(isString3(value), "No match string found for match ".concat(match));
  return value != null ? value : "";
}
function atDocEnd(state) {
  return state.doc.nodeSize - state.selection.$to.pos - 2 === state.selection.$to.depth;
}
function atDocStart(state) {
  return state.selection.$from.pos === state.selection.$from.depth;
}
function startPositionOfParent($pos) {
  return $pos.start($pos.depth);
}
function endPositionOfParent($pos) {
  return $pos.end($pos.depth) + 1;
}
function getCursor(selection) {
  return isTextSelection(selection) ? selection.$cursor : void 0;
}
function isDocNode(node, schema) {
  if (!isProsemirrorNode(node)) {
    return false;
  }
  if (schema) {
    return node.type === schema.nodes.doc;
  }
  return node.type.name === "doc";
}
function isRemirrorJSON(value) {
  return isObject2(value) && value.type === "doc" && Array.isArray(value.content);
}
function isAnchorHeadObject(value) {
  return isObject2(value) && isNumber2(value.anchor) && isNumber2(value.head);
}
function getTextSelection(selection, doc) {
  const max = doc.nodeSize - 2;
  const min = 0;
  let pos;
  const clampToDocument = (value) => clamp2({ min, max, value });
  if (isSelection(selection)) {
    return selection;
  }
  if (selection === "all") {
    return new AllSelection(doc);
  }
  if (selection === "start") {
    pos = min;
  } else if (selection === "end") {
    pos = max;
  } else if (isResolvedPos(selection)) {
    pos = selection.pos;
  } else {
    pos = selection;
  }
  if (isNumber2(pos)) {
    pos = clampToDocument(pos);
    return TextSelection.near(doc.resolve(pos));
  }
  if (isAnchorHeadObject(pos)) {
    const anchor2 = clampToDocument(pos.anchor);
    const head2 = clampToDocument(pos.head);
    return TextSelection.between(doc.resolve(anchor2), doc.resolve(head2));
  }
  const anchor = clampToDocument(pos.from);
  const head = clampToDocument(pos.to);
  return TextSelection.between(doc.resolve(anchor), doc.resolve(head));
}
var MAX_ATTEMPTS = 3;
function createDocumentNode(props) {
  const { content, schema, document: document2, stringHandler, onError, attempts = 0 } = props;
  const attemptsRemaining = onError && attempts <= MAX_ATTEMPTS || attempts === 0;
  invariant2(attemptsRemaining, {
    code: ErrorConstant2.INVALID_CONTENT,
    message: "The invalid content has been called recursively more than ${MAX_ATTEMPTS} times. The content is invalid and the error handler has not been able to recover properly."
  });
  if (isString3(content)) {
    invariant2(stringHandler, {
      code: ErrorConstant2.INVALID_CONTENT,
      message: "The string '".concat(content, "' was added to the editor, but no `stringHandler` was added. Please provide a valid string handler which transforms your content to a `ProsemirrorNode` to prevent this error.")
    });
    const options = { document: document2, content, schema };
    return stringHandler(options);
  }
  if (isEditorState(content)) {
    return content.doc;
  }
  if (isProsemirrorNode(content)) {
    return content;
  }
  try {
    return schema.nodeFromJSON(content);
  } catch (error) {
    const details = getInvalidContent({ schema, error, json: content });
    const transformedContent = onError == null ? void 0 : onError(details);
    invariant2(transformedContent, {
      code: ErrorConstant2.INVALID_CONTENT,
      message: "An error occurred when processing the content. Please provide an `onError` handler to process the invalid content: ".concat(JSON.stringify(
        details.invalidContent,
        null,
        2
      ))
    });
    return createDocumentNode(__spreadProps(__spreadValues({}, props), {
      content: transformedContent,
      attempts: attempts + 1
    }));
  }
}
function shouldUseDomEnvironment() {
  return environment.isBrowser;
}
function getDocument() {
  const document2 = getDomDocument();
  if (document2) {
    return document2;
  }
  throw new Error(
    "Unable to retrieve the document from the global scope. \nIt seems that you are running Remirror in a non-browser environment. Remirror need browser APIs to work. \nIf you are using Jest (or other testing frameworks), make sure that you are using the JSDOM environment (https://jestjs.io/docs/29.0/configuration#testenvironment-string). \nIf you are using Next.js (or other server-side rendering frameworks), please use dynamic import with `ssr: false` to load the editor component without rendering it on the server (https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr). \nIf you are using Node.js, you can install JSDOM and Remirror will try to use it automatically, or you can create a fake document and pass it to Remirror"
  );
}
function maybeGetWindowFromDocument(document2) {
  var _a, _b, _c;
  return (_c = (_a = document2 == null ? void 0 : document2.defaultView) != null ? _a : typeof window !== "undefined" ? window : void 0) != null ? _c : (_b = getDomDocument()) == null ? void 0 : _b.defaultView;
}
function maybeGetWindowFromElement(element) {
  return maybeGetWindowFromDocument(element == null ? void 0 : element.ownerDocument);
}
function getWindowFromDocument(document2) {
  var _a;
  const view = (_a = maybeGetWindowFromDocument(document2)) != null ? _a : getDocument().defaultView;
  if (view) {
    return view;
  }
  throw new Error("Unable to retrieve the window from the global scope");
}
function getWindowFromElement(element) {
  return getWindowFromDocument(element == null ? void 0 : element.ownerDocument);
}
function prosemirrorNodeToDom(node, document2 = getDocument()) {
  const fragment = isDocNode(node, node.type.schema) ? node.content : Fragment.from(node);
  return DOMSerializer.fromSchema(node.type.schema).serializeFragment(fragment, { document: document2 });
}
function elementFromString(html, document2) {
  const parser = new (getWindowFromDocument(document2)).DOMParser();
  return parser.parseFromString("<body>".concat(html, "</body>"), "text/html").body;
}
function prosemirrorNodeToHtml(node, document2 = getDocument()) {
  const element = document2.createElement("div");
  element.append(prosemirrorNodeToDom(node, document2));
  return element.innerHTML;
}
function htmlToProsemirrorNode(props) {
  const _a = props, { content, schema, document: document2, fragment = false } = _a, parseOptions = __objRest(_a, ["content", "schema", "document", "fragment"]);
  const element = elementFromString(content, document2);
  const parser = PMDomParser.fromSchema(schema);
  return fragment ? parser.parseSlice(element, __spreadValues(__spreadValues({}, defaultParseOptions), parseOptions)).content : parser.parse(element, __spreadValues(__spreadValues({}, defaultParseOptions), parseOptions));
}
var defaultParseOptions = { preserveWhitespace: false };
function getRemirrorJSON(content) {
  return isProsemirrorNode(content) ? content.toJSON() : content.doc.toJSON();
}
function areStatesEqual(stateA, stateB, options = {}) {
  if (stateA === stateB) {
    return true;
  }
  if (!stateA.doc.eq(stateB.doc)) {
    return false;
  }
  if (options.checkSelection && !stateA.selection.eq(stateB.selection)) {
    return false;
  }
  if (!areSchemasCompatible(stateA.schema, stateB.schema)) {
    return false;
  }
  return true;
}
function areSchemasCompatible(schemaA, schemaB) {
  if (schemaA === schemaB) {
    return true;
  }
  const marksA = keys(schemaA.marks);
  const marksB = keys(schemaB.marks);
  const nodesA = keys(schemaA.nodes);
  const nodesB = keys(schemaB.nodes);
  if (marksA.length !== marksB.length || nodesA.length !== nodesB.length) {
    return false;
  }
  for (const mark of marksA) {
    if (!marksB.includes(mark)) {
      return false;
    }
  }
  for (const node of nodesA) {
    if (!nodesB.includes(node)) {
      return false;
    }
  }
  return true;
}
function omitExtraAttributes(attrs, extra) {
  const extraAttributeNames = keys(extra.defaults());
  return omit(__spreadValues({}, attrs), extraAttributeNames);
}
function joinStyles(styleObject, initialStyles) {
  let start = "";
  if (initialStyles) {
    start = "".concat(initialStyles.trim());
  }
  const end = cssifyObject(styleObject);
  if (!end) {
    return start;
  }
  const separator = start.endsWith(";") ? " " : " ";
  return "".concat(start).concat(separator).concat(end);
}
function textBetween(props) {
  const { from, to, doc } = props;
  const positions = [];
  doc.nodesBetween(from, to, (node, pos) => {
    if (!node.isText || !node.text) {
      return;
    }
    const offset = Math.max(from, pos) - pos;
    positions.push({
      pos: pos + offset,
      text: node.text.slice(offset, to - pos)
    });
  });
  return positions;
}
function getDocRange(doc) {
  const { from, to } = new AllSelection(doc);
  return { from, to };
}
var transformers = {
  /**
   * Remove every invalid block from the editor. This is a destructive action
   * and should only be applied if you're sure it's the best strategy.
   *
   * @param json - the content as a json object.
   * @param invalidContent - the list of invalid items as passed to the error
   * handler.
   */
  remove(json, invalidContent) {
    let newJSON = json;
    for (const block of invalidContent) {
      if (block.invalidParentNode) {
        continue;
      }
      newJSON = unset(block.path, newJSON);
    }
    return newJSON;
  }
};
function getInvalidContent(_a) {
  var _b = _a, {
    json,
    schema
  } = _b, extra = __objRest(_b, [
    "json",
    "schema"
  ]);
  const validMarks = new Set(keys(schema.marks));
  const validNodes = new Set(keys(schema.nodes));
  const invalidContent = checkForInvalidContent({ json, path: [], validNodes, validMarks });
  return __spreadValues({ json, invalidContent, transformers }, extra);
}
function checkForInvalidContent(props) {
  const { json, validMarks, validNodes, path = [] } = props;
  const valid = { validMarks, validNodes };
  const invalidNodes = [];
  const { type, marks, content } = json;
  let { invalidParentMark = false, invalidParentNode = false } = props;
  if (marks) {
    const invalidMarks = [];
    for (const [index, mark] of marks.entries()) {
      const name = isString3(mark) ? mark : mark.type;
      if (validMarks.has(name)) {
        continue;
      }
      invalidMarks.unshift({
        name,
        path: [...path, "marks", "".concat(index)],
        type: "mark",
        invalidParentMark,
        invalidParentNode
      });
      invalidParentMark = true;
    }
    invalidNodes.push(...invalidMarks);
  }
  if (!validNodes.has(type)) {
    invalidNodes.push({
      name: type,
      type: "node",
      path,
      invalidParentMark,
      invalidParentNode
    });
    invalidParentNode = true;
  }
  if (content) {
    const invalidContent = [];
    for (const [index, value] of content.entries()) {
      invalidContent.unshift(
        ...checkForInvalidContent(__spreadProps(__spreadValues({}, valid), {
          json: value,
          path: [...path, "content", "".concat(index)],
          invalidParentMark,
          invalidParentNode
        }))
      );
    }
    invalidNodes.unshift(...invalidContent);
  }
  return invalidNodes;
}
function isEndOfTextBlock(selection) {
  return !!(isTextSelection(selection) && selection.$cursor && selection.$cursor.parentOffset >= selection.$cursor.parent.content.size);
}
function isStartOfTextBlock(selection) {
  return !!(isTextSelection(selection) && selection.$cursor && selection.$cursor.parentOffset <= 0);
}
function isStartOfDoc(selection) {
  const selectionAtStart = PMSelection2.atStart(selection.$anchor.doc);
  return !!(isStartOfTextBlock(selection) && selectionAtStart.anchor === selection.anchor);
}

// src/command-utils.ts
function updateMark(props) {
  return ({ dispatch, tr }) => {
    const { type, attrs = object2(), appendText, range } = props;
    const selection = range ? TextSelection2.between(tr.doc.resolve(range.from), tr.doc.resolve(range.to)) : tr.selection;
    const { $from, from, to } = selection;
    let applicable = $from.depth === 0 ? tr.doc.type.allowsMarkType(type) : false;
    tr.doc.nodesBetween(from, to, (node) => {
      if (applicable) {
        return false;
      }
      if (node.inlineContent && node.type.allowsMarkType(type)) {
        applicable = true;
        return;
      }
      return;
    });
    if (!applicable) {
      return false;
    }
    dispatch == null ? void 0 : dispatch(
      tr.addMark(from, to, type.create(attrs)) && appendText ? tr.insertText(appendText) : tr
    );
    return true;
  };
}
function lift({ tr, dispatch }) {
  const { $from, $to } = tr.selection;
  const range = $from.blockRange($to);
  const target = range && liftTarget(range);
  if (!isNumber3(target) || !range) {
    return false;
  }
  dispatch == null ? void 0 : dispatch(tr.lift(range, target).scrollIntoView());
  return true;
}
function wrapIn(type, attrs = {}, selection) {
  return function(props) {
    const { tr, dispatch, state } = props;
    const nodeType = isString4(type) ? assertGet2(state.schema.nodes, type) : type;
    const { from, to } = getTextSelection(selection != null ? selection : tr.selection, tr.doc);
    const $from = tr.doc.resolve(from);
    const $to = tr.doc.resolve(to);
    const blockRange = $from.blockRange($to);
    const wrapping = blockRange && findWrapping(blockRange, nodeType, attrs);
    if (!wrapping || !blockRange) {
      return false;
    }
    dispatch == null ? void 0 : dispatch(tr.wrap(blockRange, wrapping).scrollIntoView());
    return true;
  };
}
function toggleWrap(nodeType, attrs = {}, selection) {
  return (props) => {
    const { tr, state } = props;
    const type = isString4(nodeType) ? assertGet2(state.schema.nodes, nodeType) : nodeType;
    const activeNode = getActiveNode({ state: tr, type, attrs });
    if (activeNode) {
      return lift(props);
    }
    return wrapIn(nodeType, attrs, selection)(props);
  };
}
function setBlockType(nodeType, attrs, selection, preserveAttrs = true) {
  return function(props) {
    const { tr, dispatch, state } = props;
    const type = isString4(nodeType) ? assertGet2(state.schema.nodes, nodeType) : nodeType;
    const { from, to } = getTextSelection(selection != null ? selection : tr.selection, tr.doc);
    let applicable = false;
    let activeAttrs;
    tr.doc.nodesBetween(from, to, (node, pos) => {
      if (applicable) {
        return false;
      }
      if (!node.isTextblock || node.hasMarkup(type, attrs)) {
        return;
      }
      if (node.type === type) {
        applicable = true;
        activeAttrs = node.attrs;
        return;
      }
      const $pos = tr.doc.resolve(pos);
      const index = $pos.index();
      applicable = $pos.parent.canReplaceWith(index, index + 1, type);
      if (applicable) {
        activeAttrs = $pos.parent.attrs;
      }
      return;
    });
    if (!applicable) {
      return false;
    }
    dispatch == null ? void 0 : dispatch(
      tr.setBlockType(from, to, type, __spreadValues(__spreadValues({}, preserveAttrs ? activeAttrs : {}), attrs)).scrollIntoView()
    );
    return true;
  };
}
function toggleBlockItem(toggleProps) {
  return (props) => {
    var _a;
    const { tr, state } = props;
    const { type, attrs, preserveAttrs = true } = toggleProps;
    const activeNode = getActiveNode({ state: tr, type, attrs });
    const toggleType = (_a = toggleProps.toggleType) != null ? _a : getDefaultBlockNode(state.schema);
    if (activeNode) {
      return setBlockType(toggleType, __spreadValues(__spreadValues({}, preserveAttrs ? activeNode.node.attrs : {}), attrs))(props);
    }
    const toggleNode = getActiveNode({ state: tr, type: toggleType, attrs });
    return setBlockType(type, __spreadValues(__spreadValues({}, preserveAttrs ? toggleNode == null ? void 0 : toggleNode.node.attrs : {}), attrs))(
      props
    );
  };
}
function isChrome(minVersion = 0) {
  const parsedAgent = navigator.userAgent.match(/Chrom(e|ium)\/(\d+)\./);
  return parsedAgent ? Number.parseInt(assertGet2(parsedAgent, 2), 10) >= minVersion : false;
}
function isSafari(minVersion = 0) {
  const isMac = navigator.userAgent.match(/Mac/);
  const parsedAgent = navigator.userAgent.match(/Safari\/(\d+)\./);
  return isMac && !isChrome() && parsedAgent ? Number.parseInt(assertGet2(parsedAgent, 1), 10) >= minVersion : false;
}
function preserveSelection(selection, tr) {
  let { head, empty, anchor } = selection;
  for (const step of tr.steps) {
    const map = step.getMap();
    head = map.map(head);
  }
  if (empty) {
    tr.setSelection(TextSelection2.near(tr.doc.resolve(head)));
  } else {
    tr.setSelection(TextSelection2.between(tr.doc.resolve(anchor), tr.doc.resolve(head)));
  }
}
function replaceText(props) {
  const { attrs = {}, appendText = "", content = "", keepSelection = false, range } = props;
  return ({ state, tr, dispatch }) => {
    var _a, _b, _c, _d;
    const schema = state.schema;
    const selection = getTextSelection((_b = (_a = props.selection) != null ? _a : range) != null ? _b : tr.selection, tr.doc);
    const index = selection.$from.index();
    const { from, to, $from } = selection;
    const type = isString4(props.type) ? (_c = schema.nodes[props.type]) != null ? _c : schema.marks[props.type] : props.type;
    invariant3(isString4(props.type) ? type : true, {
      code: ErrorConstant3.SCHEMA,
      message: "Schema contains no marks or nodes with name ".concat(type)
    });
    if (isNodeType(type)) {
      if (!$from.parent.canReplaceWith(index, index, type)) {
        return false;
      }
      tr.replaceWith(from, to, type.create(attrs, content ? schema.text(content) : void 0));
    } else {
      invariant3(content, {
        message: "`replaceText` cannot be called without content when using a mark type"
      });
      tr.replaceWith(
        from,
        to,
        schema.text(content, isMarkType(type) ? [type.create(attrs)] : void 0)
      );
    }
    if (appendText) {
      tr.insertText(appendText);
    }
    if (keepSelection) {
      preserveSelection(state.selection, tr);
    }
    if (dispatch) {
      if (isChrome(60)) {
        (_d = document.getSelection()) == null ? void 0 : _d.empty();
      }
      dispatch(tr);
    }
    return true;
  };
}
function getFirstMark($pos, $end) {
  const start = $pos.parent.childAfter($pos.parentOffset);
  if (!start.node) {
    return;
  }
  const { marks, nodeSize } = start.node;
  if (marks[0]) {
    return marks[0].type;
  }
  const startPos = $pos.start() + start.offset;
  const endPos = startPos + nodeSize;
  return getFirstMark($pos.doc.resolve(endPos + 1), $end);
}
function removeMark(props) {
  return ({ dispatch, tr, state }) => {
    var _a, _b;
    const { type, expand = true, range } = props;
    const selection = getTextSelection((_b = (_a = props.selection) != null ? _a : range) != null ? _b : tr.selection, tr.doc);
    let { from, to, $from, $to } = selection;
    const markType = isString4(type) ? state.schema.marks[type] : type;
    if (markType !== null) {
      invariant3(markType, {
        code: ErrorConstant3.SCHEMA,
        message: "Mark type: ".concat(type, " does not exist on the current schema.")
      });
    }
    const rangeMark = markType != null ? markType : getFirstMark($from);
    if (!rangeMark) {
      return false;
    }
    const markRange = getMarkRange($from, rangeMark, $to);
    if (expand && markRange) {
      from = Math.max(0, Math.min(from, markRange.from));
      to = Math.min(Math.max(to, markRange.to), tr.doc.nodeSize - 2);
    }
    dispatch == null ? void 0 : dispatch(
      tr.removeMark(from, isNumber3(to) ? to : from, isMarkType(markType) ? markType : void 0)
    );
    return true;
  };
}

// src/keyboard-utils.ts
import { CoreUtilsMessages as Messages } from "@remirror/messages";
function isCommandKey(key) {
  const allowedKeys = ["command", "cmd", "meta"];
  if (environment.isMac) {
    allowedKeys.push("mod");
  }
  return allowedKeys.includes(key);
}
function isControlKey(key) {
  const allowedKeys = ["control", "ctrl"];
  if (!environment.isMac) {
    allowedKeys.push("mod");
  }
  return allowedKeys.includes(key);
}
function getShortcutSymbols(shortcut) {
  const symbols = [];
  for (let key of shortcut.split("-")) {
    key = key.toLowerCase();
    if (isCommandKey(key)) {
      symbols.push({ type: "modifier", symbol: "\u2318", key: "command", i18n: Messages.COMMAND_KEY });
      continue;
    }
    if (isControlKey(key)) {
      symbols.push({ type: "modifier", symbol: "\u2303", key: "control", i18n: Messages.CONTROL_KEY });
      continue;
    }
    switch (key) {
      case "shift":
        symbols.push({ type: "modifier", symbol: "\u21E7", key, i18n: Messages.SHIFT_KEY });
        continue;
      case "alt":
        symbols.push({ type: "modifier", symbol: "\u2325", key, i18n: Messages.ALT_KEY });
        continue;
      case "\n":
      case "\r":
      case "enter":
        symbols.push({ type: "named", symbol: "\u21B5", key, i18n: Messages.ENTER_KEY });
        continue;
      case "backspace":
        symbols.push({ type: "named", symbol: "\u232B", key, i18n: Messages.BACKSPACE_KEY });
        continue;
      case "delete":
        symbols.push({ type: "named", symbol: "\u2326", key, i18n: Messages.DELETE_KEY });
        continue;
      case "escape":
        symbols.push({ type: "named", symbol: "\u241B", key, i18n: Messages.ESCAPE_KEY });
        continue;
      case "tab":
        symbols.push({ type: "named", symbol: "\u21E5", key, i18n: Messages.TAB_KEY });
        continue;
      case "capslock":
        symbols.push({ type: "named", symbol: "\u21EA", key, i18n: Messages.CAPS_LOCK_KEY });
        continue;
      case "space":
        symbols.push({ type: "named", symbol: "\u2423", key, i18n: Messages.SPACE_KEY });
        continue;
      case "pageup":
        symbols.push({ type: "named", symbol: "\u2912", key, i18n: Messages.PAGE_UP_KEY });
        continue;
      case "pagedown":
        symbols.push({ type: "named", symbol: "\u2913", key, i18n: Messages.PAGE_DOWN_KEY });
        continue;
      case "home":
        symbols.push({ type: "named", key, i18n: Messages.HOME_KEY });
        continue;
      case "end":
        symbols.push({ type: "named", key, i18n: Messages.END_KEY });
        continue;
      case "arrowleft":
        symbols.push({ type: "named", symbol: "\u2190", key, i18n: Messages.ARROW_LEFT_KEY });
        continue;
      case "arrowright":
        symbols.push({ type: "named", symbol: "\u2192", key, i18n: Messages.ARROW_RIGHT_KEY });
        continue;
      case "arrowup":
        symbols.push({ type: "named", symbol: "\u2192", key, i18n: Messages.ARROW_UP_KEY });
        continue;
      case "arrowdown":
        symbols.push({ type: "named", symbol: "\u2193", key, i18n: Messages.ARROW_DOWN_KEY });
        continue;
      default:
        symbols.push({ type: "char", key });
        continue;
    }
  }
  return symbols;
}

// src/prosemirror-node-utils.ts
import { ErrorConstant as ErrorConstant4 } from "@remirror/core-constants";
import { entries as entries2, invariant as invariant4, isFunction, isString as isString5, keys as keys2 } from "@remirror/core-helpers";
function findChildren(props) {
  const { node, predicate, descend = true, action } = props;
  invariant4(isProsemirrorNode(node), {
    code: ErrorConstant4.INTERNAL,
    message: 'Invalid "node" parameter passed to "findChildren".'
  });
  invariant4(isFunction(predicate), {
    code: ErrorConstant4.INTERNAL,
    message: 'Invalid "predicate" parameter passed to "findChildren".'
  });
  const result = [];
  node.descendants((child, pos) => {
    const nodeWithPosition = { node: child, pos };
    const isMatch = predicate(nodeWithPosition);
    if (!isMatch) {
      return descend;
    }
    result.push(nodeWithPosition);
    action == null ? void 0 : action(nodeWithPosition);
    return descend;
  });
  return result;
}
function findNodeByPredicate({ predicate }) {
  return (props) => findChildren(__spreadProps(__spreadValues({}, props), { predicate }));
}
var findTextNodes = findNodeByPredicate({ predicate: (child) => child.node.isText });
var findInlineNodes = findNodeByPredicate({ predicate: (child) => child.node.isInline });
var findBlockNodes = findNodeByPredicate({ predicate: (child) => child.node.isBlock });
function findChildrenByAttribute(props) {
  const _a = props, { attrs } = _a, rest = __objRest(_a, ["attrs"]);
  function predicate(nodeWithPos) {
    const attributeKeys = new Set(keys2(nodeWithPos.node.attrs));
    for (const [attr, expectedValue] of entries2(attrs)) {
      const value = nodeWithPos.node.attrs[attr];
      if (
        // The user has passed in a predicate checking function.
        isFunction(expectedValue)
      ) {
        const exists = attributeKeys.has(attr);
        if (
          // Check if the predicate checker returns false, in which case we can
          // exit early.
          !expectedValue({ value, exists })
        ) {
          return false;
        }
        continue;
      }
      if (
        // If the value doesn't match the expected value, exit early.
        value !== expectedValue
      ) {
        return false;
      }
    }
    return true;
  }
  return findChildren(__spreadProps(__spreadValues({}, rest), { predicate }));
}
function findChildrenByNode(props) {
  const _a = props, { type } = _a, rest = __objRest(_a, ["type"]);
  return findChildren(__spreadProps(__spreadValues({}, rest), { predicate: (child) => child.node.type === type }));
}
function findChildrenByMark(paramter) {
  const _a = paramter, { type } = _a, rest = __objRest(_a, ["type"]);
  let markType;
  return findChildren(__spreadProps(__spreadValues({}, rest), {
    predicate: (child) => {
      if (!markType) {
        markType = isString5(type) ? child.node.type.schema.marks[type] : type;
        invariant4(markType, {
          code: ErrorConstant4.SCHEMA,
          message: "Mark type: ".concat(type, " does not exist on the current schema.")
        });
      }
      return !!markType.isInSet(child.node.marks);
    }
  }));
}
function containsNodesOfType(props) {
  const { node, type } = props;
  return findChildrenByNode({ node, type }).length > 0;
}
function getChangedNodes(tr, options = {}) {
  const { descend = false, predicate, StepTypes } = options;
  const nodeRange = getChangedNodeRanges(tr, StepTypes);
  const nodes = [];
  for (const range of nodeRange) {
    const { start, end } = range;
    tr.doc.nodesBetween(start, end, (node, pos) => {
      var _a;
      const shouldAdd = (_a = predicate == null ? void 0 : predicate(node, pos, range)) != null ? _a : true;
      if (shouldAdd) {
        nodes.push({ node, pos });
      }
      return descend;
    });
  }
  return nodes;
}

// src/prosemirror-rules.ts
import { ErrorConstant as ErrorConstant5 } from "@remirror/core-constants";
import { invariant as invariant5, isFunction as isFunction2, isNullOrUndefined as isNullOrUndefined3, isString as isString6 } from "@remirror/core-helpers";
import { InputRule } from "@remirror/pm/inputrules";
import { markActiveInRange } from "@remirror/pm/suggest";
function markInputRule(props) {
  const {
    regexp,
    type,
    getAttributes,
    ignoreWhitespace = false,
    beforeDispatch,
    updateCaptured,
    shouldSkip,
    invalidMarks
  } = props;
  let markType;
  const rule = new InputRule(regexp, (state, match, start, end) => {
    var _a;
    const { tr, schema } = state;
    if (!markType) {
      markType = isString6(type) ? schema.marks[type] : type;
      invariant5(markType, {
        code: ErrorConstant5.SCHEMA,
        message: "Mark type: ".concat(type, " does not exist on the current schema.")
      });
    }
    let captureGroup = match[1];
    let fullMatch = match[0];
    const details = gatherDetails({
      captureGroup,
      fullMatch,
      end,
      start,
      rule,
      state,
      ignoreWhitespace,
      invalidMarks,
      shouldSkip,
      updateCaptured
    });
    if (!details) {
      return null;
    }
    ({ start, end, captureGroup, fullMatch } = details);
    const attributes = isFunction2(getAttributes) ? getAttributes(match) : getAttributes;
    let markEnd = end;
    let initialStoredMarks = [];
    if (captureGroup) {
      const startSpaces = fullMatch.search(/\S/);
      const textStart = start + fullMatch.indexOf(captureGroup);
      const textEnd = textStart + captureGroup.length;
      initialStoredMarks = (_a = tr.storedMarks) != null ? _a : [];
      if (textEnd < end) {
        tr.delete(textEnd, end);
      }
      if (textStart > start) {
        tr.delete(start + startSpaces, textStart);
      }
      markEnd = start + startSpaces + captureGroup.length;
    }
    tr.addMark(start, markEnd, markType.create(attributes));
    tr.setStoredMarks(initialStoredMarks);
    beforeDispatch == null ? void 0 : beforeDispatch({ tr, match, start, end });
    return tr;
  });
  return rule;
}
function nodeInputRule(props) {
  const {
    regexp,
    type,
    getAttributes,
    beforeDispatch,
    shouldSkip,
    ignoreWhitespace = false,
    updateCaptured,
    invalidMarks
  } = props;
  const rule = new InputRule(regexp, (state, match, start, end) => {
    const attributes = isFunction2(getAttributes) ? getAttributes(match) : getAttributes;
    const { tr, schema } = state;
    const nodeType = isString6(type) ? schema.nodes[type] : type;
    let captureGroup = match[1];
    let fullMatch = match[0];
    const details = gatherDetails({
      captureGroup,
      fullMatch,
      end,
      start,
      rule,
      state,
      ignoreWhitespace,
      invalidMarks,
      shouldSkip,
      updateCaptured
    });
    if (!details) {
      return null;
    }
    ({ start, end, captureGroup, fullMatch } = details);
    invariant5(nodeType, {
      code: ErrorConstant5.SCHEMA,
      message: "No node exists for ".concat(type, " in the schema.")
    });
    const content = nodeType.createAndFill(attributes);
    if (content) {
      tr.replaceRangeWith(nodeType.isBlock ? tr.doc.resolve(start).before() : start, end, content);
      beforeDispatch == null ? void 0 : beforeDispatch({ tr, match: [fullMatch, captureGroup != null ? captureGroup : ""], start, end });
    }
    return tr;
  });
  return rule;
}
function plainInputRule(props) {
  const {
    regexp,
    transformMatch,
    beforeDispatch,
    shouldSkip,
    ignoreWhitespace = false,
    updateCaptured,
    invalidMarks
  } = props;
  const rule = new InputRule(regexp, (state, match, start, end) => {
    const value = transformMatch(match);
    if (isNullOrUndefined3(value)) {
      return null;
    }
    const { tr, schema } = state;
    let captureGroup = match[1];
    let fullMatch = match[0];
    const details = gatherDetails({
      captureGroup,
      fullMatch,
      end,
      start,
      rule,
      state,
      ignoreWhitespace,
      invalidMarks,
      shouldSkip,
      updateCaptured
    });
    if (!details) {
      return null;
    }
    ({ start, end, captureGroup, fullMatch } = details);
    if (value === "") {
      tr.delete(start, end);
    } else {
      tr.replaceWith(start, end, schema.text(value));
    }
    beforeDispatch == null ? void 0 : beforeDispatch({ tr, match, start, end });
    return tr;
  });
  return rule;
}
function gatherDetails({
  captureGroup,
  fullMatch,
  end,
  start,
  rule,
  ignoreWhitespace,
  shouldSkip,
  updateCaptured,
  state,
  invalidMarks
}) {
  var _a, _b, _c, _d, _e, _f;
  if (fullMatch == null) {
    return null;
  }
  const details = (_a = updateCaptured == null ? void 0 : updateCaptured({ captureGroup, fullMatch, start, end })) != null ? _a : {};
  captureGroup = (_b = details.captureGroup) != null ? _b : captureGroup;
  fullMatch = (_c = details.fullMatch) != null ? _c : fullMatch;
  start = (_d = details.start) != null ? _d : start;
  end = (_e = details.end) != null ? _e : end;
  const $from = state.doc.resolve(start);
  const $to = state.doc.resolve(end);
  if (
    // Skip when the range contains an excluded mark.
    invalidMarks && markActiveInRange({ $from, $to }, invalidMarks) || rule.invalidMarks && markActiveInRange({ $from, $to }, rule.invalidMarks) || // Skip pure whitespace updates
    ignoreWhitespace && (captureGroup == null ? void 0 : captureGroup.trim()) === "" || // Skip when configured to do
    (shouldSkip == null ? void 0 : shouldSkip({ state, captureGroup, fullMatch, start, end, ruleType: "mark" })) || ((_f = rule.shouldSkip) == null ? void 0 : _f.call(rule, { state, captureGroup, fullMatch, start, end, ruleType: "mark" }))
  ) {
    return null;
  }
  return { captureGroup, end, fullMatch, start };
}

// src/index.ts
import { chainableEditorState, chainCommands, convertCommand, nonChainable } from "@remirror/pm";
export {
  DOM_SIZE_UNITS,
  applyClonedTransaction,
  areSchemasCompatible,
  areStatesEqual,
  atDocEnd,
  atDocStart,
  canInsertNode,
  chainCommands,
  chainKeyBindingCommands,
  chainableEditorState,
  cloneTransaction,
  composeTransactionSteps,
  containsAttributes,
  containsNodesOfType,
  convertCommand,
  convertPixelsToDomUnit,
  createDocumentNode,
  endPositionOfParent,
  environment,
  extractPixelSize,
  findBlockNodes,
  findChildren,
  findChildrenByAttribute,
  findChildrenByMark,
  findChildrenByNode,
  findElementAtPosition,
  findInlineNodes,
  findNodeAtPosition,
  findNodeAtSelection,
  findParentNode,
  findParentNodeOfType,
  findPositionOfNodeAfter,
  findPositionOfNodeBefore,
  findSelectedNodeOfType,
  findTextNodes,
  getActiveNode,
  getChangedNodeRanges,
  getChangedNodes,
  getChangedRanges,
  getCursor,
  getDefaultBlockNode,
  getDefaultDocNode,
  getDocRange,
  getDocument,
  getFontSize,
  getInvalidContent,
  getMarkAttributes,
  getMarkRange,
  getMarkRanges,
  getMarkType,
  getMatchString,
  getNodeType,
  getRemirrorJSON,
  getSelectedGroup,
  getSelectedWord,
  getShortcutSymbols,
  getStyle,
  getTextContentFromSlice,
  getTextSelection,
  hasTransactionChanged,
  htmlToProsemirrorNode,
  isAllSelection,
  isChrome,
  isDefaultBlockNode,
  isDefaultDocNode,
  isDocNode,
  isDocNodeEmpty,
  isDomNode,
  isEditorSchema,
  isEditorState,
  isElementDomNode,
  isEmptyBlockNode,
  isEndOfTextBlock,
  isIdentifierOfType,
  isMarkActive,
  isMarkType,
  isNodeActive,
  isNodeOfType,
  isNodeSelection,
  isNodeType,
  isProsemirrorFragment,
  isProsemirrorMark,
  isProsemirrorNode,
  isRemirrorJSON,
  isRemirrorType,
  isResolvedPos,
  isSafari,
  isSelection,
  isSelectionEmpty,
  isStartOfDoc,
  isStartOfTextBlock,
  isTextDomNode,
  isTextSelection,
  isTransaction,
  joinStyles,
  lift,
  markEqualsType,
  markInputRule,
  mergeDOMRects,
  mergeKeyBindings,
  mergeProsemirrorKeyBindings,
  nodeInputRule,
  nonChainable,
  omitExtraAttributes,
  parseSizeUnit,
  plainInputRule,
  preserveSelection,
  prosemirrorNodeToDom,
  prosemirrorNodeToHtml,
  rangeHasMark,
  removeMark,
  removeNodeAfter,
  removeNodeAtPosition,
  removeNodeBefore,
  replaceNodeAtPosition,
  replaceText,
  schemaToJSON,
  setBlockType,
  setStyle,
  shouldUseDomEnvironment,
  startPositionOfParent,
  textBetween,
  toggleBlockItem,
  toggleWrap,
  updateMark,
  wrapIn
};
