import { TextSelection } from 'prosemirror-state';
import type { CompareMatchProps, SelectionProps, SuggestMatch, SuggestReasonMap, SuggestStateMatchProps } from './suggest-types';
import { ChangeReason, ExitReason } from './suggest-types';
/**
 * Is this a change in the current suggestion (added or deleted characters)?
 */
export declare function isChange(compare: Partial<CompareMatchProps>): compare is CompareMatchProps;
/**
 * Is this is a repetition of the same check?
 */
export declare function isIdentical(compare: Partial<CompareMatchProps>, match: SuggestReasonMap): compare is CompareMatchProps;
/**
 * Has the cursor moved within the current suggestion (added or deleted
 * characters)?
 */
export declare function isMove(compare: Partial<CompareMatchProps>): compare is CompareMatchProps;
/**
 * Are we entering a new suggestion?
 */
export declare function isEntry(compare: Partial<CompareMatchProps>): compare is Pick<CompareMatchProps, 'next'>;
/**
 * Are we exiting a suggestion?
 */
export declare function isExit(compare: Partial<CompareMatchProps>): compare is Pick<CompareMatchProps, 'prev'>;
/**
 * Is this a jump from one suggestion to another?
 */
export declare function isJump(compare: Partial<CompareMatchProps>): compare is CompareMatchProps;
/**
 * Check that the passed in value is an [[`ExitReason`]].
 */
export declare function isExitReason(value: unknown): value is ExitReason;
/**
 * Check that that the passed in value is a [[`ChangeReason`]].
 */
export declare function isChangeReason(value: unknown): value is ChangeReason;
declare const selectionExitReasons: readonly [ExitReason.MoveEnd, ExitReason.MoveStart, ExitReason.SelectionOutside, ExitReason.JumpForward, ExitReason.JumpBackward];
/**
 * An exit which is caused by a change in the selection and no other change in
 * the document.
 */
export declare function isSelectionExitReason(value: unknown): value is (typeof selectionExitReasons)[number];
declare const selectionChangeReasons: readonly [ChangeReason.JumpBackward, ChangeReason.JumpForward, ChangeReason.Move, ChangeReason.SelectionInside];
export declare function isSelectionChangeReason(value: unknown): value is (typeof selectionChangeReasons)[number];
/**
 * Checks that the reason passed is a split reason. This typically means that we
 * should default to a partial update / creation of the mention.
 */
export declare function isSplitReason(value?: unknown): value is ExitReason.Split;
/**
 * Checks that the reason was caused by a split at a point where there is no
 * query.
 */
export declare function isInvalidSplitReason(value?: unknown): value is ExitReason.InvalidSplit;
/**
 * Checks that the reason was caused by a deletion.
 */
export declare function isRemovedReason(value?: unknown): value is ExitReason.Removed;
/**
 * Checks to see if this is a jump reason.
 */
export declare function isJumpReason(map: SuggestReasonMap): map is Required<SuggestReasonMap>;
/**
 * True when the match is currently active (i.e. it's query has a value)
 */
export declare function isValidMatch(match: SuggestMatch | undefined): match is SuggestMatch;
/**
 * True when the current selection is outside the match.
 */
export declare function selectionOutsideMatch(props: Partial<SuggestStateMatchProps> & SelectionProps): boolean;
/**
 * Predicate checking whether the selection is a `TextSelection`.
 *
 * @param value - the value to check
 */
export declare function isTextSelection(value: unknown): value is TextSelection;
export {};
