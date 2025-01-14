var __defProp = Object.defineProperty;
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

// src/create-context-hook.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef
} from "react";
function createContextHook(useHook) {
  const DefaultContext = createContext(null);
  const useHookContext = contextHookFactory(DefaultContext);
  const Provider = (props) => {
    const context = useHook(props);
    return /* @__PURE__ */ React.createElement(DefaultContext.Provider, { value: context }, props.children);
  };
  return [Provider, useHookContext, DefaultContext];
}
function contextHookFactory(DefaultContext) {
  return (selector, equalityCheck) => {
    const context = useContext(DefaultContext);
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
  const ref = useRef();
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;

// src/create-context-state.tsx
import { useEffect as useEffect2, useRef as useRef2, useState } from "react";
function createContextState(creator, hook) {
  return createContextHook((props) => {
    const contextRef = useRef2(null);
    const setContextRef = useRef2();
    const state = hook == null ? void 0 : hook(props);
    const [context, setContext] = useState(
      () => creator({
        get: createGet(contextRef),
        set: createSet(setContextRef),
        previousContext: void 0,
        props,
        state
      })
    );
    const dependencies = [...Object.values(props), state];
    useEffect2(() => {
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
export {
  createContextHook,
  createContextState
};
