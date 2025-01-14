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

// src/commands.ts
var commands_exports = {};
__export(commands_exports, {
  autoJoin: () => import_prosemirror_commands.autoJoin,
  baseKeymap: () => import_prosemirror_commands.baseKeymap,
  createParagraphNear: () => import_prosemirror_commands.createParagraphNear,
  deleteSelection: () => import_prosemirror_commands.deleteSelection,
  exitCode: () => import_prosemirror_commands.exitCode,
  joinBackward: () => import_prosemirror_commands.joinBackward,
  joinDown: () => import_prosemirror_commands.joinDown,
  joinForward: () => import_prosemirror_commands.joinForward,
  joinTextblockBackward: () => import_prosemirror_commands.joinTextblockBackward,
  joinTextblockForward: () => import_prosemirror_commands.joinTextblockForward,
  joinUp: () => import_prosemirror_commands.joinUp,
  lift: () => import_prosemirror_commands.lift,
  liftEmptyBlock: () => import_prosemirror_commands.liftEmptyBlock,
  macBaseKeymap: () => import_prosemirror_commands.macBaseKeymap,
  newlineInCode: () => import_prosemirror_commands.newlineInCode,
  pcBaseKeymap: () => import_prosemirror_commands.pcBaseKeymap,
  pmChainCommands: () => import_prosemirror_commands.chainCommands,
  selectAll: () => import_prosemirror_commands.selectAll,
  selectNodeBackward: () => import_prosemirror_commands.selectNodeBackward,
  selectNodeForward: () => import_prosemirror_commands.selectNodeForward,
  selectParentNode: () => import_prosemirror_commands.selectParentNode,
  selectTextblockEnd: () => import_prosemirror_commands.selectTextblockEnd,
  selectTextblockStart: () => import_prosemirror_commands.selectTextblockStart,
  setBlockType: () => import_prosemirror_commands.setBlockType,
  splitBlock: () => import_prosemirror_commands.splitBlock,
  splitBlockAs: () => import_prosemirror_commands.splitBlockAs,
  splitBlockKeepMarks: () => import_prosemirror_commands.splitBlockKeepMarks,
  toggleMark: () => import_prosemirror_commands.toggleMark,
  wrapIn: () => import_prosemirror_commands.wrapIn
});
module.exports = __toCommonJS(commands_exports);
var import_prosemirror_commands = require("prosemirror-commands");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  autoJoin,
  baseKeymap,
  createParagraphNear,
  deleteSelection,
  exitCode,
  joinBackward,
  joinDown,
  joinForward,
  joinTextblockBackward,
  joinTextblockForward,
  joinUp,
  lift,
  liftEmptyBlock,
  macBaseKeymap,
  newlineInCode,
  pcBaseKeymap,
  pmChainCommands,
  selectAll,
  selectNodeBackward,
  selectNodeForward,
  selectParentNode,
  selectTextblockEnd,
  selectTextblockStart,
  setBlockType,
  splitBlock,
  splitBlockAs,
  splitBlockKeepMarks,
  toggleMark,
  wrapIn
});
