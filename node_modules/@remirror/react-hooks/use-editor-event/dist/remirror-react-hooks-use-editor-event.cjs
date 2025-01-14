"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/use-editor-event.ts
var use_editor_event_exports = {};
__export(use_editor_event_exports, {
  useEditorEvent: () => useEditorEvent
});
module.exports = __toCommonJS(use_editor_event_exports);
var import_extension_events = require("@remirror/extension-events");
var import_react_core = require("@remirror/react-core");
function useEditorEvent(event, handler) {
  (0, import_react_core.useExtensionEvent)(import_extension_events.EventsExtension, event, handler);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useEditorEvent
});
