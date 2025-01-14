import type { AttributesProps, EditorSchema, EditorState, EditorView, Fragment, KeyBindingCommandFunction, KeyBindings, Mark, MarkTypesProps, NodeTypeProps, NodeTypesProps, OptionalMarkProps, OptionalProsemirrorNodeProps, PosProps, ProsemirrorAttributes, ProsemirrorKeyBindings, ProsemirrorNode, ProsemirrorNodeProps, ResolvedPos, Selection, SelectionProps, Transaction, TransactionProps } from '@remirror/core-types';
import type { MarkSpec, NodeSpec } from '@remirror/pm/model';
interface NodeEqualsTypeProps extends NodeTypesProps, OptionalProsemirrorNodeProps {
}
/**
 * Checks if the type a given `node` has a given `nodeType`.
 */
export declare function isNodeOfType(props: NodeEqualsTypeProps): boolean;
interface MarkEqualsTypeProps extends MarkTypesProps, OptionalMarkProps {
}
/**
 * Creates a new transaction object from a given transaction. This is useful
 * when applying changes to a transaction, that you may want to rollback.
 *
 * ```ts
 * function() applyUpdateIfValid(state: EditorState) {
 *   const tr = cloneTransaction(state.tr);
 *
 *   tr.insertText('hello');
 *
 *   if (!checkValid(tr)) {
 *     return;
 *   }
 *
 *   applyClonedTransaction({ clone: tr, tr: state.tr });
 * }
 * ```
 *
 * The above example applies a transaction to the cloned transaction then checks
 * to see if the changes are still valid and if they are applies the mutative
 * changes to the original state transaction.
 *
 * @param tr - the prosemirror transaction
 */
export declare function cloneTransaction(tr: Transaction): Transaction;
interface ApplyClonedTransactionProps extends TransactionProps {
    /**
     * The clone.
     */
    clone: Transaction;
}
/**
 * Apply the steps of a cloned transaction to the original transaction `tr`.
 */
export declare function applyClonedTransaction(props: ApplyClonedTransactionProps): void;
/**
 * Returns a new transaction by combining all steps of the passed transactions onto the previous state
 */
export declare function composeTransactionSteps(transactions: readonly Transaction[], oldState: EditorState): Transaction;
/**
 * Checks if the type a given `node` has a given `nodeType`.
 */
export declare function markEqualsType(props: MarkEqualsTypeProps): boolean;
interface RemoveNodeAtPositionProps extends TransactionProps, PosProps {
}
/**
 * Performs a `delete` transaction that removes a node at a given position with
 * the given `node`. `position` should point at the position immediately before
 * the node.
 *
 * @param position - the prosemirror position
 */
export declare function removeNodeAtPosition({ pos, tr }: RemoveNodeAtPositionProps): Transaction;
interface ReplaceNodeAtPositionProps extends RemoveNodeAtPositionProps {
    content: Fragment | ProsemirrorNode | ProsemirrorNode[];
}
/**
 * Replaces the node at the provided position with the provided content.
 */
export declare function replaceNodeAtPosition({ pos, tr, content, }: ReplaceNodeAtPositionProps): Transaction;
/**
 * Returns DOM reference of a node at a given `position`.
 *
 * @remarks
 *
 * If the node type is of type `TEXT_NODE` it will return the reference of the
 * parent node.
 *
 * A simple use case
 *
 * ```ts
 * const element = findElementAtPosition($from.pos, view);
 * ```
 *
 * @param position - the prosemirror position
 * @param view - the editor view
 */
export declare function findElementAtPosition(position: number, view: EditorView): HTMLElement;
/**
 * Iterates over parent nodes, returning the closest node and its start position
 * that the `predicate` returns truthy for. `start` points to the start position
 * of the node, `pos` points directly before the node.
 *
 * ```ts
 * const predicate = node => node.type === schema.nodes.blockquote;
 * const parent = findParentNode({ predicate, selection });
 * ```
 */
export declare function findParentNode(props: FindParentNodeProps): FindProsemirrorNodeResult | undefined;
/**
 * Finds the node at the resolved position.
 *
 * @param $pos - the resolve position in the document
 */
export declare function findNodeAtPosition($pos: ResolvedPos): FindProsemirrorNodeResult;
/**
 * Finds the node at the passed selection.
 */
export declare function findNodeAtSelection(selection: Selection): FindProsemirrorNodeResult;
interface FindParentNodeOfTypeProps extends NodeTypesProps, StateSelectionPosProps {
}
/**
 *  Iterates over parent nodes, returning closest node of a given `nodeType`.
 *  `start` points to the start position of the node, `pos` points directly
 *  before the node.
 *
 *  ```ts
 *  const parent = findParentNodeOfType({types: schema.nodes.paragraph, selection});
 *  ```
 */
export declare function findParentNodeOfType(props: FindParentNodeOfTypeProps): FindProsemirrorNodeResult | undefined;
/**
 * Returns position of the previous node.
 *
 * ```ts
 * const pos = findPositionOfNodeBefore(tr.selection);
 * ```
 *
 * @param selection - the prosemirror selection
 *
 * @deprecated This util is hard to use and not that useful
 */
export declare function findPositionOfNodeBefore(value: Selection | ResolvedPos | EditorState | Transaction): FindProsemirrorNodeResult | undefined;
/**
 * Updates the provided transaction to remove the node before.
 *
 * ```ts
 * dispatch(
 *    removeNodeBefore(state.tr)
 * );
 * ```
 *
 * @param tr
 *
 * @deprecated This util is hard to use and not that useful
 */
