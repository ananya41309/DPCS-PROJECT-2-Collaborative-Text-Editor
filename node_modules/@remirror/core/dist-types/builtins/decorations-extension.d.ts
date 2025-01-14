import type { AcceptUndefined, CommandFunction, CommandFunctionProps, EditorState, EditorView, FromToProps, Handler, MakeRequired, Static } from '@remirror/core-types';
import { DecorationSet } from '@remirror/pm/view';
import { DelayedCommand, DelayedPromiseCreator } from '../commands';
import { Helper, PlainExtension } from '../extension';
import type { CreateExtensionPlugin } from '../types';
export interface DecorationsOptions {
    /**
     * This setting is for adding a decoration to the selected text and can be
     * used to preserve the marker for the selection when the editor loses focus.
     *
     * You can set it as `'selection'` to match the default styles provided by
     * `@remirror/styles`.
     *
     * @defaultValue undefined
     */
    persistentSelectionClass?: AcceptUndefined<string | boolean>;
    /**
     * Add custom decorations to the editor via `extension.addHandler`. This can
     * be used via the `useDecorations` hook available from `remirror/react`.
     */
    decorations: Handler<(state: EditorState) => DecorationSet>;
    /**
     * The className that is added to all placeholder positions
     *
     * '@defaultValue 'placeholder'
     */
    placeholderClassName?: Static<string>;
    /**
     * The default element that is used for all placeholders.
     *
     * @defaultValue 'span'
     */
    placeholderNodeName?: Static<string>;
}
/**
 * Simplify the process of adding decorations to the editor. All the decorations
 * added to the document this way are automatically tracked which allows for
 * custom components to be nested inside decorations.
 *
 * @category Builtin Extension
 */
