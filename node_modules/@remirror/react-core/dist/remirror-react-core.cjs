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
  EditorComponent: () => EditorComponent,
  I18nProvider: () => I18nProvider,
  OnChangeHTML: () => OnChangeHTML,
  OnChangeJSON: () => OnChangeJSON,
  Remirror: () => Remirror,
  RemirrorContext: () => RemirrorContext,
  createEditorView: () => createEditorView,
  createReactManager: () => createReactManager,
  useActive: () => useActive,
  useAttrs: () => useAttrs,
  useChainedCommands: () => useChainedCommands,
  useCommands: () => useCommands,
  useCurrentSelection: () => useCurrentSelection,
  useDocChanged: () => useDocChanged,
  useEditorDomRef: () => useEditorDomRef,
  useEditorState: () => useEditorState,
  useEditorView: () => useEditorView,
  useExtension: () => useExtension,
  useExtensionCustomEvent: () => useExtensionCustomEvent,
  useExtensionEvent: () => useExtensionEvent,
  useForceUpdate: () => useForceUpdate,
  useHasExtension: () => useHasExtension,
  useHelpers: () => useHelpers,
  useI18n: () => useI18n,
  useManager: () => useManager,
  useMarkRange: () => useMarkRange,
  usePortalContainer: () => usePortalContainer,
  useRemirror: () => useRemirror,
  useRemirrorContext: () => useRemirrorContext,
  useSelectedText: () => useSelectedText,
  useUpdateReason: () => useUpdateReason
});
module.exports = __toCommonJS(src_exports);

// src/contexts/i18n-context.tsx
var import_react = __toESM(require("react"), 1);
var defaultI18nFormatter = (message) => message.message;
var I18nContext = (0, import_react.createContext)(defaultI18nFormatter);
var I18nProvider = ({
  i18nFormat = defaultI18nFormatter,
  locale = "en",
  supportedLocales,
  children
}) => {
  const locales = (0, import_react.useMemo)(() => {
    return supportedLocales != null ? supportedLocales : [locale];
  }, [supportedLocales, locale]);
  const t = (0, import_react.useCallback)(
    (message, values) => {
      return i18nFormat(message, values, locale, locales);
    },
    [i18nFormat, locale, locales]
  );
  return /* @__PURE__ */ import_react.default.createElement(I18nContext.Provider, { value: t }, children);
};

// src/hooks/use-remirror-context.ts
var import_react3 = require("react");
var import_core2 = require("@remirror/core");

// src/hooks/use-force-update.ts
var import_react2 = require("react");
var import_core = require("@remirror/core");
function useForceUpdate() {
  const [, setState] = (0, import_react2.useState)((0, import_core.object)());
  return (0, import_react2.useCallback)(() => {
    setState((0, import_core.object)());
  }, []);
}

// src/hooks/use-remirror-context.ts
var RemirrorContext = (0, import_react3.createContext)(null);
function useRemirrorContext(handler) {
  const context = (0, import_react3.useContext)(RemirrorContext);
  const forceUpdate = (0, import_react3.useRef)(useForceUpdate());
  (0, import_core2.invariant)(context, { code: import_core2.ErrorConstant.REACT_PROVIDER_CONTEXT });
  const { addHandler } = context;
  (0, import_react3.useEffect)(() => {
    let updateHandler = handler;
    if (!updateHandler) {
      return;
    }
    if ((0, import_core2.isPlainObject)(updateHandler)) {
      const { autoUpdate } = updateHandler;
      updateHandler = autoUpdate ? () => forceUpdate.current() : void 0;
    }
    if (!(0, import_core2.isFunction)(updateHandler)) {
      return;
    }
    return addHandler("updated", updateHandler);
  }, [addHandler, handler]);
  return context;
}

// src/hooks/use-active.ts
function useActive(autoUpdate = true) {
  return useRemirrorContext({ autoUpdate }).active;
}

// src/hooks/use-attrs.ts
function useAttrs(update = false) {
  return useRemirrorContext(update ? { autoUpdate: true } : void 0).attrs;
}

// src/hooks/use-chained-commands.ts
function useChainedCommands() {
  return useRemirrorContext().chain.new();
}

