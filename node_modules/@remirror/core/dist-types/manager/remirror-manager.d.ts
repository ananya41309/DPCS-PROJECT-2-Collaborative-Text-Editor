import { Unsubscribe } from 'nanoevents';
import { __INTERNAL_REMIRROR_IDENTIFIER_KEY__, ExtensionPriority, ManagerPhase, RemirrorIdentifier } from '@remirror/core-constants';
import type { EditorSchema, EditorView, MarkExtensionSpec, NodeExtensionSpec, PrimitiveSelection, ProsemirrorNode, RemirrorContentType, Replace, Simplify, Transaction } from '@remirror/core-types';
import { CustomDocumentProps, InvalidContentHandler, NamedStringHandlers, StringHandler, StringHandlerProps } from '@remirror/core-utils';
import { EditorState } from '@remirror/pm/state';
import { BuiltinPreset, CombinedTags } from '../builtins';
import type { AnyExtension, AnyExtensionConstructor, AnyManagerStore, GetExtensions, GetMarkNameUnion, GetNameUnion, GetNodeNameUnion, GetPlainNameUnion, ManagerStoreKeys } from '../extension';
import type { BaseFramework, FrameworkOutput } from '../framework';
import type { StateUpdateLifecycleProps } from '../types';
/**
 * The `Manager` has multiple hook phases which are able to hook into the
 * extension manager flow and add new functionality to the editor.
 *
 * The `ExtensionEventMethod`s
 *
 * - onCreate - when the extension manager is created and after the schema is
 *   made available.
 * - onView - when the view has been received from the dom ref.
 */
/**
 * A class to manage the extensions and prosemirror interactions within the
 * editor.
 *
 * @remarks
 *
 * The RemirrorManager enables the lifecycle methods of the extensions by
 * calling each method in the distinct phases of the lifecycle.
 *
 * - `onCreate` - This happens when the manager is constructed. It calls on the
 *   extension which have an `onCreate` method and allows them to do their work.
 *
 * For the built in methods, this is when the `SchemaExtension` creates the
 * Schema and when the `TagsExtension` combines the tags for the editor
 * instance.
 *
 * ```ts
 * const manager = Manager.create(() => [
 *   new DocExtension(),
 *   new TextExtension(),
 *   new ParagraphExtension(),
 * ])
 * ```
 *
 * At this point all the `onCreate` methods have been called. Including the
 * `onCreate` for the `Schema`.
 *
 * - `onView` - This is called the framework instance connects the
 *   `RemirrorManager` to the ProseMirror EditorView.
 *
 * ```ts
 * manager.addView(new EditorView(...))
 * manager.store.commands.insertText('Hello world');.
 * ```
 *
 * - [[`onStateUpdate`]] - This is the method called every time the ProseMirror
 *   state changes. Both the extensions and the `Framework` listen to this event
 *   and can provide updates in response.
 */
