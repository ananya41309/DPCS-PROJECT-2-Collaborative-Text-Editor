import { ExtensionTagType } from '@remirror/core-constants';
import type { EditorSchema, MarkExtensionSpec, MarkSpecOverride, NodeExtensionSpec, NodeSpecOverride, SchemaAttributes, Static } from '@remirror/core-types';
import { AnyExtension, GetMarkNameUnion, GetNodeNameUnion, PlainExtension } from '../extension';
import type { CreateExtensionPlugin } from '../types';
/**
 * This is the schema extension which creates the schema and provides extra
 * attributes as defined in the manager or the extension settings.
 *
 * @remarks
 *
 * The schema is the most important part of the remirror editor. This is the
 * extension responsible for creating it, injecting extra attributes and
 * managing the plugin which is responsible for making sure dynamically created
 * attributes are updated.
 *
 * In order to add extra attributes the following would work.
 *
 * ```ts
 * import { RemirrorManager } from 'remirror';
 * import uuid from 'uuid';
 * import hash from 'made-up-hasher';
 *
 * const manager = RemirrorManager.create([], {
 *   extraAttributes: [
 *     {
 *       identifiers: 'nodes',
 *       attributes: {
 *         awesome: {
 *           default: 'awesome',
 *           parseDOM: (domNode) => domNode.getAttribute('data-awesome'),
 *           toDOM: (attrs) => ([ 'data-awesome', attrs.awesome ])
 *         },
 *       },
 *     },
 *     { identifiers: ['paragraph'], attributes: { id: { default: () => uuid() } } },
 *     { identifiers: ['bold'], attributes: { hash: (mark) => hash(JSON.stringify(mark.attrs)) } },
 *   ],
 * })
 * ```
 *
 * It is an array of identifiers and attributes. Setting the default to a
 * function allows you to set up a dynamic attribute which is updated with the
 * synchronous function that you provide to it.
 *
 * @category Builtin Extension
 */
export declare class SchemaExtension extends PlainExtension {
    get name(): "schema";
    /**
     * The dynamic attributes for each node and mark extension.
     *
     * The structure will look like the following.
     *
     * ```ts
     * {
     *   paragraph: { id: () => uid(), hash: (node) => hash(node) },
     *   bold: { random: () => Math.random(), created: () => Date.now() },
     * };
     * ```
     *
     * This object is used by the created plugin to listen for changes to the doc,
     * and check for new nodes and marks which haven't yet applied the dynamic
     * attribute and add the attribute.
     */
    private readonly dynamicAttributes;
    /**
     * This method is responsible for creating, configuring and adding the
     * `schema` to the editor. `Schema` is a special type in ProseMirror editors
     * and with `remirror` it's all just handled for you.
     */
    onCreate(): void;
    /**
     * This creates the plugin that is used to automatically create the dynamic
     * attributes defined in the extra attributes object.
     */
    createPlugin(): CreateExtensionPlugin;
    /**
     * Add the schema and nodes to the manager and extension store.
     */
    private addSchema;
    /**
     * Check the dynamic nodes to see if the provided node:
     *
     * - a) is dynamic and therefore can be updated.
     * - b) has just been created and does not yet have a value for the dynamic
     *   node.
     *
     * @param node - the node
     * @param pos - the node's position
     * @param tr - the mutable ProseMirror transaction which is applied to create
     * the next editor state
     */
    private checkAndUpdateDynamicNodes;
    /**
     * Loop through the dynamic marks to see if the provided node:
     *
     * - a) is wrapped by a matching mark.
     * - b) has just been added and doesn't yet have the dynamic attribute
     *   applied.
     *
     * @param node - the node
     * @param pos - the node's position
     * @param tr - the mutable ProseMirror transaction which is applied to create
     * the next editor state.
     */
    private checkAndUpdateDynamicMarks;
    /**
     * Gather all the extra attributes that have been added by extensions.
     */
    private gatherExtraAttributes;
}
/**
 * With tags, you can select a specific sub selection of marks and nodes. This
 * will be the basis for adding advanced formatting to remirror.
 *
 * ```ts
 * import { ExtensionTag } from 'remirror';
 * import { createCoreManager, CorePreset } from 'remirror/extensions';
 * import { WysiwygPreset } from 'remirror/extensions';
 *
 * const manager = createCoreManager(() => [new WysiwygPreset(), new CorePreset()], {
 *   extraAttributes: [
 *     {
 *       identifiers: {
 *         tags: [ExtensionTag.NodeBlock],
 *         type: 'node',
 *       },
 *       attributes: { role: 'presentation' },
 *     },
 *   ],
 * });
 * ```
 *
 * Each item in the tags array should be read as an `OR` so the following would
 * match `Tag1` OR `Tag2` OR `Tag3`.
 *
 * ```json
 * { tags: ["Tag1", "Tag2", "Tag3"] }
 * ```
 *
 * The `type` property (`mark | node`) is exclusive and limits the type of
 * extension names that will be matched. When `mark` is set it only matches with
 * marks.
 */