// src/hooks/use-commands.ts
function useCommands() {
  return useRemirrorContext().commands;
}

// src/hooks/use-current-selection.ts
function useCurrentSelection() {
  return useRemirrorContext({ autoUpdate: true }).getState().selection;
}

// src/hooks/use-doc-changed.ts
var import_core4 = require("@remirror/core");

// src/hooks/use-extension-event.ts
var import_react5 = require("react");

// src/hooks/use-extension.ts
var import_react4 = require("react");
var import_core3 = require("@remirror/core");
function useExtension(Constructor, optionsOrCallback = void 0, dependencies) {
  const { getExtension } = useRemirrorContext();
  const extension = (0, import_react4.useMemo)(() => getExtension(Constructor), [Constructor, getExtension]);
  let deps;
  if ((0, import_core3.isFunction)(optionsOrCallback)) {
    deps = dependencies ? [extension, ...dependencies] : [extension, optionsOrCallback];
  } else {
    deps = optionsOrCallback ? [extension, ...Object.values(optionsOrCallback)] : [];
  }
  (0, import_react4.useEffect)(() => {
    if ((0, import_core3.isFunction)(optionsOrCallback) || !optionsOrCallback) {
      return;
    }
    extension.setOptions(optionsOrCallback);
  }, deps);
  (0, import_react4.useEffect)(() => {
    if (!(0, import_core3.isFunction)(optionsOrCallback)) {
      return;
    }
    return optionsOrCallback({
      addHandler: extension.addHandler.bind(extension),
      addCustomHandler: extension.addCustomHandler.bind(extension),
      extension
    });
  }, deps);
  if (optionsOrCallback) {
    return;
  }
  return extension;
}

// src/hooks/use-extension-event.ts
function useExtensionEvent(extension, event, memoizedHandler) {
  const callback = (0, import_react5.useCallback)(
    ({ addHandler }) => addHandler(event, memoizedHandler),
    [memoizedHandler, event]
  );
  return useExtension(extension, callback);
}
function useExtensionCustomEvent(extension, event, memoizedCustomHandler) {
  const callback = (0, import_react5.useCallback)(
    ({ addCustomHandler }) => addCustomHandler(event, memoizedCustomHandler),
    [memoizedCustomHandler, event]
  );
  return useExtension(extension, callback);
}

// src/hooks/use-doc-changed.ts
function useDocChanged(handler) {
  useExtensionEvent(import_core4.DocChangedExtension, "docChanged", handler);
}

// src/hooks/use-editor-dom-ref.ts
var import_react6 = require("react");

// src/hooks/use-editor-view.ts
function useEditorView() {
  return useRemirrorContext().view;
}

// src/hooks/use-editor-dom-ref.ts
function useEditorDomRef() {
  return (0, import_react6.useRef)(useEditorView().dom);
}

// src/hooks/use-editor-state.ts
function useEditorState() {
  return useRemirrorContext({ autoUpdate: true }).getState();
}

// src/hooks/use-has-extension.ts
var import_react7 = require("react");
function useHasExtension(Constructor) {
  const { hasExtension } = useRemirrorContext();
  return (0, import_react7.useMemo)(() => hasExtension(Constructor), [Constructor, hasExtension]);
}

// src/hooks/use-helpers.ts
function useHelpers(update = false) {
  return useRemirrorContext(update ? { autoUpdate: true } : void 0).helpers;
}

// src/hooks/use-i18n.ts
var import_react8 = require("react");
function useI18n() {
  return (0, import_react8.useContext)(I18nContext);
}

// src/hooks/use-manager.ts
var import_react9 = require("react");

// src/react-helpers.tsx
var import_core5 = require("@remirror/core");
var import_preset_core = require("@remirror/preset-core");
var import_preset_react = require("@remirror/preset-react");
function createReactManager(extensions, options = {}) {
  const _a = options, { core, react } = _a, settings = __objRest(_a, ["core", "react"]);
  if ((0, import_core5.isRemirrorManager)(extensions)) {
    return extensions;
  }
  return import_core5.RemirrorManager.create(
    () => [...(0, import_core5.getLazyArray)(extensions), new import_preset_react.ReactExtension(react), ...(0, import_preset_core.corePreset)(core)],
    settings
  );
}

