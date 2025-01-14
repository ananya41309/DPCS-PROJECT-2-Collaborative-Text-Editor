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
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
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
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
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
  var _a12;
  return [, , , __create((_a12 = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a12 : null)];
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
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key2 = __decoratorStrings[k + 5];
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
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key2] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key2] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AttributesExtension: () => AttributesExtension,
  CommandsExtension: () => CommandsExtension,
  DEFAULT_SHORTCUTS: () => DEFAULT_SHORTCUTS,
  DecorationsExtension: () => DecorationsExtension,
  DelayedCommand: () => DelayedCommand,
  DocChangedExtension: () => DocChangedExtension,
  Framework: () => Framework,
  GOOGLE_DOC_SHORTCUTS: () => GOOGLE_DOC_SHORTCUTS,
  HelpersExtension: () => HelpersExtension,
  InputRulesExtension: () => InputRulesExtension,
  KeymapExtension: () => KeymapExtension,
  MarkExtension: () => MarkExtension,
  MetaExtension: () => MetaExtension,
  NodeExtension: () => NodeExtension,
  NodeViewsExtension: () => NodeViewsExtension,
  PasteRulesExtension: () => PasteRulesExtension,
  PlainExtension: () => PlainExtension,
  PluginsExtension: () => PluginsExtension,
  RemirrorManager: () => RemirrorManager,
  SchemaExtension: () => SchemaExtension,
  SuggestExtension: () => SuggestExtension,
  TagsExtension: () => TagsExtension,
  UploadExtension: () => UploadExtension,
  builtinPreset: () => builtinPreset,
  command: () => command,
  delayedCommand: () => delayedCommand,
  extension: () => extension,
  findUploadPlaceholderPayload: () => findUploadPlaceholderPayload,
  findUploadPlaceholderPos: () => findUploadPlaceholderPos,
  hasUploadingFile: () => hasUploadingFile,
  helper: () => helper,
  insertText: () => insertText,
  isDelayedValue: () => isDelayedValue,
  isExtension: () => isExtension,
  isExtensionConstructor: () => isExtensionConstructor,
  isExtensionTag: () => isExtensionTag,
  isMarkExtension: () => isMarkExtension,
  isNodeExtension: () => isNodeExtension,
  isPlainExtension: () => isPlainExtension,
  isRemirrorManager: () => isRemirrorManager,
  keyBinding: () => keyBinding,
  keyboardShortcuts: () => keyboardShortcuts,
  legacyCommand: () => legacyCommand,
  legacyHelper: () => legacyHelper,
  legacyKeyBinding: () => legacyKeyBinding,
  mutateDefaultExtensionOptions: () => mutateDefaultExtensionOptions,
  setUploadPlaceholderAction: () => setUploadPlaceholderAction,
  toggleMark: () => toggleMark,
  uploadFile: () => uploadFile
});
module.exports = __toCommonJS(src_exports);

// src/builtins/attributes-extension.ts
var import_core_helpers5 = require("@remirror/core-helpers");

// src/extension/extension.ts
var import_core_constants3 = require("@remirror/core-constants");
var import_core_helpers3 = require("@remirror/core-helpers");
var import_core_utils2 = require("@remirror/core-utils");

// src/extension/base-class.ts
var import_core_constants2 = require("@remirror/core-constants");
var import_core_helpers2 = require("@remirror/core-helpers");
var import_core_utils = require("@remirror/core-utils");

// src/helpers.ts
var import_core_constants = require("@remirror/core-constants");
var import_core_helpers = require("@remirror/core-helpers");
function defaultEquals(valueA, valueB) {
  return valueA === valueB;
}
function getChangedOptions(props) {
  const { previousOptions, update, equals = defaultEquals } = props;
  const next = (0, import_core_helpers.freeze)(__spreadValues(__spreadValues({}, previousOptions), update));
  const changes = (0, import_core_helpers.object)();
  const optionKeys = (0, import_core_helpers.keys)(previousOptions);
  for (const key2 of optionKeys) {
    const previousValue = previousOptions[key2];
    const value = next[key2];
    if (equals(previousValue, value)) {
      changes[key2] = { changed: false };
      continue;
    }
    changes[key2] = { changed: true, previousValue, value };
  }
  const pickChanged = (keys3) => {
    const picked = (0, import_core_helpers.object)();
    for (const key2 of keys3) {
      const item = changes[key2];
      if (item == null ? void 0 : item.changed) {
        picked[key2] = item.value;
      }
    }
    return picked;
  };
  return { changes: (0, import_core_helpers.freeze)(changes), options: next, pickChanged };
}
var codeLabelMap = {
  [import_core_constants.ErrorConstant.DUPLICATE_HELPER_NAMES]: "helper method",
  [import_core_constants.ErrorConstant.DUPLICATE_COMMAND_NAMES]: "command method"
};
function throwIfNameNotUnique(props) {
  const { name, set, code } = props;
  const label = codeLabelMap[code];
  (0, import_core_helpers.invariant)(!set.has(name), {
    code,
    message: "There is a naming conflict for the name: ".concat(name, " used in this '").concat(label, "'. Please rename or remove from the editor to avoid runtime errors.")
  });
  set.add(name);
}

// src/extension/base-class.ts
var IGNORE = "__IGNORE__";
var GENERAL_OPTIONS = "__ALL__";
var BaseClass = class {
  constructor(defaultOptions2, ...[options]) {
    /**
     * This is not for external use. It is purely here for TypeScript inference of
     * the generic `Options` type parameter.
     *
     * @internal
     */
    __publicField(this, "~O", {});
    /**
     * The initial options at creation (used to reset).
     */
    __publicField(this, "_initialOptions");
    /**
     * All the dynamic keys supported by this extension.
     */
    __publicField(this, "_dynamicKeys");
    /**
     * Private instance of the extension options.
     */
    __publicField(this, "_options");
    /**
     * The mapped function handlers.
     */
    __publicField(this, "_mappedHandlers");
    /**
     * Override this method if you want to set custom handlers on your extension.
     *
     * This must return a dispose function.
     */
    __publicField(this, "onAddCustomHandler");
    this._mappedHandlers = (0, import_core_helpers2.object)();
    this.populateMappedHandlers();
    this._options = this._initialOptions = (0, import_core_helpers2.deepMerge)(
      defaultOptions2,
      this.constructor.defaultOptions,
      options != null ? options : (0, import_core_helpers2.object)(),
      this.createDefaultHandlerOptions()
    );
    this._dynamicKeys = this.getDynamicKeys();
    this.init();
  }
  /**
   * The options for this extension.
   *
   * @remarks
   *
   * Options are composed of Static, Dynamic, Handlers and ObjectHandlers.
   *
   * - `Static` - set at instantiation by the constructor.
   * - `Dynamic` - optionally set at instantiation by the constructor and also
   *   set during the runtime.
   * - `Handlers` - can only be set during the runtime.
   * - `ObjectHandlers` - Can only be set during the runtime of the extension.
   */
  get options() {
    return this._options;
  }
  /**
   * Get the dynamic keys for this extension.
   */
  get dynamicKeys() {
    return this._dynamicKeys;
  }
  /**
   * The options that this instance was created with, merged with all the
   * default options.
   */
  get initialOptions() {
    return this._initialOptions;
  }
  /**
   * This method is called by the extension constructor. It is not strictly a
   * lifecycle method since at this point the manager has not yet been
   * instantiated.
   *
   * @remarks
   *
   * It should be used instead of overriding the constructor which is strongly
   * advised against.
   *
   * There are some limitations when using this method.
   *
   * - Accessing `this.store` will throw an error since the manager hasn't been
   *   created and it hasn't yet been attached to the extensions.
   * - `this.type` in `NodeExtension` and `MarkExtension` will also throw an
   *   error since the schema hasn't been created yet.
   *
   * You should use this to setup any instance properties with the options
   * provided to the extension.
   */
  init() {
  }
  /**
   * Get the dynamic keys for this extension.
   */
  getDynamicKeys() {
    const dynamicKeys = [];
    const { customHandlerKeys, handlerKeys, staticKeys } = this.constructor;
    for (const key2 of (0, import_core_helpers2.keys)(this._options)) {
      if (staticKeys.includes(key2) || handlerKeys.includes(key2) || customHandlerKeys.includes(key2)) {
        continue;
      }
      dynamicKeys.push(key2);
    }
    return dynamicKeys;
  }
  /**
   * Throw an error if non dynamic keys are updated.
   */
  ensureAllKeysAreDynamic(update) {
    if (import_core_utils.environment.isProduction) {
      return;
    }
    const invalid = [];
    for (const key2 of (0, import_core_helpers2.keys)(update)) {
      if (this._dynamicKeys.includes(key2)) {
        continue;
      }
      invalid.push(key2);
    }
    (0, import_core_helpers2.invariant)((0, import_core_helpers2.isEmptyArray)(invalid), {
      code: import_core_constants2.ErrorConstant.INVALID_SET_EXTENSION_OPTIONS,
      message: "Invalid properties passed into the 'setOptions()' method: ".concat(JSON.stringify(
        invalid
      ), ".")
    });
  }
  /**
   * Update the properties with the provided partial value when changed.
   */
  setOptions(update) {
    var _a12;
    const previousOptions = this.getDynamicOptions();
    this.ensureAllKeysAreDynamic(update);
    const { changes, options, pickChanged } = getChangedOptions({
      previousOptions,
      update
    });
    this.updateDynamicOptions(options);
    (_a12 = this.onSetOptions) == null ? void 0 : _a12.call(this, {
      reason: "set",
      changes,
      options,
      pickChanged,
      initialOptions: this._initialOptions
    });
  }
  /**
   * Reset the extension properties to their default values.
   *
   * @nonVirtual
   */
  resetOptions() {
    var _a12;
    const previousOptions = this.getDynamicOptions();
    const { changes, options, pickChanged } = getChangedOptions({
      previousOptions,
      update: this._initialOptions
    });
    this.updateDynamicOptions(options);
    (_a12 = this.onSetOptions) == null ? void 0 : _a12.call(this, {
      reason: "reset",
      options,
      changes,
      pickChanged,
      initialOptions: this._initialOptions
    });
  }
  /**
   * Update the private options.
   */
  getDynamicOptions() {
    return (0, import_core_helpers2.omit)(this._options, [
      ...this.constructor.customHandlerKeys,
      ...this.constructor.handlerKeys
    ]);
  }
  /**
   * Update the dynamic options.
   */
  updateDynamicOptions(options) {
    this._options = __spreadValues(__spreadValues({}, this._options), options);
  }
  /**
   * Set up the mapped handlers object with default values (an empty array);
   */
  populateMappedHandlers() {
    for (const key2 of this.constructor.handlerKeys) {
      this._mappedHandlers[key2] = [];
    }
  }
  /**
   * This is currently fudged together, I'm not sure it will work.
   */
  createDefaultHandlerOptions() {
    const methods = (0, import_core_helpers2.object)();
    for (const key2 of this.constructor.handlerKeys) {
      methods[key2] = (...args) => {
        var _a12;
        const { handlerKeyOptions } = this.constructor;
        const reducer = (_a12 = handlerKeyOptions[key2]) == null ? void 0 : _a12.reducer;
        let returnValue = reducer == null ? void 0 : reducer.getDefault(...args);
        for (const [, handler] of this._mappedHandlers[key2]) {
          const value = handler(...args);
          returnValue = reducer ? reducer.accumulator(returnValue, value, ...args) : value;
          if (shouldReturnEarly(handlerKeyOptions, returnValue, key2)) {
            return returnValue;
          }
        }
        return returnValue;
      };
    }
    return methods;
  }
  /**
   * Add a handler to the event handlers so that it is called along with all the
   * other handler methods.
   *
   * This is helpful for integrating react hooks which can be used in multiple
   * places. The original problem with fixed properties is that you can only
   * assign to a method once and it overwrites any other methods. This pattern
   * for adding handlers allows for multiple usages of the same handler in the
   * most relevant part of the code.
   *
   * More to come on this pattern.
   *
   * @nonVirtual
   */
  addHandler(key2, method, priority = import_core_constants2.ExtensionPriority.Default) {
    this._mappedHandlers[key2].push([priority, method]);
    this.sortHandlers(key2);
    return () => this._mappedHandlers[key2] = this._mappedHandlers[key2].filter(
      ([, handler]) => handler !== method
    );
  }
  /**
   * Determines if handlers exist for the given key.
   *
   * Checking the existence of a handler property directly gives wrong results.
   * `this.options.onHandlerName` is always truthy because it is a reference to
   * the wrapper function that calls each handler.
   *
   * ```ts
   *
   * // GOOD ✅
   * if (!this.hasHandlers('onHandlerName')) {
   *   return;
   * }
   *
   * // BAD ❌
   * if (!this.options.onHandlerName) {
   *   return;
   * }
   * ```
   *
   * @param key The handler to test
   */
  hasHandlers(key2) {
    var _a12;
    return ((_a12 = this._mappedHandlers[key2]) != null ? _a12 : []).length > 0;
  }
  sortHandlers(key2) {
    this._mappedHandlers[key2] = (0, import_core_helpers2.sort)(
      this._mappedHandlers[key2],
      // Sort from highest binding to the lowest.
      ([a], [z]) => z - a
    );
  }
  /**
   * A method that can be used to add a custom handler. It is up to the
   * extension creator to manage the handlers and dispose methods.
   */
  addCustomHandler(key2, value) {
    var _a12, _b;
    return (_b = (_a12 = this.onAddCustomHandler) == null ? void 0 : _a12.call(this, { [key2]: value })) != null ? _b : import_core_helpers2.noop;
  }
};
/**
 * The default options for this extension.
 *
 * TODO see if this can be cast to something other than any and allow
 * composition.
 */
__publicField(BaseClass, "defaultOptions", {});
/**
 * The static keys for this class.
 */
__publicField(BaseClass, "staticKeys", []);
/**
 * The event handler keys.
 */
__publicField(BaseClass, "handlerKeys", []);
/**
 * Customize the way the handler should behave.
 */
__publicField(BaseClass, "handlerKeyOptions", {});
/**
 * The custom keys.
 */
__publicField(BaseClass, "customHandlerKeys", []);
function shouldReturnEarly(handlerKeyOptions, returnValue, handlerKey) {
  const { [GENERAL_OPTIONS]: generalOptions } = handlerKeyOptions;
  const handlerOptions = handlerKeyOptions[handlerKey];
  if (!generalOptions && !handlerOptions) {
    return false;
  }
  if (handlerOptions && // Only proceed if the value should not be ignored.
  handlerOptions.earlyReturnValue !== IGNORE && ((0, import_core_helpers2.isFunction)(handlerOptions.earlyReturnValue) ? handlerOptions.earlyReturnValue(returnValue) === true : returnValue === handlerOptions.earlyReturnValue)) {
    return true;
  }
  if (generalOptions && // Only proceed if they are not ignored.
  generalOptions.earlyReturnValue !== IGNORE && // Check whether the `earlyReturnValue` is a predicate check.
  ((0, import_core_helpers2.isFunction)(generalOptions.earlyReturnValue) ? (
    // If it is a predicate and when called with the current
    // `returnValue` the value is `true` then we should return
    // early.
    generalOptions.earlyReturnValue(returnValue) === true
  ) : (
    // Check the actual return value.
    returnValue === generalOptions.earlyReturnValue
  ))) {
    return true;
  }
  return false;
}

// src/extension/extension.ts
var Extension = class extends BaseClass {
  constructor(...args) {
    super(defaultOptions, ...args);
    /**
     * Allows for the `RemirrorManager` or `Preset`'s to override the priority of
     * an extension.
     */
    __publicField(this, "priorityOverride");
    /**
     * Private list of extension stored within this [[`Preset`]].
     */
    __publicField(this, "_extensions");
    /**
     * An extension mapping of the extensions and their constructors.
     */
    __publicField(this, "extensionMap");
    /**
     * This store is can be modified by the extension manager with and lifecycle
     * extension methods.
     *
     * Different properties are added at different times so it's important to
     * check the documentation for each property to know what phase is being
     * added.
     */
    __publicField(this, "_store");
    /**
     * Not for usage. This is purely for types to make it easier to infer
     * available sub extension types.
     *
     * @internal
     */
    __publicField(this, "~E", {});
    this._extensions = (0, import_core_helpers3.uniqueBy)(
      this.createExtensions(),
      // Ensure that all the provided extensions are unique.
      (extension2) => extension2.constructor
    );
    this.extensionMap = /* @__PURE__ */ new Map();
    for (const extension2 of this._extensions) {
      this.extensionMap.set(extension2.constructor, extension2);
    }
  }
  /**
   * The priority level for this instance of the extension. A higher value
   * corresponds to a higher priority extension
   */
  get priority() {
    var _a12, _b;
    return (_b = (_a12 = this.priorityOverride) != null ? _a12 : this.options.priority) != null ? _b : this.constructor.defaultPriority;
  }
  /**
   * The name that the constructor should have, which doesn't get mangled in
   * production.
   */
  get constructorName() {
    return "".concat((0, import_core_helpers3.pascalCase)(this.name), "Extension");
  }
  /**
   * The store is a shared object that's internal to each extension. It includes
   * often used items like the `view` and `schema` that are added by the
   * extension manager and also the lifecycle extension methods.
   *
   * **NOTE** - The store is not available until the manager has been created
   * and received the extension. As a result trying to access the store during
   * `init` and `constructor` will result in a runtime error.
   *
   * Some properties of the store are available at different phases. You should
   * check the inline documentation to know when a certain property is useable
   * in your extension.
   */
  get store() {
    (0, import_core_helpers3.invariant)(this._store, {
      code: import_core_constants3.ErrorConstant.MANAGER_PHASE_ERROR,
      message: "An error occurred while attempting to access the 'extension.store' when the Manager has not yet set created the lifecycle methods."
    });
    return (0, import_core_helpers3.freeze)(this._store, { requireKeys: true });
  }
  /**
   * The list of extensions added to the editor by this `Preset`.
   */
  get extensions() {
    return this._extensions;
  }
  /**
   * When there are duplicate extensions used within the editor the extension
   * manager will call this method and make sure all extension holders are using
   * the same instance of the `ExtensionConstructor`.
   *
   * @internal
   */
  replaceChildExtension(constructor, extension2) {
    if (!this.extensionMap.has(constructor)) {
      return;
    }
    this.extensionMap.set(constructor, extension2);
    this._extensions = this.extensions.map(
      (currentExtension) => extension2.constructor === constructor ? extension2 : currentExtension
    );
  }
  /**
   * Create the extensions which will be consumed by the preset. Override this
   * if you would like to make your extension a parent to other (holder)
   * extensions which don't make sense existing outside of the context of this
   * extension.
   *
   * @remarks
   *
   * Since this method is called in the constructor it should always be created
   * as an instance method and not a property. Properties aren't available for
   * the call to the parent class.
   *
   * ```ts
   * class HolderExtension extends PlainExtension {
   *   get name() {
   *     return 'holder'
   *   }
   *
   *   // GOOD ✅
   *   createExtensions() {
   *     return [];
   *   }
   *
   *   // BAD ❌
   *   createExtensions = () => {
   *     return [];
   *   }
   * }
   * ```
   */
  createExtensions() {
    return [];
  }
  /**
   * Get an extension from this holder extension by providing the desired
   * `Constructor`.
   *
   * @param Constructor - the extension constructor to find in the editor.
   *
   * @remarks
   *
   * This method will throw an error if the constructor doesn't exist within the
   * extension created by this extension.
   *
   * It can be used to forward options and attach handlers to the children
   * extensions. It is the spiritual replacement of the `Preset` extension.
   *
   * ```ts
   * import { PlainExtension, OnSetOptionsProps } from 'remirror';
   *
   * interface ParentOptions { weight?: string }
   *
   * class ParentExtension extends PlainExtension<ParentOptions> {
   *   get name() {
   *     return 'parent' as const;
   *   }
   *
   *   createExtensions() {
   *     return [new BoldExtension()]
   *   }
   *
   *   onSetOptions(options: OnSetOptionsProps<ParentOptions>): void {
   *     if (options.changes.weight.changed) {
   *       // Update the value of the provided extension.
   *       this.getExtension(BoldExtension).setOption({ weight: options.changes.weight.value });
   *     }
   *   }
   * }
   * ```
   */
  getExtension(Constructor) {
    const extension2 = this.extensionMap.get(Constructor);
    (0, import_core_helpers3.invariant)(extension2, {
      code: import_core_constants3.ErrorConstant.INVALID_GET_EXTENSION,
      message: "'".concat(Constructor.name, "' does not exist within the preset: '").concat(this.name, "'")
    });
    return extension2;
  }
  /**
   * Check if the type of this extension's constructor matches the type of the
   * provided constructor.
   */
  isOfType(Constructor) {
    return this.constructor === Constructor;
  }
  /**
   * Pass a reference to the globally shared `ExtensionStore` for this
   * extension.
   *
   * @remarks
   *
   * The extension store allows extensions to access important variables without
   * complicating their creator methods.
   *
   * ```ts
   * import { PlainExtension } from 'remirror';
   *
   * class Awesome extends PlainExtension {
   *   customMethod() {
   *     if (this.store.view.hasFocus()) {
   *       log('dance dance dance');
   *     }
   *   }
   * }
   * ```
   *
   * This should only be called by the `RemirrorManager`.
   *
   * @internal
   * @nonVirtual
   */
  setStore(store) {
    if (this._store) {
      return;
    }
    this._store = store;
  }
  /**
   * Clone an extension.
   */
  clone(...args) {
    return new this.constructor(...args);
  }
  /**
   * Set the priority override for this extension. This is used in the
   * `RemirrorManager` in order to override the priority of an extension.
   *
   * If you set the first parameter to `undefined` it will remove the priority
   * override.
   *
   * @internal
   */
  setPriority(priority) {
    this.priorityOverride = priority;
  }
};
/**
 * The default priority for this family of extensions.
 */
__publicField(Extension, "defaultPriority", import_core_constants3.ExtensionPriority.Default);
var PlainExtension = class extends Extension {
  /** @internal */
  static get [import_core_constants3.__INTERNAL_REMIRROR_IDENTIFIER_KEY__]() {
    return import_core_constants3.RemirrorIdentifier.PlainExtensionConstructor;
  }
  /** @internal */
  get [import_core_constants3.__INTERNAL_REMIRROR_IDENTIFIER_KEY__]() {
    return import_core_constants3.RemirrorIdentifier.PlainExtension;
  }
};
var MarkExtension = class extends Extension {
  /** @internal */
  static get [import_core_constants3.__INTERNAL_REMIRROR_IDENTIFIER_KEY__]() {
    return import_core_constants3.RemirrorIdentifier.MarkExtensionConstructor;
  }
  /** @internal */
  get [import_core_constants3.__INTERNAL_REMIRROR_IDENTIFIER_KEY__]() {
    return import_core_constants3.RemirrorIdentifier.MarkExtension;
  }
  /**
   * Provides access to the mark type from the schema.
   *
   * @remarks
   *
   * The type is available as soon as the schema is created by the
   * `SchemaExtension` which has the priority `Highest`. It should be safe to
   * access in any of the lifecycle methods.
   */
  get type() {
    return (0, import_core_helpers3.assertGet)(this.store.schema.marks, this.name);
  }
  constructor(...args) {
    super(...args);
  }
};
/**
 * Whether to disable extra attributes for this extension.
 */
__publicField(MarkExtension, "disableExtraAttributes", false);
var NodeExtension = class extends Extension {
  static get [import_core_constants3.__INTERNAL_REMIRROR_IDENTIFIER_KEY__]() {
    return import_core_constants3.RemirrorIdentifier.NodeExtensionConstructor;
  }
  /** @internal */
  get [import_core_constants3.__INTERNAL_REMIRROR_IDENTIFIER_KEY__]() {
    return import_core_constants3.RemirrorIdentifier.NodeExtension;
  }
  /**
   * Provides access to the node type from the schema.
   */
  get type() {
    return (0, import_core_helpers3.assertGet)(this.store.schema.nodes, this.name);
  }
  constructor(...args) {
    super(...args);
  }
};
/**
 * Whether to disable extra attributes for this extension.
 */
