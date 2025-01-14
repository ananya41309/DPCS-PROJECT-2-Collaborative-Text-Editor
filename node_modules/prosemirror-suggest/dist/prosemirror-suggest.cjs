"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ChangeReason: () => ChangeReason,
  DEFAULT_SUGGESTER: () => DEFAULT_SUGGESTER,
  ExitReason: () => ExitReason,
  IGNORE_SUGGEST_META_KEY: () => IGNORE_SUGGEST_META_KEY,
  addSuggester: () => addSuggester,
  createRegexFromSuggester: () => createRegexFromSuggester,
  findFromSuggesters: () => findFromSuggesters,
  getSuggestPluginState: () => getSuggestPluginState,
  getSuggesterWithDefaults: () => getSuggesterWithDefaults,
  ignoreUpdateForSuggest: () => ignoreUpdateForSuggest,
  isChangeReason: () => isChangeReason,
  isExitReason: () => isExitReason,
  isInvalidSplitReason: () => isInvalidSplitReason,
  isJumpReason: () => isJumpReason,
  isRemovedReason: () => isRemovedReason,
  isSelectionChangeReason: () => isSelectionChangeReason,
  isSelectionExitReason: () => isSelectionExitReason,
  isSplitReason: () => isSplitReason,
  isValidMatch: () => isValidMatch,
  markActiveInRange: () => markActiveInRange,
  positionHasMarks: () => positionHasMarks,
  rangeHasMarks: () => rangeHasMarks,
  removeSuggester: () => removeSuggester,
  selectionOutsideMatch: () => selectionOutsideMatch,
  suggest: () => suggest
});
module.exports = __toCommonJS(src_exports);

// src/suggest-plugin.ts
var import_prosemirror_state3 = require("prosemirror-state");

// src/suggest-state.ts
var import_prosemirror_state2 = require("prosemirror-state");
var import_prosemirror_view = require("prosemirror-view");
var import_core_helpers3 = require("@remirror/core-helpers");

// src/suggest-predicates.ts
var import_prosemirror_state = require("prosemirror-state");
var import_core_helpers = require("@remirror/core-helpers");

// src/suggest-types.ts
var ExitReason = /* @__PURE__ */ ((ExitReason2) => {
  ExitReason2["End"] = "exit-end";
  ExitReason2["Removed"] = "delete";
  ExitReason2["Split"] = "exit-split";
  ExitReason2["InvalidSplit"] = "invalid-exit-split";
  ExitReason2["MoveEnd"] = "move-end";
  ExitReason2["MoveStart"] = "move-start";
  ExitReason2["JumpForward"] = "jump-forward-exit";
  ExitReason2["JumpBackward"] = "jump-backward-exit";
  ExitReason2["SelectionOutside"] = "selection-outside";
  return ExitReason2;
})(ExitReason || {});
var ChangeReason = /* @__PURE__ */ ((ChangeReason2) => {
  ChangeReason2["Start"] = "start";
  ChangeReason2["Text"] = "change-character";
  ChangeReason2["SelectionInside"] = "selection-inside";
  ChangeReason2["Move"] = "move";
  ChangeReason2["JumpBackward"] = "jump-backward-change";
  ChangeReason2["JumpForward"] = "jump-forward-change";
  return ChangeReason2;
})(ChangeReason || {});

