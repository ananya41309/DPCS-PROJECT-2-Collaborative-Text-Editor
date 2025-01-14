import type { FlatEmoji, MinifiedEmoji } from './types';
export declare function isMinifiedEmoji(value: unknown): value is MinifiedEmoji;
export declare function isFlatEmoji(value: unknown): value is FlatEmoji;
export declare function isMinifiedEmojiList(list: unknown[]): list is MinifiedEmoji[];
export declare function isFlatEmojiList(list: unknown[]): list is FlatEmoji[];
