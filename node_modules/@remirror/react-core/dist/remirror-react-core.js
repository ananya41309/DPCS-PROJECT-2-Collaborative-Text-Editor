var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// src/contexts/i18n-context.tsx
import React, { createContext, useCallback, useMemo } from "react";
var defaultI18nFormatter = (message) => message.message;
var I18nContext = createContext(defaultI18nFormatter);
var I18nProvider = ({
  i18nFormat = defaultI18nFormatter,
  locale = "en",
  supportedLocales,
  children
}) => {
  const locales = useMemo(() => {
    return supportedLocales != null ? supportedLocales : [locale];
  }, [supportedLocales, locale]);
  const t = useCallback(
    (message, values) => {
      return i18nFormat(message, values, locale, locales);
    },
    [i18nFormat, locale, locales]
  );
  return /* @__PURE__ */ React.createElement(I18nContext.Provider, { value: t }, children);
};

// src/hooks/use-remirror-context.ts
import { createContext as createContext2, useContext, useEffect, useRef } from "react";
import {
  ErrorConstant,
  invariant,
  isFunction,
  isPlainObject
} from "@remirror/core";

// src/hooks/use-force-update.ts
import { useCallback as useCallback2, useState } from "react";
import { object } from "@remirror/core";
function useForceUpdate() {
  const [, setState] = useState(object());
  return useCallback2(() => {
    setState(object());
  }, []);
}

