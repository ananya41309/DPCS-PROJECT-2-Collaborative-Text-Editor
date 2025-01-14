import type { MaybeEmoji, ShortcodesDataset } from 'emojibase';
export declare function joinShortcodesToEmoji<Type extends MaybeEmoji>(emoji: Type, shortcodeDatasets: ShortcodesDataset[]): Type;
