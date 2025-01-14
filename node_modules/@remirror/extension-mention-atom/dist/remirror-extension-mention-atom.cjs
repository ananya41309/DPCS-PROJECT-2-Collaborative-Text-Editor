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
  MentionAtomExtension: () => MentionAtomExtension
});
module.exports = __toCommonJS(src_exports);

// src/mention-atom-extension.ts
var import_core = require("@remirror/core");
var import_suggest = require("@remirror/pm/suggest");
var import_theme = require("@remirror/theme");
var _createMentionAtom_dec, _a, _MentionAtomExtension_decorators, _init;
_MentionAtomExtension_decorators = [(0, import_core.extension)({
  defaultOptions: {
    selectable: true,
    draggable: false,
    mentionTag: "span",
    matchers: [],
    appendText: " ",
    suggestTag: "span",
    disableDecorations: false,
    invalidMarks: [],
    invalidNodes: [],
    isValidPosition: () => true,
    validMarks: null,
    validNodes: null
  },
  handlerKeyOptions: { onClick: { earlyReturnValue: true } },
  handlerKeys: ["onChange", "onClick"],
  staticKeys: ["selectable", "draggable", "mentionTag", "matchers"]
})];
var MentionAtomExtension = class extends (_a = import_core.NodeExtension, _createMentionAtom_dec = [(0, import_core.command)()], _a) {
  constructor() {
    super(...arguments);
    __runInitializers(_init, 5, this);
  }
  get name() {
    return "mentionAtom";
  }
  createTags() {
    return [import_core.ExtensionTag.InlineNode, import_core.ExtensionTag.Behavior];
  }
  createNodeSpec(extra, override) {
    var _a2;
    const dataAttributeId = "data-mention-atom-id";
    const dataAttributeName = "data-mention-atom-name";
    return __spreadProps(__spreadValues({
      inline: true,
      marks: "",
      selectable: this.options.selectable,
      draggable: this.options.draggable,
      atom: true,
      leafText: (node) => node.attrs.label
    }, override), {
      attrs: __spreadProps(__spreadValues({}, extra.defaults()), {
        id: {},
        label: {},
        name: {}
      }),
      parseDOM: [
        ...this.options.matchers.map((matcher) => {
          var _a3;
          return {
            tag: "".concat((_a3 = matcher.mentionTag) != null ? _a3 : this.options.mentionTag, "[").concat(dataAttributeId, "]"),
            getAttrs: (node) => {
              if (!(0, import_core.isElementDomNode)(node)) {
                return false;
              }
              const id = node.getAttribute(dataAttributeId);
              const name = node.getAttribute(dataAttributeName);
              const label = node.textContent;
              return __spreadProps(__spreadValues({}, extra.parse(node)), { id, label, name });
            }
          };
        }),
        ...(_a2 = override.parseDOM) != null ? _a2 : []
      ],
      toDOM: (node) => {
        var _a3, _b;
        const { label, id, name } = (0, import_core.omitExtraAttributes)(
          node.attrs,
          extra
        );
        const matcher = this.options.matchers.find((matcher2) => matcher2.name === name);
        const mentionClassName = matcher ? (_a3 = matcher.mentionClassName) != null ? _a3 : DEFAULT_MATCHER.mentionClassName : DEFAULT_MATCHER.mentionClassName;
        const attrs = __spreadProps(__spreadValues({}, extra.dom(node)), {
          class: name ? "".concat(mentionClassName, " ").concat(mentionClassName, "-").concat((0, import_core.kebabCase)(name)) : mentionClassName,
          [dataAttributeId]: id,
          [dataAttributeName]: name
        });
        return [(_b = matcher == null ? void 0 : matcher.mentionTag) != null ? _b : this.options.mentionTag, attrs, label];
      }
    });
  }
  createMentionAtom(details, attrs) {
    const { name, range } = details;
    const validNameExists = this.options.matchers.some((matcher) => name === matcher.name);
    (0, import_core.invariant)(validNameExists, {
      code: import_core.ErrorConstant.EXTENSION,
      message: "Invalid name '".concat(name, "' provided when creating a mention. Please ensure you only use names that were configured on the matchers when creating the `MentionAtomExtension`.")
    });
    const _a2 = attrs, { appendText, replacementType } = _a2, rest = __objRest(_a2, ["appendText", "replacementType"]);
    const { from, to } = {
      from: range.from,
      to: replacementType === "partial" ? range.cursor : range.to
    };
    return (0, import_core.replaceText)({
      type: this.type,
      appendText: getAppendText(appendText, this.options.appendText),
      attrs: __spreadValues({ name }, rest),
      selection: { from, to }
    });
  }
  /**
   * Track click events passed through to the editor.
   */
  createEventHandlers() {
    return {
      click: (event, clickState) => {
        if (!clickState.direct) {
          return;
        }
        const nodeWithPosition = clickState.getNode(this.type);
        if (!nodeWithPosition) {
          return;
        }
        return this.options.onClick(event, nodeWithPosition);
      }
    };
  }
  createSuggesters() {
    const options = (0, import_core.pick)(this.options, [
      "invalidMarks",
      "invalidNodes",
      "isValidPosition",
      "validMarks",
      "validNodes",
      "suggestTag",
      "disableDecorations",
      "appendText"
    ]);
    return this.options.matchers.map((matcher) => __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, DEFAULT_MATCHER), options), matcher), {
      onChange: (props) => {
        const { name, range } = props;
        const { createMentionAtom } = this.store.commands;
        function command2(attrs) {
          createMentionAtom({ name, range }, attrs);
        }
        this.options.onChange(props, command2);
      }
    }));
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 1, "createMentionAtom", _createMentionAtom_dec, MentionAtomExtension);
MentionAtomExtension = __decorateElement(_init, 0, "MentionAtomExtension", _MentionAtomExtension_decorators, MentionAtomExtension);
__runInitializers(_init, 1, MentionAtomExtension);
var DEFAULT_MATCHER = __spreadProps(__spreadValues({}, (0, import_core.pick)(import_suggest.DEFAULT_SUGGESTER, [
  "startOfLine",
  "supportedCharacters",
  "validPrefixCharacters",
  "invalidPrefixCharacters"
])), {
  appendText: "",
  matchOffset: 1,
  suggestClassName: import_theme.ExtensionMentionAtomTheme.SUGGEST_ATOM,
  mentionClassName: import_theme.ExtensionMentionAtomTheme.MENTION_ATOM
});
function getAppendText(preferred, fallback) {
  if ((0, import_core.isString)(preferred)) {
    return preferred;
  }
  if ((0, import_core.isString)(fallback)) {
    return fallback;
  }
  return DEFAULT_MATCHER.appendText;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MentionAtomExtension
});