// src/suggest-predicates.ts
function isChange(compare) {
  return !!(compare.prev && compare.next && compare.prev.text.full !== compare.next.text.full);
}
function isMove(compare) {
  return !!(compare.prev && compare.next && compare.prev.range.cursor !== compare.next.range.cursor);
}
function isEntry(compare) {
  return !!(!compare.prev && compare.next);
}
function isExit(compare) {
  return !!(compare.prev && !compare.next);
}
function isJump(compare) {
  return !!(compare.prev && compare.next && compare.prev.range.from !== compare.next.range.from);
}
function isExitReason(value) {
  return (0, import_core_helpers.isString)(value) && Object.values(ExitReason).includes(value);
}
function isChangeReason(value) {
  return (0, import_core_helpers.isString)(value) && Object.values(ChangeReason).includes(value);
}
var selectionExitReasons = [
  "move-end" /* MoveEnd */,
  "move-start" /* MoveStart */,
  "selection-outside" /* SelectionOutside */,
  "jump-forward-exit" /* JumpForward */,
  "jump-backward-exit" /* JumpBackward */
];
function isSelectionExitReason(value) {
  return (0, import_core_helpers.includes)(selectionExitReasons, value);
}
var selectionChangeReasons = [
  "jump-backward-change" /* JumpBackward */,
  "jump-forward-change" /* JumpForward */,
  "move" /* Move */,
  "selection-inside" /* SelectionInside */
];
function isSelectionChangeReason(value) {
  return (0, import_core_helpers.includes)(selectionChangeReasons, value);
}
function isSplitReason(value) {
  return value === "exit-split" /* Split */;
}
function isInvalidSplitReason(value) {
  return value === "invalid-exit-split" /* InvalidSplit */;
}
function isRemovedReason(value) {
  return value === "delete" /* Removed */;
}
var exitJump = ["jump-backward-exit" /* JumpBackward */, "jump-forward-exit" /* JumpForward */];
var changeJump = ["jump-backward-change" /* JumpBackward */, "jump-forward-change" /* JumpForward */];
function isJumpReason(map) {
  var _a, _b;
  return (0, import_core_helpers.includes)(exitJump, (_a = map.exit) == null ? void 0 : _a.exitReason) || (0, import_core_helpers.includes)(changeJump, (_b = map.change) == null ? void 0 : _b.changeReason);
}
function isValidMatch(match) {
  return !!(match && match.query.full.length >= match.suggester.matchOffset);
}
function selectionOutsideMatch(props) {
  const { match, selection } = props;
  return !!match && (selection.from < match.range.from || selection.from > match.range.to);
}
function isTextSelection(value) {
  return (0, import_core_helpers.isObject)(value) && value instanceof import_prosemirror_state.TextSelection;
}