// src/hooks/use-manager.ts
function useManager(extensions, options = {}) {
  const extensionsRef = (0, import_react9.useRef)(extensions);
  const optionsRef = (0, import_react9.useRef)(options);
  const [manager, setManager] = (0, import_react9.useState)(() => createReactManager(extensions, options));
  extensionsRef.current = extensions;
  optionsRef.current = options;
  (0, import_react9.useEffect)(
    () => manager.addHandler("destroy", () => {
      setManager(() => createReactManager(extensionsRef.current, optionsRef.current));
    }),
    [manager]
  );
  return manager;
}

// src/hooks/use-mark-range.ts
var import_core6 = require("@remirror/core");
function useMarkRange(type) {
  const { getState } = useRemirrorContext({ autoUpdate: true });
  const { $from, $to } = getState().selection;
  return (0, import_core6.getMarkRange)($from, type, $to);
}

// src/hooks/use-portal-container.ts
function usePortalContainer() {
  return useRemirrorContext().portalContainer;
}

// src/hooks/use-react-framework.tsx
var import_react12 = require("react");
var import_core8 = require("@remirror/core");
var import_preset_react3 = require("@remirror/preset-react");

// src/react-framework.tsx
var import_core7 = require("@remirror/core");
var import_view = require("@remirror/pm/view");
var import_preset_react2 = require("@remirror/preset-react");

// src/commonjs-packages/seznam-compose-react-refs.ts
var import_compose_react_refs = __toESM(require("@seznam/compose-react-refs"), 1);
var composeRefs = typeof import_compose_react_refs.default === "object" && import_compose_react_refs.default.__esModule && import_compose_react_refs.default.default ? import_compose_react_refs.default.default : import_compose_react_refs.default;

