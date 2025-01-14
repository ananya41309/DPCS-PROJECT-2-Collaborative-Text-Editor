"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
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
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decoratorStart = (base) => {
  var _a2;
  return [, , , __create((_a2 = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a2 : null)];
};
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  MentionExtension: () => MentionExtension
});
module.exports = __toCommonJS(src_exports);

// src/mention-extension.ts
var import_core = require("@remirror/core");
var import_suggest = require("@remirror/pm/suggest");
var _removeMention_dec, _updateMention_dec, _createMention_dec, _mentionExitHandler_dec, _a, _MentionExtension_decorators, _init;
_MentionExtension_decorators = [(0, import_core.extension)({
  defaultOptions: {
    mentionTag: "a",
    matchers: [],
    appendText: "",
    suggestTag: "a",
    disableDecorations: false,
    invalidMarks: [],
    invalidNodes: [],
    isValidPosition: () => true,
    validMarks: null,
    validNodes: null,
    isMentionValid: isMentionValidDefault
  },
  handlerKeyOptions: { onClick: { earlyReturnValue: true } },
  handlerKeys: ["onChange", "onClick"],
  staticKeys: ["mentionTag", "matchers"]
})];
var MentionExtension = class extends (_a = import_core.MarkExtension, _mentionExitHandler_dec = [(0, import_core.command)()], _createMention_dec = [(0, import_core.command)()], _updateMention_dec = [(0, import_core.command)()], _removeMention_dec = [(0, import_core.command)()], _a) {
  constructor() {
    super(...arguments);
    __runInitializers(_init, 5, this);
  }
  get name() {
    return "mention";
  }
  /**
   * Tag this as a behavior influencing mark.
   */
  createTags() {
    return [import_core.ExtensionTag.Behavior, import_core.ExtensionTag.ExcludeInputRules];
  }
  createMarkSpec(extra, override) {
    var _a2;
    const dataAttributeId = "data-mention-id";
    const dataAttributeName = "data-mention-name";
    return __spreadProps(__spreadValues({
      excludes: "_",
      inclusive: false
    }, override), {
      attrs: __spreadProps(__spreadValues({}, extra.defaults()), {
        id: {},
        label: {},
        name: {}
      }),
      parseDOM: [
        {
          tag: "".concat(this.options.mentionTag, "[").concat(dataAttributeId, "]"),
          getAttrs: (element) => {
            if (!(0, import_core.isElementDomNode)(element)) {
              return false;
            }
            const id = element.getAttribute(dataAttributeId);
            const name = element.getAttribute(dataAttributeName);
            const label = element.textContent;
            return __spreadProps(__spreadValues({}, extra.parse(element)), { id, label, name });
          }
        },
        ...(_a2 = override.parseDOM) != null ? _a2 : []
      ],
      toDOM: (mark) => {
        var _a3;
        const { id, name } = (0, import_core.omitExtraAttributes)(mark.attrs, extra);
        const matcher = this.options.matchers.find((matcher2) => matcher2.name === name);
        const mentionClassName = matcher ? (_a3 = matcher.mentionClassName) != null ? _a3 : DEFAULT_MATCHER.mentionClassName : DEFAULT_MATCHER.mentionClassName;
        return [
          this.options.mentionTag,
          __spreadProps(__spreadValues({}, extra.dom(mark)), {
            class: name ? "".concat(mentionClassName, " ").concat(mentionClassName, "-").concat(name) : mentionClassName,
            [dataAttributeId]: id,
            [dataAttributeName]: name
          }),
          0
        ];
      }
    });
  }
  onCreate() {
    this.store.getExtension(import_core.InputRulesExtension).addHandler("shouldSkipInputRule", this.shouldSkipInputRule.bind(this));
  }
  /**
   * Track click events passed through to the editor.
   */
  createEventHandlers() {
    return {
      clickMark: (event, clickState) => {
        const markRange = clickState.getMark(this.type);
        if (!markRange) {
          return;
        }
        return this.options.onClick(event, markRange);
      }
    };
  }
  /**
   * Manages the paste rules for the mention.
   *
   * It creates regex tests for each of the configured matchers.
   */
  createPasteRules() {
    return this.options.matchers.map((matcher) => {
      const { startOfLine, char, supportedCharacters, name, matchOffset } = __spreadValues(__spreadValues({}, DEFAULT_MATCHER), matcher);
      const regexp = new RegExp(
        "(".concat((0, import_suggest.createRegexFromSuggester)({
          char,
          matchOffset,
          startOfLine,
          supportedCharacters,
          captureChar: true,
          caseInsensitive: false,
          multiline: false
        }).source, ")"),
        "g"
      );
      return {
        type: "mark",
        regexp,
        markType: this.type,
        getAttributes: (string) => {
          var _a2;
          return {
            id: (0, import_core.getMatchString)(string.slice((_a2 = string[2]) == null ? void 0 : _a2.length, string.length)),
            label: (0, import_core.getMatchString)(string),
            name
          };
        }
      };
    });
  }
  /**
   * Create the suggesters from the matchers that were passed into the editor.
   */
  createSuggesters() {
    let cachedRange;
    const options = (0, import_core.pick)(this.options, [
      "invalidMarks",
      "invalidNodes",
      "isValidPosition",
      "validMarks",
      "validNodes",
      "suggestTag",
      "disableDecorations"
    ]);
    return this.options.matchers.map((matcher) => __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, DEFAULT_MATCHER), options), matcher), {
      onChange: (props) => {
        const command2 = (attrs = {}) => {
          this.mentionExitHandler(props, attrs)(this.store.helpers.getCommandProp());
        };
        this.options.onChange(
          __spreadProps(__spreadValues({}, props), { defaultAppendTextValue: this.options.appendText }),
          command2
        );
      },
      checkNextValidSelection: ($pos, tr) => {
        const range = (0, import_core.getMarkRange)($pos, this.type);
        if (!range || range.from === (cachedRange == null ? void 0 : cachedRange.from) && range.to === (cachedRange == null ? void 0 : cachedRange.to)) {
          return;
        }
        const text = $pos.doc.textBetween(range.from, range.to, import_core.LEAF_NODE_REPLACING_CHARACTER, " ");
        const isValidMention = isValidMentionAttributes(range.mark.attrs) && this.options.isMentionValid(range.mark.attrs, text);
        if (isValidMention) {
          return;
        }
        cachedRange = range;
        return this.store.chain(tr).removeMention({ range }).tr();
      }
    }));
  }
  mentionExitHandler(handler, attrs = {}) {
    return (props) => {
      var _a2;
      const reason = (_a2 = handler.exitReason) != null ? _a2 : handler.changeReason;
      const isInvalid = (0, import_suggest.isInvalidSplitReason)(reason);
      const isRemoved = (0, import_suggest.isRemovedReason)(reason);
      if (isInvalid || isRemoved) {
        handler.setMarkRemoved();
        try {
          return isInvalid && this.removeMention({ range: handler.range })(props);
        } catch (e) {
          return true;
        }
      }
      const { tr } = props;
      const { range, text, query, name } = handler;
      const { from, to } = range;
      const isActive = (0, import_core.isMarkActive)({ from, to, type: this.type, trState: tr });
      const command2 = isActive ? this.updateMention.bind(this) : this.createMention.bind(this);
      const _b = attrs, {
        replacementType = (0, import_suggest.isSplitReason)(reason) ? "partial" : "full",
        id = query[replacementType],
        label = text[replacementType],
        appendText = this.options.appendText
      } = _b, rest = __objRest(_b, [
        "replacementType",
        "id",
        "label",
        "appendText"
      ]);
      const keepSelection = (0, import_suggest.isSelectionExitReason)(reason);
      return command2(__spreadValues({
        name,
        id,
        label,
        appendText,
        replacementType,
        range,
        keepSelection
      }, rest))(props);
    };
  }
  createMention(config) {
    return (props) => this.createMentionFactory(config, false)(props);
  }
  updateMention(config) {
    return (props) => this.createMentionFactory(config, true)(props);
  }
  removeMention({ range } = {}) {
    const value = (0, import_core.removeMark)({ type: this.type, expand: true, range });
    return value;
  }
  /**
   * The factory method for mention commands to update and create new mentions.
   */
  createMentionFactory(config, shouldUpdate) {
    (0, import_core.invariant)(isValidMentionAttributes(config), {
      code: import_core.ErrorConstant.EXTENSION,
      message: "Invalid configuration attributes passed to the MentionExtension command."
    });
    const _a2 = config, { range, appendText, replacementType, keepSelection, name } = _a2, attributes = __objRest(_a2, ["range", "appendText", "replacementType", "keepSelection", "name"]);
    const allowedNames = this.options.matchers.map(({ name: name2 }) => name2);
    const matcher = getMatcher(name, this.options.matchers);
    (0, import_core.invariant)(allowedNames.includes(name) && matcher, {
      code: import_core.ErrorConstant.EXTENSION,
      message: "The name '".concat(name, "' specified for this command is invalid. Please choose from: ").concat(JSON.stringify(
        allowedNames
      ), ".")
    });
    return (props) => {
      var _a3, _b, _c, _d;
      const { tr } = props;
      const { from, to } = {
        from: (_a3 = range == null ? void 0 : range.from) != null ? _a3 : tr.selection.from,
        to: (_b = range == null ? void 0 : range.cursor) != null ? _b : tr.selection.to
      };
      if (shouldUpdate) {
        let { oldFrom, oldTo } = { oldFrom: from, oldTo: range ? range.to : to };
        const $oldTo = tr.doc.resolve(oldTo);
        ({ from: oldFrom, to: oldTo } = (_c = (0, import_core.getMarkRange)($oldTo, this.type)) != null ? _c : {
          from: oldFrom,
          to: oldTo
        });
        tr.removeMark(oldFrom, oldTo, this.type).setMeta("addToHistory", false);
        const $newTo = tr.selection.$from;
        const { from: newFrom, to: newTo } = (_d = (0, import_core.getMarkRange)($newTo, this.type)) != null ? _d : {
          from: $newTo.pos,
          to: $newTo.pos
        };
        tr.removeMark(newFrom, newTo, this.type).setMeta("addToHistory", false);
      }
      return (0, import_core.replaceText)({
        keepSelection,
        type: this.type,
        attrs: __spreadProps(__spreadValues({}, attributes), { name }),
        appendText: getAppendText(appendText, matcher.appendText),
        range: range ? { from, to: replacementType === "full" ? range.to || to : to } : void 0,
        content: attributes.label
      })(props);
    };
  }
  shouldSkipInputRule(props) {
    const { ruleType, state, end, start } = props;
    if (ruleType === "node") {
      return false;
    }
    if (
      // Check if the mark for this mention is active anywhere in the captured
      // input rule group.
      (0, import_core.isMarkActive)({ trState: state, type: this.type, from: start, to: end }) || // Check whether the suggester is active and it's name is one of the
      // registered matchers.
      this.isMatcherActive(start, end)
    ) {
      return true;
    }
    return false;
  }
  /**
   * Check whether the mark is active within the provided start and end range.
   */
  isMatcherActive(start, end) {
    var _a2;
    const suggestState = this.store.helpers.getSuggestState();
    const names = new Set(this.options.matchers.map(({ name }) => name));
    const activeName = (_a2 = suggestState.match) == null ? void 0 : _a2.suggester.name;
    return this.options.matchers.some((matcher) => activeName === matcher.name) || suggestState.decorationSet.find(start, end, ({ name }) => names.has(name)).length > 0;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 1, "mentionExitHandler", _mentionExitHandler_dec, MentionExtension);
