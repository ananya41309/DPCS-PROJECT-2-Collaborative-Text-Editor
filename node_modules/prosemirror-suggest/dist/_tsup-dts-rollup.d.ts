import { DecorationSet } from 'prosemirror-view';
import { PickPartial } from '@remirror/types';
import { Plugin as Plugin_2 } from 'prosemirror-state';
import { PluginKey } from 'prosemirror-state';
import * as PMModel from 'prosemirror-model';
import * as PMState from 'prosemirror-state';
import * as PMView from 'prosemirror-view';
import { Selection as Selection_2 } from 'prosemirror-state';
import { TextSelection } from 'prosemirror-state';

/**
 * The parameters needed for the [[`SuggestIgnoreProps.addIgnored`]] action
 * method available to the suggest plugin handlers.
 *
 * @remarks
 *
 * See:
 * - [[`RemoveIgnoredProps`]]
 */
declare interface AddIgnoredProps extends RemoveIgnoredProps {
    /**
     * When `false` this will ignore the range for all matching suggesters. When
     * true the ignored suggesters will only be the ones provided by the name.
     */
    specific?: boolean;
}
export { AddIgnoredProps }
export { AddIgnoredProps as AddIgnoredProps_alias_1 }

/**
 * Add a new suggester or replace it if the name already exists in the existing
 * configuration.
 *
 * Will return a function for disposing of the added suggester.
 */
declare function addSuggester(state: EditorState, suggester: Suggester): () => void;
export { addSuggester }
export { addSuggester as addSuggester_alias_1 }

/**
 * The potential reason for changes
 */
declare enum ChangeReason {
    /**
     * The user has entered or started a new suggestion.
     */
    Start = "start",
    /**
     * A changed happened to the character. This can be addition, deletion or
     * replacement.
     */
    Text = "change-character",
    /**
     * A change happened to the selection status which was not purely a move. The
     * selection area may have been increased.
     */
    SelectionInside = "selection-inside",
    /**
     * The cursor was moved.
     */
    Move = "move",
    /**
     * The user has moved from one suggestion to another suggestion earlier in the
     * document.
     */
    JumpBackward = "jump-backward-change",
    /**
     * The user has moved from one suggestion to another suggestion further along
     * in the document.
     */
    JumpForward = "jump-forward-change"
}
export { ChangeReason }
export { ChangeReason as ChangeReason_alias_1 }

/**
 * A function for checking whether the next selection is valid.
 *
 * It is called for all registered suggesters before any of the onChange
 * handlers are fired.
 *
 * @param $pos - the next valid position that supports text selections.
 * @param tr - the transaction that can be mutated when `appendTransaction` is
 * set to true.
 * @param matches - the possibly undefined exit and change matcher names. These
 * can be used to check if the name matches the current suggester.
 */
declare type CheckNextValidSelection = ($pos: ResolvedPos, tr: Transaction, matches: {
    change?: string;
    exit?: string;
}) => Transaction | null | void;
export { CheckNextValidSelection }
export { CheckNextValidSelection as CheckNextValidSelection_alias_1 }

/**
 * A parameter builder interface which compares the previous and next match.
 *
 * @remarks
 *
 * It is used within the codebase to determine the kind of change that has
 * occurred (i.e. change or exit see {@link SuggestReasonMap}) and the reason
 * for that that change. See {@link ExitReason} {@link ChangeReason}
 */
declare interface CompareMatchProps {
    /**
     * The initial match
     */
    prev: SuggestMatch;
    /**
     * The current match
     */
    next: SuggestMatch;
}
export { CompareMatchProps }
export { CompareMatchProps as CompareMatchProps_alias_1 }

/**
 * Create a regex expression which evaluate matches directly from the suggester
 * properties.
 */
declare function createRegexFromSuggester(props: CreateRegExpFromSuggesterProps): RegExp;
export { createRegexFromSuggester }
export { createRegexFromSuggester as createRegexFromSuggester_alias_1 }

declare interface CreateRegExpFromSuggesterProps extends Pick<Required<Suggester>, 'startOfLine' | 'char' | 'supportedCharacters' | 'matchOffset'>, Pick<Suggester, 'multiline' | 'caseInsensitive' | 'captureChar' | 'unicode'> {
}

/**
 * The default value for the suggester.
 */
declare const DEFAULT_SUGGESTER: PickPartial<Suggester>;
export { DEFAULT_SUGGESTER }
export { DEFAULT_SUGGESTER as DEFAULT_SUGGESTER_alias_1 }

declare interface DocChangedProps {
    /**
     * - `true` when there was a changed in the editor content.
     * - `false` when only the selection changed.
     *
     * TODO currently unused. Should be used to differentiate between a cursor
     * exit using the keyboard navigation and a document update change typing
     * invalid character, space, etc...
     */
    docChanged: boolean;
}
export { DocChangedProps }
export { DocChangedProps as DocChangedProps_alias_1 }

