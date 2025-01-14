"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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

// src/use-suggest.ts
var use_suggest_exports = {};
__export(use_suggest_exports, {
  useSuggest: () => useSuggest
});
module.exports = __toCommonJS(use_suggest_exports);
var import_react = require("react");
var import_core = require("@remirror/core");
var import_extension_positioner = require("@remirror/extension-positioner");
var import_react_core = require("@remirror/react-core");
function useSuggest(props) {
  const { helpers } = (0, import_react_core.useRemirrorContext)();
  const [hookState, setHookState] = (0, import_react.useState)(() => __spreadValues({
    change: void 0,
    exit: void 0,
    shouldResetChangeState: false,
    shouldResetExitState: false
  }, helpers.getSuggestMethods()));
  const stateRef = (0, import_react.useRef)({});
  const onChange = (0, import_react.useCallback)((options) => {
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
    if (!(0, import_core.isEmptyObject)(stateUpdate)) {
      setHookState((prevState) => __spreadValues(__spreadValues({}, prevState), stateUpdate));
    }
  }, []);
  const onApplyState = (0, import_react.useCallback)(
    ({ tr, state, previousState }) => {
      if (!(0, import_extension_positioner.hasStateChanged)({ tr, state, previousState }) || helpers.getSuggestState().removed) {
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
  (0, import_react_core.useExtensionEvent)(import_core.PluginsExtension, "applyState", onApplyState);
  const suggester = (0, import_react.useMemo)(
    () => __spreadProps(__spreadValues({}, props), { onChange }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, ...Object.values(props)]
  );
  (0, import_react_core.useExtensionCustomEvent)(import_core.SuggestExtension, "suggester", suggester);
  return (0, import_react.useMemo)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useSuggest
});