__decorateElement(_init, 1, "createMention", _createMention_dec, MentionExtension);
__decorateElement(_init, 1, "updateMention", _updateMention_dec, MentionExtension);
__decorateElement(_init, 1, "removeMention", _removeMention_dec, MentionExtension);
MentionExtension = __decorateElement(_init, 0, "MentionExtension", _MentionExtension_decorators, MentionExtension);
__runInitializers(_init, 1, MentionExtension);
var DEFAULT_MATCHER = __spreadProps(__spreadValues({}, (0, import_core.pick)(import_suggest.DEFAULT_SUGGESTER, [
  "startOfLine",
  "supportedCharacters",
  "validPrefixCharacters",
  "invalidPrefixCharacters",
  "suggestClassName"
])), {
  appendText: "",
  matchOffset: 1,
  mentionClassName: "mention"
});
function isValidMentionAttributes(attributes) {
  return !!(attributes && (0, import_core.isPlainObject)(attributes) && attributes.id && (0, import_core.isString)(attributes.id) && attributes.label && (0, import_core.isString)(attributes.label) && attributes.name && (0, import_core.isString)(attributes.name));
}
function getMatcher(name, matchers) {
  const matcher = matchers.find((matcher2) => matcher2.name === name);
  return matcher ? __spreadValues(__spreadValues({}, DEFAULT_MATCHER), matcher) : void 0;
}
function getAppendText(preferred, fallback) {
  if ((0, import_core.isString)(preferred)) {
    return preferred;
  }
  if ((0, import_core.isString)(fallback)) {
    return fallback;
  }
  return DEFAULT_MATCHER.appendText;
}
function isMentionValidDefault(attrs, text) {
  return attrs.label === text;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MentionExtension
});
