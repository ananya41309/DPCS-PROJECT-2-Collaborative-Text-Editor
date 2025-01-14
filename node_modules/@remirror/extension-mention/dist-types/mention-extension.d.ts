import { ApplySchemaAttributes, CommandFunction, GetMarkRange, Handler, MarkExtension, MarkExtensionSpec, MarkSpecOverride, ProsemirrorAttributes, RangeProps, Static } from '@remirror/core';
import type { CreateEventHandlers } from '@remirror/extension-events';
import { MarkPasteRule } from '@remirror/pm/paste-rules';
import { MatchValue, RangeWithCursor, SuggestChangeHandlerProps, Suggester } from '@remirror/pm/suggest';
/**
 * The static settings passed into a mention
 */
export interface MentionOptions extends Pick<Suggester, 'invalidNodes' | 'validNodes' | 'invalidMarks' | 'validMarks' | 'isValidPosition' | 'disableDecorations'> {
    /**
     * Provide a custom tag for the mention
     */
    mentionTag?: Static<string>;
    /**
     * Provide the custom matchers that will be used to match mention text in the
     * editor.
     */
    matchers: Static<MentionExtensionMatcher[]>;
    /**
     * Text to append after the mention has been added.
     *
     * **NOTE**: If you're using whitespace characters but it doesn't seem to work
     * for you make sure you're using the css provided in `@remirror/styles`.
     *
     * The `white-space: pre-wrap;` is what allows editors to add space characters
     * at the end of a section.
     *
     * @defaultValue ''
     */
    appendText?: string;
    /**
     * Tag for the prosemirror decoration which wraps an active match.
     *
     * @defaultValue 'span'
     */
    suggestTag?: string;
    /**
     * Called whenever a suggestion becomes active or changes in any way.
     *
     * @remarks
     *
     * It receives a parameters object with the `reason` for the change for more
     * granular control.
     *
     * The second parameter is a function that can be called to handle exits
     * automatically. This is useful if you're mention can be any possible value,
     * e.g. a `#hashtag`. Call it with the optional attributes to automatically
     * create a mention.
     *
     * @defaultValue () => void
     */
    onChange?: Handler<MentionChangeHandler>;
    /**
     * Listen for click events to the mention extension.
     */
    onClick?: Handler<(event: MouseEvent, markRange: GetMarkRange) => boolean | undefined | void>;
    /**
     * A predicate check for whether the mention is valid. It proves the mention
     * mark and it's attributes as well as the text it contains.
     *
     * This is used for checking that a recent update to the document hasn't made
     * a mention invalid.
     *
     * For example a mention for `@valid` => `valid` would be considered
     * invalidating. Return false to remove the mention.
     *
     * @param attrs - the attrs for the mention
     * @param text - the text which is wrapped by the mention
     */
    isMentionValid?: (attrs: NamedMentionExtensionAttributes, text: string) => boolean;
}
/**
 * The mention extension wraps mentions as a prosemirror mark. It allows for
 * fluid social experiences to be built. The implementation was inspired by the
 * way twitter and similar social sites allows mentions to be edited after
 * they've been created.
 *
 * @remarks
 *
 * Mentions have the following features
 * - An activation character or regex pattern which you define.
 * - A min number of characters before mentions are suggested
 * - Ability to exclude matching character.
 * - Ability to wrap content in a decoration which excludes mentions from being
 *   suggested.
 * - Decorations for in-progress mentions
 */
