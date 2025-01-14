import type { AttributesProps, CommandFunction, CommandFunctionProps, FromToProps, MarkType, MarkTypeProps, PrimitiveSelection, ProsemirrorAttributes } from '@remirror/core-types';
/**
 * The parameter that is passed into `DelayedCommand`s.
 */
interface DelayedCommandProps<Value> {
    /**
     * Runs as soon as the command is triggered. For most delayed commands within
     * the `remirror` codebase this is used to add a position tracker to the
     * document.
     */
    immediate?: CommandFunction;
    /**
     * The promise that provides the value that the `onDone` callback uses to
     * complete the delayed command.
     */
    promise: DelayedValue<Value>;
    /**
     * Called when the provided promise resolves.
     */
    onDone: CommandFunction<{
        value: Value;
    }>;
    /**
     * Called when the promise fails. This could be used to cleanup the active
     * position trackers when the delayed command fails.
     */
    onFail?: CommandFunction;
}
export type DelayedValue<Type> = Promise<Type> | (() => Promise<Type>);
/**
 * Returns `true` when the provided value is a delayed value.
 */
export declare function isDelayedValue<Type>(value: unknown): value is DelayedValue<Type>;
/**
 * Add tentative support for delayed commands in the editor.
 *
 * Delayed commands are commands that run an immediate action, like adding a
 * tracker to a position in the document. Once the promise that is provided is
 * returned the `onDone` parameter is run with the document in the current
 * state. The tracker that was added can now be used to insert content, delete
 * content or replace content.
 *
 * @experimental This is still being worked on and the API is subject to changes
 * in structure going forward.
 *
 * @deprecated use [[`DelayedCommand`]] instead.
 *
 */
export declare function delayedCommand<Value>({ immediate, promise, onDone, onFail, }: DelayedCommandProps<Value>): CommandFunction;
export type DelayedPromiseCreator<Value> = (props: CommandFunctionProps) => Promise<Value>;
export declare class DelayedCommand<Value> {
    private readonly promiseCreator;
    private readonly failureHandlers;
    private readonly successHandlers;
    private readonly validateHandlers;
    constructor(promiseCreator: DelayedPromiseCreator<Value>);
    /**
     * The commands that will immediately be run and used to evaluate whether to
     * proceed.
     */
    validate(handler: CommandFunction, method?: 'push' | 'unshift'): this;
    /**
     * Add a success callback to the handler.
     */
    success(handler: CommandFunction<{
        value: Value;
    }>, method?: 'push' | 'unshift'): this;
    /**
     * Add a failure callback to the handler.
     */
    failure(handler: CommandFunction<{
        error: any;
    }>, method?: 'push' | 'unshift'): this;
    private runHandlers;
    /**
     * Generate the `remirror` command.
     */
    readonly generateCommand: () => CommandFunction;
}
export interface ToggleMarkProps extends MarkTypeProps, Partial<AttributesProps> {
    /**
     * @deprecated use `selection` property instead.
     */
    range?: FromToProps;
    /**
     * The selection point for toggling the chosen mark.
     */
    selection?: PrimitiveSelection;
}
/**
 * A custom `toggleMark` function that works for the `remirror` codebase.
 *
 * Create a command function that toggles the given mark with the given
 * attributes. Will return `false` when the current selection doesn't support
 * that mark. This will remove the mark if any marks of that type exist in the
 * selection, or add it otherwise. If the selection is empty, this applies to
 * the [stored marks](#state.EditorState.storedMarks) instead of a range of the
 * document.
 *
 * The differences from the `prosemirror-commands` version.
 * - Acts on the transaction rather than the state to allow for commands to be
 *   chained together.
 * - Uses the ONE parameter function signature for compatibility with remirror.
 * - Supports passing a custom range.
 */
export declare function toggleMark(props: ToggleMarkProps): CommandFunction;
/**
 * Apply the provided mark type and attributes.
 *
 * @param markType - the mark to apply.
 * @param attrs - the attributes to set on the applied mark.
 * @param selectionPoint - optionally specify where the mark should be applied.
 * Defaults to the current selection.
 */
export declare function applyMark(type: string | MarkType, attrs?: ProsemirrorAttributes, selectionPoint?: PrimitiveSelection): CommandFunction;
export interface InsertTextOptions extends Partial<FromToProps> {
    /**
     * Marks can be added to the inserted text.
     */
    marks?: Record<string, ProsemirrorAttributes>;
}
/**
 * Insert text into the dom at the current location by default. If a promise is
 * provided then the text will be inserted at the tracked position when the
 * promise is resolved.
 */
export declare function insertText(text: string, options?: InsertTextOptions): CommandFunction;
export {};
