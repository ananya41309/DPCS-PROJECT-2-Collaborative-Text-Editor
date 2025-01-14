import { AllSelection } from '@remirror/pm/state';
import type { AnchorHeadProps } from '@remirror/core-types';
import type { AnyConstructor } from '@remirror/core-types';
import type { ApplySchemaAttributes } from '@remirror/core-types';
import type { AttributesProps } from '@remirror/core-types';
import { chainableEditorState } from '@remirror/pm';
import { chainCommands } from '@remirror/pm';
import type { CommandFunction } from '@remirror/core-types';
import type { CommandFunctionProps } from '@remirror/core-types';
import { convertCommand } from '@remirror/pm';
import type { DOMCompatibleAttributes } from '@remirror/core-types';
import type { EditorSchema } from '@remirror/core-types';
import { EditorState } from '@remirror/pm/state';
import type { EditorState as EditorState_2 } from '@remirror/core-types';
import type { EditorStateProps } from '@remirror/core-types';
import type { EditorView } from '@remirror/core-types';
import { Fragment } from '@remirror/pm/model';
import type { Fragment as Fragment_2 } from '@remirror/core-types';
import type { FromToProps } from '@remirror/core-types';
import type { GetAttributesProps } from '@remirror/core-types';
import { InputRule } from '@remirror/pm/inputrules';
import { KebabCase } from '@remirror/core-types';
import type { KeyBindingCommandFunction } from '@remirror/core-types';
import type { KeyBindings } from '@remirror/core-types';
import type { MakeNullable } from '@remirror/core-types';
import { Mark } from '@remirror/pm/model';
import type { Mark as Mark_2 } from '@remirror/core-types';
import type { MarkSpec } from '@remirror/pm/model';
import type { MarkType } from '@remirror/core-types';
import { MarkType as MarkType_2 } from '@remirror/pm/model';
import type { MarkTypeProps } from '@remirror/core-types';
import type { MarkTypesProps } from '@remirror/core-types';
import { NodeRange } from '@remirror/pm/model';
import { NodeSelection } from '@remirror/pm/state';
import type { NodeSpec } from '@remirror/pm/model';
import type { NodeType } from '@remirror/core-types';
import { NodeType as NodeType_2 } from '@remirror/pm/model';
import type { NodeTypeProps } from '@remirror/core-types';
import type { NodeTypesProps } from '@remirror/core-types';
import { nonChainable } from '@remirror/pm';
import type { OptionalMarkProps } from '@remirror/core-types';
import type { OptionalProsemirrorNodeProps } from '@remirror/core-types';
import { ParseOptions } from '@remirror/pm/model';
import type { PosProps } from '@remirror/core-types';
import type { PredicateProps } from '@remirror/core-types';
import type { Primitive } from '@remirror/core-types';
import type { PrimitiveSelection } from '@remirror/core-types';
import type { ProsemirrorAttributes } from '@remirror/core-types';
import type { ProsemirrorKeyBindings } from '@remirror/core-types';
import type { ProsemirrorNode } from '@remirror/core-types';
import type { ProsemirrorNodeProps } from '@remirror/core-types';
import type { RangeProps } from '@remirror/core-types';
import type { RegExpProps } from '@remirror/core-types';
import type { RemirrorContentType } from '@remirror/core-types';
import { RemirrorIdentifier } from '@remirror/core-constants';
import type { RemirrorIdentifierShape } from '@remirror/core-types';
import type { RemirrorJSON } from '@remirror/core-types';
import type { RemirrorMessage } from '@remirror/core-types';
import { ResolvedPos } from '@remirror/pm/model';
import type { ResolvedPos as ResolvedPos_2 } from '@remirror/core-types';
import type { SchemaProps } from '@remirror/core-types';
import type { Selection as Selection_2 } from '@remirror/core-types';
import type { SelectionProps } from '@remirror/core-types';
import { Slice } from '@remirror/pm/model';
import type { Step } from '@remirror/pm/transform';
import { StringKey } from '@remirror/core-types';
import type { TextProps } from '@remirror/core-types';
import { TextSelection } from '@remirror/pm/state';
import type { Transaction } from '@remirror/core-types';
import { Transaction as Transaction_2 } from '@remirror/pm/state';
import type { TransactionProps } from '@remirror/core-types';
import type { TrStateProps } from '@remirror/core-types';

/**
 * Apply the steps of a cloned transaction to the original transaction `tr`.
 */
declare function applyClonedTransaction(props: ApplyClonedTransactionProps): void;
export { applyClonedTransaction }
export { applyClonedTransaction as applyClonedTransaction_alias_1 }

declare interface ApplyClonedTransactionProps extends TransactionProps {
    /**
     * The clone.
     */
    clone: Transaction;
}

/**
 * Check that the nodes and marks present on `schemaA` are also present on
 * `schemaB`.
 */
declare function areSchemasCompatible(schemaA: EditorSchema, schemaB: EditorSchema): boolean;
export { areSchemasCompatible }
export { areSchemasCompatible as areSchemasCompatible_alias_1 }

/**
 * Check if two states are equal.
 */
declare function areStatesEqual(stateA: EditorState_2, stateB: EditorState_2, options?: IsStateEqualOptions): boolean;
export { areStatesEqual }
export { areStatesEqual as areStatesEqual_alias_1 }

/**
 * Checks whether the cursor is at the end of the state.doc
 *
 * @param state - the editor state
 */
declare function atDocEnd(state: EditorState_2): boolean;
export { atDocEnd }
export { atDocEnd as atDocEnd_alias_1 }

/**
 * Checks whether the cursor is at the beginning of the state.doc
 *
 * @param state - the editor state
 */
declare function atDocStart(state: EditorState_2): boolean;
export { atDocStart }
export { atDocStart as atDocStart_alias_1 }

declare type AttributePredicate = (props: {
    value: unknown;
    exists: boolean;
}) => boolean;

declare interface BaseFindProps extends OptionalProsemirrorNodeProps, Partial<DescendProps>, NodeActionProps {
}

export declare interface BaseInputRuleProps extends ShouldSkip {
    /**
     * A method which can be used to add more steps to the transaction after the
     * input rule update but before the editor has dispatched to update to a new
     * state.
     *
     * ```ts
     * import { nodeInputRule } from 'remirror';
     *
     * nodeInputRule({
     *   type,
     *   regexp: /abc/,
     *     beforeDispatch?: (props: BeforeDispatchProps) => void; : (tr)
     *     => tr.insertText('hello')
     * });
     * ```
     */
    beforeDispatch?: (props: BeforeDispatchProps) => void;
    /**
     * Ignore the match when all characters in the capture group are whitespace.
     *
     * This helps stop situations from occurring where the a capture group matches
     * but you don't want an update if it's all whitespace.
     *
     * @defaultValue false
     */
    ignoreWhitespace?: boolean;
    /**
     * Update the capture group. This is needed sometimes because lookbehind regex
     * don't work in some browsers and can't be transpiled or polyfilled. This
     * method allows the developer to update the details of the matching input
     * rule details before it is acted on.
     *
     * The capture group refers to the first match within the matching bracket.
     *
     * ```ts
     * abc.match(/ab(c)/) => ['abc', 'a']
     * ```
     *
     * In the above example the capture group is the first index so in this case
     * the captured text would be `a`.
     *
     * @param captured - All the details about the capture to allow for full
     * customisation.
     * @returns updated details or undefined to leave unchanged.
     *
     * See https://github.com/remirror/remirror/issues/574#issuecomment-678700121
     * for more context.
     */
    updateCaptured?: UpdateCaptured;
}

declare interface BaseKeyboardSymbol {
    /**
     * The normalized value for the symbol.
     */
    key: string;
}

export declare interface BaseStringHandlerOptions extends Partial<CustomDocumentProps>, SchemaProps, ParseOptions {
    /**
     * The string content provided to the editor.
     */
    content: string;
}

export declare interface BeforeDispatchProps extends TransactionProps {
    /**
     * The matches returned by the regex.
     */
    match: string[];
    /**
     * The start position of the most recently typed character.
     */
    start: number;
    /**
     * The end position of the most recently typed character.
     */
    end: number;
}

