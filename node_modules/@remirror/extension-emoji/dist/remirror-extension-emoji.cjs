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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  EmojiExtension: () => EmojiExtension
});
module.exports = __toCommonJS(src_exports);

// src/emoji-extension.ts
var import_emoji = __toESM(require("emojibase-regex/emoji.js"), 1);
var import_emoticon = __toESM(require("emojibase-regex/emoticon.js"), 1);
var import_shortcode = __toESM(require("emojibase-regex/shortcode.js"), 1);
var import_escape_string_regexp = __toESM(require("escape-string-regexp"), 1);
var import_core2 = require("@remirror/core");
var import_suggest = require("@remirror/pm/suggest");
var import_theme = require("@remirror/theme");

// src/emoji-utils.ts
var _svgmoji = __toESM(require("@ocavue/svgmoji-cjs"), 1);
var import_core = require("@remirror/core");
var svgmoji = (0, import_core.defaultImport)(_svgmoji);
var { Blobmoji, Notomoji, Openmoji, Twemoji } = svgmoji;
var DefaultMoji = {
  /**
   * The google emoji library.
   */
  noto: Notomoji,
  /**
   * The openmoji library.
   */
  openmoji: Openmoji,
  /**
   * The Twitter emoji library,
   */
  twemoji: Twemoji,
  /**
   * The blob emoji library previously developed by google. Now a community project.
   */
  blob: Blobmoji
};
var EMOJI_DATA_ATTRIBUTE = "data-remirror-emoji";