declare type EditorSchema = PMModel.Schema;
export { EditorSchema }
export { EditorSchema as EditorSchema_alias_1 }

declare type EditorState = PMState.EditorState;
export { EditorState }
export { EditorState as EditorState_alias_1 }

/**
 * A parameter builder interface containing the `state` property.
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare interface EditorStateProps {
    /**
     * A snapshot of the prosemirror editor state.
     */
    state: EditorState;
}
export { EditorStateProps }
export { EditorStateProps as EditorStateProps_alias_1 }

declare type EditorView = PMView.EditorView;
export { EditorView }
export { EditorView as EditorView_alias_1 }

/**
 * A parameter builder interface containing the `view` property.
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare interface EditorViewProps {
    /**
     * An instance of the ProseMirror editor `view`.
     */
    view: EditorView;
}
export { EditorViewProps }
export { EditorViewProps as EditorViewProps_alias_1 }

/**
 * The potential reasons for an exit of a mention.
 */
declare enum ExitReason {
    /**
     * The user has pasted some text with multiple characters or run a command
     * that adds multiple characters.
     *
     * `onExit` should be called but the previous match should be retested as it's
     * possible that it's been extended.
     */
    End = "exit-end",
    /**
     * The suggestion has been removed.
     */
    Removed = "delete",
    /**
     * The user has pasted some text with multiple characters or run a command
     * that adds multiple characters somewhere within the active suggestion. e.g.
     * `@abc` -> `@ab123 asdf aiti c`
     *
     * `onExit` should be called but the previous match should be retested as it's
     * possible that it's been extended.
     */
    Split = "exit-split",
    /**
     * The user has pasted some text with multiple characters or run a command
     * that adds multiple characters right after the initial multi-character. e.g.
     * `@abc` -> `@ this is newabc`
     *
     * In this case it is best to remove the mention completely.
     */
    InvalidSplit = "invalid-exit-split",
    /**
     * User has moved out of the suggestion at the end. This can happen via using
     * arrow keys, but can also be via the suggestion no longer matching as the
     * user types, a mouse click or custom command. All that has changed is the
     * cursor position.
     */
    MoveEnd = "move-end",
    /**
     * User has moved out of the suggestion but from the beginning. This can be
     * via the arrow keys but can also be via a mouse click or custom command. All
     * that changed is the cursor position.
     */
    MoveStart = "move-start",
    /**
     * The user has jumped to another suggestion which occurs afterwards in the
     * editor. This can be via a click, a keyboard jump or custom commands. In
     * this case since there is still an active suggestion it will trigger both an
     * `onExit` and `onChange` call.
     */
    JumpForward = "jump-forward-exit",
    /**
     * The user has jumped to another suggestion which occurs before the previous
     * suggestion in the editor. This can happen via a click, a keyboard jump
     * (END) or a custom command. In this case since there is still an active
     * suggestion it will trigger both an `onExit` and `onChange` call.
     */
    JumpBackward = "jump-backward-exit",
    /**
     * The user has selected some text outside the current selection, this can
     * trigger an exit. This can be from a triple click to select the line or
     * Ctrl-A to select all.
     */
    SelectionOutside = "selection-outside"
}
export { ExitReason }
export { ExitReason as ExitReason_alias_1 }

/**
 * Find a match for the provided matchers.
 */
declare function findFromSuggesters(props: FindFromSuggestersProps): SuggestMatch | undefined;
export { findFromSuggesters }
export { findFromSuggesters as findFromSuggesters_alias_1 }

declare interface FindFromSuggestersProps extends ResolvedPosProps, DocChangedProps {
    /**
     * The matchers to search through.
     */
    suggesters: Array<Required<Suggester>>;
    /**
     * When `true` the selection is empty.
     */
    selectionEmpty: boolean;
}

/**
 * Creates an array of the actions taken based on the current prev and next
 * state field
 */
export declare function findReason(props: FindReasonProps): SuggestReasonMap;

declare type FindReasonProps = EditorStateProps & ResolvedPosProps & Partial<CompareMatchProps> & object;

/**
 * Get the `char` from the `suggester` as regex.
 */
export declare function getCharAsRegex(char: RegExp | string): RegExp;

/**
 * Takes the passed through `suggester` and adds all the missing default values.
 */
declare function getSuggesterWithDefaults(suggester: Suggester): Required<Suggester>;
export { getSuggesterWithDefaults }
export { getSuggesterWithDefaults as getSuggesterWithDefaults_alias_1 }

