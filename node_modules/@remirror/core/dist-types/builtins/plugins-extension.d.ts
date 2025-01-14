import type { Handler, ProsemirrorPlugin } from '@remirror/core-types';
import { EditorState, Plugin, PluginKey } from '@remirror/pm/state';
import { AnyExtension, AnyExtensionConstructor, GetNameUnion, PlainExtension } from '../extension';
import type { AppendLifecycleProps, ApplyStateLifecycleProps, CreateExtensionPlugin } from '../types';
export interface PluginsOptions {
    /**
     * The event handler which can be used by hooks to listen to state updates
     * when they are being applied to the editor.
     */
    applyState?: Handler<(props: ApplyStateLifecycleProps) => void>;
    /**
     * The event handler which can be used by hooks to listen to intercept updates
     * to the transaction.
     */
    appendTransaction?: Handler<(props: AppendLifecycleProps) => void>;
}
/**
 * This extension allows others extension to add the `createPlugin` method using
 * Prosemirror Plugins.
 *
 * @remarks
 *
 * This is an example of adding custom functionality to an extension via the
 * `ExtensionParameterMethods`.
 *
 * @category Builtin Extension
 */
export declare class PluginsExtension extends PlainExtension<PluginsOptions> {
    get name(): "plugins";
    /**
     * All plugins created by other extension as well.
     */
    private plugins;
    /**
     * The plugins added via the manager (for reference only).
     */
    private managerPlugins;
    /**
     * Called when the state is is being applied after an update.
     */
    private readonly applyStateHandlers;
    /**
     * Called when the state is first initialized.
     */
    private readonly initStateHandlers;
    /**
     * Handlers for the `onAppendTransaction` lifecycle method.
     */
    private readonly appendTransactionHandlers;
    /**
     * Store the plugin keys.
     */
    private readonly pluginKeys;
    /**
     * Store state getters for the extension.
     */
    private readonly stateGetters;
    /**
     * This extension is responsible for adding state to the editor.
     */
    onCreate(): void;
    /**
     * Create a plugin which adds the [[`onInitState`]] and [[`onApplyState`]]
     * lifecycle methods.
     */
    createPlugin(): CreateExtensionPlugin<void>;
    /**
     * Get all the plugins from the extension.
     */
    private extractExtensionPlugins;
    private readonly getPluginStateCreator;
    /**
     * Add or replace a plugin.
     */
    private updatePlugins;
    private readonly getStateByName;
    /**
     * Add the plugin specific properties and methods to the manager and extension
     * store.
     */
    private updateExtensionStore;
    /**
     * Reruns the `createPlugin` and `createExternalPlugins` methods of the
     * provided extension.
     *
     * ```ts
     * // From within an extension
     * this.store.updateExtensionPlugins(this);
     * ```
     */
    private updateExtensionPlugins;
    /**
     * Applies the store plugins to the state. If any have changed then it will be
     * updated.
     */
    private dispatchPluginUpdate;
}
declare global {
    namespace Remirror {
        interface ManagerSettings {
            /**
             * Add custom plugins to the manager while creating it.
             *
             * Plugins created via the manager are given priority over all extension
             * based plugins. There's scope for adding a priority based model for
             * inserting plugins, but it seems like a sane default until that's
             * available.
             */
            plugins?: ProsemirrorPlugin[];
        }
        interface ExtensionStore {
            /**
             * Retrieve the state for any given extension name. This will throw an
             * error if the extension identified by that name doesn't implement the
             * `createPlugin` method.
             *
             * @param name - the name of the extension
             *
             * @remarks
             *
             * ```ts
             * const pluginState = getPluginState(extension.name);
             * ```
             */
            getPluginState<State>(name: string): State;
            /**
             * Add the new plugins. If previous plugins are provided then also remove
             * the previous plugins.
             *
             * ```ts
             * this.store.updatePlugins(this.createExternalPlugins(), this.externalPlugins);
             * ```
             *
             * @param plugins - the plugins to add
             * @param previousPlugins - the plugins to remove
             */
            updatePlugins(plugins: ProsemirrorPlugin[], previousPlugins?: ProsemirrorPlugin[]): void;
            /**
             * Reruns the `createPlugin` and `createExternalPlugins` methods of the
             * provided extension.
             *
             * This will also automatically update the state with the newly generated
             * plugins by dispatching an update.
             *
             * ```ts
             * // From within an extension
             * this.store.updateExtensionPlugins(this);
             * this.store.dispatchPluginUpdate();
             * ```
             *
             * @param extension - the extension instance, constructor or name.
             */
            updateExtensionPlugins(extension: AnyExtension | AnyExtensionConstructor | string): void;
            /**
             * Applies the store plugins to the state. If any have changed then it
             * will be updated.
             */
            dispatchPluginUpdate(): void;
        }
        interface ManagerStore<Extension extends AnyExtension> {
            /**
             * All of the plugins combined together from all sources
             */
            plugins: ProsemirrorPlugin[];
            /**
             * Retrieve the state for a given extension name. This will throw an error
             * if the extension doesn't exist.
             *
             * @param name - the name of the extension
             */
            getPluginState: <State>(name: GetNameUnion<Extension>) => State;
            /**
             * All the plugin keys available to be used by plugins.
             */
            pluginKeys: Record<string, PluginKey>;
        }
        interface ExcludeOptions {
            /**
             * Whether to exclude the extension's plugin
             *
             * @defaultValue undefined
             */
            plugins?: boolean;
        }
        interface BaseExtension {
            /**
             * The plugin key for custom plugin created by this extension. This only
             * exists when there is a valid `createPlugin` method on the extension.
             *
             * This can be used to set and retrieve metadata.
             *
             * ```ts
             * const meta = tr.getMeta(this.pluginKey);
             * ```
             */
            pluginKey: PluginKey;
            /**
             * The plugin that was created by the `createPlugin` method. This only
             * exists for extension which implement that method.
             */
            plugin: Plugin;
            /**
             * The external plugins created by the `createExternalPlugins` method.
             */
            externalPlugins: Plugin[];
            /**
             * Retrieve the state of the custom plugin for this extension. This will
             * throw an error if the extension doesn't have a valid `createPlugin`
             * method.
             *
             * @remarks
             *
             * ```ts
             * const pluginState = this.getPluginState();
             * ```
             *
             * This is only available after the initialize stage of the editor manager
             * lifecycle.
             *
             * If you would like to use it before that e.g. in the decorations prop of
             * the `createPlugin` method, you can call it with a current state which
             * will be used to retrieve the plugin state.
             *
             * Please note that when using this in the decorations callback it is
             * advisable to pass in the `state` argument in case the callback is
             * called before the framework, or the view have been initialized.
             */
            getPluginState: <State>(state?: EditorState) => State;
            /**
             * Create a custom plugin directly in the editor.
             *
             * @remarks
             *
             * A unique `key` is automatically applied to enable easier retrieval of
             * the plugin state.
             *
             * ```ts
             * import { CreateExtensionPlugin } from 'remirror';
             *
             * class MyExtension extends PlainExtension {
             *   get name() {
             *     return 'me' as const;
             *   }
             *
             *   createPlugin(): CreateExtensionPlugin {
             *     return {
             *       props: {
             *         handleKeyDown: keydownHandler({
             *           Backspace: handler,
             *           'Mod-Backspace': handler,
             *           Delete: handler,
             *           'Mod-Delete': handler,
             *           'Ctrl-h': handler,
             *           'Alt-Backspace': handler,
             *           'Ctrl-d': handler,
             *           'Ctrl-Alt-Backspace': handler,
             *           'Alt-Delete': handler,
             *           'Alt-d': handler,
             *         }),
             *         decorations: state => {
             *           const pluginState = this.getPluginState(state);
             *           pluginState.setDeleted(false);
             *           return pluginState.decorationSet;
             *         },
             *       },
             *     }
             *   }
             * }
             * ```
             */
            createPlugin?(): CreateExtensionPlugin;
            /**
             * Register third party plugins when this extension is placed into the
             * editor.
             *
             * @remarks
             *
             * Some plugins (like the table plugin) consume several different plugins,
             * creator method allows you to return a list of plugins you'd like to
             * support.
             */
            createExternalPlugins?(): ProsemirrorPlugin[];
        }
        interface AllExtensions {
            plugins: PluginsExtension;
        }
    }
}
