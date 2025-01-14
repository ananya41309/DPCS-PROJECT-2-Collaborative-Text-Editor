import type { FlatEmoji, MinifiedEmoji } from './types';
/**
 * Minify emoji which can be useful for reducing the json bundlesize.
 */
export declare function minifyEmoji(emojis: readonly FlatEmoji[]): readonly MinifiedEmoji[];
/**
 * Remove the undefined values from an object.
 */
export declare function omitUndefined<Type extends object>(object: Type): Type;
