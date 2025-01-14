import { AcceptUndefined } from '@remirror/core';
import { DispatchFunction } from '@remirror/core';
import { EditorState } from '@remirror/core';
import { Handler } from '@remirror/core';
import { Helper } from '@remirror/core';
import { KeyBindingProps } from '@remirror/core';
import { NonChainableCommandFunction } from '@remirror/core';
import { PlainExtension } from '@remirror/core';
import { PrioritizedKeyBindings } from '@remirror/core';
import { ProsemirrorPlugin } from '@remirror/core';
import { Static } from '@remirror/core';

/**
 * This extension provides undo and redo commands and inserts a plugin which
 * handles history related actions.
 *
 * @category Builtin Extension
 */
declare class HistoryExtension extends PlainExtension<HistoryOptions> {
    get name(): "history";
    /**
     * Wraps the history method to inject state from the getState or getDispatch
     * method.
     *
     * @param method - the method to wrap
     */
    private readonly wrapMethod;
    /**
     * Adds the default key mappings for undo and redo.
     */
    createKeymap(): PrioritizedKeyBindings;
    /**
     * Handle the undo keybinding.
     */
    undoShortcut(props: KeyBindingProps): boolean;
    /**
     * Handle the redo keybinding for the editor.
     */
    redoShortcut(props: KeyBindingProps): boolean;
    /**
     * Bring the `prosemirror-history` plugin with options set on this extension.
     */
    createExternalPlugins(): ProsemirrorPlugin[];
    /**
     * Undo the last action that occurred. This can be overridden by setting
     * an `"addToHistory"` metadata property of `false` on a transaction to
     * prevent it from being rolled back by undo.
     *
     * ```ts
     * actions.undo()
     *
     * // To prevent this use
     * tr.setMeta(pluginKey, { addToHistory: false })
     * ```
     *
     * This command is **non-chainable**.
     */
    undo(): NonChainableCommandFunction;
    /**
     * Redo an action that was in the undo stack.
     *
     * ```ts
     * actions.redo()
     * ```
     *
     * This command is **non-chainable**.
     */
    redo(): NonChainableCommandFunction;
    /**
     * Returns the amount of undoable events available from the current state, or provide a custom state.
     */
    undoDepth(state?: EditorState): Helper<number>;
    /**
     * Returns the amount of redoable events available from the current state, or provide a custom state.
     */
    redoDepth(state?: EditorState): Helper<number>;
}
export { HistoryExtension }
export { HistoryExtension as HistoryExtension_alias_1 }

declare interface HistoryOptions {
    /**
     * The number of history events that are collected before the oldest events
     * are discarded.
     *
     * @defaultValue 100
     */
    depth?: Static<number>;
    /**
     * The delay (ms) between changes after which a new group should be started.
     * Note that when changes aren't adjacent, a new group is always started.
     *
     * @defaultValue 500
     */
    newGroupDelay?: Static<number>;
    /**
     * Provide a custom state getter function.
     *
     * @remarks
     *
     * This is only needed when the extension is part of a child editor, e.g.
     * `ImageCaptionEditor`. By passing in the `getState` method history actions
     * can be dispatched into the parent editor allowing them to propagate into
     * the child editor
     */
    getState?: AcceptUndefined<() => EditorState>;
    /**
     * Provide a custom dispatch getter function for embedded editors
     *
     * @remarks
     *
     * This is only needed when the extension is part of a child editor, e.g.
     * `ImageCaptionEditor`. By passing in the `getDispatch` method history
     * actions can be dispatched into the parent editor allowing them to propagate
     * into the child editor.
     */
    getDispatch?: AcceptUndefined<() => DispatchFunction>;
    /**
     * A callback to listen to when the user attempts to undo with the keyboard.
     * When it succeeds `success` is true.
     */
    onUndo?: Handler<(success: boolean) => void>;
    /**
     * A callback to listen to when the user attempts to redo with the keyboard.
     * When it succeeds `success` is true.
     */
    onRedo?: Handler<(success: boolean) => void>;
}
export { HistoryOptions }
export { HistoryOptions as HistoryOptions_alias_1 }

export { }

declare global {
  namespace Remirror {
    interface AllExtensions {
      history: HistoryExtension;
    }
  }
}
