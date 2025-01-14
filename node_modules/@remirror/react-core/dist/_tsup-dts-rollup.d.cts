import type { ActiveFromExtensions } from '@remirror/core';
import { AddHandler } from '@remirror/core';
import { AnyExtension } from '@remirror/core';
import { AnyExtensionConstructor } from '@remirror/core';
import type { AttrsFromExtensions } from '@remirror/core';
import type { BuiltinPreset } from '@remirror/core';
import { ChainedFromExtensions } from '@remirror/core';
import { CommandsFromExtensions } from '@remirror/core';
import _composeRefs from '@seznam/compose-react-refs';
import { Context } from 'react';
import type { CorePreset } from '@remirror/preset-core';
import type { CreateCoreManagerOptions } from '@remirror/preset-core';
import { CreateEditorStateProps } from '@remirror/core';
import { CustomHandler } from '@remirror/core';
import { CustomHandlerMethod } from '@remirror/core';
import { DependencyList } from 'react';
import { DirectEditorProps } from '@remirror/pm/view';
import { Dispatch } from 'react';
import { Dispose } from '@remirror/core';
import { DocChangedOptions } from '@remirror/core';
import { DynamicOptionsOfConstructor } from '@remirror/core';
import { EditorState } from '@remirror/core';
import { EditorState as EditorState_2 } from '@remirror/pm/state';
import { EditorView } from '@remirror/pm';
import { EditorView as EditorView_2 } from '@remirror/pm/view';
import { FC } from 'react';
import { Framework } from '@remirror/core';
import { FrameworkOptions } from '@remirror/core';
import type { FrameworkOutput } from '@remirror/core';
import { FrameworkProps } from '@remirror/core';
import { GetCustomHandler } from '@remirror/core';
import { GetHandler } from '@remirror/core';
import { GetMarkRange } from '@remirror/core';
import type { GetStaticAndDynamic } from '@remirror/core';
import { Handler } from '@remirror/core';
import type { HelpersFromExtensions } from '@remirror/core';
import type { I18nFormatter } from '@remirror/core';
import { InvalidContentHandler } from '@remirror/core';
import { MutableRefObject } from 'react';
import { OptionsOfConstructor } from '@remirror/core';
import { PortalContainer } from '@remirror/extension-react-component';
import { default as React_2 } from 'react';
import type { ReactElement } from 'react';
import type { ReactExtension } from '@remirror/preset-react';
import type { ReactExtensionOptions } from '@remirror/preset-react';
import { ReactNode } from 'react';
import type { Ref } from 'react';
import { RemirrorEventListener } from '@remirror/core';
import type { RemirrorJSON } from '@remirror/core';
import { RemirrorManager } from '@remirror/core';
import { Selection as Selection_2 } from '@remirror/core';
import { SetStateAction } from 'react';
import type { Shape } from '@remirror/core';
import { StringHandler } from '@remirror/core';
import { UpdateStateProps } from '@remirror/core';
import { useEffect } from 'react';

declare type ComposeRefs = typeof _composeRefs;

export declare const composeRefs: ComposeRefs;

/**
 * Creates a new editor view
 *
 * @param place
 * @param props
 */
declare function createEditorView(place: Node | ((p: HTMLElement) => void) | null, props: DirectEditorProps): EditorView_2;
export { createEditorView }
export { createEditorView as createEditorView_alias_1 }

/**
 * Create a React [[`RemirrorManager`]] with all the default react presets and
 * extensions.
 */
declare function createReactManager<Extension extends AnyExtension>(extensions: Extension[] | (() => Extension[]) | RemirrorManager<ReactExtensions<Extension>>, options?: CreateReactManagerOptions): RemirrorManager<ReactExtensions<Extension>>;
export { createReactManager }
export { createReactManager as createReactManager_alias_1 }

/**
 * The options for the exported `createReactManager` method.
 */
declare interface CreateReactManagerOptions extends CreateCoreManagerOptions {
    /**
     * Options for the react preset.
     */
    react?: GetStaticAndDynamic<ReactExtensionOptions>;
}
export { CreateReactManagerOptions }
export { CreateReactManagerOptions as CreateReactManagerOptions_alias_1 }

/**
 * The default editor placeholder where the prosemirror editor will be rendered.
 */
declare const EditorComponent: () => JSX.Element;
export { EditorComponent }
export { EditorComponent as EditorComponent_alias_1 }

/**
 * The config options for the `getRootProps` method.
 */
