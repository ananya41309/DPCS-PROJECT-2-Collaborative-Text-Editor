import type { SpriteCollectionType } from './constants';
import type { FlatEmoji, MinifiedEmoji } from './types';
interface MojiProps {
    /**
     * The data which is used to check the existing emoji.
     */
    data: FlatEmoji[] | MinifiedEmoji[];
    /**
     * The default sprite to use.
     */
    type: SpriteCollectionType;
    /**
     * The default emoji hexcode to use.
     *
     * @default `1F44D` // 👍
     */
    fallback?: string;
    /**
     * A list of the popular emoji that should be used when the query is empty.
     *
     * The string can be the hexcode or the native emoji unicode.
     *
     * @default `POPULAR_EMOJI`
     */
    popular?: string[];
}
export declare abstract class Moji {
    #private;
    /**
     * The name of the svgmoji.
     */
    abstract readonly name: string;
    /**
     * The version to retrieve from the cdn.
     */
    abstract readonly version: string;
    /**
     * All the available emoji.
     */
    readonly data: FlatEmoji[];
    /**
     * Only data without tones included.
     */
    readonly tonelessData: FlatEmoji[];
    /**
     * The type of sprite to load.
     */
    type: SpriteCollectionType;
    /**
     * The fallback emoji to use when none can be found.
     */
    fallback: FlatEmoji;
    /**
     * A list of popular emoji that can be presented when an empty string is provided as the query.
     */
    popularEmoji: FlatEmoji[];
    get cdn(): string;
    get fallbackUrl(): string;
    /**
     * @param data - data which is used to lookup the groups and subgroups for the emoji instance
     * @param fallback - the default hexcode to use when none can be found.
     */
    constructor({ data, type, fallback, popular }: MojiProps);
    /**
     * Get the CDN url from the provided emoji hexcode, emoticon or unicode string.
     */
    url(emoji: FlatEmoji): string;
    url(code: string, options: {
        fallback: false;
    }): string | undefined;
    url(code: string, options?: {
        fallback?: true;
    }): string;
    /**
     * Get an the emoji object of a value by it's hexcode, emoticon or unicode string.
     */
    find(code: string): FlatEmoji | undefined;
    /**
     * Search for the nearest emoji using the `match-sorter` algorithm.
     */
    search(query: string, options?: BaseMojiProps): FlatEmoji[];
    /**
     * Get skins from emoji
     */
    getTones(emoji: FlatEmoji): FlatEmoji[];
    /**
     * Populate the popular emoji codes.
     */
    private populatePopularEmoji;
}
interface BaseMojiProps {
    /**
     * When true only emoji without tone data will be used.
     *
     * @default true;
     */
    excludeTone?: boolean;
    /**
     * The maximum number of results that can be returned by a search. Set to -1 to include all
     * results.
     *
     * @default 20
     */
    maxResults?: number;
}
/**
 * A list of some of the most popular emoji.
 *
 * Derived from https://home.unicode.org/emoji/emoji-frequency/
 */
export declare const DEFAULT_POPULAR_EMOJI: string[];
export {};
