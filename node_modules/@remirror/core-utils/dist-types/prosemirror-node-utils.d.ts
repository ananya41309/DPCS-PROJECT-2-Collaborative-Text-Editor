import type { AnyConstructor, MarkTypeProps, NodeTypeProps, OptionalProsemirrorNodeProps, PosProps, PredicateProps, Primitive, ProsemirrorNode, ProsemirrorNodeProps, Transaction } from '@remirror/core-types';
import type { NodeRange } from '@remirror/pm/model';
import type { Step } from '@remirror/pm/transform';
interface DescendProps {
    /**
     * Whether to descend into a node.
     *
     * @defaultValue true
     */
    descend: boolean;
}
type NodePredicateProps = PredicateProps<NodeWithPosition>;
/**
 * A node with it's start position.
 */
export interface NodeWithPosition extends ProsemirrorNodeProps, PosProps {
}
interface NodeActionProps {
    /**
     * A method which is run whenever the provided predicate returns true.
     *
     * This avoids the need for multiple passes over the same data, first to
     * gather and then to process. When viable ,why not just get it done.
     */
    action?: (node: NodeWithPosition) => void;
}
interface BaseFindProps extends OptionalProsemirrorNodeProps, Partial<DescendProps>, NodeActionProps {
}
interface FindChildrenProps extends BaseFindProps, NodePredicateProps {
}
/**
 * Iterates over descendants of a given `node`, returning child nodes predicate
 * returns truthy for.
 *
 * @remarks
 *
 * It doesn't descend into a node when descend argument is `false` (defaults to
 * `true`).
 *
 * ```ts
 * const textNodes = findChildren({
 *   node: state.doc,
 *   predicate: child => child.isText,
 *   descend: false
 * });
 * ```
 */
export declare function findChildren(props: FindChildrenProps): NodeWithPosition[];
/**
 * Returns text nodes of a given `node`.
 *
 * @remarks
 * It doesn't descend into a node when descend argument is `false` (defaults to
 * `true`).
 *
 * ```ts
 * const textNodes = findTextNodes({ node });
 * ```
 */
export declare const findTextNodes: (props: BaseFindProps) => NodeWithPosition[];
/**
 * Returns inline nodes of a given `node`.
 *
 * @remarks
 * It doesn't descend into a node when descend argument is `false` (defaults to
 * `true`).
 *
 * ```ts
 * const inlineNodes = findInlineNodes(node);
 * ```
 */
export declare const findInlineNodes: (props: BaseFindProps) => NodeWithPosition[];
/**
 * Returns block descendants of a given `node`.
 *
 * @remarks
 *
 * It doesn't descend into a node when descend argument is `false` (defaults to
 * `true`).
 *
 * ```ts
 * const blockNodes = findBlockNodes(node);
 * ```
 */
export declare const findBlockNodes: (props: BaseFindProps) => NodeWithPosition[];
type AttributePredicate = (props: {
    value: unknown;
    exists: boolean;
}) => boolean;
interface FindChildrenByAttrProps extends BaseFindProps {
    /**
     * This can either be any primitive value or a function that takes the `value`
     * as the first argument and whether the key exists within the attributes as
     * the second argument.
     */
    attrs: {
        [key: string]: Primitive | AttributePredicate;
    };
}
/**
 * Iterates over descendants of a given `node`, returning child nodes predicate
 * returns truthy for.
 *
 * @remarks
 *
 * It doesn't descend into a node when descend argument is `false` (defaults to
 * `true`).
 *
 * The following will match any node with an `id` of any value (as long as the
 * attribute exists) and a `colspan` of `2`.
 *
 * ```ts
 * const mergedCells = findChildrenByAttribute({
 *   node: table,
 *   attrs: { colspan: 2, id: (_, exists) => exists }
 * });
 * ```
 */
export declare function findChildrenByAttribute(props: FindChildrenByAttrProps): NodeWithPosition[];
interface FindChildrenByNodeProps extends BaseFindProps, NodeTypeProps {
}
/**
 * Iterates over descendants of a given `node`, returning child nodes of a given
 * nodeType.
 *
 * @remarks
 *
 * It doesn't descend into a node when descend argument is `false` (defaults to
 * `true`).
 *
 * ```ts
 * const cells = findChildrenByNode({ node: state.doc, type: state.schema.nodes.tableCell });
 * ```
 */
export declare function findChildrenByNode(props: FindChildrenByNodeProps): NodeWithPosition[];
interface FindChildrenByMarkProps extends BaseFindProps, MarkTypeProps {
}
/**
 * Iterates over descendants of a given `node`, returning child nodes that have
 * a mark of a given markType.
 *
 * @remarks
 *
 * It doesn't descend into a `node` when descend argument is `false` (defaults
 * to `true`).
 *
 * ```ts
 * const nodes = findChildrenByMark({ node: state.doc, type: schema.marks.strong });
 * ```
 */
export declare function findChildrenByMark(paramter: FindChildrenByMarkProps): NodeWithPosition[];
interface ContainsProps extends ProsemirrorNodeProps, NodeTypeProps {
}
/**
 * Returns `true` if a given node contains nodes of a given `nodeType`.
 *
 * @remarks
 *
 * ```ts
 * if (containsNodesOfType({ node: state.doc, type: schema.nodes.listItem })) {
 *   log('contained')
 * }
 * ```
 */
export declare function containsNodesOfType(props: ContainsProps): boolean;
interface GetChangedNodesOptions {
    /**
     * Whether to descend into child nodes.
     *
     * @defaultValue false
     */
    descend?: boolean;
    /**
     * A predicate test for node which was found. Return `false` to skip the node.
     *
     * @param node - the node that was found
     * @param pos - the pos of that node
     * @param range - the `NodeRange` which contained this node.
     */
    predicate?: (node: ProsemirrorNode, pos: number, range: NodeRange) => boolean;
    /**
     * The valid step types to check for. Set to an empty array to accept all
     * types.
     *
     * @defaultValue [ReplaceStep]
     */
    StepTypes?: Array<AnyConstructor<Step>>;
}
/**
 * Get all the changed nodes from the provided transaction.
 *
 * The following example will give us all the text nodes in the provided
 * transaction.
 *
 * ```ts
 * import { getChangedNodes } from 'remirror/core';
 *
 * const changedTextNodes = getChangeNodes(tr, { descend: true, predicate: (node) => node.isText });
 * ```
 */
export declare function getChangedNodes(tr: Transaction, options?: GetChangedNodesOptions): NodeWithPosition[];
export {};
