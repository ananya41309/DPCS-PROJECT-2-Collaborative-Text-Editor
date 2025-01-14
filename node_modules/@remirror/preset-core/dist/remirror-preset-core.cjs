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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  corePreset: () => corePreset,
  createCoreManager: () => createCoreManager
});
module.exports = __toCommonJS(src_exports);

// src/core-preset.ts
var import_core = require("@remirror/core");
var import_extension_doc = require("@remirror/extension-doc");
var import_extension_events = require("@remirror/extension-events");
var import_extension_gap_cursor = require("@remirror/extension-gap-cursor");
var import_extension_history = require("@remirror/extension-history");
var import_extension_paragraph = require("@remirror/extension-paragraph");
var import_extension_positioner = require("@remirror/extension-positioner");
var import_extension_text = require("@remirror/extension-text");
var defaultOptions = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, import_extension_doc.DocExtension.defaultOptions), import_extension_paragraph.ParagraphExtension.defaultOptions), import_extension_history.HistoryExtension.defaultOptions), {
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
    const historyExtension = new import_extension_history.HistoryExtension({ depth, getDispatch, getState, newGroupDelay });
    coreExtensions.push(historyExtension);
  }
  if (!excludeMap["doc"]) {
    coreExtensions.push(new import_extension_doc.DocExtension({ content }));
  }
  if (!excludeMap["text"]) {
    coreExtensions.push(new import_extension_text.TextExtension());
  }
  if (!excludeMap["paragraph"]) {
    coreExtensions.push(new import_extension_paragraph.ParagraphExtension());
  }
  if (!excludeMap["positioner"]) {
    coreExtensions.push(new import_extension_positioner.PositionerExtension());
  }
  if (!excludeMap["gapCursor"]) {
    coreExtensions.push(new import_extension_gap_cursor.GapCursorExtension());
  }
  if (!excludeMap["events"]) {
    coreExtensions.push(new import_extension_events.EventsExtension());
  }
  return coreExtensions;
}
function createCoreManager(extensions, options = {}) {
  const _a = options, { core } = _a, managerSettings = __objRest(_a, ["core"]);
  return import_core.RemirrorManager.create(
    () => [...(0, import_core.getLazyArray)(extensions), ...corePreset(core)],
    managerSettings
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  corePreset,
  createCoreManager
});
