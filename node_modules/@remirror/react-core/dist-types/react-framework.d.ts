import { Dispatch, SetStateAction } from 'react';
import { AnyExtension, Framework, FrameworkOptions, FrameworkProps, UpdateStateProps } from '@remirror/core';
import type { EditorState } from '@remirror/pm/state';
import { EditorView } from '@remirror/pm/view';
import type { ReactFrameworkOutput } from './react-types';
export declare class ReactFramework<Extension extends AnyExtension> extends Framework<Extension, ReactFrameworkProps<Extension>, ReactFrameworkOutput<Extension>> {
    #private;
    /**
     * Keep track of whether the get root props has been called during the most recent render.
     */
    private readonly rootPropsConfig;
    get name(): "react";
    constructor(props: ReactFrameworkOptions<Extension>);
    /**
     * This is called to update props on every render so that values don't become stale.
     */
    update(props: ReactFrameworkOptions<Extension>): this;
    /**
     * Create the prosemirror editor view.
     */
    protected createView(state: EditorState): EditorView;
    /**
     * The external `getRootProps` that is used to spread props onto a desired
     * holder element for the prosemirror view.
     */
    private readonly getRootProps;
    /**
     * Creates the props that should be spread on the root element inside which
     * the prosemirror instance will be rendered.
     *
     * TODO - this is useless - REFACTOR
     */
    private readonly internalGetRootProps;
    /**
     * Stores the Prosemirror editor dom instance for this component using `refs`.
     */
    private readonly onRef;
    /**
     * Updates the state either by calling `onChange` when it exists or
     * directly setting the internal state via a `setState` call.
     */
    protected updateState({ state, ...rest }: UpdateStateProps): void;
    /**
     * Update the controlled state when the value changes and notify the extension
     * of this update.
     */
    updateControlledState(state: EditorState, previousState?: EditorState): void;
    /**
     * Adds the prosemirror view to the dom in the position specified via the
     * component props.
     */
    private addProsemirrorViewToDom;
    /**
     * Called once the container dom node (`this.editorRef`) has been initialized
     * after the component mounts.
     *
     * This method handles the cases where the dom is not focused.
     */
    private onRefLoad;
    /**
     * Called for every update of the props and state.
     */
    onUpdate(): void;
    /**
     * Get the framework output.
     */
    get frameworkOutput(): ReactFrameworkOutput<Extension>;
    /**
     * Reset the called status of `getRootProps`.
     */
    resetRender(): void;
}
export interface ReactFrameworkProps<Extension extends AnyExtension> extends FrameworkProps<Extension> {
    /**
     * When `onChange` is defined this prop is used to set the next editor
     * state value of the Editor. The value is an instance of the **ProseMirror**
     * [[`EditorState`]].
     *
     * @remarks
     *
     * When this is provided the editor becomes a controlled component. Nothing
     * will be updated unless you explicitly set the value prop to the updated
     * state.
     *
     * Be careful not to set and unset the value as this will trigger an error.
     *
     * When the Editor is set to be controlled there are a number of things to be
     * aware of.
     *
     * - **The last dispatch wins** - Calling multiple dispatches synchronously
     *   during an update is no longer possible since each dispatch needs to be
     *   processed within the `onChange` handler and updated via `setState` call.
     *   Only the most recent call is updated.
     * - **Use chained commands** - These can help resolve the above limitation
     *   for handling multiple updates.
     */
    state?: EditorState | null;
    /**
     * Determine whether the Prosemirror view is inserted at the `start` or `end`
     * of it's container DOM element.
     *
     * @defaultValue 'end'
     */
    insertPosition?: 'start' | 'end';
    /**
     * The placeholder to set for the editor.
     */
    placeholder?: string;
}
/**
 * The options that are passed into the [[`ReactFramework`]] constructor.
 */
export interface ReactFrameworkOptions<Extension extends AnyExtension> extends FrameworkOptions<Extension, ReactFrameworkProps<Extension>> {
}
export type SetShouldRenderClient = Dispatch<SetStateAction<boolean | undefined>>;
