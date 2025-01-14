import { RemirrorIdentifier } from '@remirror/core-constants';
import type { AnchorHeadProps, AnyConstructor, ApplySchemaAttributes, AttributesProps, DOMCompatibleAttributes, EditorSchema, EditorState, FromToProps, MarkTypeProps, PosProps, PrimitiveSelection, ProsemirrorAttributes, ProsemirrorNode, RemirrorContentType, RemirrorIdentifierShape, RemirrorJSON, ResolvedPos, SchemaProps, Selection, TextProps, Transaction, TrStateProps } from '@remirror/core-types';
import { Fragment, Mark, MarkType, NodeRange, NodeType, ParseOptions, ResolvedPos as PMResolvedPos, Slice } from '@remirror/pm/model';
import { AllSelection, EditorState as PMEditorState, NodeSelection, TextSelection, Transaction as PMTransaction } from '@remirror/pm/state';
import type { Step } from '@remirror/pm/transform';
/**
 * Identifies the value as having a remirror identifier. This is the core
 * predicate check for the remirror library.
 *
 * @param value - the value to be checked
 *
 * @internal
 */
export declare function isRemirrorType(value: unknown): value is RemirrorIdentifierShape;
/**
 * Checks that the provided remirror shape is of a given type.
 *
 * @param value - any remirror shape
 * @param type - the remirror identifier type to check for
 *
 * @internal
 */
export declare function isIdentifierOfType(value: RemirrorIdentifierShape, type: RemirrorIdentifier | RemirrorIdentifier[]): boolean;
/**
 * Check to see if the passed value is a NodeType.
 *
 * @param value - the value to check
 */
export declare function isNodeType(value: unknown): value is NodeType;
/**
 * Get the node type from a potential string value.
 */
export declare function getNodeType(type: string | NodeType, schema: EditorSchema): NodeType;
/**
 * Check to see if the passed value is a MarkType.
 *
 * @param value - the value to check
 */
export declare function isMarkType(value: unknown): value is MarkType;
/**
 * Get the mark type from a potential string value.
 */
export declare function getMarkType(type: string | MarkType, schema: EditorSchema): MarkType;
/**
 * Checks to see if the passed value is a ProsemirrorNode
 *
 * @param value - the value to check
 */
export declare function isProsemirrorNode(value: unknown): value is ProsemirrorNode;
/**
 * Checks to see if the passed value is a ProsemirrorNode
 *
 * @param value - the value to check
 */
export declare function isProsemirrorFragment(value: unknown): value is Fragment;
/**
 * Checks to see if the passed value is a ProsemirrorMark
 *
 * @param value - the value to check
 */
export declare function isProsemirrorMark(value: unknown): value is Mark;
/**
 * Checks to see if the passed value is a Prosemirror Editor State
 *
 * @param value - the value to check
 */
export declare function isEditorState(value: unknown): value is PMEditorState | Readonly<PMEditorState>;
/**
 * Checks to see if the passed value is a Prosemirror Transaction
 *
 * @param value - the value to check
 */
export declare function isTransaction(value: unknown): value is PMTransaction;
/**
 * Checks to see if the passed value is an instance of the editor schema
 *
 * @param value - the value to check
 */
export declare function isEditorSchema(value: unknown): value is EditorSchema;
/**
 * Predicate checking whether the selection is a `TextSelection`.
 *
 * @param value - the value to check
 */
export declare function isTextSelection(value: unknown): value is TextSelection;
/**
 * Predicate checking whether the selection is an `AllSelection`.
 *
 * @param value - the value to check
 */
export declare function isAllSelection(value: unknown): value is AllSelection;
/**
 * Predicate checking whether the value is a Selection
 *
 * @param value - the value to check
 */
export declare function isSelection(value: unknown): value is Selection;
/**
 * Predicate checking whether the value is a ResolvedPosition.
 *
 * @param value - the value to check
 */
export declare function isResolvedPos(value: unknown): value is PMResolvedPos;
interface RangeHasMarkProps extends TrStateProps, FromToProps, MarkTypeProps, Partial<AttributesProps> {
}
/**
 * A wrapper for ProsemirrorNode.rangeHasMark that can also compare mark attributes (if supplied)
 *
 * @param props - see [[`RangeHasMarkProps`]] for options
 */