// src/react-framework.tsx
var _editorRef;
var ReactFramework = class extends import_core7.Framework {
  constructor(props) {
    var _a;
    super(props);
    /**
     * Stores the Prosemirror EditorView dom element.
     */
    __privateAdd(this, _editorRef);
    /**
     * Keep track of whether the get root props has been called during the most recent render.
     */
    __publicField(this, "rootPropsConfig", {
      called: false,
      count: 0
    });
    /**
     * The external `getRootProps` that is used to spread props onto a desired
     * holder element for the prosemirror view.
     */
    __publicField(this, "getRootProps", (options) => this.internalGetRootProps(options, null));
    /**
     * Creates the props that should be spread on the root element inside which
     * the prosemirror instance will be rendered.
     *
     * TODO - this is useless - REFACTOR
     */
    __publicField(this, "internalGetRootProps", (options, children) => {
      this.rootPropsConfig.called = true;
      const _a = options != null ? options : (0, import_core7.object)(), {
        refKey = "ref",
        ref
      } = _a, config = __objRest(_a, [
        "refKey",
        "ref"
      ]);
      return __spreadProps(__spreadValues({
        [refKey]: composeRefs(ref, this.onRef),
        key: this.uid
      }, config), {
        children
      });
    });
    /**
     * Stores the Prosemirror editor dom instance for this component using `refs`.
     */
    __publicField(this, "onRef", (element) => {
      if (!element) {
        return;
      }
      this.rootPropsConfig.count += 1;
      (0, import_core7.invariant)(this.rootPropsConfig.count <= 1, {
        code: import_core7.ErrorConstant.REACT_GET_ROOT_PROPS,
        message: "Called ".concat(this.rootPropsConfig.count, " times")
      });
      __privateSet(this, _editorRef, element);
      this.onRefLoad();
    });
    if (this.manager.view) {
      this.manager.view.setProps({
        state: this.manager.view.state,
        dispatchTransaction: this.dispatchTransaction,
        attributes: () => this.getAttributes(),
        editable: () => {
          var _a2;
          return (_a2 = this.props.editable) != null ? _a2 : true;
        }
      });
      return;
    }
    this.manager.getExtension(import_preset_react2.PlaceholderExtension).setOptions({ placeholder: (_a = this.props.placeholder) != null ? _a : "" });
  }
  get name() {
    return "react";
  }
  /**
   * This is called to update props on every render so that values don't become stale.
   */
  update(props) {
    super.update(props);
    return this;
  }
  /**
   * Create the prosemirror editor view.
   */
  createView(state) {
    return new import_view.EditorView(null, {
      state,
      dispatchTransaction: this.dispatchTransaction,
      attributes: () => this.getAttributes(),
      editable: () => {
        var _a;
        return (_a = this.props.editable) != null ? _a : true;
      },
      plugins: []
    });
  }
  /**
   * Updates the state either by calling `onChange` when it exists or
   * directly setting the internal state via a `setState` call.
   */
  updateState(_a) {
    var _b = _a, { state } = _b, rest = __objRest(_b, ["state"]);
    const { triggerChange = true, tr, transactions } = rest;
    if (this.props.state) {
      const { onChange } = this.props;
      (0, import_core7.invariant)(onChange, {
        code: import_core7.ErrorConstant.REACT_CONTROLLED,
        message: "You are required to provide the `onChange` handler when creating a controlled editor."
      });
      (0, import_core7.invariant)(triggerChange, {
        code: import_core7.ErrorConstant.REACT_CONTROLLED,
        message: "Controlled editors do not support `clearContent` or `setContent` where `triggerChange` is `true`. Update the `state` prop instead."
      });
      if (!this.previousStateOverride) {
        this.previousStateOverride = this.getState();
      }
      this.onChange({ state, tr, transactions });
      return;
    }
    if (!tr && !transactions) {
      state = state.apply(state.tr.setMeta(import_core7.STATE_OVERRIDE, {}));
    }
    this.view.updateState(state);
    if (triggerChange && (transactions == null ? void 0 : transactions.length) !== 0) {
      this.onChange({ state, tr, transactions });
    }
    this.manager.onStateUpdate({ previousState: this.previousState, state, tr, transactions });
  }
  /**
   * Update the controlled state when the value changes and notify the extension
   * of this update.
   */
  updateControlledState(state, previousState) {
    this.previousStateOverride = previousState;
    state = state.apply(state.tr.setMeta(import_core7.STATE_OVERRIDE, {}));
    this.view.updateState(state);
    this.manager.onStateUpdate({ previousState: this.previousState, state });
    this.previousStateOverride = void 0;
  }
  /**
   * Adds the prosemirror view to the dom in the position specified via the
   * component props.
   */
  addProsemirrorViewToDom(element, viewDom) {
    if (this.props.insertPosition === "start") {
      element.insertBefore(viewDom, element.firstChild);
    } else {
      element.append(viewDom);
    }
  }
  /**
   * Called once the container dom node (`this.editorRef`) has been initialized
   * after the component mounts.
   *
   * This method handles the cases where the dom is not focused.
   */
  onRefLoad() {
    (0, import_core7.invariant)(__privateGet(this, _editorRef), {
      code: import_core7.ErrorConstant.REACT_EDITOR_VIEW,
      message: "Something went wrong when initializing the text editor. Please check your setup."
    });
    const { autoFocus } = this.props;
    this.addProsemirrorViewToDom(__privateGet(this, _editorRef), this.view.dom);
    if (autoFocus) {
      this.focus(autoFocus);
    }
    this.onChange();
    this.addFocusListeners();
  }
  /**
   * Called for every update of the props and state.
   */
  onUpdate() {
    if (this.view && __privateGet(this, _editorRef)) {
      this.view.setProps(__spreadProps(__spreadValues({}, this.view.props), { editable: () => {
        var _a;
        return (_a = this.props.editable) != null ? _a : true;
      } }));
    }
  }
  /**
   * Get the framework output.
   */
  get frameworkOutput() {
    return __spreadProps(__spreadValues({}, this.baseOutput), {
      getRootProps: this.getRootProps,
      portalContainer: this.manager.store.portalContainer
    });
  }
  /**
   * Reset the called status of `getRootProps`.
   */
  resetRender() {
    this.rootPropsConfig.called = false;
    this.rootPropsConfig.count = 0;
  }
};
_editorRef = new WeakMap();

