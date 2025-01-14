import { ApplySchemaAttributes } from '@remirror/core';
import { CommandFunction } from '@remirror/core';
import type { CreateEventHandlers } from '@remirror/extension-events';
import { Handler } from '@remirror/core';
import { MatchValue } from '@remirror/pm/suggest';
import { NodeExtension } from '@remirror/core';
import { NodeExtensionSpec } from '@remirror/core';
import { NodeSpecOverride } from '@remirror/core';
import { NodeWithPosition } from '@remirror/core';
import { ProsemirrorAttributes } from '@remirror/core';
import { RangeWithCursor } from '@remirror/pm/suggest';
import { Static } from '@remirror/core';
import { SuggestChangeHandlerProps } from '@remirror/pm/suggest';
import { Suggester } from '@remirror/pm/suggest';

declare interface CreateMentionAtom {
    /**
     * The name of the matcher used to create this mention.
     */
    name: string;
    /**
     * The range of the current selection
     */
    range: RangeWithCursor;
}
export { CreateMentionAtom }
export { CreateMentionAtom as CreateMentionAtom_alias_1 }

/**
 * This change handler is called whenever there is an update in the matching
 * suggester. The second parameter `command` is available to automatically
 * create the mention with the required attributes.
 */
declare type MentionAtomChangeHandler = (handlerState: SuggestChangeHandlerProps, command: (attrs: MentionAtomNodeAttributes) => void) => void;
export { MentionAtomChangeHandler }
export { MentionAtomChangeHandler as MentionAtomChangeHandler_alias_1 }

/**
 * This is the atom version of the `MentionExtension`
 * `@remirror/extension-mention`.
 *
 * It provides mentions as atom nodes which don't support editing once being
 * inserted into the document.
 */
declare class MentionAtomExtension extends NodeExtension<MentionAtomOptions> {
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
export { MentionAtomExtension }
export { MentionAtomExtension as MentionAtomExtension_alias_1 }

/**
 * The options for the matchers which can be created by this extension.
 */
declare interface MentionAtomExtensionMatcher extends Pick<Suggester, 'char' | 'name' | 'startOfLine' | 'supportedCharacters' | 'validPrefixCharacters' | 'invalidPrefixCharacters' | 'suggestClassName'> {
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
export { MentionAtomExtensionMatcher }
export { MentionAtomExtensionMatcher as MentionAtomExtensionMatcher_alias_1 }

/**
 * The attrs that will be added to the node.
 * ID and label are plucked and used while attributes like href and role can be assigned as desired.
 */
declare type MentionAtomNodeAttributes = ProsemirrorAttributes<OptionalMentionAtomExtensionProps & {
    /**
     * A unique identifier for the suggesters node
     */
    id: string;
    /**
     * The text to be placed within the suggesters node
     */
    label: string;
}>;
export { MentionAtomNodeAttributes }
export { MentionAtomNodeAttributes as MentionAtomNodeAttributes_alias_1 }

/**
 * Options available to the [[`MentionAtomExtension`]].
 */
declare interface MentionAtomOptions extends Pick<Suggester, 'invalidNodes' | 'validNodes' | 'invalidMarks' | 'validMarks' | 'isValidPosition'> {
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
export { MentionAtomOptions }
export { MentionAtomOptions as MentionAtomOptions_alias_1 }

declare type NamedMentionAtomNodeAttributes = MentionAtomNodeAttributes & {
    /**
     * The name of the matcher used to create this mention.
     */
    name: string;
};
export { NamedMentionAtomNodeAttributes }
export { NamedMentionAtomNodeAttributes as NamedMentionAtomNodeAttributes_alias_1 }

declare interface OptionalMentionAtomExtensionProps {
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
export { OptionalMentionAtomExtensionProps }
export { OptionalMentionAtomExtensionProps as OptionalMentionAtomExtensionProps_alias_1 }

export { }

declare global {
  namespace Remirror {
    interface AllExtensions {
      mentionAtom: MentionAtomExtension;
    }
  }
}