// src/suggest-utils.ts
var import_escape_string_regexp = __toESM(require("escape-string-regexp"), 1);
var import_core_constants = require("@remirror/core-constants");
var import_core_helpers2 = require("@remirror/core-helpers");
function createMatchWithReason(props) {
  const { match, changeReason, exitReason } = props;
  return __spreadProps(__spreadValues({}, match), {
    changeReason,
    exitReason
  });
}
function isPrefixValid(prefix, options) {
  const { invalidPrefixCharacters, validPrefixCharacters } = options;
  if (invalidPrefixCharacters) {
    const regex = new RegExp(regexToString(invalidPrefixCharacters));
    return !regex.test(prefix);
  }
  {
    const regex = new RegExp(regexToString(validPrefixCharacters));
    return regex.test(prefix);
  }
}
function findPosition(props) {
  const { text, regexp, $pos, suggester } = props;
  const start = $pos.start();
  let position;
  (0, import_core_helpers2.findMatches)(text, regexp).forEach((match) => {
    const matchPrefix = match.input.slice(Math.max(0, match.index - 1), match.index);
    if (isPrefixValid(matchPrefix, suggester)) {
      const from = match.index + start;
      const fullMatch = match[0];
      const charMatch = match[1];
      if (!(0, import_core_helpers2.isString)(fullMatch) || !(0, import_core_helpers2.isString)(charMatch)) {
        return;
      }
      const to = from + fullMatch.length;
      const cursor = Math.min(to, $pos.pos);
      const matchLength = cursor - from;
      if (from < $pos.pos && to >= $pos.pos) {
        position = {
          range: { from, to, cursor },
          match,
          query: {
            partial: fullMatch.slice(charMatch.length, matchLength),
            full: fullMatch.slice(charMatch.length)
          },
          text: { partial: fullMatch.slice(0, matchLength), full: fullMatch },
          textAfter: $pos.doc.textBetween(to, $pos.end(), import_core_constants.NULL_CHARACTER, import_core_constants.NULL_CHARACTER),
          textBefore: $pos.doc.textBetween(start, from, import_core_constants.NULL_CHARACTER, import_core_constants.NULL_CHARACTER),
          suggester
        };
      }
    }
  });
  return position;
}
function findMatch(props) {
  const { $pos, suggester } = props;
  const {
    char,
    name,
    startOfLine,
    supportedCharacters,
    matchOffset,
    multiline,
    caseInsensitive,
    unicode
  } = suggester;
  const regexp = createRegexFromSuggester({
    char,
    matchOffset,
    startOfLine,
    supportedCharacters,
    multiline,
    caseInsensitive,
    unicode
  });
  const text = $pos.doc.textBetween($pos.before(), $pos.end(), import_core_constants.NULL_CHARACTER, import_core_constants.NULL_CHARACTER);
  return findPosition({
    suggester,
    text,
    regexp,
    $pos,
    char,
    name
  });
}
function recheckMatch(props) {
  const { state, match } = props;
  try {
    return findMatch({
      $pos: state.doc.resolve(match.range.cursor),
      suggester: match.suggester
    });
  } catch (e) {
    return;
  }
}
function createInsertReason(props) {
  const { prev, next, state } = props;
  if (!next && prev.range.from >= state.doc.nodeSize) {
    return {
      exit: createMatchWithReason({
        match: prev,
        exitReason: "delete" /* Removed */
      })
    };
  }
  if (!next || !prev.query.partial) {
    return {
      exit: createMatchWithReason({
        match: prev,
        exitReason: "invalid-exit-split" /* InvalidSplit */
      })
    };
  }
  if (prev.range.to === next.range.cursor) {
    return { exit: createMatchWithReason({ match: next, exitReason: "exit-end" /* End */ }) };
  }
  if (prev.query.partial) {
    return { exit: createMatchWithReason({ match: next, exitReason: "exit-split" /* Split */ }) };
  }
  return {};
}
function findJumpReason(props) {
  const { prev, next, state } = props;
  const value = (0, import_core_helpers2.object)();
  const updatedPrevious = recheckMatch({ state, match: prev });
  const { exit } = updatedPrevious && updatedPrevious.query.full !== prev.query.full ? createInsertReason({ prev, next: updatedPrevious, state }) : value;
  const isJumpForward = prev.range.from < next.range.from;
  if (isJumpForward) {
    return {
      exit: exit != null ? exit : createMatchWithReason({ match: prev, exitReason: "jump-forward-exit" /* JumpForward */ }),
      change: createMatchWithReason({ match: next, changeReason: "jump-forward-change" /* JumpForward */ })
    };
  }
  return {
    exit: exit != null ? exit : createMatchWithReason({ match: prev, exitReason: "jump-backward-exit" /* JumpBackward */ }),
    change: createMatchWithReason({ match: next, changeReason: "jump-backward-change" /* JumpBackward */ })
  };
}
function findExitReason(props) {
  const { match, state, $pos } = props;
  const { selection } = state;
  const updatedPrevious = recheckMatch({ match, state });
  if (!updatedPrevious || updatedPrevious.text.full !== match.text.full) {
    return createInsertReason({ prev: match, next: updatedPrevious, state });
  }
  if (!selection.empty && (selection.from <= match.range.from || selection.to >= match.range.to)) {
    return { exit: createMatchWithReason({ match, exitReason: "selection-outside" /* SelectionOutside */ }) };
  }
  if ($pos.pos > match.range.to) {
    return { exit: createMatchWithReason({ match, exitReason: "move-end" /* MoveEnd */ }) };
  }
  if ($pos.pos <= match.range.from) {
    return { exit: createMatchWithReason({ match, exitReason: "move-start" /* MoveStart */ }) };
  }
  return {};
}
function findReason(props) {
  const { prev, next, state, $pos } = props;
  const value = (0, import_core_helpers2.object)();
  if (!prev && !next) {
    return value;
  }
  const compare = { prev, next };
  if (isJump(compare)) {
    return findJumpReason({ prev: compare.prev, next: compare.next, state });
  }
  if (isEntry(compare)) {
    return {
      change: createMatchWithReason({ match: compare.next, changeReason: "start" /* Start */ })
    };
  }
  if (isExit(compare)) {
    return findExitReason({ $pos, match: compare.prev, state });
  }
  if (isChange(compare)) {
    return {
      change: createMatchWithReason({ match: compare.next, changeReason: "change-character" /* Text */ })
    };
  }
  if (isMove(compare)) {
    return {
      change: createMatchWithReason({
        match: compare.next,
        changeReason: state.selection.empty ? "move" /* Move */ : "selection-inside" /* SelectionInside */
      })
    };
  }
  return value;
}
function hasParentNode($pos, types) {
  for (let depth = $pos.depth; depth > 0; depth--) {
    const node = $pos.node(depth);
    if (types.includes(node.type.name)) {
      return true;
    }
  }
  return false;
}
function markActiveInRange(resolvedRange, marks) {
  const { $from, $to } = resolvedRange;
  if (rangeHasMarks(resolvedRange, marks)) {
    return true;
  }
  return (0, import_core_helpers2.range)($from.pos, $to.pos).some(
    (value) => positionHasMarks($from.doc.resolve(value), marks)
  );
}
function rangeHasMarks(resolvedRange, marks) {
  var _a;
  const { $from, $to } = resolvedRange;
  const setOfMarks = new Set(((_a = $from.marksAcross($to)) != null ? _a : []).map((mark) => mark.type.name));
  return marks.some((item) => setOfMarks.has(item));
}
function positionHasMarks($pos, marks) {
  const setOfMarks = new Set($pos.marks().map((mark) => mark.type.name));
  return marks.some((item) => setOfMarks.has(item));
}
function isPositionValidForSuggester(suggester, resolvedRange) {
  const { $cursor } = resolvedRange;
  const { validMarks, validNodes, invalidMarks, invalidNodes } = suggester;
  if (!validMarks && !validNodes && (0, import_core_helpers2.isEmptyArray)(invalidMarks) && (0, import_core_helpers2.isEmptyArray)(invalidNodes)) {
    return true;
  }
  if (validMarks && !rangeHasMarks(resolvedRange, validMarks)) {
    return false;
  }
  if (validNodes && !hasParentNode($cursor, validNodes)) {
    return false;
  }
  if (!validMarks && markActiveInRange(resolvedRange, invalidMarks)) {
    return false;
  }
  if (!validNodes && hasParentNode($cursor, invalidNodes)) {
    return false;
  }
  return true;
}
function findFromSuggesters(props) {
  const { suggesters, $pos, selectionEmpty } = props;
  for (const suggester of suggesters) {
    if (suggester.emptySelectionsOnly && !selectionEmpty) {
      continue;
    }
    try {
      const match = findMatch({ suggester, $pos });
      if (!match) {
        continue;
      }
      const resolvedRange = {
        $from: $pos.doc.resolve(match.range.from),
        $to: $pos.doc.resolve(match.range.to),
        $cursor: $pos
      };
      if (isPositionValidForSuggester(suggester, resolvedRange) && suggester.isValidPosition(resolvedRange, match)) {
        return match;
      }
    } catch (e) {
    }
  }
  return;
}
function regexToString(regexOrString) {
  return (0, import_core_helpers2.isRegExp)(regexOrString) ? regexOrString.source : regexOrString;
}
function getRegexPrefix(onlyStartOfLine) {
  return onlyStartOfLine ? "^" : "";
}
function getRegexSupportedCharacters(supportedCharacters, matchOffset) {
  return "(?:".concat(regexToString(supportedCharacters), "){").concat(matchOffset, ",}");
}
function getCharAsRegex(char) {
  return (0, import_core_helpers2.isString)(char) ? new RegExp((0, import_escape_string_regexp.default)(char)) : char;
}
function createRegexFromSuggester(props) {
  const {
    char,
    matchOffset,
    startOfLine,
    supportedCharacters,
    captureChar = true,
    caseInsensitive = false,
    multiline = false,
    unicode = false
  } = props;
  const flags = "g".concat(multiline ? "m" : "").concat(caseInsensitive ? "i" : "").concat(unicode ? "u" : "");
  let charRegex = getCharAsRegex(char).source;
  if (captureChar) {
    charRegex = "(".concat(charRegex, ")");
  }
  return new RegExp(
    "".concat(getRegexPrefix(startOfLine)).concat(charRegex).concat(getRegexSupportedCharacters(
      supportedCharacters,
      matchOffset
    )),
    flags
  );
}
var DEFAULT_SUGGESTER = {
  appendTransaction: false,
  priority: 50,
  ignoredTag: "span",
  matchOffset: 0,
  disableDecorations: false,
  startOfLine: false,
  suggestClassName: "suggest",
  suggestTag: "span",
  supportedCharacters: /\w+/,
  validPrefixCharacters: /^[\s\0]?$/,
  invalidPrefixCharacters: null,
  ignoredClassName: null,
  invalidMarks: [],
  invalidNodes: [],
  validMarks: null,
  validNodes: null,
  isValidPosition: () => true,
  checkNextValidSelection: null,
  emptySelectionsOnly: false,
  caseInsensitive: false,
  multiline: false,
  unicode: false,
  captureChar: true
};
var IGNORE_SUGGEST_META_KEY = "__ignore_prosemirror_suggest_update__";
function getSuggesterWithDefaults(suggester) {
  return __spreadValues(__spreadValues({}, DEFAULT_SUGGESTER), suggester);
}

