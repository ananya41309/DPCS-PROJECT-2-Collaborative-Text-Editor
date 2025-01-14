import type { ValueOf } from 'type-fest';
export declare const SpriteCollection: {
    /**
     * A larger bundle size with all the available emoji in one package.
     */
    readonly All: "all";
    /**
     * Break the emoji down into 10 separate groups.
     */
    readonly Group: "group";
    /**
     * Further break the emoji down into even smaller sub groups.
     */
    readonly Subgroup: "sub-group";
    /**
     * Get the direct url for the emoji
     */
    readonly Individual: "individual";
};
export declare type SpriteCollectionType = ValueOf<typeof SpriteCollection>;
export interface EmojiGithubMeta {
    owner: string;
    repo: string;
    sha: string;
    /**
     * The name of the emoji library.
     */
    name: string;
    /**
     * The directory to the emoji directory.
     */
    directory: string;
}