/**
 * Get the state of the suggest plugin.
 *
 * @param state - the editor state.
 */
declare function getSuggestPluginState(state: EditorState): SuggestState;
export { getSuggestPluginState }
export { getSuggestPluginState as getSuggestPluginState_alias_1 }

/**
 * This can be added to the meta data of an update to let the suggestion plugin
 * know that it should ignore the update.
 */
declare const IGNORE_SUGGEST_META_KEY = "__ignore_prosemirror_suggest_update__";
export { IGNORE_SUGGEST_META_KEY }
export { IGNORE_SUGGEST_META_KEY as IGNORE_SUGGEST_META_KEY_alias_1 }

/**
 * Call this method with a transaction to skip the suggest plugin checks for the
 * next update.
 *
 * This can be used for updates that don't need to trigger a recheck of the
 * suggest state.
 */
declare function ignoreUpdateForSuggest(tr: Transaction): void;
export { ignoreUpdateForSuggest }
export { ignoreUpdateForSuggest as ignoreUpdateForSuggest_alias_1 }

/**
 * Is this a change in the current suggestion (added or deleted characters)?
 */
export declare function isChange(compare: Partial<CompareMatchProps>): compare is CompareMatchProps;

/**
 * Check that that the passed in value is a [[`ChangeReason`]].
 */
declare function isChangeReason(value: unknown): value is ChangeReason;
export { isChangeReason }
export { isChangeReason as isChangeReason_alias_1 }

/**
 * Are we entering a new suggestion?
 */
export declare function isEntry(compare: Partial<CompareMatchProps>): compare is Pick<CompareMatchProps, 'next'>;

/**
 * Are we exiting a suggestion?
 */
export declare function isExit(compare: Partial<CompareMatchProps>): compare is Pick<CompareMatchProps, 'prev'>;

/**
 * Check that the passed in value is an [[`ExitReason`]].
 */
declare function isExitReason(value: unknown): value is ExitReason;
export { isExitReason }
export { isExitReason as isExitReason_alias_1 }

/**
 * Is this is a repetition of the same check?
 */
export declare function isIdentical(compare: Partial<CompareMatchProps>, match: SuggestReasonMap): compare is CompareMatchProps;

/**
 * Checks that the reason was caused by a split at a point where there is no
 * query.
 */
declare function isInvalidSplitReason(value?: unknown): value is ExitReason.InvalidSplit;
export { isInvalidSplitReason }
export { isInvalidSplitReason as isInvalidSplitReason_alias_1 }

/**
 * Is this a jump from one suggestion to another?
 */
export declare function isJump(compare: Partial<CompareMatchProps>): compare is CompareMatchProps;

/**
 * Checks to see if this is a jump reason.
 */
declare function isJumpReason(map: SuggestReasonMap): map is Required<SuggestReasonMap>;
export { isJumpReason }
export { isJumpReason as isJumpReason_alias_1 }

/**
 * Has the cursor moved within the current suggestion (added or deleted
 * characters)?
 */
export declare function isMove(compare: Partial<CompareMatchProps>): compare is CompareMatchProps;

/**
 * Checks that the reason was caused by a deletion.
 */
declare function isRemovedReason(value?: unknown): value is ExitReason.Removed;
export { isRemovedReason }
export { isRemovedReason as isRemovedReason_alias_1 }

declare function isSelectionChangeReason(value: unknown): value is (typeof selectionChangeReasons)[number];
export { isSelectionChangeReason }
export { isSelectionChangeReason as isSelectionChangeReason_alias_1 }

/**
 * An exit which is caused by a change in the selection and no other change in
 * the document.
 */
declare function isSelectionExitReason(value: unknown): value is (typeof selectionExitReasons)[number];
export { isSelectionExitReason }
export { isSelectionExitReason as isSelectionExitReason_alias_1 }

/**
 * Checks that the reason passed is a split reason. This typically means that we
 * should default to a partial update / creation of the mention.
 */
declare function isSplitReason(value?: unknown): value is ExitReason.Split;
export { isSplitReason }
export { isSplitReason as isSplitReason_alias_1 }

/**
 * Predicate checking whether the selection is a `TextSelection`.
 *
 * @param value - the value to check
 */
export declare function isTextSelection(value: unknown): value is TextSelection;

/**
 * True when the match is currently active (i.e. it's query has a value)
 */
declare function isValidMatch(match: SuggestMatch | undefined): match is SuggestMatch;
export { isValidMatch }
export { isValidMatch as isValidMatch_alias_1 }

/**
 * Makes specified keys of an interface optional while the rest stay the same.
 */
declare type MakeOptional<Type extends object, Keys extends keyof Type> = Omit<Type, Keys> & {
    [Key in Keys]+?: Type[Key];
};
export { MakeOptional }
export { MakeOptional as MakeOptional_alias_1 }