// src/suggest-state.ts
var _docChanged, _ignoreNextExit, _suggesters, _next, _prev, _handlerMatches, _ignored, _removed, _lastChangeFromAppend;
var _SuggestState = class _SuggestState {
  /**
   * Create the state for the `prosemirror-suggest` plugin.
   *
   * @remarks
   *
   * Each suggester must provide a name value which is globally unique since it
   * acts as the identifier.
   *
   * It is possible to register multiple suggesters with identical `char`
   * properties. The matched suggester is based on the specificity of the
   * `regex` and the order in which they are passed in. Earlier suggesters are
   * prioritized.
   */
  constructor(suggesters) {
    /**
     * True when the doc changed in the most recently applied transaction.
     */
    __privateAdd(this, _docChanged, false);
    /**
     * Whether the next exit should be ignored.
     */
    __privateAdd(this, _ignoreNextExit, false);
    /**
     * The suggesters that have been registered for the suggesters plugin.
     */
    __privateAdd(this, _suggesters);
    /**
     * Keeps track of the current state.
     */
    __privateAdd(this, _next);
    /**
     * Holds onto the previous active state.
     */
    __privateAdd(this, _prev);
    /**
     * The handler matches which are passed into the `onChange` handler.
     */
    __privateAdd(this, _handlerMatches, (0, import_core_helpers3.object)());
    /**
     * Holds a copy of the view
     */
    __publicField(this, "view");
    /**
     * The set of ignored decorations
     */
    __privateAdd(this, _ignored, import_prosemirror_view.DecorationSet.empty);
    /**
     * Lets us know whether the most recent change was to remove a mention.
     */
    __privateAdd(this, _removed, false);
    /**
     * This is true when the last change was caused by a transaction being appended via this plugin.
     */
    __privateAdd(this, _lastChangeFromAppend, false);
    /**
     * Sets the removed property to be true.
     *
     * This is useful when working with marks.
     */
    __publicField(this, "setMarkRemoved", () => {
      __privateSet(this, _removed, true);
    });
    /**
     * Find the next text selection from the current selection.
     */
    __publicField(this, "findNextTextSelection", (selection) => {
      const doc = selection.$from.doc;
      const pos = Math.min(doc.nodeSize - 2, selection.to + 1);
      const $pos = doc.resolve(pos);
      const nextSelection = import_prosemirror_state2.Selection.findFrom($pos, 1, true);
      if (!isTextSelection(nextSelection)) {
        return;
      }
      return nextSelection;
    });
    /**
     * This sets the next exit to not trigger the exit reason inside the
     * `onChange` callback.
     *
     * This can be useful when you trigger a command, that exists the suggestion
     * match and want to prevent further onChanges from occurring for the
     * currently active suggester.
     */
    __publicField(this, "ignoreNextExit", () => {
      __privateSet(this, _ignoreNextExit, true);
    });
    /**
     * Ignores the match specified. Until the match is deleted no more `onChange`
     * handler will be triggered. It will be like the match doesn't exist.
     *
     * @remarks
     *
     * All we need to ignore is the match character. This means that any further
     * matches from the activation character will be ignored.
     */
    __publicField(this, "addIgnored", ({ from, name, specific = false }) => {
      const suggester = __privateGet(this, _suggesters).find((value) => value.name === name);
      if (!suggester) {
        throw new Error("No suggester exists for the name provided: ".concat(name));
      }
      const offset = (0, import_core_helpers3.isString)(suggester.char) ? suggester.char.length : 1;
      const to = from + offset;
      const attributes = suggester.ignoredClassName ? { class: suggester.ignoredClassName } : {};
      const decoration = import_prosemirror_view.Decoration.inline(
        from,
        to,
        __spreadValues({ nodeName: suggester.ignoredTag }, attributes),
        { name, specific, char: suggester.char }
      );
      __privateSet(this, _ignored, __privateGet(this, _ignored).add(this.view.state.doc, [decoration]));
    });
    /**
     * Removes a single match character from the ignored decorations.
     *
     * @remarks
     *
     * After this point event handlers will begin to be called again for the match
     * character.
     */
    __publicField(this, "removeIgnored", ({ from, name }) => {
      const suggester = __privateGet(this, _suggesters).find((value) => value.name === name);
      if (!suggester) {
        throw new Error("No suggester exists for the name provided: ".concat(name));
      }
      const offset = (0, import_core_helpers3.isString)(suggester.char) ? suggester.char.length : 1;
      const decoration = __privateGet(this, _ignored).find(from, from + offset)[0];
      if (!decoration || decoration.spec.name !== name) {
        return;
      }
      __privateSet(this, _ignored, __privateGet(this, _ignored).remove([decoration]));
    });
    /**
     * Removes all the ignored sections of the document. Once this happens
     * suggesters will be able to activate in the previously ignored sections.
     */
    __publicField(this, "clearIgnored", (name) => {
      if (!name) {
        __privateSet(this, _ignored, import_prosemirror_view.DecorationSet.empty);
        return;
      }
      const decorations = __privateGet(this, _ignored).find();
      const decorationsToClear = decorations.filter(({ spec }) => spec.name === name);
      __privateSet(this, _ignored, __privateGet(this, _ignored).remove(decorationsToClear));
    });
    /**
     * A helper method to check is a match exists for the provided suggester name
     * at the provided position.
     */
    __publicField(this, "findMatchAtPosition", ($pos, name) => {
      const suggesters = name ? __privateGet(this, _suggesters).filter((suggester) => suggester.name === name) : __privateGet(this, _suggesters);
      return findFromSuggesters({ suggesters, $pos, docChanged: false, selectionEmpty: true });
    });
    /**
     * Set that the last change was caused by an appended transaction.
     *
     * @internal
     */
    __publicField(this, "setLastChangeFromAppend", () => {
      __privateSet(this, _lastChangeFromAppend, true);
    });
    const mapper = createSuggesterMapper();
    __privateSet(this, _suggesters, suggesters.map(mapper));
    __privateSet(this, _suggesters, (0, import_core_helpers3.sort)(__privateGet(this, _suggesters), (a, b) => b.priority - a.priority));
  }
  /**
   * Create an instance of the SuggestState class.
   */
  static create(suggesters) {
    return new _SuggestState(suggesters);
  }
  /**
   * The set of all decorations.
   */
  get decorationSet() {
    return __privateGet(this, _ignored);
  }
  /**
   * True when the most recent change was to remove a mention.
   *
   * @remarks
   *
   * This is needed because sometimes removing a prosemirror `Mark` has no
   * effect. Hence we need to keep track of whether it's removed and then later
   * in the apply step check that a removal has happened and reset the
   * `handlerMatches` to prevent an infinite loop.
   */
  get removed() {
    return __privateGet(this, _removed);
  }
  /**
   * Returns the current active suggester state field if one exists
   */
  get match() {
    return __privateGet(this, _next) ? __privateGet(this, _next) : __privateGet(this, _prev) && __privateGet(this, _handlerMatches).exit ? __privateGet(this, _prev) : void 0;
  }
  /**
   * Initialize the SuggestState with a view which is stored for use later.
   */
  init(view) {
    this.view = view;
    return this;
  }
  /**
   * Create the props which should be passed into each action handler
   */
  createProps(match) {
    const { name, char } = match.suggester;
    return __spreadValues({
      view: this.view,
      addIgnored: this.addIgnored,
      clearIgnored: this.clearIgnored,
      ignoreNextExit: this.ignoreNextExit,
      setMarkRemoved: this.setMarkRemoved,
      name,
      char
    }, match);
  }
  /**
   * Check whether the exit callback is valid at this time.
   */
  shouldRunExit() {
    if (__privateGet(this, _ignoreNextExit)) {
      __privateSet(this, _ignoreNextExit, false);
      return false;
    }
    return true;
  }
  /**
   * Update all the suggesters with the next valid selection. This is called
   * within the `appendTransaction` ProseMirror method before any of the change
   * handlers are called.
   *
   * @internal
   */
  updateWithNextSelection(tr) {
    var _a, _b, _c;
    const nextSelection = this.findNextTextSelection(tr.selection);
    if (!nextSelection) {
      return;
    }
    for (const suggester of __privateGet(this, _suggesters)) {
      const change = (_a = __privateGet(this, _handlerMatches).change) == null ? void 0 : _a.suggester.name;
      const exit = (_b = __privateGet(this, _handlerMatches).exit) == null ? void 0 : _b.suggester.name;
      (_c = suggester.checkNextValidSelection) == null ? void 0 : _c.call(suggester, nextSelection.$from, tr, { change, exit });
    }
  }
  /**
   * Call the `onChange` handlers.
   *
   * @internal
   */
  changeHandler(tr, appendTransaction) {
    const { change, exit } = __privateGet(this, _handlerMatches);
    const match = this.match;
    if (!change && !exit || !isValidMatch(match)) {
      return;
    }
    const shouldRunExit = appendTransaction === (exit == null ? void 0 : exit.suggester.appendTransaction) && this.shouldRunExit();
    const shouldRunChange = appendTransaction === (change == null ? void 0 : change.suggester.appendTransaction);
    if (!shouldRunExit && !shouldRunChange) {
      return;
    }
    if (change && exit && isJumpReason({ change, exit })) {
      const exitDetails = this.createProps(exit);
      const changeDetails = this.createProps(change);
      const movedForwards = exit.range.from < change.range.from;
      if (movedForwards) {
        shouldRunExit && exit.suggester.onChange(exitDetails, tr);
        shouldRunChange && change.suggester.onChange(changeDetails, tr);
      } else {
        shouldRunExit && exit.suggester.onChange(exitDetails, tr);
        shouldRunChange && change.suggester.onChange(changeDetails, tr);
      }
      if (shouldRunExit) {
        __privateSet(this, _removed, false);
      }
      return;
    }
    if (change && shouldRunChange) {
      change.suggester.onChange(this.createProps(change), tr);
    }
    if (exit && shouldRunExit) {
      exit.suggester.onChange(this.createProps(exit), tr);
      __privateSet(this, _removed, false);
      if (isInvalidSplitReason(exit.exitReason)) {
        __privateSet(this, _handlerMatches, (0, import_core_helpers3.object)());
      }
    }
    return;
  }
  /**
   * Update the current ignored decorations based on the latest changes to the
   * prosemirror document.
   */
  mapIgnoredDecorations(tr) {
    const ignored = __privateGet(this, _ignored).map(tr.mapping, tr.doc);
    const decorations = ignored.find();
    const invalid = decorations.filter(({ from, to, spec }) => {
      const charLength = (0, import_core_helpers3.isString)(spec.char) ? spec.char.length : 1;
      if (to - from !== charLength) {
        return true;
      }
      return false;
    });
    __privateSet(this, _ignored, ignored.remove(invalid));
  }
  /**
   * Checks whether a match should be ignored.
   *
   * TODO add logic here to decide whether to ignore a match based on the active
   * node, or mark.
   */
  shouldIgnoreMatch({ range: range2, suggester: { name } }) {
    const decorations = __privateGet(this, _ignored).find();
    const shouldIgnore = decorations.some(({ spec, from }) => {
      if (from !== range2.from) {
        return false;
      }
      return spec.specific ? spec.name === name : true;
    });
    return shouldIgnore;
  }
  /**
   * Reset the state.
   */
  resetState() {
    __privateSet(this, _handlerMatches, (0, import_core_helpers3.object)());
    __privateSet(this, _next, void 0);
    __privateSet(this, _removed, false);
    __privateSet(this, _lastChangeFromAppend, false);
  }
  /**
   * Update the next state value.
   */
  updateReasons(props) {
    const { $pos, state } = props;
    const docChanged = __privateGet(this, _docChanged);
    const suggesters = __privateGet(this, _suggesters);
    const selectionEmpty = state.selection.empty;
    const match = isTextSelection(state.selection) ? findFromSuggesters({ suggesters, $pos, docChanged, selectionEmpty }) : void 0;
    __privateSet(this, _next, match && this.shouldIgnoreMatch(match) ? void 0 : match);
    __privateSet(this, _handlerMatches, findReason({ next: __privateGet(this, _next), prev: __privateGet(this, _prev), state, $pos }));
  }
  /**
   * Add a new suggest or replace it if it already exists.
   */
  addSuggester(suggester) {
    const previous = __privateGet(this, _suggesters).find((item) => item.name === suggester.name);
    const mapper = createSuggesterMapper();
    if (previous) {
      __privateSet(this, _suggesters, __privateGet(this, _suggesters).map(
        (item) => item === previous ? mapper(suggester) : item
      ));
    } else {
      const suggesters = [...__privateGet(this, _suggesters), mapper(suggester)];
      __privateSet(this, _suggesters, (0, import_core_helpers3.sort)(suggesters, (a, b) => b.priority - a.priority));
    }
    return () => this.removeSuggester(suggester.name);
  }
  /**
   * Remove a suggester if it exists.
   */
  removeSuggester(suggester) {
    const name = (0, import_core_helpers3.isString)(suggester) ? suggester : suggester.name;
    __privateSet(this, _suggesters, __privateGet(this, _suggesters).filter((item) => item.name !== name));
    this.clearIgnored(name);
  }
  toJSON() {
    return this.match;
  }
  /**
   * Applies updates to the state to be used within the plugins apply method.
   *
   * @param - params
   */
  apply(props) {
    const { exit, change } = __privateGet(this, _handlerMatches);
    if (__privateGet(this, _lastChangeFromAppend)) {
      __privateSet(this, _lastChangeFromAppend, false);
      if (!(exit == null ? void 0 : exit.suggester.appendTransaction) && !(change == null ? void 0 : change.suggester.appendTransaction)) {
        return this;
      }
    }
    const { tr, state } = props;
    const transactionHasChanged = tr.docChanged || tr.selectionSet;
    const shouldIgnoreUpdate = tr.getMeta(IGNORE_SUGGEST_META_KEY);
    if (shouldIgnoreUpdate || !transactionHasChanged && !__privateGet(this, _removed)) {
      return this;
    }
    __privateSet(this, _docChanged, tr.docChanged);
    this.mapIgnoredDecorations(tr);
    if (exit) {
      this.resetState();
    }
    __privateSet(this, _prev, __privateGet(this, _next));
    this.updateReasons({ $pos: tr.selection.$from, state });
    return this;
  }
  /**
   * Handle the decorations which wrap the mention while it is active and not
   * yet complete.
   */
  createDecorations(state) {
    const match = this.match;
    if (!isValidMatch(match)) {
      return __privateGet(this, _ignored);
    }
    const { disableDecorations } = match.suggester;
    const shouldSkip = (0, import_core_helpers3.isFunction)(disableDecorations) ? disableDecorations(state, match) : disableDecorations;
    if (shouldSkip) {
      return __privateGet(this, _ignored);
    }
    const { range: range2, suggester } = match;
    const { name, suggestTag, suggestClassName } = suggester;
    const { from, to } = range2;
    return this.shouldIgnoreMatch(match) ? __privateGet(this, _ignored) : __privateGet(this, _ignored).add(state.doc, [
      import_prosemirror_view.Decoration.inline(
        from,
        to,
        {
          nodeName: suggestTag,
          class: name ? "".concat(suggestClassName, " suggest-").concat(name) : suggestClassName
        },
        { name }
      )
    ]);
  }
};
_docChanged = new WeakMap();
_ignoreNextExit = new WeakMap();
_suggesters = new WeakMap();
_next = new WeakMap();
_prev = new WeakMap();
_handlerMatches = new WeakMap();
_ignored = new WeakMap();
_removed = new WeakMap();
_lastChangeFromAppend = new WeakMap();
var SuggestState = _SuggestState;
function createSuggesterMapper() {
  const names = /* @__PURE__ */ new Set();
  return (suggester) => {
    if (names.has(suggester.name)) {
      throw new Error(
        "A suggester already exists with the name '".concat(suggester.name, "'. The name provided must be unique.")
      );
    }
    const suggesterWithDefaults = __spreadValues(__spreadValues({}, DEFAULT_SUGGESTER), suggester);
    names.add(suggester.name);
    return suggesterWithDefaults;
  };
}
var suggestPluginKey = new import_prosemirror_state2.PluginKey("suggest");

