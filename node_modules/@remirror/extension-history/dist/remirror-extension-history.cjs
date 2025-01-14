"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
  HistoryExtension: () => HistoryExtension
});
module.exports = __toCommonJS(src_exports);

// src/history-extension.ts
var import_core = require("@remirror/core");
var import_messages = require("@remirror/messages");
var import_history = require("@remirror/pm/history");
var _redoDepth_dec, _undoDepth_dec, _redo_dec, _undo_dec, _redoShortcut_dec, _undoShortcut_dec, _a, _HistoryExtension_decorators, _init;
_HistoryExtension_decorators = [(0, import_core.extension)({
  defaultOptions: {
    depth: 100,
    newGroupDelay: 500,
    getDispatch: void 0,
    getState: void 0
  },
  staticKeys: ["depth", "newGroupDelay"],
  handlerKeys: ["onUndo", "onRedo"]
})];
var HistoryExtension = class extends (_a = import_core.PlainExtension, _undoShortcut_dec = [(0, import_core.keyBinding)({ shortcut: import_core.NamedShortcut.Undo, command: "undo" })], _redoShortcut_dec = [(0, import_core.keyBinding)({ shortcut: import_core.NamedShortcut.Redo, command: "redo" })], _undo_dec = [(0, import_core.command)({
  disableChaining: true,
  description: ({ t }) => t(import_messages.ExtensionHistoryMessages.UNDO_DESCRIPTION),
  label: ({ t }) => t(import_messages.ExtensionHistoryMessages.UNDO_LABEL),
  icon: "arrowGoBackFill"
})], _redo_dec = [(0, import_core.command)({
  disableChaining: true,
  description: ({ t }) => t(import_messages.ExtensionHistoryMessages.REDO_DESCRIPTION),
  label: ({ t }) => t(import_messages.ExtensionHistoryMessages.REDO_LABEL),
  icon: "arrowGoForwardFill"
})], _undoDepth_dec = [(0, import_core.helper)()], _redoDepth_dec = [(0, import_core.helper)()], _a) {
  constructor() {
    super(...arguments);
    __runInitializers(_init, 5, this);
    /**
     * Wraps the history method to inject state from the getState or getDispatch
     * method.
     *
     * @param method - the method to wrap
     */
    __publicField(this, "wrapMethod", (method, callback) => ({ state, dispatch, view }) => {
      const { getState, getDispatch } = this.options;
      const wrappedState = (0, import_core.isFunction)(getState) ? getState() : state;
      const wrappedDispatch = (0, import_core.isFunction)(getDispatch) && dispatch ? getDispatch() : dispatch;
      const success = method(wrappedState, wrappedDispatch, view);
      callback == null ? void 0 : callback(success);
      return success;
    });
  }
  get name() {
    return "history";
  }
  /**
   * Adds the default key mappings for undo and redo.
   */
  createKeymap() {
    return {
      "Mod-y": !import_core.environment.isMac ? this.wrapMethod(import_history.redo, this.options.onRedo) : () => false,
      "Mod-z": this.wrapMethod(import_history.undo, this.options.onUndo),
      "Shift-Mod-z": this.wrapMethod(import_history.redo, this.options.onRedo)
    };
  }
  undoShortcut(props) {
    return this.wrapMethod(import_history.undo, this.options.onUndo)(props);
  }
  redoShortcut(props) {
    return this.wrapMethod(import_history.redo, this.options.onRedo)(props);
  }
  /**
   * Bring the `prosemirror-history` plugin with options set on this extension.
   */
  createExternalPlugins() {
    const { depth, newGroupDelay } = this.options;
    return [(0, import_history.history)({ depth, newGroupDelay })];
  }
  undo() {
    return (0, import_core.nonChainable)(this.wrapMethod(import_history.undo, this.options.onUndo));
  }
  redo() {
    return (0, import_core.nonChainable)(this.wrapMethod(import_history.redo, this.options.onRedo));
  }
  undoDepth(state = this.store.getState()) {
    return (0, import_history.undoDepth)(state);
  }
  redoDepth(state = this.store.getState()) {
    return (0, import_history.redoDepth)(state);
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 1, "undoShortcut", _undoShortcut_dec, HistoryExtension);
__decorateElement(_init, 1, "redoShortcut", _redoShortcut_dec, HistoryExtension);
__decorateElement(_init, 1, "undo", _undo_dec, HistoryExtension);
__decorateElement(_init, 1, "redo", _redo_dec, HistoryExtension);
__decorateElement(_init, 1, "undoDepth", _undoDepth_dec, HistoryExtension);
__decorateElement(_init, 1, "redoDepth", _redoDepth_dec, HistoryExtension);
HistoryExtension = __decorateElement(_init, 0, "HistoryExtension", _HistoryExtension_decorators, HistoryExtension);
__runInitializers(_init, 1, HistoryExtension);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HistoryExtension
});
