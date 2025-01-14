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

// src/use-keymap.ts
var use_keymap_exports = {};
__export(use_keymap_exports, {
  useKeymap: () => useKeymap
});
module.exports = __toCommonJS(use_keymap_exports);
var import_react = require("react");
var import_core = require("@remirror/core");
var import_react_core = require("@remirror/react-core");
function useKeymap(name, handler, priority = import_core.ExtensionPriority.Medium) {
  const tuple = (0, import_react.useMemo)(
    () => [priority, { [name]: handler }],
    [priority, name, handler]
  );
  (0, import_react_core.useExtensionCustomEvent)(import_core.KeymapExtension, "keymap", tuple);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useKeymap
});