// src/emoji-extension.ts
var _handleEnterKey_dec, _suggestEmoji_dec, _addEmoji_dec, _a, _EmojiExtension_decorators, _init;
_EmojiExtension_decorators = [(0, import_core2.extension)({
  defaultOptions: {
    plainText: false,
    data: [],
    identifier: "emoji",
    fallback: ":red_question_mark:",
    moji: "noto",
    suggestionCharacter: ":",
    supportedCharacters: import_suggest.DEFAULT_SUGGESTER.supportedCharacters
  },
  staticKeys: ["plainText"],
  handlerKeys: ["suggestEmoji"]
})];
var EmojiExtension = class extends (_a = import_core2.NodeExtension, _addEmoji_dec = [(0, import_core2.command)()], _suggestEmoji_dec = [(0, import_core2.command)()], _handleEnterKey_dec = [(0, import_core2.keyBinding)({ shortcut: "Enter" })], _a) {
  constructor() {
    super(...arguments);
    __runInitializers(_init, 5, this);
    __publicField(this, "_moji");
  }
  /**
   * The name is dynamically generated based on the passed in type.
   */
  get name() {
    return "emoji";
  }
  get moji() {
    var _a2;
    return (_a2 = this._moji) != null ? _a2 : this._moji = (0, import_core2.isString)(this.options.moji) ? new DefaultMoji[this.options.moji]({
      data: this.options.data,
      type: "all",
      fallback: this.options.fallback
    }) : this.options.moji;
  }
  createTags() {
    return [import_core2.ExtensionTag.InlineNode];
  }
  createNodeSpec(extra, override) {
    var _a2;
    return __spreadProps(__spreadValues({
      selectable: true,
      draggable: false
    }, override), {
      inline: true,
      atom: true,
      attrs: __spreadProps(__spreadValues({}, extra.defaults()), { code: {} }),
      parseDOM: [
        {
          tag: "span[".concat(EMOJI_DATA_ATTRIBUTE),
          getAttrs: (node) => {
            if (!(0, import_core2.isElementDomNode)(node)) {
              return null;
            }
            const code = node.getAttribute(EMOJI_DATA_ATTRIBUTE);
            return __spreadProps(__spreadValues({}, extra.parse(node)), { code });
          }
        },
        ...(_a2 = override.parseDOM) != null ? _a2 : []
      ],
      toDOM: (node) => {
        var _a3;
        const { code } = (0, import_core2.omitExtraAttributes)(node.attrs, extra);
        const emoji = (_a3 = this.moji.find(code)) != null ? _a3 : this.moji.fallback;
        return [
          "span",
          {
            class: import_theme.ExtensionEmojiTheme.EMOJI_WRAPPER,
            [EMOJI_DATA_ATTRIBUTE]: emoji[this.options.identifier]
          },
          [
            "img",
            {
              role: "presentation",
              class: import_theme.ExtensionEmojiTheme.EMOJI_IMAGE,
              "aria-label": emoji.annotation,
              alt: emoji.annotation,
              // TODO use the emoji rather than the code once `svgmoji` supports it.
              src: this.moji.url(code)
            }
          ]
          // ['span', { style: 'display: inline-block; text-indent: -99999px' }, emoji.emoji],
        ];
      }
    });
  }
  /**
   * Manage input rules for emoticons.
   */
  createInputRules() {
    if (this.options.plainText) {
      return [
        // Replace emoticons
        (0, import_core2.plainInputRule)({
          regexp: new RegExp("(".concat(import_emoticon.default.source, ")[\\s]$")),
          transformMatch: ([full, partial]) => {
            if (!full || !partial) {
              return null;
            }
            const emoji = this.moji.find(partial);
            return emoji ? full.replace(partial, emoji.emoji) : null;
          }
        }),
        // Replace matching shortcodes
        (0, import_core2.plainInputRule)({
          regexp: new RegExp("(".concat(import_shortcode.default.source, ")$")),
          transformMatch: ([, match]) => {
            if (!match) {
              return null;
            }
            const emoji = this.moji.find(match);
            return emoji ? emoji.emoji : null;
          }
        })
      ];
    }
    const shouldSkip = ({ captureGroup }) => (
      // eslint-disable-next-line unicorn/prefer-array-some
      !captureGroup || !this.moji.find(captureGroup)
    );
    const getAttributes = ([, match]) => {
      if (!match) {
        return;
      }
      const emoji = this.moji.find(match);
      return emoji ? { code: emoji[this.options.identifier] } : void 0;
    };
    const type = this.type;
    return [
      // Replace emoticons
      (0, import_core2.nodeInputRule)({
        type,
        shouldSkip,
        getAttributes,
        regexp: new RegExp("(".concat(import_emoticon.default.source, ")[\\s]$")),
        beforeDispatch: ({ tr }) => {
          tr.insertText(" ");
        }
      }),
      // Replace matching shortcodes
      (0, import_core2.nodeInputRule)({
        type,
        shouldSkip,
        getAttributes,
        regexp: new RegExp("(".concat(import_shortcode.default.source, ")$"))
      }),
      // Replace matching shortcodes
      (0, import_core2.nodeInputRule)({
        type,
        shouldSkip,
        getAttributes,
        regexp: new RegExp("(".concat(import_emoji.default.source, ")"))
      })
    ];
  }
  addEmoji(identifier, options = {}) {
    return (props) => {
      var _a2;
      const { dispatch, tr } = props;
      const emoji = this.moji.find(identifier);
      if (!emoji) {
        return false;
      }
      if (!this.options.plainText) {
        return this.store.commands.replaceText.original({
          type: this.type,
          attrs: { code: emoji[this.options.identifier] },
          selection: options.selection
        })(props);
      }
      const { from, to } = (0, import_core2.getTextSelection)((_a2 = options.selection) != null ? _a2 : tr.selection, tr.doc);
      dispatch == null ? void 0 : dispatch(tr.insertText(emoji.emoji, from, to));
      return true;
    };
  }
  suggestEmoji(selection) {
    return ({ tr, dispatch }) => {
      const { from, to } = (0, import_core2.getTextSelection)(selection != null ? selection : tr.selection, tr.doc);
      const text = this.store.helpers.getTextBetween(from - 1, to, tr.doc);
      if (text.includes(this.options.suggestionCharacter)) {
        return false;
      }
      dispatch == null ? void 0 : dispatch(tr.insertText(this.options.suggestionCharacter, from, to));
      return true;
    };
  }
  handleEnterKey({ tr, next }) {
    const { $from, empty } = tr.selection;
    if (!empty) {
      return next();
    }
    const textBeforeCursor = $from.parent.textBetween(
      Math.max(0, $from.parentOffset - 5),
      $from.parentOffset,
      void 0,
      import_core2.LEAF_NODE_REPLACING_CHARACTER
    );
    const match = textBeforeCursor.match(import_emoticon.default);
    if (match) {
      const emoticon = (0, import_core2.getMatchString)(match);
      const selection = {
        from: $from.pos - emoticon.length,
        to: $from.pos
      };
      this.store.chain(tr).addEmoji(emoticon, { selection }).tr();
    }
    return next();
  }
  /**
   * Emojis can be selected via `:` the colon key (by default). This sets the
   * configuration using `prosemirror-suggest`
   */
  createSuggesters() {
    return {
      disableDecorations: true,
      invalidPrefixCharacters: "".concat((0, import_escape_string_regexp.default)(this.options.suggestionCharacter), "|\\w"),
      supportedCharacters: this.options.supportedCharacters,
      char: this.options.suggestionCharacter,
      name: this.name,
      suggestTag: "span",
      onChange: (props) => {
        this.options.suggestEmoji({
          moji: this.moji,
          query: props.query.full,
          text: props.text.full,
          range: props.range,
          exit: !!props.exitReason,
          change: !!props.changeReason,
          apply: (code) => {
            this.store.commands.addEmoji(code, { selection: props.range });
          }
        });
      }
    };
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 1, "addEmoji", _addEmoji_dec, EmojiExtension);
__decorateElement(_init, 1, "suggestEmoji", _suggestEmoji_dec, EmojiExtension);
__decorateElement(_init, 1, "handleEnterKey", _handleEnterKey_dec, EmojiExtension);
EmojiExtension = __decorateElement(_init, 0, "EmojiExtension", _EmojiExtension_decorators, EmojiExtension);
__runInitializers(_init, 1, EmojiExtension);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EmojiExtension
});
