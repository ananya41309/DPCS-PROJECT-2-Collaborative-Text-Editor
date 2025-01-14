import { EditorState, EditorStateProps, Transaction, TransactionProps } from '@remirror/core';
export { isEmptyBlockNode } from '@remirror/core';
interface HasChangedProps extends EditorStateProps, Partial<TransactionProps> {
    previousState: EditorState | undefined;
}
/**
 * Checks if the given transaction force updates positioners.
 *
 * @param tr - the Transaction to check
 * @param key - filter for a specific key. Defaults to all.
 */
export declare function isPositionerUpdateTransaction(tr: Transaction, key?: string): boolean;
/**
 * Checks the transaction for changes or compares the state with the previous
 * state.
 *
 * Return `true` when a change is detected in the document or the selection.
 */
export declare function hasStateChanged(props: HasChangedProps): boolean;
interface IsPositionVisibleOptions {
    /**
     * When `true` account for padding and the scroll bar width for the provided
     * element.
     *
     * @defaultValue false
     */
    accountForPadding?: boolean;
}
/**
 * Checks that the rect is visible within the provided element.
 *
 * This is specific for the remirror editor.
 */
export declare function isPositionVisible(rect: DOMRect, element: Element, options?: IsPositionVisibleOptions): boolean;
export declare const POSITIONER_WIDGET_KEY = "remirror-positioner-widget";
export declare const POSITIONER_UPDATE_KEY = "positionerUpdate";
export declare const POSITIONER_UPDATE_ALL = "__all_positioners__";