export declare class RemirrorManager<Extension extends AnyExtension> {
    #private;
    /**
     * Create the manager for your `Remirror` editor.
     */
    static create<Extension extends AnyExtension>(extensions: Extension[] | ExtensionTemplate<Extension>, settings?: Remirror.ManagerSettings): RemirrorManager<Extension | BuiltinPreset>;
    /**
     * Identifies this as a `Manager`.
     *
     * @internal
     */
    get [__INTERNAL_REMIRROR_IDENTIFIER_KEY__](): RemirrorIdentifier.Manager;
    /**
     * Returns `true` if the manager has been destroyed.
     */
    get destroyed(): boolean;
    /**
     * `true` when the view has been added to the UI layer and the editor is
     * running.
     */
    get mounted(): boolean;
    /**
     * Retrieve the framework output.
     *
     * This be undefined if the manager hasn't been provided to a framework yet
     * the manager.
     *
     * With synchronous frameworks this means that it should only be accessed
     * after the manager has been applied to the editor creation function.
     *
     * For frameworks like React it is only available when the manager is provided
     * to the `Remirror` component and after the very first render. This means it
     * is available within the `onRef` callback.
     *
     * ```tsx
     * import React, { useEffect } from 'react';
     * import { useRemirror, Remirror } from '@remirror/react';
     *
     * const Editor = () => {
     *   const { manager } = useRemirror();
     *
     *   const callback = () => {
     *     return manager.output; // ✅ This is fine.
     *   }
     *
     *   useEffect(() => {
     *     log(manager.output); // ✅  This is also fine.
     *   }, []);
     *
     *   log(manager.output); // ❌ This will be undefined on the first render.
     *
     *   return <Remirror manager={manager} />
     * }
     * ```
     */
    get output(): FrameworkOutput<Extension> | undefined;
    /**
     * Returns true when a framework is attached to the manager.
     *
     * This can be used to check if it is safe to call `manager.output`.
     */
    get frameworkAttached(): boolean;
    /**
     * The extensions stored by this manager
     */
    get extensions(): ReadonlyArray<GetExtensions<Extension>>;
    /**
     * The registered string handlers provided by the extensions.
     *
     * By default this includes `html` and `plainText`
     */
    get stringHandlers(): NamedStringHandlers;
    /**
     * Get the extension manager store which is accessible at initialization.
     */
    get store(): Remirror.ManagerStore<Extension>;
    /**
     * Provides access to the extension store.
     */
    get extensionStore(): Remirror.ExtensionStore;
    /**
     * Shorthand access to the active transaction from the manager. This is the
     * shared transaction available to all commands and should be used when you
     * need to make your commands chainable.
     *
     * If working with react and setting up your editor as a controlled component
     * then this is the preferred way to run custom commands, otherwise your
     * commands will end up being non-chainable and be overwritten by anything
     * that comes after.
     */
    get tr(): Transaction;
    /**
     * Returns the stored nodes
     */
    get nodes(): Record<this['~N'], NodeExtensionSpec>;
    /**
     * Returns the store marks.
     */
    get marks(): Record<this['~M'], MarkExtensionSpec>;
    /**
     * A shorthand method for retrieving the schema for this extension manager
     * from the data.
     */
    get schema(): EditorSchema;
    /**
     * A shorthand getter for retrieving the tags from the extension manager.
     */
    get extensionTags(): Readonly<CombinedTags<GetNameUnion<Extension>>>;
    /**
     * A shorthand way of retrieving the editor view.
     */
    get view(): EditorView;
    /**
     * Retrieve the settings used when creating the manager.
     */
    get settings(): Remirror.ManagerSettings;
    /**
     * The document to use for rendering and outputting HTML.
     */
    get document(): Document;
    /**
     * Creates the extension manager which is used to simplify the management of
     * the prosemirror editor.
     *
     * This is set to private to encourage using `RemirrorManager.create`
     * instead of the `new` keyword.
     */
    private constructor();
    /**
     * Loops through all extensions to set up the lifecycle handlers.
     */
    private setupLifecycleHandlers;
    /**
     * Set the string handler to use for a given name.
     *
     * This allows users to set the string handler
     */
    private setStringHandler;
    /**
     * Set the manager value for the provided key. This is used by extensions to
     * add data to the manager.
     */
    private setStoreKey;
    /**
     * Get the manager value for the provided key. This is used by extensions to
     * get data from the manager.
     */
    private getStoreKey;
    /**
     * A method to set values in the extension store which is made available to
     * extension.
     *
     * **NOTE** This method should only be used in the `onCreate` extension method
     * or it will throw an error.
     */
    private setExtensionStore;
    /**
     * Create the initial store.
     */
    private createExtensionStore;
    /**
     * A state getter method which is passed into the params.
     */
    private readonly getState;
    /**
     * Stores the editor view on the manager
     *
     * @param view - the editor view
     */
    addView(view: EditorView): this;
    /**
     * Attach a framework to the manager.
     */
    attachFramework(framework: BaseFramework<Extension>, updateHandler: (props: StateUpdateLifecycleProps) => void): void;
    /**
     * Create an empty document for the editor based on the current schema.
     *
     * This automatically looks at the supported content for the doc and the
     * available nodes which fulfil that content in order to create a document
     * with only the minimal required content.
     *
     * This can be used in conjunction with the create state to reset the current
     * value of the editor.
     */
    createEmptyDoc(): ProsemirrorNode;
    /**
     * Create the editor state from content passed to this extension manager.
     */
    createState(props?: CreateEditorStateProps): EditorState;
    /**
     * Add a handler to the manager.
     *
     * Currently the only event that can be listened to is the `destroy` event.
     */
    addHandler<Key extends keyof ManagerEvents>(event: Key, cb: ManagerEvents[Key]): Unsubscribe;
    /**
     * Update the state of the view and trigger the `onStateUpdate` lifecycle
     * method as well.
     */
    private readonly updateState;
    /**
     * This method should be called by the view layer every time the state is
     * updated.
     *
     * An example usage of this is within the collaboration extension.
     */
    onStateUpdate(props: Omit<StateUpdateLifecycleProps, 'firstUpdate'>): void;
    /**
     * Get the extension instance matching the provided constructor from the
     * manager.
     *
     * This will throw an error if non existent.
     */
    getExtension<ExtensionConstructor extends AnyExtensionConstructor>(Constructor: ExtensionConstructor): InstanceType<ExtensionConstructor>;
    /**
     * Determines in an extension is present by providing the desired
     * `Constructor`.
     *
     * This method can be used as a safer alternative to getExtension which
     * will throw an error if the constructor doesn't exist within the
     * extension created by this extension.
     */
    hasExtension<ExtensionConstructor extends AnyExtensionConstructor>(Constructor: ExtensionConstructor): boolean;
    /**
     * Make a clone of the manager.
     *
     * @internalremarks What about the state stored in the extensions and presets,
     * does this need to be recreated as well?
     */
    clone(): RemirrorManager<Extension>;
    /**
     * Recreate the manager with new settings and extensions
     */
    recreate<ExtraExtension extends AnyExtension>(extensions?: ExtraExtension[], settings?: Remirror.ManagerSettings): RemirrorManager<Extension | ExtraExtension>;
    /**
     * This method should be called to destroy the manager and remove the view.
     */
    destroy(): void;
    /**
     * Check whether the manager includes the names or constructors provided for
     * the preset and extensions.
     *
     * Returns true if all are included, returns false otherwise.
     */
    includes(mustIncludeList: Array<AnyExtensionConstructor | string>): boolean;
}
/**
 * A function that returns the extension to be used in the RemirrorManager. This
 * is similar to a preset function except that it takes no arguments.
 *
 * ```ts
 * import { RemirrorManager } from 'remirror';
 * import { BoldExtension, ItalicExtension } from 'remirror/extensions';
 *
 * const template = () => [new BoldExtension(), new ItalicExtension()]
 * const manager = RemirrorManager.create(template);
 * ```
 *
 * If the template is mixed in with other manager creators it will add the
 * relevant extension provided.
 */
