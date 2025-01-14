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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  setStatus: () => setStatus
});
module.exports = __toCommonJS(src_exports);

// src/a11y-status.ts
var import_throttle_debounce = require("throttle-debounce");
var statusDiv;
var getStatusDiv = (doc = document) => {
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = doc.createElement("div");
  statusDiv.setAttribute("id", "a11y-status-message");
  statusDiv.setAttribute("role", "status");
  statusDiv.setAttribute("aria-live", "polite");
  statusDiv.setAttribute("aria-relevant", "additions text");
  Object.assign(statusDiv.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  });
  doc.body.append(statusDiv);
  return statusDiv;
};
var cleanupStatus = (0, import_throttle_debounce.debounce)(500, () => {
  getStatusDiv().textContent = "";
});
var setStatus = (status, doc) => {
  const div = getStatusDiv(doc);
  if (!status) {
    return;
  }
  div.textContent = status;
  cleanupStatus();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setStatus
});