export declare function rangeHasMark(props: RangeHasMarkProps): boolean;
/**
 * Predicate checking whether the selection is a NodeSelection
 *
 * @param value - the value to check
 */
export declare function isNodeSelection(value: unknown): value is NodeSelection;
interface IsMarkActiveProps extends MarkTypeProps, Partial<AttributesProps>, Partial<FromToProps>, TrStateProps {
}
/**
 * Checks that a mark is active within the selected region, or the current
 * selection point is within a region with the mark active. Used by extensions
 * to implement their active methods.
 *
 * @param props - see [[`IsMarkActiveProps`]] for options
 */
export declare function isMarkActive(props: IsMarkActiveProps): boolean;
/**
 * Check if the specified type (NodeType) can be inserted at the current
 * selection point.
 *
 * @param state - the editor state
 * @param type - the node type
 */
export declare function canInsertNode(state: EditorState, type: NodeType): boolean;
/**
 * Checks if a node looks like an empty document.
 *
 * @param node - the prosemirror node
 */
export declare function isDocNodeEmpty(node: ProsemirrorNode): boolean;
export interface DefaultDocNodeOptions {
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
/**
 * Check whether the provided doc node has the same value as the default empty
 * node for the document. Basically checks that the document is untouched.
 *
 * This is useful for extensions like the placeholder which only should be shown
 * when the document matches the default empty state.
 */
export declare function isDefaultDocNode(doc: ProsemirrorNode, options?: DefaultDocNodeOptions): boolean;
/**
 * Check that two nodes are equal while ignoring all attributes.
 *
 * This is an alternative to the `node.eq()` method.
 */
export declare function prosemirrorNodeEquals(node: ProsemirrorNode, other: ProsemirrorNode): boolean;
/**
 * Get the default `doc` node for a given schema.
 */
export declare function getDefaultDocNode(schema: EditorSchema): ProsemirrorNode | undefined;
/**
 * Get the default block node from the schema.
 */
export declare function getDefaultBlockNode(schema: EditorSchema): NodeType;
/**
 * Check if the provided node is a default block node.
 */
export declare function isDefaultBlockNode(node: ProsemirrorNode): boolean;
/**
 * Checks if the current node is a block node and empty.
 *
 * @param node - the prosemirror node
 */
export declare function isEmptyBlockNode(node: ProsemirrorNode | null | undefined): boolean;
/**
 * Retrieve the attributes for a mark.
 *
 * @param trState - the editor state or a transaction
 * @param type - the mark type
 */
export declare function getMarkAttributes(trState: EditorState | Transaction, type: MarkType): ProsemirrorAttributes | false;
export interface GetMarkRange extends FromToProps {
    /**
     * The mark that was found within the active range.
     */
    mark: Mark;
    /**
     * The text contained by this mark.
     */
    text: string;
}
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
export declare function getMarkRange($pos: ResolvedPos, type: string | MarkType, $end?: ResolvedPos): GetMarkRange | undefined;
/**
 * Get all the ranges which contain marks for the provided selection.
 */
export declare function getMarkRanges(selection: Selection, type: string | MarkType): GetMarkRange[];
export interface ChangedRange extends FromToProps {
    /**
     * The previous starting position in the document.
     */
    prevFrom: number;
    /**
     * The previous ending position in the document.
     */
    prevTo: number;
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
export declare function getChangedRanges(tr: Transaction, StepTypes?: Array<AnyConstructor<Step>>): ChangedRange[];
/**
 * Get all the changed node ranges for a provided transaction.
 *
 * @param tr - the transaction received with updates applied.
 * @param StepTypes - the valid Step Constructors. Set to an empty array to
 * accept all Steps.
 */
export declare function getChangedNodeRanges(tr: Transaction, StepTypes?: Array<AnyConstructor<Step>>): NodeRange[];
/**
 * Retrieves the text content from a slice
 *
 * @remarks
 * A utility that's useful for pulling text content from a slice which is
 * usually created via `selection.content()`
 *
 * @param slice - the prosemirror slice
 */
export declare function getTextContentFromSlice(slice: Slice): string;
export interface GetSelectedGroup extends FromToProps {
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
export declare function getSelectedGroup(state: EditorState | Transaction, exclude: RegExp): GetSelectedGroup | undefined;
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
export declare function getSelectedWord(state: EditorState | Transaction): GetSelectedGroup | undefined;
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
export declare function getMatchString(match: string | string[], index?: number): string;
/**
 * Checks whether the cursor is at the end of the state.doc
 *
 * @param state - the editor state
 */
export declare function atDocEnd(state: EditorState): boolean;
/**
 * Checks whether the cursor is at the beginning of the state.doc
 *
 * @param state - the editor state
 */
export declare function atDocStart(state: EditorState): boolean;
/**
 * Get the start position of the parent of the current resolve position
 *
 * @param $pos - the resolved `ProseMirror` position
 */
export declare function startPositionOfParent($pos: ResolvedPos): number;
/**
 * Get the end position of the parent of the current resolve position
 *
 * @param $pos - the resolved `ProseMirror` position
 */
export declare function endPositionOfParent($pos: ResolvedPos): number;
/**
 * Retrieve the current position of the cursor
 *
 * @param selection - the editor selection
 * @returns a resolved position only when the selection is a text selection
 */
export declare function getCursor(selection: Selection): ResolvedPos | null | undefined;
/**
 * Checks whether a Prosemirror node is the top level `doc` node
 *
 * @param node - the prosemirror node
 * @param schema - the prosemirror schema to check against
 */
export declare function isDocNode(node: ProsemirrorNode | null | undefined, schema?: EditorSchema): node is ProsemirrorNode;
/**
 * Checks whether the passed in JSON is a valid object node
 *
 * @param value - the value to check
 */
export declare function isRemirrorJSON(value: unknown): value is RemirrorJSON;
/**
 * This type is the combination of all the registered string handlers for the
 * extension. This is used rather than the `StringHandlers` in order to enforce
 * the type signature of the handler method, which isn't possible with the
 * interface.
 */
export type NamedStringHandlers = {
    [K in keyof Remirror.StringHandlers]: StringHandler;
};
export interface HandlersProps {
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
export interface CreateDocumentNodeProps extends SchemaProps, Partial<CustomDocumentProps>, StringHandlerProps {
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
/**
 * Return true when the provided value is an anchor / head selection property
 */
export declare function isAnchorHeadObject(value: unknown): value is AnchorHeadProps;
/**
 * Get the nearest valid selection to the provided selection parameter.
 */
export declare function getTextSelection(selection: PrimitiveSelection, doc: ProsemirrorNode): Selection;
/**
 * A function that converts a string into a `ProsemirrorNode`.
 */
export interface StringHandler {
    (params: NodeStringHandlerOptions): ProsemirrorNode;
    (params: FragmentStringHandlerOptions): Fragment;
}
export interface StringHandlerProps {
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
export declare function createDocumentNode(props: CreateDocumentNodeProps): ProsemirrorNode;
/**
 * Checks which environment should be used. Returns true when we are in the dom
 * environment.
 */
export declare function shouldUseDomEnvironment(): boolean;
/**
 * Retrieves the document from global scope and throws an error in a non-browser
 * environment.
 *
 * @internal
 */
export declare function getDocument(): Document;
/**
 * @internal
 */
export declare function maybeGetWindowFromDocument(document?: Document | null): (Window & typeof globalThis) | null | undefined;
/**
 * @internal
 */
export declare function maybeGetWindowFromElement(element?: Element | HTMLElement | null): (Window & typeof globalThis) | null | undefined;
/**
 * @internal
 */
export declare function getWindowFromDocument(document?: Document | null): Window & typeof globalThis;
/**
 * @internal
 */
export declare function getWindowFromElement(element?: Element | HTMLElement | null): Window & typeof globalThis;
export interface CustomDocumentProps {
    /**
     * The root or custom document to use when referencing the dom.
     *
     * This can be used to support SSR.
     */
    document: Document;
}
/**
 * Convert a node into its DOM representative
 *
 * @param node - the node to extract html from.
 * @param document - the document to use for the DOM
 */
export declare function prosemirrorNodeToDom(node: ProsemirrorNode, document?: Document): DocumentFragment | HTMLElement;
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
export declare function prosemirrorNodeToHtml(node: ProsemirrorNode, document?: Document): string;
export interface BaseStringHandlerOptions extends Partial<CustomDocumentProps>, SchemaProps, ParseOptions {
    /**
     * The string content provided to the editor.
     */
    content: string;
}
export interface FragmentStringHandlerOptions extends BaseStringHandlerOptions {
    /**
     * When true will create a fragment from the provided string.
     */
    fragment: true;
}
export interface NodeStringHandlerOptions extends BaseStringHandlerOptions {
    fragment?: false;
}
export type StringHandlerOptions = NodeStringHandlerOptions | FragmentStringHandlerOptions;
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
export declare function htmlToProsemirrorNode(props: FragmentStringHandlerOptions): Fragment;
export declare function htmlToProsemirrorNode(props: NodeStringHandlerOptions): ProsemirrorNode;
/**
 * A wrapper around `state.doc.toJSON` which returns the state as a
 * `RemirrorJSON` object.
 */
export declare function getRemirrorJSON(content: EditorState | ProsemirrorNode): RemirrorJSON;
interface IsStateEqualOptions {
    /**
     * Whether to compare the selection of the two states.
     *
     * @defaultValue false
     */
    checkSelection?: boolean;
}
/**
 * Check if two states are equal.
 */
export declare function areStatesEqual(stateA: EditorState, stateB: EditorState, options?: IsStateEqualOptions): boolean;
/**
 * Check that the nodes and marks present on `schemaA` are also present on
 * `schemaB`.
 */
export declare function areSchemasCompatible(schemaA: EditorSchema, schemaB: EditorSchema): boolean;
/**
 * Return attributes for a node excluding those that were provided as extra
 * attributes.
 *
 * @param attrs - The source attributes
 * @param extra - The extra attribute schema for this node
 */
export declare function omitExtraAttributes<Output extends object = DOMCompatibleAttributes>(attrs: ProsemirrorAttributes, extra: ApplySchemaAttributes): Omit<Output, keyof Remirror.Attributes>;
/**
 * Take the `style` string attribute and combine it with the provided style
 * object.
 */
export declare function joinStyles(styleObject: object, initialStyles?: string): string;
interface TextBetweenProps extends FromToProps {
    /**
     * The prosemirror `doc` node.
     */
    doc: ProsemirrorNode;
}
interface TextBetween extends PosProps, TextProps {
}
/**
 * Find the different ranges of text between a provided range with support for
 * traversing multiple nodes.
 */
export declare function textBetween(props: TextBetweenProps): TextBetween[];
/**
 * Get the full range of the selectable content in the ProseMirror `doc`.
 */
export declare function getDocRange(doc: ProsemirrorNode): FromToProps;
/**
 * A description of an invalid content block (representing a node or a mark).
 */
export interface InvalidContentBlock {
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
/**
 * This interface is used when there is an attempt to add content to a schema
 */
export interface InvalidContentHandlerProps {
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
/**
 * The error handler function which should return a valid content type to
 * prevent further errors.
 */
export type InvalidContentHandler = (props: InvalidContentHandlerProps) => RemirrorContentType;
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
type GetInvalidContentProps<Extra extends object> = SchemaProps & {
    /**
     * The RemirrorJSON representation of the invalid content.
     */
    json: RemirrorJSON;
} & Extra;
type GetInvalidContentReturn<Extra extends object> = Omit<InvalidContentHandlerProps, 'error'> & Extra;
/**
 * Get the invalid parameter which is passed to the `onError` handler.
 */
export declare function getInvalidContent<Extra extends object>({ json, schema, ...extra }: GetInvalidContentProps<Extra>): GetInvalidContentReturn<Extra>;
/**
 * Checks that the selection is an empty text selection at the end of its parent
 * node.
 */
export declare function isEndOfTextBlock(selection: Selection): selection is TextSelection;
/**
 * Checks that the selection is an empty text selection at the start of its
 * parent node.
 */
export declare function isStartOfTextBlock(selection: Selection): selection is TextSelection;
/**
 * Returns true when the selection is a text selection at the start of the
 * document.
 */
export declare function isStartOfDoc(selection: Selection): boolean;
declare global {
    namespace Remirror {
        /**
         * This interface provides all the named string handlers. The key is the
         * only part that's used meaning the value isn't important. However, it's
         * conventional to use the Extension for the value.
         */
        interface StringHandlers {
        }
    }
}
export {};
