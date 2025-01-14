import type { Moji } from 'svgmoji';
import { ApplySchemaAttributes, CommandFunction, InputRule, KeyBindingProps, NodeExtension, NodeExtensionSpec, NodeSpecOverride, PrimitiveSelection } from '@remirror/core';
import { Suggester } from '@remirror/pm/suggest';
import { AddEmojiCommandOptions, EmojiOptions } from './emoji-utils';
export declare class EmojiExtension extends NodeExtension<EmojiOptions> {
    /**
     * The name is dynamically generated based on the passed in type.
     */
    get name(): "emoji";
    private _moji?;
    get moji(): Moji;
    createTags(): "inline"[];
    createNodeSpec(extra: ApplySchemaAttributes, override: NodeSpecOverride): NodeExtensionSpec;
    /**
     * Manage input rules for emoticons.
     */
    createInputRules(): InputRule[];
    /**
     * Insert an emoji into the document at the requested location by name
     *
     * The range is optional and if not specified the emoji will be inserted
     * at the current selection.
     *
     * @param identifier - the hexcode | unicode | shortcode | emoticon of the emoji to insert.
     * @param [options] - the options when inserting the emoji.
     */
    addEmoji(identifier: string, options?: AddEmojiCommandOptions): CommandFunction;
    /**
     * Inserts the suggestion character into the current position in the
     * editor in order to activate the suggestion popup.
     */
    suggestEmoji(selection?: PrimitiveSelection): CommandFunction;
    handleEnterKey({ tr, next }: KeyBindingProps): boolean;
    /**
     * Emojis can be selected via `:` the colon key (by default). This sets the
     * configuration using `prosemirror-suggest`
     */
    createSuggesters(): Suggester;
}
declare global {
    namespace Remirror {
        interface AllExtensions {
            emoji: EmojiExtension;
        }
    }
}