__publicField(NodeExtension, "disableExtraAttributes", false);
var defaultOptions = {
  priority: void 0,
  extraAttributes: {},
  disableExtraAttributes: false,
  exclude: {}
};
function mutateDefaultExtensionOptions(mutatorMethod) {
  mutatorMethod(defaultOptions);
}
function isExtension(value) {
  return (0, import_core_utils2.isRemirrorType)(value) && (0, import_core_utils2.isIdentifierOfType)(value, [
    import_core_constants3.RemirrorIdentifier.PlainExtension,
    import_core_constants3.RemirrorIdentifier.MarkExtension,
    import_core_constants3.RemirrorIdentifier.NodeExtension
  ]);
}
function isExtensionConstructor(value) {
  return (0, import_core_utils2.isRemirrorType)(value) && (0, import_core_utils2.isIdentifierOfType)(value, [
    import_core_constants3.RemirrorIdentifier.PlainExtensionConstructor,
    import_core_constants3.RemirrorIdentifier.MarkExtensionConstructor,
    import_core_constants3.RemirrorIdentifier.NodeExtensionConstructor
  ]);
}
function isPlainExtension(value) {
  return (0, import_core_utils2.isRemirrorType)(value) && (0, import_core_utils2.isIdentifierOfType)(value, import_core_constants3.RemirrorIdentifier.PlainExtension);
}
function isNodeExtension(value) {
  return (0, import_core_utils2.isRemirrorType)(value) && (0, import_core_utils2.isIdentifierOfType)(value, import_core_constants3.RemirrorIdentifier.NodeExtension);
}
function isMarkExtension(value) {
  return (0, import_core_utils2.isRemirrorType)(value) && (0, import_core_utils2.isIdentifierOfType)(value, import_core_constants3.RemirrorIdentifier.MarkExtension);
}

// src/extension/extension-decorator.ts
var import_core_helpers4 = require("@remirror/core-helpers");
function extension(options) {
  return (ReadonlyConstructor, context) => {
    if (context && context.kind !== "class") {
      throw new Error("The extension decorator can only be used on a class.");
    }
    const _a12 = options, {
      defaultOptions: defaultOptions2,
      customHandlerKeys,
      handlerKeys,
      staticKeys,
      defaultPriority,
      handlerKeyOptions
    } = _a12, rest = __objRest(_a12, [
      "defaultOptions",
      "customHandlerKeys",
      "handlerKeys",
      "staticKeys",
      "defaultPriority",
      "handlerKeyOptions"
    ]);
    const Constructor = (0, import_core_helpers4.Cast)(ReadonlyConstructor);
    if (defaultOptions2) {
      Constructor.defaultOptions = defaultOptions2;
    }
    if (defaultPriority) {
      Constructor.defaultPriority = defaultPriority;
    }
    if (handlerKeyOptions) {
      Constructor.handlerKeyOptions = handlerKeyOptions;
    }
    Constructor.staticKeys = staticKeys != null ? staticKeys : [];
    Constructor.handlerKeys = handlerKeys != null ? handlerKeys : [];
    Constructor.customHandlerKeys = customHandlerKeys != null ? customHandlerKeys : [];
    for (const [key2, value] of Object.entries(rest)) {
      if (Constructor[key2]) {
        continue;
      }
      Constructor[key2] = value;
    }
    return (0, import_core_helpers4.Cast)(Constructor);
  };
}

// src/builtins/attributes-extension.ts
var AttributesExtension = class extends PlainExtension {
  constructor() {
    super(...arguments);
    __publicField(this, "attributeList", []);
    __publicField(this, "attributeObject", (0, import_core_helpers5.object)());
    __publicField(this, "updateAttributes", (triggerUpdate = true) => {
      this.transformAttributes();
      if (triggerUpdate) {
        this.store.commands.forceUpdate("attributes");
      }
    });
  }
  get name() {
    return "attributes";
  }
  /**
   * Create the attributes object on initialization.
   *
   * @internal
   */
  onCreate() {
    this.transformAttributes();
    this.store.setExtensionStore("updateAttributes", this.updateAttributes);
  }
  transformAttributes() {
    var _a12, _b, _c, _d;
    this.attributeObject = (0, import_core_helpers5.object)();
    if ((_a12 = this.store.managerSettings.exclude) == null ? void 0 : _a12.attributes) {
      this.store.setStoreKey("attributes", this.attributeObject);
      return;
    }
    this.attributeList = [];
    for (const extension2 of this.store.extensions) {
      if ((_b = extension2.options.exclude) == null ? void 0 : _b.attributes) {
        continue;
      }
      const createdAttributes = (_c = extension2.createAttributes) == null ? void 0 : _c.call(extension2);
      const attributes = __spreadProps(__spreadValues({}, createdAttributes), {
        class: (0, import_core_helpers5.cx)(...(_d = extension2.classNames) != null ? _d : [], createdAttributes == null ? void 0 : createdAttributes.class)
      });
      this.attributeList.unshift(attributes);
    }
    for (const attributes of this.attributeList) {
      this.attributeObject = __spreadProps(__spreadValues(__spreadValues({}, this.attributeObject), attributes), {
        class: (0, import_core_helpers5.cx)(this.attributeObject.class, attributes.class)
      });
    }
    this.store.setStoreKey("attributes", this.attributeObject);
  }
};

// src/builtins/builtin-decorators.ts
function helper(options = {}) {
  return (method, context) => {
    const methodName = context.name;
    if (typeof methodName !== "string") {
      throw new TypeError("Invalid method name provided");
    }
    context.addInitializer(function() {
      var _a12;
      const ExtensionClass = this;
      ((_a12 = ExtensionClass.decoratedHelpers) != null ? _a12 : ExtensionClass.decoratedHelpers = {})[methodName] = options;
    });
    return method;
  };
}
function legacyHelper(options = {}) {
  return (target, propertyKey, _descriptor) => {
    var _a12;
    ((_a12 = target.decoratedHelpers) != null ? _a12 : target.decoratedHelpers = {})[propertyKey] = options;
  };
}
function command(options = {}) {
  return (method, context) => {
    const methodName = context.name;
    if (typeof methodName !== "string") {
      throw new TypeError("Invalid method name provided");
    }
    context.addInitializer(function() {
      var _a12;
      const ExtensionClass = this;
      ((_a12 = ExtensionClass.decoratedCommands) != null ? _a12 : ExtensionClass.decoratedCommands = {})[methodName] = options;
    });
    return method;
  };
}
function legacyCommand(options = {}) {
  return (target, propertyKey, _descriptor) => {
    var _a12;
    ((_a12 = target.decoratedCommands) != null ? _a12 : target.decoratedCommands = {})[propertyKey] = options;
  };
}
function keyBinding(options) {
  return (method, context) => {
    const methodName = context.name;
    if (typeof methodName !== "string") {
      throw new TypeError("Invalid method name provided");
    }
    context.addInitializer(function() {
      var _a12;
      const ExtensionClass = this;
      ((_a12 = ExtensionClass.decoratedKeybindings) != null ? _a12 : ExtensionClass.decoratedKeybindings = {})[methodName] = options;
    });
    return method;
  };
}
function legacyKeyBinding(options) {
  return (target, propertyKey, _descriptor) => {
    var _a12;
    ((_a12 = target.decoratedKeybindings) != null ? _a12 : target.decoratedKeybindings = {})[propertyKey] = options;
  };
}

// src/builtins/builtin-preset.ts
var import_core_helpers18 = require("@remirror/core-helpers");

// src/builtins/commands-extension.ts
var import_core_constants5 = require("@remirror/core-constants");
var import_core_helpers7 = require("@remirror/core-helpers");
var import_core_utils4 = require("@remirror/core-utils");
var import_messages = require("@remirror/messages");
var import_model = require("@remirror/pm/model");
var import_state = require("@remirror/pm/state");

// src/commands.ts
var import_core_constants4 = require("@remirror/core-constants");
var import_core_helpers6 = require("@remirror/core-helpers");
var import_core_utils3 = require("@remirror/core-utils");
var import_commands = require("@remirror/pm/commands");
function isDelayedValue(value) {
  return (0, import_core_helpers6.isFunction)(value) || (0, import_core_helpers6.isPromise)(value);
}
function delayedCommand({
  immediate,
  promise,
  onDone,
  onFail
}) {
  return (props) => {
    const { view } = props;
    if ((immediate == null ? void 0 : immediate(props)) === false) {
      return false;
    }
    if (!view) {
      return true;
    }
    const deferred = (0, import_core_helpers6.isFunction)(promise) ? promise() : promise;
    deferred.then((value) => {
      onDone({ state: view.state, tr: view.state.tr, dispatch: view.dispatch, view, value });
    }).catch(() => {
      onFail == null ? void 0 : onFail({ state: view.state, tr: view.state.tr, dispatch: view.dispatch, view });
    });
    return true;
  };
}
var DelayedCommand = class {
  constructor(promiseCreator) {
    this.promiseCreator = promiseCreator;
    __publicField(this, "failureHandlers", []);
    __publicField(this, "successHandlers", []);
    __publicField(this, "validateHandlers", []);
    /**
     * Generate the `remirror` command.
     */
    __publicField(this, "generateCommand", () => (props) => {
      let isValid = true;
      const { view, tr, dispatch } = props;
      if (!view) {
        return false;
      }
      for (const handler of this.validateHandlers) {
        if (!handler(__spreadProps(__spreadValues({}, props), { dispatch: () => {
        } }))) {
          isValid = false;
          break;
        }
      }
      if (!dispatch || !isValid) {
        return isValid;
      }
      const deferred = this.promiseCreator(props);
      deferred.then((value) => {
        this.runHandlers(this.successHandlers, {
          value,
          state: view.state,
          tr: view.state.tr,
          dispatch: view.dispatch,
          view
        });
      }).catch((error) => {
        this.runHandlers(this.failureHandlers, {
          error,
          state: view.state,
          tr: view.state.tr,
          dispatch: view.dispatch,
          view
        });
      });
      dispatch(tr);
      return true;
    });
  }
  /**
   * The commands that will immediately be run and used to evaluate whether to
   * proceed.
   */
  validate(handler, method = "push") {
    this.validateHandlers[method](handler);
    return this;
  }
  /**
   * Add a success callback to the handler.
   */
  success(handler, method = "push") {
    this.successHandlers[method](handler);
    return this;
  }
  /**
   * Add a failure callback to the handler.
   */
  failure(handler, method = "push") {
    this.failureHandlers[method](handler);
    return this;
  }
  runHandlers(handlers, param) {
    var _a12;
    for (const handler of handlers) {
      if (!handler(__spreadProps(__spreadValues({}, param), { dispatch: () => {
      } }))) {
        break;
      }
    }
    (_a12 = param.dispatch) == null ? void 0 : _a12.call(param, param.tr);
  }
};
function toggleMark(props) {
  const { type, attrs, range, selection } = props;
  return (props2) => {
    var _a12;
    const { dispatch, tr, state } = props2;
    const markType = (0, import_core_helpers6.isString)(type) ? state.schema.marks[type] : type;
    (0, import_core_helpers6.invariant)(markType, {
      code: import_core_constants4.ErrorConstant.SCHEMA,
      message: "Mark type: ".concat(type, " does not exist on the current schema.")
    });
    if (range || selection) {
      const { from, to } = (0, import_core_utils3.getTextSelection)((_a12 = selection != null ? selection : range) != null ? _a12 : tr.selection, tr.doc);
      (0, import_core_utils3.isMarkActive)(__spreadValues({ trState: tr, type }, range)) ? dispatch == null ? void 0 : dispatch(tr.removeMark(from, to, markType)) : dispatch == null ? void 0 : dispatch(tr.addMark(from, to, markType.create(attrs)));
      return true;
    }
    return (0, import_core_utils3.convertCommand)((0, import_commands.toggleMark)(markType, attrs))(props2);
  };
}
function markApplies(type, doc, ranges) {
  for (const { $from, $to } of ranges) {
    let markIsAllowed = $from.depth === 0 ? doc.type.allowsMarkType(type) : false;
    doc.nodesBetween($from.pos, $to.pos, (node) => {
      if (markIsAllowed) {
        return false;
      }
      markIsAllowed = node.inlineContent && node.type.allowsMarkType(type);
      return;
    });
    if (markIsAllowed) {
      return true;
    }
  }
  return false;
}
function applyMark(type, attrs, selectionPoint) {
  return ({ tr, dispatch, state }) => {
    const selection = (0, import_core_utils3.getTextSelection)(selectionPoint != null ? selectionPoint : tr.selection, tr.doc);
    const $cursor = (0, import_core_utils3.getCursor)(selection);
    const markType = (0, import_core_helpers6.isString)(type) ? state.schema.marks[type] : type;
    (0, import_core_helpers6.invariant)(markType, {
      code: import_core_constants4.ErrorConstant.SCHEMA,
      message: "Mark type: ".concat(type, " does not exist on the current schema.")
    });
    if (selection.empty && !$cursor || !markApplies(markType, tr.doc, selection.ranges)) {
      return false;
    }
    if (!dispatch) {
      return true;
    }
    if ($cursor) {
      tr.removeStoredMark(markType);
      if (attrs) {
        tr.addStoredMark(markType.create(attrs));
      }
      dispatch(tr);
      return true;
    }
    let containsMark = false;
    for (const { $from, $to } of selection.ranges) {
      if (containsMark) {
        break;
      }
      containsMark = tr.doc.rangeHasMark($from.pos, $to.pos, markType);
    }
    for (const { $from, $to } of selection.ranges) {
      if (containsMark) {
        tr.removeMark($from.pos, $to.pos, markType);
      }
      if (attrs) {
        tr.addMark($from.pos, $to.pos, markType.create(attrs));
      }
    }
    dispatch(tr);
    return true;
  };
}
function insertText(text, options = {}) {
  return ({ tr, dispatch, state }) => {
    const schema = state.schema;
    const selection = tr.selection;
    const { from = selection.from, to = from != null ? from : selection.to, marks = {} } = options;
    if (!dispatch) {
      return true;
    }
    tr.insertText(text, from, to);
    const end = (0, import_core_helpers6.assertGet)(tr.steps, tr.steps.length - 1).getMap().map(to);
    for (const [markName, attributes] of (0, import_core_helpers6.entries)(marks)) {
      tr.addMark(from, end, (0, import_core_helpers6.assertGet)(schema.marks, markName).create(attributes));
    }
    dispatch(tr);
    return true;
  };
}