export type ExtensionTemplate<Extension extends AnyExtension> = () => Extension[];
export interface ManagerEvents {
    /**
     * Called when the state is updated.
     */
    stateUpdate: (props: StateUpdateLifecycleProps) => void;
    /**
     * Called whenever the manager is cloned with the newly created manager
     * instance.
     *
     * This is mainly used for testing so that the RemirrorTester can always
     * reference the latest manager.
     */
    clone: (manager: AnyRemirrorManager) => void;
    /**
     * Called whenever the manager is recreated with the newly created manager
     * instance.
     *
     * This is mainly used for testing so that the RemirrorTester can always
     * reference the latest manager.
     */
    recreate: (manager: AnyRemirrorManager) => void;
    /**
     * An event listener which is called whenever the manager is destroyed.
     */
    destroy: () => void;
}
export type AnyRemirrorManager = Simplify<Replace<RemirrorManager<AnyExtension>, {
    clone: () => AnyRemirrorManager;
    store: Replace<Remirror.ManagerStore<AnyExtension>, {
        chain: any;
    }>;
    output: Replace<FrameworkOutput<AnyExtension>, {
        chain: any;
        manager: AnyRemirrorManager;
    }> | undefined;
    view: EditorView;
    addView: (view: EditorView) => void;
    attachFramework: (framework: any, updateHandler: (props: StateUpdateLifecycleProps) => void) => void;
    /** @internal */
    ['~E']: AnyExtension;
    /** @internal */
    ['~AN']: string;
    /** @internal */
    ['~N']: string;
    /** @internal */
    ['~M']: string;
    /** @internal */
    ['~P']: string;
}>>;
/**
 * Checks to see whether the provided value is a `RemirrorManager` instance.
 *
 * An optional parameter `mustIncludeList` is available if you want to check
 * that the manager includes all the listed extensions.
 *
 * @param value - the value to check
 * @param mustIncludeList - an array of presets and extension the manager must
 * include to pass the test. The identifier can either be the Extension / Preset
 * name e.g. `bold`, or the Extension / Preset constructor `BoldExtension`
 */