/**
 * Check whether the mark is active anywhere between `$from` and `$end`.
 *
 * Currently this is not doing exactly what it should. I've decided to be lazy
 * and only check the following.
 *
 * - Do any of the requested marks span the entire range using `rangeHasMarks`?
 * - Does the starting position have a mark?
 * - Does the cursor have a mark?
 * - Does the end position have a mark?
 *
 * In reality I should also check for each position within the range to see if a
 * target mark is active but I won't for now.
 */
declare function markActiveInRange(resolvedRange: Omit<ResolvedRangeWithCursor, '$cursor'>, marks: string[]): boolean;
export { markActiveInRange }
export { markActiveInRange as markActiveInRange_alias_1 }

/**
 * The match value with the full and partial text.
 *
 * @remarks
 *
 * For a suggester with a char `@` then the following text `@ab|c` where `|` is
 * the current cursor position will create a queryText with the following
 * signature.
 *
 * ```json
 * { "full": "abc", "partial": "ab" }
 * ```
 */
declare interface MatchValue {
    /**
     * The complete match independent of the cursor position.
     */
    full: string;
    /**
     * This value is a partial match which ends at the position of the cursor
     * within the matching text.
     */
    partial: string;
}
export { MatchValue }
export { MatchValue as MatchValue_alias_1 }

/**
 * Check if the provided position has the given marks.
 */
declare function positionHasMarks($pos: ResolvedPos, marks: string[]): boolean;
export { positionHasMarks }
export { positionHasMarks as positionHasMarks_alias_1 }

declare type ProsemirrorNode = PMModel.Node;
export { ProsemirrorNode }
export { ProsemirrorNode as ProsemirrorNode_alias_1 }

/**
 * Check if the entire matching range `from` the start point all the way through
 * `to` the end point, has any of the provided marks that span it.
 */
declare function rangeHasMarks(resolvedRange: Omit<ResolvedRangeWithCursor, '$cursor'>, marks: string[]): boolean;
export { rangeHasMarks }
export { rangeHasMarks as rangeHasMarks_alias_1 }

/**
 * A range with the cursor attached.
 *
 * - `from` - describes the start position of the query, including the
 *   activation character.
 * - `to` - describes the end position of the match, so the point at which there
 *   is no longer an active suggest.
 * - `cursor` describes the cursor potion within that match.
 *
 * Depending on the use case you can decide which is most important in your
 * application.
 *
 * If you want to replace the whole match regardless of cursor position, then
 * `from` and `to` are all that you need.
 *
 * If you want to split the match and only replace up until the cursor while
 * preserving the remaining part of the match, then you can use `from`, `cursor`
 * for the initial replacement and then take the value between `cursor` and `to`
 * and append it in whatever way you feel works.
 */
declare interface RangeWithCursor {
    /**
     * The absolute starting point of the matching string.
     */
    from: number;
    /**
     * The current cursor position, which may not be at the end of the full match.
     */
    cursor: number;
    /**
     * The absolute end of the matching string.
     */
    to: number;
}
export { RangeWithCursor }
export { RangeWithCursor as RangeWithCursor_alias_1 }

/**
 * A parameter builder interface which adds the match property.
 *
 * @remarks
 *
 * This is used to build parameters for {@link Suggester} handler methods.
 *
 * @typeParam Reason - Whether this is change or an exit reason.
 */
declare interface ReasonMatchProps {
    /**
     * The match with its reason property.
     */
    match: SuggestMatchWithReason;
}
export { ReasonMatchProps }
export { ReasonMatchProps as ReasonMatchProps_alias_1 }

/**
 * A parameter builder interface indicating the reason the handler was called.
 *
 * @typeParam Reason - Whether this is change or an exit reason.
 */
declare interface ReasonProps {
    /**
     * The reason for the exit. Either this or the change reason must have a
     * value.
     */
    exitReason?: ExitReason;
    /**
     * The reason for the change. Either this or change reason must have a value..
     */
    changeReason?: ChangeReason;
}
export { ReasonProps }
export { ReasonProps as ReasonProps_alias_1 }

/**
 * The parameters needed for the {@link SuggestIgnoreProps.removeIgnored}
 * action method available to the suggest plugin handlers.
 */
declare interface RemoveIgnoredProps extends Pick<Suggester, 'name'> {
    /**
     * The starting point of the match that should be ignored.
     */
    from: number;
}
export { RemoveIgnoredProps }
export { RemoveIgnoredProps as RemoveIgnoredProps_alias_1 }

/**
 * Remove a suggester if it exists. Pass in the name or the full suggester
 * object.
 */