// src/hooks/use-isomorphic-layout-effect.ts
var import_react10 = require("react");
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? import_react10.useLayoutEffect : import_react10.useEffect;

// src/hooks/use-previous.ts
var import_react11 = require("react");
function usePrevious(value) {
  const ref = (0, import_react11.useRef)();
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// src/hooks/use-react-framework.tsx
function useReactFramework(props) {
  const { manager, state } = props;
  const { placeholder, editable } = props;
  const firstUpdate = (0, import_react12.useRef)(true);
  if (firstUpdate.current && !(0, import_core8.isNullOrUndefined)(placeholder)) {
    manager.getExtension(import_preset_react3.ReactExtension).setOptions({ placeholder });
  }
  (0, import_react12.useEffect)(() => {
    if (placeholder == null) {
      return;
    }
    manager.getExtension(import_preset_react3.ReactExtension).setOptions({ placeholder });
  }, [placeholder, manager]);
  const [initialEditorState] = (0, import_react12.useState)(() => {
    var _a;
    if (state) {
      return state;
    }
    const fallback = manager.createEmptyDoc();
    const [initialContent, initialSelection] = (0, import_core8.isArray)(props.initialContent) ? props.initialContent : [(_a = props.initialContent) != null ? _a : fallback];
    return manager.createState({ content: initialContent, selection: initialSelection });
  });
  const framework = useFramework({
    initialEditorState,
    getProps: () => props
  });
  (0, import_react12.useEffect)(
    () => () => {
      framework.destroy();
    },
    [framework]
  );
  (0, import_react12.useEffect)(() => {
    framework.onUpdate();
  }, [editable, framework]);
  useControlledEditor(framework);
  return framework.frameworkOutput;
}
function useFramework(props) {
  const propsRef = (0, import_react12.useRef)(props);
  propsRef.current = props;
  const framework = (0, import_react12.useMemo)(() => new ReactFramework(propsRef.current), []);
  framework.update(props);
  return framework;
}
function useControlledEditor(framework) {
  const { state } = framework.props;
  const isControlledRef = (0, import_react12.useRef)(!!state);
  const previousValue = usePrevious(state);
  useIsomorphicLayoutEffect(() => {
    const validUpdate = state ? isControlledRef.current === true : isControlledRef.current === false;
    (0, import_core8.invariant)(validUpdate, {
      code: import_core8.ErrorConstant.REACT_CONTROLLED,
      message: isControlledRef.current ? "You have attempted to switch from a controlled to an uncontrolled editor. Once you set up an editor as a controlled editor it must always provide a `state` prop." : "You have provided a `state` prop to an uncontrolled editor. In order to set up your editor as controlled you must provide the `state` prop from the very first render."
    });
    if (!state || state === previousValue) {
      return;
    }
    framework.updateControlledState(state, previousValue != null ? previousValue : void 0);
  }, [state, previousValue, framework]);
}

// src/hooks/use-remirror.tsx
var import_react13 = require("react");
function useRemirror(props = {}) {
  const _a = props, { content, document: document2, selection, extensions } = _a, settings = __objRest(_a, ["content", "document", "selection", "extensions"]);
  const manager = useManager(extensions != null ? extensions : () => [], settings);
  const [state, setState] = (0, import_react13.useState)(
    () => manager.createState({
      selection,
      content: content != null ? content : manager.createEmptyDoc()
    })
  );
  const onChange = (0, import_react13.useCallback)(({ state: state2 }) => {
    setState(state2);
  }, []);
  const getContext = (0, import_react13.useCallback)(() => {
    const context = manager.output;
    return context;
  }, [manager]);
  return (0, import_react13.useMemo)(
    () => ({ state, setState, manager, onChange, getContext }),
    [getContext, manager, onChange, state]
  );
}

// src/hooks/use-selected-text.ts
var import_core9 = require("@remirror/core");
function useSelectedText() {
  const { getState, helpers } = useRemirrorContext({ autoUpdate: true });
  const { selection, doc } = getState();
  if (!(0, import_core9.isTextSelection)(selection) || selection.empty) {
    return;
  }
  const { from, to } = selection;
  return helpers.getTextBetween(from, to, doc);
}

// src/hooks/use-update-reason.ts
var import_react14 = require("react");
var import_core10 = require("@remirror/core");
var noReason = { doc: false, selection: false, storedMark: false };
function useUpdateReason() {
  const [updateReason, setUpdateReason] = (0, import_react14.useState)(noReason);
  useExtensionEvent(
    import_core10.PluginsExtension,
    "applyState",
    (0, import_react14.useCallback)(({ tr }) => {
      const reason = __spreadValues({}, noReason);
      if (tr.docChanged) {
        reason.doc = true;
      }
      if (tr.selectionSet) {
        reason.selection = true;
      }
      if (tr.storedMarksSet) {
        reason.storedMark = true;
      }
      setUpdateReason(reason);
    }, [])
  );
  return updateReason;
}

// src/on-change.tsx
var import_react15 = require("react");
var OnChangeJSON = ({ onChange }) => {
  const { getJSON } = useHelpers();
  useDocChanged(
    (0, import_react15.useCallback)(
      ({ state }) => {
        const json = getJSON(state);
        onChange(json);
      },
      [onChange, getJSON]
    )
  );
  return null;
};
var OnChangeHTML = ({ onChange }) => {
  const { getHTML } = useHelpers();
  useDocChanged(
    (0, import_react15.useCallback)(
      ({ state }) => {
        const html = getHTML(state);
        onChange(html);
      },
      [onChange, getHTML]
    )
  );
  return null;
};

// src/prosemirror-view.ts
var import_view2 = require("@remirror/pm/view");
function createEditorView(place, props) {
  return new import_view2.EditorView(place, props);
}

// src/react-remirror.tsx
var import_react16 = __toESM(require("react"), 1);
var import_core11 = require("@remirror/core");
var import_extension_react_component = require("@remirror/extension-react-component");
var import_theme = require("@remirror/theme");
var EditorComponent = () => /* @__PURE__ */ import_react16.default.createElement("div", __spreadValues({ className: import_theme.ComponentsTheme.EDITOR_WRAPPER }, useRemirrorContext().getRootProps()));
var HookComponent = (props) => {
  props.hook();
  return null;
};
function Remirror(props) {
  const _a = props, {
    children,
    autoRender,
    i18nFormat,
    locale,
    supportedLocales,
    hooks = []
  } = _a, frameworkProps = __objRest(_a, [
    "children",
    "autoRender",
    "i18nFormat",
    "locale",
    "supportedLocales",
    "hooks"
  ]);
  const context = useReactFramework(frameworkProps);
  const portals = (0, import_extension_react_component.usePortals)(context.portalContainer);
  const autoRenderAtStart = autoRender === "start" || autoRender === true || !children && (0, import_core11.isNullOrUndefined)(autoRender);
  const autoRenderAtEnd = autoRender === "end";
  return /* @__PURE__ */ import_react16.default.createElement(I18nProvider, { i18nFormat, locale, supportedLocales }, /* @__PURE__ */ import_react16.default.createElement(RemirrorContext.Provider, { value: context }, /* @__PURE__ */ import_react16.default.createElement(import_extension_react_component.RemirrorPortals, { portals }), hooks.map((hook, index) => /* @__PURE__ */ import_react16.default.createElement(HookComponent, { hook, key: index })), autoRenderAtStart && /* @__PURE__ */ import_react16.default.createElement(EditorComponent, null), children, autoRenderAtEnd && /* @__PURE__ */ import_react16.default.createElement(EditorComponent, null)));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EditorComponent,
  I18nProvider,
  OnChangeHTML,
  OnChangeJSON,
  Remirror,
  RemirrorContext,
  createEditorView,
  createReactManager,
  useActive,
  useAttrs,
  useChainedCommands,
  useCommands,
  useCurrentSelection,
  useDocChanged,
  useEditorDomRef,
  useEditorState,
  useEditorView,
  useExtension,
  useExtensionCustomEvent,
  useExtensionEvent,
  useForceUpdate,
  useHasExtension,
  useHelpers,
  useI18n,
  useManager,
  useMarkRange,
  usePortalContainer,
  useRemirror,
  useRemirrorContext,
  useSelectedText,
  useUpdateReason
});
