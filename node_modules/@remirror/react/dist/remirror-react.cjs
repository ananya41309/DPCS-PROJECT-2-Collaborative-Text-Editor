"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("@remirror/extension-react-component"), module.exports);
__reExport(src_exports, require("@remirror/preset-react"), module.exports);
__reExport(src_exports, require("@remirror/react-components"), module.exports);
__reExport(src_exports, require("@remirror/react-core"), module.exports);
__reExport(src_exports, require("@remirror/react-hooks"), module.exports);
__reExport(src_exports, require("@remirror/react-renderer"), module.exports);
__reExport(src_exports, require("@remirror/react-utils"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("@remirror/extension-react-component"),
  ...require("@remirror/preset-react"),
  ...require("@remirror/react-components"),
  ...require("@remirror/react-core"),
  ...require("@remirror/react-hooks"),
  ...require("@remirror/react-renderer"),
  ...require("@remirror/react-utils")
});
