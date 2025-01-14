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

// src/extra/pm-types.ts
import { InputRule } from "prosemirror-inputrules";
import {
  Schema,
  Fragment,
  Mark,
  MarkType,
  NodeType,
  Node,
  ResolvedPos,
  Slice
} from "prosemirror-model";
import {
  EditorState,
  PluginKey,
  Plugin,
  Selection,
  Transaction
} from "prosemirror-state";
import { Mapping } from "prosemirror-transform";
import { Decoration, DecorationSet, EditorView } from "prosemirror-view";

// src/extra/pm-utils.ts
import { ErrorConstant } from "@remirror/core-constants";
import { invariant, object } from "@remirror/core-helpers";
function chainableEditorState(tr, state) {
  const proto = Object.getPrototypeOf(state);
  let selection = tr.selection;
  let doc = tr.doc;
  let storedMarks = tr.storedMarks;
  const properties = object();
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
    invariant(props.dispatch === void 0 || props.dispatch === ((_a = props.view) == null ? void 0 : _a.dispatch), {
      code: ErrorConstant.NON_CHAINABLE_COMMAND
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
export {
  Decoration,
  DecorationSet,
  Schema as EditorSchema,
  EditorState,
  EditorView,
  Fragment,
  InputRule,
  Mapping,
  Mark,
  MarkType,
  NodeType,
  PluginKey,
  Node as ProsemirrorNode,
  Plugin as ProsemirrorPlugin,
  ResolvedPos,
  Selection,
  Slice,
  Transaction,
  chainCommands,
  chainableEditorState,
  convertCommand,
  nonChainable
};