/**
 * Check if the specified type (NodeType) can be inserted at the current
 * selection point.
 *
 * @param state - the editor state
 * @param type - the node type
 */
declare function canInsertNode(state: EditorState_2, type: NodeType_2): boolean;
export { canInsertNode }
export { canInsertNode as canInsertNode_alias_1 }

export { chainableEditorState }

export { chainCommands }

/**
 * Chains together keybindings, allowing for the same key binding to be used
 * across multiple extensions without overriding behavior.
 *
 * @remarks
 *
 * When `next` is called it hands over full control of the keybindings to the
 * function that invokes it.
 */
declare function chainKeyBindingCommands(...commands: KeyBindingCommandFunction[]): KeyBindingCommandFunction;
export { chainKeyBindingCommands }
export { chainKeyBindingCommands as chainKeyBindingCommands_alias_1 }

export declare interface ChangedRange extends FromToProps {
    /**
     * The previous starting position in the document.
     */
    prevFrom: number;
    /**
     * The previous ending position in the document.
     */
    prevTo: number;
}

declare interface CharKeyboardSymbol extends BaseKeyboardSymbol {
    /**
     * Character keys like `a` | `b`
     */
    type: 'char';
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
declare function cloneTransaction(tr: Transaction): Transaction;
export { cloneTransaction }
export { cloneTransaction as cloneTransaction_alias_1 }

/**
 * Returns a new transaction by combining all steps of the passed transactions onto the previous state
 */
declare function composeTransactionSteps(transactions: readonly Transaction[], oldState: EditorState_2): Transaction;
export { composeTransactionSteps }
export { composeTransactionSteps as composeTransactionSteps_alias_1 }

/**
 * Determines if a Node or Mark contains the given attributes in its attributes set
 *
 * @param nodeOrMark - The Node or Mark to check
 * @param attrs - The set of attributes it must contain
 */
declare function containsAttributes(nodeOrMark: ProsemirrorNode | Mark_2, attrs: ProsemirrorAttributes): boolean;
export { containsAttributes }
export { containsAttributes as containsAttributes_alias_1 }

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
declare function containsNodesOfType(props: ContainsProps): boolean;
export { containsNodesOfType }
export { containsNodesOfType as containsNodesOfType_alias_1 }

declare interface ContainsProps extends ProsemirrorNodeProps, NodeTypeProps {
}

export { convertCommand }

/**
 * Convert the received font size to a valid unit
 */
declare function convertPixelsToDomUnit(size: string, to: DomSizeUnit, element?: Element | null): number;
export { convertPixelsToDomUnit }
export { convertPixelsToDomUnit as convertPixelsToDomUnit_alias_1 }

/**
 * Creates a document node from the passed in content and schema.
 *
 * @remirror
 *
 * This supports a primitive form of error handling. When an error occurs, the
 * `onError` handler will be called along with the error produced by the Schema
 * and it is up to you as a developer to decide how to transform the invalid
 * content into valid content.
 *
 * Please note that the `onError` is only called when the content is a JSON
 * object. It is not called for a `string`, the `ProsemirrorNode` or the
 * `EditorState`. The reason for this is that the `string` requires a `stringHandler`
 * which is defined by the developer and transforms the content. That is the
 * point that error's should be handled. The editor state and the
 * `ProsemirrorNode` are similar. They need to be created by the developer and
 * as a result, the errors should be handled at the point of creation rather
 * than when the document is being applied to the editor.
 */
declare function createDocumentNode(props: CreateDocumentNodeProps): ProsemirrorNode;
export { createDocumentNode }
export { createDocumentNode as createDocumentNode_alias_1 }

declare interface CreateDocumentNodeProps extends SchemaProps, Partial<CustomDocumentProps>, StringHandlerProps {
    /**
     * The content to render
     */
    content: RemirrorContentType;
    /**
     * The error handler which is called when the JSON passed is invalid.
     */
    onError?: InvalidContentHandler;
    /**
     * The selection that the user should have in the created node.
     *
     * TODO add `'start' | 'end' | number` for a better developer experience.
     */
    selection?: PrimitiveSelection;
    /**
     * When an error is thrown the onError handler is called which can return new
     * content. The new content is recursively checked to see if it is valid. This
     * number is tracks the call depth of the recursive function to prevent it
     * exceeding the maximum.
     *
     * @defaultValue 0
     *
     * @internal
     */
    attempts?: number;
}
export { CreateDocumentNodeProps }
export { CreateDocumentNodeProps as CreateDocumentNodeProps_alias_1 }

declare interface CustomDocumentProps {
    /**
     * The root or custom document to use when referencing the dom.
     *
     * This can be used to support SSR.
     */
    document: Document;
}
export { CustomDocumentProps }
export { CustomDocumentProps as CustomDocumentProps_alias_1 }

declare interface DefaultDocNodeOptions {
    /**
     * When true will not check any of the attributes for any of the nodes.
     */
    ignoreAttributes?: boolean;
    /**
     * Set this to true to only test whether the content is identical to the
     * default and not the parent node.
     */
    ignoreDocAttributes?: boolean;
}
export { DefaultDocNodeOptions }
export { DefaultDocNodeOptions as DefaultDocNodeOptions_alias_1 }

declare interface DescendProps {
    /**
     * Whether to descend into a node.
     *
     * @defaultValue true
     */
    descend: boolean;
}

declare const DOM_SIZE_UNITS: readonly ["px", "rem", "em", "in", "q", "mm", "cm", "pt", "pc", "vh", "vw", "vmin", "vmax"];
export { DOM_SIZE_UNITS }
export { DOM_SIZE_UNITS as DOM_SIZE_UNITS_alias_1 }

declare type DomSizeUnit = (typeof DOM_SIZE_UNITS)[number];
export { DomSizeUnit }
export { DomSizeUnit as DomSizeUnit_alias_1 }

/**
 * Get the end position of the parent of the current resolve position
 *
 * @param $pos - the resolved `ProseMirror` position
 */
declare function endPositionOfParent($pos: ResolvedPos_2): number;
export { endPositionOfParent }
export { endPositionOfParent as endPositionOfParent_alias_1 }

/**
 * A object with flags identifying the current environment.
 */
declare const environment: {
    /**
     * Verifies that the environment has both a window and window.document
     */
    readonly isBrowser: boolean;
    /**
     * Verifies that the environment is JSDOM
     */
    readonly isJSDOM: boolean;
    /**
     * Verifies that the environment has a nodejs process and is therefore a node environment
     */
    readonly isNode: boolean;
    /**
     * True when on an iOS device.
     */
    readonly isIos: boolean;
    /**
     * True when running on macOS
     */
    readonly isMac: boolean;
    /**
     * Verify that this is an apple device either on the client or server.
     */
    readonly isApple: boolean;
    /**
     * True when running in DEVELOPMENT environment
     */
    readonly isDevelopment: boolean;
    /**
     * True when running unit tests
     */
    readonly isTest: boolean;
    /**
     * True when running in PRODUCTION environment
     */
    readonly isProduction: boolean;
};
export { environment }
export { environment as environment_alias_1 }

/**
 * Extract the pixel value from a dimension string or CSS function.
 *
 * Supports the CSS functions `min`, `max` and `clamp` even when nested.
 *
 * Does not support percentage units or the `calc` function.
 *
 * Adapted from https://github.com/PacoteJS/pacote/blob/20cb1e3a999ed47a8d52b03b750290cf36b8e270/packages/pixels/src/index.ts
 */
declare function extractPixelSize(size: string, element?: Element | null): number;
export { extractPixelSize }
export { extractPixelSize as extractPixelSize_alias_1 }

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
declare const findBlockNodes: (props: BaseFindProps) => NodeWithPosition[];
export { findBlockNodes }
export { findBlockNodes as findBlockNodes_alias_1 }

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
declare function findChildren(props: FindChildrenProps): NodeWithPosition[];
export { findChildren }
export { findChildren as findChildren_alias_1 }

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
declare function findChildrenByAttribute(props: FindChildrenByAttrProps): NodeWithPosition[];
export { findChildrenByAttribute }
export { findChildrenByAttribute as findChildrenByAttribute_alias_1 }

declare interface FindChildrenByAttrProps extends BaseFindProps {
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
declare function findChildrenByMark(paramter: FindChildrenByMarkProps): NodeWithPosition[];
export { findChildrenByMark }
export { findChildrenByMark as findChildrenByMark_alias_1 }

declare interface FindChildrenByMarkProps extends BaseFindProps, MarkTypeProps {
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
declare function findChildrenByNode(props: FindChildrenByNodeProps): NodeWithPosition[];
export { findChildrenByNode }
export { findChildrenByNode as findChildrenByNode_alias_1 }

declare interface FindChildrenByNodeProps extends BaseFindProps, NodeTypeProps {
}

declare interface FindChildrenProps extends BaseFindProps, NodePredicateProps {
}

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
declare function findElementAtPosition(position: number, view: EditorView): HTMLElement;
export { findElementAtPosition }
export { findElementAtPosition as findElementAtPosition_alias_1 }

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
declare const findInlineNodes: (props: BaseFindProps) => NodeWithPosition[];
export { findInlineNodes }
export { findInlineNodes as findInlineNodes_alias_1 }

/**
 * Finds the node at the resolved position.
 *
 * @param $pos - the resolve position in the document
 */
declare function findNodeAtPosition($pos: ResolvedPos_2): FindProsemirrorNodeResult;
export { findNodeAtPosition }
export { findNodeAtPosition as findNodeAtPosition_alias_1 }

/**
 * Finds the node at the passed selection.
 */
declare function findNodeAtSelection(selection: Selection_2): FindProsemirrorNodeResult;
export { findNodeAtSelection }
export { findNodeAtSelection as findNodeAtSelection_alias_1 }

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
declare function findParentNode(props: FindParentNodeProps): FindProsemirrorNodeResult | undefined;
export { findParentNode }
export { findParentNode as findParentNode_alias_1 }

/**
 *  Iterates over parent nodes, returning closest node of a given `nodeType`.
 *  `start` points to the start position of the node, `pos` points directly
 *  before the node.
 *
 *  ```ts
 *  const parent = findParentNodeOfType({types: schema.nodes.paragraph, selection});
 *  ```
 */
declare function findParentNodeOfType(props: FindParentNodeOfTypeProps): FindProsemirrorNodeResult | undefined;
export { findParentNodeOfType }
export { findParentNodeOfType as findParentNodeOfType_alias_1 }

declare interface FindParentNodeOfTypeProps extends NodeTypesProps, StateSelectionPosProps {
}

declare interface FindParentNodeProps extends StateSelectionPosProps {
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
declare function findPositionOfNodeAfter(value: Selection_2 | ResolvedPos_2 | EditorState_2): FindProsemirrorNodeResult | undefined;
export { findPositionOfNodeAfter }
export { findPositionOfNodeAfter as findPositionOfNodeAfter_alias_1 }

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
declare function findPositionOfNodeBefore(value: Selection_2 | ResolvedPos_2 | EditorState_2 | Transaction): FindProsemirrorNodeResult | undefined;
export { findPositionOfNodeBefore }
export { findPositionOfNodeBefore as findPositionOfNodeBefore_alias_1 }

declare interface FindProsemirrorNodeResult extends ProsemirrorNodeProps {
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
export { FindProsemirrorNodeResult }
export { FindProsemirrorNodeResult as FindProsemirrorNodeResult_alias_1 }

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
declare function findSelectedNodeOfType(props: FindSelectedNodeOfTypeProps): FindProsemirrorNodeResult | undefined;
export { findSelectedNodeOfType }
export { findSelectedNodeOfType as findSelectedNodeOfType_alias_1 }

declare interface FindSelectedNodeOfTypeProps extends NodeTypesProps, SelectionProps {
}

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
declare const findTextNodes: (props: BaseFindProps) => NodeWithPosition[];
export { findTextNodes }
export { findTextNodes as findTextNodes_alias_1 }

declare interface FragmentStringHandlerOptions extends BaseStringHandlerOptions {
    /**
     * When true will create a fragment from the provided string.
     */
    fragment: true;
}
export { FragmentStringHandlerOptions }
export { FragmentStringHandlerOptions as FragmentStringHandlerOptions_alias_1 }

declare interface GetActiveAttrsProps extends NodeTypeProps, Partial<AttributesProps> {
    /**
     * State or transaction parameter.
     */
    state: EditorState_2 | Transaction;
}

/**
 * Get node of a provided type with the provided attributes if it exists as a
 * parent. Returns positional data for the node that was found.
 */
declare function getActiveNode(props: GetActiveAttrsProps): FindProsemirrorNodeResult | undefined;
export { getActiveNode }
export { getActiveNode as getActiveNode_alias_1 }

/**
 * Get all the changed node ranges for a provided transaction.
 *
 * @param tr - the transaction received with updates applied.
 * @param StepTypes - the valid Step Constructors. Set to an empty array to
 * accept all Steps.
 */
declare function getChangedNodeRanges(tr: Transaction, StepTypes?: Array<AnyConstructor<Step>>): NodeRange[];
export { getChangedNodeRanges }
export { getChangedNodeRanges as getChangedNodeRanges_alias_1 }

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
declare function getChangedNodes(tr: Transaction, options?: GetChangedNodesOptions): NodeWithPosition[];
export { getChangedNodes }
export { getChangedNodes as getChangedNodes_alias_1 }

declare interface GetChangedNodesOptions {
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
 * Get all the ranges of changes for the provided transaction.
 *
 * This can be used to gather specific parts of the document which require
 * decorations to be recalculated or where nodes should be updated.
 *
 * This is adapted from the answer
 * [here](https://discuss.prosemirror.net/t/find-new-node-instances-and-track-them/96/7)
 *
 * @param tr - the transaction received with updates applied.
 * @param StepTypes - the valid Step Constructors. Set to an empty array to
 * accept all Steps.
 */
declare function getChangedRanges(tr: Transaction, StepTypes?: Array<AnyConstructor<Step>>): ChangedRange[];
export { getChangedRanges }
export { getChangedRanges as getChangedRanges_alias_1 }

/**
 * Retrieve the current position of the cursor
 *
 * @param selection - the editor selection
 * @returns a resolved position only when the selection is a text selection
 */
declare function getCursor(selection: Selection_2): ResolvedPos_2 | null | undefined;
export { getCursor }
export { getCursor as getCursor_alias_1 }

/**
 * Get the default block node from the schema.
 */
declare function getDefaultBlockNode(schema: EditorSchema): NodeType_2;
export { getDefaultBlockNode }
export { getDefaultBlockNode as getDefaultBlockNode_alias_1 }

/**
 * Get the default `doc` node for a given schema.
 */
declare function getDefaultDocNode(schema: EditorSchema): ProsemirrorNode | undefined;
export { getDefaultDocNode }
export { getDefaultDocNode as getDefaultDocNode_alias_1 }

/**
 * Get the full range of the selectable content in the ProseMirror `doc`.
 */
declare function getDocRange(doc: ProsemirrorNode): FromToProps;
export { getDocRange }
export { getDocRange as getDocRange_alias_1 }

/**
 * Retrieves the document from global scope and throws an error in a non-browser
 * environment.
 *
 * @internal
 */
declare function getDocument(): Document;
export { getDocument }
export { getDocument as getDocument_alias_1 }

declare function getFontSize(element?: Element | null): string;
export { getFontSize }
export { getFontSize as getFontSize_alias_1 }

/**
 * Get the invalid parameter which is passed to the `onError` handler.
 */
declare function getInvalidContent<Extra extends object>({ json, schema, ...extra }: GetInvalidContentProps<Extra>): GetInvalidContentReturn<Extra>;
export { getInvalidContent }
export { getInvalidContent as getInvalidContent_alias_1 }

declare type GetInvalidContentProps<Extra extends object> = SchemaProps & {
    /**
     * The RemirrorJSON representation of the invalid content.
     */
    json: RemirrorJSON;
} & Extra;

declare type GetInvalidContentReturn<Extra extends object> = Omit<InvalidContentHandlerProps, 'error'> & Extra;

/**
 * Retrieve the attributes for a mark.
 *
 * @param trState - the editor state or a transaction
 * @param type - the mark type
 */
declare function getMarkAttributes(trState: EditorState_2 | Transaction, type: MarkType_2): ProsemirrorAttributes | false;
export { getMarkAttributes }
export { getMarkAttributes as getMarkAttributes_alias_1 }

declare interface GetMarkRange extends FromToProps {
    /**
     * The mark that was found within the active range.
     */
    mark: Mark;
    /**
     * The text contained by this mark.
     */
    text: string;
}
export { GetMarkRange }
export { GetMarkRange as GetMarkRange_alias_1 }

/**
 * Retrieve the `start` and `end` position of a mark. The `$pos` value should be
 * calculated via `tr.doc.resolve(number)`.
 *
 * @remarks
 *
 * @param $pos - the resolved ProseMirror position
 * @param type - the mark type
 * @param $end - the end position to search until. When this is provided the
 * mark will be checked for all point up until the `$end`. The first mark within
 * the range will be returned.
 *
 * To find all marks within a selection use [[`getMarkRanges`]].
 */
declare function getMarkRange($pos: ResolvedPos_2, type: string | MarkType_2, $end?: ResolvedPos_2): GetMarkRange | undefined;
export { getMarkRange }
export { getMarkRange as getMarkRange_alias_1 }

/**
 * Get all the ranges which contain marks for the provided selection.
 */
declare function getMarkRanges(selection: Selection_2, type: string | MarkType_2): GetMarkRange[];
export { getMarkRanges }
export { getMarkRanges as getMarkRanges_alias_1 }

/**
 * Get the mark type from a potential string value.
 */
declare function getMarkType(type: string | MarkType_2, schema: EditorSchema): MarkType_2;
export { getMarkType }
export { getMarkType as getMarkType_alias_1 }

/**
 * Get matching string from a list or single value
 *
 * @remarks
 * Get attrs can be called with a direct match string or array of string
 * matches. This method should be used to retrieve the required string.
 *
 * The index of the matched array used defaults to 0 but can be updated via the
 * second parameter.
 *
 * @param match - the match(es)
 * @param index - the zero-index point from which to start
 */
declare function getMatchString(match: string | string[], index?: number): string;
export { getMatchString }
export { getMatchString as getMatchString_alias_1 }

/**
 * Get the node type from a potential string value.
 */
declare function getNodeType(type: string | NodeType_2, schema: EditorSchema): NodeType_2;
export { getNodeType }
export { getNodeType as getNodeType_alias_1 }

/**
 * A wrapper around `state.doc.toJSON` which returns the state as a
 * `RemirrorJSON` object.
 */
declare function getRemirrorJSON(content: EditorState_2 | ProsemirrorNode): RemirrorJSON;
export { getRemirrorJSON }
export { getRemirrorJSON as getRemirrorJSON_alias_1 }

export declare interface GetSelectedGroup extends FromToProps {
    /**
     * The capture text within the group.
     */
    text: string;
}

/**
 * Takes an empty selection and expands it out to the nearest group not matching
 * the excluded characters.
 *
 * @remarks
 *
 * Can be used to find the nearest selected word. See {@link getSelectedWord}
 *
 * @param state - the editor state or a transaction
 * @param exclude - the regex pattern to exclude
 * @returns false if not a text selection or if no expansion available
 */
declare function getSelectedGroup(state: EditorState_2 | Transaction, exclude: RegExp): GetSelectedGroup | undefined;
export { getSelectedGroup }
export { getSelectedGroup as getSelectedGroup_alias_1 }

/**
 * Retrieves the nearest space separated word from the current selection.
 *
 * @remarks
 *
 * This always expands outward so that given: `The tw<start>o words<end>` The
 * selection would become `The <start>two words<end>`
 *
 * In other words it expands until it meets an invalid character.
 *
 * @param state - the editor state or transaction.
 */
declare function getSelectedWord(state: EditorState_2 | Transaction): GetSelectedGroup | undefined;
export { getSelectedWord }
export { getSelectedWord as getSelectedWord_alias_1 }

/**
 * Convert a keyboard shortcut into symbols which and keys.
 */
declare function getShortcutSymbols(shortcut: string): KeyboardSymbol[];
export { getShortcutSymbols }
export { getShortcutSymbols as getShortcutSymbols_alias_1 }

/**
 * Get the styles for a given property of an element.
 */
declare function getStyle(element: HTMLElement, property: KebabCase<StringKey<CSSStyleDeclaration>>): string;
export { getStyle }
export { getStyle as getStyle_alias_1 }

/**
 * Retrieves the text content from a slice
 *
 * @remarks
 * A utility that's useful for pulling text content from a slice which is
 * usually created via `selection.content()`
 *
 * @param slice - the prosemirror slice
 */
declare function getTextContentFromSlice(slice: Slice): string;
export { getTextContentFromSlice }
export { getTextContentFromSlice as getTextContentFromSlice_alias_1 }

/**
 * Get the nearest valid selection to the provided selection parameter.
 */
declare function getTextSelection(selection: PrimitiveSelection, doc: ProsemirrorNode): Selection_2;
export { getTextSelection }
export { getTextSelection as getTextSelection_alias_1 }

/**
 * @internal
 */
export declare function getWindowFromDocument(document?: Document | null): Window & typeof globalThis;

/**
 * @internal
 */
export declare function getWindowFromElement(element?: Element | HTMLElement | null): Window & typeof globalThis;

export declare interface HandlersProps {
    /**
     * All the available string handlers which have been made available for this
     * editor. Using this allows for composition of [[`StringHandler`]]'s.
     *
     * For example, the markdown string handler first converts the markdown string
     * to html and then uses the html handler to convert the html output to a
     * prosemirror step.
     *
     * Composition for the win.
     */
    handlers: NamedStringHandlers;
}

/**
 * Check to see if a transaction has changed either the document or the current
 * selection.
 *
 * @param tr - the transaction to check
 */
declare function hasTransactionChanged(tr: Transaction): boolean;
export { hasTransactionChanged }
export { hasTransactionChanged as hasTransactionChanged_alias_1 }

/**
 * Convert a HTML string into a ProseMirror node. This can be used for the
 * `stringHandler` property in your editor when you want to support html.
 *
 * ```tsx
 * import { htmlToProsemirrorNode } from 'remirror';
 * import { Remirror, useManager } from '@remirror/react';
 *
 * const Editor = () => {
 *   const manager = useManager([]);
 *
 *   return (
 *     <Remirror
 *       stringHandler={htmlToProsemirrorNode}
 *       initialContent='<p>A wise person once told me to relax</p>'
 *     >
 *       <div />
 *     </Remirror>
 *   );
 * }
 * ```
 */
declare function htmlToProsemirrorNode(props: FragmentStringHandlerOptions): Fragment;

declare function htmlToProsemirrorNode(props: NodeStringHandlerOptions): ProsemirrorNode;
export { htmlToProsemirrorNode }
export { htmlToProsemirrorNode as htmlToProsemirrorNode_alias_1 }

declare interface I18nKeyboardSymbol extends BaseKeyboardSymbol {
    /**
     * The internationalized representation of the key.
     */
    i18n: RemirrorMessage;
}

/**
 * A description of an invalid content block (representing a node or a mark).
 */
declare interface InvalidContentBlock {
    /**
     * The type of content that is invalid.
     */
    type: 'mark' | 'node';
    /**
     * The name of the node or mark that is invalid.
     */
    name: string;
    /**
     * The json path to the invalid part of the `RemirrorJSON` object.
     */
    path: Array<string | number>;
    /**
     * Whether this block already has an invalid parent node. Invalid blocks are
     * displayed from the deepest content outward. By checking whether a parent
     * has already been identified as invalid you can choose to only transform the
     * root invalid node.
     */
    invalidParentNode: boolean;
    /**
     * Whether this block has any invalid wrapping marks.
     */
    invalidParentMark: boolean;
}
export { InvalidContentBlock }
export { InvalidContentBlock as InvalidContentBlock_alias_1 }

/**
 * The error handler function which should return a valid content type to
 * prevent further errors.
 */
declare type InvalidContentHandler = (props: InvalidContentHandlerProps) => RemirrorContentType;
export { InvalidContentHandler }
export { InvalidContentHandler as InvalidContentHandler_alias_1 }

/**
 * This interface is used when there is an attempt to add content to a schema
 */
declare interface InvalidContentHandlerProps {
    /**
     * The JSON representation of the content that caused the error.
     */
    json: RemirrorJSON;
    /**
     * The list of invalid nodes and marks.
     */
    invalidContent: InvalidContentBlock[];
    /**
     * The error that was thrown.
     */
    error: Error;
    /**
     * Transformers can be used to apply certain strategies for dealing with
     * invalid content.
     */
    transformers: typeof transformers;
}
export { InvalidContentHandlerProps }
export { InvalidContentHandlerProps as InvalidContentHandlerProps_alias_1 }

/**
 * Predicate checking whether the selection is an `AllSelection`.
 *
 * @param value - the value to check
 */
declare function isAllSelection(value: unknown): value is AllSelection;
export { isAllSelection }
export { isAllSelection as isAllSelection_alias_1 }

/**
 * Return true when the provided value is an anchor / head selection property
 */
export declare function isAnchorHeadObject(value: unknown): value is AnchorHeadProps;

/**
 * Taken from https://stackoverflow.com/a/4900484
 *
 * Check that the browser is chrome. Supports passing a minimum version to check
 * that it is a greater than or equal to this version.
 */
declare function isChrome(minVersion?: number): boolean;
export { isChrome }
export { isChrome as isChrome_alias_1 }

/**
 * Check if the provided node is a default block node.
 */
declare function isDefaultBlockNode(node: ProsemirrorNode): boolean;
export { isDefaultBlockNode }
export { isDefaultBlockNode as isDefaultBlockNode_alias_1 }

/**
 * Check whether the provided doc node has the same value as the default empty
 * node for the document. Basically checks that the document is untouched.
 *
 * This is useful for extensions like the placeholder which only should be shown
 * when the document matches the default empty state.
 */
declare function isDefaultDocNode(doc: ProsemirrorNode, options?: DefaultDocNodeOptions): boolean;
export { isDefaultDocNode }
export { isDefaultDocNode as isDefaultDocNode_alias_1 }

/**
 * Checks whether a Prosemirror node is the top level `doc` node
 *
 * @param node - the prosemirror node
 * @param schema - the prosemirror schema to check against
 */
declare function isDocNode(node: ProsemirrorNode | null | undefined, schema?: EditorSchema): node is ProsemirrorNode;
export { isDocNode }
export { isDocNode as isDocNode_alias_1 }

/**
 * Checks if a node looks like an empty document.
 *
 * @param node - the prosemirror node
 */
declare function isDocNodeEmpty(node: ProsemirrorNode): boolean;
export { isDocNodeEmpty }
export { isDocNodeEmpty as isDocNodeEmpty_alias_1 }

/**
 * Checks whether the passed value is a valid dom node
 *
 * @param domNode - the dom node
 */
declare function isDomNode(domNode: unknown): domNode is Node;
export { isDomNode }
export { isDomNode as isDomNode_alias_1 }

/**
 * Checks to see if the passed value is an instance of the editor schema
 *
 * @param value - the value to check
 */
declare function isEditorSchema(value: unknown): value is EditorSchema;
export { isEditorSchema }
export { isEditorSchema as isEditorSchema_alias_1 }

/**
 * Checks to see if the passed value is a Prosemirror Editor State
 *
 * @param value - the value to check
 */
declare function isEditorState(value: unknown): value is EditorState | Readonly<EditorState>;
export { isEditorState }
export { isEditorState as isEditorState_alias_1 }

/**
 * Checks for an element node like `<p>` or `<div>`.
 *
 * @param domNode - the dom node
 */
declare function isElementDomNode(domNode: unknown): domNode is HTMLElement;
export { isElementDomNode }
export { isElementDomNode as isElementDomNode_alias_1 }

/**
 * Checks if the current node is a block node and empty.
 *
 * @param node - the prosemirror node
 */
declare function isEmptyBlockNode(node: ProsemirrorNode | null | undefined): boolean;
export { isEmptyBlockNode }
export { isEmptyBlockNode as isEmptyBlockNode_alias_1 }

/**
 * Checks that the selection is an empty text selection at the end of its parent
 * node.
 */
declare function isEndOfTextBlock(selection: Selection_2): selection is TextSelection;
export { isEndOfTextBlock }
export { isEndOfTextBlock as isEndOfTextBlock_alias_1 }

/**
 * Checks that the provided remirror shape is of a given type.
 *
 * @param value - any remirror shape
 * @param type - the remirror identifier type to check for
 *
 * @internal
 */
declare function isIdentifierOfType(value: RemirrorIdentifierShape, type: RemirrorIdentifier | RemirrorIdentifier[]): boolean;
export { isIdentifierOfType }
export { isIdentifierOfType as isIdentifierOfType_alias_1 }

/**
 * Checks that a mark is active within the selected region, or the current
 * selection point is within a region with the mark active. Used by extensions
 * to implement their active methods.
 *
 * @param props - see [[`IsMarkActiveProps`]] for options
 */
declare function isMarkActive(props: IsMarkActiveProps): boolean;
export { isMarkActive }
export { isMarkActive as isMarkActive_alias_1 }

declare interface IsMarkActiveProps extends MarkTypeProps, Partial<AttributesProps>, Partial<FromToProps>, TrStateProps {
}

/**
 * Check to see if the passed value is a MarkType.
 *
 * @param value - the value to check
 */
declare function isMarkType(value: unknown): value is MarkType_2;
export { isMarkType }
export { isMarkType as isMarkType_alias_1 }

/**
 * Checks whether the node type passed in is active within the region. Used by
 * extensions to implement the `active` method.
 *
 * To ignore `attrs` just leave the attrs object empty or undefined.
 *
 * @param props - see [[`GetActiveAttrsProps`]]
 */
declare function isNodeActive(props: GetActiveAttrsProps): boolean;
export { isNodeActive }
export { isNodeActive as isNodeActive_alias_1 }

/**
 * Checks if the type a given `node` has a given `nodeType`.
 */
declare function isNodeOfType(props: NodeEqualsTypeProps): boolean;
export { isNodeOfType }
export { isNodeOfType as isNodeOfType_alias_1 }

/**
 * Predicate checking whether the selection is a NodeSelection
 *
 * @param value - the value to check
 */
declare function isNodeSelection(value: unknown): value is NodeSelection;
export { isNodeSelection }
export { isNodeSelection as isNodeSelection_alias_1 }

/**
 * Check to see if the passed value is a NodeType.
 *
 * @param value - the value to check
 */
declare function isNodeType(value: unknown): value is NodeType_2;
export { isNodeType }
export { isNodeType as isNodeType_alias_1 }

/**
 * Checks to see if the passed value is a ProsemirrorNode
 *
 * @param value - the value to check
 */
declare function isProsemirrorFragment(value: unknown): value is Fragment;
export { isProsemirrorFragment }
export { isProsemirrorFragment as isProsemirrorFragment_alias_1 }

/**
 * Checks to see if the passed value is a ProsemirrorMark
 *
 * @param value - the value to check
 */
declare function isProsemirrorMark(value: unknown): value is Mark;
export { isProsemirrorMark }
export { isProsemirrorMark as isProsemirrorMark_alias_1 }

/**
 * Checks to see if the passed value is a ProsemirrorNode
 *
 * @param value - the value to check
 */
declare function isProsemirrorNode(value: unknown): value is ProsemirrorNode;
export { isProsemirrorNode }
export { isProsemirrorNode as isProsemirrorNode_alias_1 }

/**
 * Checks whether the passed in JSON is a valid object node
 *
 * @param value - the value to check
 */
declare function isRemirrorJSON(value: unknown): value is RemirrorJSON;
export { isRemirrorJSON }
export { isRemirrorJSON as isRemirrorJSON_alias_1 }

/**
 * Identifies the value as having a remirror identifier. This is the core
 * predicate check for the remirror library.
 *
 * @param value - the value to be checked
 *
 * @internal
 */
declare function isRemirrorType(value: unknown): value is RemirrorIdentifierShape;
export { isRemirrorType }
export { isRemirrorType as isRemirrorType_alias_1 }

/**
 * Predicate checking whether the value is a ResolvedPosition.
 *
 * @param value - the value to check
 */
declare function isResolvedPos(value: unknown): value is ResolvedPos;
export { isResolvedPos }
export { isResolvedPos as isResolvedPos_alias_1 }

/**
 * Taken from https://stackoverflow.com/a/4900484
 *
 * Check that the browser is safari. Supports passing a minimum version to check
 * that it is a greater than or equal to this version.
 */
declare function isSafari(minVersion?: number): boolean;
export { isSafari }
export { isSafari as isSafari_alias_1 }

/**
 * Predicate checking whether the value is a Selection
 *
 * @param value - the value to check
 */
declare function isSelection(value: unknown): value is Selection_2;
export { isSelection }
export { isSelection as isSelection_alias_1 }

/**
 * Checks whether the selection or state is currently empty.
 *
 * @param value - the transaction selection or state
 */
declare function isSelectionEmpty(value: Transaction | EditorState_2 | Selection_2): boolean;
export { isSelectionEmpty }
export { isSelectionEmpty as isSelectionEmpty_alias_1 }

/**
 * Returns true when the selection is a text selection at the start of the
 * document.
 */
declare function isStartOfDoc(selection: Selection_2): boolean;
export { isStartOfDoc }
export { isStartOfDoc as isStartOfDoc_alias_1 }

/**
 * Checks that the selection is an empty text selection at the start of its
 * parent node.
 */
declare function isStartOfTextBlock(selection: Selection_2): selection is TextSelection;
export { isStartOfTextBlock }
export { isStartOfTextBlock as isStartOfTextBlock_alias_1 }

declare interface IsStateEqualOptions {
    /**
     * Whether to compare the selection of the two states.
     *
     * @defaultValue false
     */
    checkSelection?: boolean;
}

/**
 * Checks for a text node.
 *
 * @param domNode - the dom node
 */
declare function isTextDomNode(domNode: unknown): domNode is Text;
export { isTextDomNode }
export { isTextDomNode as isTextDomNode_alias_1 }

/**
 * Predicate checking whether the selection is a `TextSelection`.
 *
 * @param value - the value to check
 */
declare function isTextSelection(value: unknown): value is TextSelection;
export { isTextSelection }
export { isTextSelection as isTextSelection_alias_1 }

/**
 * Checks to see if the passed value is a Prosemirror Transaction
 *
 * @param value - the value to check
 */
declare function isTransaction(value: unknown): value is Transaction_2;
export { isTransaction }
export { isTransaction as isTransaction_alias_1 }

/**
 * Take the `style` string attribute and combine it with the provided style
 * object.
 */
declare function joinStyles(styleObject: object, initialStyles?: string): string;
export { joinStyles }
export { joinStyles as joinStyles_alias_1 }

declare type KeyboardSymbol = ModifierKeyboardSymbol | NamedKeyboardSymbol | CharKeyboardSymbol;

/**
 * Lift the selected block, or the closest ancestor block of the selection that
 * can be lifted, out of its parent node.
 *
 * Adapted from
 * https://github.com/ProseMirror/prosemirror-commands/blob/3126d5c625953ba590c5d3a0db7f1009f46f1571/src/commands.js#L212-L221
 */
declare function lift({ tr, dispatch }: Pick<CommandFunctionProps, 'tr' | 'dispatch'>): boolean;
export { lift }
export { lift as lift_alias_1 }

/**
 * Checks if the type a given `node` has a given `nodeType`.
 */
declare function markEqualsType(props: MarkEqualsTypeProps): boolean;
export { markEqualsType }
export { markEqualsType as markEqualsType_alias_1 }

declare interface MarkEqualsTypeProps extends MarkTypesProps, OptionalMarkProps {
}

/**
 * Creates an input rule based on the provided regex for the provided mark type.
 */
declare function markInputRule(props: MarkInputRuleProps): SkippableInputRule;
export { markInputRule }
export { markInputRule as markInputRule_alias_1 }

declare interface MarkInputRuleProps extends Partial<GetAttributesProps>, RegExpProps, MarkTypeProps, BaseInputRuleProps {
}

/**
 * @internal
 */
export declare function maybeGetWindowFromDocument(document?: Document | null): (Window & typeof globalThis) | null | undefined;

/**
 * @internal
 */
export declare function maybeGetWindowFromElement(element?: Element | HTMLElement | null): (Window & typeof globalThis) | null | undefined;

/**
 * Merge two DOMRect objects into a one big DOMRect object that contains both two DOMRect objects.
 *
 * @param rect1 - the first DOMRect
 * @param rect2 - the second DOMRect
 */
declare function mergeDOMRects(rect1: DOMRect, rect2: DOMRect): DOMRect;
export { mergeDOMRects }
export { mergeDOMRects as mergeDOMRects_alias_1 }

/**
 * This merges an array of keybindings into one keybinding with the priority
 * given to the items earlier in the array. `index: 0` has priority over `index:
 * 1` which has priority over `index: 2` and so on.
 *
 * This is for use on remirror keybindings. See `mergeProsemirrorKeyBindings`
 * for transforming the methods into `ProsemirrorCommandFunction`'s.
 */
declare function mergeKeyBindings(extensionKeymaps: KeyBindings[]): KeyBindings;
export { mergeKeyBindings }
export { mergeKeyBindings as mergeKeyBindings_alias_1 }

/**
 * This merges an array of keybindings into one keybinding with the priority
 * given to the items earlier in the array. `index: 0` has priority over `index:
 * 1` which has priority over `index: 2` and so on.
 *
 * This supports the [[ProsemirrorCommandFunction]] type signature where the
 * `state`, `dispatch` and `view` are passed as separate arguments.
 */
declare function mergeProsemirrorKeyBindings(extensionKeymaps: KeyBindings[]): ProsemirrorKeyBindings;
export { mergeProsemirrorKeyBindings }
export { mergeProsemirrorKeyBindings as mergeProsemirrorKeyBindings_alias_1 }

declare interface ModifierKeyboardSymbol extends I18nKeyboardSymbol {
    /**
     * Modifier keys like 'shift' | 'alt' | 'meta'.
     */
    type: 'modifier';
    /**
     * The symbol for the modifier key.
     */
    symbol: string;
}

declare interface NamedKeyboardSymbol extends I18nKeyboardSymbol {
    /**
     * Named keys like `Enter` | `Escape`
     */
    type: 'named';
    /**
     * The potentially undefined symbol for the named key.
     */
    symbol?: string;
}

/**
 * This type is the combination of all the registered string handlers for the
 * extension. This is used rather than the `StringHandlers` in order to enforce
 * the type signature of the handler method, which isn't possible with the
 * interface.
 */
declare type NamedStringHandlers = {
    [K in keyof Remirror.StringHandlers]: StringHandler;
};
export { NamedStringHandlers }
export { NamedStringHandlers as NamedStringHandlers_alias_1 }

declare interface NodeActionProps {
    /**
     * A method which is run whenever the provided predicate returns true.
     *
     * This avoids the need for multiple passes over the same data, first to
     * gather and then to process. When viable ,why not just get it done.
     */
    action?: (node: NodeWithPosition) => void;
}

declare interface NodeEqualsTypeProps extends NodeTypesProps, OptionalProsemirrorNodeProps {
}

/**
 * Creates a node input rule based on the provided regex for the provided node
 * type.
 *
 * Input rules transform content as the user types based on whether a match is
 * found with a sequence of characters.
 */
declare function nodeInputRule(props: NodeInputRuleProps): SkippableInputRule;
export { nodeInputRule }
export { nodeInputRule as nodeInputRule_alias_1 }

export declare interface NodeInputRuleProps extends Partial<GetAttributesProps>, RegExpProps, NodeTypeProps, BaseInputRuleProps {
}

declare type NodePredicateProps = PredicateProps<NodeWithPosition>;

declare interface NodeStringHandlerOptions extends BaseStringHandlerOptions {
    fragment?: false;
}
export { NodeStringHandlerOptions }
export { NodeStringHandlerOptions as NodeStringHandlerOptions_alias_1 }

/**
 * A node with it's start position.
 */
declare interface NodeWithPosition extends ProsemirrorNodeProps, PosProps {
}
export { NodeWithPosition }
export { NodeWithPosition as NodeWithPosition_alias_1 }

export { nonChainable }

/**
 * Return attributes for a node excluding those that were provided as extra
 * attributes.
 *
 * @param attrs - The source attributes
 * @param extra - The extra attribute schema for this node
 */
declare function omitExtraAttributes<Output extends object = DOMCompatibleAttributes>(attrs: ProsemirrorAttributes, extra: ApplySchemaAttributes): Omit<Output, keyof Remirror.Attributes>;
export { omitExtraAttributes }
export { omitExtraAttributes as omitExtraAttributes_alias_1 }

/**
 * A tuple for the font size and unit.
 */
declare type ParsedDomSize = [size: number, unit: DomSizeUnit];
export { ParsedDomSize }
export { ParsedDomSize as ParsedDomSize_alias_1 }

/**
 * Parse the font size and font unit from the provided value. When the value
 * type is unsupported it default to `px`.
 */
declare function parseSizeUnit(fontSize?: string | undefined | null): ParsedDomSize;
export { parseSizeUnit }
export { parseSizeUnit as parseSizeUnit_alias_1 }

/**
 * Creates a plain rule based on the provided regex. You can see this being used
 * in the `@remirror/extension-emoji` when it is setup to use plain text.
 */
declare function plainInputRule(props: PlainInputRuleProps): SkippableInputRule;
export { plainInputRule }
export { plainInputRule as plainInputRule_alias_1 }

export declare interface PlainInputRuleProps extends RegExpProps, BaseInputRuleProps {
    /**
     * A function that transforms the match into the desired value.
     *
     * Return `null` or `undefined` to invalidate the match.
     */
    transformMatch: (match: string[]) => string | null | undefined;
}

/**
 * Checks the selection for the current state and updates the active transaction
 * to a selection that is consistent with the initial selection.
 *
 * @param state - the editor state before any updates
 * @param tr - the transaction which has been updated and may have impacted the
 * selection.
 */
declare function preserveSelection(selection: Selection_2, tr: Transaction): void;
export { preserveSelection }
export { preserveSelection as preserveSelection_alias_1 }

/**
 * Check that two nodes are equal while ignoring all attributes.
 *
 * This is an alternative to the `node.eq()` method.
 */
export declare function prosemirrorNodeEquals(node: ProsemirrorNode, other: ProsemirrorNode): boolean;

/**
 * Convert a node into its DOM representative
 *
 * @param node - the node to extract html from.
 * @param document - the document to use for the DOM
 */
declare function prosemirrorNodeToDom(node: ProsemirrorNode, document?: Document): DocumentFragment | HTMLElement;
export { prosemirrorNodeToDom }
export { prosemirrorNodeToDom as prosemirrorNodeToDom_alias_1 }

/**
 * Convert the provided `node` to a html string.
 *
 * @param node - the node to extract html from.
 * @param document - the document to use for the DOM
 *
 * ```ts
 * import { EditorState, prosemirrorNodeToHtml } from 'remirror';
 *
 * function convertStateToHtml(state: EditorState): string {
 *   return prosemirrorNodeToHtml(state.doc);
 * }
 * ```
 */
declare function prosemirrorNodeToHtml(node: ProsemirrorNode, document?: Document): string;
export { prosemirrorNodeToHtml }
export { prosemirrorNodeToHtml as prosemirrorNodeToHtml_alias_1 }

/**
 * A wrapper for ProsemirrorNode.rangeHasMark that can also compare mark attributes (if supplied)
 *
 * @param props - see [[`RangeHasMarkProps`]] for options
 */
declare function rangeHasMark(props: RangeHasMarkProps): boolean;
export { rangeHasMark }
export { rangeHasMark as rangeHasMark_alias_1 }

declare interface RangeHasMarkProps extends TrStateProps, FromToProps, MarkTypeProps, Partial<AttributesProps> {
}

/**
 * Removes a mark from the current selection or provided range.
 *
 * @param props - see [[`RemoveMarkProps`]] for options
 */
declare function removeMark(props: RemoveMarkProps): CommandFunction;
export { removeMark }
export { removeMark as removeMark_alias_1 }

declare interface RemoveMarkProps extends MakeNullable<MarkTypeProps, 'type'> {
    /**
     * Whether to expand empty selections to the current mark range.
     *
     * @defaultValue true
     */
    expand?: boolean;
    /**
     * @deprecated use `selection` property instead.
     */
    range?: FromToProps;
    /**
     * The selection to apply to the command.
     */
    selection?: PrimitiveSelection;
}
export { RemoveMarkProps }
export { RemoveMarkProps as RemoveMarkProps_alias_1 }

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
declare function removeNodeAfter(tr: Transaction): Transaction;
export { removeNodeAfter }
export { removeNodeAfter as removeNodeAfter_alias_1 }

/**
 * Performs a `delete` transaction that removes a node at a given position with
 * the given `node`. `position` should point at the position immediately before
 * the node.
 *
 * @param position - the prosemirror position
 */
declare function removeNodeAtPosition({ pos, tr }: RemoveNodeAtPositionProps): Transaction;
export { removeNodeAtPosition }
export { removeNodeAtPosition as removeNodeAtPosition_alias_1 }

declare interface RemoveNodeAtPositionProps extends TransactionProps, PosProps {
}

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
declare function removeNodeBefore(tr: Transaction): Transaction;
export { removeNodeBefore }
export { removeNodeBefore as removeNodeBefore_alias_1 }

/**
 * Replaces the node at the provided position with the provided content.
 */
declare function replaceNodeAtPosition({ pos, tr, content, }: ReplaceNodeAtPositionProps): Transaction;
export { replaceNodeAtPosition }
export { replaceNodeAtPosition as replaceNodeAtPosition_alias_1 }

declare interface ReplaceNodeAtPositionProps extends RemoveNodeAtPositionProps {
    content: Fragment_2 | ProsemirrorNode | ProsemirrorNode[];
}

/**
 * Replaces text with an optional appended string at the end.
 *
 * @param props - see [[`ReplaceTextProps`]]
 */
declare function replaceText(props: ReplaceTextProps): CommandFunction;
export { replaceText }
export { replaceText as replaceText_alias_1 }

declare interface ReplaceTextProps extends Partial<AttributesProps> {
    /**
     * The text to append.
     *
     * @defaultValue '''
     */
    appendText?: string;
    /**
     * Optional text content to include.
     */
    content?: string;
    /**
     * The content type to be inserted in place of the range / selection.
     */
    type?: NodeType | MarkType | string;
    /**
     * Whether to keep the original selection after the replacement.
     */
    keepSelection?: boolean;
    /**
     * @deprecated - use `selection` instead.
     */
    range?: FromToProps;
    /**
     * The selected part of the document to replace.
     */
    selection?: PrimitiveSelection;
}
export { ReplaceTextProps }
export { ReplaceTextProps as ReplaceTextProps_alias_1 }

/**
 * The ProseMirror `Schema` as a JSON object.
 */
declare interface SchemaJSON<Nodes extends string = string, Marks extends string = string> {
    /**
     * The nodes of the schema.
     */
    nodes: Record<Nodes, NodeSpec>;
    /**
     * The marks within the schema.
     */
    marks: Record<Marks, MarkSpec>;
}
export { SchemaJSON }
export { SchemaJSON as SchemaJSON_alias_1 }

/**
 * Converts a `schema` to a JSON compatible object.
 */
declare function schemaToJSON<Nodes extends string = string, Marks extends string = string>(schema: EditorSchema): SchemaJSON<Nodes, Marks>;
export { schemaToJSON }
export { schemaToJSON as schemaToJSON_alias_1 }

/**
 * Returns a command that tries to set the selected textblocks to the
 * given node type with the given attributes.
 *
 * @param nodeType - the name of the node or the [[`NodeType`]].
 */
declare function setBlockType(nodeType: string | NodeType, attrs?: ProsemirrorAttributes, selection?: PrimitiveSelection, preserveAttrs?: boolean): CommandFunction;
export { setBlockType }
export { setBlockType as setBlockType_alias_1 }

/**
 * Set more styles to the given element.
 */
declare function setStyle(target: HTMLElement, styles: Partial<CSSStyleDeclaration>): Partial<CSSStyleDeclaration>;
export { setStyle }
export { setStyle as setStyle_alias_1 }

declare interface ShouldSkip {
    /**
     * Every input rule calls this function before deciding whether or not to run.
     *
     * This is run for every successful input rule match to check if there are any
     * reasons to prevent it from running.
     *
     * In particular it is so that the input rule only runs when there are no
     * active checks that prevent it from doing so.
     *
     * - Other extension can register a `shouldSkip` handler
     * - Every time the input rule is running it makes sure it isn't blocked.
     */
    shouldSkip?: ShouldSkipFunction;
    /**
     * A list of marks which if existing in the provided range should invalidate
     * the range.
     */
    invalidMarks?: string[];
}

/**
 * A function which is called to check whether an input rule should be skipped.
 *
 * - When it returns false then it won't be skipped.
 * - When it returns true then it will be skipped.
 */
declare type ShouldSkipFunction = (props: ShouldSkipProps) => boolean;
export { ShouldSkipFunction }
export { ShouldSkipFunction as ShouldSkipFunction_alias_1 }

declare interface ShouldSkipProps extends EditorStateProps, UpdateCaptureTextProps {
    /** The type of input rule that has been activated */
    ruleType: 'mark' | 'node' | 'plain';
}
export { ShouldSkipProps }
export { ShouldSkipProps as ShouldSkipProps_alias_1 }

/**
 * Checks which environment should be used. Returns true when we are in the dom
 * environment.
 */
declare function shouldUseDomEnvironment(): boolean;
export { shouldUseDomEnvironment }
export { shouldUseDomEnvironment as shouldUseDomEnvironment_alias_1 }

/**
 * An input rule which can have a `shouldSkip` property that returns true when
 * the input rule should be skipped.
 */
declare type SkippableInputRule = ShouldSkip & InputRule;
export { SkippableInputRule }
export { SkippableInputRule as SkippableInputRule_alias_1 }

/**
 * Get the start position of the parent of the current resolve position
 *
 * @param $pos - the resolved `ProseMirror` position
 */
declare function startPositionOfParent($pos: ResolvedPos_2): number;
export { startPositionOfParent }
export { startPositionOfParent as startPositionOfParent_alias_1 }

declare interface StateSelectionPosProps {
    /**
     * Provide an editor state, or the editor selection or a resolved position.
     */
    selection: EditorState_2 | Selection_2 | ResolvedPos_2;
}

/**
 * A function that converts a string into a `ProsemirrorNode`.
 */
declare interface StringHandler {
    (params: NodeStringHandlerOptions): ProsemirrorNode;
    (params: FragmentStringHandlerOptions): Fragment;
}
export { StringHandler }
export { StringHandler as StringHandler_alias_1 }

declare type StringHandlerOptions = NodeStringHandlerOptions | FragmentStringHandlerOptions;
export { StringHandlerOptions }
export { StringHandlerOptions as StringHandlerOptions_alias_1 }

declare interface StringHandlerProps {
    /**
     * A function which transforms a string into a prosemirror node.
     *
     * @remarks
     * Can be used to transform markdown / html or any other string format into a
     * prosemirror node.
     *
     * See [[`fromHTML`]] for an example of how this could work.
     */
    stringHandler?: StringHandler;
}
export { StringHandlerProps }
export { StringHandlerProps as StringHandlerProps_alias_1 }

declare interface TextBetween extends PosProps, TextProps {
}

/**
 * Find the different ranges of text between a provided range with support for
 * traversing multiple nodes.
 */
declare function textBetween(props: TextBetweenProps): TextBetween[];
export { textBetween }
export { textBetween as textBetween_alias_1 }

declare interface TextBetweenProps extends FromToProps {
    /**
     * The prosemirror `doc` node.
     */
    doc: ProsemirrorNode;
}

/**
 * Toggle a block between the provided type and toggleType.
 *
 * @param toggleProps - see [[`ToggleBlockItemProps`]] for available options
 */
declare function toggleBlockItem(toggleProps: ToggleBlockItemProps): CommandFunction;
export { toggleBlockItem }
export { toggleBlockItem as toggleBlockItem_alias_1 }

declare interface ToggleBlockItemProps extends NodeTypeProps, Partial<AttributesProps> {
    /**
     * The type to toggle back to. Usually this is the `paragraph` node type.
     *
     * @defaultValue 'paragraph'
     */
    toggleType?: NodeType | string;
    /**
     * Whether to preserve the attrs when toggling a block item. This means that
     * extra attributes that are shared between nodes will be maintained.
     *
     * @defaultValue true
     */
    preserveAttrs?: boolean;
}
export { ToggleBlockItemProps }
export { ToggleBlockItemProps as ToggleBlockItemProps_alias_1 }

/**
 * Toggle between wrapping an inactive node with the provided node type, and
 * lifting it up into it's parent.
 *
 * @param nodeType - the node type to toggle
 * @param attrs - the attrs to use for the node
 */
declare function toggleWrap(nodeType: string | NodeType, attrs?: ProsemirrorAttributes, selection?: PrimitiveSelection): CommandFunction;
export { toggleWrap }
export { toggleWrap as toggleWrap_alias_1 }

declare const transformers: {
    /**
     * Remove every invalid block from the editor. This is a destructive action
     * and should only be applied if you're sure it's the best strategy.
     *
     * @param json - the content as a json object.
     * @param invalidContent - the list of invalid items as passed to the error
     * handler.
     */
    remove(json: RemirrorJSON, invalidContent: InvalidContentBlock[]): RemirrorJSON;
};

declare type UpdateCaptured = (captured: UpdateCaptureTextProps) => Partial<UpdateCaptureTextProps>;

export declare interface UpdateCaptureTextProps {
    /**
     * The first capture group from the matching input rule.
     */
    captureGroup: string | undefined;
    /**
     * The text of the full match which was received.
     */
    fullMatch: string;
    /**
     * The starting position of the match relative to the `doc`.
     */
    start: number;
    /**
     * The end position of the match relative to the `doc`.
     */
    end: number;
}

/**
 * Update the selection with the provided MarkType.
 *
 * @param props - see [[`UpdateMarkProps`]] for options
 */
declare function updateMark(props: UpdateMarkProps): CommandFunction;
export { updateMark }
export { updateMark as updateMark_alias_1 }

declare interface UpdateMarkProps extends Partial<RangeProps>, Partial<AttributesProps> {
    /**
     * The text to append.
     *
     * @defaultValue '''
     */
    appendText?: string;
    /**
     * The type of the
     */
    type: MarkType;
}
export { UpdateMarkProps }
export { UpdateMarkProps as UpdateMarkProps_alias_1 }

/**
 * Wrap the selection or the provided text in a node of the given type with the
 * given attributes.
 */
declare function wrapIn(type: string | NodeType, attrs?: ProsemirrorAttributes, selection?: PrimitiveSelection): CommandFunction;
export { wrapIn }
export { wrapIn as wrapIn_alias_1 }

export { }

declare global {
  namespace Remirror {
    /**
     * This interface provides all the named string handlers. The key is the
     * only part that's used meaning the value isn't important. However, it's
     * conventional to use the Extension for the value.
     */
    interface StringHandlers {}
  }
}