declare function removeSuggester(state: EditorState, suggester: Suggester | string): void;
export { removeSuggester }
export { removeSuggester as removeSuggester_alias_1 }

declare type ResolvedPos = PMModel.ResolvedPos;
export { ResolvedPos }
export { ResolvedPos as ResolvedPos_alias_1 }

/**
 * @typeParam Schema - the underlying editor schema.
 */
declare interface ResolvedPosProps {
    /**
     * A prosemirror resolved pos with provides helpful context methods when
     * working with a position in the editor.
     *
     * In prosemirror suggest this always uses the lower bound of the text
     * selection.
     */
    $pos: ResolvedPos;
}
export { ResolvedPosProps }
export { ResolvedPosProps as ResolvedPosProps_alias_1 }

declare interface ResolvedRangeWithCursor {
    /**
     * The absolute starting point of the matching string as a [resolved
     * position](https://prosemirror.net/docs/ref/#model.Resolved_Positions).
     */
    $from: ResolvedPos;
    /**
     * The current cursor position as a [resolved
     * position](https://prosemirror.net/docs/ref/#model.Resolved_Positions),
     * which may not be at the end of the full match.
     */
    $cursor: ResolvedPos;
    /**
     * The absolute end of the matching string as a [resolved
     * position](https://prosemirror.net/docs/ref/#model.Resolved_Positions).
     */
    $to: ResolvedPos;
}
export { ResolvedRangeWithCursor }
export { ResolvedRangeWithCursor as ResolvedRangeWithCursor_alias_1 }

declare const selectionChangeReasons: readonly [ChangeReason.JumpBackward, ChangeReason.JumpForward, ChangeReason.Move, ChangeReason.SelectionInside];

declare const selectionExitReasons: readonly [ExitReason.MoveEnd, ExitReason.MoveStart, ExitReason.SelectionOutside, ExitReason.JumpForward, ExitReason.JumpBackward];

/**
 * True when the current selection is outside the match.
 */
declare function selectionOutsideMatch(props: Partial<SuggestStateMatchProps> & SelectionProps): boolean;
export { selectionOutsideMatch }
export { selectionOutsideMatch as selectionOutsideMatch_alias_1 }

declare interface SelectionProps {
    /**
     * The text editor selection
     */
    selection: PMState.Selection;
}
export { SelectionProps }
export { SelectionProps as SelectionProps_alias_1 }

/**
 * A function that can be used to determine whether the decoration should be set
 * or not.
 *
 * @param match - the current active match
 * @param resolvedRange - the range of the match with each position resolved.
 */
declare type ShouldDisableDecorations = (state: EditorState, match: Readonly<SuggestMatch>) => boolean;
export { ShouldDisableDecorations }
export { ShouldDisableDecorations as ShouldDisableDecorations_alias_1 }

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
declare function suggest(...suggesters: Suggester[]): Plugin_2<SuggestState>;
export { suggest }
export { suggest as suggest_alias_1 }

/**
 * The type signature of the `onChange` handler method.
 *
 * @param changeDetails - all the information related to the change that caused
 * this to be called.
 * @param tr - the transaction that can be updated when `appendTransaction` is
 * set to true.
 */
declare type SuggestChangeHandler = (changeDetails: SuggestChangeHandlerProps, tr: Transaction) => void;
export { SuggestChangeHandler }
export { SuggestChangeHandler as SuggestChangeHandler_alias_1 }

/**
 * The parameter passed to the  [[`Suggester.onChange`]] method. It the
 * properties `changeReason` and `exitReason` which are available depending on
 * whether this is an exit or change.
 *
 * Exactly **ONE** will always be available. Unfortunately that's quite hard to
 * model in TypeScript without complicating all dependent types.
 */
declare interface SuggestChangeHandlerProps extends SuggestMatchWithReason, EditorViewProps, SuggestIgnoreProps, SuggestMarkProps, Pick<Suggester, 'name' | 'char'> {
}
export { SuggestChangeHandlerProps }
export { SuggestChangeHandlerProps as SuggestChangeHandlerProps_alias_1 }

/**
 * This [[`Suggester`]] interface defines all the options required to create a
 * suggestion within your editor.
 *
 * @remarks
 *
 * The options are passed to the [[`suggest`]] method which uses them.
 */
