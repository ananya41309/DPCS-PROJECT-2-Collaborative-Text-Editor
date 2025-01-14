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

// src/use-editor-focus.ts
var use_editor_focus_exports = {};
__export(use_editor_focus_exports, {
  useEditorFocus: () => useEditorFocus
});
module.exports = __toCommonJS(use_editor_focus_exports);
var import_react = require("react");
var import_core = require("@remirror/core");
var import_react_core2 = require("@remirror/react-core");

// src/use-editor-event.ts
var import_extension_events = require("@remirror/extension-events");
var import_react_core = require("@remirror/react-core");
function useEditorEvent(event, handler) {
  (0, import_react_core.useExtensionEvent)(import_extension_events.EventsExtension, event, handler);
}

// src/use-editor-focus.ts
function useEditorFocus(props = {}) {
  const { ignoredElements = [], blurOnInactive = false } = props;
  const { view, commands } = (0, import_react_core2.useRemirrorContext)();
  const [isFocused, setIsFocused] = (0, import_react.useState)(() => view.hasFocus());
  useEditorEvent(
    "blur",
    (0, import_react.useCallback)(
      (event) => {
        const focusedElement = (0, import_core.isElementDomNode)(event.relatedTarget) ? event.relatedTarget : document.activeElement;
        const ignoreBlur = !blurOnInactive && !focusedElement;
        if (ignoreBlur || view.dom.contains(focusedElement)) {
          return false;
        }
        for (const element of ignoredElements) {
          if (element == null ? void 0 : element.contains(focusedElement)) {
            return false;
          }
        }
        setIsFocused(false);
        return false;
      },
      [blurOnInactive, ignoredElements, view.dom]
    )
  );
  useEditorEvent(
    "focus",
    (0, import_react.useCallback)(
      (_) => {
        if (isFocused) {
          return false;
        }
        setIsFocused(true);
        return false;
      },
      [isFocused]
    )
  );
  return [isFocused, commands.focus];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useEditorFocus
});
