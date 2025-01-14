import type { EditorState, EditorView, PrimitiveSelection, Shape, Transaction } from '@remirror/core-types';
import type { BuiltinPreset, UpdatableViewProps } from '../builtins';
import type { AnyExtension } from '../extension';
import type { RemirrorManager } from '../manager';
import type { FocusType } from '../types';
import type { AddFrameworkHandler, BaseFramework, CreateStateFromContent, FrameworkOptions, FrameworkOutput, FrameworkProps, ListenerProps, RemirrorEventListenerProps, UpdatableViewPropsObject, UpdateStateProps } from './base-framework';
/**
 * This is the `Framework` class which is used to create an abstract class for
 * implementing `Remirror` into the framework of your choice.
 *
 * The best way to learn how to use it is to take a look at the [[`DomFramework`]]
 * and [[`ReactFramework`]] implementations.
 *
 * @remarks
 *
 * There are two methods and one getter property which must be implemented for this
 */
export declare abstract class Framework<Extension extends AnyExtension = BuiltinPreset, Props extends FrameworkProps<Extension> = FrameworkProps<Extension>, Output extends FrameworkOutput<Extension> = FrameworkOutput<Extension>> implements BaseFramework<Extension> {
    #private;
    /**
     * A previous state that can be overridden by the framework implementation.
     */
    protected previousStateOverride?: EditorState;
    /**
     * The event listener which allows consumers to subscribe to the different
     * events taking place in the editor. Events currently supported are:
     *
     * - `destroy`
     * - `focus`
     * - `blur`
     * - `updated`
     */
    protected get addHandler(): AddFrameworkHandler<Extension>;
    /**
     * The updatable view props.
     */
    protected get updatableViewProps(): UpdatableViewPropsObject;
    /**
     * True when this is the first render of the editor.
     */
    protected get firstRender(): boolean;
    /**
     * Store the name of the framework.
     */
    abstract get name(): string;
    /**
     * The props passed in when creating or updating the `Framework` instance.
     */
    get props(): Props;
    /**
     * Returns the previous editor state. On the first render it defaults to
     * returning the current state. For the first render the previous state and
     * current state will always be equal.
     */
    protected get previousState(): EditorState;
    /**
     * The instance of the [[`RemirrorManager`]].
     */
    protected get manager(): RemirrorManager<Extension>;
    /**
     * The ProseMirror [[`EditorView`]].
     */
    protected get view(): EditorView;
    /**
     * A unique id for the editor. Can be used to differentiate between editors.
     *
     * Please note that this ID is only locally unique, it should not be used as a
     * database key.
     */
    protected get uid(): string;
    /**
     * The initial editor state from when the editor was first created.
     */
    get initialEditorState(): EditorState;
    constructor(options: FrameworkOptions<Extension, Props>);
    /**
     * Setup the manager event listeners which are disposed of when the manager is
     * destroyed.
     */
    private updateListener;
    /**
     * Update the constructor props passed in. Useful for frameworks like react
     * where props are constantly changing and when using hooks function closures
     * can become stale.
     *
     * You can call the update method with the new `props` to update the internal
     * state of this instance.
     */
    update(options: FrameworkOptions<Extension, Props>): this;
    /**
     * Retrieve the editor state.
     */
    protected readonly getState: () => EditorState;
    /**
     * Retrieve the previous editor state.
     */
    protected readonly getPreviousState: () => EditorState;
    /**
     * This method must be implement by the extending framework class. It returns
     * an [[`EditorView`]] which is added to the [[`RemirrorManager`]].
     */
    protected abstract createView(state: EditorState, element?: Element): EditorView;
    /**
     * This is used to implement how the state updates are used within your
     * application instance.
     *
     * It must be implemented.
     */
    protected abstract updateState(props: UpdateStateProps): void;
    /**
     * Update the view props.
     */
    protected updateViewProps(...keys: UpdatableViewProps[]): void;
    /**
     * This sets the attributes for the ProseMirror Dom node.
     */
    protected getAttributes(ssr?: false): Record<string, string>;
    protected getAttributes(ssr: true): Shape;
    /**
     * Part of the Prosemirror API and is called whenever there is state change in
     * the editor.
     *
     * @internalremarks
     * How does it work when transactions are dispatched one after the other.
     */
    protected readonly dispatchTransaction: (tr: Transaction) => void;
    /**
     * Adds `onBlur` and `onFocus` listeners.
     *
     * When extending this class make sure to call this method once
     * `ProsemirrorView` has been added to the dom.
     */
    protected addFocusListeners(): void;
    /**
     * Remove `onBlur` and `onFocus` listeners.
     *
     * When extending this class in your framework, make sure to call this just
     * before the view is destroyed.
     */
    protected removeFocusListeners(): void;
    /**
     * Called when the component unmounts and is responsible for cleanup.
     *
     * @remarks
     *
     * - Removes listeners for the editor `blur` and `focus` events
     */
    destroy(): void;
    /**
     * Use this method in the `onUpdate` event to run all change handlers.
     */
    readonly onChange: (props?: ListenerProps) => void;
    /**
     * Listener for editor 'blur' events
     */
    private readonly onBlur;
    /**
     * Listener for editor 'focus' events
     */
    private readonly onFocus;
    /**
     * Sets the content of the editor. This bypasses the update function.
     *
     * @param content
     * @param triggerChange
     */
    private readonly setContent;
    /**
     * Clear the content of the editor (reset to the default empty node).
     *
     * @param triggerChange - whether to notify the onChange handler that the
     * content has been reset
     */
    private readonly clearContent;
    /**
     * Creates the props passed into all event listener handlers. e.g.
     * `onChange`
     */
    protected eventListenerProps(props?: ListenerProps): RemirrorEventListenerProps<Extension>;
    protected readonly createStateFromContent: CreateStateFromContent;
    /**
     * Focus the editor.
     */
    protected readonly focus: (position?: FocusType) => void;
    /**
     * Blur the editor.
     */
    protected readonly blur: (position?: PrimitiveSelection) => void;
    /**
     * Methods and properties which are made available to all consumers of the
     * `Framework` class.
     */
    protected get baseOutput(): FrameworkOutput<Extension>;
    /**
     * Every framework implementation must provide it's own custom output.
     */
    abstract get frameworkOutput(): Output;
}
