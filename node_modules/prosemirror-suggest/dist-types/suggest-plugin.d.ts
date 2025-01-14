import { Plugin } from 'prosemirror-state';
import { SuggestState } from './suggest-state';
import type { EditorState, Suggester, Transaction } from './suggest-types';
/**
 * Get the state of the suggest plugin.
 *
 * @param state - the editor state.
 */
export declare function getSuggestPluginState(state: EditorState): SuggestState;
/**
 * Add a new suggester or replace it if the name already exists in the existing
 * configuration.
 *
 * Will return a function for disposing of the added suggester.
 */
export declare function addSuggester(state: EditorState, suggester: Suggester): () => void;
/**
 * Call this method with a transaction to skip the suggest plugin checks for the
 * next update.
 *
 * This can be used for updates that don't need to trigger a recheck of the
 * suggest state.
 */
export declare function ignoreUpdateForSuggest(tr: Transaction): void;
/**
 * Remove a suggester if it exists. Pass in the name or the full suggester
 * object.
 */
export declare function removeSuggester(state: EditorState, suggester: Suggester | string): void;
/**
 * This creates a suggest plugin with all the suggesters that you provide.
 *
 * The priority of the suggesters is the order in which they are passed into
 * this function.
 *
 * - `const plugin = suggest(two, one, three)` - Here `two` will be checked
 *   first, then `one` and then `three`.
 *
 * Only one suggester can match at any given time. The order and specificity of
 * the regex parameters help determines which suggester will be active.
 *
 * @param suggesters - a list of suggesters in the order they should be
 * evaluated.
 */
export declare function suggest(...suggesters: Suggester[]): Plugin<SuggestState>;