export declare function removeNodeBefore(tr: Transaction): Transaction;
interface FindSelectedNodeOfTypeProps extends NodeTypesProps, SelectionProps {
}
/**
 * Returns a node of a given `nodeType` if it is selected. `start` points to the
 * start position of the node, `pos` points directly before the node.
 *
 * ```ts
 * const { extension, inlineExtension, bodiedExtension } = schema.nodes;
 *
 * const selectedNode = findSelectedNodeOfType({
 *   types: [extension, inlineExtension, bodiedExtension],
 *   selection,
 * });
 * ```
 */
export declare function findSelectedNodeOfType(props: FindSelectedNodeOfTypeProps): FindProsemirrorNodeResult | undefined;
export interface FindProsemirrorNodeResult extends ProsemirrorNodeProps {
    /**
     * The start position of the node.
     */
    start: number;
    /**
     * The end position of the node.
     */
    end: number;
    /**
     * Points to position directly before the node.
     */
    pos: number;
    /**
     * The depth the node. Equal to 0 if node is the root.
     */
    depth: number;
}
interface StateSelectionPosProps {
    /**
     * Provide an editor state, or the editor selection or a resolved position.
     */
    selection: EditorState | Selection | ResolvedPos;
}
interface FindParentNodeProps extends StateSelectionPosProps {
    predicate: (node: ProsemirrorNode, pos: number) => boolean;
}
/**
 * Returns the position of the node after the current position, selection or
 * state.
 *
 * ```ts
 * const pos = findPositionOfNodeBefore(tr.selection);
 * ```
 *
 * @param selection - the prosemirror selection
 *
 * @deprecated This util is hard to use and not that useful
 */
export declare function findPositionOfNodeAfter(value: Selection | ResolvedPos | EditorState): FindProsemirrorNodeResult | undefined;
/**
 * Update the transaction to delete the node after the current selection.
 *
 * ```ts
 * dispatch(removeNodeBefore(state.tr));
 * ```
 *
 * @param tr
 *
 * @deprecated This util is hard to use and not that useful
 */
export declare function removeNodeAfter(tr: Transaction): Transaction;
/**
 * Checks whether the selection or state is currently empty.
 *
 * @param value - the transaction selection or state
 */
export declare function isSelectionEmpty(value: Transaction | EditorState | Selection): boolean;
/**
 * Check to see if a transaction has changed either the document or the current
 * selection.
 *
 * @param tr - the transaction to check
 */
export declare function hasTransactionChanged(tr: Transaction): boolean;
/**
 * Checks whether the node type passed in is active within the region. Used by
 * extensions to implement the `active` method.
 *
 * To ignore `attrs` just leave the attrs object empty or undefined.
 *
 * @param props - see [[`GetActiveAttrsProps`]]
 */
export declare function isNodeActive(props: GetActiveAttrsProps): boolean;
interface GetActiveAttrsProps extends NodeTypeProps, Partial<AttributesProps> {
    /**
     * State or transaction parameter.
     */
    state: EditorState | Transaction;
}
/**
 * Get node of a provided type with the provided attributes if it exists as a
 * parent. Returns positional data for the node that was found.
 */
export declare function getActiveNode(props: GetActiveAttrsProps): FindProsemirrorNodeResult | undefined;
/**
 * The ProseMirror `Schema` as a JSON object.
 */
export interface SchemaJSON<Nodes extends string = string, Marks extends string = string> {
    /**
     * The nodes of the schema.
     */
    nodes: Record<Nodes, NodeSpec>;
    /**
     * The marks within the schema.
     */
    marks: Record<Marks, MarkSpec>;
}
/**
 * Converts a `schema` to a JSON compatible object.
 */
export declare function schemaToJSON<Nodes extends string = string, Marks extends string = string>(schema: EditorSchema): SchemaJSON<Nodes, Marks>;
/**
 * Chains together keybindings, allowing for the same key binding to be used
 * across multiple extensions without overriding behavior.
 *
 * @remarks
 *
 * When `next` is called it hands over full control of the keybindings to the
 * function that invokes it.
 */
export declare function chainKeyBindingCommands(...commands: KeyBindingCommandFunction[]): KeyBindingCommandFunction;
/**
 * This merges an array of keybindings into one keybinding with the priority
 * given to the items earlier in the array. `index: 0` has priority over `index:
 * 1` which has priority over `index: 2` and so on.
 *
 * This is for use on remirror keybindings. See `mergeProsemirrorKeyBindings`
 * for transforming the methods into `ProsemirrorCommandFunction`'s.
 */
export declare function mergeKeyBindings(extensionKeymaps: KeyBindings[]): KeyBindings;
/**
 * This merges an array of keybindings into one keybinding with the priority
 * given to the items earlier in the array. `index: 0` has priority over `index:
 * 1` which has priority over `index: 2` and so on.
 *
 * This supports the [[ProsemirrorCommandFunction]] type signature where the
 * `state`, `dispatch` and `view` are passed as separate arguments.
 */
export declare function mergeProsemirrorKeyBindings(extensionKeymaps: KeyBindings[]): ProsemirrorKeyBindings;
/**
 * Determines if a Node or Mark contains the given attributes in its attributes set
 *
 * @param nodeOrMark - The Node or Mark to check
 * @param attrs - The set of attributes it must contain
 */
export declare function containsAttributes(nodeOrMark: ProsemirrorNode | Mark, attrs: ProsemirrorAttributes): boolean;
export {};
