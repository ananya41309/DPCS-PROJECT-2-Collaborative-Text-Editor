import { ExtensionPriority, NamedShortcut } from '@remirror/core-constants';
import type { CustomHandler, KeyBindingProps, KeyBindings, ProsemirrorPlugin, Shape } from '@remirror/core-types';
import { Helper, PlainExtension } from '../extension';
import type { AddCustomHandler } from '../extension/base-class';
import type { OnSetOptionsProps } from '../types';
import { KeybindingDecoratorOptions } from './builtin-decorators';
export interface KeymapOptions {
    /**
     * The shortcuts to use for named keybindings in the editor.
     *
     * @defaultValue 'default'
     */
    shortcuts?: KeyboardShortcuts;
    /**
     * Determines whether a backspace after an input rule has been applied should
     * reverse the effect of the input rule.
     *
     * @defaultValue true
     */
    undoInputRuleOnBackspace?: boolean;
    /**
     * Determines whether the escape key selects the current node.
     *
     * @defaultValue false
     */
    selectParentNodeOnEscape?: boolean;
    /**
     * When true will exclude the default prosemirror keymap.
     *
     * @remarks
     *
     * You might want to set this to true if you want to fully customise the
     * keyboard mappings for your editor. Otherwise it is advisable to leave it
     * unchanged.
     *
     * @defaultValue false
     */
    excludeBaseKeymap?: boolean;
    /**
     * Whether to support exiting marks when the left and right array keys are
     * pressed.
     *
     * Can be set to
     *
     * - `true` - enables exits from both the entrance and the end of the mark
     */
    exitMarksOnArrowPress?: boolean;
    /**
     * The implementation for the extra keybindings added to the settings.
     *
     * @remarks
     *
     * This allows for you to add extra key mappings which will be checked before
     * the default keymaps, if they return false then the default keymaps are
     * still checked.
     *
     * No key mappings are removed in this process.
     *
     * ```ts
     * const extension = BaseKeymapExtension.create({ keymap: {
     *   Enter({ state, dispatch }) {
     *     //... Logic
     *     return true;
     *   },
     * }});
     * ```
     */
    keymap?: CustomHandler<PrioritizedKeyBindings>;
}
/**
 * This extension allows others extension to use the `createKeymaps` method.
 *
 * @remarks
 *
 * Keymaps are the way of controlling how the editor responds to a keypress and
 * different key combinations.
 *
 * Without this extension most of the shortcuts and behaviors we have come to
 * expect from text editors would not be provided.
 *
 * @category Builtin Extension
 */
export declare class KeymapExtension extends PlainExtension<KeymapOptions> {
    get name(): "keymap";
    /**
     * The custom keybindings added by the handlers. In react these can be added
     * via `hooks`.
     */
    private extraKeyBindings;
    /**
     * Track the backward exits from a mark to allow double tapping the left arrow
     * to move to the previous block node.
     */
    private readonly backwardMarkExitTracker;
    /**
     * The underlying keydown handler.
     */
    private keydownHandler;
    /**
     * Get the shortcut map.
     */
    private get shortcutMap();
    /**
     * This adds the `createKeymap` method functionality to all extensions.
     */
    onCreate(): void;
    /** Add the created keymap to the available plugins. */
    createExternalPlugins(): ProsemirrorPlugin[];
    private setupKeydownHandler;
    /**
     * Updates the stored keymap bindings on this extension.
     */
    private generateKeymapBindings;
    /**
     * Handle exiting the mark forwards.
     */
    arrowRightShortcut(props: KeyBindingProps): boolean;
    /**
     * Handle the arrow left key to exit the mark.
     */
    arrowLeftShortcut(props: KeyBindingProps): boolean;
    /**
     * Handle exiting the mark forwards.
     */
    backspace(props: KeyBindingProps): boolean;
    /**
     * Create the base keymap and give it a low priority so that all other keymaps
     * override it.
     */
    createKeymap(): PrioritizedKeyBindings;
    /**
     * Get the real shortcut name from the named shortcut.
     */
    getNamedShortcut(shortcut: string, options?: Shape): Helper<string[]>;
    /**
     * @internalremarks
     *
     * Think about the case where bindings are disposed of and then added in a
     * different position in the `extraKeyBindings` array. This is especially
     * pertinent when using hooks.
     */
    protected onAddCustomHandler: AddCustomHandler<KeymapOptions>;
    /**
     * Handle changes in the dynamic properties.
     */
    protected onSetOptions(props: OnSetOptionsProps<KeymapOptions>): void;
    private sortKeymaps;
    /**
     * The method for rebuilding all the extension keymaps.
     *
     * 1. Rebuild keymaps.
     * 2. Replace `this.keydownHandler` with the new keydown handler.
     */
    private readonly rebuildKeymap;
    /**
     * Exits the mark forwards when at the end of a block node.
     */
    private exitMarkForwards;
    private exitNodeBackwards;
    /**
     * Exit a mark when at the beginning of a block node.
     */
    private exitMarkBackwards;
}
/**
 * A shortcut map which is used by the `KeymapExtension`.
 */
export type ShortcutMap = Record<NamedShortcut, string>;
/**
 * The default named shortcuts used within `remirror`.
 */
export declare const DEFAULT_SHORTCUTS: ShortcutMap;
/**
 * Shortcuts used within google docs.
 */
export declare const GOOGLE_DOC_SHORTCUTS: ShortcutMap;
export declare const keyboardShortcuts: {
    default: ShortcutMap;
    googleDoc: ShortcutMap;
};
export type KeyboardShortcuts = keyof typeof keyboardShortcuts | ShortcutMap;
/**
 * KeyBindings as a tuple with priority and the keymap.
 */
export type KeyBindingsTuple = [priority: ExtensionPriority, bindings: KeyBindings];
/**
 * `KeyBindings` as an object or prioritized tuple.
 */
export type PrioritizedKeyBindings = KeyBindings | KeyBindingsTuple;
declare global {
    namespace Remirror {
        interface ExcludeOptions {
            /**
             * Whether to exclude keybindings support. This is not a recommended
             * action and can break functionality.
             *
             * @defaultValue undefined
             */
            keymap?: boolean;
        }
        interface ExtensionStore {
            /**
             * When called this will run through every `createKeymap` method on every
             * extension to recreate the keyboard bindings.
             *
             * @remarks
             *
             * **NOTE** - This will not update keybinding for extensions that
             * implement their own keybinding functionality (e.g. any plugin using
             * Suggestions)
             */
            rebuildKeymap: () => void;
        }
        interface BaseExtension {
            /**
             * Stores all the keybinding names and options for this decoration that
             * have been added as decorators to the extension instance. This is used
             * by the `KeymapExtension` to pick the commands and store metadata
             * attached to each command.
             *
             * @internal
             */
            decoratedKeybindings?: Record<string, KeybindingDecoratorOptions>;
            /**
             * Add keymap bindings for this extension.
             *
             * @param parameter - schema parameter with type included
             */
            createKeymap?(extractShortcutNames: (shortcut: string) => string[]): PrioritizedKeyBindings;
        }
        interface AllExtensions {
            keymap: KeymapExtension;
        }
    }
}