export interface IdentifiersObject {
    /**
     * Determines how the array of tags are combined:
     *
     * - `all` - the extension only matches when all tags are present.
     * - `any` - the extension will match if it includes any of the specified
     *   tags.
     *
     * This only affects the `tags` property.
     *
     * The saddest part about this property is that, as a UK resident, I've
     * succumbed to using the Americanized spelling instead of the Oxford
     * Dictionary defined spelling of `behaviour` 😢
     *
     * @defaultValue 'any'
     */
    behavior?: 'all' | 'any';
    /**
     * Will find relevant names based on the defined `behaviour`.
     */
    tags?: ExtensionTagType[];
    /**
     * Additional names to include. These will still be added even if the
     * extension name matches with `excludeTags` member.
     */
    names?: string[];
    /**
     * Whether to restrict by whether this is a [[`ProsemirrorNode`]] or a
     * [[`Mark`]]. Leave blank to accept all types.
     */
    type?: 'node' | 'mark';
    /**
     * Exclude these names from being matched.
     */
    excludeNames?: string[];
    /**
     * Exclude these tags from being matched. Will always exclude if any of the
     * tags
     */
    excludeTags?: string[];
}
/**
 * The extra identifiers that can be used.
 *
 * - `nodes` - match all nodes
 * - `marks` - match all marks
 * - `all` - match everything in the editor
 * - `string[]` - match the selected node and mark names
 * - [[`IdentifiersObject`]] - match by `ExtensionTag` and type name.
 */
export type Identifiers = 'nodes' | 'marks' | 'all' | readonly string[] | IdentifiersObject;
/**
 * The interface for adding extra attributes to multiple node and mark
 * extensions.
 */