declare interface Suggester {
    /**
     * The activation character(s) to match against.
     *
     * @remarks
     *
     * For example if building a mention plugin you might want to set this to `@`.
     * Multi string characters are theoretically supported (although currently
     * untested).
     *
     * The character does not have to be unique amongst the suggesters and the
     * eventually matched suggester will depend on the order in which the
     * suggesters are added to the plugin.
     *
     * Please note that when this is a plain string, it is assumed to be a plain
     * string. Which means that it will be matched as it is and **not** as a
     * string representation of `RegExp`.
     *
     * It can also be regex, but the regex support has a few caveats.
     *
     * - All flags specified will be ignored.
     * - Avoid using `^` to denote the start of line since that can conflict with
     *   the [[`Suggester.startOfLine`]] value and cause an invalid regex.
     */
    char: RegExp | string;
    /**
     * A unique identifier for the suggester.
     *
     * @remarks
     *
     * This should be globally unique amongst all suggesters registered with this
     * plugin. The plugin will throw an error if duplicates names are used.
     *
     * Typically this value will be appended to classes to uniquely identify them
     * amongst the suggesters and even in your own nodes and mark.
     */
    name: string;
    /**
     * Set this to true so that the `onChange` handler is called in the
     * `appendTransaction` ProseMirror plugin hook instead of the the view update
     * handler.
     *
     * This tends to work better with updates that are run multiple times while
     * preserving the redo/undo history stack.
     *
     * Please note this should only be set to true if updates are expected to be
     * synchronous and immediately available. If you're planning on packaging the
     * update into a command which dispatches the update in response to user
     * interaction, then you're better off leaving this as false.
     *
     * An example of how it's being used is in the `autoLink` functionality for
     * the `LinkExtension` in remirror. Since autolinking is purely based on
     * configuration and not on user interaction it's possible to create the links
     * automatically within the `appendTransaction` hook.
     *
     * @defaultValue false
     */
    appendTransaction?: boolean;
    /**
     * Called whenever a suggester becomes active or changes in any way.
     *
     * @remarks
     *
     * It receives a parameters object with the `changeReason` or `exitReason` to
     * let you know whether the change was an exit and what caused the change.
     */
    onChange: SuggestChangeHandler;
    /**
     * The priority for this suggester.
     *
     * A higher number means that this will be added to the list earlier. If
     * you're using this within the context of `remirror` you can also use the
     * `ExtensionPriority` from the `remirror/core` library.
     *
     * @defaultValue 50
     */
    priority?: number;
    /**
     * When set to true, matches will only be recognised at the start of a new
     * line.
     *
     * @defaultValue false
     */
    startOfLine?: boolean;
    /**
     * A regex containing all supported characters when within an active
     * suggester.
     *
     * @defaultValue /[\w\d_]+/
     */
    supportedCharacters?: RegExp | string;
    /**
     * A regex expression used to validate the text directly before the match.
     *
     * @remarks
     *
     * This will be used when {@link Suggester.invalidPrefixCharacters} is not
     * provided.
     *
     * @defaultValue /^[\s\0]?$/ - translation: only space and zero width characters
     * allowed.
     */
    validPrefixCharacters?: RegExp | string;
    /**
     * A regex expression used to invalidate the text directly before the match.
     *
     * @remarks
     *
     * This has preference over the `validPrefixCharacters` option and when it is
     * defined only it will be looked at in determining whether a prefix is valid.
     *
     * @defaultValue ''
     */
    invalidPrefixCharacters?: RegExp | string | null;
    /**
     * Sets the characters that need to be present after the initial character
     * match before a match is triggered.
     *
     * @remarks
     *
     * For example with `char` = `@` the following is true.
     *
     * - `matchOffset: 0` matches `'@'` immediately
     * - `matchOffset: 1` matches `'@a'` but not `'@'`
     * - `matchOffset: 2` matches `'@ab'` but not `'@a'` or `'@'`
     * - `matchOffset: 3` matches `'@abc'` but not `'@ab'` or `'@a'` or `'@'`
     * - And so on...
     *
     * @defaultValue 0
     */
    matchOffset?: number;
    /**
     * Class name to use for the decoration while the suggester is active.
     *
     * @defaultValue 'suggest'
     */
    suggestClassName?: string;
    /**
     * Tag for the prosemirror decoration which wraps an active match.
     *
     * @defaultValue 'span'
     */
    suggestTag?: string;
    /**
     * Set a class for the ignored suggester decoration.
     *
     * @defaultValue null
     */
    ignoredClassName?: string | null;
    /**
     * Set a tag for the ignored suggester decoration.
     *
     * @defaultValue 'span'
     */
    ignoredTag?: string;
    /**
     * When true, decorations are not created when this mention is being edited.
     */
    disableDecorations?: boolean | ShouldDisableDecorations;
    /**
     * A list of node names which will be marked as invalid.
     *
     * @defaultValue []
     */
    invalidNodes?: string[];
    /**
     * A list of node names which will be marked as invalid. This takes priority
     * over `invalidNodes` if both properties are present.
     *
     * Setting this to an empty array would mean that this [[`Suggester`]] can
     * never match.
     *
     * @defaultValue null
     */
    validNodes?: string[] | null;
    /**
     * A list of node names which will be marked as invalid.
     *
     * @defaultValue []
     */
    invalidMarks?: string[];
    /**
     * A list of node names which will be marked as invalid. This takes priority
     * over `invalidMarks` if both properties are present.
     *
     * By setting this value to the empty array `[]`, you are telling this
     * [[`Suggester`]] to never match if any marks are found.
     *
     * @defaultValue null
     */
    validMarks?: string[] | null;
    /**
     * This is run after the `valid` and `invalid` node and mark checks regardless
     * of their outcomes and only when the current suggester has found a match at
     * the current position.
     *
     * It is a method of doing more advanced checking of the resolved position.
     * Perhaps checking the attributes on the marks `resolvedRange.$to.marks`, or
     * the checking the attributes of the direct parent node
     * `resolvedRange.$to.parent.attrs` to check if something is missing.
     */
    isValidPosition?: (resolvedRange: ResolvedRangeWithCursor, match: SuggestMatch) => boolean;
    /**
     * This is a utility option that may be necessary for you when building
     * editable mentions using `prosemirror-suggest`.
     *
     * By default `prosemirror-suggest` searches backwards from the current cursor
     * position to see if any text matches any of the configured suggesters. For
     * the majority of use cases this is perfectly acceptable behaviour.
     *
     * However, [#639](https://github.com/remirror/remirror/issues/639) shows that
     * it's possible to delete forward and make mentions invalid. Without adding
     * this option, the only solution to this problem would have required,
     * creating a custom plugin to check each state update and see if the next
     * character is still valid.
     *
     * This method removes this requirement. It is run on every single update
     * where there is a valid text selection after the current cursor position. It
     * makes use of the `appendTransaction` ProseMirror plugin hook and provides
     * you with a transaction (`tr`) which should be mutated with updates. These
     * updates are added to the updates for the editor and makes it much easier to
     * build `history` friendly functionality.
     *
     * This is called before all `onChange` handlers.
     *
     * @defaultValue null
     */
    checkNextValidSelection?: CheckNextValidSelection | null;
    /**
     * Whether this suggester should only be valid for empty selections.
     *
     * @defaultValue false
     */
    emptySelectionsOnly?: boolean;
    /**
     * Whether the match should be case insensitive and ignore the case. This adds
     * the `i` flag to the regex used.
     *
     * @defaultValue false
     */
    caseInsensitive?: boolean;
    /**
     * When true support matches across multiple lines.
     *
     * @defaultValue false
     */
    multiline?: boolean;
    /**
     * When true support matches using Unicode Regex.
     *
     * @defaultValue false
     */
    unicode?: boolean;
    /**
     * Whether to capture the `char character as the first capture group.
     *
     * When this is set to true it will be the first matching group with
     * `match[1]`.
     *
     * @defaultValue true
     */
    captureChar?: boolean;
}
export { Suggester }
export { Suggester as Suggester_alias_1 }

