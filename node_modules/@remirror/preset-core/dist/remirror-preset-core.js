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

// src/core-preset.ts
import {
  getLazyArray,
  RemirrorManager
} from "@remirror/core";
import { DocExtension } from "@remirror/extension-doc";
import { EventsExtension } from "@remirror/extension-events";
import { GapCursorExtension } from "@remirror/extension-gap-cursor";
import { HistoryExtension } from "@remirror/extension-history";
import { ParagraphExtension } from "@remirror/extension-paragraph";
import { PositionerExtension } from "@remirror/extension-positioner";
import { TextExtension } from "@remirror/extension-text";
var defaultOptions = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, DocExtension.defaultOptions), ParagraphExtension.defaultOptions), HistoryExtension.defaultOptions), {
  excludeExtensions: []
});
function corePreset(options = {}) {
  options = __spreadValues(__spreadValues({}, defaultOptions), options);
  const { content, depth, getDispatch, getState, newGroupDelay, excludeExtensions } = options;
  const excludeMap = {};
  for (const name of excludeExtensions != null ? excludeExtensions : []) {
    excludeMap[name] = true;
  }
  const coreExtensions = [];
  if (!excludeMap["history"]) {
    const historyExtension = new HistoryExtension({ depth, getDispatch, getState, newGroupDelay });
    coreExtensions.push(historyExtension);
  }
  if (!excludeMap["doc"]) {
    coreExtensions.push(new DocExtension({ content }));
  }
  if (!excludeMap["text"]) {
    coreExtensions.push(new TextExtension());
  }
  if (!excludeMap["paragraph"]) {
    coreExtensions.push(new ParagraphExtension());
  }
  if (!excludeMap["positioner"]) {
    coreExtensions.push(new PositionerExtension());
  }
  if (!excludeMap["gapCursor"]) {
    coreExtensions.push(new GapCursorExtension());
  }
  if (!excludeMap["events"]) {
    coreExtensions.push(new EventsExtension());
  }
  return coreExtensions;
}
function createCoreManager(extensions, options = {}) {
  const _a = options, { core } = _a, managerSettings = __objRest(_a, ["core"]);
  return RemirrorManager.create(
    () => [...getLazyArray(extensions), ...corePreset(core)],
    managerSettings
  );
}
export {
  corePreset,
  createCoreManager
};
