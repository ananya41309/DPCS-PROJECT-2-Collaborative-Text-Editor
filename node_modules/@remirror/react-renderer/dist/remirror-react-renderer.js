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

// src/handlers/callout.tsx
import React from "react";
var Callout = (props) => {
  var _a;
  const content = props.node.content;
  if (!content) {
    return null;
  }
  const children = content.map((node, ii) => /* @__PURE__ */ React.createElement(RemirrorRenderer, __spreadValues({ json: node, key: ii }, props)));
  const { type, emoji } = (_a = props.node.attrs) != null ? _a : {};
  const dataAttrs = { "data-callout-type": type };
  if (emoji) {
    dataAttrs["data-callout-emoji"] = emoji;
  }
  return /* @__PURE__ */ React.createElement("div", __spreadValues({}, dataAttrs), emoji ? /* @__PURE__ */ React.createElement("div", { className: "remirror-callout-emoji-wrapper" }, /* @__PURE__ */ React.createElement("span", null, emoji)) : null, /* @__PURE__ */ React.createElement("div", null, children));
};

// src/handlers/code-block.tsx
import React3 from "react";

// src/handlers/text.tsx
import React2, { Fragment } from "react";
import { isString } from "@remirror/core";
var normalizeMark = (mark) => isString(mark) ? { type: mark, attrs: {} } : __spreadValues({ attrs: {} }, mark);
var TextHandler = (_a) => {
  var _b = _a, { node } = _b, props = __objRest(_b, ["node"]);
  if (!node.text) {
    return null;
  }
  let textElement = /* @__PURE__ */ React2.createElement(Fragment, null, node.text);
  if (!node.marks) {
    return textElement;
  }
  for (const mark of node.marks) {
    const normalized = normalizeMark(mark);
    const MarkHandler = props.markMap[normalized.type];
    if (!MarkHandler) {
      if (!props.skipUnknownMarks) {
        throw new Error("No handler for mark type `".concat(normalized.type, "` registered"));
      }
      continue;
    }
    textElement = /* @__PURE__ */ React2.createElement(MarkHandler, __spreadValues({}, normalized.attrs), textElement);
  }
  return textElement;
};

// src/handlers/code-block.tsx
var CodeBlock = (props) => {
  const content = props.node.content;
  if (!content) {
    return null;
  }
  const children = content.map((node, ii) => /* @__PURE__ */ React3.createElement(TextHandler, __spreadValues({ key: ii }, __spreadProps(__spreadValues({}, props), { node }))));
  return /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, children));
};

// src/handlers/heading.tsx
import React4, { createElement } from "react";
var Heading = (props) => {
  var _a, _b;
  const content = props.node.content;
  if (!content) {
    return null;
  }
  const children = content.map((node, ii) => /* @__PURE__ */ React4.createElement(TextHandler, __spreadValues({ key: ii }, __spreadProps(__spreadValues({}, props), { node }))));
  const level = (_b = (_a = props.node.attrs) == null ? void 0 : _a.level) != null ? _b : 1;
  return createElement("h".concat(level), null, children);
};

// src/handlers/iframe.tsx
import React5 from "react";
var createIFrameHandler = (overwriteAttrs) => {
  const iframeHandler = (props) => {
    var _a;
    const _b = (_a = props.node.attrs) != null ? _a : {}, { allowFullScreen, type } = _b, attrs = __objRest(_b, ["allowFullScreen", "type"]);
    const normalizedAttrs = __spreadValues(__spreadProps(__spreadValues({}, attrs), {
      // Prevent React error that allowFullScreen must be boolean (but is string in remirror)
      allowFullScreen: allowFullScreen !== "false"
    }), overwriteAttrs);
    return /* @__PURE__ */ React5.createElement("iframe", __spreadValues({}, normalizedAttrs));
  };
  return iframeHandler;
};

// src/handlers/link.tsx
import React6 from "react";
var createLinkHandler = (overwriteAttrs) => {
  const linkHandler = ({ href, target, children }) => {
    const normalizedAttrs = __spreadValues({
      href,
      target: target != null ? target : void 0
    }, overwriteAttrs);
    return /* @__PURE__ */ React6.createElement("a", __spreadValues({}, normalizedAttrs), children);
  };
  return linkHandler;
};

// src/renderer.tsx
import React7, { Fragment as Fragment2 } from "react";
import { isEmptyArray, isString as isString2, object } from "@remirror/core";
var Doc = (_a) => {
  var _b = _a, { node } = _b, props = __objRest(_b, ["node"]);
  var _a2;
  const content = node.content;
  if (!content || isEmptyArray(content)) {
    return null;
  }
  const children = content.map((child, ii) => /* @__PURE__ */ React7.createElement(RemirrorRenderer, __spreadProps(__spreadValues({ json: child }, props), { key: ii })));
  return /* @__PURE__ */ React7.createElement("div", __spreadValues({}, (_a2 = node.attrs) != null ? _a2 : object()), children);
};
var defaultTypeMap = {
  blockquote: "blockquote",
  bulletList: "ul",
  callout: Callout,
  doc: Doc,
  heading: Heading,
  paragraph: "p",
  horizontalRule: "hr",
  iframe: createIFrameHandler(),
  image: "img",
  hardBreak: "br",
  codeBlock: CodeBlock,
  orderedList: "ol",
  text: TextHandler
};
var defaultMarkMap = {
  italic: "em",
  bold: "strong",
  code: "code",
  link: createLinkHandler(),
  underline: "u"
};
var RemirrorRenderer = (props) => {
  var _a;
  const {
    json,
    markMap = defaultMarkMap,
    skipUnknownMarks = false,
    skipUnknownTypes = false,
    typeMap = defaultTypeMap
  } = props;
  if (json.type === "text" && json.text && (!json.marks || isEmptyArray(json.marks))) {
    return /* @__PURE__ */ React7.createElement(Fragment2, null, json.text);
  }
  const rest = { markMap, typeMap, skipUnknownMarks, skipUnknownTypes };
  const TypeHandler = typeMap[json.type];
  if (!TypeHandler) {
    if (!skipUnknownTypes) {
      throw new Error("No handler for node type `".concat(json.type, "` registered"));
    }
    return null;
  }
  const childProps = isString2(TypeHandler) ? (_a = json.attrs) != null ? _a : object() : __spreadProps(__spreadValues({}, rest), { node: json });
  const { content } = json;
  if (!content || isEmptyArray(content)) {
    return /* @__PURE__ */ React7.createElement(TypeHandler, __spreadValues({}, childProps));
  }
  const children = content.map((child, ii) => /* @__PURE__ */ React7.createElement(RemirrorRenderer, __spreadValues({ key: ii, json: child }, rest)));
  return /* @__PURE__ */ React7.createElement(TypeHandler, __spreadValues({}, childProps), children);
};
export {
  Callout,
  CodeBlock,
  Doc,
  Heading,
  RemirrorRenderer,
  TextHandler,
  createIFrameHandler,
  createLinkHandler
};
