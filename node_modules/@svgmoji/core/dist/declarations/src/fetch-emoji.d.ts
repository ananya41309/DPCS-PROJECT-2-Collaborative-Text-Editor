import type { Locale, ShortcodePreset } from 'emojibase';
import { FetchFromCDNOptions } from './fetch-from-cdn';
import type { FlatEmoji } from './types';
export interface FetchEmojisOptions<Type extends Locale> extends FetchFromCDNOptions {
    shortcodes?: Array<EmojiShortcodeLocale<Type> | ShortcodePreset>;
}
export declare type EmojiShortcodeLocale<Type extends Locale> = `${Exclude<Locale, Type>}/${ShortcodePreset}`;
export declare function fetchEmojis<Type extends Locale>(locale: Type, options?: FetchEmojisOptions<Type>): Promise<FlatEmoji[]>;
