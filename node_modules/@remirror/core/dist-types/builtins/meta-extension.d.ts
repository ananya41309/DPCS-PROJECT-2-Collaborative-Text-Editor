import type { Static, Transaction } from '@remirror/core-types';
import { AnyExtension, PlainExtension } from '../extension';
import type { CreateExtensionPlugin } from '../types';
export interface MetaOptions {
    /**
     * Set to true to capture meta data on commands and keybindings. This creates
     * a wrapper around every command and keybinding and as a result it may lead
     * to a performance penalty.
     */
    capture?: Static<boolean>;
}
/**
 * Support meta data for commands and key bindings.
 *
 * Metadata is dded to all commands and keybindings and that information is
 * provided to the `onChange` handle whenever the state is updated.
 *
 * @internalremarks
 *
 * TODO capture keybindings as well. This will be more difficult since
 * keybindings can dynamically be added to the editor.
 */
export declare class MetaExtension extends PlainExtension<MetaOptions> {
    get name(): "meta";
    onCreate(): void;
    /**
     * This is here to provide a
     */
    createPlugin(): CreateExtensionPlugin;
    /**
     * Intercept command names and attributes.
     */
    private captureCommands;
    /**
     * Intercept command name and attributes.
     */
    private captureKeybindings;
    /**
     * Get the command metadata.
     */
    private getCommandMeta;
    private setCommandMeta;
}
interface CommandMetadata {
    type: 'command';
    /**
     * Was this called as part of a chain?
     */
    chain: boolean;
    /**
     * Is this a decorated command?
     */
    decorated: boolean;
    /**
     * The name of the extension.
     */
    extension: string;
    /**
     * The name of the command that was called.
     */
    name: string;
}
interface KeyBindingMetadata {
    type: 'keyBinding';
    /**
     * The name of the extension used.
     */
    extension: string;
    /**
     * The shortcut used to invoke this keybinding.
     */
    shortcut: string;
}
export type Metadata = CommandMetadata | KeyBindingMetadata;
declare global {
    namespace Remirror {
        interface ManagerStore<Extension extends AnyExtension> {
            /**
             * Get the command metadata for the transaction.
             * @internal
             */
            getCommandMeta(tr: Transaction): Metadata[];
        }
        interface AllExtensions {
            meta: MetaExtension;
        }
    }
}
export {};
