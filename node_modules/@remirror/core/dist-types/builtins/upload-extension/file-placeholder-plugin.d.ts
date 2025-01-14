import { EditorState, Plugin, Transaction } from '@remirror/pm/state';
import { DecorationSet } from '@remirror/pm/view';
import { PlaceholderPluginAction } from './file-placeholder-actions';
interface UploadPlaceholderPluginData {
    set: DecorationSet;
    payloads: Map<string, any>;
}
export declare function createUploadPlaceholderPlugin(): Plugin<UploadPlaceholderPluginData>;
/**
 * Try to find the position of the placeholder in the document based on the
 * upload placeholder id
 *
 * @remarks
 *
 * This function will first try to find the position based on the decoration set.
 * However, in some cases (e.g. `ReplaceStep`) the decoration will not be
 * available. In that case, it will then try to find every node in the document
 * recursively, which is much slower than the decoration set way in a large
 * document.
 */
export declare function findUploadPlaceholderPos(state: EditorState, id: string): number | undefined;
export declare function findUploadPlaceholderPayload(state: EditorState, id: string): any | undefined;
/**
 * Determine if there are active file uploads in the given state
 *
 * @remarks
 * This utility is useful to warn users there are still active uploads before
 * exiting or saving a document.
 *
 * @see https://remirror.vercel.app/?path=/story/extensions-file--with-upload-incomplete-warning
 *
 * @param state - the editor state
 */
export declare function hasUploadingFile(state: EditorState): boolean;
export declare function setUploadPlaceholderAction(tr: Transaction, action: PlaceholderPluginAction): Transaction;
export {};