// src/builtins/commands-extension.ts
var _getCommandProp_dec, _getCommandOptions_dec, _getAllCommandOptions_dec, _replaceText_dec, _cut_dec, _paste_dec, _copy_dec, _selectAll_dec, _setMeta_dec, _removeMark_dec, _toggleMark_dec, _applyMark_dec, _wrapInNode_dec, _toggleBlockNodeItem_dec, _toggleWrappingNode_dec, _setBlockNodeType_dec, _blur_dec, _focus_dec, _insertNode_dec, _insertNewLine_dec, _emptySelection_dec, _resetContent_dec, _setContent_dec, _updateNodeAttributes_dec, _forceUpdate_dec, _emptyUpdate_dec, _delete_dec, _selectMark_dec, _selectText_dec, _insertText_dec, _customDispatch_dec, _a, _CommandsExtension_decorators, _init;
_CommandsExtension_decorators = [extension({
  defaultPriority: import_core_constants5.ExtensionPriority.Highest,
  defaultOptions: { trackerClassName: "remirror-tracker-position", trackerNodeName: "span" },
  staticKeys: ["trackerClassName", "trackerNodeName"]
})];
var CommandsExtension = class extends (_a = PlainExtension, _customDispatch_dec = [command()], _insertText_dec = [command()], _selectText_dec = [command()], _selectMark_dec = [command()], _delete_dec = [command()], _emptyUpdate_dec = [command()], _forceUpdate_dec = [command()], _updateNodeAttributes_dec = [command()], _setContent_dec = [command()], _resetContent_dec = [command()], _emptySelection_dec = [command()], _insertNewLine_dec = [command()], _insertNode_dec = [command()], _focus_dec = [command()], _blur_dec = [command()], _setBlockNodeType_dec = [command()], _toggleWrappingNode_dec = [command()], _toggleBlockNodeItem_dec = [command()], _wrapInNode_dec = [command()], _applyMark_dec = [command()], _toggleMark_dec = [command()], _removeMark_dec = [command()], _setMeta_dec = [command()], _selectAll_dec = [command({
  description: ({ t }) => t(import_messages.CoreMessages.SELECT_ALL_DESCRIPTION),
  label: ({ t }) => t(import_messages.CoreMessages.SELECT_ALL_LABEL),
  shortcut: import_core_constants5.NamedShortcut.SelectAll
})], _copy_dec = [command({
  description: ({ t }) => t(import_messages.CoreMessages.COPY_DESCRIPTION),
  label: ({ t }) => t(import_messages.CoreMessages.COPY_LABEL),
  shortcut: import_core_constants5.NamedShortcut.Copy,
  icon: "fileCopyLine"
})], _paste_dec = [command({
  description: ({ t }) => t(import_messages.CoreMessages.PASTE_DESCRIPTION),
  label: ({ t }) => t(import_messages.CoreMessages.PASTE_LABEL),
  shortcut: import_core_constants5.NamedShortcut.Paste,
  icon: "clipboardLine"
})], _cut_dec = [command({
  description: ({ t }) => t(import_messages.CoreMessages.CUT_DESCRIPTION),
  label: ({ t }) => t(import_messages.CoreMessages.CUT_LABEL),
  shortcut: import_core_constants5.NamedShortcut.Cut,
  icon: "scissorsFill"
})], _replaceText_dec = [command()], _getAllCommandOptions_dec = [helper()], _getCommandOptions_dec = [helper()], _getCommandProp_dec = [helper()], _a) {
  constructor() {
    super(...arguments);
    __runInitializers(_init, 5, this);
    /**
     * This is the holder for the shared transaction which is shared by commands
     * in order to support chaining.
     *
     * @internal
     */
    __publicField(this, "_transaction");
    /**
     * Track the decorated command data.
     */
    __publicField(this, "decorated", /* @__PURE__ */ new Map());
    /**
     * A helper for forcing through updates in the view layer. The view layer can
     * check for the meta data of the transaction with
     * `manager.store.getForcedUpdate(tr)`. If that has a value then it should use
     * the unique symbol to update the key.
     */
    __publicField(this, "forceUpdateTransaction", (tr, ...keys3) => {
      const { forcedUpdates } = this.getCommandMeta(tr);
      this.setCommandMeta(tr, { forcedUpdates: (0, import_core_helpers7.uniqueArray)([...forcedUpdates, ...keys3]) });
      return tr;
    });
  }
  get name() {
    return "commands";
  }
  /**
   * The current transaction which allows for making commands chainable.
   *
   * It is shared by all the commands helpers and can even be used in the
   * [[`KeymapExtension`]].
   *
   * @internal
   */
  get transaction() {
    const state = this.store.getState();
    if (!this._transaction) {
      this._transaction = state.tr;
    }
    const isValid = this._transaction.before.eq(state.doc);
    const hasSteps = !(0, import_core_helpers7.isEmptyArray)(this._transaction.steps);
    if (!isValid) {
      const tr = state.tr;
      if (hasSteps) {
        for (const step of this._transaction.steps) {
          tr.step(step);
        }
      }
      this._transaction = tr;
    }
    return this._transaction;
  }
  onCreate() {
    this.store.setStoreKey("getForcedUpdates", this.getForcedUpdates.bind(this));
  }
  /**
   * Attach commands once the view is attached.
   */
  onView(view) {
    var _a12, _b, _c;
    const { extensions, helpers } = this.store;
    const commands = (0, import_core_helpers7.object)();
    const names = /* @__PURE__ */ new Set();
    let allDecoratedCommands = (0, import_core_helpers7.object)();
    const chain = (tr) => {
      var _a13;
      const customChain = (0, import_core_helpers7.object)();
      const getTr = () => tr != null ? tr : this.transaction;
      let commandChain = [];
      const getChain = () => commandChain;
      for (const [name, command2] of Object.entries(commands)) {
        if ((_a13 = allDecoratedCommands[name]) == null ? void 0 : _a13.disableChaining) {
          continue;
        }
        customChain[name] = this.chainedFactory({
          chain: customChain,
          command: command2.original,
          getTr,
          getChain
        });
      }
      const dispatch = (transaction) => {
        (0, import_core_helpers7.invariant)(transaction === getTr(), {
          message: "Chaining currently only supports `CommandFunction` methods which do not use the `state.tr` property. Instead you should use the provided `tr` property."
        });
      };
      customChain.run = (options = {}) => {
        const commands2 = commandChain;
        commandChain = [];
        for (const cmd of commands2) {
          if (!cmd(dispatch) && options.exitEarly) {
            return;
          }
        }
        view.dispatch(getTr());
      };
      customChain.tr = () => {
        const commands2 = commandChain;
        commandChain = [];
        for (const cmd of commands2) {
          cmd(dispatch);
        }
        return getTr();
      };
      customChain.enabled = () => {
        for (const cmd of commandChain) {
          if (!cmd()) {
            return false;
          }
        }
        return true;
      };
      customChain.new = (tr2) => {
        return chain(tr2);
      };
      return customChain;
    };
    for (const extension2 of extensions) {
      const extensionCommands = (_b = (_a12 = extension2.createCommands) == null ? void 0 : _a12.call(extension2)) != null ? _b : {};
      const decoratedCommands = (_c = extension2.decoratedCommands) != null ? _c : {};
      const active = {};
      allDecoratedCommands = __spreadProps(__spreadValues({}, allDecoratedCommands), { decoratedCommands });
      for (const [commandName, options] of Object.entries(decoratedCommands)) {
        const shortcut = (0, import_core_helpers7.isString)(options.shortcut) && options.shortcut.startsWith("_|") ? { shortcut: helpers.getNamedShortcut(options.shortcut, extension2.options) } : void 0;
        this.updateDecorated(commandName, __spreadValues(__spreadProps(__spreadValues({}, options), { name: extension2.name }), shortcut));
        extensionCommands[commandName] = extension2[commandName].bind(extension2);
        if (options.active) {
          active[commandName] = () => {
            var _a13, _b2;
            return (_b2 = (_a13 = options.active) == null ? void 0 : _a13.call(options, extension2.options, this.store)) != null ? _b2 : false;
          };
        }
      }
      if ((0, import_core_helpers7.isEmptyObject)(extensionCommands)) {
        continue;
      }
      this.addCommands({ active, names, commands, extensionCommands });
    }
    const chainProperty = chain();
    for (const [key2, command2] of Object.entries(chainProperty)) {
      chain[key2] = command2;
    }
    this.store.setStoreKey("commands", commands);
    this.store.setStoreKey("chain", chain);
    this.store.setExtensionStore("commands", commands);
    this.store.setExtensionStore("chain", chain);
  }
  /**
   * Update the cached transaction whenever the state is updated.
   */
  onStateUpdate({ state }) {
    this._transaction = state.tr;
  }
  /**
   * Create a plugin that solely exists to track forced updates via the
   * generated plugin key.
   */
  createPlugin() {
    return {};
  }
  customDispatch(command2) {
    return command2;
  }
  insertText(text, options = {}) {
    if ((0, import_core_helpers7.isString)(text)) {
      return insertText(text, options);
    }
    return this.store.createPlaceholderCommand({
      promise: text,
      placeholder: { type: "inline" },
      onSuccess: (value, range, props) => this.insertText(value, __spreadValues(__spreadValues({}, options), range))(props)
    }).generateCommand();
  }
  selectText(selection, options = {}) {
    return ({ tr, dispatch }) => {
      const textSelection = (0, import_core_utils4.getTextSelection)(selection, tr.doc);
      const selectionUnchanged = tr.selection.anchor === textSelection.anchor && tr.selection.head === textSelection.head;
      if (selectionUnchanged && !options.forceUpdate) {
        return false;
      }
      dispatch == null ? void 0 : dispatch(tr.setSelection(textSelection));
      return true;
    };
  }
  selectMark(type) {
    return (props) => {
      const { tr } = props;
      const range = (0, import_core_utils4.getMarkRange)(tr.selection.$from, type);
      if (!range) {
        return false;
      }
      return this.store.commands.selectText.original({ from: range.from, to: range.to })(props);
    };
  }
  delete(range) {
    return ({ tr, dispatch }) => {
      const { from, to } = range != null ? range : tr.selection;
      dispatch == null ? void 0 : dispatch(tr.delete(from, to));
      return true;
    };
  }
  emptyUpdate(action) {
    return ({ tr, dispatch }) => {
      if (dispatch) {
        action == null ? void 0 : action();
        dispatch(tr);
      }
      return true;
    };
  }
  forceUpdate(...keys3) {
    return ({ tr, dispatch }) => {
      dispatch == null ? void 0 : dispatch(this.forceUpdateTransaction(tr, ...keys3));
      return true;
    };
  }
  updateNodeAttributes(pos, attrs) {
    return ({ tr, dispatch }) => {
      dispatch == null ? void 0 : dispatch(tr.setNodeMarkup(pos, void 0, attrs));
      return true;
    };
  }
  setContent(content, selection) {
    return (props) => {
      const { tr, dispatch } = props;
      const state = this.store.manager.createState({ content, selection });
      if (!state) {
        return false;
      }
      dispatch == null ? void 0 : dispatch(tr.replaceRangeWith(0, tr.doc.nodeSize - 2, state.doc));
      return true;
    };
  }
  resetContent() {
    return (props) => {
      const { tr, dispatch } = props;
      const doc = this.store.manager.createEmptyDoc();
      if (doc) {
        return this.setContent(doc)(props);
      }
      dispatch == null ? void 0 : dispatch(tr.delete(0, tr.doc.nodeSize));
      return true;
    };
  }
  emptySelection() {
    return ({ tr, dispatch }) => {
      if (tr.selection.empty) {
        return false;
      }
      dispatch == null ? void 0 : dispatch(tr.setSelection(import_state.TextSelection.near(tr.selection.$anchor)));
      return true;
    };
  }
  insertNewLine() {
    return ({ dispatch, tr }) => {
      if (!(0, import_core_utils4.isTextSelection)(tr.selection)) {
        return false;
      }
      dispatch == null ? void 0 : dispatch(tr.insertText("\n"));
      return true;
    };
  }
  insertNode(node, options = {}) {
    return ({ dispatch, tr, state }) => {
      var _a12, _b;
      const { attrs, range, selection, replaceEmptyParentBlock = false } = options;
      const { from, to, $from } = (0, import_core_utils4.getTextSelection)((_a12 = selection != null ? selection : range) != null ? _a12 : tr.selection, tr.doc);
      if ((0, import_core_utils4.isProsemirrorNode)(node) || (0, import_core_utils4.isProsemirrorFragment)(node)) {
        const pos = $from.before($from.depth);
        dispatch == null ? void 0 : dispatch(
          replaceEmptyParentBlock && from === to && (0, import_core_utils4.isEmptyBlockNode)($from.parent) ? tr.replaceWith(pos, pos + $from.parent.nodeSize, node) : tr.replaceWith(from, to, node)
        );
        return true;
      }
      const nodeType = (0, import_core_helpers7.isString)(node) ? state.schema.nodes[node] : node;
      (0, import_core_helpers7.invariant)(nodeType, {
        code: import_core_constants5.ErrorConstant.SCHEMA,
        message: "The requested node type ".concat(node, " does not exist in the schema.")
      });
      const marks = (_b = options.marks) == null ? void 0 : _b.map((mark) => {
        if (mark instanceof import_model.Mark) {
          return mark;
        }
        const markType = (0, import_core_helpers7.isString)(mark) ? state.schema.marks[mark] : mark;
        (0, import_core_helpers7.invariant)(markType, {
          code: import_core_constants5.ErrorConstant.SCHEMA,
          message: "The requested mark type ".concat(mark, " does not exist in the schema.")
        });
        return markType.create();
      });
      const content = nodeType.createAndFill(
        attrs,
        (0, import_core_helpers7.isString)(options.content) ? state.schema.text(options.content) : options.content,
        marks
      );
      if (!content) {
        return false;
      }
      const isReplacement = from !== to;
      dispatch == null ? void 0 : dispatch(isReplacement ? tr.replaceRangeWith(from, to, content) : tr.insert(from, content));
      return true;
    };
  }
  focus(position) {
    return (props) => {
      const { dispatch, tr } = props;
      const { view } = this.store;
      if (position === false) {
        return false;
      }
      if (view.hasFocus() && (position === void 0 || position === true)) {
        return false;
      }
      if (position === void 0 || position === true) {
        const { from = 0, to = from } = tr.selection;
        position = { from, to };
      }
      if (dispatch) {
        this.delayedFocus();
      }
      return this.selectText(position)(props);
    };
  }
  blur(position) {
    return (props) => {
      const { view } = this.store;
      if (!view.hasFocus()) {
        return false;
      }
      requestAnimationFrame(() => {
        view.dom.blur();
      });
      return position ? this.selectText(position)(props) : true;
    };
  }
  setBlockNodeType(nodeType, attrs, selection, preserveAttrs = true) {
    return (0, import_core_utils4.setBlockType)(nodeType, attrs, selection, preserveAttrs);
  }
  toggleWrappingNode(nodeType, attrs, selection) {
    return (0, import_core_utils4.toggleWrap)(nodeType, attrs, selection);
  }
  toggleBlockNodeItem(toggleProps) {
    return (0, import_core_utils4.toggleBlockItem)(toggleProps);
  }
  wrapInNode(nodeType, attrs, range) {
    return (0, import_core_utils4.wrapIn)(nodeType, attrs, range);
  }
  applyMark(markType, attrs, selection) {
    return applyMark(markType, attrs, selection);
  }
  toggleMark(props) {
    return toggleMark(props);
  }
  removeMark(props) {
    return (0, import_core_utils4.removeMark)(props);
  }
  setMeta(name, value) {
    return ({ tr }) => {
      tr.setMeta(name, value);
      return true;
    };
  }
  selectAll() {
    return this.selectText("all");
  }
  copy() {
    return (props) => {
      if (props.tr.selection.empty) {
        return false;
      }
      if (props.dispatch) {
        document.execCommand("copy");
      }
      return true;
    };
  }
  paste() {
    return this.store.createPlaceholderCommand({
      // TODO https://caniuse.com/?search=clipboard.read - once browser support is sufficient.
      promise: async () => {
        var _a12;
        if ((_a12 = navigator.clipboard) == null ? void 0 : _a12.readText) {
          return await navigator.clipboard.readText();
        }
        return "";
      },
      placeholder: { type: "inline" },
      onSuccess: (value, selection, props) => this.insertNode((0, import_core_utils4.htmlToProsemirrorNode)({ content: value, schema: props.state.schema }), {
        selection
      })(props)
    }).generateCommand();
  }
  cut() {
    return (props) => {
      if (props.tr.selection.empty) {
        return false;
      }
      if (props.dispatch) {
        document.execCommand("cut");
      }
      return true;
    };
  }
  replaceText(props) {
    return (0, import_core_utils4.replaceText)(props);
  }
  getAllCommandOptions() {
    const uiCommands = {};
    for (const [name, options] of this.decorated) {
      if ((0, import_core_helpers7.isEmptyObject)(options)) {
        continue;
      }
      uiCommands[name] = options;
    }
    return uiCommands;
  }
  getCommandOptions(name) {
    return this.decorated.get(name);
  }
  getCommandProp() {
    return {
      tr: this.transaction,
      dispatch: this.store.view.dispatch,
      state: this.store.view.state,
      view: this.store.view
    };
  }
  /**
   * Update the command options via a shallow merge of the provided options. If
   * no options are provided the entry is deleted.
   *
   * @internal
   */
  updateDecorated(name, options) {
    var _a12;
    if (!options) {
      this.decorated.delete(name);
      return;
    }
    const decoratorOptions = (_a12 = this.decorated.get(name)) != null ? _a12 : { name: "" };
    this.decorated.set(name, __spreadValues(__spreadValues({}, decoratorOptions), options));
  }
  /**
   * Needed on iOS since `requestAnimationFrame` doesn't breaks the focus
   * implementation.
   */
  handleIosFocus() {
    if (!import_core_utils4.environment.isIos) {
      return;
    }
    this.store.view.dom.focus();
  }
  /**
   * Focus the editor after a slight delay.
   */
  delayedFocus() {
    this.handleIosFocus();
    requestAnimationFrame(() => {
      this.store.view.focus();
      this.store.view.dispatch(this.transaction.scrollIntoView());
    });
  }
  /**
   * Check for a forced update in the transaction. This pulls the meta data
   * from the transaction and if it is true then it was a forced update.
   *
   * ```ts
   * import { CommandsExtension } from 'remirror/extensions';
   *
   * const commandsExtension = manager.getExtension(CommandsExtension);
   * log(commandsExtension.getForcedUpdates(tr))
   * ```
   *
   * This can be used for updating:
   *
   * - `nodeViews`
   * - `editable` status of the editor
   * - `attributes` - for the top level node
   *
   * @internal
   */
  getForcedUpdates(tr) {
    return this.getCommandMeta(tr).forcedUpdates;
  }
  /**
   * Get the command metadata.
   */
  getCommandMeta(tr) {
    var _a12;
    const meta = (_a12 = tr.getMeta(this.pluginKey)) != null ? _a12 : {};
    return __spreadValues(__spreadValues({}, DEFAULT_COMMAND_META), meta);
  }
  setCommandMeta(tr, update) {
    const meta = this.getCommandMeta(tr);
    tr.setMeta(this.pluginKey, __spreadValues(__spreadValues({}, meta), update));
  }
  /**
   * Add the commands from the provided `commands` property to the `chained`,
   * `original` and `unchained` objects.
   */
  addCommands(props) {
    const { extensionCommands, commands, names, active } = props;
    for (const [name, command2] of (0, import_core_helpers7.entries)(extensionCommands)) {
      throwIfNameNotUnique({ name, set: names, code: import_core_constants5.ErrorConstant.DUPLICATE_COMMAND_NAMES });
      (0, import_core_helpers7.invariant)(!forbiddenNames.has(name), {
        code: import_core_constants5.ErrorConstant.DUPLICATE_COMMAND_NAMES,
        message: "The command name you chose is forbidden."
      });
      commands[name] = this.createUnchainedCommand(command2, active[name]);
    }
  }
  /**
   * Create an unchained command method.
   */
  unchainedFactory(props) {
    return (...args) => {
      const { shouldDispatch = true, command: command2 } = props;
      const { view } = this.store;
      const { state } = view;
      let dispatch;
      if (shouldDispatch) {
        dispatch = view.dispatch;
      }
      return command2(...args)({ state, dispatch, view, tr: state.tr });
    };
  }
  /**
   * Create the unchained command.
   */
  createUnchainedCommand(command2, active) {
    const unchainedCommand = this.unchainedFactory({ command: command2 });
    unchainedCommand.enabled = this.unchainedFactory({ command: command2, shouldDispatch: false });
    unchainedCommand.original = command2;
    unchainedCommand.active = active;
    return unchainedCommand;
  }
  /**
   * Create a chained command method.
   */
  chainedFactory(props) {
    return (...args) => {
      const { chain: chained, command: command2, getTr, getChain } = props;
      const lazyChain = getChain();
      const { view } = this.store;
      const { state } = view;
      lazyChain.push(
        (dispatch) => command2(...args)({ state, dispatch, view, tr: getTr() })
      );
      return chained;
    };
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 1, "customDispatch", _customDispatch_dec, CommandsExtension);
__decorateElement(_init, 1, "insertText", _insertText_dec, CommandsExtension);
__decorateElement(_init, 1, "selectText", _selectText_dec, CommandsExtension);
__decorateElement(_init, 1, "selectMark", _selectMark_dec, CommandsExtension);
__decorateElement(_init, 1, "delete", _delete_dec, CommandsExtension);
__decorateElement(_init, 1, "emptyUpdate", _emptyUpdate_dec, CommandsExtension);
__decorateElement(_init, 1, "forceUpdate", _forceUpdate_dec, CommandsExtension);
__decorateElement(_init, 1, "updateNodeAttributes", _updateNodeAttributes_dec, CommandsExtension);
__decorateElement(_init, 1, "setContent", _setContent_dec, CommandsExtension);
__decorateElement(_init, 1, "resetContent", _resetContent_dec, CommandsExtension);
__decorateElement(_init, 1, "emptySelection", _emptySelection_dec, CommandsExtension);
__decorateElement(_init, 1, "insertNewLine", _insertNewLine_dec, CommandsExtension);
__decorateElement(_init, 1, "insertNode", _insertNode_dec, CommandsExtension);
__decorateElement(_init, 1, "focus", _focus_dec, CommandsExtension);
__decorateElement(_init, 1, "blur", _blur_dec, CommandsExtension);
__decorateElement(_init, 1, "setBlockNodeType", _setBlockNodeType_dec, CommandsExtension);
__decorateElement(_init, 1, "toggleWrappingNode", _toggleWrappingNode_dec, CommandsExtension);
__decorateElement(_init, 1, "toggleBlockNodeItem", _toggleBlockNodeItem_dec, CommandsExtension);
__decorateElement(_init, 1, "wrapInNode", _wrapInNode_dec, CommandsExtension);
__decorateElement(_init, 1, "applyMark", _applyMark_dec, CommandsExtension);
__decorateElement(_init, 1, "toggleMark", _toggleMark_dec, CommandsExtension);
__decorateElement(_init, 1, "removeMark", _removeMark_dec, CommandsExtension);
__decorateElement(_init, 1, "setMeta", _setMeta_dec, CommandsExtension);
__decorateElement(_init, 1, "selectAll", _selectAll_dec, CommandsExtension);
__decorateElement(_init, 1, "copy", _copy_dec, CommandsExtension);
__decorateElement(_init, 1, "paste", _paste_dec, CommandsExtension);
__decorateElement(_init, 1, "cut", _cut_dec, CommandsExtension);
__decorateElement(_init, 1, "replaceText", _replaceText_dec, CommandsExtension);
__decorateElement(_init, 1, "getAllCommandOptions", _getAllCommandOptions_dec, CommandsExtension);
__decorateElement(_init, 1, "getCommandOptions", _getCommandOptions_dec, CommandsExtension);
__decorateElement(_init, 1, "getCommandProp", _getCommandProp_dec, CommandsExtension);
CommandsExtension = __decorateElement(_init, 0, "CommandsExtension", _CommandsExtension_decorators, CommandsExtension);
__runInitializers(_init, 1, CommandsExtension);
var DEFAULT_COMMAND_META = {
  forcedUpdates: []
};
var forbiddenNames = /* @__PURE__ */ new Set(["run", "chain", "original", "raw", "enabled", "tr", "new"]);

// src/builtins/decorations-extension.ts
var import_core_constants6 = require("@remirror/core-constants");
var import_core_helpers8 = require("@remirror/core-helpers");
var import_core_utils5 = require("@remirror/core-utils");
var import_view = require("@remirror/pm/view");
var _findAllPlaceholders_dec, _findPlaceholder_dec, _clearPlaceholders_dec, _removePlaceholder_dec, _updatePlaceholder_dec, _addPlaceholder_dec, _updateDecorations_dec, _a2, _DecorationsExtension_decorators, _init2;
_DecorationsExtension_decorators = [extension({
  defaultOptions: {
    persistentSelectionClass: void 0,
    placeholderClassName: "placeholder",
    placeholderNodeName: "span"
  },
  staticKeys: ["placeholderClassName", "placeholderNodeName"],
  handlerKeys: ["decorations"],
  handlerKeyOptions: {
    decorations: {
      reducer: {
        accumulator: (accumulated, latestValue, state) => accumulated.add(state.doc, latestValue.find()),
        getDefault: () => import_view.DecorationSet.empty
      }
    }
  },
  defaultPriority: import_core_constants6.ExtensionPriority.Low
})];
var DecorationsExtension = class extends (_a2 = PlainExtension, _updateDecorations_dec = [command()], _addPlaceholder_dec = [command()], _updatePlaceholder_dec = [command()], _removePlaceholder_dec = [command()], _clearPlaceholders_dec = [command()], _findPlaceholder_dec = [helper()], _findAllPlaceholders_dec = [helper()], _a2) {
  constructor() {
    super(...arguments);
    __runInitializers(_init2, 5, this);
    /**
     * The placeholder decorations.
     */
    __publicField(this, "placeholders", import_view.DecorationSet.empty);
    /**
     * A map of the html elements to their decorations.
     */
    __publicField(this, "placeholderWidgets", /* @__PURE__ */ new Map());
    /**
     * Handles delayed commands which rely on the
     */
    __publicField(this, "createPlaceholderCommand", (props) => {
      const id = (0, import_core_helpers8.uniqueId)();
      const { promise, placeholder, onFailure, onSuccess } = props;
      return new DelayedCommand(promise).validate((props2) => this.addPlaceholder(id, placeholder)(props2)).success((props2) => {
        var _a12;
        const { state, tr, dispatch, view, value } = props2;
        const range = this.store.helpers.findPlaceholder(id);
        if (!range) {
          const error = new Error("The placeholder has been removed");
          return (_a12 = onFailure == null ? void 0 : onFailure({ error, state, tr, dispatch, view })) != null ? _a12 : false;
        }
        this.removePlaceholder(id)({ state, tr, view, dispatch: () => {
        } });
        return onSuccess(value, range, { state, tr, dispatch, view });
      }).failure((props2) => {
        var _a12;
        this.removePlaceholder(id)(__spreadProps(__spreadValues({}, props2), { dispatch: () => {
        } }));
        return (_a12 = onFailure == null ? void 0 : onFailure(props2)) != null ? _a12 : false;
      });
    });
  }
  get name() {
    return "decorations";
  }
  onCreate() {
    this.store.setExtensionStore("createPlaceholderCommand", this.createPlaceholderCommand);
  }
  /**
   * Create the extension plugin for inserting decorations into the editor.
   */
  createPlugin() {
    return {
      state: {
        init: () => {
        },
        apply: (tr) => {
          var _a12, _b, _c, _d, _e, _f;
          const { added, clearTrackers, removed, updated } = this.getMeta(tr);
          if (clearTrackers) {
            this.placeholders = import_view.DecorationSet.empty;
            for (const [, widget] of this.placeholderWidgets) {
              (_b = (_a12 = widget.spec).onDestroy) == null ? void 0 : _b.call(_a12, this.store.view, widget.spec.element);
            }
            this.placeholderWidgets.clear();
            return;
          }
          this.placeholders = this.placeholders.map(tr.mapping, tr.doc, {
            onRemove: (spec) => {
              var _a13, _b2;
              const widget = this.placeholderWidgets.get(spec.id);
              if (widget) {
                (_b2 = (_a13 = widget.spec).onDestroy) == null ? void 0 : _b2.call(_a13, this.store.view, widget.spec.element);
              }
            }
          });
          for (const [, widget] of this.placeholderWidgets) {
            (_d = (_c = widget.spec).onUpdate) == null ? void 0 : _d.call(
              _c,
              this.store.view,
              widget.from,
              widget.spec.element,
              widget.spec.data
            );
          }
          for (const placeholder of added) {
            if (placeholder.type === "inline") {
              this.addInlinePlaceholder(placeholder, tr);
              continue;
            }
            if (placeholder.type === "node") {
              this.addNodePlaceholder(placeholder, tr);
              continue;
            }
            if (placeholder.type === "widget") {
              this.addWidgetPlaceholder(placeholder, tr);
              continue;
            }
          }
          for (const { id, data } of updated) {
            const widget = this.placeholderWidgets.get(id);
            if (!widget) {
              continue;
            }
            const updatedWidget = import_view.Decoration.widget(widget.from, widget.spec.element, __spreadProps(__spreadValues({}, widget.spec), {
              data
            }));
            this.placeholders = this.placeholders.remove([widget]).add(tr.doc, [updatedWidget]);
            this.placeholderWidgets.set(id, updatedWidget);
          }
          for (const id of removed) {
            const found = this.placeholders.find(
              void 0,
              void 0,
              (spec) => spec.id === id && spec.__type === __type
            );
            const widget = this.placeholderWidgets.get(id);
            if (widget) {
              (_f = (_e = widget.spec).onDestroy) == null ? void 0 : _f.call(_e, this.store.view, widget.spec.element);
            }
            this.placeholders = this.placeholders.remove(found);
            this.placeholderWidgets.delete(id);
          }
        }
      },
      props: {
        decorations: (state) => {
          let decorationSet = this.options.decorations(state);
          decorationSet = decorationSet.add(state.doc, this.placeholders.find());
          for (const extension2 of this.store.extensions) {
            if (!extension2.createDecorations) {
              continue;
            }
            const decorations = extension2.createDecorations(state).find();
            decorationSet = decorationSet.add(state.doc, decorations);
          }
          return decorationSet;
        },
        handleDOMEvents: {
          // Dispatch a transaction for focus/blur events so that the editor state
          // can be refreshed.
          //
          // https://discuss.prosemirror.net/t/handling-focus-in-plugins/1981/2
          blur: (view) => {
            if (this.options.persistentSelectionClass) {
              view.dispatch(view.state.tr.setMeta(persistentSelectionFocusKey, false));
            }
            return false;
          },
          focus: (view) => {
            if (this.options.persistentSelectionClass) {
              view.dispatch(view.state.tr.setMeta(persistentSelectionFocusKey, true));
            }
            return false;
          }
        }
      }
    };
  }
  updateDecorations() {
    return ({ tr, dispatch }) => (dispatch == null ? void 0 : dispatch(tr), true);
  }
  addPlaceholder(id, placeholder, deleteSelection) {
    return ({ dispatch, tr }) => this.addPlaceholderTransaction(id, placeholder, tr, !dispatch) ? (dispatch == null ? void 0 : dispatch(deleteSelection ? tr.deleteSelection() : tr), true) : false;
  }
  updatePlaceholder(id, data) {
    return ({ dispatch, tr }) => this.updatePlaceholderTransaction({ id, data, tr, checkOnly: !dispatch }) ? (dispatch == null ? void 0 : dispatch(tr), true) : false;
  }
  removePlaceholder(id) {
    return ({ dispatch, tr }) => this.removePlaceholderTransaction({ id, tr, checkOnly: !dispatch }) ? (dispatch == null ? void 0 : dispatch(tr), true) : false;
  }
  clearPlaceholders() {
    return ({ tr, dispatch }) => this.clearPlaceholdersTransaction({ tr, checkOnly: !dispatch }) ? (dispatch == null ? void 0 : dispatch(tr), true) : false;
  }
  findPlaceholder(id) {
    return this.findAllPlaceholders().get(id);
  }
  findAllPlaceholders() {
    const trackers = /* @__PURE__ */ new Map();
    const found = this.placeholders.find(void 0, void 0, (spec) => spec.__type === __type);
    for (const decoration of found) {
      trackers.set(decoration.spec.id, { from: decoration.from, to: decoration.to });
    }
    return trackers;
  }
  /**
   * Add some decorations based on the provided settings.
   */
  createDecorations(state) {
    var _a12, _b, _c;
    const { persistentSelectionClass } = this.options;
    if (!persistentSelectionClass || ((_a12 = this.store.view) == null ? void 0 : _a12.hasFocus()) || ((_c = (_b = this.store.helpers).isInteracting) == null ? void 0 : _c.call(_b))) {
      return import_view.DecorationSet.empty;
    }
    return generatePersistentSelectionDecorations(state, import_view.DecorationSet.empty, {
      class: (0, import_core_helpers8.isString)(persistentSelectionClass) ? persistentSelectionClass : "selection"
    });
  }
  /**
   * This stores all tracked positions in the editor and maps them via the
   * transaction updates.
   */
  onApplyState() {
  }
  /**
   * Add a widget placeholder and track it as a widget placeholder.
   */
  addWidgetPlaceholder(placeholder, tr) {
    var _a12;
    const { pos, createElement, onDestroy, onUpdate, className, nodeName, id, type } = placeholder;
    const element = (_a12 = createElement == null ? void 0 : createElement(this.store.view, pos)) != null ? _a12 : document.createElement(nodeName);
    element.classList.add(className);
    const decoration = import_view.Decoration.widget(pos, element, {
      id,
      __type,
      type,
      element,
      onDestroy,
      onUpdate
    });
    this.placeholderWidgets.set(id, decoration);
    this.placeholders = this.placeholders.add(tr.doc, [decoration]);
  }
  /**
   * Add an inline placeholder.
   */
  addInlinePlaceholder(placeholder, tr) {
    const {
      from = tr.selection.from,
      to = tr.selection.to,
      className,
      nodeName,
      id,
      type
    } = placeholder;
    let decoration;
    if (from === to) {
      const element = document.createElement(nodeName);
      element.classList.add(className);
      decoration = import_view.Decoration.widget(from, element, {
        id,
        type,
        __type,
        widget: element
      });
    } else {
      decoration = import_view.Decoration.inline(
        from,
        to,
        { nodeName, class: className },
        {
          id,
          __type
        }
      );
    }
    this.placeholders = this.placeholders.add(tr.doc, [decoration]);
  }
  /**
   * Add a placeholder for nodes.
   */
  addNodePlaceholder(placeholder, tr) {
    const { pos, className, nodeName, id } = placeholder;
    const $pos = (0, import_core_helpers8.isNumber)(pos) ? tr.doc.resolve(pos) : tr.selection.$from;
    const found = (0, import_core_helpers8.isNumber)(pos) ? $pos.nodeAfter ? { pos, end: $pos.nodeAfter.nodeSize } : void 0 : (0, import_core_utils5.findNodeAtPosition)($pos);
    if (!found) {
      return;
    }
    const decoration = import_view.Decoration.node(
      found.pos,
      found.end,
      { nodeName, class: className },
      { id, __type }
    );
    this.placeholders = this.placeholders.add(tr.doc, [decoration]);
  }
  /**
   * Add the node and class name to the placeholder object.
   */
  withRequiredBase(id, placeholder) {
    const { placeholderNodeName, placeholderClassName } = this.options;
    const _a12 = placeholder, { nodeName = placeholderNodeName, className } = _a12, rest = __objRest(_a12, ["nodeName", "className"]);
    const classes = (className ? [placeholderClassName, className] : [placeholderClassName]).join(
      " "
    );
    return __spreadProps(__spreadValues({ nodeName, className: classes }, rest), { id });
  }
  /**
   * Get the command metadata.
   */
  getMeta(tr) {
    var _a12;
    const meta = (_a12 = tr.getMeta(this.pluginKey)) != null ? _a12 : {};
    return __spreadValues(__spreadValues({}, DEFAULT_PLACEHOLDER_META), meta);
  }
  /**
   * Set the metadata for the command.
   */
  setMeta(tr, update) {
    const meta = this.getMeta(tr);
    tr.setMeta(this.pluginKey, __spreadValues(__spreadValues({}, meta), update));
  }
  /**
   * Add a placeholder decoration with the specified params to the transaction
   * and return the transaction.
   *
   * It is up to you to dispatch the transaction or you can just use the
   * commands.
   */
  addPlaceholderTransaction(id, placeholder, tr, checkOnly = false) {
    const existingPosition = this.findPlaceholder(id);
    if (existingPosition) {
      return false;
    }
    if (checkOnly) {
      return true;
    }
    const { added } = this.getMeta(tr);
    this.setMeta(tr, {
      added: [...added, this.withRequiredBase(id, placeholder)]
    });
    return true;
  }
  /**
   * Update the data stored by a placeholder.
   *
   * This replaces the whole data value.
   */
  updatePlaceholderTransaction(props) {
    const { id, tr, checkOnly = false, data } = props;
    const existingPosition = this.findPlaceholder(id);
    if (!existingPosition) {
      return false;
    }
    if (checkOnly) {
      return true;
    }
    const { updated } = this.getMeta(tr);
    this.setMeta(tr, { updated: (0, import_core_helpers8.uniqueArray)([...updated, { id, data }]) });
    return true;
  }
  /**
   * Discards a previously defined tracker once not needed.
   *
   * This should be used to cleanup once the position is no longer needed.
   */
  removePlaceholderTransaction(props) {
    const { id, tr, checkOnly = false } = props;
    const existingPosition = this.findPlaceholder(id);
    if (!existingPosition) {
      return false;
    }
    if (checkOnly) {
      return true;
    }
    const { removed } = this.getMeta(tr);
    this.setMeta(tr, { removed: (0, import_core_helpers8.uniqueArray)([...removed, id]) });
    return true;
  }
  /**
   * This helper returns a transaction that clears all position trackers when
   * any exist.
   *
   * Otherwise it returns undefined.
   */
  clearPlaceholdersTransaction(props) {
    const { tr, checkOnly = false } = props;
    const positionTrackerState = this.getPluginState();
    if (positionTrackerState === import_view.DecorationSet.empty) {
      return false;
    }
    if (checkOnly) {
      return true;
    }
    this.setMeta(tr, { clearTrackers: true });
    return true;
  }
};
_init2 = __decoratorStart(_a2);
__decorateElement(_init2, 1, "updateDecorations", _updateDecorations_dec, DecorationsExtension);
__decorateElement(_init2, 1, "addPlaceholder", _addPlaceholder_dec, DecorationsExtension);
__decorateElement(_init2, 1, "updatePlaceholder", _updatePlaceholder_dec, DecorationsExtension);
__decorateElement(_init2, 1, "removePlaceholder", _removePlaceholder_dec, DecorationsExtension);
__decorateElement(_init2, 1, "clearPlaceholders", _clearPlaceholders_dec, DecorationsExtension);
__decorateElement(_init2, 1, "findPlaceholder", _findPlaceholder_dec, DecorationsExtension);
__decorateElement(_init2, 1, "findAllPlaceholders", _findAllPlaceholders_dec, DecorationsExtension);
DecorationsExtension = __decorateElement(_init2, 0, "DecorationsExtension", _DecorationsExtension_decorators, DecorationsExtension);
__runInitializers(_init2, 1, DecorationsExtension);
var DEFAULT_PLACEHOLDER_META = {
  added: [],
  updated: [],
  clearTrackers: false,
  removed: []
};
var __type = "placeholderDecoration";
var persistentSelectionFocusKey = "persistentSelectionFocus";
function generatePersistentSelectionDecorations(state, decorationSet, attrs) {
  const { selection, doc } = state;
  if (selection.empty) {
    return decorationSet;
  }
  const { from, to } = selection;
  const decoration = (0, import_core_utils5.isNodeSelection)(selection) ? import_view.Decoration.node(from, to, attrs) : import_view.Decoration.inline(from, to, attrs);
  return decorationSet.add(doc, [decoration]);
}

// src/builtins/doc-changed-extension.ts
var import_core_constants7 = require("@remirror/core-constants");
var _DocChangedExtension_decorators, _init3, _a3;
_DocChangedExtension_decorators = [extension({
  handlerKeys: ["docChanged"],
  handlerKeyOptions: {
    docChanged: { earlyReturnValue: false }
    // Execute all handlers, even if one returns false
  },
  defaultPriority: import_core_constants7.ExtensionPriority.Lowest
})];
var DocChangedExtension = class extends (_a3 = PlainExtension) {
  get name() {
    return "docChanged";
  }
  onStateUpdate(props) {
    const { firstUpdate, transactions, tr } = props;
    if (firstUpdate) {
      return;
    }
    if ((transactions != null ? transactions : [tr]).some((tr2) => tr2 == null ? void 0 : tr2.docChanged)) {
      this.options.docChanged(props);
    }
  }
};
_init3 = __decoratorStart(_a3);
DocChangedExtension = __decorateElement(_init3, 0, "DocChangedExtension", _DocChangedExtension_decorators, DocChangedExtension);
__runInitializers(_init3, 1, DocChangedExtension);

// src/builtins/helpers-extension.ts
var import_core_constants8 = require("@remirror/core-constants");
var import_core_helpers9 = require("@remirror/core-helpers");
var import_core_utils6 = require("@remirror/core-utils");
var _getHTML_dec, _getTextBetween_dec, _getText_dec, _insertHtml_dec, _getJSON_dec, _getStateJSON_dec, _isViewEditable_dec, _isSelectionEmpty_dec, _a4, _HelpersExtension_decorators, _init4;
_HelpersExtension_decorators = [extension({})];
var HelpersExtension = class extends (_a4 = PlainExtension, _isSelectionEmpty_dec = [helper()], _isViewEditable_dec = [helper()], _getStateJSON_dec = [helper()], _getJSON_dec = [helper()], _insertHtml_dec = [command()], _getText_dec = [helper()], _getTextBetween_dec = [helper()], _getHTML_dec = [helper()], _a4) {
  constructor() {
    super(...arguments);
    __runInitializers(_init4, 5, this);
  }
  get name() {
    return "helpers";
  }
  /**
   * Add the `html` and `text` string handlers to the editor.
   */
  onCreate() {
    var _a12, _b, _c;
    this.store.setStringHandler("text", this.textToProsemirrorNode.bind(this));
    this.store.setStringHandler("html", import_core_utils6.htmlToProsemirrorNode);
    const helpers = (0, import_core_helpers9.object)();
    const active = (0, import_core_helpers9.object)();
    const attrs = (0, import_core_helpers9.object)();
    const names = /* @__PURE__ */ new Set();
    for (const extension2 of this.store.extensions) {
      if (isNodeExtension(extension2)) {
        active[extension2.name] = (attrs2) => (0, import_core_utils6.isNodeActive)({ state: this.store.getState(), type: extension2.type, attrs: attrs2 });
        attrs[extension2.name] = (attrs2) => {
          var _a13;
          return (_a13 = (0, import_core_utils6.getActiveNode)({ state: this.store.getState(), type: extension2.type, attrs: attrs2 })) == null ? void 0 : _a13.node.attrs;
        };
      }
      if (isMarkExtension(extension2)) {
        active[extension2.name] = (attrs2) => (0, import_core_utils6.isMarkActive)({ trState: this.store.getState(), type: extension2.type, attrs: attrs2 });
        attrs[extension2.name] = (attrs2) => {
          const markRange = (0, import_core_utils6.getMarkRange)(this.store.getState().selection.$from, extension2.type);
          if (!markRange || !attrs2) {
            return markRange == null ? void 0 : markRange.mark.attrs;
          }
          if ((0, import_core_utils6.containsAttributes)(markRange.mark, attrs2)) {
            return markRange.mark.attrs;
          }
          return;
        };
      }
      const extensionHelpers = (_b = (_a12 = extension2.createHelpers) == null ? void 0 : _a12.call(extension2)) != null ? _b : {};
      for (const helperName of Object.keys((_c = extension2.decoratedHelpers) != null ? _c : {})) {
        extensionHelpers[helperName] = extension2[helperName].bind(extension2);
      }
      if ((0, import_core_helpers9.isEmptyObject)(extensionHelpers)) {
        continue;
      }
      for (const [name, helper2] of (0, import_core_helpers9.entries)(extensionHelpers)) {
        throwIfNameNotUnique({ name, set: names, code: import_core_constants8.ErrorConstant.DUPLICATE_HELPER_NAMES });
        helpers[name] = helper2;
      }
    }
    this.store.setStoreKey("attrs", attrs);
    this.store.setStoreKey("active", active);
    this.store.setStoreKey("helpers", helpers);
    this.store.setExtensionStore("attrs", attrs);
    this.store.setExtensionStore("active", active);
    this.store.setExtensionStore("helpers", helpers);
  }
  isSelectionEmpty(state = this.store.getState()) {
    return (0, import_core_utils6.isSelectionEmpty)(state);
  }
  isViewEditable(state = this.store.getState()) {
    var _a12, _b, _c;
    return (_c = (_b = (_a12 = this.store.view.props).editable) == null ? void 0 : _b.call(_a12, state)) != null ? _c : false;
  }
  getStateJSON(state = this.store.getState()) {
    return state.toJSON();
  }
  getJSON(state = this.store.getState()) {
    return state.doc.toJSON();
  }
  insertHtml(html, options) {
    return (props) => {
      const { state } = props;
      const fragment = (0, import_core_utils6.htmlToProsemirrorNode)({
        content: html,
        schema: state.schema,
        fragment: true
      });
      return this.store.commands.insertNode.original(fragment, options)(props);
    };
  }
  getText({
    lineBreakDivider = "\n\n",
    state = this.store.getState()
  } = {}) {
    return state.doc.textBetween(0, state.doc.content.size, lineBreakDivider, import_core_constants8.NULL_CHARACTER);
  }
  getTextBetween(from, to, doc = this.store.getState().doc) {
    return doc.textBetween(from, to, "\n\n", import_core_constants8.NULL_CHARACTER);
  }
  getHTML(state = this.store.getState()) {
    return (0, import_core_utils6.prosemirrorNodeToHtml)(state.doc, this.store.document);
  }
  textToProsemirrorNode(options) {
    const content = "<pre>".concat(options.content, "</pre>");
    return this.store.stringHandlers.html(__spreadProps(__spreadValues({}, options), { content }));
  }
};
_init4 = __decoratorStart(_a4);
__decorateElement(_init4, 1, "isSelectionEmpty", _isSelectionEmpty_dec, HelpersExtension);
__decorateElement(_init4, 1, "isViewEditable", _isViewEditable_dec, HelpersExtension);
__decorateElement(_init4, 1, "getStateJSON", _getStateJSON_dec, HelpersExtension);
__decorateElement(_init4, 1, "getJSON", _getJSON_dec, HelpersExtension);
__decorateElement(_init4, 1, "insertHtml", _insertHtml_dec, HelpersExtension);
__decorateElement(_init4, 1, "getText", _getText_dec, HelpersExtension);
__decorateElement(_init4, 1, "getTextBetween", _getTextBetween_dec, HelpersExtension);
__decorateElement(_init4, 1, "getHTML", _getHTML_dec, HelpersExtension);
HelpersExtension = __decorateElement(_init4, 0, "HelpersExtension", _HelpersExtension_decorators, HelpersExtension);
__runInitializers(_init4, 1, HelpersExtension);

// src/builtins/input-rules-extension.ts
var import_core_constants9 = require("@remirror/core-constants");
var import_inputrules = require("@remirror/pm/inputrules");
var _InputRulesExtension_decorators, _init5, _a5;
_InputRulesExtension_decorators = [extension({
  defaultPriority: import_core_constants9.ExtensionPriority.Default,
  handlerKeys: ["shouldSkipInputRule"],
  // Return when the value `true` is encountered.
  handlerKeyOptions: { shouldSkipInputRule: { earlyReturnValue: true } }
})];
var InputRulesExtension = class extends (_a5 = PlainExtension) {
  get name() {
    return "inputRules";
  }
  /**
   * Add the extension store method for rebuilding all input rules.
   */
  onCreate() {
    this.store.setExtensionStore("rebuildInputRules", this.rebuildInputRules.bind(this));
  }
  /**
   * Add the `inputRules` plugin to the editor.
   */
  createExternalPlugins() {
    return [this.generateInputRulesPlugin()];
  }
  generateInputRulesPlugin() {
    var _a12, _b;
    const rules = [];
    const invalidMarks = this.store.markTags[import_core_constants9.ExtensionTag.ExcludeInputRules];
    for (const extension2 of this.store.extensions) {
      if (
        // managerSettings excluded this from running
        ((_a12 = this.store.managerSettings.exclude) == null ? void 0 : _a12.inputRules) || // Method doesn't exist
        !extension2.createInputRules || // Extension settings exclude it
        ((_b = extension2.options.exclude) == null ? void 0 : _b.inputRules)
      ) {
        continue;
      }
      for (const rule of extension2.createInputRules()) {
        rule.shouldSkip = this.options.shouldSkipInputRule;
        rule.invalidMarks = invalidMarks;
        rules.push(rule);
      }
    }
    return (0, import_inputrules.inputRules)({ rules });
  }
  /**
   * The method for rebuilding all the input rules.
   *
   * 1. Rebuild inputRules.
   * 2. Replace the old input rules plugin.
   * 3. Update the plugins used in the state (triggers an editor update).
   */
  rebuildInputRules() {
    this.store.updateExtensionPlugins(this);
  }
};
_init5 = __decoratorStart(_a5);
InputRulesExtension = __decorateElement(_init5, 0, "InputRulesExtension", _InputRulesExtension_decorators, InputRulesExtension);
__runInitializers(_init5, 1, InputRulesExtension);

// src/builtins/keymap-extension.ts
var import_core_constants10 = require("@remirror/core-constants");
var import_core_helpers10 = require("@remirror/core-helpers");
var import_core_utils7 = require("@remirror/core-utils");
var import_commands4 = require("@remirror/pm/commands");
var import_inputrules2 = require("@remirror/pm/inputrules");
var import_keymap = require("@remirror/pm/keymap");
var import_state2 = require("@remirror/pm/state");
var _getNamedShortcut_dec, _backspace_dec, _arrowLeftShortcut_dec, _arrowRightShortcut_dec, _a6, _KeymapExtension_decorators, _init6;
_KeymapExtension_decorators = [extension({
  defaultPriority: import_core_constants10.ExtensionPriority.Low,
  defaultOptions: {
    shortcuts: "default",
    undoInputRuleOnBackspace: true,
    selectParentNodeOnEscape: false,
    excludeBaseKeymap: false,
    exitMarksOnArrowPress: true
  },
  customHandlerKeys: ["keymap"]
})];
var KeymapExtension = class extends (_a6 = PlainExtension, _arrowRightShortcut_dec = [keyBinding({
  shortcut: "ArrowRight",
  isActive: (options) => options.exitMarksOnArrowPress
})], _arrowLeftShortcut_dec = [keyBinding({
  shortcut: "ArrowLeft",
  isActive: (options) => options.exitMarksOnArrowPress
})], _backspace_dec = [keyBinding({
  shortcut: "Backspace",
  isActive: (options) => options.exitMarksOnArrowPress
})], _getNamedShortcut_dec = [helper()], _a6) {
  constructor() {
    super(...arguments);
    __runInitializers(_init6, 5, this);
    /**
     * The custom keybindings added by the handlers. In react these can be added
     * via `hooks`.
     */
    __publicField(this, "extraKeyBindings", []);
    /**
     * Track the backward exits from a mark to allow double tapping the left arrow
     * to move to the previous block node.
     */
    __publicField(this, "backwardMarkExitTracker", /* @__PURE__ */ new Map());
    /**
     * The underlying keydown handler.
     */
    __publicField(this, "keydownHandler", null);
    /**
     * @internalremarks
     *
     * Think about the case where bindings are disposed of and then added in a
     * different position in the `extraKeyBindings` array. This is especially
     * pertinent when using hooks.
     */
    __publicField(this, "onAddCustomHandler", ({ keymap }) => {
      var _a12, _b;
      if (!keymap) {
        return;
      }
      this.extraKeyBindings = [...this.extraKeyBindings, keymap];
      (_b = (_a12 = this.store).rebuildKeymap) == null ? void 0 : _b.call(_a12);
      return () => {
        var _a13, _b2;
        this.extraKeyBindings = this.extraKeyBindings.filter((binding) => binding !== keymap);
        (_b2 = (_a13 = this.store).rebuildKeymap) == null ? void 0 : _b2.call(_a13);
      };
    });
    /**
     * The method for rebuilding all the extension keymaps.
     *
     * 1. Rebuild keymaps.
     * 2. Replace `this.keydownHandler` with the new keydown handler.
     */
    __publicField(this, "rebuildKeymap", () => {
      this.setupKeydownHandler();
    });
  }
  get name() {
    return "keymap";
  }
  /**
   * Get the shortcut map.
   */
  get shortcutMap() {
    const { shortcuts } = this.options;
    return (0, import_core_helpers10.isString)(shortcuts) ? keyboardShortcuts[shortcuts] : shortcuts;
  }
  /**
   * This adds the `createKeymap` method functionality to all extensions.
   */
  onCreate() {
    this.store.setExtensionStore("rebuildKeymap", this.rebuildKeymap);
  }
  /** Add the created keymap to the available plugins. */
  createExternalPlugins() {
    var _a12;
    if (
      // The user doesn't want any keymaps in the editor so don't add the keymap
      // handler.
      (_a12 = this.store.managerSettings.exclude) == null ? void 0 : _a12.keymap
    ) {
      return [];
    }
    this.setupKeydownHandler();
    return [
      new import_state2.Plugin({
        props: {
          handleKeyDown: (view, event) => {
            var _a13;
            return (_a13 = this.keydownHandler) == null ? void 0 : _a13.call(this, view, event);
          }
        }
      })
    ];
  }
  setupKeydownHandler() {
    const bindings = this.generateKeymapBindings();
    this.keydownHandler = (0, import_keymap.keydownHandler)(bindings);
  }
  /**
   * Updates the stored keymap bindings on this extension.
   */
  generateKeymapBindings() {
    var _a12, _b, _c;
    const extensionKeymaps = [];
    const shortcutMap = this.shortcutMap;
    const commandsExtension = this.store.getExtension(CommandsExtension);
    const extractNamesFactory = (extension2) => (shortcut) => extractShortcutNames({
      shortcut,
      map: shortcutMap,
      store: this.store,
      options: extension2.options
    });
    for (const extension2 of this.store.extensions) {
      const decoratedKeybindings = (_a12 = extension2.decoratedKeybindings) != null ? _a12 : {};
      if (
        // The extension was configured to ignore the keymap.
        (_b = extension2.options.exclude) == null ? void 0 : _b.keymap
      ) {
        continue;
      }
      if (
        // The extension doesn't have the `createKeymap` method.
        extension2.createKeymap
      ) {
        extensionKeymaps.push(
          updateNamedKeys(extension2.createKeymap(extractNamesFactory(extension2)), shortcutMap)
        );
      }
      for (const [name, options] of (0, import_core_helpers10.entries)(decoratedKeybindings)) {
        if (options.isActive && !options.isActive(extension2.options, this.store)) {
          continue;
        }
        const keyBinding2 = extension2[name].bind(extension2);
        const shortcutNames = extractShortcutNames({
          shortcut: options.shortcut,
          map: shortcutMap,
          options: extension2.options,
          store: this.store
        });
        const priority = (0, import_core_helpers10.isFunction)(options.priority) ? options.priority(extension2.options, this.store) : (_c = options.priority) != null ? _c : import_core_constants10.ExtensionPriority.Low;
        const bindingObject = (0, import_core_helpers10.object)();
        for (const shortcut of shortcutNames) {
          bindingObject[shortcut] = keyBinding2;
        }
        extensionKeymaps.push([priority, bindingObject]);
        if (options.command) {
          commandsExtension.updateDecorated(options.command, { shortcut: shortcutNames });
        }
      }
    }
    const sortedKeymaps = this.sortKeymaps([...this.extraKeyBindings, ...extensionKeymaps]);
    const mappedCommands = (0, import_core_utils7.mergeProsemirrorKeyBindings)(sortedKeymaps);
    return mappedCommands;
  }
  arrowRightShortcut(props) {
    const excludedMarks = this.store.markTags[import_core_constants10.ExtensionTag.PreventExits];
    const excludedNodes = this.store.nodeTags[import_core_constants10.ExtensionTag.PreventExits];
    return this.exitMarkForwards(excludedMarks, excludedNodes)(props);
  }
  arrowLeftShortcut(props) {
    const excludedMarks = this.store.markTags[import_core_constants10.ExtensionTag.PreventExits];
    const excludedNodes = this.store.nodeTags[import_core_constants10.ExtensionTag.PreventExits];
    return (0, import_core_utils7.chainKeyBindingCommands)(
      this.exitNodeBackwards(excludedNodes),
      this.exitMarkBackwards(excludedMarks, excludedNodes)
    )(props);
  }
  backspace(props) {
    const excludedMarks = this.store.markTags[import_core_constants10.ExtensionTag.PreventExits];
    const excludedNodes = this.store.nodeTags[import_core_constants10.ExtensionTag.PreventExits];
    return (0, import_core_utils7.chainKeyBindingCommands)(
      this.exitNodeBackwards(excludedNodes, true),
      this.exitMarkBackwards(excludedMarks, excludedNodes, true)
    )(props);
  }
  /**
   * Create the base keymap and give it a low priority so that all other keymaps
   * override it.
   */
  createKeymap() {
    const { selectParentNodeOnEscape, undoInputRuleOnBackspace, excludeBaseKeymap } = this.options;
    const baseKeyBindings = (0, import_core_helpers10.object)();
    if (!excludeBaseKeymap) {
      for (const [key2, value] of (0, import_core_helpers10.entries)(import_commands4.baseKeymap)) {
        baseKeyBindings[key2] = (0, import_core_utils7.convertCommand)(value);
      }
    }
    if (undoInputRuleOnBackspace && import_commands4.baseKeymap.Backspace) {
      baseKeyBindings.Backspace = (0, import_core_utils7.convertCommand)(
        (0, import_commands4.pmChainCommands)(import_inputrules2.undoInputRule, import_commands4.baseKeymap.Backspace)
      );
    }
    if (selectParentNodeOnEscape) {
      baseKeyBindings.Escape = (0, import_core_utils7.convertCommand)(import_commands4.selectParentNode);
    }
    return [import_core_constants10.ExtensionPriority.Low, baseKeyBindings];
  }
  getNamedShortcut(shortcut, options = {}) {
    if (!shortcut.startsWith("_|")) {
      return [shortcut];
    }
    return extractShortcutNames({
      shortcut,
      map: this.shortcutMap,
      store: this.store,
      options
    });
  }
  /**
   * Handle changes in the dynamic properties.
   */
  onSetOptions(props) {
    var _a12, _b;
    const { changes } = props;
    if (changes.excludeBaseKeymap.changed || changes.selectParentNodeOnEscape.changed || changes.undoInputRuleOnBackspace.changed) {
      (_b = (_a12 = this.store).rebuildKeymap) == null ? void 0 : _b.call(_a12);
    }
  }
  sortKeymaps(bindings) {
    return (0, import_core_helpers10.sort)(
      bindings.map(
        (binding) => (
          // Make all bindings prioritized a default priority of
          // `ExtensionPriority.Default`
          (0, import_core_helpers10.isArray)(binding) ? binding : [import_core_constants10.ExtensionPriority.Default, binding]
        )
      ),
      // Sort from highest binding to the lowest.
      (a, z) => z[0] - a[0]
      // Extract the bindings from the prioritized tuple.
    ).map((binding) => binding[1]);
  }
  /**
   * Exits the mark forwards when at the end of a block node.
   */
  exitMarkForwards(excludedMarks, excludedNodes) {
    return (props) => {
      const { tr, dispatch } = props;
      if (!(0, import_core_utils7.isEndOfTextBlock)(tr.selection)) {
        return false;
      }
      const isInsideExcludedNode = (0, import_core_utils7.findParentNodeOfType)({
        selection: tr.selection,
        types: excludedNodes
      });
      if (isInsideExcludedNode) {
        return false;
      }
      const $pos = tr.selection.$from;
      const marksToRemove = $pos.marks().filter((mark) => !excludedMarks.includes(mark.type.name));
      if ((0, import_core_helpers10.isEmptyArray)(marksToRemove)) {
        return false;
      }
      if (!dispatch) {
        return true;
      }
      for (const mark of marksToRemove) {
        tr.removeStoredMark(mark);
      }
      dispatch(tr.insertText(" ", tr.selection.from));
      return true;
    };
  }
  exitNodeBackwards(excludedNodes, startOfDoc = false) {
    return (props) => {
      const { tr } = props;
      const checker = startOfDoc ? import_core_utils7.isStartOfDoc : import_core_utils7.isStartOfTextBlock;
      if (!checker(tr.selection)) {
        return false;
      }
      const node = tr.selection.$anchor.node();
      if (!(0, import_core_utils7.isEmptyBlockNode)(node) || (0, import_core_utils7.isDefaultBlockNode)(node) || excludedNodes.includes(node.type.name)) {
        return false;
      }
      return this.store.commands.toggleBlockNodeItem.original({ type: node.type })(props);
    };
  }
  /**
   * Exit a mark when at the beginning of a block node.
   */
  exitMarkBackwards(excludedMarks, excludedNodes, startOfDoc = false) {
    return (props) => {
      var _a12;
      const { tr, dispatch } = props;
      const checker = startOfDoc ? import_core_utils7.isStartOfDoc : import_core_utils7.isStartOfTextBlock;
      if (!checker(tr.selection) || this.backwardMarkExitTracker.has(tr.selection.anchor)) {
        this.backwardMarkExitTracker.clear();
        return false;
      }
      const isInsideExcludedNode = (0, import_core_utils7.findParentNodeOfType)({
        selection: tr.selection,
        types: excludedNodes
      });
      if (isInsideExcludedNode) {
        return false;
      }
      const marksToRemove = [...(_a12 = tr.storedMarks) != null ? _a12 : [], ...tr.selection.$from.marks()].filter(
        (mark) => !excludedMarks.includes(mark.type.name)
      );
      if ((0, import_core_helpers10.isEmptyArray)(marksToRemove)) {
        return false;
      }
      if (!dispatch) {
        return true;
      }
      for (const mark of marksToRemove) {
        tr.removeStoredMark(mark);
      }
      this.backwardMarkExitTracker.set(tr.selection.anchor, true);
      dispatch(tr);
      return true;
    };
  }
};
_init6 = __decoratorStart(_a6);
__decorateElement(_init6, 1, "arrowRightShortcut", _arrowRightShortcut_dec, KeymapExtension);
__decorateElement(_init6, 1, "arrowLeftShortcut", _arrowLeftShortcut_dec, KeymapExtension);
__decorateElement(_init6, 1, "backspace", _backspace_dec, KeymapExtension);
__decorateElement(_init6, 1, "getNamedShortcut", _getNamedShortcut_dec, KeymapExtension);
KeymapExtension = __decorateElement(_init6, 0, "KeymapExtension", _KeymapExtension_decorators, KeymapExtension);
__runInitializers(_init6, 1, KeymapExtension);
function isNamedShortcut(value) {
  return (0, import_core_helpers10.includes)((0, import_core_helpers10.values)(import_core_constants10.NamedShortcut), value);
}
function extractShortcutNames({
  shortcut,
  map,
  options,
  store
}) {
  if ((0, import_core_helpers10.isString)(shortcut)) {
    return [normalizeShortcutName(shortcut, map)];
  }
  if ((0, import_core_helpers10.isArray)(shortcut)) {
    return shortcut.map((value) => normalizeShortcutName(value, map));
  }
  shortcut = shortcut(options, store);
  return extractShortcutNames({ shortcut, map, options, store });
}
function normalizeShortcutName(value, shortcutMap) {
  return isNamedShortcut(value) ? shortcutMap[value] : value;
}
function updateNamedKeys(prioritizedBindings, shortcutMap) {
  const updatedBindings = {};
  let previousBindings;
  let priority;
  if ((0, import_core_helpers10.isArray)(prioritizedBindings)) {
    [priority, previousBindings] = prioritizedBindings;
  } else {
    previousBindings = prioritizedBindings;
  }
  for (const [shortcutName, commandFunction] of (0, import_core_helpers10.entries)(previousBindings)) {
    updatedBindings[normalizeShortcutName(shortcutName, shortcutMap)] = commandFunction;
  }
  return (0, import_core_helpers10.isUndefined)(priority) ? updatedBindings : [priority, updatedBindings];
}
var DEFAULT_SHORTCUTS = {
  [import_core_constants10.NamedShortcut.Copy]: "Mod-c",
  [import_core_constants10.NamedShortcut.Cut]: "Mod-x",
  [import_core_constants10.NamedShortcut.Paste]: "Mod-v",
  [import_core_constants10.NamedShortcut.PastePlain]: "Mod-Shift-v",
  [import_core_constants10.NamedShortcut.SelectAll]: "Mod-a",
  [import_core_constants10.NamedShortcut.Undo]: "Mod-z",
  [import_core_constants10.NamedShortcut.Redo]: import_core_utils7.environment.isMac ? "Shift-Mod-z" : "Mod-y",
  [import_core_constants10.NamedShortcut.Bold]: "Mod-b",
  [import_core_constants10.NamedShortcut.Italic]: "Mod-i",
  [import_core_constants10.NamedShortcut.Underline]: "Mod-u",
  [import_core_constants10.NamedShortcut.Strike]: "Mod-d",
  [import_core_constants10.NamedShortcut.Code]: "Mod-`",
  [import_core_constants10.NamedShortcut.Paragraph]: "Mod-Shift-0",
  [import_core_constants10.NamedShortcut.H1]: "Mod-Shift-1",
  [import_core_constants10.NamedShortcut.H2]: "Mod-Shift-2",
  [import_core_constants10.NamedShortcut.H3]: "Mod-Shift-3",
  [import_core_constants10.NamedShortcut.H4]: "Mod-Shift-4",
  [import_core_constants10.NamedShortcut.H5]: "Mod-Shift-5",
  [import_core_constants10.NamedShortcut.H6]: "Mod-Shift-6",
  [import_core_constants10.NamedShortcut.TaskList]: "Mod-Shift-7",
  [import_core_constants10.NamedShortcut.BulletList]: "Mod-Shift-8",
  [import_core_constants10.NamedShortcut.OrderedList]: "Mod-Shift-9",
  [import_core_constants10.NamedShortcut.Quote]: "Mod->",
  [import_core_constants10.NamedShortcut.Divider]: "Mod-Shift-|",
  [import_core_constants10.NamedShortcut.Codeblock]: "Mod-Shift-~",
  [import_core_constants10.NamedShortcut.ClearFormatting]: "Mod-Shift-C",
  [import_core_constants10.NamedShortcut.Superscript]: "Mod-.",
  [import_core_constants10.NamedShortcut.Subscript]: "Mod-,",
  [import_core_constants10.NamedShortcut.LeftAlignment]: "Mod-Shift-L",
  [import_core_constants10.NamedShortcut.CenterAlignment]: "Mod-Shift-E",
  [import_core_constants10.NamedShortcut.RightAlignment]: "Mod-Shift-R",
  [import_core_constants10.NamedShortcut.JustifyAlignment]: "Mod-Shift-J",
  [import_core_constants10.NamedShortcut.InsertLink]: "Mod-k",
  [import_core_constants10.NamedShortcut.Find]: "Mod-f",
  [import_core_constants10.NamedShortcut.FindBackwards]: "Mod-Shift-f",
  [import_core_constants10.NamedShortcut.FindReplace]: "Mod-Shift-H",
  [import_core_constants10.NamedShortcut.AddFootnote]: "Mod-Alt-f",
  [import_core_constants10.NamedShortcut.AddComment]: "Mod-Alt-m",
  [import_core_constants10.NamedShortcut.ContextMenu]: "Mod-Shift-\\",
  [import_core_constants10.NamedShortcut.IncreaseFontSize]: "Mod-Shift-.",
  [import_core_constants10.NamedShortcut.DecreaseFontSize]: "Mod-Shift-,",
  [import_core_constants10.NamedShortcut.IncreaseIndent]: "Tab",
  [import_core_constants10.NamedShortcut.DecreaseIndent]: "Shift-Tab",
  [import_core_constants10.NamedShortcut.Shortcuts]: "Mod-/",
  [import_core_constants10.NamedShortcut.Format]: import_core_utils7.environment.isMac ? "Alt-Shift-f" : "Shift-Ctrl-f"
};
var GOOGLE_DOC_SHORTCUTS = __spreadProps(__spreadValues({}, DEFAULT_SHORTCUTS), {
  [import_core_constants10.NamedShortcut.Strike]: "Mod-Shift-S",
  [import_core_constants10.NamedShortcut.Code]: "Mod-Shift-M",
  [import_core_constants10.NamedShortcut.Paragraph]: "Mod-Alt-0",
  [import_core_constants10.NamedShortcut.H1]: "Mod-Alt-1",
  [import_core_constants10.NamedShortcut.H2]: "Mod-Alt-2",
  [import_core_constants10.NamedShortcut.H3]: "Mod-Alt-3",
  [import_core_constants10.NamedShortcut.H4]: "Mod-Alt-4",
  [import_core_constants10.NamedShortcut.H5]: "Mod-Alt-5",
  [import_core_constants10.NamedShortcut.H6]: "Mod-Alt-6",
  [import_core_constants10.NamedShortcut.OrderedList]: "Mod-Alt-7",
  [import_core_constants10.NamedShortcut.BulletList]: "Mod-Alt-8",
  [import_core_constants10.NamedShortcut.Quote]: "Mod-Alt-9",
  [import_core_constants10.NamedShortcut.ClearFormatting]: "Mod-\\",
  [import_core_constants10.NamedShortcut.IncreaseIndent]: "Mod-[",
  [import_core_constants10.NamedShortcut.DecreaseIndent]: "Mod-]"
});
var keyboardShortcuts = {
  default: DEFAULT_SHORTCUTS,
  googleDoc: GOOGLE_DOC_SHORTCUTS
};

// src/builtins/node-views-extension.ts
var import_core_helpers11 = require("@remirror/core-helpers");
var NodeViewsExtension = class extends PlainExtension {
  get name() {
    return "nodeViews";
  }
  createPlugin() {
    var _a12;
    const nodeViewList = [];
    const nodeViews = (0, import_core_helpers11.object)();
    for (const extension2 of this.store.extensions) {
      if (!extension2.createNodeViews) {
        continue;
      }
      const nodeView = extension2.createNodeViews();
      nodeViewList.unshift((0, import_core_helpers11.isFunction)(nodeView) ? { [extension2.name]: nodeView } : nodeView);
    }
    nodeViewList.unshift((_a12 = this.store.managerSettings.nodeViews) != null ? _a12 : {});
    for (const nodeView of nodeViewList) {
      Object.assign(nodeViews, nodeView);
    }
    return {
      props: { nodeViews }
    };
  }
};

// src/builtins/paste-rules-extension.ts
var import_core_helpers12 = require("@remirror/core-helpers");
var import_paste_rules = require("@remirror/pm/paste-rules");
var PasteRulesExtension = class extends PlainExtension {
  get name() {
    return "pasteRules";
  }
  createExternalPlugins() {
    return [this.generatePasteRulesPlugin()];
  }
  generatePasteRulesPlugin() {
    var _a12, _b;
    const extensionPasteRules = [];
    for (const extension2 of this.store.extensions) {
      if (
        // managerSettings excluded this from running
        ((_a12 = this.store.managerSettings.exclude) == null ? void 0 : _a12.pasteRules) || // Method doesn't exist
        !extension2.createPasteRules || // Extension settings exclude it
        ((_b = extension2.options.exclude) == null ? void 0 : _b.pasteRules)
      ) {
        continue;
      }
      const value = extension2.createPasteRules();
      const rules = (0, import_core_helpers12.isArray)(value) ? value : [value];
      extensionPasteRules.push(...rules);
    }
    return (0, import_paste_rules.pasteRules)(extensionPasteRules);
  }
};

// src/builtins/plugins-extension.ts
var import_core_constants11 = require("@remirror/core-constants");
var import_core_helpers13 = require("@remirror/core-helpers");
var import_state3 = require("@remirror/pm/state");
var _PluginsExtension_decorators, _init7, _a7;
_PluginsExtension_decorators = [extension({
  defaultPriority: import_core_constants11.ExtensionPriority.Highest,
  handlerKeys: ["applyState", "appendTransaction"]
})];
var PluginsExtension = class extends (_a7 = PlainExtension) {
  constructor() {
    super(...arguments);
    /**
     * All plugins created by other extension as well.
     */
    __publicField(this, "plugins", []);
    /**
     * The plugins added via the manager (for reference only).
     */
    __publicField(this, "managerPlugins", []);
    /**
     * Called when the state is is being applied after an update.
     */
    __publicField(this, "applyStateHandlers", []);
    /**
     * Called when the state is first initialized.
     */
    __publicField(this, "initStateHandlers", []);
    /**
     * Handlers for the `onAppendTransaction` lifecycle method.
     */
    __publicField(this, "appendTransactionHandlers", []);
    /**
     * Store the plugin keys.
     */
    __publicField(this, "pluginKeys", (0, import_core_helpers13.object)());
    /**
     * Store state getters for the extension.
     */
    __publicField(this, "stateGetters", /* @__PURE__ */ new Map());
    __publicField(this, "getPluginStateCreator", (key2) => (state) => key2.getState(state != null ? state : this.store.getState()));
    // Method for retrieving the plugin state by the extension name.
    __publicField(this, "getStateByName", (identifier) => {
      const stateGetter = this.stateGetters.get(identifier);
      (0, import_core_helpers13.invariant)(stateGetter, { message: "No plugin exists for the requested extension name." });
      return stateGetter();
    });
  }
  get name() {
    return "plugins";
  }
  /**
   * This extension is responsible for adding state to the editor.
   */
  onCreate() {
    const { setStoreKey, setExtensionStore, managerSettings, extensions } = this.store;
    this.updateExtensionStore();
    const { plugins = [] } = managerSettings;
    this.updatePlugins(plugins, this.managerPlugins);
    for (const extension2 of extensions) {
      if (extension2.onApplyState) {
        this.applyStateHandlers.push(extension2.onApplyState.bind(extension2));
      }
      if (extension2.onInitState) {
        this.initStateHandlers.push(extension2.onInitState.bind(extension2));
      }
      if (extension2.onAppendTransaction) {
        this.appendTransactionHandlers.push(extension2.onAppendTransaction.bind(extension2));
      }
      this.extractExtensionPlugins(extension2);
    }
    this.managerPlugins = plugins;
    this.store.setStoreKey("plugins", this.plugins);
    setStoreKey("pluginKeys", this.pluginKeys);
    setStoreKey("getPluginState", this.getStateByName);
    setExtensionStore("getPluginState", this.getStateByName);
  }
  /**
   * Create a plugin which adds the [[`onInitState`]] and [[`onApplyState`]]
   * lifecycle methods.
   */
  createPlugin() {
    return {
      appendTransaction: (transactions, previousState, state) => {
        const tr = state.tr;
        const props = { previousState, tr, transactions, state };
        for (const handler of this.appendTransactionHandlers) {
          handler(props);
        }
        this.options.appendTransaction(props);
        return tr.docChanged || tr.steps.length > 0 || tr.selectionSet || tr.storedMarksSet ? tr : void 0;
      },
      state: {
        init: (_, state) => {
          for (const handler of this.initStateHandlers) {
            handler(state);
          }
        },
        apply: (tr, _, previousState, state) => {
          const props = { previousState, state, tr };
          for (const handler of this.applyStateHandlers) {
            handler(props);
          }
          this.options.applyState(props);
        }
      }
    };
  }
  /**
   * Get all the plugins from the extension.
   */
  extractExtensionPlugins(extension2) {
    var _a12, _b;
    const isNotPluginCreator = !extension2.createPlugin && !extension2.createExternalPlugins;
    if (isNotPluginCreator || // the manager settings don't exclude plugins
    ((_a12 = this.store.managerSettings.exclude) == null ? void 0 : _a12.plugins) || // The extension settings don't exclude plugins
    ((_b = extension2.options.exclude) == null ? void 0 : _b.plugins)) {
      return;
    }
    if (extension2.createPlugin) {
      const key2 = new import_state3.PluginKey(extension2.name);
      this.pluginKeys[extension2.name] = key2;
      const getter = this.getPluginStateCreator(key2);
      extension2.pluginKey = key2;
      extension2.getPluginState = getter;
      this.stateGetters.set(extension2.name, getter);
      this.stateGetters.set(extension2.constructor, getter);
      const pluginSpec = __spreadProps(__spreadValues({}, extension2.createPlugin()), {
        key: key2
      });
      const plugin = new import_state3.Plugin(pluginSpec);
      this.updatePlugins([plugin], extension2.plugin ? [extension2.plugin] : void 0);
      extension2.plugin = plugin;
    }
    if (extension2.createExternalPlugins) {
      const externalPlugins = extension2.createExternalPlugins();
      this.updatePlugins(externalPlugins, extension2.externalPlugins);
      extension2.externalPlugins = externalPlugins;
    }
  }
  /**
   * Add or replace a plugin.
   */
  updatePlugins(plugins, previous) {
    if (!previous || (0, import_core_helpers13.isEmptyArray)(previous)) {
      this.plugins = [...this.plugins, ...plugins];
      return;
    }
    if (plugins.length !== previous.length) {
      this.plugins = [...this.plugins.filter((plugin) => !previous.includes(plugin)), ...plugins];
      return;
    }
    const pluginMap = /* @__PURE__ */ new Map();
    for (const [index, plugin] of plugins.entries()) {
      pluginMap.set((0, import_core_helpers13.assertGet)(previous, index), plugin);
    }
    this.plugins = this.plugins.map(
      (plugin) => (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        previous.includes(plugin) ? pluginMap.get(plugin) : plugin
      )
    );
  }
  /**
   * Add the plugin specific properties and methods to the manager and extension
   * store.
   */
  updateExtensionStore() {
    const { setExtensionStore } = this.store;
    setExtensionStore("updatePlugins", this.updatePlugins.bind(this));
    setExtensionStore("dispatchPluginUpdate", this.dispatchPluginUpdate.bind(this));
    setExtensionStore("updateExtensionPlugins", this.updateExtensionPlugins.bind(this));
  }
  /**
   * Reruns the `createPlugin` and `createExternalPlugins` methods of the
   * provided extension.
   *
   * ```ts
   * // From within an extension
   * this.store.updateExtensionPlugins(this);
   * ```
   */
  updateExtensionPlugins(value) {
    const extension2 = isExtension(value) ? value : isExtensionConstructor(value) ? this.store.manager.getExtension(value) : this.store.extensions.find((extension3) => extension3.name === value);
    (0, import_core_helpers13.invariant)(extension2, {
      code: import_core_constants11.ErrorConstant.INVALID_MANAGER_EXTENSION,
      message: "The extension ".concat(value, " does not exist within the editor.")
    });
    this.extractExtensionPlugins(extension2);
    this.store.setStoreKey("plugins", this.plugins);
    this.dispatchPluginUpdate();
  }
  /**
   * Applies the store plugins to the state. If any have changed then it will be
   * updated.
   */
  dispatchPluginUpdate() {
    (0, import_core_helpers13.invariant)(this.store.phase >= import_core_constants11.ManagerPhase.EditorView, {
      code: import_core_constants11.ErrorConstant.MANAGER_PHASE_ERROR,
      message: "`dispatchPluginUpdate` should only be called after the view has been added to the manager."
    });
    const { view, updateState } = this.store;
    const newState = view.state.reconfigure({ plugins: this.plugins });
    updateState(newState);
  }
};
_init7 = __decoratorStart(_a7);
PluginsExtension = __decorateElement(_init7, 0, "PluginsExtension", _PluginsExtension_decorators, PluginsExtension);
__runInitializers(_init7, 1, PluginsExtension);

// src/builtins/schema-extension.ts
var import_core_constants12 = require("@remirror/core-constants");
var import_core_helpers14 = require("@remirror/core-helpers");
var import_core_utils8 = require("@remirror/core-utils");
var import_model2 = require("@remirror/pm/model");
var import_suggest = require("@remirror/pm/suggest");
var _SchemaExtension_decorators, _init8, _a8;
_SchemaExtension_decorators = [extension({ defaultPriority: import_core_constants12.ExtensionPriority.Highest })];
var SchemaExtension = class extends (_a8 = PlainExtension) {
  constructor() {
    super(...arguments);
    /**
     * The dynamic attributes for each node and mark extension.
     *
     * The structure will look like the following.
     *
     * ```ts
     * {
     *   paragraph: { id: () => uid(), hash: (node) => hash(node) },
     *   bold: { random: () => Math.random(), created: () => Date.now() },
     * };
     * ```
     *
     * This object is used by the created plugin to listen for changes to the doc,
     * and check for new nodes and marks which haven't yet applied the dynamic
     * attribute and add the attribute.
     */
    __publicField(this, "dynamicAttributes", {
      marks: (0, import_core_helpers14.object)(),
      nodes: (0, import_core_helpers14.object)()
    });
  }
  get name() {
    return "schema";
  }
  /**
   * This method is responsible for creating, configuring and adding the
   * `schema` to the editor. `Schema` is a special type in ProseMirror editors
   * and with `remirror` it's all just handled for you.
   */
  onCreate() {
    var _a12;
    const { managerSettings, tags, markNames, nodeNames, extensions } = this.store;
    const { defaultBlockNode, disableExtraAttributes, nodeOverride, markOverride } = managerSettings;
    const isValidDefaultBlockNode = (name) => !!(name && tags[import_core_constants12.ExtensionTag.Block].includes(name));
    if (managerSettings.schema) {
      const { nodes: nodes2, marks: marks2 } = getSpecFromSchema(managerSettings.schema);
      this.addSchema(managerSettings.schema, nodes2, marks2);
      return;
    }
    const nodes = isValidDefaultBlockNode(defaultBlockNode) ? {
      doc: (0, import_core_helpers14.object)(),
      // Ensure that this is the highest positioned block node by adding it
      // to the object early. Later on it will be overwritten but maintain
      // it's position.
      [defaultBlockNode]: (0, import_core_helpers14.object)()
    } : (0, import_core_helpers14.object)();
    const marks = (0, import_core_helpers14.object)();
    const namedExtraAttributes = getNamedSchemaAttributes({
      settings: managerSettings,
      gatheredSchemaAttributes: this.gatherExtraAttributes(extensions),
      nodeNames,
      markNames,
      tags
    });
    for (const extension2 of extensions) {
      namedExtraAttributes[extension2.name] = __spreadValues(__spreadValues({}, namedExtraAttributes[extension2.name]), extension2.options.extraAttributes);
      const ignoreExtraAttributes = disableExtraAttributes === true || extension2.options.disableExtraAttributes === true || extension2.constructor.disableExtraAttributes === true;
      if (isNodeExtension(extension2)) {
        const { spec, dynamic } = createSpec({
          createExtensionSpec: (extra, override) => extension2.createNodeSpec(extra, override),
          extraAttributes: (0, import_core_helpers14.assertGet)(namedExtraAttributes, extension2.name),
          // Todo add support for setting overrides via the manager.
          override: __spreadValues(__spreadValues({}, nodeOverride), extension2.options.nodeOverride),
          ignoreExtraAttributes,
          name: extension2.constructorName,
          tags: extension2.tags
        });
        extension2.spec = spec;
        nodes[extension2.name] = spec;
        if (Object.keys(dynamic).length > 0) {
          this.dynamicAttributes.nodes[extension2.name] = dynamic;
        }
      }
      if (isMarkExtension(extension2)) {
        const { spec, dynamic } = createSpec({
          createExtensionSpec: (extra, override) => extension2.createMarkSpec(extra, override),
          extraAttributes: (0, import_core_helpers14.assertGet)(namedExtraAttributes, extension2.name),
          // Todo add support for setting overrides via the manager.
          override: __spreadValues(__spreadValues({}, markOverride), extension2.options.markOverride),
          ignoreExtraAttributes,
          name: extension2.constructorName,
          tags: (_a12 = extension2.tags) != null ? _a12 : []
        });
        extension2.spec = spec;
        marks[extension2.name] = spec;
        if (Object.keys(dynamic).length > 0) {
          this.dynamicAttributes.marks[extension2.name] = dynamic;
        }
      }
    }
    const schema = new import_model2.Schema({ nodes, marks, topNode: "doc" });
    this.addSchema(
      schema,
      nodes,
      marks
    );
  }
  /**
   * This creates the plugin that is used to automatically create the dynamic
   * attributes defined in the extra attributes object.
   */
  createPlugin() {
    return {
      appendTransaction: (transactions, _, nextState) => {
        const { tr } = nextState;
        const documentHasChanged = transactions.some((tr2) => tr2.docChanged);
        if (!documentHasChanged) {
          return null;
        }
        if (Object.keys(this.dynamicAttributes.nodes).length === 0 && Object.keys(this.dynamicAttributes.marks).length === 0) {
          return null;
        }
        tr.doc.descendants((child, pos) => {
          this.checkAndUpdateDynamicNodes(child, pos, tr);
          this.checkAndUpdateDynamicMarks(child, pos, tr);
          return true;
        });
        return tr.steps.length > 0 ? tr : null;
      }
    };
  }
  /**
   * Add the schema and nodes to the manager and extension store.
   */
  addSchema(schema, nodes, marks) {
    this.store.setStoreKey("nodes", nodes);
    this.store.setStoreKey("marks", marks);
    this.store.setStoreKey("schema", schema);
    this.store.setExtensionStore("schema", schema);
    this.store.setStoreKey("defaultBlockNode", (0, import_core_utils8.getDefaultBlockNode)(schema).name);
    for (const type of Object.values(schema.nodes)) {
      if (type.name === "doc") {
        continue;
      }
      if (type.isBlock || type.isTextblock) {
        break;
      }
    }
  }
  /**
   * Check the dynamic nodes to see if the provided node:
   *
   * - a) is dynamic and therefore can be updated.
   * - b) has just been created and does not yet have a value for the dynamic
   *   node.
   *
   * @param node - the node
   * @param pos - the node's position
   * @param tr - the mutable ProseMirror transaction which is applied to create
   * the next editor state
   */
  checkAndUpdateDynamicNodes(node, pos, tr) {
    for (const [name, dynamic] of (0, import_core_helpers14.entries)(this.dynamicAttributes.nodes)) {
      if (node.type.name !== name) {
        continue;
      }
      for (const [attributeName, attributeCreator] of (0, import_core_helpers14.entries)(dynamic)) {
        if (!(0, import_core_helpers14.isNullOrUndefined)(node.attrs[attributeName])) {
          continue;
        }
        const attrs = __spreadProps(__spreadValues({}, node.attrs), { [attributeName]: attributeCreator(node) });
        tr.setNodeMarkup(pos, void 0, attrs);
        (0, import_suggest.ignoreUpdateForSuggest)(tr);
      }
    }
  }
  /**
   * Loop through the dynamic marks to see if the provided node:
   *
   * - a) is wrapped by a matching mark.
   * - b) has just been added and doesn't yet have the dynamic attribute
   *   applied.
   *
   * @param node - the node
   * @param pos - the node's position
   * @param tr - the mutable ProseMirror transaction which is applied to create
   * the next editor state.
   */
  checkAndUpdateDynamicMarks(node, pos, tr) {
    for (const [name, dynamic] of (0, import_core_helpers14.entries)(this.dynamicAttributes.marks)) {
      const type = (0, import_core_helpers14.assertGet)(this.store.schema.marks, name);
      const mark = node.marks.find((mark2) => mark2.type.name === name);
      if (!mark) {
        continue;
      }
      for (const [attributeName, attributeCreator] of (0, import_core_helpers14.entries)(dynamic)) {
        if (!(0, import_core_helpers14.isNullOrUndefined)(mark.attrs[attributeName])) {
          continue;
        }
        const range = (0, import_core_utils8.getMarkRange)(tr.doc.resolve(pos), type);
        if (!range) {
          continue;
        }
        const { from, to } = range;
        const newMark = type.create(__spreadProps(__spreadValues({}, mark.attrs), {
          [attributeName]: attributeCreator(mark)
        }));
        tr.removeMark(from, to, type).addMark(from, to, newMark);
        (0, import_suggest.ignoreUpdateForSuggest)(tr);
      }
    }
  }
  /**
   * Gather all the extra attributes that have been added by extensions.
   */
  gatherExtraAttributes(extensions) {
    const extraSchemaAttributes = [];
    for (const extension2 of extensions) {
      if (!extension2.createSchemaAttributes) {
        continue;
      }
      extraSchemaAttributes.push(...extension2.createSchemaAttributes());
    }
    return extraSchemaAttributes;
  }
};
_init8 = __decoratorStart(_a8);
SchemaExtension = __decorateElement(_init8, 0, "SchemaExtension", _SchemaExtension_decorators, SchemaExtension);
__runInitializers(_init8, 1, SchemaExtension);
function getNamedSchemaAttributes(props) {
  var _a12, _b;
  const { settings, gatheredSchemaAttributes, nodeNames, markNames, tags } = props;
  const extraAttributes = (0, import_core_helpers14.object)();
  if (settings.disableExtraAttributes) {
    return extraAttributes;
  }
  const extraSchemaAttributes = [
    ...gatheredSchemaAttributes,
    ...(_a12 = settings.extraAttributes) != null ? _a12 : []
  ];
  for (const attributeGroup of extraSchemaAttributes != null ? extraSchemaAttributes : []) {
    const identifiers = getIdentifiers({
      identifiers: attributeGroup.identifiers,
      nodeNames,
      markNames,
      tags
    });
    for (const identifier of identifiers) {
      const currentValue = (_b = extraAttributes[identifier]) != null ? _b : {};
      extraAttributes[identifier] = __spreadValues(__spreadValues({}, currentValue), attributeGroup.attributes);
    }
  }
  return extraAttributes;
}
function isIdentifiersObject(value) {
  return (0, import_core_helpers14.isPlainObject)(value) && (0, import_core_helpers14.isArray)(value.tags);
}
function getIdentifiers(props) {
  var _a12;
  const { identifiers, nodeNames, markNames, tags } = props;
  if (identifiers === "nodes") {
    return nodeNames;
  }
  if (identifiers === "marks") {
    return markNames;
  }
  if (identifiers === "all") {
    return [...nodeNames, ...markNames];
  }
  if ((0, import_core_helpers14.isArray)(identifiers)) {
    return identifiers;
  }
  (0, import_core_helpers14.invariant)(isIdentifiersObject(identifiers), {
    code: import_core_constants12.ErrorConstant.EXTENSION_EXTRA_ATTRIBUTES,
    message: "Invalid value passed as an identifier when creating `extraAttributes`."
  });
  const {
    tags: extensionTags = [],
    names: extensionNames = [],
    behavior = "any",
    excludeNames,
    excludeTags,
    type
  } = identifiers;
  const names = /* @__PURE__ */ new Set();
  const acceptableNames = type === "mark" ? markNames : type === "node" ? nodeNames : [...markNames, ...nodeNames];
  const isNameValid = (name) => acceptableNames.includes(name) && !(excludeNames == null ? void 0 : excludeNames.includes(name));
  for (const name of extensionNames) {
    if (isNameValid(name)) {
      names.add(name);
    }
  }
  const taggedNamesMap = /* @__PURE__ */ new Map();
  for (const tag of extensionTags) {
    if (excludeTags == null ? void 0 : excludeTags.includes(tag)) {
      continue;
    }
    for (const name of tags[tag]) {
      if (!isNameValid(name)) {
        continue;
      }
      if (behavior === "any") {
        names.add(name);
        continue;
      }
      const tagSet = (_a12 = taggedNamesMap.get(name)) != null ? _a12 : /* @__PURE__ */ new Set();
      tagSet.add(tag);
      taggedNamesMap.set(name, tagSet);
    }
  }
  for (const [name, tagSet] of taggedNamesMap) {
    if (tagSet.size === extensionTags.length) {
      names.add(name);
    }
  }
  return [...names];
}
function createSpec(props) {
  var _a12, _b;
  const { createExtensionSpec, extraAttributes, ignoreExtraAttributes, name, tags, override } = props;
  const dynamic = (0, import_core_helpers14.object)();
  function addDynamic(attributeName, creator) {
    dynamic[attributeName] = creator;
  }
  let defaultsCalled = false;
  function onDefaultsCalled() {
    defaultsCalled = true;
  }
  const defaults = createDefaults(
    extraAttributes,
    ignoreExtraAttributes,
    onDefaultsCalled,
    addDynamic
  );
  const parse = createParseDOM(extraAttributes, ignoreExtraAttributes);
  const dom = createToDOM(extraAttributes, ignoreExtraAttributes);
  const spec = createExtensionSpec({ defaults, parse, dom }, override);
  (0, import_core_helpers14.invariant)(ignoreExtraAttributes || defaultsCalled, {
    code: import_core_constants12.ErrorConstant.EXTENSION_SPEC,
    message: "When creating a node specification you must call the 'defaults', and parse, and 'dom' methods. To avoid this error you can set the static property 'disableExtraAttributes' of '".concat(name, "' to 'true'.")
  });
  spec.group = [...(_b = (_a12 = spec.group) == null ? void 0 : _a12.split(" ")) != null ? _b : [], ...tags].join(" ") || void 0;
  return { spec, dynamic };
}
function getExtraAttributesObject(value) {
  if ((0, import_core_helpers14.isString)(value) || (0, import_core_helpers14.isFunction)(value)) {
    return { default: value };
  }
  (0, import_core_helpers14.invariant)(value, {
    message: "".concat((0, import_core_helpers14.toString)(value), " is not supported"),
    code: import_core_constants12.ErrorConstant.EXTENSION_EXTRA_ATTRIBUTES
  });
  return value;
}
function createDefaults(extraAttributes, shouldIgnore, onCalled, addDynamicCreator) {
  return () => {
    onCalled();
    const attributes = (0, import_core_helpers14.object)();
    if (shouldIgnore) {
      return attributes;
    }
    for (const [name, config] of (0, import_core_helpers14.entries)(extraAttributes)) {
      const attributesObject = getExtraAttributesObject(config);
      let defaultValue = attributesObject.default;
      if ((0, import_core_helpers14.isFunction)(defaultValue)) {
        addDynamicCreator(name, defaultValue);
        defaultValue = null;
      }
      attributes[name] = defaultValue === void 0 ? {} : { default: defaultValue };
    }
    return attributes;
  };
}
function createParseDOM(extraAttributes, shouldIgnore) {
  return (domNode) => {
    var _b, _c, _d;
    const attributes = (0, import_core_helpers14.object)();
    if (shouldIgnore) {
      return attributes;
    }
    for (const [name, config] of (0, import_core_helpers14.entries)(extraAttributes)) {
      const _a12 = getExtraAttributesObject(config), { parseDOM } = _a12, other = __objRest(_a12, ["parseDOM"]);
      if (!(0, import_core_utils8.isElementDomNode)(domNode)) {
        continue;
      }
      if ((0, import_core_helpers14.isNullOrUndefined)(parseDOM)) {
        attributes[name] = (_b = domNode.getAttribute(name)) != null ? _b : other.default;
        continue;
      }
      if ((0, import_core_helpers14.isFunction)(parseDOM)) {
        attributes[name] = (_c = parseDOM(domNode)) != null ? _c : other.default;
        continue;
      }
      attributes[name] = (_d = domNode.getAttribute(parseDOM)) != null ? _d : other.default;
    }
    return attributes;
  };
}
function createToDOM(extraAttributes, shouldIgnore) {
  return (item) => {
    const domAttributes = (0, import_core_helpers14.object)();
    if (shouldIgnore) {
      return domAttributes;
    }
    function updateDomAttributes(value, name) {
      if (!value) {
        return;
      }
      if ((0, import_core_helpers14.isString)(value)) {
        domAttributes[name] = value;
        return;
      }
      if ((0, import_core_helpers14.isArray)(value)) {
        const [attr, val] = value;
        domAttributes[attr] = val != null ? val : item.attrs[name];
        return;
      }
      for (const [attr, val] of (0, import_core_helpers14.entries)(value)) {
        domAttributes[attr] = val;
      }
    }
    for (const [name, config] of (0, import_core_helpers14.entries)(extraAttributes)) {
      const { toDOM, parseDOM } = getExtraAttributesObject(config);
      if ((0, import_core_helpers14.isNullOrUndefined)(toDOM)) {
        const key2 = (0, import_core_helpers14.isString)(parseDOM) ? parseDOM : name;
        domAttributes[key2] = item.attrs[name];
        continue;
      }
      if ((0, import_core_helpers14.isFunction)(toDOM)) {
        updateDomAttributes(toDOM(item.attrs, getNodeMarkOptions(item)), name);
        continue;
      }
      updateDomAttributes(toDOM, name);
    }
    return domAttributes;
  };
}
function getNodeMarkOptions(item) {
  if ((0, import_core_utils8.isProsemirrorNode)(item)) {
    return { node: item };
  }
  if ((0, import_core_utils8.isProsemirrorMark)(item)) {
    return { mark: item };
  }
  return {};
}
function getSpecFromSchema(schema) {
  const nodes = (0, import_core_helpers14.object)();
  const marks = (0, import_core_helpers14.object)();
  for (const [name, type] of Object.entries(schema.nodes)) {
    nodes[name] = type.spec;
  }
  for (const [name, type] of Object.entries(schema.marks)) {
    marks[name] = type.spec;
  }
  return { nodes, marks };
}

// src/builtins/suggest-extension.ts
var import_core_helpers15 = require("@remirror/core-helpers");
var import_suggest2 = require("@remirror/pm/suggest");
var _isSuggesterActive_dec, _getSuggestMethods_dec, _getSuggestState_dec, _a9, _SuggestExtension_decorators, _init9;
_SuggestExtension_decorators = [extension({ customHandlerKeys: ["suggester"] })];
var SuggestExtension = class extends (_a9 = PlainExtension, _getSuggestState_dec = [helper()], _getSuggestMethods_dec = [helper()], _isSuggesterActive_dec = [helper()], _a9) {
  constructor() {
    super(...arguments);
    __runInitializers(_init9, 5, this);
    /**
     * Allow additional `Suggesters` to be added to the editor. This can be used
     * by `React` to create hooks.
     */
    __publicField(this, "onAddCustomHandler", ({ suggester }) => {
      var _a12;
      if (!suggester || ((_a12 = this.store.managerSettings.exclude) == null ? void 0 : _a12.suggesters)) {
        return;
      }
      return (0, import_suggest2.addSuggester)(this.store.getState(), suggester);
    });
  }
  get name() {
    return "suggest";
  }
  /**
   * Create the `addSuggester` method and `removeSuggester` methods to the
   * extension store.
   *
   * This can be used by extensions to conditionally add suggestion support.
   */
  onCreate() {
    this.store.setExtensionStore(
      "addSuggester",
      (suggester) => (0, import_suggest2.addSuggester)(this.store.getState(), suggester)
    );
    this.store.setExtensionStore(
      "removeSuggester",
      (suggester) => (0, import_suggest2.removeSuggester)(this.store.getState(), suggester)
    );
  }
  /**
   * Add the `prosemirror-suggest` plugin to the editor.
   */
  createExternalPlugins() {
    var _a12, _b;
    const suggesters = [];
    for (const extension2 of this.store.extensions) {
      if ((_a12 = this.store.managerSettings.exclude) == null ? void 0 : _a12.suggesters) {
        break;
      }
      if (
        // Method doesn't exist
        !extension2.createSuggesters || // Extension settings exclude it from running
        ((_b = extension2.options.exclude) == null ? void 0 : _b.suggesters)
      ) {
        continue;
      }
      const suggester = extension2.createSuggesters();
      const suggesterList = (0, import_core_helpers15.isArray)(suggester) ? suggester : [suggester];
      suggesters.push(...suggesterList);
    }
    return [(0, import_suggest2.suggest)(...suggesters)];
  }
  getSuggestState(state) {
    return (0, import_suggest2.getSuggestPluginState)(state != null ? state : this.store.getState());
  }
  getSuggestMethods() {
    const {
      addIgnored,
      clearIgnored,
      removeIgnored,
      ignoreNextExit,
      setMarkRemoved,
      findMatchAtPosition,
      findNextTextSelection,
      setLastChangeFromAppend
    } = this.getSuggestState();
    return {
      addIgnored,
      clearIgnored,
      removeIgnored,
      ignoreNextExit,
      setMarkRemoved,
      findMatchAtPosition,
      findNextTextSelection,
      setLastChangeFromAppend
    };
  }
  isSuggesterActive(name) {
    var _a12;
    return (0, import_core_helpers15.includes)((0, import_core_helpers15.isArray)(name) ? name : [name], (_a12 = this.getSuggestState().match) == null ? void 0 : _a12.suggester.name);
  }
};
_init9 = __decoratorStart(_a9);
__decorateElement(_init9, 1, "getSuggestState", _getSuggestState_dec, SuggestExtension);
__decorateElement(_init9, 1, "getSuggestMethods", _getSuggestMethods_dec, SuggestExtension);
__decorateElement(_init9, 1, "isSuggesterActive", _isSuggesterActive_dec, SuggestExtension);
SuggestExtension = __decorateElement(_init9, 0, "SuggestExtension", _SuggestExtension_decorators, SuggestExtension);
__runInitializers(_init9, 1, SuggestExtension);

// src/builtins/tags-extension.ts
var import_core_constants13 = require("@remirror/core-constants");
var import_core_helpers16 = require("@remirror/core-helpers");
var _TagsExtension_decorators, _init10, _a10;
_TagsExtension_decorators = [extension({ defaultPriority: import_core_constants13.ExtensionPriority.Highest })];
var TagsExtension = class extends (_a10 = PlainExtension) {
  constructor() {
    super(...arguments);
    /**
     * Track the tags which have been applied to the extensions in this editor.
     */
    __publicField(this, "allTags", (0, import_core_helpers16.object)());
    /**
     * The tags for plain extensions.
     */
    __publicField(this, "plainTags", (0, import_core_helpers16.object)());
    /**
     * The tags for mark extensions.
     */
    __publicField(this, "markTags", (0, import_core_helpers16.object)());
    /**
     * The tags for node extensions.
     */
    __publicField(this, "nodeTags", (0, import_core_helpers16.object)());
  }
  get name() {
    return "tags";
  }
  /**
   * Create the tags which are used to identify extension with particular
   * behavioral traits.
   */
  onCreate() {
    this.resetTags();
    for (const extension2 of this.store.extensions) {
      this.updateTagForExtension(extension2);
    }
    this.store.setStoreKey("tags", this.allTags);
    this.store.setExtensionStore("tags", this.allTags);
    this.store.setStoreKey("plainTags", this.plainTags);
    this.store.setExtensionStore("plainTags", this.plainTags);
    this.store.setStoreKey("markTags", this.markTags);
    this.store.setExtensionStore("markTags", this.markTags);
    this.store.setStoreKey("nodeTags", this.nodeTags);
    this.store.setExtensionStore("nodeTags", this.nodeTags);
  }
  /**
   * Reset the tags to the empty object with empty arrays.
   */
  resetTags() {
    const allTags = (0, import_core_helpers16.object)();
    const plainTags = (0, import_core_helpers16.object)();
    const markTags = (0, import_core_helpers16.object)();
    const nodeTags = (0, import_core_helpers16.object)();
    for (const tagName of (0, import_core_helpers16.values)(import_core_constants13.ExtensionTag)) {
      allTags[tagName] = [];
      plainTags[tagName] = [];
      markTags[tagName] = [];
      nodeTags[tagName] = [];
    }
    this.allTags = allTags;
    this.plainTags = plainTags;
    this.markTags = markTags;
    this.nodeTags = nodeTags;
  }
  /**
   * Update the tags object for each extension.
   */
  updateTagForExtension(extension2) {
    var _a12, _b, _c, _d, _e, _f;
    const allTags = /* @__PURE__ */ new Set([
      // TODO remove `extension.tags` once all tags have been moved over to `createTags`
      ...(_a12 = extension2.tags) != null ? _a12 : [],
      ...(_c = (_b = extension2.createTags) == null ? void 0 : _b.call(extension2)) != null ? _c : [],
      ...(_d = extension2.options.extraTags) != null ? _d : [],
      ...(_f = (_e = this.store.managerSettings.extraTags) == null ? void 0 : _e[extension2.name]) != null ? _f : []
    ]);
    for (const tag of allTags) {
      (0, import_core_helpers16.invariant)(isExtensionTag(tag), {
        code: import_core_constants13.ErrorConstant.EXTENSION,
        message: "The tag provided by the extension: ".concat(extension2.constructorName, " is not supported by the editor. To add custom tags you can use the 'mutateTag' method.")
      });
      this.allTags[tag].push(extension2.name);
      if (isPlainExtension(extension2)) {
        this.plainTags[tag].push(extension2.name);
      }
      if (isMarkExtension(extension2)) {
        this.markTags[tag].push(extension2.name);
      }
      if (isNodeExtension(extension2)) {
        this.nodeTags[tag].push(extension2.name);
      }
    }
    extension2.tags = [...allTags];
  }
};
_init10 = __decoratorStart(_a10);
TagsExtension = __decorateElement(_init10, 0, "TagsExtension", _TagsExtension_decorators, TagsExtension);
__runInitializers(_init10, 1, TagsExtension);
function isExtensionTag(value) {
  return (0, import_core_helpers16.includes)((0, import_core_helpers16.values)(import_core_constants13.ExtensionTag), value);
}

// src/builtins/upload-extension/file-placeholder-plugin.ts
var import_state4 = require("@remirror/pm/state");
var import_view2 = require("@remirror/pm/view");
var key = new import_state4.PluginKey("remirrorFilePlaceholderPlugin");
function createUploadPlaceholderPlugin() {
  const plugin = new import_state4.Plugin({
    key,
    state: {
      init() {
        return { set: import_view2.DecorationSet.empty, payloads: /* @__PURE__ */ new Map() };
      },
      apply(tr, { set, payloads }) {
        set = set.map(tr.mapping, tr.doc);
        const action = tr.getMeta(plugin);
        if (action) {
          if (action.type === 0 /* ADD_PLACEHOLDER */) {
            const widget = document.createElement("placeholder");
            const deco = import_view2.Decoration.widget(action.pos, widget, { id: action.id });
            set = set.add(tr.doc, [deco]);
            payloads.set(action.id, action.payload);
          } else if (action.type === 1 /* REMOVE_PLACEHOLDER */) {
            set = set.remove(set.find(void 0, void 0, (spec) => spec.id === action.id));
            payloads.delete(action.id);
          }
        }
        return { set, payloads };
      }
    },
    props: {
      decorations(state) {
        var _a12, _b;
        return (_b = (_a12 = plugin.getState(state)) == null ? void 0 : _a12.set) != null ? _b : null;
      }
    }
  });
  return plugin;
}
function findUploadPlaceholderPos(state, id) {
  var _a12, _b;
  const set = (_a12 = key.getState(state)) == null ? void 0 : _a12.set;
  if (set) {
    const decorations = set.find(void 0, void 0, (spec) => spec.id === id);
    const pos = (_b = decorations == null ? void 0 : decorations[0]) == null ? void 0 : _b.from;
    if (pos != null && pos < state.doc.content.size) {
      const $pos = state.doc.resolve(pos);
      const node = $pos.nodeAfter;
      if ((node == null ? void 0 : node.attrs.id) === id) {
        return pos;
      }
    }
  }
  let foundPos;
  state.doc.descendants((node, pos) => {
    if (node.attrs.id === id) {
      foundPos = pos;
    }
    return foundPos === void 0;
  });
  return foundPos;
}
function findUploadPlaceholderPayload(state, id) {
  var _a12;
  const payloads = (_a12 = key.getState(state)) == null ? void 0 : _a12.payloads;
  if (!payloads) {
    return void 0;
  }
  return payloads.get(id);
}
function hasUploadingFile(state) {
  var _a12, _b, _c;
  const placeholderCount = (_c = (_b = (_a12 = key.getState(state)) == null ? void 0 : _a12.payloads) == null ? void 0 : _b.size) != null ? _c : 0;
  return placeholderCount > 0;
}
function setUploadPlaceholderAction(tr, action) {
  return tr.setMeta(key, action);
}

// src/builtins/upload-extension/file-upload.ts
var import_core_helpers17 = require("@remirror/core-helpers");

// src/builtins/upload-extension/upload-context.ts
var import_nanoevents = require("nanoevents");
function createUploadContext() {
  const values3 = {};
  const emitter = (0, import_nanoevents.createNanoEvents)();
  const get = (key2) => values3[key2];
  const set = (key2, value) => {
    values3[key2] = value;
    emitter.emit("set", values3);
  };
  const addListener = (listener) => emitter.on("set", listener);
  return { set, get, addListener };
}

// src/builtins/upload-extension/file-upload.ts
function uploadFile({
  file,
  pos,
  view,
  fileType,
  uploadHandler
}) {
  const id = (0, import_core_helpers17.uniqueId)("file-placeholder-");
  const context = createUploadContext();
  const fileUploader = createFilePlaceholder({
    id,
    context,
    file,
    pos,
    view,
    fileType,
    uploadHandler
  });
  fileUploader == null ? void 0 : fileUploader.upload(context).then((attrs) => onFileLoaded({ id, fileType, view, attrs })).catch((error) => onFileLoaded({ id, fileType, view, attrs: { error: error.message } }));
}
function insertFilePoint(doc, pos, nodeType) {
  const $pos = doc.resolve(pos);
  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) {
    return pos;
  }
  if ($pos.parentOffset === 0) {
    for (let d = $pos.depth - 1; d >= 0; d--) {
      const index = $pos.index(d);
      if ($pos.node(d).canReplaceWith(index, index, nodeType)) {
        return $pos.before(d + 1);
      }
      if (index > 0) {
        return null;
      }
    }
  }
  for (let d = $pos.depth - 1; d >= 0; d--) {
    const index = $pos.indexAfter(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) {
      return $pos.after(d + 1);
    }
    if (index < $pos.node(d).childCount) {
      return null;
    }
  }
  return null;
}
function createFilePlaceholder({
  id,
  context,
  file,
  pos,
  view,
  fileType,
  uploadHandler
}) {
  const tr = view.state.tr;
  const insertPos = insertFilePoint(tr.doc, (0, import_core_helpers17.isNumber)(pos) ? pos : tr.selection.from, fileType);
  if (!(0, import_core_helpers17.isNumber)(insertPos)) {
    return;
  }
  const fileUploader = uploadHandler();
  const attrs = __spreadProps(__spreadValues({}, fileUploader.insert(file)), { id });
  tr.insert(insertPos, fileType.createChecked(attrs));
  const payload = { context, fileUploader };
  setUploadPlaceholderAction(tr, { type: 0 /* ADD_PLACEHOLDER */, id, pos: insertPos, payload });
  view.dispatch(tr);
  return fileUploader;
}
function onFileLoaded({
  id,
  attrs,
  fileType,
  view
}) {
  const placeholderPos = findUploadPlaceholderPos(view.state, id);
  if (placeholderPos == null) {
    return;
  }
  const $pos = view.state.doc.resolve(placeholderPos);
  const fileNode = $pos.nodeAfter;
  if (!fileNode || fileNode.type !== fileType || fileNode.attrs.id !== id) {
    const tr2 = view.state.tr;
    setUploadPlaceholderAction(tr2, { type: 1 /* REMOVE_PLACEHOLDER */, id });
    view.dispatch(tr2);
    return;
  }
  const tr = view.state.tr;
  setUploadPlaceholderAction(tr, { type: 1 /* REMOVE_PLACEHOLDER */, id });
  const fileAttrs = __spreadProps(__spreadValues(__spreadValues({}, fileNode.attrs), attrs), { id: null });
  tr.setNodeMarkup(placeholderPos, void 0, fileAttrs);
  view.dispatch(tr);
}

