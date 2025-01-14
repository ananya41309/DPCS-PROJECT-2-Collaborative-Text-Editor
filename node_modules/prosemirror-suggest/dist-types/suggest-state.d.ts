import { PluginKey, Selection, TextSelection } from 'prosemirror-state';
import { DecorationSet } from 'prosemirror-view';
import type { AddIgnoredProps, EditorState, EditorStateProps, EditorView, RemoveIgnoredProps, ResolvedPos, Suggester, SuggestMatch, Transaction, TransactionProps } from './suggest-types';
/**
 * The `prosemirror-suggest` state which manages the list of suggesters.
 */
export declare class SuggestState {
    #private;
    /**
     * Create an instance of the SuggestState class.
     */
    static create(suggesters: Suggester[]): SuggestState;
    /**
     * Holds a copy of the view
     */
    private view;
    /**
     * The set of all decorations.
     */
    get decorationSet(): DecorationSet;
    /**
     * True when the most recent change was to remove a mention.
     *
     * @remarks
     *
     * This is needed because sometimes removing a prosemirror `Mark` has no
     * effect. Hence we need to keep track of whether it's removed and then later
     * in the apply step check that a removal has happened and reset the
     * `handlerMatches` to prevent an infinite loop.
     */
    get removed(): boolean;
    /**
     * Returns the current active suggester state field if one exists
     */
    get match(): Readonly<SuggestMatch> | undefined;
    /**
     * Create the state for the `prosemirror-suggest` plugin.
     *
     * @remarks
     *
     * Each suggester must provide a name value which is globally unique since it
     * acts as the identifier.
     *
     * It is possible to register multiple suggesters with identical `char`
     * properties. The matched suggester is based on the specificity of the
     * `regex` and the order in which they are passed in. Earlier suggesters are
     * prioritized.
     */
    constructor(suggesters: Suggester[]);
    /**
     * Initialize the SuggestState with a view which is stored for use later.
     */
    init(view: EditorView): this;
    /**
     * Sets the removed property to be true.
     *
     * This is useful when working with marks.
     */
    readonly setMarkRemoved: () => void;
    /**
     * Create the props which should be passed into each action handler
     */
    private createProps;
    /**
     * Check whether the exit callback is valid at this time.
     */
    private shouldRunExit;
    /**
     * Find the next text selection from the current selection.
     */
    readonly findNextTextSelection: (selection: Selection) => TextSelection | void;
    /**
     * Update all the suggesters with the next valid selection. This is called
     * within the `appendTransaction` ProseMirror method before any of the change
     * handlers are called.
     *
     * @internal
     */
    updateWithNextSelection(tr: Transaction): void;
    /**
     * Call the `onChange` handlers.
     *
     * @internal
     */
    changeHandler(tr: Transaction, appendTransaction: boolean): void;
    /**
     * Update the current ignored decorations based on the latest changes to the
     * prosemirror document.
     */
    private mapIgnoredDecorations;
    /**
     * This sets the next exit to not trigger the exit reason inside the
     * `onChange` callback.
     *
     * This can be useful when you trigger a command, that exists the suggestion
     * match and want to prevent further onChanges from occurring for the
     * currently active suggester.
     */
    readonly ignoreNextExit: () => void;
    /**
     * Ignores the match specified. Until the match is deleted no more `onChange`
     * handler will be triggered. It will be like the match doesn't exist.
     *
     * @remarks
     *
     * All we need to ignore is the match character. This means that any further
     * matches from the activation character will be ignored.
     */
    readonly addIgnored: ({ from, name, specific }: AddIgnoredProps) => void;
    /**
     * Removes a single match character from the ignored decorations.
     *
     * @remarks
     *
     * After this point event handlers will begin to be called again for the match
     * character.
     */
    readonly removeIgnored: ({ from, name }: RemoveIgnoredProps) => void;
    /**
     * Removes all the ignored sections of the document. Once this happens
     * suggesters will be able to activate in the previously ignored sections.
     */
    readonly clearIgnored: (name?: string) => void;
    /**
     * Checks whether a match should be ignored.
     *
     * TODO add logic here to decide whether to ignore a match based on the active
     * node, or mark.
     */
    private shouldIgnoreMatch;
    /**
     * Reset the state.
     */
    private resetState;
    /**
     * Update the next state value.
     */
    private updateReasons;
    /**
     * A helper method to check is a match exists for the provided suggester name
     * at the provided position.
     */
    readonly findMatchAtPosition: ($pos: ResolvedPos, name?: string) => SuggestMatch | undefined;
    /**
     * Add a new suggest or replace it if it already exists.
     */
    addSuggester(suggester: Suggester): () => void;
    /**
     * Remove a suggester if it exists.
     */
    removeSuggester(suggester: Suggester | string): void;
    toJSON(): SuggestMatch | undefined;
    /**
     * Applies updates to the state to be used within the plugins apply method.
     *
     * @param - params
     */
    apply(props: TransactionProps & EditorStateProps): this;
    /**
     * Handle the decorations which wrap the mention while it is active and not
     * yet complete.
     */
    createDecorations(state: EditorState): DecorationSet;
    /**
     * Set that the last change was caused by an appended transaction.
     *
     * @internal
     */
    setLastChangeFromAppend: () => void;
}
/**
 * This key is stored to provide access to the plugin state.
 */
export declare const suggestPluginKey: PluginKey<any>;
