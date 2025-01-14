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
  Decoration: () => import_prosemirror_view.Decoration,
  DecorationSet: () => import_prosemirror_view.DecorationSet,
  EditorSchema: () => import_prosemirror_model.Schema,
  EditorState: () => import_prosemirror_state.EditorState,
  EditorView: () => import_prosemirror_view.EditorView,
  Fragment: () => import_prosemirror_model.Fragment,
  InputRule: () => import_prosemirror_inputrules.InputRule,
  Mapping: () => import_prosemirror_transform.Mapping,
  Mark: () => import_prosemirror_model.Mark,
  MarkType: () => import_prosemirror_model.MarkType,
  NodeType: () => import_prosemirror_model.NodeType,
  PluginKey: () => import_prosemirror_state.PluginKey,
  ProsemirrorNode: () => import_prosemirror_model.Node,
  ProsemirrorPlugin: () => import_prosemirror_state.Plugin,
  ResolvedPos: () => import_prosemirror_model.ResolvedPos,
  Selection: () => import_prosemirror_state.Selection,
  Slice: () => import_prosemirror_model.Slice,
  Transaction: () => import_prosemirror_state.Transaction,
  chainCommands: () => chainCommands,
  chainableEditorState: () => chainableEditorState,
  convertCommand: () => convertCommand,
  nonChainable: () => nonChainable
});
module.exports = __toCommonJS(src_exports);

// src/extra/pm-types.ts
var import_prosemirror_inputrules = require("prosemirror-inputrules");
var import_prosemirror_model = require("prosemirror-model");
var import_prosemirror_state = require("prosemirror-state");
var import_prosemirror_transform = require("prosemirror-transform");
var import_prosemirror_view = require("prosemirror-view");

// src/extra/pm-utils.ts
var import_core_constants = require("@remirror/core-constants");
var import_core_helpers = require("@remirror/core-helpers");
function chainableEditorState(tr, state) {
  const proto = Object.getPrototypeOf(state);
  let selection = tr.selection;
  let doc = tr.doc;
  let storedMarks = tr.storedMarks;
  const properties = (0, import_core_helpers.object)();
  for (const [key, value] of Object.entries(state)) {
    properties[key] = { value };
  }
  return Object.create(proto, __spreadProps(__spreadValues({}, properties), {
    storedMarks: {
      get() {
        return storedMarks;
      }
    },
    selection: {
      get() {
        return selection;
      }
    },
    doc: {
      get() {
        return doc;
      }
    },
    tr: {
      get() {
        selection = tr.selection;
        doc = tr.doc;
        storedMarks = tr.storedMarks;
        return tr;
      }
    }
  }));
}
function convertCommand(commandFunction) {
  return ({ state, dispatch, view, tr }) => commandFunction(chainableEditorState(tr, state), dispatch, view);
}
function nonChainable(commandFunction) {
  return (props) => {
    var _a;
    (0, import_core_helpers.invariant)(props.dispatch === void 0 || props.dispatch === ((_a = props.view) == null ? void 0 : _a.dispatch), {
      code: import_core_constants.ErrorConstant.NON_CHAINABLE_COMMAND
    });
    return commandFunction(props);
  };
}
function chainCommands(...commands) {
  return (_a) => {
    var _b = _a, { state, dispatch, view, tr } = _b, rest = __objRest(_b, ["state", "dispatch", "view", "tr"]);
    for (const element of commands) {
      if (element(__spreadValues({ state, dispatch, view, tr }, rest))) {
        return true;
      }
    }
    return false;
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Decoration,
  DecorationSet,
  EditorSchema,
  EditorState,
  EditorView,
  Fragment,
  InputRule,
  Mapping,
  Mark,
  MarkType,
  NodeType,
  PluginKey,
  ProsemirrorNode,
  ProsemirrorPlugin,
  ResolvedPos,
  Selection,
  Slice,
  Transaction,
  chainCommands,
  chainableEditorState,
  convertCommand,
  nonChainable
});
