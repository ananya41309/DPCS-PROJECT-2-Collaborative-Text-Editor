import type { AcceptUndefined } from '@remirror/core';
import { ApplySchemaAttributes } from '@remirror/core';
import { CommandFunction } from '@remirror/core';
import { FlatEmoji } from 'svgmoji';
import type { FromToProps } from '@remirror/core';
import type { Handler } from '@remirror/core';
import { InputRule } from '@remirror/core';
import { KeyBindingProps } from '@remirror/core';
import type { Moji } from 'svgmoji';
import { NodeExtension } from '@remirror/core';
import { NodeExtensionSpec } from '@remirror/core';
import { NodeSpecOverride } from '@remirror/core';
import { PrimitiveSelection } from '@remirror/core';
import type { ProsemirrorAttributes } from '@remirror/core';
import type { Static } from '@remirror/core';
import { Suggester } from '@remirror/pm/suggest';
import * as _svgmoji from '@ocavue/svgmoji-cjs';

declare interface AddEmojiCommandOptions {
    selection?: PrimitiveSelection;
}
export { AddEmojiCommandOptions }
export { AddEmojiCommandOptions as AddEmojiCommandOptions_alias_1 }

export declare const DefaultMoji: {
    /**
     * The google emoji library.
     */
    readonly noto: typeof _svgmoji.Notomoji;
    /**
     * The openmoji library.
     */
    readonly openmoji: typeof _svgmoji.Openmoji;
    /**
     * The Twitter emoji library,
     */
    readonly twemoji: typeof _svgmoji.Twemoji;
    /**
     * The blob emoji library previously developed by google. Now a community project.
     */
    readonly blob: typeof _svgmoji.Blobmoji;
};

declare const EMOJI_DATA_ATTRIBUTE = "data-remirror-emoji";
export { EMOJI_DATA_ATTRIBUTE }
export { EMOJI_DATA_ATTRIBUTE as EMOJI_DATA_ATTRIBUTE_alias_1 }

declare type EmojiAttributes = ProsemirrorAttributes<{
    /**
     * A string that uniquely identifies the emoji like
     * - unicode - `👍`
     * - hexcode - `1F44D`
     * - shortcode - `thumbs_up` | `:thumbs_up:`
     */
    code: string;
}>;
export { EmojiAttributes }
export { EmojiAttributes as EmojiAttributes_alias_1 }

declare class EmojiExtension extends NodeExtension<EmojiOptions> {
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
export { EmojiExtension }
export { EmojiExtension as EmojiExtension_alias_1 }

declare interface EmojiOptions extends Pick<Suggester, 'supportedCharacters'> {
    /**
     * The list of emoji data to make available to the user. This is used to
     * create the underlying instance of the `Moji` which is used for searching
     * and generating CDN urls.
     *
     * If you provide your own `Moji` instance then you can set this to an empty
     * array `[]`.
     *
     * ```ts
     * import data from 'svgmoji/emoji.json';
     *
     * const emojiExtension = new EmojiExtension({ data, moji: 'noto' });
     * ```
     */
    data: FlatEmoji[];
    /**
     * The default representation for the emoji identifier.
     *
     * - `emoji` for the unicode representation of the emoji `👍`
     * - `hexcode` for the hexcode representation `1F44D`
     *
     * This is the value that is assigned to the emoji attributes and will be
     * stored in the `RemirrorJSON` output. If you're backend does not support
     * `unicode` then you should set this to `hexcode`.
     *
     * @defaultValue emoji
     */
    identifier?: 'emoji' | 'hexcode';
    /**
     * The fallback emoji. This is only used when `moji` is not provided or is a
     * string.
     *
     * @defaultValue ':red_question_mark:'
     */
    fallback?: AcceptUndefined<string>;
    /**
     * When true, emoji will be rendered as plain text instead of atom nodes.
     *
     * This is a static property and can only be set at the creation of the emoji
     * extension.
     *
     * @defaultValue false
     */
    plainText?: Static<boolean>;
    /**
     * Under the hood the `EmojiExtension` use `svgmoji` to manage the custom
     * emoji assets.
     *
     * The available options are `'noto'` | `'openmoji'` | `'twemoji'` | `'blob'`
     *
     * @defaultValue 'noto'
     */
    moji?: NamedMojiType | Moji;
    /**
     * The character which will activate the suggestion query callback.
     *
     * @defaultValue ':'
     */
    suggestionCharacter?: string;
    /**
     * A handler which will be called when the suggestions are activated.
     */
    suggestEmoji?: Handler<EmojiSuggestHandler>;
}
export { EmojiOptions }
export { EmojiOptions as EmojiOptions_alias_1 }

declare type EmojiSuggestHandler = (props: EmojiSuggestHandlerProps) => void;
export { EmojiSuggestHandler }
export { EmojiSuggestHandler as EmojiSuggestHandler_alias_1 }

/**
 * The emoji command. Pass in the unique identifier which can either be a
 * shortcode, hexcode, emoji etc and it find the matching emoji for you.
 */
declare type EmojiSuggestHandlerCommand = (emoji: string) => void;
export { EmojiSuggestHandlerCommand }
export { EmojiSuggestHandlerCommand as EmojiSuggestHandlerCommand_alias_1 }

declare interface EmojiSuggestHandlerProps {
    /**
     * The query value after the activation character.
     */
    query: string;
    /**
     * The full text value of the queried match.
     */
    text: string;
    /**
     * A function that takes the current suggested area and applies the command
     * for the current range.
     */
    apply: EmojiSuggestHandlerCommand;
    /**
     * The range of the matching suggestion.
     */
    range: FromToProps;
    /**
     * The `Moji` instance which can be used for searching for relevant emoji or
     * finding an emoji that matches the constraints of the user.
     */
    moji: Moji;
    /**
     * `true` when this change was triggered by an exit. Both `exit` and `change`
     * can be true when jumping between matching suggestion positions in the
     * document.
     */
    exit: boolean;
    /**
     * `true` when the update to the suggestion was caused by a change to the
     * query, or cursor position in the matching position.
     *
     * This can be true while `exit` is true if a change was caused by jumping
     * between matching suggestion positions.
     */
    change: boolean;
}
export { EmojiSuggestHandlerProps }
export { EmojiSuggestHandlerProps as EmojiSuggestHandlerProps_alias_1 }

export { FlatEmoji }
export { FlatEmoji as FlatEmoji_alias_1 }

declare type NamedMojiType = keyof typeof DefaultMoji;
export { NamedMojiType }
export { NamedMojiType as NamedMojiType_alias_1 }

export { }

declare global {
  namespace Remirror {
    interface AllExtensions {
      emoji: EmojiExtension;
    }
  }
}
