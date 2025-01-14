import type { CustomHandler, EditorState, ProsemirrorPlugin } from '@remirror/core-types';
import { Suggester, SuggestState } from '@remirror/pm/suggest';
import { Helper, PlainExtension } from '../extension';
import type { AddCustomHandler } from '../extension/base-class';
export interface SuggestOptions {
    /**
     * The custom handler which enables adding `suggesters`.
     */
    suggester: CustomHandler<Suggester>;
}
/**
 * This extension allows others extension to add the `createSuggesters` method
 * for adding the prosemirror-suggest functionality to your editor.
 *
 * @remarks
 *
 * This is an example of adding custom functionality to an extension via the
 * `ExtensionParameterMethods`.
 *
 * @category Builtin Extension
 */
export declare class SuggestExtension extends PlainExtension<SuggestOptions> {
    get name(): "suggest";
    /**
     * Create the `addSuggester` method and `removeSuggester` methods to the
     * extension store.
     *
     * This can be used by extensions to conditionally add suggestion support.
     */
    onCreate(): void;
    /**
     * Add the `prosemirror-suggest` plugin to the editor.
     */
    createExternalPlugins(): ProsemirrorPlugin[];
    /**
     * Allow additional `Suggesters` to be added to the editor. This can be used
     * by `React` to create hooks.
     */
    onAddCustomHandler: AddCustomHandler<SuggestOptions>;
    /**
     * Get the suggest plugin state.
     *
     * This may be removed at a later time.
     *
     * @experimental
     */
    getSuggestState(state?: EditorState): Helper<SuggestState>;
    /**
     * Get some helpful methods from the SuggestPluginState.
     */
    getSuggestMethods(): Helper<Pick<SuggestState, 'addIgnored' | 'clearIgnored' | 'removeIgnored' | 'ignoreNextExit' | 'setMarkRemoved' | 'findMatchAtPosition' | 'findNextTextSelection' | 'setLastChangeFromAppend'>>;
    /**
     * Check to see whether the provided name is the currently active
     * suggester.
     *
     * @param name - the name of the suggester to include
     */
    isSuggesterActive(name: string | string[]): Helper<boolean>;
}
declare global {
    namespace Remirror {
        interface ExcludeOptions {
            /**
             * Whether to exclude the suggesters plugin configuration for the
             * extension.
             *
             * @defaultValue undefined
             */
            suggesters?: boolean;
        }
        interface BaseExtension {
            /**
             * Create suggesters which respond to an activation `char` or regex
             * pattern within the editor instance. The onChange handler provided is
             * called with the data around the matching text.
             *
             * @remarks
             *
             * Suggesters are a  powerful way of building up the editors
             * functionality. They can support `@` mentions, `#` tagging, `/` special
             * command keys which trigger action menus and much more.
             */
            createSuggesters?(): Suggester[] | Suggester;
        }
        interface AllExtensions {
            suggest: SuggestExtension;
        }
        interface ExtensionStore {
            /**
             * Add a suggester.
             */
            addSuggester(suggester: Suggester): void;
            /**
             * Remove a suggester.
             */
            removeSuggester(suggester: Suggester | string): void;
        }
        interface AllExtensions {
            suggest: SuggestExtension;
        }
    }
}
