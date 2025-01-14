import type { Emoji as BaseEmoji, ShortcodesDataset } from 'emojibase';
import type { FlatEmoji } from './types';
export declare function flattenEmojiData(data: BaseEmoji[], shortcodeDatasets?: ShortcodesDataset[]): FlatEmoji[];