// src/builtins/upload-extension/upload-extension.ts
var UploadExtension = class extends PlainExtension {
  get name() {
    return "upload";
  }
  /**
   * Create the extension plugin for inserting decorations into the editor.
   */
  createExternalPlugins() {
    return [createUploadPlaceholderPlugin()];
  }
};

// src/builtins/builtin-preset.ts
function builtinPreset(options = {}) {
  const defaultOptions2 = {
    exitMarksOnArrowPress: KeymapExtension.defaultOptions.exitMarksOnArrowPress,
    excludeBaseKeymap: KeymapExtension.defaultOptions.excludeBaseKeymap,
    selectParentNodeOnEscape: KeymapExtension.defaultOptions.selectParentNodeOnEscape,
    undoInputRuleOnBackspace: KeymapExtension.defaultOptions.undoInputRuleOnBackspace,
    persistentSelectionClass: DecorationsExtension.defaultOptions.persistentSelectionClass
  };
  options = __spreadValues(__spreadValues({}, defaultOptions2), options);
  const keymapOptions = (0, import_core_helpers18.pick)(options, [
    "excludeBaseKeymap",
    "selectParentNodeOnEscape",
    "undoInputRuleOnBackspace"
  ]);
  const decorationsOptions = (0, import_core_helpers18.pick)(options, ["persistentSelectionClass"]);
  return [
    // The order of these extension is important. First come first served.
    new TagsExtension(),
    new SchemaExtension(),
    new AttributesExtension(),
    new PluginsExtension(),
    new InputRulesExtension(),
    new PasteRulesExtension(),
    new NodeViewsExtension(),
    new SuggestExtension(),
    new CommandsExtension(),
    new HelpersExtension(),
    new KeymapExtension(keymapOptions),
    new DocChangedExtension(),
    new UploadExtension(),
    new DecorationsExtension(decorationsOptions)
  ];
}