// src/hooks/use-remirror-context.ts
var RemirrorContext = createContext2(null);
function useRemirrorContext(handler) {
  const context = useContext(RemirrorContext);
  const forceUpdate = useRef(useForceUpdate());
  invariant(context, { code: ErrorConstant.REACT_PROVIDER_CONTEXT });
  const { addHandler } = context;
  useEffect(() => {
    let updateHandler = handler;
    if (!updateHandler) {
      return;
    }
    if (isPlainObject(updateHandler)) {
      const { autoUpdate } = updateHandler;
      updateHandler = autoUpdate ? () => forceUpdate.current() : void 0;
    }
    if (!isFunction(updateHandler)) {
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
import { DocChangedExtension } from "@remirror/core";

// src/hooks/use-extension-event.ts
import { useCallback as useCallback3 } from "react";

// src/hooks/use-extension.ts
import { useEffect as useEffect2, useMemo as useMemo2 } from "react";
import {
  isFunction as isFunction2
} from "@remirror/core";
function useExtension(Constructor, optionsOrCallback = void 0, dependencies) {
  const { getExtension } = useRemirrorContext();
  const extension = useMemo2(() => getExtension(Constructor), [Constructor, getExtension]);
  let deps;
  if (isFunction2(optionsOrCallback)) {
    deps = dependencies ? [extension, ...dependencies] : [extension, optionsOrCallback];
  } else {
    deps = optionsOrCallback ? [extension, ...Object.values(optionsOrCallback)] : [];
  }
  useEffect2(() => {
    if (isFunction2(optionsOrCallback) || !optionsOrCallback) {
      return;
    }
    extension.setOptions(optionsOrCallback);
  }, deps);
  useEffect2(() => {
    if (!isFunction2(optionsOrCallback)) {
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
  const callback = useCallback3(
    ({ addHandler }) => addHandler(event, memoizedHandler),
    [memoizedHandler, event]
  );
  return useExtension(extension, callback);
}
function useExtensionCustomEvent(extension, event, memoizedCustomHandler) {
  const callback = useCallback3(
    ({ addCustomHandler }) => addCustomHandler(event, memoizedCustomHandler),
    [memoizedCustomHandler, event]
  );
  return useExtension(extension, callback);
}

// src/hooks/use-doc-changed.ts
function useDocChanged(handler) {
  useExtensionEvent(DocChangedExtension, "docChanged", handler);
}

// src/hooks/use-editor-dom-ref.ts
import { useRef as useRef2 } from "react";

// src/hooks/use-editor-view.ts
function useEditorView() {
  return useRemirrorContext().view;
}

// src/hooks/use-editor-dom-ref.ts
function useEditorDomRef() {
  return useRef2(useEditorView().dom);
}

// src/hooks/use-editor-state.ts
function useEditorState() {
  return useRemirrorContext({ autoUpdate: true }).getState();
}

// src/hooks/use-has-extension.ts
import { useMemo as useMemo3 } from "react";
function useHasExtension(Constructor) {
  const { hasExtension } = useRemirrorContext();
  return useMemo3(() => hasExtension(Constructor), [Constructor, hasExtension]);
}

// src/hooks/use-helpers.ts
function useHelpers(update = false) {
  return useRemirrorContext(update ? { autoUpdate: true } : void 0).helpers;
}

// src/hooks/use-i18n.ts
import { useContext as useContext2 } from "react";
function useI18n() {
  return useContext2(I18nContext);
}

// src/hooks/use-manager.ts
import { useEffect as useEffect3, useRef as useRef3, useState as useState2 } from "react";

// src/react-helpers.tsx
import { getLazyArray, isRemirrorManager, RemirrorManager } from "@remirror/core";
import { corePreset } from "@remirror/preset-core";
import { ReactExtension } from "@remirror/preset-react";
function createReactManager(extensions, options = {}) {
  const _a = options, { core, react } = _a, settings = __objRest(_a, ["core", "react"]);
  if (isRemirrorManager(extensions)) {
    return extensions;
  }
  return RemirrorManager.create(
    () => [...getLazyArray(extensions), new ReactExtension(react), ...corePreset(core)],
    settings
  );
}

// src/hooks/use-manager.ts
function useManager(extensions, options = {}) {
  const extensionsRef = useRef3(extensions);
  const optionsRef = useRef3(options);
  const [manager, setManager] = useState2(() => createReactManager(extensions, options));
  extensionsRef.current = extensions;
  optionsRef.current = options;
  useEffect3(
    () => manager.addHandler("destroy", () => {
      setManager(() => createReactManager(extensionsRef.current, optionsRef.current));
    }),
    [manager]
  );
  return manager;
}

// src/hooks/use-mark-range.ts
import { getMarkRange } from "@remirror/core";
function useMarkRange(type) {
  const { getState } = useRemirrorContext({ autoUpdate: true });
  const { $from, $to } = getState().selection;
  return getMarkRange($from, type, $to);
}

// src/hooks/use-portal-container.ts
function usePortalContainer() {
  return useRemirrorContext().portalContainer;
}

// src/hooks/use-react-framework.tsx
import { useEffect as useEffect5, useMemo as useMemo4, useRef as useRef5, useState as useState3 } from "react";
import { ErrorConstant as ErrorConstant3, invariant as invariant3, isArray, isNullOrUndefined } from "@remirror/core";
import { ReactExtension as ReactExtension2 } from "@remirror/preset-react";

// src/react-framework.tsx
import {
  ErrorConstant as ErrorConstant2,
  Framework,
  invariant as invariant2,
  object as object2,
  STATE_OVERRIDE
} from "@remirror/core";
import { EditorView } from "@remirror/pm/view";
import { PlaceholderExtension } from "@remirror/preset-react";

// src/commonjs-packages/seznam-compose-react-refs.ts
import _composeRefs from "@seznam/compose-react-refs";
var composeRefs = typeof _composeRefs === "object" && _composeRefs.__esModule && _composeRefs.default ? _composeRefs.default : _composeRefs;

// src/react-framework.tsx
var _editorRef;
var ReactFramework = class extends Framework {
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
      const _a = options != null ? options : object2(), {
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
      invariant2(this.rootPropsConfig.count <= 1, {
        code: ErrorConstant2.REACT_GET_ROOT_PROPS,
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
    this.manager.getExtension(PlaceholderExtension).setOptions({ placeholder: (_a = this.props.placeholder) != null ? _a : "" });
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
    return new EditorView(null, {
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
      invariant2(onChange, {
        code: ErrorConstant2.REACT_CONTROLLED,
        message: "You are required to provide the `onChange` handler when creating a controlled editor."
      });
      invariant2(triggerChange, {
        code: ErrorConstant2.REACT_CONTROLLED,
        message: "Controlled editors do not support `clearContent` or `setContent` where `triggerChange` is `true`. Update the `state` prop instead."
      });
      if (!this.previousStateOverride) {
        this.previousStateOverride = this.getState();
      }
      this.onChange({ state, tr, transactions });
      return;
    }
    if (!tr && !transactions) {
      state = state.apply(state.tr.setMeta(STATE_OVERRIDE, {}));
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
    state = state.apply(state.tr.setMeta(STATE_OVERRIDE, {}));
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
    invariant2(__privateGet(this, _editorRef), {
      code: ErrorConstant2.REACT_EDITOR_VIEW,
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
import { useEffect as useEffect4, useLayoutEffect } from "react";
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect4;

// src/hooks/use-previous.ts
import { useRef as useRef4 } from "react";
function usePrevious(value) {
  const ref = useRef4();
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// src/hooks/use-react-framework.tsx
function useReactFramework(props) {
  const { manager, state } = props;
  const { placeholder, editable } = props;
  const firstUpdate = useRef5(true);
  if (firstUpdate.current && !isNullOrUndefined(placeholder)) {
    manager.getExtension(ReactExtension2).setOptions({ placeholder });
  }
  useEffect5(() => {
    if (placeholder == null) {
      return;
    }
    manager.getExtension(ReactExtension2).setOptions({ placeholder });
  }, [placeholder, manager]);
  const [initialEditorState] = useState3(() => {
    var _a;
    if (state) {
      return state;
    }
    const fallback = manager.createEmptyDoc();
    const [initialContent, initialSelection] = isArray(props.initialContent) ? props.initialContent : [(_a = props.initialContent) != null ? _a : fallback];
    return manager.createState({ content: initialContent, selection: initialSelection });
  });
  const framework = useFramework({
    initialEditorState,
    getProps: () => props
  });
  useEffect5(
    () => () => {
      framework.destroy();
    },
    [framework]
  );
  useEffect5(() => {
    framework.onUpdate();
  }, [editable, framework]);
  useControlledEditor(framework);
  return framework.frameworkOutput;
}
function useFramework(props) {
  const propsRef = useRef5(props);
  propsRef.current = props;
  const framework = useMemo4(() => new ReactFramework(propsRef.current), []);
  framework.update(props);
  return framework;
}
function useControlledEditor(framework) {
  const { state } = framework.props;
  const isControlledRef = useRef5(!!state);
  const previousValue = usePrevious(state);
  useIsomorphicLayoutEffect(() => {
    const validUpdate = state ? isControlledRef.current === true : isControlledRef.current === false;
    invariant3(validUpdate, {
      code: ErrorConstant3.REACT_CONTROLLED,
      message: isControlledRef.current ? "You have attempted to switch from a controlled to an uncontrolled editor. Once you set up an editor as a controlled editor it must always provide a `state` prop." : "You have provided a `state` prop to an uncontrolled editor. In order to set up your editor as controlled you must provide the `state` prop from the very first render."
    });
    if (!state || state === previousValue) {
      return;
    }
    framework.updateControlledState(state, previousValue != null ? previousValue : void 0);
  }, [state, previousValue, framework]);
}

// src/hooks/use-remirror.tsx
import { useCallback as useCallback4, useMemo as useMemo5, useState as useState4 } from "react";
function useRemirror(props = {}) {
  const _a = props, { content, document: document2, selection, extensions } = _a, settings = __objRest(_a, ["content", "document", "selection", "extensions"]);
  const manager = useManager(extensions != null ? extensions : () => [], settings);
  const [state, setState] = useState4(
    () => manager.createState({
      selection,
      content: content != null ? content : manager.createEmptyDoc()
    })
  );
  const onChange = useCallback4(({ state: state2 }) => {
    setState(state2);
  }, []);
  const getContext = useCallback4(() => {
    const context = manager.output;
    return context;
  }, [manager]);
  return useMemo5(
    () => ({ state, setState, manager, onChange, getContext }),
    [getContext, manager, onChange, state]
  );
}

// src/hooks/use-selected-text.ts
import { isTextSelection } from "@remirror/core";
function useSelectedText() {
  const { getState, helpers } = useRemirrorContext({ autoUpdate: true });
  const { selection, doc } = getState();
  if (!isTextSelection(selection) || selection.empty) {
    return;
  }
  const { from, to } = selection;
  return helpers.getTextBetween(from, to, doc);
}

// src/hooks/use-update-reason.ts
import { useCallback as useCallback5, useState as useState5 } from "react";
import { PluginsExtension } from "@remirror/core";
var noReason = { doc: false, selection: false, storedMark: false };
function useUpdateReason() {
  const [updateReason, setUpdateReason] = useState5(noReason);
  useExtensionEvent(
    PluginsExtension,
    "applyState",
    useCallback5(({ tr }) => {
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
import { useCallback as useCallback6 } from "react";
var OnChangeJSON = ({ onChange }) => {
  const { getJSON } = useHelpers();
  useDocChanged(
    useCallback6(
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
    useCallback6(
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
import { EditorView as EditorView2 } from "@remirror/pm/view";
function createEditorView(place, props) {
  return new EditorView2(place, props);
}

// src/react-remirror.tsx
import React2 from "react";
import { isNullOrUndefined as isNullOrUndefined2 } from "@remirror/core";
import { RemirrorPortals, usePortals } from "@remirror/extension-react-component";
import { ComponentsTheme } from "@remirror/theme";
var EditorComponent = () => /* @__PURE__ */ React2.createElement("div", __spreadValues({ className: ComponentsTheme.EDITOR_WRAPPER }, useRemirrorContext().getRootProps()));
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
  const portals = usePortals(context.portalContainer);
  const autoRenderAtStart = autoRender === "start" || autoRender === true || !children && isNullOrUndefined2(autoRender);
  const autoRenderAtEnd = autoRender === "end";
  return /* @__PURE__ */ React2.createElement(I18nProvider, { i18nFormat, locale, supportedLocales }, /* @__PURE__ */ React2.createElement(RemirrorContext.Provider, { value: context }, /* @__PURE__ */ React2.createElement(RemirrorPortals, { portals }), hooks.map((hook, index) => /* @__PURE__ */ React2.createElement(HookComponent, { hook, key: index })), autoRenderAtStart && /* @__PURE__ */ React2.createElement(EditorComponent, null), children, autoRenderAtEnd && /* @__PURE__ */ React2.createElement(EditorComponent, null)));
}
export {
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
};