export declare function isRemirrorManager<Extension extends AnyExtension = AnyExtension>(value: unknown, mustIncludeList?: Array<AnyExtensionConstructor | string>): value is RemirrorManager<Extension>;
export interface CreateEditorStateProps extends Omit<StringHandlerProps, 'stringHandler'> {
    /**
     * This is where content can be supplied to the Editor.
     *
     * @remarks
     *
     * Content can either be
     * - a string (which will be parsed by the stringHandler)
     * - JSON object matching Prosemirror expected shape
     * - A top level ProsemirrorNode
     *
     * If this is left undefined then the editor will use the default empty `doc`.
     */
    content?: RemirrorContentType;
    /**
     * The selection that the user should have in the created node.
     *
     * @defaultValue 'end'
     */
    selection?: PrimitiveSelection;
    /**
     * A function which transforms a string into a prosemirror node.
     *
     * @remarks
     *
     * Can be used to transform markdown / html or any other string format into a
     * prosemirror node.
     *
     * See [[`fromHTML`]] for an example of how this could work.
     */
    stringHandler?: keyof Remirror.StringHandlers | StringHandler;
}
interface RemirrorManagerConstructor extends Function {
    create<Extension extends AnyExtension>(extension: Extension[], settings?: Remirror.ManagerSettings): RemirrorManager<Extension | BuiltinPreset>;
}
export interface RemirrorManager<Extension extends AnyExtension> {
    /**
     * The constructor for the [[`RemirrorManager`]].
     */
    constructor: RemirrorManagerConstructor;
    /**
     * Pseudo type property which contains the recursively extracted `Extension`
     * stored by this manager.
     *
     * @internal
     */
    ['~E']: Extension;
    /**
     * `AllNames`
     *
     * Get all the names of the extensions within this editor.
     *
     * @internal
     */
    ['~AN']: GetNameUnion<Extension> extends never ? string : GetNameUnion<Extension>;
    /**
     * `NodeNames`
     *
     * Type inference hack for node extension names. This is the only way I know
     * to store types on a class.
     *
     * @internal
     */
    ['~N']: GetNodeNameUnion<Extension> extends never ? string : GetNodeNameUnion<Extension>;
    /**
     * `MarkNames`
     *
     * Type inference hack for mark extension names. This is the only way I know
     * to store types on a class.
     *
     * @internal
     */
    ['~M']: GetMarkNameUnion<Extension> extends never ? string : GetMarkNameUnion<Extension>;
    /**
     * `PlainNames`
     *
     * Type inference hack for all the plain extension names. This is the only way
     * I know to store types on a class.
     *
     * @internal
     */
    ['~P']: GetPlainNameUnion<Extension> extends never ? string : GetPlainNameUnion<Extension>;
}
declare global {
    namespace Remirror {
        /**
         * Settings which can be passed into the manager.
         */
        interface ManagerSettings extends Partial<CustomDocumentProps> {
            /**
             * Set the extension priority for extension's by their name.
             */
            priority?: Record<string, ExtensionPriority>;
            /**
             * An object which excludes certain functionality from all extensions
             * within the manager.
             */
            exclude?: ExcludeOptions;
            /**
             * The error handler which is called when the JSON passed is invalid.
             *
             * @remarks
             *
             * The following can be used to setup the `onError` handler on the the
             * manager.
             *
             * ```tsx
             * import React from 'react';
             * import { Remirror, InvalidContentHandler } from 'remirror';
             * import { Remirror, useManager } from '@remirror/react';
             * import { WysiwygPreset } from 'remirror/extensions';
             *
             * const Editor = () => {
             *   const onError: InvalidContentHandler = useCallback(({ json, invalidContent, transformers }) => {
             *     // Automatically remove all invalid nodes and marks.
             *     return transformers.remove(json, invalidContent);
             *   }, []);
             *
             *   const manager = useManager(() => [new WysiwygPreset()], { onError });
             *
             *   return (
             *     <Remirror manager={manager}>
             *       <div />
             *     </Remirror>
             *   );
             * };
             * ```
             */
            onError?: InvalidContentHandler;
            /**
             * A function which transforms a string into a prosemirror node.
             *
             * @remarks
             *
             * Can be used to transform markdown / html or any other string format into a
             * prosemirror node.
             *
             * See [[`fromHTML`]] for an example of how this could work.
             */
            stringHandler?: keyof Remirror.StringHandlers | StringHandler;
            /**
             * The default named selection. This is used when `manager.createState` is
             * called without providing a selection.
             *
             * @defaultValue 'end'
             */
            defaultSelection?: 'start' | 'end' | 'all';
        }
        /**
         * Describes the object where the extension manager stores it's data.
         *
         * @remarks
         *
         * Since this is a global namespace, you can extend the store if your
         * extension is modifying the shape of the `Manager.store` property.
         */
        interface ManagerStore<Extension extends AnyExtension> {
            /**
             * The editor view stored by this instance.
             */
            view: EditorView;
        }
        interface ExtensionStore {
            /**
             * Make the remirror manager available to the editor.
             */
            manager: AnyRemirrorManager;
            /**
             * The list of all extensions included in the editor.
             */
            readonly extensions: AnyExtension[];
            /**
             * The stage the manager is currently at.
             */
            readonly phase: ManagerPhase;
            /**
             * The view available to extensions once `addView` has been called on the
             * `RemirrorManager` instance.
             */
            readonly view: EditorView;
            /**
             * The latest state.
             */
            currentState: EditorState;
            /**
             * The previous state. Will be undefined when the view is first created.
             */
            previousState?: EditorState;
            /**
             * The root document to be used for the editor. This is mainly used for
             * non-browser environment.
             */
            readonly document: Document;
            /**
             * The settings passed to the manager.
             */
            readonly managerSettings: ManagerSettings;
            /**
             * The names of every node extension.
             */
            nodeNames: readonly string[];
            /**
             * The names of every mark extension.
             */
            markNames: readonly string[];
            /**
             * The names of every plain extension.
             */
            plainNames: readonly string[];
            /**
             * The named string handlers which are supported by the current editor
             * implementation.
             */
            readonly stringHandlers: NamedStringHandlers;
            /**
             * Return true when the editor view has been created.
             */
            readonly isMounted: () => boolean;
            /**
             * A helper method for retrieving the state of the editor
             */
            readonly getState: () => EditorState;
            /**
             * Allow extensions to trigger an update in the prosemirror state. This
             * should not be used often. It's here in case you need it in an
             * emergency.
             *
             * Internally it's used by the [[`PluginsExtension`]] to create a new
             * state when the plugins are updated at runtime.
             */
            readonly updateState: (state: EditorState) => void;
            /**
             * Get the extension instance matching the provided constructor from the
             * manager.
             *
             * This will throw an error if not defined.
             */
            readonly getExtension: <ExtensionConstructor extends AnyExtensionConstructor>(Constructor: ExtensionConstructor) => InstanceType<ExtensionConstructor>;
            /**
             * Get the value of a key from the manager store.
             */
            getStoreKey: <Key extends ManagerStoreKeys>(key: Key) => AnyManagerStore[Key];
            /**
             * Update the store with a specific key.
             */
            setStoreKey: <Key extends ManagerStoreKeys>(key: Key, value: AnyManagerStore[Key]) => void;
            /**
             * Set a value on the extension store. One of the design decisions in this `1.0.0`
             * version of `remirror` was to move away from passing elaborate arguments to each extension
             * method and allow extensions to interact with a store shared by all
             * extensions.
             *
             * The extension store object is immutable and will throw an error if updated directly.
             *
             * ```ts
             * class MyExtension extends PlainExtension {
             *   get name() {}
             * }
             * ```
             */
            setExtensionStore: <Key extends keyof ExtensionStore>(key: Key, value: ExtensionStore[Key]) => void;
            /**
             * Set the string handler to use for a given name.
             *
             * This allows users to set the string handler
             */
            setStringHandler: (name: keyof StringHandlers, handler: StringHandler) => void;
        }
    }
}
export {};
