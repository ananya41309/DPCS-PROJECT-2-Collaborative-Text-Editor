var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/use-suggest.ts
import { useCallback, useMemo, useRef, useState } from "react";
import {
  isEmptyObject,
  PluginsExtension,
  SuggestExtension
} from "@remirror/core";
import { hasStateChanged } from "@remirror/extension-positioner";
import {
  useExtensionCustomEvent,
  useExtensionEvent,
  useRemirrorContext
} from "@remirror/react-core";
function useSuggest(props) {
  const { helpers } = useRemirrorContext();
  const [hookState, setHookState] = useState(() => __spreadValues({
    change: void 0,
    exit: void 0,
    shouldResetChangeState: false,
    shouldResetExitState: false
  }, helpers.getSuggestMethods()));
  const stateRef = useRef({});
  const onChange = useCallback((options) => {
    const { changeReason, exitReason, match, query, text, range } = options;
    const stateUpdate = __spreadValues({}, stateRef.current);
    stateRef.current = {};
    if (changeReason) {
      stateUpdate.change = { match, query, text, range, reason: changeReason };
      stateUpdate.shouldResetChangeState = false;
      if (!exitReason) {
        stateUpdate.exit = void 0;
      }
    }
    if (exitReason) {
      stateUpdate.exit = { match, query, text, range, reason: exitReason };
      stateUpdate.shouldResetExitState = false;
      if (!changeReason) {
        stateUpdate.change = void 0;
      }
    }
    if (!isEmptyObject(stateUpdate)) {
      setHookState((prevState) => __spreadValues(__spreadValues({}, prevState), stateUpdate));
    }
  }, []);
  const onApplyState = useCallback(
    ({ tr, state, previousState }) => {
      if (!hasStateChanged({ tr, state, previousState }) || helpers.getSuggestState().removed) {
        return;
      }
      const stateUpdate = __spreadValues({}, stateRef.current);
      if ((hookState.shouldResetChangeState || stateUpdate.shouldResetChangeState) && hookState.change) {
        stateUpdate.change = void 0;
      }
      if ((hookState.shouldResetExitState || stateUpdate.shouldResetExitState) && hookState.exit) {
        stateUpdate.exit = void 0;
      }
      if (!(hookState.shouldResetChangeState || stateUpdate.shouldResetChangeState) && hookState.change) {
        stateUpdate.shouldResetChangeState = true;
      }
      if (!(hookState.shouldResetExitState || stateUpdate.shouldResetExitState) && hookState.exit) {
        stateUpdate.shouldResetExitState = true;
      }
      stateRef.current = stateUpdate;
    },
    [hookState, helpers]
  );
  useExtensionEvent(PluginsExtension, "applyState", onApplyState);
  const suggester = useMemo(
    () => __spreadProps(__spreadValues({}, props), { onChange }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, ...Object.values(props)]
  );
  useExtensionCustomEvent(SuggestExtension, "suggester", suggester);
  return useMemo(
    () => ({
      addIgnored: hookState.addIgnored,
      change: hookState.change,
      exit: hookState.exit,
      clearIgnored: hookState.clearIgnored,
      ignoreNextExit: hookState.ignoreNextExit,
      removeIgnored: hookState.removeIgnored,
      setMarkRemoved: hookState.setMarkRemoved
    }),
    [
      hookState.addIgnored,
      hookState.change,
      hookState.clearIgnored,
      hookState.exit,
      hookState.ignoreNextExit,
      hookState.removeIgnored,
      hookState.setMarkRemoved
    ]
  );
}
export {
  useSuggest
};
