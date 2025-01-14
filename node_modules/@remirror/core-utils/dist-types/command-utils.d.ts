import type { AttributesProps, CommandFunction, CommandFunctionProps, FromToProps, MakeNullable, MarkType, MarkTypeProps, NodeType, NodeTypeProps, PrimitiveSelection, ProsemirrorAttributes, RangeProps, Selection, Transaction } from '@remirror/core-types';
export interface UpdateMarkProps extends Partial<RangeProps>, Partial<AttributesProps> {
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
/**
 * Update the selection with the provided MarkType.
 *
 * @param props - see [[`UpdateMarkProps`]] for options
 */
export declare function updateMark(props: UpdateMarkProps): CommandFunction;
/**
 * Lift the selected block, or the closest ancestor block of the selection that
 * can be lifted, out of its parent node.
 *
 * Adapted from
 * https://github.com/ProseMirror/prosemirror-commands/blob/3126d5c625953ba590c5d3a0db7f1009f46f1571/src/commands.js#L212-L221
 */
export declare function lift({ tr, dispatch }: Pick<CommandFunctionProps, 'tr' | 'dispatch'>): boolean;
/**
 * Wrap the selection or the provided text in a node of the given type with the
 * given attributes.
 */
export declare function wrapIn(type: string | NodeType, attrs?: ProsemirrorAttributes, selection?: PrimitiveSelection): CommandFunction;
/**
 * Toggle between wrapping an inactive node with the provided node type, and
 * lifting it up into it's parent.
 *
 * @param nodeType - the node type to toggle
 * @param attrs - the attrs to use for the node
 */
export declare function toggleWrap(nodeType: string | NodeType, attrs?: ProsemirrorAttributes, selection?: PrimitiveSelection): CommandFunction;
/**
 * Returns a command that tries to set the selected textblocks to the
 * given node type with the given attributes.
 *
 * @param nodeType - the name of the node or the [[`NodeType`]].
 */
export declare function setBlockType(nodeType: string | NodeType, attrs?: ProsemirrorAttributes, selection?: PrimitiveSelection, preserveAttrs?: boolean): CommandFunction;
export interface ToggleBlockItemProps extends NodeTypeProps, Partial<AttributesProps> {
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
/**
 * Toggle a block between the provided type and toggleType.
 *
 * @param toggleProps - see [[`ToggleBlockItemProps`]] for available options
 */
export declare function toggleBlockItem(toggleProps: ToggleBlockItemProps): CommandFunction;
export interface ReplaceTextProps extends Partial<AttributesProps> {
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
/**
 * Taken from https://stackoverflow.com/a/4900484
 *
 * Check that the browser is chrome. Supports passing a minimum version to check
 * that it is a greater than or equal to this version.
 */
export declare function isChrome(minVersion?: number): boolean;
/**
 * Taken from https://stackoverflow.com/a/4900484
 *
 * Check that the browser is safari. Supports passing a minimum version to check
 * that it is a greater than or equal to this version.
 */
export declare function isSafari(minVersion?: number): boolean;
/**
 * Checks the selection for the current state and updates the active transaction
 * to a selection that is consistent with the initial selection.
 *
 * @param state - the editor state before any updates
 * @param tr - the transaction which has been updated and may have impacted the
 * selection.
 */
export declare function preserveSelection(selection: Selection, tr: Transaction): void;
/**
 * Replaces text with an optional appended string at the end.
 *
 * @param props - see [[`ReplaceTextProps`]]
 */
export declare function replaceText(props: ReplaceTextProps): CommandFunction;
export interface RemoveMarkProps extends MakeNullable<MarkTypeProps, 'type'> {
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
/**
 * Removes a mark from the current selection or provided range.
 *
 * @param props - see [[`RemoveMarkProps`]] for options
 */
export declare function removeMark(props: RemoveMarkProps): CommandFunction;