declare interface SuggesterProps {
    /**
     * The suggester to use for finding matches.
     */
    suggester: Required<Suggester>;
}
export { SuggesterProps }
export { SuggesterProps as SuggesterProps_alias_1 }

/**
 * A parameter builder interface describing the ignore methods available to the
 * [[`Suggester`]] handlers.
 */
declare interface SuggestIgnoreProps {
    /**
     * Add a match target to the ignored matches.
     *
     * @remarks
     *
     * Until the activation character is deleted the `onChange` handler will no
     * longer be triggered for the matched character. It will be like the match
     * doesn't exist.
     *
     * By ignoring the activation character the plugin ensures that any further
     * matches from the activation character will be ignored.
     *
     * There are a number of use cases for this. You may chose to ignore a match
     * when:
     *
     * - The user presses the `escape` key to exit your suggestion dropdown.
     * - The user continues typing without selecting any of the options for the
     *   selection drop down.
     * - The user clicks outside of the suggesters dropdown.
     *
     * ```ts
     * const suggester = {
     *   onChange: ({ addIgnored, range: { from }, suggester: { char, name } }: SuggestExitHandlerProps) => {
     *     addIgnored({ from, char, name }); // Ignore this suggester
     *   },
     * }
     * ```
     */
    addIgnored: (props: AddIgnoredProps) => void;
    /**
     * When the name is provided remove all ignored decorations which match the
     * named suggester. Otherwise remove **all** ignored decorations from the
     * document.
     */
    clearIgnored: (name?: string) => void;
    /**
     * Use this method to skip the next `onChange` when the reason is an exit.
     *
     * @remarks
     *
     * This is useful when you manually call a command which applies the
     * suggestion outside of the `onChange` handler. When that happens `onChange`
     * will still be triggered since the document has now changed. If you don't
     * have the logic set up properly it may rerun your exit logic. This can lead
     * to mismatched transaction errors since the `onChange` handler is provided
     * the last active range and query when the reason is an exit, but these
     * values are probably no longer valid.
     *
     * This helper method can be applied to make life easier. Call it when running
     * a command in a click handler or key binding and you don't have to worry
     * about your `onChange` handler being called again and leading to a
     * mismatched transaction error.
     */
    ignoreNextExit: () => void;
}
export { SuggestIgnoreProps }
export { SuggestIgnoreProps as SuggestIgnoreProps_alias_1 }

