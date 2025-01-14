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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  addKeyToElement: () => addKeyToElement,
  getElementProps: () => getElementProps,
  isReactDOMElement: () => isReactDOMElement,
  isReactFragment: () => isReactFragment,
  isValidElement: () => isValidElement,
  propIsFunction: () => propIsFunction
});
module.exports = __toCommonJS(src_exports);

// src/react-utils.tsx
var import_react = require("react");
var import_core_constants = require("@remirror/core-constants");
var import_core_helpers = require("@remirror/core-helpers");
function isValidElement(value) {
  return (0, import_core_helpers.isObject)(value) && (0, import_react.isValidElement)(value);
}
function isReactDOMElement(value) {
  return isValidElement(value) && (0, import_core_helpers.isString)(value.type);
}
function isReactFragment(value) {
  return (0, import_core_helpers.isObject)(value) && isValidElement(value) && value.type === import_react.Fragment;
}
function getElementProps(element) {
  return isValidElement(element) ? element.props : {};
}
var propIsFunction = (value) => {
  (0, import_core_helpers.invariant)((0, import_core_helpers.isFunction)(value), {
    code: import_core_constants.ErrorConstant.INTERNAL,
    message: "The child argument to the Remirror component must be a function."
  });
  return true;
};
function addKeyToElement(element, key) {
  if (!isValidElement(element)) {
    return element;
  }
  return (0, import_react.cloneElement)(element, __spreadProps(__spreadValues({}, element.props), { key }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addKeyToElement,
  getElementProps,
  isReactDOMElement,
  isReactFragment,
  isValidElement,
  propIsFunction
});
