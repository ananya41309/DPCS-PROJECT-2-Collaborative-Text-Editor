// src/tables.ts
import { CellSelection } from "prosemirror-tables";
export * from "prosemirror-tables";
function isCellSelection(value) {
  return typeof value === "object" && value instanceof CellSelection;
}
export {
  isCellSelection
};