// src/builtins/meta-extension.ts
var import_core_constants14 = require("@remirror/core-constants");
var import_core_utils9 = require("@remirror/core-utils");
var _MetaExtension_decorators, _init11, _a11;
_MetaExtension_decorators = [extension({
  defaultOptions: {
    capture: import_core_utils9.environment.isDevelopment
  },
  staticKeys: ["capture"],
  defaultPriority: import_core_constants14.ExtensionPriority.Highest
})];
var MetaExtension = class extends (_a11 = PlainExtension) {
  get name() {
    return "meta";
  }
  onCreate() {
    this.store.setStoreKey("getCommandMeta", this.getCommandMeta.bind(this));
    if (!this.options.capture) {
      return;
    }
    for (const extension2 of this.store.extensions) {
      this.captureCommands(extension2);
      this.captureKeybindings(extension2);
    }
  }
  /**
   * This is here to provide a
   */
  createPlugin() {
    return {};
  }
  /**
   * Intercept command names and attributes.
   */
  captureCommands(extension2) {
    var _a12;
    const decoratedCommands = (_a12 = extension2.decoratedCommands) != null ? _a12 : {};
    const createCommands = extension2.createCommands;
    for (const name of Object.keys(decoratedCommands)) {
      const command2 = extension2[name];
      extension2[name] = (...args) => (props) => {
        var _a13;
        const value = command2(...args)(props);
        if (props.dispatch && value) {
          this.setCommandMeta(props.tr, {
            type: "command",
            chain: props.dispatch !== ((_a13 = props.view) == null ? void 0 : _a13.dispatch),
            name,
            extension: extension2.name,
            decorated: true
          });
        }
        return value;
      };
    }
    if (createCommands) {
      extension2.createCommands = () => {
        const commandsObject = createCommands();
        for (const [name, command2] of Object.entries(commandsObject)) {
          commandsObject[name] = (...args) => (props) => {
            var _a13;
            const value = command2(...args)(props);
            if (props.dispatch && value) {
              this.setCommandMeta(props.tr, {
                type: "command",
                chain: props.dispatch !== ((_a13 = props.view) == null ? void 0 : _a13.dispatch),
                name,
                extension: extension2.name,
                decorated: false
              });
            }
            return value;
          };
        }
        return commandsObject;
      };
    }
  }
  /**
   * Intercept command name and attributes.
   */
  captureKeybindings(_) {
  }
  /**
   * Get the command metadata.
   */
  getCommandMeta(tr) {
    var _a12;
    return (_a12 = tr.getMeta(this.pluginKey)) != null ? _a12 : [];
  }
  setCommandMeta(tr, update) {
    const meta = this.getCommandMeta(tr);
    tr.setMeta(this.pluginKey, [...meta, update]);
  }
};
_init11 = __decoratorStart(_a11);
MetaExtension = __decorateElement(_init11, 0, "MetaExtension", _MetaExtension_decorators, MetaExtension);
__runInitializers(_init11, 1, MetaExtension);

