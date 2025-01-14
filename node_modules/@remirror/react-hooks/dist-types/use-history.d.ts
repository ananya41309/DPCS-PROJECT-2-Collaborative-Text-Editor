import type { GetHandler, StringKey } from '@remirror/core';
import { HistoryOptions } from '@remirror/extension-history';
/**
 * A hook which is called every time an undo or redo event is triggered from
 * within the ProseMirror history extension.
 *
 * @remarks
 *
 * `handler` should be a memoized function.
 */
export declare function useHistory<Key extends StringKey<GetHandler<HistoryOptions>>>(event: Key, handler: NonNullable<GetHandler<HistoryOptions>[Key]>): void;
