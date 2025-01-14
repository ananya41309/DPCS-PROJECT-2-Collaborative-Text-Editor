"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Callout: () => Callout,
  CodeBlock: () => CodeBlock,
  Doc: () => Doc,
  Heading: () => Heading,
  RemirrorRenderer: () => RemirrorRenderer,
  TextHandler: () => TextHandler,
  createIFrameHandler: () => createIFrameHandler,
  createLinkHandler: () => createLinkHandler
});
module.exports = __toCommonJS(src_exports);

// src/handlers/callout.tsx
var import_react = __toESM(require("react"), 1);
var Callout = (props) => {
  var _a;
  const content = props.node.content;
  if (!content) {
    return null;
  }
  const children = content.map((node, ii) => /* @__PURE__ */ import_react.default.createElement(RemirrorRenderer, __spreadValues({ json: node, key: ii }, props)));
  const { type, emoji } = (_a = props.node.attrs) != null ? _a : {};
  const dataAttrs = { "data-callout-type": type };
  if (emoji) {
    dataAttrs["data-callout-emoji"] = emoji;
  }
  return /* @__PURE__ */ import_react.default.createElement("div", __spreadValues({}, dataAttrs), emoji ? /* @__PURE__ */ import_react.default.createElement("div", { className: "remirror-callout-emoji-wrapper" }, /* @__PURE__ */ import_react.default.createElement("span", null, emoji)) : null, /* @__PURE__ */ import_react.default.createElement("div", null, children));
};

// src/handlers/code-block.tsx
var import_react3 = __toESM(require("react"), 1);

// src/handlers/text.tsx
var import_react2 = __toESM(require("react"), 1);
var import_core = require("@remirror/core");
var normalizeMark = (mark) => (0, import_core.isString)(mark) ? { type: mark, attrs: {} } : __spreadValues({ attrs: {} }, mark);
var TextHandler = (_a) => {
  var _b = _a, { node } = _b, props = __objRest(_b, ["node"]);
  if (!node.text) {
    return null;
  }
  let textElement = /* @__PURE__ */ import_react2.default.createElement(import_react2.Fragment, null, node.text);
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
    textElement = /* @__PURE__ */ import_react2.default.createElement(MarkHandler, __spreadValues({}, normalized.attrs), textElement);
  }
  return textElement;
};

// src/handlers/code-block.tsx
var CodeBlock = (props) => {
  const content = props.node.content;
  if (!content) {
    return null;
  }
  const children = content.map((node, ii) => /* @__PURE__ */ import_react3.default.createElement(TextHandler, __spreadValues({ key: ii }, __spreadProps(__spreadValues({}, props), { node }))));
  return /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, children));
};

// src/handlers/heading.tsx
var import_react4 = __toESM(require("react"), 1);
var Heading = (props) => {
  var _a, _b;
  const content = props.node.content;
  if (!content) {
    return null;
  }
  const children = content.map((node, ii) => /* @__PURE__ */ import_react4.default.createElement(TextHandler, __spreadValues({ key: ii }, __spreadProps(__spreadValues({}, props), { node }))));
  const level = (_b = (_a = props.node.attrs) == null ? void 0 : _a.level) != null ? _b : 1;
  return (0, import_react4.createElement)("h".concat(level), null, children);
};

// src/handlers/iframe.tsx
var import_react5 = __toESM(require("react"), 1);
var createIFrameHandler = (overwriteAttrs) => {
  const iframeHandler = (props) => {
    var _a;
    const _b = (_a = props.node.attrs) != null ? _a : {}, { allowFullScreen, type } = _b, attrs = __objRest(_b, ["allowFullScreen", "type"]);
    const normalizedAttrs = __spreadValues(__spreadProps(__spreadValues({}, attrs), {
      // Prevent React error that allowFullScreen must be boolean (but is string in remirror)
      allowFullScreen: allowFullScreen !== "false"
    }), overwriteAttrs);
    return /* @__PURE__ */ import_react5.default.createElement("iframe", __spreadValues({}, normalizedAttrs));
  };
  return iframeHandler;
};

// src/handlers/link.tsx
var import_react6 = __toESM(require("react"), 1);
var createLinkHandler = (overwriteAttrs) => {
  const linkHandler = ({ href, target, children }) => {
    const normalizedAttrs = __spreadValues({
      href,
      target: target != null ? target : void 0
    }, overwriteAttrs);
    return /* @__PURE__ */ import_react6.default.createElement("a", __spreadValues({}, normalizedAttrs), children);
  };
  return linkHandler;
};

// src/renderer.tsx
var import_react7 = __toESM(require("react"), 1);
var import_core2 = require("@remirror/core");
var Doc = (_a) => {
  var _b = _a, { node } = _b, props = __objRest(_b, ["node"]);
  var _a2;
  const content = node.content;
  if (!content || (0, import_core2.isEmptyArray)(content)) {
    return null;
  }
  const children = content.map((child, ii) => /* @__PURE__ */ import_react7.default.createElement(RemirrorRenderer, __spreadProps(__spreadValues({ json: child }, props), { key: ii })));
  return /* @__PURE__ */ import_react7.default.createElement("div", __spreadValues({}, (_a2 = node.attrs) != null ? _a2 : (0, import_core2.object)()), children);
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
  if (json.type === "text" && json.text && (!json.marks || (0, import_core2.isEmptyArray)(json.marks))) {
    return /* @__PURE__ */ import_react7.default.createElement(import_react7.Fragment, null, json.text);
  }
  const rest = { markMap, typeMap, skipUnknownMarks, skipUnknownTypes };
  const TypeHandler = typeMap[json.type];
  if (!TypeHandler) {
    if (!skipUnknownTypes) {
      throw new Error("No handler for node type `".concat(json.type, "` registered"));
    }
    return null;
  }
  const childProps = (0, import_core2.isString)(TypeHandler) ? (_a = json.attrs) != null ? _a : (0, import_core2.object)() : __spreadProps(__spreadValues({}, rest), { node: json });
  const { content } = json;
  if (!content || (0, import_core2.isEmptyArray)(content)) {
    return /* @__PURE__ */ import_react7.default.createElement(TypeHandler, __spreadValues({}, childProps));
  }
  const children = content.map((child, ii) => /* @__PURE__ */ import_react7.default.createElement(RemirrorRenderer, __spreadValues({ key: ii, json: child }, rest)));
  return /* @__PURE__ */ import_react7.default.createElement(TypeHandler, __spreadValues({}, childProps), children);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Callout,
  CodeBlock,
  Doc,
  Heading,
  RemirrorRenderer,
  TextHandler,
  createIFrameHandler,
  createLinkHandler
});
