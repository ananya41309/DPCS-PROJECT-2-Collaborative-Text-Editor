import type { EditorState, Transaction } from '../state';
import type { CommandFunction, NonChainableCommandFunction, ProsemirrorCommandFunction } from './pm-types';
/**
 * Creates a fake state that can be used on ProseMirror library commands to make
 * them chainable. The provided Transaction `tr` can be a shared one.
 *
 * @param tr - the chainable transaction that should be amended.
 * @param state - the state of the editor (available via `view.state`).
 *
 * This should not be used other than for passing to `prosemirror-*` library
 * commands.
 */
export declare function chainableEditorState(tr: Transaction, state: EditorState): EditorState;
/**
 * Wraps the default [[ProsemirrorCommandFunction]] and makes it compatible with
 * the default **remirror** [[CommandFunction]] call signature.
 *
 * It extracts all the public APIs of the state object and assigns the
 * chainable transaction to the `state.tr` property to support chaining.
 */
export declare function convertCommand<Extra extends object = object>(commandFunction: ProsemirrorCommandFunction): CommandFunction<Extra>;
/**
 * Marks a command function as non chainable. It will throw an error when
 * chaining is attempted.
 *
 * @remarks
 *
 * ```ts
 * const command = nonChainable(({ state, dispatch }) => {...});
 * ```
 */
export declare function nonChainable<Extra extends object = object>(commandFunction: CommandFunction<Extra>): NonChainableCommandFunction<Extra>;
/**
 * Similar to the chainCommands from the `prosemirror-commands` library. Allows
 * multiple commands to be chained together and runs until one of them returns
 * true.
 */
export declare function chainCommands<Extra extends object = object>(...commands: Array<CommandFunction<Extra>>): CommandFunction<Extra>;