// src/framework/framework.ts
var import_nanoevents2 = require("nanoevents");
var import_core_constants15 = require("@remirror/core-constants");
var import_core_helpers19 = require("@remirror/core-helpers");
var _uid, _getProps, _previousState, _firstRender, _events, _addHandler, _initialEditorState;
var Framework = class {
  constructor(options) {
    /**
     * A unique ID for the editor which can also be used as a key in frameworks
     * that need it.
     */
    __privateAdd(this, _uid, (0, import_core_helpers19.uniqueId)());
    /**
     * A method which enables retrieving the props from the editor.
     */
    __privateAdd(this, _getProps);
    /**
     * The private reference to the previous state.
     */
    __privateAdd(this, _previousState);
    /**
     * A previous state that can be overridden by the framework implementation.
     */
    __publicField(this, "previousStateOverride");
    /**
     * True when this is the first render.
     */
    __privateAdd(this, _firstRender, true);
    /**
     * The event listener which allows consumers to subscribe to the different
     * events taking place in the editor. Events currently supported are:
     *
     * - `destroy`
     * - `focus`
     * - `blur`
     * - `updated`
     */
    __privateAdd(this, _events, (0, import_nanoevents2.createNanoEvents)());
    /**
     * The handler which is bound to the events listener object.
     */
    __privateAdd(this, _addHandler);
    __privateAdd(this, _initialEditorState);
    /**
     * Retrieve the editor state.
     */
    __publicField(this, "getState", () => {
      var _a12;
      return (_a12 = this.view.state) != null ? _a12 : this.initialEditorState;
    });
    /**
     * Retrieve the previous editor state.
     */
    __publicField(this, "getPreviousState", () => this.previousState);
    /**
     * Part of the Prosemirror API and is called whenever there is state change in
     * the editor.
     *
     * @internalremarks
     * How does it work when transactions are dispatched one after the other.
     */
    __publicField(this, "dispatchTransaction", (tr) => {
      var _a12, _b, _c;
      (0, import_core_helpers19.invariant)(!this.manager.destroyed, {
        code: import_core_constants15.ErrorConstant.MANAGER_PHASE_ERROR,
        message: "A transaction was dispatched to a manager that has already been destroyed. Please check your set up, or open an issue."
      });
      tr = (_c = (_b = (_a12 = this.props).onDispatchTransaction) == null ? void 0 : _b.call(_a12, tr, this.getState())) != null ? _c : tr;
      const previousState = this.getState();
      const { state, transactions } = previousState.applyTransaction(tr);
      __privateSet(this, _previousState, previousState);
      this.updateState({ state, tr, transactions });
      const forcedUpdates = this.manager.store.getForcedUpdates(tr);
      if (!(0, import_core_helpers19.isEmptyArray)(forcedUpdates)) {
        this.updateViewProps(...forcedUpdates);
      }
    });
    /**
     * Use this method in the `onUpdate` event to run all change handlers.
     */
    __publicField(this, "onChange", (props = (0, import_core_helpers19.object)()) => {
      var _a12, _b;
      const onChangeProps = this.eventListenerProps(props);
      if (__privateGet(this, _firstRender)) {
        __privateSet(this, _firstRender, false);
      }
      (_b = (_a12 = this.props).onChange) == null ? void 0 : _b.call(_a12, onChangeProps);
    });
    /**
     * Listener for editor 'blur' events
     */
    __publicField(this, "onBlur", (event) => {
      var _a12, _b;
      const props = this.eventListenerProps();
      (_b = (_a12 = this.props).onBlur) == null ? void 0 : _b.call(_a12, props, event);
      __privateGet(this, _events).emit("blur", props, event);
    });
    /**
     * Listener for editor 'focus' events
     */
    __publicField(this, "onFocus", (event) => {
      var _a12, _b;
      const props = this.eventListenerProps();
      (_b = (_a12 = this.props).onFocus) == null ? void 0 : _b.call(_a12, props, event);
      __privateGet(this, _events).emit("focus", props, event);
    });
    /**
     * Sets the content of the editor. This bypasses the update function.
     *
     * @param content
     * @param triggerChange
     */
    __publicField(this, "setContent", (content, { triggerChange = false } = {}) => {
      const { doc } = this.manager.createState({ content });
      const previousState = this.getState();
      const { state } = this.getState().applyTransaction(
        previousState.tr.replaceRangeWith(0, previousState.doc.nodeSize - 2, doc)
      );
      if (triggerChange) {
        return this.updateState({ state, triggerChange });
      }
      this.view.updateState(state);
    });
    /**
     * Clear the content of the editor (reset to the default empty node).
     *
     * @param triggerChange - whether to notify the onChange handler that the
     * content has been reset
     */
    __publicField(this, "clearContent", ({ triggerChange = false } = {}) => {
      this.setContent(this.manager.createEmptyDoc(), { triggerChange });
    });
    __publicField(this, "createStateFromContent", (content, selection) => this.manager.createState({ content, selection }));
    /**
     * Focus the editor.
     */
    __publicField(this, "focus", (position) => {
      this.manager.store.commands.focus(position);
    });
    /**
     * Blur the editor.
     */
    __publicField(this, "blur", (position) => {
      this.manager.store.commands.blur(position);
    });
    const { getProps, initialEditorState, element } = options;
    __privateSet(this, _getProps, getProps);
    __privateSet(this, _initialEditorState, initialEditorState);
    this.manager.attachFramework(this, this.updateListener.bind(this));
    if (this.manager.view) {
      return;
    }
    const view = this.createView(initialEditorState, element);
    this.manager.addView(view);
  }
  /**
   * The event listener which allows consumers to subscribe to the different
   * events taking place in the editor. Events currently supported are:
   *
   * - `destroy`
   * - `focus`
   * - `blur`
   * - `updated`
   */
  get addHandler() {
    var _a12;
    return (_a12 = __privateGet(this, _addHandler)) != null ? _a12 : __privateSet(this, _addHandler, __privateGet(this, _events).on.bind(__privateGet(this, _events)));
  }
  /**
   * The updatable view props.
   */
  get updatableViewProps() {
    return {
      attributes: () => this.getAttributes(),
      editable: () => {
        var _a12;
        return (_a12 = this.props.editable) != null ? _a12 : true;
      }
    };
  }
  /**
   * True when this is the first render of the editor.
   */
  get firstRender() {
    return __privateGet(this, _firstRender);
  }
  /**
   * The props passed in when creating or updating the `Framework` instance.
   */
  get props() {
    return __privateGet(this, _getProps).call(this);
  }
  /**
   * Returns the previous editor state. On the first render it defaults to
   * returning the current state. For the first render the previous state and
   * current state will always be equal.
   */
  get previousState() {
    var _a12, _b;
    return (_b = (_a12 = this.previousStateOverride) != null ? _a12 : __privateGet(this, _previousState)) != null ? _b : this.initialEditorState;
  }
  /**
   * The instance of the [[`RemirrorManager`]].
   */
  get manager() {
    return this.props.manager;
  }
  /**
   * The ProseMirror [[`EditorView`]].
   */
  get view() {
    return this.manager.view;
  }
  /**
   * A unique id for the editor. Can be used to differentiate between editors.
   *
   * Please note that this ID is only locally unique, it should not be used as a
   * database key.
   */
  get uid() {
    return __privateGet(this, _uid);
  }
  /**
   * The initial editor state from when the editor was first created.
   */
  get initialEditorState() {
    return __privateGet(this, _initialEditorState);
  }
  /**
   * Setup the manager event listeners which are disposed of when the manager is
   * destroyed.
   */
  updateListener(props) {
    const { state, tr } = props;
    return __privateGet(this, _events).emit("updated", this.eventListenerProps({ state, tr }));
  }
  /**
   * Update the constructor props passed in. Useful for frameworks like react
   * where props are constantly changing and when using hooks function closures
   * can become stale.
   *
   * You can call the update method with the new `props` to update the internal
   * state of this instance.
   */
  update(options) {
    const { getProps } = options;
    __privateSet(this, _getProps, getProps);
    return this;
  }
  /**
   * Update the view props.
   */
  updateViewProps(...keys3) {
    const props = (0, import_core_helpers19.pick)(this.updatableViewProps, keys3);
    this.view.setProps(__spreadValues(__spreadValues({}, this.view.props), props));
  }
  getAttributes(ssr) {
    var _a12;
    const { attributes, autoFocus, classNames = [], label, editable } = this.props;
    const managerAttributes = (_a12 = this.manager.store) == null ? void 0 : _a12.attributes;
    const propAttributes = (0, import_core_helpers19.isFunction)(attributes) ? attributes(this.eventListenerProps()) : attributes;
    let focus = {};
    if (autoFocus || (0, import_core_helpers19.isNumber)(autoFocus)) {
      focus = ssr ? { autoFocus: true } : { autofocus: "true" };
    }
    const uniqueClasses = (0, import_core_helpers19.uniqueArray)(
      (0, import_core_helpers19.cx)(ssr && "Prosemirror", "remirror-editor", managerAttributes == null ? void 0 : managerAttributes.class, ...classNames).split(
        " "
      )
    ).join(" ");
    const defaultAttributes = __spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadProps(__spreadValues({
      role: "textbox"
    }, focus), {
      "aria-multiline": "true"
    }), !(editable != null ? editable : true) ? { "aria-readonly": "true" } : {}), {
      "aria-label": label != null ? label : ""
    }), managerAttributes), {
      class: uniqueClasses
    });
    return (0, import_core_helpers19.omitUndefined)(__spreadValues(__spreadValues({}, defaultAttributes), propAttributes));
  }
  /**
   * Adds `onBlur` and `onFocus` listeners.
   *
   * When extending this class make sure to call this method once
   * `ProsemirrorView` has been added to the dom.
   */
  addFocusListeners() {
    this.view.dom.addEventListener("blur", this.onBlur);
    this.view.dom.addEventListener("focus", this.onFocus);
  }
  /**
   * Remove `onBlur` and `onFocus` listeners.
   *
   * When extending this class in your framework, make sure to call this just
   * before the view is destroyed.
   */
  removeFocusListeners() {
    this.view.dom.removeEventListener("blur", this.onBlur);
    this.view.dom.removeEventListener("focus", this.onFocus);
  }
  /**
   * Called when the component unmounts and is responsible for cleanup.
   *
   * @remarks
   *
   * - Removes listeners for the editor `blur` and `focus` events
   */
  destroy() {
    __privateGet(this, _events).emit("destroy");
    if (this.view) {
      this.removeFocusListeners();
    }
  }
  /**
   * Creates the props passed into all event listener handlers. e.g.
   * `onChange`
   */
  eventListenerProps(props = (0, import_core_helpers19.object)()) {
    const { state, tr, transactions } = props;
    return {
      tr,
      transactions,
      internalUpdate: !tr,
      view: this.view,
      firstRender: __privateGet(this, _firstRender),
      state: state != null ? state : this.getState(),
      createStateFromContent: this.createStateFromContent,
      previousState: this.previousState,
      helpers: this.manager.store.helpers
    };
  }
  /**
   * Methods and properties which are made available to all consumers of the
   * `Framework` class.
   */
  get baseOutput() {
    return __spreadProps(__spreadValues({
      manager: this.manager
    }, this.manager.store), {
      addHandler: this.addHandler,
      // Commands
      focus: this.focus,
      blur: this.blur,
      // Properties
      uid: __privateGet(this, _uid),
      view: this.view,
      // Getter Methods
      getState: this.getState,
      getPreviousState: this.getPreviousState,
      getExtension: this.manager.getExtension.bind(this.manager),
      hasExtension: this.manager.hasExtension.bind(this.manager),
      // Setter Methods
      clearContent: this.clearContent,
      setContent: this.setContent
    });
  }
};
_uid = new WeakMap();
_getProps = new WeakMap();
_previousState = new WeakMap();
_firstRender = new WeakMap();
_events = new WeakMap();
_addHandler = new WeakMap();
_initialEditorState = new WeakMap();

