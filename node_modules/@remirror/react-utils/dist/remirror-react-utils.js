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

// src/react-utils.tsx
import {
  cloneElement,
  Fragment,
  isValidElement as isValidReactElement
} from "react";
import { ErrorConstant } from "@remirror/core-constants";
import { invariant, isFunction, isObject, isString } from "@remirror/core-helpers";
function isValidElement(value) {
  return isObject(value) && isValidReactElement(value);
}
function isReactDOMElement(value) {
  return isValidElement(value) && isString(value.type);
}
function isReactFragment(value) {
  return isObject(value) && isValidElement(value) && value.type === Fragment;
}
function getElementProps(element) {
  return isValidElement(element) ? element.props : {};
}
var propIsFunction = (value) => {
  invariant(isFunction(value), {
    code: ErrorConstant.INTERNAL,
    message: "The child argument to the Remirror component must be a function."
  });
  return true;
};
function addKeyToElement(element, key) {
  if (!isValidElement(element)) {
    return element;
  }
  return cloneElement(element, __spreadProps(__spreadValues({}, element.props), { key }));
}
export {
  addKeyToElement,
  getElementProps,
  isReactDOMElement,
  isReactFragment,
  isValidElement,
  propIsFunction
};