export declare class DecorationsExtension extends PlainExtension<DecorationsOptions> {
    get name(): "decorations";
    /**
     * The placeholder decorations.
     */
    private placeholders;
    /**
     * A map of the html elements to their decorations.
     */
    private readonly placeholderWidgets;
    onCreate(): void;
    /**
     * Create the extension plugin for inserting decorations into the editor.
     */
    createPlugin(): CreateExtensionPlugin;
    updateDecorations(): CommandFunction;
    /**
     * Command to dispatch a transaction adding the placeholder decoration to
     * be tracked.
     *
     * @param id - the value that is used to identify this tracker. This can
     * be any value. A promise, a function call, a string.
     * @param options - the options to call the tracked position with. You can
     * specify the range `{ from: number; to: number }` as well as the class
     * name.
     */
    addPlaceholder(id: unknown, placeholder: DecorationPlaceholder, deleteSelection?: boolean): CommandFunction;
    /**
     * A command to updated the placeholder decoration.
     *
     * To update multiple placeholders you can use chained commands.
     *
     * ```ts
     * let idsWithData: Array<{id: unknown, data: number}>;
     *
     * for (const { id, data } of idsWithData) {
     *   chain.updatePlaceholder(id, data);
     * }
     *
     * chain.run();
     * ```
     */
    updatePlaceholder<Data = any>(id: unknown, data: Data): CommandFunction;
    /**
     * A command to remove the specified placeholder decoration.
     */
    removePlaceholder(id: unknown): CommandFunction;
    /**
     * A command to remove all active placeholder decorations.
     */
    clearPlaceholders(): CommandFunction;
    /**
     * Find the position for the tracker with the ID specified.
     *
     * @param id - the unique position id which can be any type
     */
    findPlaceholder(id: unknown): Helper<FromToProps | undefined>;
    /**
     * Find the positions of all the trackers in document.
     */
    findAllPlaceholders(): Helper<Map<unknown, FromToProps>>;
    /**
     * Add some decorations based on the provided settings.
     */
    createDecorations(state: EditorState): DecorationSet;
    /**
     * This stores all tracked positions in the editor and maps them via the
     * transaction updates.
     */
    onApplyState(): void;
    /**
     * Add a widget placeholder and track it as a widget placeholder.
     */
    private addWidgetPlaceholder;
    /**
     * Add an inline placeholder.
     */
    private addInlinePlaceholder;
    /**
     * Add a placeholder for nodes.
     */
    private addNodePlaceholder;
    /**
     * Add the node and class name to the placeholder object.
     */
    private withRequiredBase;
    /**
     * Get the command metadata.
     */
    private getMeta;
    /**
     * Set the metadata for the command.
     */
    private setMeta;
    /**
     * Add a placeholder decoration with the specified params to the transaction
     * and return the transaction.
     *
     * It is up to you to dispatch the transaction or you can just use the
     * commands.
     */
    private addPlaceholderTransaction;
    /**
     * Update the data stored by a placeholder.
     *
     * This replaces the whole data value.
     */
    private updatePlaceholderTransaction;
    /**
     * Discards a previously defined tracker once not needed.
     *
     * This should be used to cleanup once the position is no longer needed.
     */
    private removePlaceholderTransaction;
    /**
     * This helper returns a transaction that clears all position trackers when
     * any exist.
     *
     * Otherwise it returns undefined.
     */
    private clearPlaceholdersTransaction;
    /**
     * Handles delayed commands which rely on the
     */
    private readonly createPlaceholderCommand;
}
export interface DecorationPlaceholderMeta {
    /**
     * The trackers to add.
     */
    added?: Array<WithBase<DecorationPlaceholder>>;
    /**
     * The trackers to update with new data. Data is an object and is used to
     * include properties like `progress` for progress indicators. Only `widget`
     * decorations can be updated in this way.
     */
    updated?: Array<{
        id: unknown;
        data: any;
    }>;
    /**
     * The trackers to remove.
     */
    removed?: unknown[];
    /**
     * When set to true will delete all the active trackers.
     */
    clearTrackers?: boolean;
}
interface BasePlaceholder {
    /**
     * A custom class name to use for the placeholder decoration. All the trackers
     * will automatically be given the class name `remirror-tracker-position`
     *
     * @defaultValue ''
     */
    className?: string;
    /**
     * A custom html element or string for a created element tag name.
     *
     * @defaultValue 'tracker'
     */
    nodeName?: string;
}
interface DataProps<Data = any> {
    /**
     * The data to store for this placeholder.
     */
    data?: Data;
}
interface InlinePlaceholder<Data = any> extends BasePlaceholder, Partial<FromToProps>, DataProps<Data> {
    type: 'inline';
}
interface NodePlaceholder<Data = any> extends BasePlaceholder, DataProps<Data> {
    /**
     * Set this as a node tracker.
     */
    type: 'node';
    /**
     * If provided the The `pos` must be directly before the node in order to be
     * valid. If not provided it will select the parent node of the current
     * selection.
     */
    pos: number | null;
}
export interface WidgetPlaceholder<Data = any> extends BasePlaceholder, DataProps<Data> {
    /**
     * Declare this as a widget tracker.
     *
     * Widget trackers support adding custom components to the created dom
     * element.
     */
    type: 'widget';
    /**
     * Widget trackers only support fixed positions.
     */
    pos: number;
    /**
     * Called the first time this widget decoration is added to the dom.
     */
    createElement?(view: EditorView, pos: number): HTMLElement;
    /**
     * Called whenever the position tracker updates with the new position.
     */
    onUpdate?(view: EditorView, pos: number, element: HTMLElement, data: any): void;
    /**
     * Called when the widget decoration is removed from the dom.
     */
    onDestroy?(view: EditorView, element: HTMLElement): void;
}
type WithBase<Type extends BasePlaceholder> = MakeRequired<Type, keyof BasePlaceholder> & {
    id: unknown;
};
export type DecorationPlaceholder = WidgetPlaceholder | NodePlaceholder | InlinePlaceholder;
export interface DelayedPlaceholderCommandProps<Value> {
    /**
     * A function that returns a promise.
     */
    promise: DelayedPromiseCreator<Value>;
    /**
     * The placeholder configuration.
     */
    placeholder: DecorationPlaceholder;
    /**
     * Called when the promise succeeds and the placeholder still exists. If no
     * placeholder can be found (for example, the user has deleted the entire
     * document) then the failure handler is called instead.
     */
    onSuccess: (value: Value, range: FromToProps, commandProps: CommandFunctionProps) => boolean;
    /**
     * Called when a failure is encountered.
     */
    onFailure?: CommandFunction<{
        error: any;
    }>;
}
declare global {
    namespace Remirror {
        interface ExtensionStore {
            /**
             * Create delayed command which automatically adds a placeholder to the
             * document while the delayed command is being run and also automatically
             * removes it once it has completed.
             */
            createPlaceholderCommand<Value = any>(props: DelayedPlaceholderCommandProps<Value>): DelayedCommand<Value>;
        }
        interface BaseExtension {
            /**
             * Create a decoration set which adds decorations to your editor. The
             * first parameter is the `EditorState`.
             *
             * This can be used in combination with the `onApplyState` handler which
             * can map the decoration.
             *
             * @param state - the editor state which was passed in.
             */
            createDecorations?(state: EditorState): DecorationSet;
        }
        interface AllExtensions {
            decorations: DecorationsExtension;
        }
    }
}
export {};
