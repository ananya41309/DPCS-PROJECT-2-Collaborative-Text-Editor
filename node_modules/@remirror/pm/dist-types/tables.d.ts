import { CellSelection } from 'prosemirror-tables';
/**
 * Predicate checking whether the selection is a [[`CellSelection`]].
 *
 * @param value - the value to check
 */
export declare function isCellSelection(value: unknown): value is CellSelection;
export * from 'prosemirror-tables';
