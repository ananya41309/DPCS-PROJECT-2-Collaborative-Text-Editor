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

// src/use-positioner.ts
var use_positioner_exports = {};
__export(use_positioner_exports, {
  usePositioner: () => usePositioner
});
module.exports = __toCommonJS(use_positioner_exports);
var import_react4 = require("react");
var import_core2 = require("@remirror/core");
var import_extension_positioner2 = require("@remirror/extension-positioner");

// src/use-multi-positioner.ts
var import_react3 = require("react");
var import_core = require("@remirror/core");
var import_extension_positioner = require("@remirror/extension-positioner");
var import_react_core = require("@remirror/react-core");

// src/use-previous.ts
var import_react2 = require("react");

// src/use-isomorphic-layout-effect.ts
var import_react = require("react");
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;

// src/use-previous.ts
function usePrevious(value) {
  const ref = (0, import_react2.useRef)();
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// src/use-multi-positioner.ts
function useMultiPositioner(positioner, deps) {
  const [state, setState] = (0, import_react3.useState)([]);
  const [memoizedPositioner, setMemoizedPositioner] = (0, import_react3.useState)(() => (0, import_extension_positioner.getPositioner)(positioner));
  const [collectRefs, setCollectRefs] = (0, import_react3.useState)([]);
  const positionerRef = (0, import_react3.useRef)(positioner);
  const previousPositioner = usePrevious(memoizedPositioner);
  positionerRef.current = positioner;
  (0, import_react_core.useExtension)(
    import_extension_positioner.PositionerExtension,
    ({ addCustomHandler }) => {
      const positioner2 = (0, import_extension_positioner.getPositioner)(positionerRef.current);
      const dispose = addCustomHandler("positioner", positioner2);
      setMemoizedPositioner(positioner2);
      return dispose;
    },
    deps
  );
  (0, import_react3.useLayoutEffect)(() => {
    const disposeUpdate = memoizedPositioner.addListener("update", (options) => {
      const items = [];
      for (const { id, data, setElement } of options) {
        const ref = (element) => {
          if (!element) {
            return;
          }
          setElement(element);
        };
        items.push({ id, data, ref });
      }
      setCollectRefs(items);
    });
    const disposeDone = memoizedPositioner.addListener("done", (options) => {
      setState(options);
    });
    if (previousPositioner == null ? void 0 : previousPositioner.recentUpdate) {
      memoizedPositioner.onActiveChanged(previousPositioner == null ? void 0 : previousPositioner.recentUpdate);
    }
    return () => {
      disposeUpdate();
      disposeDone();
    };
  }, [memoizedPositioner, previousPositioner]);
  return (0, import_react3.useMemo)(() => {
    const positions = [];
    for (const [index, { ref, data, id: key }] of collectRefs.entries()) {
      const stateValue = state[index];
      const { element, position = {} } = stateValue != null ? stateValue : {};
      const absolutePosition = __spreadValues(__spreadValues({}, import_extension_positioner.defaultAbsolutePosition), (0, import_core.omitUndefined)(position));
      positions.push(__spreadValues({ ref, element, data, key }, absolutePosition));
    }
    return positions;
  }, [collectRefs, state]);
}

// src/use-positioner.ts
function usePositioner(positioner, activeOrDeps) {
  const deps = activeOrDeps == null || (0, import_core2.isBoolean)(activeOrDeps) ? [positioner] : activeOrDeps;
  const isActive = (0, import_core2.isBoolean)(activeOrDeps) ? activeOrDeps : true;
  const key = (0, import_react4.useRef)((0, import_core2.uniqueId)());
  const positions = useMultiPositioner(positioner, deps);
  const position = positions[0];
  return (0, import_react4.useMemo)(() => {
    if (position && isActive) {
      return __spreadProps(__spreadValues({}, position), { active: true });
    }
    return __spreadProps(__spreadValues({}, import_extension_positioner2.defaultAbsolutePosition), {
      ref: void 0,
      data: {},
      active: false,
      key: key.current
    });
  }, [isActive, position]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  usePositioner
});