// src/manager/remirror-manager.ts
var import_nanoevents3 = require("nanoevents");
var import_core_constants17 = require("@remirror/core-constants");
var import_core_helpers21 = require("@remirror/core-helpers");
var import_core_utils10 = require("@remirror/core-utils");
var import_state5 = require("@remirror/pm/state");

// src/manager/remirror-manager-helpers.ts
var import_tiny_warning = __toESM(require("tiny-warning"), 1);
var import_core_constants16 = require("@remirror/core-constants");
var import_core_helpers20 = require("@remirror/core-helpers");
function transformExtensions(initialExtensions, settings) {
  const extensions = [];
  const extensionMap = /* @__PURE__ */ new WeakMap();
  const parentExtensions = [];
  const duplicateMap = /* @__PURE__ */ new WeakMap();
  let gatheredExtensions = [];
  const gatherRawExtensionConfig = { duplicateMap, parentExtensions, gatheredExtensions, settings };
  for (const extension2 of initialExtensions) {
    gatherRawExtensions(gatherRawExtensionConfig, { extension: extension2 });
  }
  gatheredExtensions = (0, import_core_helpers20.sort)(gatheredExtensions, (a, z) => z.priority - a.priority);
  const found = /* @__PURE__ */ new WeakSet();
  const names = /* @__PURE__ */ new Set();
  for (const extension2 of gatheredExtensions) {
    const key2 = extension2.constructor;
    const name = extension2.name;
    const duplicates = duplicateMap.get(key2);
    (0, import_core_helpers20.invariant)(duplicates, {
      message: "No entries were found for the ExtensionConstructor ".concat(extension2.name),
      code: import_core_constants16.ErrorConstant.INTERNAL
    });
    if (found.has(key2) || names.has(name)) {
      continue;
    }
    found.add(key2);
    names.add(name);
    extensions.push(extension2);
    extensionMap.set(key2, extension2);
    duplicates.forEach((parent) => parent == null ? void 0 : parent.replaceChildExtension(key2, extension2));
  }
  const missing = [];
  for (const extension2 of extensions) {
    findMissingExtensions({ extension: extension2, found, missing });
  }
  (0, import_core_helpers20.invariant)((0, import_core_helpers20.isEmptyArray)(missing), {
    code: import_core_constants16.ErrorConstant.MISSING_REQUIRED_EXTENSION,
    message: missing.map(
      ({ Constructor, extension: extension2 }) => "The extension '".concat(extension2.name, "' requires '").concat(Constructor.name, " in order to run correctly.")
    ).join("\n")
  });
  return { extensions, extensionMap };
}
function gatherRawExtensions(config, props) {
  var _a12;
  const { gatheredExtensions, duplicateMap, parentExtensions, settings } = config;
  const { extension: extension2, parentExtension } = props;
  let { names = [] } = props;
  (0, import_core_helpers20.invariant)(isExtension(extension2), {
    code: import_core_constants16.ErrorConstant.INVALID_MANAGER_EXTENSION,
    message: "An invalid extension: ".concat(extension2, " was provided to the [[`RemirrorManager`]].")
  });
  const childExtensions = extension2.extensions;
  extension2.setPriority((_a12 = settings.priority) == null ? void 0 : _a12[extension2.name]);
  gatheredExtensions.push(extension2);
  updateExtensionDuplicates({ duplicateMap, extension: extension2, parentExtension });
  if (childExtensions.length === 0) {
    return;
  }
  if (names.includes(extension2.name)) {
    (0, import_tiny_warning.default)(
      false,
      "Circular dependency encountered when loading extensions: ".concat(names.join(" > "), " > ").concat(extension2.name)
    );
    return;
  }
  names = [...names, extension2.name];
  parentExtensions.push(extension2);
  for (const child of childExtensions) {
    gatherRawExtensions(config, { names, extension: child, parentExtension: extension2 });
  }
}
function findMissingExtensions(props) {
  var _a12;
  const { extension: extension2, found, missing } = props;
  if (!extension2.requiredExtensions) {
    return;
  }
  for (const Constructor of (_a12 = extension2.requiredExtensions) != null ? _a12 : []) {
    if (found.has(Constructor)) {
      continue;
    }
    missing.push({ Constructor, extension: extension2 });
  }
}
function updateExtensionDuplicates(props) {
  const { duplicateMap, extension: extension2, parentExtension } = props;
  const key2 = extension2.constructor;
  const duplicate = duplicateMap.get(key2);
  const parentToAdd = parentExtension ? [parentExtension] : [];
  duplicateMap.set(key2, duplicate ? [...duplicate, ...parentToAdd] : parentToAdd);
}
function extractLifecycleMethods(props) {
  var _a12, _b, _c, _d;
  const { extension: extension2, nodeNames, markNames, plainNames, store, handlers } = props;
  extension2.setStore(store);
  const createHandler = (_a12 = extension2.onCreate) == null ? void 0 : _a12.bind(extension2);
  const viewHandler = (_b = extension2.onView) == null ? void 0 : _b.bind(extension2);
  const stateUpdateHandler = (_c = extension2.onStateUpdate) == null ? void 0 : _c.bind(extension2);
  const destroyHandler = (_d = extension2.onDestroy) == null ? void 0 : _d.bind(extension2);
  if (createHandler) {
    handlers.create.push(createHandler);
  }
  if (viewHandler) {
    handlers.view.push(viewHandler);
  }
  if (stateUpdateHandler) {
    handlers.update.push(stateUpdateHandler);
  }
  if (destroyHandler) {
    handlers.destroy.push(destroyHandler);
  }
  if (isMarkExtension(extension2)) {
    markNames.push(extension2.name);
  }
  if (isNodeExtension(extension2) && extension2.name !== "doc") {
    nodeNames.push(extension2.name);
  }
  if (isPlainExtension(extension2)) {
    plainNames.push(extension2.name);
  }
}