export declare class MentionExtension extends MarkExtension<MentionOptions> {
    get name(): "mention";
    /**
     * Tag this as a behavior influencing mark.
     */
    createTags(): ("behavior" | "excludeFromInputRules")[];
    createMarkSpec(extra: ApplySchemaAttributes, override: MarkSpecOverride): MarkExtensionSpec;
    onCreate(): void;
    /**
     * Track click events passed through to the editor.
     */
    createEventHandlers(): CreateEventHandlers;
    /**
     * Manages the paste rules for the mention.
     *
     * It creates regex tests for each of the configured matchers.
     */
    createPasteRules(): MarkPasteRule[];
    /**
     * Create the suggesters from the matchers that were passed into the editor.
     */
    createSuggesters(): Suggester[];
    /**
     * This is the command which can be called from the `onChange` handler to
     * automatically handle exits for you. It decides whether a mention should
     * be updated, removed or created and also handles invalid splits.
     *
     * It does nothing for changes and only acts when an exit occurred.
     *
     * @param handler - the parameter that was passed through to the
     * `onChange` handler.
     * @param attrs - the options which set the values that will be used (in
     * case you want to override the defaults).
     */
    mentionExitHandler(handler: SuggestChangeHandlerProps, attrs?: MentionChangeHandlerCommandAttributes): CommandFunction;
    /**
     * Create a new mention
     */
    createMention(config: NamedMentionExtensionAttributes & KeepSelectionProps): CommandFunction;
    /**
     * Update an existing mention.
     */
    updateMention(config: NamedMentionExtensionAttributes & KeepSelectionProps): CommandFunction;
    /**
     * Remove the mention(s) at the current selection or provided range.
     */
    removeMention({ range }?: Partial<RangeProps>): CommandFunction;
    /**
     * The factory method for mention commands to update and create new mentions.
     */
    private createMentionFactory;
    private shouldSkipInputRule;
    /**
     * Check whether the mark is active within the provided start and end range.
     */
    private isMatcherActive;
}
export interface OptionalMentionExtensionProps {
    /**
     * The text to append to the replacement.
     *
     * @defaultValue ''
     */
    appendText?: string;
    /**
     * The range of the requested selection.
     */
    range?: RangeWithCursor;
    /**
     * Whether to replace the whole match (`full`) or just the part up until the
     * cursor (`partial`).
     */
    replacementType?: keyof MatchValue;
}
interface KeepSelectionProps {
    /**
     * Whether to preserve the original selection after the replacement has
     * occurred.
     */
    keepSelection?: boolean;
}
/**
 * The attrs that will be added to the node. ID and label are plucked and used
 * while attributes like href and role can be assigned as desired.
 */
export type MentionExtensionAttributes = ProsemirrorAttributes<OptionalMentionExtensionProps & {
    /**
     * A unique identifier for the suggesters node
     */
    id: string;
    /**
     * The text to be placed within the suggesters node
     */
    label: string;
}>;
export type NamedMentionExtensionAttributes = ProsemirrorAttributes<OptionalMentionExtensionProps & {
    /**
     * A unique identifier for the suggesters node
     */
    id: string;
    /**
     * The text to be placed within the suggesters node
     */
    label: string;
} & {
    /**
     * The identifying name for the active matcher. This is stored as an
     * attribute on the HTML that will be produced
     */
    name: string;
}>;
/**
 * The options for the matchers which can be created by this extension.
 */
export interface MentionExtensionMatcher extends Pick<Suggester, 'char' | 'name' | 'startOfLine' | 'supportedCharacters' | 'validPrefixCharacters' | 'invalidPrefixCharacters' | 'matchOffset' | 'suggestClassName'> {
    /**
     * Provide customs class names for the completed mention
     */
    mentionClassName?: string;
    /**
     * Text to append after the suggestion has been added.
     *
     * @defaultValue ''
     */
    appendText?: string;
}
export type MentionChangeHandlerCommand = (attrs?: MentionChangeHandlerCommandAttributes) => void;
export interface MentionChangeHandlerProps extends SuggestChangeHandlerProps {
    /**
     * The default text to be appended if text should be appended.
     */
    defaultAppendTextValue: string;
}
/**
 * A handler that will be called whenever the the active matchers are updated or
 * exited. The second argument which is the exit command is a function which is
 * only available when the matching suggester has been exited.
 */
export type MentionChangeHandler = (handlerState: MentionChangeHandlerProps, command: (attrs?: MentionChangeHandlerCommandAttributes) => void) => void;
/**
 * The dynamic properties used to change the behavior of the mentions created.
 */
export type MentionChangeHandlerCommandAttributes = ProsemirrorAttributes<Partial<Pick<MentionExtensionAttributes, 'appendText' | 'replacementType'>> & {
    /**
     * The ID to apply the mention.
     *
     * @defaultValue query.full
     */
    id?: string;
    /**
     * The text that is displayed within the mention bounds.
     *
     * @defaultValue text.full
     */
    label?: string;
}>;
/**
 * Checks whether the mention is valid and hasn't been edited since being
 * created.
 */
export declare function isMentionValidDefault(attrs: NamedMentionExtensionAttributes, text: string): boolean;
declare global {
    namespace Remirror {
        interface AllExtensions {
            mention: MentionExtension;
        }
    }
}
export {};
