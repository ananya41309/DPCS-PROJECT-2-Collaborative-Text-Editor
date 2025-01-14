import { PickPartial } from '@remirror/types';
import type { CompareMatchProps, DocChangedProps, EditorStateProps, ResolvedPos, ResolvedPosProps, ResolvedRangeWithCursor, Suggester, SuggestMatch, SuggestReasonMap } from './suggest-types';
interface FindFromSuggestersProps extends ResolvedPosProps, DocChangedProps {
    /**
     * The matchers to search through.
     */
    suggesters: Array<Required<Suggester>>;
    /**
     * When `true` the selection is empty.
     */
    selectionEmpty: boolean;
}
type FindReasonProps = EditorStateProps & ResolvedPosProps & Partial<CompareMatchProps> & object;
/**
 * Creates an array of the actions taken based on the current prev and next
 * state field
 */
export declare function findReason(props: FindReasonProps): SuggestReasonMap;
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
export declare function markActiveInRange(resolvedRange: Omit<ResolvedRangeWithCursor, '$cursor'>, marks: string[]): boolean;
/**
 * Check if the entire matching range `from` the start point all the way through
 * `to` the end point, has any of the provided marks that span it.
 */
export declare function rangeHasMarks(resolvedRange: Omit<ResolvedRangeWithCursor, '$cursor'>, marks: string[]): boolean;
/**
 * Check if the provided position has the given marks.
 */
export declare function positionHasMarks($pos: ResolvedPos, marks: string[]): boolean;
/**
 * Find a match for the provided matchers.
 */
export declare function findFromSuggesters(props: FindFromSuggestersProps): SuggestMatch | undefined;
/**
 * Get the `char` from the `suggester` as regex.
 */
export declare function getCharAsRegex(char: RegExp | string): RegExp;
interface CreateRegExpFromSuggesterProps extends Pick<Required<Suggester>, 'startOfLine' | 'char' | 'supportedCharacters' | 'matchOffset'>, Pick<Suggester, 'multiline' | 'caseInsensitive' | 'captureChar' | 'unicode'> {
}
/**
 * Create a regex expression which evaluate matches directly from the suggester
 * properties.
 */
export declare function createRegexFromSuggester(props: CreateRegExpFromSuggesterProps): RegExp;
/**
 * The default value for the suggester.
 */
export declare const DEFAULT_SUGGESTER: PickPartial<Suggester>;
/**
 * This can be added to the meta data of an update to let the suggestion plugin
 * know that it should ignore the update.
 */
export declare const IGNORE_SUGGEST_META_KEY = "__ignore_prosemirror_suggest_update__";
/**
 * Takes the passed through `suggester` and adds all the missing default values.
 */
export declare function getSuggesterWithDefaults(suggester: Suggester): Required<Suggester>;
export {};