declare interface GetRootPropsConfig<RefKey extends string = 'ref'> extends RefProps<RefKey>, Shape {
    /**
     * Allows for composing the refs together. If you have a ref you would also
     * like to add to the main element then just add it here.
     */
    ref?: Ref<HTMLElement>;
}
export { GetRootPropsConfig }
export { GetRootPropsConfig as GetRootPropsConfig_alias_1 }

/**
 * A Provider to inject a translation formatter powered by your chosen i18n library into Remirror
 */
declare const I18nContext: React_2.Context<I18nFormatter>;
export { I18nContext }
export { I18nContext as I18nContext_alias_1 }

declare interface I18nProps {
    /**
     * Provide a function that formats ICU MessageFormat encoded messages, via your chosen i18n solution.
     *
     * You can use the `i18nFormat` function from the optional @remirror/i18n library, which is powered by Lingui
     *
     * ```ts
     * import { i18nFormat } from '@remirror/i18n';
     *
     * const Editor = () => {
     *   <Remirror i18nFormat={i18nFormat} />
     * }
     * ```
     */
    i18nFormat?: I18nFormatter;
    /**
     * The current locale for this context.
     *
     * @defaultValue 'en'
     */
    locale?: string;
    /**
     * Supported locales. Defaults to including the locale.
     *
     * @defaultValue [locale]
     */
    supportedLocales?: string[];
    children?: ReactNode;
}
export { I18nProps }
export { I18nProps as I18nProps_alias_1 }
export { I18nProps as I18nProps_alias_2 }

declare const I18nProvider: FC<I18nProps>;
export { I18nProvider }
export { I18nProvider as I18nProvider_alias_1 }
export { I18nProvider as I18nProvider_alias_2 }

declare const OnChangeHTML: ({ onChange }: OnChangeHTMLProps) => null;
export { OnChangeHTML }
export { OnChangeHTML as OnChangeHTML_alias_1 }

declare interface OnChangeHTMLProps {
    onChange: (html: string) => void;
}
export { OnChangeHTMLProps }
export { OnChangeHTMLProps as OnChangeHTMLProps_alias_1 }

declare const OnChangeJSON: ({ onChange }: OnChangeJSONProps) => null;
export { OnChangeJSON }
export { OnChangeJSON as OnChangeJSON_alias_1 }

declare interface OnChangeJSONProps {
    onChange: (json: RemirrorJSON) => void;
}
export { OnChangeJSONProps }
export { OnChangeJSONProps as OnChangeJSONProps_alias_1 }

/**
 * Use this to build your own extension union type which extends from the
 * `ReactExtensions`.
 */
declare type ReactExtensions<Extension extends AnyExtension = never> = CorePreset | ReactExtension | BuiltinPreset | Extension;
export { ReactExtensions }
export { ReactExtensions as ReactExtensions_alias_1 }

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
    protected createView(state: EditorState_2): EditorView_2;
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
    updateControlledState(state: EditorState_2, previousState?: EditorState_2): void;
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

/**
 * The options that are passed into the [[`ReactFramework`]] constructor.
 */
export declare interface ReactFrameworkOptions<Extension extends AnyExtension> extends FrameworkOptions<Extension, ReactFrameworkProps<Extension>> {
}

/**
 * These are the props passed to the render function provided when setting up
 * your editor.
 */
declare interface ReactFrameworkOutput<Extension extends AnyExtension> extends FrameworkOutput<Extension> {
    /**
     * A function that returns the props which should be spread on the react
     * element to be used as the root for the editor. This is where the
     * ProseMirror editor is injected into the DOM).
     *
     * @remarks
     *
     * By default `Remirror` will add the prosemirror editor instance directly
     * into the first child element it receives. Using this method gives you full
     * control over where the editor should be injected.
     *
     * **IMPORTANT** In order to support SSR pre-rendering this should only be
     * spread on a component with NO children.
     *
     * **Example with indirectly nested components**
     *
     * ```tsx
     * import { Remirror } from '@remirror/react';
     * import { PresetCore } from '@remirror/preset-core';
     * import { BoldExtension } from '@remirror/extension-bold';
     *
     * const InnerEditor = () => {
     *   const { getRootProps } = useRemirror();
     *   return <div {...getRootProps()} />;
     * }
     *
     * const EditorWrapper = () => {
     *   const corePreset = usePreset(CorePreset);
     *   const boldExtension = useExtension(BoldExtension);
     *   const manager = useManager([corePreset, boldExtension]);
     *
     *   return (
     *     <Remirror manager={manager}>
     *       <InnerEditor />
     *     </Remirror>
     *   );
     * }
     * ```
     */
    getRootProps: <RefKey extends string = 'ref'>(options?: GetRootPropsConfig<RefKey>) => RefKeyRootProps<RefKey>;
    /**
     * The portal container.
     *
     * @remarks
     *
     * This is the container used to keep track of all the react portals which are
     * being rendered into the prosemirror dom.
     *
     * @internal
     */
    portalContainer: PortalContainer;
}
export { ReactFrameworkOutput }
export { ReactFrameworkOutput as ReactFrameworkOutput_alias_1 }

