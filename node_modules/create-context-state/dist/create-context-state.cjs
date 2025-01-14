"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createContextHook: () => createContextHook,
  createContextState: () => createContextState
});
module.exports = __toCommonJS(src_exports);

// src/create-context-hook.tsx
var import_react = __toESM(require("react"), 1);
function createContextHook(useHook) {
  const DefaultContext = (0, import_react.createContext)(null);
  const useHookContext = contextHookFactory(DefaultContext);
  const Provider = (props) => {
    const context = useHook(props);
    return /* @__PURE__ */ import_react.default.createElement(DefaultContext.Provider, { value: context }, props.children);
  };
  return [Provider, useHookContext, DefaultContext];
}
function contextHookFactory(DefaultContext) {
  return (selector, equalityCheck) => {
    const context = (0, import_react.useContext)(DefaultContext);
    const previousContext = usePrevious(context);
    if (!context) {
      throw new Error(
        "`useContextHook` must be placed inside the `Provider` returned by the `createContextState` method"
      );
    }
    if (!selector) {
      return context;
    }
    if (typeof selector !== "function") {
      throw new TypeError(
        "invalid arguments passed to `useContextHook`. This hook must be called with zero arguments, a getter function or a path string."
      );
    }
    const value = selector(context);
    if (!previousContext || !equalityCheck) {
      return value;
    }
    const previousValue = selector(previousContext);
    return equalityCheck(previousValue, value) ? previousValue : value;
  };
}
function usePrevious(value) {
  const ref = (0, import_react.useRef)();
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;

// src/create-context-state.tsx
var import_react2 = require("react");
function createContextState(creator, hook) {
  return createContextHook((props) => {
    const contextRef = (0, import_react2.useRef)(null);
    const setContextRef = (0, import_react2.useRef)();
    const state = hook == null ? void 0 : hook(props);
    const [context, setContext] = (0, import_react2.useState)(
      () => creator({
        get: createGet(contextRef),
        set: createSet(setContextRef),
        previousContext: void 0,
        props,
        state
      })
    );
    const dependencies = [...Object.values(props), state];
    (0, import_react2.useEffect)(() => {
      if (dependencies.length === 0) {
        return;
      }
      setContext(
        (previousContext) => creator({
          get: createGet(contextRef),
          set: createSet(setContextRef),
          previousContext,
          props,
          state
        })
      );
    }, dependencies);
    contextRef.current = context;
    setContextRef.current = setContext;
    return context;
  });
}
function createGet(ref) {
  return (pathOrSelector) => {
    if (!ref.current) {
      throw new Error(
        "`get` called outside of function scope. `get` can only be called within a function."
      );
    }
    if (!pathOrSelector) {
      return ref.current;
    }
    if (typeof pathOrSelector !== "function") {
      throw new TypeError(
        "Invalid arguments passed to `useContextHook`. The hook must be called with zero arguments, a getter function or a path string."
      );
    }
    return pathOrSelector(ref.current);
  };
}
function createSet(ref) {
  return (partial) => {
    if (!ref.current) {
      throw new Error(
        "`set` called outside of function scope. `set` can only be called within a function."
      );
    }
    ref.current((context) => __spreadValues(__spreadValues({}, context), typeof partial === "function" ? partial(context) : partial));
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createContextHook,
  createContextState
});