export interface IdentifierSchemaAttributes {
    /**
     * The nodes or marks to add extra attributes to.
     *
     * This can either be an array of the strings or the following specific
     * identifiers:
     *
     * - 'nodes' for all nodes
     * - 'marks' for all marks
     * - 'all' for all extensions which touch the schema.
     */
    identifiers: Identifiers;
    /**
     * The attributes to be added.
     */
    attributes: SchemaAttributes;
}
declare global {
    namespace Remirror {
        interface BaseExtension {
            /**
             * Allows the extension to create an extra attributes array that will be
             * added to the extra attributes.
             *
             * For example the `@remirror/extension-bidi` adds a `dir` attribute to
             * all node extensions which allows them to automatically infer whether
             * the text direction should be right-to-left, or left-to-right.
             */
            createSchemaAttributes?(): IdentifierSchemaAttributes[];
        }
        interface BaseExtensionOptions {
            /**
             * Inject additional attributes into the defined mark / node schema. This
             * can only be used for `NodeExtensions` and `MarkExtensions`.
             *
             * @remarks
             *
             * Sometimes you need to add additional attributes to a node or mark. This
             * property enables this without needing to create a new extension.
             *
             * This is only applied to the `MarkExtension` and `NodeExtension`.
             *
             * @defaultValue {}
             */
            extraAttributes?: Static<SchemaAttributes>;
            /**
             * When true will disable extra attributes for this instance of the
             * extension.
             *
             * @remarks
             *
             * This is only applied to the `MarkExtension` and `NodeExtension`.
             *
             * @defaultValue undefined
             */
            disableExtraAttributes?: Static<boolean>;
            /**
             * An override for the mark spec object. This only applies for
             * `MarkExtension`.
             */
            markOverride?: Static<MarkSpecOverride>;
            /**
             * An override object for a node spec object. This only applies to the
             * `NodeExtension`.
             */
            nodeOverride?: Static<NodeSpecOverride>;
        }
        interface ManagerSettings {
            /**
             * Allows for setting extra attributes on multiple nodes and marks by
             * their name or constructor. These attributes are automatically added and
             * retrieved from from the dom by prosemirror.
             *
             * @remarks
             *
             * An example is shown below.
             *
             * ```ts
             * import { RemirrorManager } from 'remirror';
             *
             * const managerSettings = {
             *   extraAttributes: [
             *     {
             *       identifiers: ['blockquote', 'heading'],
             *       attributes: { id: 'id', alignment: '0', },
             *     }, {
             *       identifiers: ['mention', 'codeBlock'],
             *       attributes: { 'userId': { default: null } },
             *     },
             *   ]
             * };
             *
             * const manager = RemirrorManager.create([], { extraAttributes })
             * ```
             */
            extraAttributes?: IdentifierSchemaAttributes[];
            /**
             * Overrides for the mark.
             */
            markOverride?: Record<string, MarkSpecOverride>;
            /**
             * Overrides for the nodes.
             */
            nodeOverride?: Record<string, NodeSpecOverride>;
            /**
             * Perhaps you don't need extra attributes at all in the editor. This
             * allows you to disable extra attributes when set to true.
             *
             * @defaultValue undefined
             */
            disableExtraAttributes?: boolean;
            /**
             * Setting this to a value will override the default behaviour of the
             * `RemirrorManager`. It overrides the created schema and ignores the
             * specs created by all extensions within your editor.
             *
             * @remarks
             *
             * This is an advanced option and should only be used in cases where there
             * is a deeper understanding of `Prosemirror`. By setting this, please
             * note that a lot of functionality just won't work which is powered by
             * the `extraAttributes`.
             */
            schema?: EditorSchema;
            /**
             * The name of the default block node. This node will be given a higher
             * priority when being added to the schema.
             *
             * By default this is undefined and the default block node is assigned
             * based on the extension priorities.
             *
             * @defaultValue undefined
             */
            defaultBlockNode?: string;
        }
        interface ManagerStore<Extension extends AnyExtension> {
            /**
             * The nodes to place on the schema.
             */
            nodes: Record<GetNodeNameUnion<Extension> extends never ? string : GetNodeNameUnion<Extension>, NodeExtensionSpec>;
            /**
             * The marks to be added to the schema.
             */
            marks: Record<GetMarkNameUnion<Extension> extends never ? string : GetMarkNameUnion<Extension>, MarkExtensionSpec>;
            /**
             * The schema created by this extension manager.
             */
            schema: EditorSchema;
            /**
             * The name of the default block node. This is used by all internal
             * extension when toggling block nodes. It can also be used in other
             * cases.
             *
             * This can be updated via the manager settings when first creating the
             * editor.
             *
             * @defaultValue 'paragraph'
             */
            defaultBlockNode: string;
        }
        interface MarkExtension {
            /**
             * Provides access to the `MarkExtensionSpec`.
             */
            spec: MarkExtensionSpec;
        }
        interface NodeExtension {
            /**
             * Provides access to the `NodeExtensionSpec`.
             */
            spec: NodeExtensionSpec;
        }
        interface ExtensionStore {
            /**
             * The Prosemirror schema being used for the current editor.
             *
             * @remarks
             *
             * The value is created when the manager initializes. So it can be used in
             * `createCommands`, `createHelpers`, `createKeymap` and most of the
             * creator methods.
             */
            schema: EditorSchema;
        }
        interface StaticExtensionOptions {
            /**
             * When true will disable extra attributes for all instances of this
             * extension.
             *
             * @defaultValue false
             */
            readonly disableExtraAttributes?: boolean;
        }
        interface AllExtensions {
            schema: SchemaExtension;
        }
    }
}
