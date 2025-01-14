import { ApplySchemaAttributes, CommandFunction, Handler, NodeExtension, NodeExtensionSpec, NodeSpecOverride, NodeWithPosition, ProsemirrorAttributes, Static } from '@remirror/core';
import type { CreateEventHandlers } from '@remirror/extension-events';
import { MatchValue, RangeWithCursor, SuggestChangeHandlerProps, Suggester } from '@remirror/pm/suggest';
/**
 * Options available to the [[`MentionAtomExtension`]].
 */
export interface MentionAtomOptions extends Pick<Suggester, 'invalidNodes' | 'validNodes' | 'invalidMarks' | 'validMarks' | 'isValidPosition'> {
    /**
     * When `true` the atom node which wraps the mention will be selectable.
     *
     * @defaultValue true
     */
    selectable?: Static<boolean>;
    /**
     * Whether mentions should be draggable.
     *
     * @defaultValue false
     */
    draggable?: Static<boolean>;
    /**
     * Provide a custom tag for the mention
     */
    mentionTag?: Static<string>;
    /**
     * Provide the custom matchers that will be used to match mention text in the
     * editor.
     *
     * TODO - add customized tags here.
     */
    matchers: Static<MentionAtomExtensionMatcher[]>;
    /**
     * Text to append after the mention has been added.
     *
     * **NOTE**: If it seems that your editor is swallowing  up empty whitespace,
     * make sure you've imported the core css from the `@remirror/styles` library.
     *
     * @defaultValue ' '
     */
    appendText?: string;
    /**
     * Tag for the prosemirror decoration which wraps an active match.
     *
     * @defaultValue 'span'
     */
    suggestTag?: string;
    /**
     * When true, decorations are not created when this mention is being edited.
     */
    disableDecorations?: boolean;
    /**
     * Called whenever a suggestion becomes active or changes in any way.
     *
     * @remarks
     *
     * It receives a parameters object with the `reason` for the change for more
     * granular control.
     */
    onChange?: Handler<MentionAtomChangeHandler>;
    /**
     * Listen for click events to the mention atom extension.
     */
    onClick?: Handler<(event: MouseEvent, nodeWithPosition: NodeWithPosition) => boolean | undefined | void>;
}
/**
 * This is the atom version of the `MentionExtension`
 * `@remirror/extension-mention`.
 *
 * It provides mentions as atom nodes which don't support editing once being
 * inserted into the document.
 */
export declare class MentionAtomExtension extends NodeExtension<MentionAtomOptions> {
    get name(): "mentionAtom";
    createTags(): ("inline" | "behavior")[];
    createNodeSpec(extra: ApplySchemaAttributes, override: NodeSpecOverride): NodeExtensionSpec;
    /**
     * Creates a mention atom at the  the provided range.
     *
     * A variant of this method is provided to the `onChange` handler for this
     * extension.
     *
     * @param details - the range and name of the mention to be created.
     * @param attrs - the attributes that should be passed through. Required
     * values are `id` and `label`.
     */
    createMentionAtom(details: CreateMentionAtom, attrs: MentionAtomNodeAttributes): CommandFunction;
    /**
     * Track click events passed through to the editor.
     */
    createEventHandlers(): CreateEventHandlers;
    createSuggesters(): Suggester[];
}
export interface OptionalMentionAtomExtensionProps {
    /**
     * The text to append to the replacement.
     *
     * @defaultValue ''
     */
    appendText?: string;
    /**
     * The type of replacement to use. By default, the command will replace the entire match.
     *
     * To replace the match up only to where the cursor is placed set this to
     * `partial`.
     *
     * @defaultValue 'full'
     */
    replacementType?: keyof MatchValue;
}
export interface CreateMentionAtom {
    /**
     * The name of the matcher used to create this mention.
     */
    name: string;
    /**
     * The range of the current selection
     */
    range: RangeWithCursor;
}
/**
 * The attrs that will be added to the node.
 * ID and label are plucked and used while attributes like href and role can be assigned as desired.
 */
export type MentionAtomNodeAttributes = ProsemirrorAttributes<OptionalMentionAtomExtensionProps & {
    /**
     * A unique identifier for the suggesters node
     */
    id: string;
    /**
     * The text to be placed within the suggesters node
     */
    label: string;
}>;
export type NamedMentionAtomNodeAttributes = MentionAtomNodeAttributes & {
    /**
     * The name of the matcher used to create this mention.
     */
    name: string;
};
/**
 * This change handler is called whenever there is an update in the matching
 * suggester. The second parameter `command` is available to automatically
 * create the mention with the required attributes.
 */
export type MentionAtomChangeHandler = (handlerState: SuggestChangeHandlerProps, command: (attrs: MentionAtomNodeAttributes) => void) => void;
/**
 * The options for the matchers which can be created by this extension.
 */
export interface MentionAtomExtensionMatcher extends Pick<Suggester, 'char' | 'name' | 'startOfLine' | 'supportedCharacters' | 'validPrefixCharacters' | 'invalidPrefixCharacters' | 'suggestClassName'> {
    /**
     * See [[``Suggester.matchOffset`]] for more details.
     *
     * @defaultValue 1
     */
    matchOffset?: number;
    /**
     * Provide customs class names for the completed mention.
     */
    mentionClassName?: string;
    /**
     * An override for the default mention tag. This allows different mentions to
     * use different tags.
     */
    mentionTag?: string;
}
declare global {
    namespace Remirror {
        interface AllExtensions {
            mentionAtom: MentionAtomExtension;
        }
    }
}
