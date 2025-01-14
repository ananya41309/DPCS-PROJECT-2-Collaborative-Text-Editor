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

// src/use-positioner.ts
import { useMemo as useMemo2, useRef as useRef3 } from "react";
import { isBoolean, uniqueId } from "@remirror/core";
import {
  defaultAbsolutePosition as defaultAbsolutePosition2
} from "@remirror/extension-positioner";

// src/use-multi-positioner.ts
import { useLayoutEffect as useLayoutEffect2, useMemo, useRef as useRef2, useState } from "react";
import { omitUndefined } from "@remirror/core";
import {
  defaultAbsolutePosition,
  getPositioner,
  PositionerExtension
} from "@remirror/extension-positioner";
import { useExtension } from "@remirror/react-core";

// src/use-previous.ts
import { useRef } from "react";

// src/use-isomorphic-layout-effect.ts
import { useEffect, useLayoutEffect } from "react";
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;

// src/use-previous.ts
function usePrevious(value) {
  const ref = useRef();
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// src/use-multi-positioner.ts
function useMultiPositioner(positioner, deps) {
  const [state, setState] = useState([]);
  const [memoizedPositioner, setMemoizedPositioner] = useState(() => getPositioner(positioner));
  const [collectRefs, setCollectRefs] = useState([]);
  const positionerRef = useRef2(positioner);
  const previousPositioner = usePrevious(memoizedPositioner);
  positionerRef.current = positioner;
  useExtension(
    PositionerExtension,
    ({ addCustomHandler }) => {
      const positioner2 = getPositioner(positionerRef.current);
      const dispose = addCustomHandler("positioner", positioner2);
      setMemoizedPositioner(positioner2);
      return dispose;
    },
    deps
  );
  useLayoutEffect2(() => {
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
  return useMemo(() => {
    const positions = [];
    for (const [index, { ref, data, id: key }] of collectRefs.entries()) {
      const stateValue = state[index];
      const { element, position = {} } = stateValue != null ? stateValue : {};
      const absolutePosition = __spreadValues(__spreadValues({}, defaultAbsolutePosition), omitUndefined(position));
      positions.push(__spreadValues({ ref, element, data, key }, absolutePosition));
    }
    return positions;
  }, [collectRefs, state]);
}

// src/use-positioner.ts
function usePositioner(positioner, activeOrDeps) {
  const deps = activeOrDeps == null || isBoolean(activeOrDeps) ? [positioner] : activeOrDeps;
  const isActive = isBoolean(activeOrDeps) ? activeOrDeps : true;
  const key = useRef3(uniqueId());
  const positions = useMultiPositioner(positioner, deps);
  const position = positions[0];
  return useMemo2(() => {
    if (position && isActive) {
      return __spreadProps(__spreadValues({}, position), { active: true });
    }
    return __spreadProps(__spreadValues({}, defaultAbsolutePosition2), {
      ref: void 0,
      data: {},
      active: false,
      key: key.current
    });
  }, [isActive, position]);
}
export {
  usePositioner
};