/**
 * A special parameter needed when creating editable suggester using prosemirror
 * `Marks`. The method should be called when removing a suggestion that was
 * identified by a prosemirror `Mark`.
 */
declare interface SuggestMarkProps {
    /**
     * When managing suggesters with marks it is possible to remove a mark without
     * the change reflecting in the prosemirror state. This method should be used
     * when removing a suggestion if you are using prosemirror `Marks` to identify
     * the suggestion.
     *
     * When this method is called, `prosemirror-suggest` will handle the removal
     * of the mark in the next state update (during apply).
     */
    setMarkRemoved: () => void;
}
export { SuggestMarkProps }
export { SuggestMarkProps as SuggestMarkProps_alias_1 }

/**
 * Describes the properties of a match which includes range and the text as well
 * as information of the suggester that created the match.
 *
 */
declare interface SuggestMatch extends SuggesterProps {
    /**
     * Range of current match; for example `@foo|bar` (where | is the cursor)
     * - `from` is the start (= 0)
     * - `to` is cursor position (= 4)
     * - `end` is the end of the match (= 7)
     */
    range: RangeWithCursor;
    /**
     * Current query of match which doesn't include the activation character.
     */
    query: MatchValue;
    /**
     * Full text of match including the activation character
     *
     * @remarks
     *
     * For a `char` of `'@'` and query of `'awesome'` `text.full` would be
     * `'@awesome'`.
     */
    text: MatchValue;
    /**
     * The raw regex match which caused this suggester to be triggered.
     *
     * - `rawMatch[0]` is always the full match.
     * - `rawMatch[1]` is always the matching character (or regex pattern).
     *
     * To make use of this you can set the [[`Suggester.supportedCharacters`]]
     * property to be a regex which included matching capture group segments.
     */
    match: RegExpExecArray;
    /**
     * The text after full match, up until the end of the text block.
     */
    textAfter: string;
    /**
     * The text before the full match, up until the beginning of the node.
     */
    textBefore: string;
}
export { SuggestMatch }
export { SuggestMatch as SuggestMatch_alias_1 }

/**
 * The matching suggester along with the reason, whether it is a `changeReason`
 * or an `exitReason`.
 */
declare interface SuggestMatchWithReason extends SuggestMatch, ReasonProps {
}
export { SuggestMatchWithReason }
export { SuggestMatchWithReason as SuggestMatchWithReason_alias_1 }

/**
 * This key is stored to provide access to the plugin state.
 */
export declare const suggestPluginKey: PluginKey<any>;

/**
 * A mapping of the handler matches with their reasons for occurring within the
 * suggest state.
 */
declare interface SuggestReasonMap {
    /**
     * Change reasons for triggering the change handler.
     */
    change?: SuggestMatchWithReason;
    /**
     * Exit reasons for triggering the change handler.
     */
    exit?: SuggestMatchWithReason;
}
export { SuggestReasonMap }
export { SuggestReasonMap as SuggestReasonMap_alias_1 }

/**
 * The `prosemirror-suggest` state which manages the list of suggesters.
 */
declare class SuggestState {
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
    readonly findNextTextSelection: (selection: Selection_2) => TextSelection | void;
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
export { SuggestState }
export { SuggestState as SuggestState_alias_1 }

/**
 * A parameter builder interface describing match found by the suggest plugin.
 */
declare interface SuggestStateMatchProps {
    /**
     * The match that will be triggered.
     */
    match: SuggestMatch;
}
export { SuggestStateMatchProps }
export { SuggestStateMatchProps as SuggestStateMatchProps_alias_1 }

declare interface TextProps {
    /**
     * The text to insert or work with.
     */
    text: string;
}
export { TextProps }
export { TextProps as TextProps_alias_1 }

declare type Transaction = PMState.Transaction;
export { Transaction }
export { Transaction as Transaction_alias_1 }

/**
 * A parameter builder interface containing the `tr` property.
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare interface TransactionProps {
    /**
     * The prosemirror transaction
     */
    tr: Transaction;
}
export { TransactionProps }
export { TransactionProps as TransactionProps_alias_1 }

export { }