export declare interface ReactFrameworkProps<Extension extends AnyExtension> extends FrameworkProps<Extension> {
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
    state?: EditorState_2 | null;
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
 * The react ref key props for the `getRootProps` method.
 */
declare type RefKeyRootProps<RefKey extends string = 'ref'> = {
    [P in Exclude<RefKey, 'key'>]: Ref<any>;
} & {
    key: string;
    children: ReactNode;
} & Shape;
export { RefKeyRootProps }
export { RefKeyRootProps as RefKeyRootProps_alias_1 }

declare interface RefProps<RefKey = 'ref'> {
    /**
     * A custom ref key which allows a reference to be obtained from non standard
     * components.
     *
     * @defaultValue 'ref'
     */
    refKey?: RefKey;
}
export { RefProps }
export { RefProps as RefProps_alias_1 }

/**
 * [[`Remirror`]] is the component for putting the editor into into it's child
 * component.
 *
 * @remarks
 *
 * The main component for remirror. This acts both as a Provider of the remirror
 * context. All components rendered within `Remirror` have access to the
 * remirror context via `useRemirrorContext`.
 *
 * I can also be rendered as a standalone editor without children. In this case
 * the context can be accessed from outside the editor via
 * `useRemirror().getContext()`.
 */
declare function Remirror_2<Extension extends AnyExtension = Remirror.Extensions>(props: RemirrorProps<Extension>): ReactElement<RemirrorProps<Extension>>;
export { Remirror_2 as Remirror }
export { Remirror_2 as Remirror_alias_1 }

/**
 * The `ReactContext` for the Remirror editor.
 */
declare const RemirrorContext: Context<ReactFrameworkOutput<any> | null>;
export { RemirrorContext }
export { RemirrorContext as RemirrorContext_alias_1 }
export { RemirrorContext as RemirrorContext_alias_2 }

/**
 * The props for the main `<Remirror />` component.
 */
declare interface RemirrorProps<Extension extends AnyExtension = Remirror.Extensions> extends Omit<ReactFrameworkProps<Extension>, 'stringHandler' | 'manager'>, I18nProps {
    /**
     * This manager composes the extensions provided and provides the
     * functionality used throughout the editor.
     *
     * It is overridden here since there was an issue with type inference when
     * using the manager inherited from `ReactFrameworkProps`.
     */
    manager: RemirrorManager<any>;
    /**
     * The optional children which can be passed into the [`Remirror`].
     */
    children?: ReactNode;
    /**
     * Set this to `start` or `end` to automatically render the editor to the dom.
     *
     * When set to `start` the editor will be added before all other child
     * components. If `end` the editable editor will be added after all child
     * components.
     *
     * When no children are provided the editor will automatically be rendered
     * even without this prop being set.
     *
     * `start` is the preferred value since it helps avoid some of the issues that
     * can arise from `zIndex` issues with floating components rendered within the
     * context.
     *
     * @defaultValue undefined
     */
    autoRender?: boolean | 'start' | 'end';
    /**
     * An array of hooks that can be passed through to the `Remirror` component
     * and will be called in the order provided. Each hook receives no props but
     * will have access to the `RemirrorContext`.
     *
     * If you'd like access to more
     * state, you can wrap the `Remirror` component in a custom provider and
     * attach your state there. It can then be accessed inside the hook via
     * context.
     */
    hooks?: Array<() => void>;
}
export { RemirrorProps }
export { RemirrorProps as RemirrorProps_alias_1 }

export declare type SetShouldRenderClient = Dispatch<SetStateAction<boolean | undefined>>;

declare interface UpdateReason {
    /**
     * The selection changed.
     */
    selection: boolean;
    /**
     * The document changed.
     */
    doc: boolean;
    /**
     * A stored mark was added to the current selection
     */
    storedMark: boolean;
}
export { UpdateReason }
export { UpdateReason as UpdateReason_alias_1 }
export { UpdateReason as UpdateReason_alias_2 }

/**
 * This is a shorthand method for retrieving the active available in the
 * editor.
 *
 * ```ts
 * import { useActive } from '@remirror/react';
 * ```
 *
 * This hooks updates the local component on each state update for the editor,
 * so it can be quite expensive.
 *
 * @param autoUpdate - Set to false to prevent automatic re-rendering on every
 * state update.
 */
declare function useActive<Extension extends AnyExtension = Remirror.Extensions>(autoUpdate?: boolean): ActiveFromExtensions<Extension>;
export { useActive }
export { useActive as useActive_alias_1 }
export { useActive as useActive_alias_2 }

/**
 * A core hook which provides the attributes for the nodes and marks in the
 * editor.
 *
 * ```tsx
 * import { useAttrs } from '@remirror/react';
 *
 * const EditorButton = () => {
 *   const attrs = useAttrs();
 *   const { link } = attrs;
 *
 *   return <a href={link.href}>{link().href}</a>;
 * }
 * ```
 */
declare function useAttrs<Extension extends AnyExtension = Remirror.Extensions>(update?: boolean): AttrsFromExtensions<Extension>;
export { useAttrs }
export { useAttrs as useAttrs_alias_1 }
export { useAttrs as useAttrs_alias_2 }

/**
 * A core hook which provides the chainable commands for usage in your editor.
 *
 * ```tsx
 * import { useChainedCommands } from '@remirror/react';
 *
 * const EditorButton = () => {
 *   const chain = useChainedCommands();
 *
 *   return (
 *     <>
 *       <button onClick={() => chain.toggleBold().toggleItalic().run()}>
 *         Chain me!
 *       </button>
 *     </>
 *   );
 * }
 * ````
 */
declare function useChainedCommands<Extension extends AnyExtension = Remirror.Extensions | AnyExtension>(): ChainedFromExtensions<Extension>;
export { useChainedCommands }
export { useChainedCommands as useChainedCommands_alias_1 }
export { useChainedCommands as useChainedCommands_alias_2 }

/**
 * A core hook which provides the commands for usage in your editor.
 *
 * ```tsx
 * import { useCommands } from '@remirror/react';
 *
 * const EditorButton = () => {
 *   const commands = useCommands();
 *
 *   return (
 *     <>
 *       <button onClick={() => commands.toggleBold()}>
 *         Click me!
 *       </button>
 *     </>
 *   );
 * }
 * ````
 */
declare function useCommands<Extension extends AnyExtension = Remirror.Extensions>(): CommandsFromExtensions<Extension>;
export { useCommands }
export { useCommands as useCommands_alias_1 }
export { useCommands as useCommands_alias_2 }

/**
 * A core hook which returns the current selection.
 */
declare function useCurrentSelection(): Selection_2;
export { useCurrentSelection }
export { useCurrentSelection as useCurrentSelection_alias_1 }
export { useCurrentSelection as useCurrentSelection_alias_2 }

/**
 * A hook for subscribing to transactions that change the document
 */
declare function useDocChanged(handler: NonNullable<GetHandler<DocChangedOptions>['docChanged']>): void;
export { useDocChanged }
export { useDocChanged as useDocChanged_alias_1 }
export { useDocChanged as useDocChanged_alias_2 }

/**
 * A hook which provides a react ref wrapper for the `view.dom`.
 */
declare function useEditorDomRef(): MutableRefObject<HTMLElement>;
export { useEditorDomRef }
export { useEditorDomRef as useEditorDomRef_alias_1 }
export { useEditorDomRef as useEditorDomRef_alias_2 }

/**
 * A core hook which provides the latest editor state every time that it
 * updates.
 */
declare function useEditorState(): EditorState_2;
export { useEditorState }
export { useEditorState as useEditorState_alias_1 }
export { useEditorState as useEditorState_alias_2 }

/**
 * A hook which provides access to the editor view.
 */
declare function useEditorView(): EditorView;
export { useEditorView }
export { useEditorView as useEditorView_alias_1 }
export { useEditorView as useEditorView_alias_2 }

/**
 * Dynamically update the properties of your extension via hooks. Provide the
 * Extension constructor and the properties you want to update.
 *
 * @remarks
 *
 * Please note that every time the properties change your extension is updated.
 * You will want to memoize or prevent needless updates somehow to the
 * properties passed in.
 *
 * This is only available within the context of the `Remirror` it will
 * throw an error otherwise.
 *
 * It can be used with three distinct call signatures.
 *
 * **Get the extension instance**
 *
 * ```tsx
 * import { useExtension } from '@remirror/react';
 * import { BoldExtension } from 'remirror/extensions';
 *
 * const Editor = () => {
 *   const boldExtension = useExtension(BoldExtension);
 *
 *   boldExtension.setOptions({ weight: '800' });
 *
 *   return null;
 * }
 * ```
 *
 * **Update the extension properties**
 *
 * ```tsx
 * import { useExtension } from '@remirror/react';
 * import { PlaceholderExtension } from 'remirror/extensions';
 *
 * const EditorPlaceholder = ({ placeholder = 'Your magnum opus' }) => {
 *   useExtension(PlaceholderExtension, { placeholder }); // Updates the placeholder.
 *
 *   return null;
 * }
 * ```
 *
 * **Add event handlers to your extension**
 *
 * ```tsx
 * import { useCallback } from 'react';
 * import { HistoryExtension, HistoryOptions } from 'remirror/extensions';
 * import { useExtension } from '@remirror/react';
 *
 * const Editor = ({ placeholder = 'Your magnum opus' }) => {
 *   useExtension(
 *     HistoryExtension,
 *     useCallback(
 *       ({ addHandler }) => {
 *         return addHandler('onRedo', () => log('a redo just happened'));
 *       },
 *       [],
 *     ),
 *     [event, handler],
 *   );
 *
 *   return null;
 * };
 * ```
 *
 * These hooks can serve as the building blocks when customizing your editor
 * experience with `remirror`.
 */
declare function useExtension<Type extends AnyExtensionConstructor>(Constructor: Type): InstanceType<Type>;

declare function useExtension<Type extends AnyExtensionConstructor>(Constructor: Type, memoizedCallback: UseExtensionCallback<Type>, dependencies?: DependencyList): void;

declare function useExtension<Type extends AnyExtensionConstructor>(Constructor: Type, options: DynamicOptionsOfConstructor<Type>): void;
export { useExtension }
export { useExtension as useExtension_alias_1 }
export { useExtension as useExtension_alias_2 }

declare type UseExtensionCallback<Type extends AnyExtensionConstructor> = (props: UseExtensionCallbackProps<Type>) => Dispose | undefined;
export { UseExtensionCallback }
export { UseExtensionCallback as UseExtensionCallback_alias_1 }
export { UseExtensionCallback as UseExtensionCallback_alias_2 }

declare interface UseExtensionCallbackProps<Type extends AnyExtensionConstructor> {
    /**
     * Add a handler to the the extension callback.
     *
     * ```ts
     * addHandler('onChange', () => log('changed'));
     * ```
     */
    addHandler: AddHandler<OptionsOfConstructor<Type>>;
    /**
     * Set the value of a custom option which returns a dispose method. The custom
     * value is handled internally by the extension.
     *
     * ```ts
     * addCustomHandler('keybindings', { Enter: () => false });
     * ```
     */
    addCustomHandler: CustomHandlerMethod<OptionsOfConstructor<Type>>;
    /**
     * An instance of the extension. This can be used for more advanced scenarios.
     */
    extension: InstanceType<Type>;
}

/**
 * Dynamically add custom event handlers to your extension.
 *
 * @remarks
 *
 * Please note that every time the properties change your extension is updated.
 * You will want to memoize or prevent needless updates somehow to the
 * properties passed in.
 *
 * This is only available within the context of the `Remirror` it will
 * throw an error otherwise.
 *
 * These hooks can serve as the building blocks when customizing your editor
 * experience with `remirror`.
 *
 * @internal
 */
declare function useExtensionCustomEvent<Type extends AnyExtensionConstructor, Key extends keyof GetCustomHandler<OptionsOfConstructor<Type>>>(extension: Type, event: Key, memoizedCustomHandler: CustomHandler<GetCustomHandler<OptionsOfConstructor<Type>>[Key]>): void;
export { useExtensionCustomEvent }
export { useExtensionCustomEvent as useExtensionCustomEvent_alias_1 }
export { useExtensionCustomEvent as useExtensionCustomEvent_alias_2 }

/**
 * Dynamically add event handlers to your extension.
 *
 * @remarks
 *
 * Please note that every time the properties change your extension is updated.
 * You will want to memoize or prevent needless updates somehow to the
 * properties passed in.
 *
 * This is only available within the context of the `Remirror` it will
 * throw an error otherwise.
 *
 * ```tsx
 * import { useCallback } from 'react';
 * import { HistoryExtension } from 'remirror/extensions';
 * import { useExtensionEvent } from '@remirror/react';
 *
 * const RedoLogger = () => {
 *   useExtensionEvent(
 *     HistoryExtension,
 *     'onRedo',
 *     useCallback(() => log('a redo just happened'), []),
 *   );
 *
 *   return null;
 * };
 * ```
 *
 * These hooks can serve as the building blocks when customizing your editor
 * experience with `remirror`.
 */
declare function useExtensionEvent<Type extends AnyExtensionConstructor, Key extends keyof GetHandler<OptionsOfConstructor<Type>>>(extension: Type, event: Key, memoizedHandler: Handler<GetHandler<OptionsOfConstructor<Type>>[Key]>): void;
export { useExtensionEvent }
export { useExtensionEvent as useExtensionEvent_alias_1 }
export { useExtensionEvent as useExtensionEvent_alias_2 }

/**
 * Returning a new object reference guarantees that a before-and-after
 * equivalence check will always be false, resulting in a re-render, even when
 * multiple calls to forceUpdate are batched.
 *
 * @internal
 */
declare function useForceUpdate(): () => void;
export { useForceUpdate }
export { useForceUpdate as useForceUpdate_alias_1 }
export { useForceUpdate as useForceUpdate_alias_2 }

/**
 * Assert if an extension is present in the manager by providing its constructor
 */
declare function useHasExtension<Type extends AnyExtensionConstructor>(Constructor: Type): boolean;
export { useHasExtension }
export { useHasExtension as useHasExtension_alias_1 }
export { useHasExtension as useHasExtension_alias_2 }

/**
 * A core hook which provides the helpers for usage in your editor.
 *
 * ```tsx
 * import { useHelpers } from '@remirror/react';
 *
 * const EditorButton = () => {
 *   const helpers = useHelpers();
 *
 *   return (
 *     <>
 *       <button onClick={() => helpers.toggleBold()}>
 *         Click me!
 *       </button>
 *       <button onClick={() => helpers.chain.toggleBold().toggleItalic().run()}>
 *         Chain me!
 *       </button>
 *     </>
 *   );
 * }
 * ````
 *
 * Passing `true` as the first argument will ensure that the component this hook
 * is placed inside will rerender on every update.
 */
declare function useHelpers<Extension extends AnyExtension = Remirror.Extensions>(update?: boolean): HelpersFromExtensions<Extension>;
export { useHelpers }
export { useHelpers as useHelpers_alias_1 }
export { useHelpers as useHelpers_alias_2 }

declare function useI18n(): UseI18nReturn;
export { useI18n }
export { useI18n as useI18n_alias_1 }
export { useI18n as useI18n_alias_2 }

declare type UseI18nReturn = I18nFormatter;
export { UseI18nReturn }
export { UseI18nReturn as UseI18nReturn_alias_1 }
export { UseI18nReturn as UseI18nReturn_alias_2 }

export declare const useIsomorphicLayoutEffect: typeof useEffect;

/**
 * A hook for creating the editor manager directly in the react component.
 *
 * @remarks
 *
 * The manager is a singleton and doesn't rerender until `manager.destroy()` is
 * called. You should call this method in a `useEffect`
 *
 * This is intentional. However, it's something that can be addressed if it
 * causes issues.
 *
 * ```tsx
 * import { useExtension } from '@remirror/react';
 * import { PresetCore } from 'remirror/preset-core';
 * import { BoldExtension } from 'remirror/extension-bold';
 *
 * const Framework = () => {
 *   const manager = useManager([new BoldExtension(), new CorePreset()]);
 *
 *   <Remirror >
 *     <MyEditor />
 *   </Remirror>;
 * }
 * ```
 *
 * This is intended for internal usage only.
 *
 * @internal
 */
declare function useManager<Extension extends AnyExtension = Remirror.Extensions>(extensions: (() => Extension[]) | RemirrorManager<ReactExtensions<Extension>>, options?: CreateReactManagerOptions): RemirrorManager<ReactExtensions<Extension>>;
export { useManager }
export { useManager as useManager_alias_1 }
export { useManager as useManager_alias_2 }

/**
 * A hook which returns the selected range of the mark of the provided type.
 */
declare function useMarkRange(type: string): GetMarkRange | undefined;
export { useMarkRange }
export { useMarkRange as useMarkRange_alias_1 }
export { useMarkRange as useMarkRange_alias_2 }

/**
 * A hook which provides access to the portal container for rendering react
 * component directly within the editor dom.
 */
declare function usePortalContainer(): PortalContainer;
export { usePortalContainer }
export { usePortalContainer as usePortalContainer_alias_1 }
export { usePortalContainer as usePortalContainer_alias_2 }

export declare function usePrevious<T>(value: T): T | undefined;

/**
 * The hook responsible for providing the editor context when the `Remirror`
 * component is combined with `useRemirror`.
 *
 * @remarks
 *
 * This is an internal hook which returns the `ReactFramework` instance for
 * consumption by the public API's. It is used within `useRemirror` and the
 * `<Remirror />` component.
 *
 * @internal
 */
declare function useReactFramework<Extension extends AnyExtension>(props: ReactFrameworkProps<Extension>): ReactFrameworkOutput<Extension>;
export { useReactFramework }
export { useReactFramework as useReactFramework_alias_1 }

/**
 * A hook which replaces the [[`Remirror`]] and gives you total control of
 * the editor you can create.
 *
 * This is very experimental and if successful could replace the current
 * patterns being used.
 */
declare function useRemirror<Extension extends AnyExtension>(props?: UseRemirrorProps<Extension>): UseRemirrorReturn<ReactExtensions<Extension>>;
export { useRemirror }
export { useRemirror as useRemirror_alias_1 }
export { useRemirror as useRemirror_alias_2 }

/**
 * This provides access to the remirror context when using the `Remirror`.
 *
 * The first argument which is optional can also be a change handler which is
 * called every time the state updates.
 *
 * @remarks
 *
 * The following example applies the root props to the div.
 *
 * ```tsx
 * import { Remirror, useRemirrorContext } from 'remirror';
 *
 * const HooksComponent = (props) => {
 *   // This pulls the remirror props out from the context.
 *   const { getRootProps } = useRemirrorContext();
 *
 *   return <div {...getRootProps()} />;
 * }
 *
 * class App extends Component {
 *   render() {
 *     return (
 *       <Remirror>
 *         <HooksComponent />
 *       </Remirror>
 *     );
 *   }
 * }
 * ```
 *
 * For performance reasons `useRemirror` does not automatically trigger a
 * rerender on every editor update. This allows for you use it in component
 * which don't need to track the latest editor state, without suffering a
 * performance penalty.
 *
 * However if you do want to track whether a command is enabled at the current
 * selection or whether a certain formatting mark (bold) is active at the
 * current selection you can pass through an optional parameter.
 *
 * ```tsx
 * const EditorButton = () => {
 *   const { active, commands } = useRemirrorContext({ autoUpdate: true });
 *
 *   return (
 *     <button style={{ fontWeight: active.bold() ? 'bold' : undefined }}>
 *       B
 *     <button>
 *   );
 * }
 * ```
 *
 * The above example keep track of whether the current selection is bold on
 * every update to the editor. Updates can be document changes and selection
 * changes.
 *
 * For more control you can also use a handler function as the first parameter
 * to selectively rerender as you see fit.
 *
 * ```tsx
 * const EditorButton = () => {
 *   const { active, commands } = useRemirrorContext(() => {
 *     if (active.bold() === boldActive) {
 *       return;
 *     }
 *
 *     setBoldActive(active.bold());
 *   });
 *
 *   const [boldActive, setBoldActive] = useState(active.bold());
 *
 *   return (
 *     <button style={{ fontWeight: boldActive ? 'bold' : undefined }}>
 *       B
 *     <button>
 *   )
 * }
 * ```
 *
 * In this case the component only re-renders when the bold formatting changes.
 */
declare function useRemirrorContext<Extension extends AnyExtension = Remirror.Extensions>(handler?: RemirrorEventListener<Extension> | {
    autoUpdate: boolean;
}): ReactFrameworkOutput<Extension>;
export { useRemirrorContext }
export { useRemirrorContext as useRemirrorContext_alias_1 }
export { useRemirrorContext as useRemirrorContext_alias_2 }

/**
 * This is a type alias for creating your own typed version of the remirror
 * method.
 *
 * ```ts
 * import { useRemirror, UseRemirrorContextType } from '@remirror/react';
 * import { SocialPreset } from 'remirror/extensions'
 *
 * const useSocialRemirror = useRemirror as UseRemirrorContextType<SocialPreset>;
 *
 * // With the remirror provider context.
 * const Editor = () => {
 *   const { commands } = useSocialRemirror();
 *
 *   // All available commands are shown with intellisense. Command click to goto the implementation.
 *   commands.toggleBold();
 * }
 * ```
 */
declare type UseRemirrorContextType<Extension extends AnyExtension> = <Type extends AnyExtension>(handler?: RemirrorEventListener<Extension> | {
    autoUpdate: boolean;
}) => ReactFrameworkOutput<Extension | Type>;
export { UseRemirrorContextType }
export { UseRemirrorContextType as UseRemirrorContextType_alias_1 }

/**
 * Props which are passed into the `useRemirror` hook.
 */
declare interface UseRemirrorProps<Extension extends AnyExtension> extends CreateReactManagerOptions, Partial<CreateEditorStateProps> {
    /**
     * Provide a function that returns an array of extensions which will be used
     * to create the manager. If you prefer you can directly provide your own
     * `RemirrorManager` to override this. The manager you provide will be cloned
     * and used within your editor.
     *
     * When a `Manager` is provided then several settings are ignored like
     * [[`stringHandler`]] and [[`onError`]].
     */
    extensions?: (() => Extension[]) | RemirrorManager<any>;
    /**
     * This is called when the editor has invalid content.
     *
     * @remarks
     *
     * To add this to the editor the following is needed.
     *
     * ```tsx
     * import React from 'react';
     * import { Remirror, InvalidContentHandler } from 'remirror';
     * import { Remirror, useManager } from '@remirror/react';
     * import { WysiwygPreset } from 'remirror/extensions';
     *
     * const Framework = () => {
     *   const onError: InvalidContentHandler = useCallback(({ json, invalidContent, transformers }) => {
     *     // Automatically remove all invalid nodes and marks.
     *     return transformers.remove(json, invalidContent);
     *   }, []);
     *
     *   const manager = useManager(() => [new WysiwygPreset()]);
     *
     *   return (
     *     <Remirror manager={manager} onError={onError}>
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
}
export { UseRemirrorProps }
export { UseRemirrorProps as UseRemirrorProps_alias_1 }
export { UseRemirrorProps as UseRemirrorProps_alias_2 }

declare interface UseRemirrorReturn<Extension extends AnyExtension> {
    /**
     * The manager which is required by the `<Remirror />` component.
     */
    manager: RemirrorManager<Extension>;
    /**
     * The initial editor state based on the provided `content` and `selection`
     * properties. If none were passed in then the state is created from the
     * default empty doc node as defined by the editor Schema.
     */
    state: EditorState;
    /**
     * A function to update the state when you intend to make the editor
     * controlled.
     *
     * ```ts
     * import React, { useCallback } from 'react';
     * import { useRemirror, Provider } from '@remirror/react';
     * import { htmlToProsemirrorNode } from 'remirror';
     *
     * const Editor = () => {
     *   const { manager, setState, state } = useRemirror({
     *     content: '<p>Some content</p>',
     *     stringHandler: htmlToProsemirrorNode
     *   });
     *
     *   return (
     *     <Remirror
     *       onChange={useCallback((changeProps) => setState(changeProps.state), [setState])}
     *       state={state}
     *       manager={manager}
     *     />
     *   );
     * }
     * ```
     */
    setState: (state: EditorState) => void;
    /**
     * Syntactic sugar for using the `setState` method directly on the `<Remirror
     * />` component.
     *
     * ```ts
     * import React from 'react';
     * import { useRemirror, Provider } from '@remirror/react';
     * import { htmlToProsemirrorNode } from 'remirror';
     *
     * const Editor = () => {
     *   const { manager, onChange, state } = useRemirror({
     *     content: '<p>Some content</p>',
     *     stringHandler: htmlToProsemirrorNode
     *   });
     *
     *   return <Remirror onChange={onChange} state={state} manager={manager} />
     * }
     * ```
     */
    onChange: RemirrorEventListener<Extension>;
    /**
     * A function that provides the editor context. This is only available after
     * the `<Remirror />` component is mounted. Calling it in the very first
     * render phase will cause an error to be thrown.
     */
    getContext: () => ReactFrameworkOutput<Extension> | undefined;
}
export { UseRemirrorReturn }
export { UseRemirrorReturn as UseRemirrorReturn_alias_1 }
export { UseRemirrorReturn as UseRemirrorReturn_alias_2 }

/**
 * A core hook which provides the the currently selected text.
 *
 * ```tsx
 * import { useSelectedText } from '@remirror/react';
 *
 * const RandomSpan = () => {
 *   const text = useSelectedText();
 *
 *   return text  && <span>{text}</span>;
 * }
 * ````
 *
 * Return the value of the currently selected text. When the text selection is empty
 */
declare function useSelectedText(): string | undefined;
export { useSelectedText }
export { useSelectedText as useSelectedText_alias_1 }
export { useSelectedText as useSelectedText_alias_2 }

/**
 * Provide the reason for the latest state update with boolean flags.
 */
declare function useUpdateReason(): UpdateReason;
export { useUpdateReason }
export { useUpdateReason as useUpdateReason_alias_1 }
export { useUpdateReason as useUpdateReason_alias_2 }

export { }