// src/manager/remirror-manager.ts
var _extensionStore, _stringHandlers, _store, _extensions, _extensionMap, _phase, _settings, _firstStateUpdate, _handlers, _disposers, _events2, _framework, _disposeFramework;
var _RemirrorManager = class _RemirrorManager {
  /**
   * Creates the extension manager which is used to simplify the management of
   * the prosemirror editor.
   *
   * This is set to private to encourage using `RemirrorManager.create`
   * instead of the `new` keyword.
   */
  constructor(initialExtension, settings = {}) {
    /**
     * Utility getter for storing the base method props which is available to
     * all extensions.
     */
    __privateAdd(this, _extensionStore);
    /**
     * The named string handlers
     */
    __privateAdd(this, _stringHandlers, (0, import_core_helpers21.object)());
    /**
     * The extension manager store.
     */
    __privateAdd(this, _store, (0, import_core_helpers21.object)());
    /**
     * All the extensions being used within this editor.
     */
    __privateAdd(this, _extensions);
    /**
     * The map of extension constructor to their extension counterparts. This is
     * what makes the `getExtension` method possible.
     */
    __privateAdd(this, _extensionMap);
    /**
     * The stage the manager is currently running.
     */
    __privateAdd(this, _phase, import_core_constants17.ManagerPhase.None);
    /**
     * The settings used to create the manager.
     */
    __privateAdd(this, _settings);
    /**
     * When true this identifies this as the first state update since the view was
     * added to the editor.
     */
    __privateAdd(this, _firstStateUpdate, true);
    /**
     * Store the handlers that will be run when for each event method.
     */
    __privateAdd(this, _handlers, {
      create: [],
      view: [],
      update: [],
      destroy: []
    });
    /**
     * The disposers for the editor.
     */
    __privateAdd(this, _disposers, []);
    /**
     * The event listener which allows consumers to subscribe to the different
     * events without using props.
     */
    __privateAdd(this, _events2, (0, import_nanoevents3.createNanoEvents)());
    /**
     * The active framework for this manager if it exists.
     */
    __privateAdd(this, _framework);
    /**
     * A method for disposing the state update event listeners on the active
     * framework.
     */
    __privateAdd(this, _disposeFramework);
    /**
     * A state getter method which is passed into the params.
     */
    __publicField(this, "getState", () => {
      var _a12;
      if (__privateGet(this, _phase) >= import_core_constants17.ManagerPhase.EditorView) {
        return this.view.state;
      }
      (0, import_core_helpers21.invariant)(__privateGet(this, _framework), {
        code: import_core_constants17.ErrorConstant.MANAGER_PHASE_ERROR,
        message: "`getState` can only be called after the `Framework` or the `EditorView` has been added to the manager`. Check your plugins to make sure that the decorations callback uses the state argument."
      });
      return (_a12 = __privateGet(this, _framework)) == null ? void 0 : _a12.initialEditorState;
    });
    /**
     * Update the state of the view and trigger the `onStateUpdate` lifecycle
     * method as well.
     */
    __publicField(this, "updateState", (state) => {
      const previousState = this.getState();
      this.view.updateState(state);
      this.onStateUpdate({ previousState, state });
    });
    const { extensions, extensionMap } = transformExtensions(initialExtension, settings);
    __privateSet(this, _settings, settings);
    __privateSet(this, _extensions, (0, import_core_helpers21.freeze)(extensions));
    __privateSet(this, _extensionMap, extensionMap);
    __privateSet(this, _extensionStore, this.createExtensionStore());
    __privateSet(this, _phase, import_core_constants17.ManagerPhase.Create);
    this.setupLifecycleHandlers();
    for (const handler of __privateGet(this, _handlers).create) {
      const disposer = handler();
      if (disposer) {
        __privateGet(this, _disposers).push(disposer);
      }
    }
  }
  /**
   * Create the manager for your `Remirror` editor.
   */
  static create(extensions, settings = {}) {
    return new _RemirrorManager(
      [...(0, import_core_helpers21.getLazyArray)(extensions), ...builtinPreset(settings.builtin)],
      settings
    );
  }
  /**
   * Identifies this as a `Manager`.
   *
   * @internal
   */
  get [import_core_constants17.__INTERNAL_REMIRROR_IDENTIFIER_KEY__]() {
    return import_core_constants17.RemirrorIdentifier.Manager;
  }
  /**
   * Returns `true` if the manager has been destroyed.
   */
  get destroyed() {
    return __privateGet(this, _phase) === import_core_constants17.ManagerPhase.Destroy;
  }
  /**
   * `true` when the view has been added to the UI layer and the editor is
   * running.
   */
  get mounted() {
    return __privateGet(this, _phase) >= import_core_constants17.ManagerPhase.EditorView && __privateGet(this, _phase) < import_core_constants17.ManagerPhase.Destroy;
  }
  /**
   * Retrieve the framework output.
   *
   * This be undefined if the manager hasn't been provided to a framework yet
   * the manager.
   *
   * With synchronous frameworks this means that it should only be accessed
   * after the manager has been applied to the editor creation function.
   *
   * For frameworks like React it is only available when the manager is provided
   * to the `Remirror` component and after the very first render. This means it
   * is available within the `onRef` callback.
   *
   * ```tsx
   * import React, { useEffect } from 'react';
   * import { useRemirror, Remirror } from '@remirror/react';
   *
   * const Editor = () => {
   *   const { manager } = useRemirror();
   *
   *   const callback = () => {
   *     return manager.output; // ✅ This is fine.
   *   }
   *
   *   useEffect(() => {
   *     log(manager.output); // ✅  This is also fine.
   *   }, []);
   *
   *   log(manager.output); // ❌ This will be undefined on the first render.
   *
   *   return <Remirror manager={manager} />
   * }
   * ```
   */
  get output() {
    var _a12;
    return (_a12 = __privateGet(this, _framework)) == null ? void 0 : _a12.frameworkOutput;
  }
  /**
   * Returns true when a framework is attached to the manager.
   *
   * This can be used to check if it is safe to call `manager.output`.
   */
  get frameworkAttached() {
    return !!__privateGet(this, _framework);
  }
  /**
   * The extensions stored by this manager
   */
  get extensions() {
    return __privateGet(this, _extensions);
  }
  /**
   * The registered string handlers provided by the extensions.
   *
   * By default this includes `html` and `plainText`
   */
  get stringHandlers() {
    return __privateGet(this, _stringHandlers);
  }
  /**
   * Get the extension manager store which is accessible at initialization.
   */
  get store() {
    return (0, import_core_helpers21.freeze)(__privateGet(this, _store));
  }
  /**
   * Provides access to the extension store.
   */
  get extensionStore() {
    return (0, import_core_helpers21.freeze)(__privateGet(this, _extensionStore));
  }
  /**
   * Shorthand access to the active transaction from the manager. This is the
   * shared transaction available to all commands and should be used when you
   * need to make your commands chainable.
   *
   * If working with react and setting up your editor as a controlled component
   * then this is the preferred way to run custom commands, otherwise your
   * commands will end up being non-chainable and be overwritten by anything
   * that comes after.
   */
  get tr() {
    return this.getExtension(CommandsExtension).transaction;
  }
  /**
   * Returns the stored nodes
   */
  get nodes() {
    return __privateGet(this, _store).nodes;
  }
  /**
   * Returns the store marks.
   */
  get marks() {
    return __privateGet(this, _store).marks;
  }
  /**
   * A shorthand method for retrieving the schema for this extension manager
   * from the data.
   */
  get schema() {
    return __privateGet(this, _store).schema;
  }
  /**
   * A shorthand getter for retrieving the tags from the extension manager.
   */
  get extensionTags() {
    return __privateGet(this, _store).tags;
  }
  /**
   * A shorthand way of retrieving the editor view.
   */
  get view() {
    return __privateGet(this, _store).view;
  }
  /**
   * Retrieve the settings used when creating the manager.
   */
  get settings() {
    return __privateGet(this, _settings);
  }
  /**
   * The document to use for rendering and outputting HTML.
   */
  get document() {
    var _a12;
    return (_a12 = __privateGet(this, _settings).document) != null ? _a12 : (0, import_core_utils10.getDocument)();
  }
  /**
   * Loops through all extensions to set up the lifecycle handlers.
   */
  setupLifecycleHandlers() {
    const store = __privateGet(this, _extensionStore);
    const handlers = __privateGet(this, _handlers);
    const nodeNames = [];
    const markNames = [];
    const plainNames = [];
    store.nodeNames = nodeNames;
    store.markNames = markNames;
    store.plainNames = plainNames;
    for (const extension2 of __privateGet(this, _extensions)) {
      extractLifecycleMethods({ extension: extension2, nodeNames, markNames, plainNames, handlers, store });
    }
  }
  /**
   * Set the string handler to use for a given name.
   *
   * This allows users to set the string handler
   */
  setStringHandler(name, handler) {
    __privateGet(this, _stringHandlers)[name] = handler;
  }
  /**
   * Set the manager value for the provided key. This is used by extensions to
   * add data to the manager.
   */
  setStoreKey(key2, value) {
    __privateGet(this, _store)[key2] = value;
  }
  /**
   * Get the manager value for the provided key. This is used by extensions to
   * get data from the manager.
   */
  getStoreKey(key2) {
    const value = __privateGet(this, _store)[key2];
    (0, import_core_helpers21.invariant)(!(0, import_core_helpers21.isNullOrUndefined)(value), {
      code: import_core_constants17.ErrorConstant.MANAGER_PHASE_ERROR,
      message: "`getStoreKey` should not be called before the values are available."
    });
    return value;
  }
  /**
   * A method to set values in the extension store which is made available to
   * extension.
   *
   * **NOTE** This method should only be used in the `onCreate` extension method
   * or it will throw an error.
   */
  setExtensionStore(key2, value) {
    (0, import_core_helpers21.invariant)(__privateGet(this, _phase) <= import_core_constants17.ManagerPhase.EditorView, {
      code: import_core_constants17.ErrorConstant.MANAGER_PHASE_ERROR,
      message: "`setExtensionStore` should only be called during the `onCreate` lifecycle hook. Make sure to only call it within the returned methods."
    });
    __privateGet(this, _extensionStore)[key2] = value;
  }
  /**
   * Create the initial store.
   */
  createExtensionStore() {
    const store = (0, import_core_helpers21.object)();
    const enumerable = true;
    let currentState;
    let previousState;
    Object.defineProperties(store, {
      extensions: { get: () => __privateGet(this, _extensions), enumerable },
      phase: { get: () => __privateGet(this, _phase), enumerable },
      view: { get: () => this.view, enumerable },
      managerSettings: { get: () => (0, import_core_helpers21.freeze)(__privateGet(this, _settings)), enumerable },
      getState: { value: this.getState, enumerable },
      updateState: { value: this.updateState, enumerable },
      isMounted: { value: () => this.mounted, enumerable },
      getExtension: { value: this.getExtension.bind(this), enumerable },
      manager: { get: () => this, enumerable },
      document: { get: () => this.document, enumerable },
      stringHandlers: { get: () => __privateGet(this, _stringHandlers), enumerable },
      currentState: {
        get: () => currentState != null ? currentState : currentState = this.getState(),
        set: (state) => {
          currentState = state;
        },
        enumerable
      },
      previousState: {
        get: () => previousState,
        set: (state) => {
          previousState = state;
        },
        enumerable
      }
    });
    store.getStoreKey = this.getStoreKey.bind(this);
    store.setStoreKey = this.setStoreKey.bind(this);
    store.setExtensionStore = this.setExtensionStore.bind(this);
    store.setStringHandler = this.setStringHandler.bind(this);
    return store;
  }
  /**
   * Stores the editor view on the manager
   *
   * @param view - the editor view
   */
  addView(view) {
    if (__privateGet(this, _phase) >= import_core_constants17.ManagerPhase.EditorView) {
      return this;
    }
    __privateSet(this, _firstStateUpdate, true);
    __privateSet(this, _phase, import_core_constants17.ManagerPhase.EditorView);
    __privateGet(this, _store).view = view;
    for (const handler of __privateGet(this, _handlers).view) {
      const disposer = handler(view);
      if (disposer) {
        __privateGet(this, _disposers).push(disposer);
      }
    }
    return this;
  }
  /**
   * Attach a framework to the manager.
   */
  attachFramework(framework, updateHandler) {
    var _a12;
    if (__privateGet(this, _framework) === framework) {
      return;
    }
    if (__privateGet(this, _framework)) {
      __privateGet(this, _framework).destroy();
      (_a12 = __privateGet(this, _disposeFramework)) == null ? void 0 : _a12.call(this);
    }
    __privateSet(this, _framework, framework);
    __privateSet(this, _disposeFramework, this.addHandler("stateUpdate", updateHandler));
  }
  /* Public Methods */
  /**
   * Create an empty document for the editor based on the current schema.
   *
   * This automatically looks at the supported content for the doc and the
   * available nodes which fulfil that content in order to create a document
   * with only the minimal required content.
   *
   * This can be used in conjunction with the create state to reset the current
   * value of the editor.
   */
  createEmptyDoc() {
    var _a12;
    const doc = (_a12 = this.schema.nodes.doc) == null ? void 0 : _a12.createAndFill();
    (0, import_core_helpers21.invariant)(doc, {
      code: import_core_constants17.ErrorConstant.INVALID_CONTENT,
      message: "An empty node could not be created due to an invalid schema."
    });
    return doc;
  }
  /**
   * Create the editor state from content passed to this extension manager.
   */
  createState(props = {}) {
    const { onError, defaultSelection = "end" } = this.settings;
    const {
      content = this.createEmptyDoc(),
      selection = defaultSelection,
      stringHandler = this.settings.stringHandler
    } = props;
    const { schema, plugins } = this.store;
    const doc = (0, import_core_utils10.createDocumentNode)({
      stringHandler: (0, import_core_helpers21.isString)(stringHandler) ? this.stringHandlers[stringHandler] : stringHandler,
      document: this.document,
      content,
      onError,
      schema,
      selection
    });
    return import_state5.EditorState.create({
      schema,
      doc,
      plugins,
      selection: (0, import_core_utils10.getTextSelection)(selection, doc)
    });
  }
  /**
   * Add a handler to the manager.
   *
   * Currently the only event that can be listened to is the `destroy` event.
   */
  addHandler(event, cb) {
    return __privateGet(this, _events2).on(event, cb);
  }
  /**
   * This method should be called by the view layer every time the state is
   * updated.
   *
   * An example usage of this is within the collaboration extension.
   */
  onStateUpdate(props) {
    const firstUpdate = __privateGet(this, _firstStateUpdate);
    __privateGet(this, _extensionStore).currentState = props.state;
    __privateGet(this, _extensionStore).previousState = props.previousState;
    if (firstUpdate) {
      __privateSet(this, _phase, import_core_constants17.ManagerPhase.Runtime);
      __privateSet(this, _firstStateUpdate, false);
    }
    const propsWithUpdate = __spreadProps(__spreadValues({}, props), { firstUpdate });
    for (const handler of __privateGet(this, _handlers).update) {
      handler(propsWithUpdate);
    }
    __privateGet(this, _events2).emit("stateUpdate", propsWithUpdate);
  }
  /**
   * Get the extension instance matching the provided constructor from the
   * manager.
   *
   * This will throw an error if non existent.
   */
  getExtension(Constructor) {
    const extension2 = __privateGet(this, _extensionMap).get(Constructor);
    (0, import_core_helpers21.invariant)(extension2, {
      code: import_core_constants17.ErrorConstant.INVALID_MANAGER_EXTENSION,
      message: "'".concat(Constructor.name, "' doesn't exist within this manager. Make sure it is properly added before attempting to use it.")
    });
    return extension2;
  }
  /**
   * Determines in an extension is present by providing the desired
   * `Constructor`.
   *
   * This method can be used as a safer alternative to getExtension which
   * will throw an error if the constructor doesn't exist within the
   * extension created by this extension.
   */
  hasExtension(Constructor) {
    const extension2 = __privateGet(this, _extensionMap).get(Constructor);
    return !!extension2;
  }
  /**
   * Make a clone of the manager.
   *
   * @internalremarks What about the state stored in the extensions and presets,
   * does this need to be recreated as well?
   */
  clone() {
    const extensions = __privateGet(this, _extensions).map((e) => e.clone(e.options));
    const manager = _RemirrorManager.create(() => extensions, __privateGet(this, _settings));
    __privateGet(this, _events2).emit("clone", manager);
    return manager;
  }
  /**
   * Recreate the manager with new settings and extensions
   */
  recreate(extensions = [], settings = {}) {
    const currentExtensions = __privateGet(this, _extensions).map((e) => e.clone(e.initialOptions));
    const manager = _RemirrorManager.create(() => [...currentExtensions, ...extensions], settings);
    __privateGet(this, _events2).emit("recreate", manager);
    return manager;
  }
  /**
   * This method should be called to destroy the manager and remove the view.
   */
  destroy() {
    var _a12, _b, _c, _d, _e, _f, _g;
    __privateSet(this, _phase, import_core_constants17.ManagerPhase.Destroy);
    for (const plugin of (_b = (_a12 = this.view) == null ? void 0 : _a12.state.plugins) != null ? _b : []) {
      (_d = (_c = plugin.getState(this.view.state)) == null ? void 0 : _c.destroy) == null ? void 0 : _d.call(_c);
    }
    (_e = __privateGet(this, _framework)) == null ? void 0 : _e.destroy();
    (_f = __privateGet(this, _disposeFramework)) == null ? void 0 : _f.call(this);
    for (const dispose of __privateGet(this, _disposers)) {
      dispose();
    }
    for (const onDestroy of __privateGet(this, _handlers).destroy) {
      onDestroy();
    }
    (_g = this.view) == null ? void 0 : _g.destroy();
    __privateGet(this, _events2).emit("destroy");
  }
  /**
   * Check whether the manager includes the names or constructors provided for
   * the preset and extensions.
   *
   * Returns true if all are included, returns false otherwise.
   */
  includes(mustIncludeList) {
    const names = [];
    const extensionsAndPresets = [];
    for (const item of __privateGet(this, _extensions)) {
      names.push(item.name, item.constructorName);
      extensionsAndPresets.push(item.constructor);
    }
    return mustIncludeList.every(
      (item) => (0, import_core_helpers21.isString)(item) ? (0, import_core_helpers21.includes)(names, item) : (0, import_core_helpers21.includes)(extensionsAndPresets, item)
    );
  }
};
_extensionStore = new WeakMap();
_stringHandlers = new WeakMap();
_store = new WeakMap();
_extensions = new WeakMap();
_extensionMap = new WeakMap();
_phase = new WeakMap();
_settings = new WeakMap();
_firstStateUpdate = new WeakMap();
_handlers = new WeakMap();
_disposers = new WeakMap();
_events2 = new WeakMap();
_framework = new WeakMap();
_disposeFramework = new WeakMap();
var RemirrorManager = _RemirrorManager;
function isRemirrorManager(value, mustIncludeList) {
  if (!(0, import_core_utils10.isRemirrorType)(value) || !(0, import_core_utils10.isIdentifierOfType)(value, import_core_constants17.RemirrorIdentifier.Manager)) {
    return false;
  }
  if (!mustIncludeList) {
    return true;
  }
  return value.includes(mustIncludeList);
}

// src/index.ts
__reExport(src_exports, require("@remirror/core-constants"), module.exports);
__reExport(src_exports, require("@remirror/core-helpers"), module.exports);
__reExport(src_exports, require("@remirror/core-types"), module.exports);
__reExport(src_exports, require("@remirror/core-utils"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AttributesExtension,
  CommandsExtension,
  DEFAULT_SHORTCUTS,
  DecorationsExtension,
  DelayedCommand,
  DocChangedExtension,
  Framework,
  GOOGLE_DOC_SHORTCUTS,
  HelpersExtension,
  InputRulesExtension,
  KeymapExtension,
  MarkExtension,
  MetaExtension,
  NodeExtension,
  NodeViewsExtension,
  PasteRulesExtension,
  PlainExtension,
  PluginsExtension,
  RemirrorManager,
  SchemaExtension,
  SuggestExtension,
  TagsExtension,
  UploadExtension,
  builtinPreset,
  command,
  delayedCommand,
  extension,
  findUploadPlaceholderPayload,
  findUploadPlaceholderPos,
  hasUploadingFile,
  helper,
  insertText,
  isDelayedValue,
  isExtension,
  isExtensionConstructor,
  isExtensionTag,
  isMarkExtension,
  isNodeExtension,
  isPlainExtension,
  isRemirrorManager,
  keyBinding,
  keyboardShortcuts,
  legacyCommand,
  legacyHelper,
  legacyKeyBinding,
  mutateDefaultExtensionOptions,
  setUploadPlaceholderAction,
  toggleMark,
  uploadFile,
  ...require("@remirror/core-constants"),
  ...require("@remirror/core-helpers"),
  ...require("@remirror/core-types"),
  ...require("@remirror/core-utils")
});
