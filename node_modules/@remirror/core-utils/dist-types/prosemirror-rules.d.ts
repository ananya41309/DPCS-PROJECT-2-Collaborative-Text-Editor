import type { EditorStateProps, GetAttributesProps, MarkTypeProps, NodeTypeProps, RegExpProps, TransactionProps } from '@remirror/core-types';
import { InputRule } from '@remirror/pm/inputrules';
export interface BeforeDispatchProps extends TransactionProps {
    /**
     * The matches returned by the regex.
     */
    match: string[];
    /**
     * The start position of the most recently typed character.
     */
    start: number;
    /**
     * The end position of the most recently typed character.
     */
    end: number;
}
export interface BaseInputRuleProps extends ShouldSkip {
    /**
     * A method which can be used to add more steps to the transaction after the
     * input rule update but before the editor has dispatched to update to a new
     * state.
     *
     * ```ts
     * import { nodeInputRule } from 'remirror';
     *
     * nodeInputRule({
     *   type,
     *   regexp: /abc/,
     *     beforeDispatch?: (props: BeforeDispatchProps) => void; : (tr)
     *     => tr.insertText('hello')
     * });
     * ```
     */
    beforeDispatch?: (props: BeforeDispatchProps) => void;
    /**
     * Ignore the match when all characters in the capture group are whitespace.
     *
     * This helps stop situations from occurring where the a capture group matches
     * but you don't want an update if it's all whitespace.
     *
     * @defaultValue false
     */
    ignoreWhitespace?: boolean;
    /**
     * Update the capture group. This is needed sometimes because lookbehind regex
     * don't work in some browsers and can't be transpiled or polyfilled. This
     * method allows the developer to update the details of the matching input
     * rule details before it is acted on.
     *
     * The capture group refers to the first match within the matching bracket.
     *
     * ```ts
     * abc.match(/ab(c)/) => ['abc', 'a']
     * ```
     *
     * In the above example the capture group is the first index so in this case
     * the captured text would be `a`.
     *
     * @param captured - All the details about the capture to allow for full
     * customisation.
     * @returns updated details or undefined to leave unchanged.
     *
     * See https://github.com/remirror/remirror/issues/574#issuecomment-678700121
     * for more context.
     */
    updateCaptured?: UpdateCaptured;
}
type UpdateCaptured = (captured: UpdateCaptureTextProps) => Partial<UpdateCaptureTextProps>;
export interface NodeInputRuleProps extends Partial<GetAttributesProps>, RegExpProps, NodeTypeProps, BaseInputRuleProps {
}
export interface PlainInputRuleProps extends RegExpProps, BaseInputRuleProps {
    /**
     * A function that transforms the match into the desired value.
     *
     * Return `null` or `undefined` to invalidate the match.
     */
    transformMatch: (match: string[]) => string | null | undefined;
}
export interface UpdateCaptureTextProps {
    /**
     * The first capture group from the matching input rule.
     */
    captureGroup: string | undefined;
    /**
     * The text of the full match which was received.
     */
    fullMatch: string;
    /**
     * The starting position of the match relative to the `doc`.
     */
    start: number;
    /**
     * The end position of the match relative to the `doc`.
     */
    end: number;
}
interface MarkInputRuleProps extends Partial<GetAttributesProps>, RegExpProps, MarkTypeProps, BaseInputRuleProps {
}
/**
 * Creates an input rule based on the provided regex for the provided mark type.
 */
export declare function markInputRule(props: MarkInputRuleProps): SkippableInputRule;
/**
 * Creates a node input rule based on the provided regex for the provided node
 * type.
 *
 * Input rules transform content as the user types based on whether a match is
 * found with a sequence of characters.
 */
export declare function nodeInputRule(props: NodeInputRuleProps): SkippableInputRule;
/**
 * Creates a plain rule based on the provided regex. You can see this being used
 * in the `@remirror/extension-emoji` when it is setup to use plain text.
 */
export declare function plainInputRule(props: PlainInputRuleProps): SkippableInputRule;
export interface ShouldSkipProps extends EditorStateProps, UpdateCaptureTextProps {
    /** The type of input rule that has been activated */
    ruleType: 'mark' | 'node' | 'plain';
}
interface ShouldSkip {
    /**
     * Every input rule calls this function before deciding whether or not to run.
     *
     * This is run for every successful input rule match to check if there are any
     * reasons to prevent it from running.
     *
     * In particular it is so that the input rule only runs when there are no
     * active checks that prevent it from doing so.
     *
     * - Other extension can register a `shouldSkip` handler
     * - Every time the input rule is running it makes sure it isn't blocked.
     */
    shouldSkip?: ShouldSkipFunction;
    /**
     * A list of marks which if existing in the provided range should invalidate
     * the range.
     */
    invalidMarks?: string[];
}
/**
 * A function which is called to check whether an input rule should be skipped.
 *
 * - When it returns false then it won't be skipped.
 * - When it returns true then it will be skipped.
 */
export type ShouldSkipFunction = (props: ShouldSkipProps) => boolean;
/**
 * An input rule which can have a `shouldSkip` property that returns true when
 * the input rule should be skipped.
 */
export type SkippableInputRule = ShouldSkip & InputRule;
export {};