// src/suggest-plugin.ts
function getSuggestPluginState(state) {
  return suggestPluginKey.getState(state);
}
function addSuggester(state, suggester) {
  return getSuggestPluginState(state).addSuggester(suggester);
}
function ignoreUpdateForSuggest(tr) {
  tr.setMeta(IGNORE_SUGGEST_META_KEY, true);
}
function removeSuggester(state, suggester) {
  return getSuggestPluginState(state).removeSuggester(suggester);
}
function suggest(...suggesters) {
  const pluginState = SuggestState.create(suggesters);
  return new import_prosemirror_state3.Plugin({
    key: suggestPluginKey,
    // Handle the plugin view
    view: (view) => {
      pluginState.init(view);
      return {
        update: (view2) => pluginState.changeHandler(view2.state.tr, false)
      };
    },
    state: {
      // Initialize the state
      init: () => pluginState,
      // Apply changes to the state
      apply: (tr, _pluginState, _oldState, state) => pluginState.apply({ tr, state })
    },
    /** Append a transaction via the onChange handlers */
    appendTransaction: (_, __, state) => {
      const tr = state.tr;
      pluginState.updateWithNextSelection(tr);
      pluginState.changeHandler(tr, true);
      if (tr.docChanged || tr.steps.length > 0 || tr.selectionSet || tr.storedMarksSet) {
        pluginState.setLastChangeFromAppend();
        return tr;
      }
      return null;
    },
    props: {
      // Sets up a decoration (styling options) on the currently active
      // decoration
      decorations: (state) => pluginState.createDecorations(state)
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChangeReason,
  DEFAULT_SUGGESTER,
  ExitReason,
  IGNORE_SUGGEST_META_KEY,
  addSuggester,
  createRegexFromSuggester,
  findFromSuggesters,
  getSuggestPluginState,
  getSuggesterWithDefaults,
  ignoreUpdateForSuggest,
  isChangeReason,
  isExitReason,
  isInvalidSplitReason,
  isJumpReason,
  isRemovedReason,
  isSelectionChangeReason,
  isSelectionExitReason,
  isSplitReason,
  isValidMatch,
  markActiveInRange,
  positionHasMarks,
  rangeHasMarks,
  removeSuggester,
  selectionOutsideMatch,
  suggest
});
