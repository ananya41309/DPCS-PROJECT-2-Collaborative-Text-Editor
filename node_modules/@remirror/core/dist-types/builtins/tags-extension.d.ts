import { ExtensionTagType } from '@remirror/core-constants';
import type { UseDefault } from '@remirror/core-types';
import { AnyExtension, GetMarkNameUnion, GetNameUnion, GetNodeNameUnion, GetPlainNameUnion, PlainExtension } from '../extension';
/**
 * Create the extension tags which are passed into each extensions method to
 * enable dynamically generated rules and commands.
 *
 * Tags on nodes and marks are automatically added to the schema as groups.
 *
 * @category Builtin Extension
 */
export declare class TagsExtension extends PlainExtension {
    get name(): "tags";
    /**
     * Track the tags which have been applied to the extensions in this editor.
     */
    private allTags;
    /**
     * The tags for plain extensions.
     */
    private plainTags;
    /**
     * The tags for mark extensions.
     */
    private markTags;
    /**
     * The tags for node extensions.
     */
    private nodeTags;
    /**
     * Create the tags which are used to identify extension with particular
     * behavioral traits.
     */
    onCreate(): void;
    /**
     * Reset the tags to the empty object with empty arrays.
     */
    private resetTags;
    /**
     * Update the tags object for each extension.
     */
    private updateTagForExtension;
}
/**
 * Check if the provided string is an extension tag.
 */
export declare function isExtensionTag(value: string): value is ExtensionTagType;
/**
 * The shape of the tag data stored by the extension manager.
 *
 * This data can be used by other extensions to dynamically determine which
 * nodes should affected by commands / plugins / keys etc...
 */
export type CombinedTags<Name extends string = string> = Record<ExtensionTagType, Name[]>;
declare global {
    namespace Remirror {
        interface ManagerSettings {
            /**
             * Add extra tags to the extensions by name. This can be used to add
             * behavior traits to certain extensions.
             *
             * Please note this will change the schema since the tags are added to the
             * node and mark groups.
             *
             * ```ts
             * RemirrorManager.create(
             *   [],
             *   { extraTags: { bold: [ExtensionTag.Awesome] } }
             * );
             * ```
             */
            extraTags?: Record<string, ExtensionTagType[]>;
        }
        interface BaseExtension {
            /**
             * The generated tags for this extension are added here. Do not add this
             * property to your extensions as it will be overridden.
             */
            tags: ExtensionTagType[];
            /**
             * Dynamically create tags for the extension.
             *
             * Tags are a helpful tool for categorizing the behavior of an extension.
             * This behavior is later grouped in the `Manager` and passed to the
             * `extensionStore`. Tags can be used by commands that need to remove all
             * formatting and use the tag to identify which registered extensions are
             * formatters.
             *
             * @remarks
             *
             * Tags are also automatically added to the node and mark extensions as a
             * group when they are found there.
             *
             * There are internally defined tags but it's also possible to define any
             * custom string as a tag. See [[`ExtensionTag`]].
             */
            createTags?(): ExtensionTagType[];
        }
        type A = UseDefault<never, string>;
        interface ManagerStore<Extension extends AnyExtension> {
            /**
             * All the tags provided by the configured extensions.
             */
            tags: Readonly<CombinedTags<GetNameUnion<Extension> extends never ? string : GetNameUnion<Extension>>>;
            /**
             * All the plain extension tags provided for the editor.
             */
            plainTags: Readonly<CombinedTags<GetPlainNameUnion<Extension> extends never ? string : GetPlainNameUnion<Extension>>>;
            /**
             * All the node extension tags provided for the editor.
             */
            nodeTags: Readonly<CombinedTags<GetNodeNameUnion<Extension> extends never ? string : GetNodeNameUnion<Extension>>>;
            /**
             * All the mark extension tags provided for the editor.
             */
            markTags: Readonly<CombinedTags<GetMarkNameUnion<Extension> extends never ? string : GetMarkNameUnion<Extension>>>;
        }
        interface ExtensionStore {
            /**
             * All the tags provided by the configured extensions.
             */
            tags: CombinedTags;
            /**
             * All the plain extension tags provided for the editor.
             */
            plainTags: CombinedTags;
            /**
             * All the node extension tags provided for the editor.
             */
            nodeTags: CombinedTags;
            /**
             * All the mark extension tags provided for the editor.
             */
            markTags: CombinedTags;
        }
        interface BaseExtensionOptions {
            /**
             * Add extra tags to the extension.
             *
             * Tags can be used to unlock certain behavioural traits for nodes and
             * marks.
             *
             * Please note this will change the schema since the tags are added to the
             * node and mark groups.
             */
            extraTags?: ExtensionTagType[];
        }
        interface AllExtensions {
            tags: TagsExtension;
        }
    }
}
