import { Fragment, MarkType, Node as ProsemirrorNode, NodeType } from 'prosemirror-model';
import { Plugin, Selection } from 'prosemirror-state';
import type { EditorView } from 'prosemirror-view';
import { ExtensionPriority } from '@remirror/core-constants';
/**
 * Create the paste plugin handler.
 */
export declare function pasteRules(pasteRules: PasteRule[]): Plugin;
interface BasePasteRule {
    /**
     * The priority for the extension. Can be a number, or if you're using it with
     * `remirror` then use the `ExtensionPriority` enum.
     *
     * @defaultValue 10
     */
    priority?: ExtensionPriority;
}
interface BaseRegexPasteRule extends BasePasteRule {
    /**
     * The regular expression to test against.
     */
    regexp: RegExp;
    /**
     * Only match at the start of the text block.
     */
    startOfTextBlock?: boolean;
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
     * The names of nodes for which this paste rule can be ignored. This means
     * that if content is within any of the nodes provided the transformation will
     * be ignored.
     */
    ignoredNodes?: string[];
    /**
     * The names of marks for which this paste rule can be ignored. This means
     * that if the matched content contains this mark it will be ignored.
     */
    ignoredMarks?: string[];
}
interface BaseContentPasteRule extends BaseRegexPasteRule {
    /**
     * A helper function for setting the attributes for a transformation.
     *
     * The second parameter is `true` when the attributes are retrieved for a replacement.
     */
    getAttributes?: Record<string, unknown> | ((match: RegExpExecArray, isReplacement: boolean) => Record<string, unknown> | undefined);
}
/**
 * For adding marks to text when a paste rule is activated.
 */
export interface MarkPasteRule extends BaseContentPasteRule {
    /**
     * The type of rule.
     */
    type: 'mark';
    /**
     * The prosemirror mark type instance.
     */
    markType: MarkType;
    /**
     * Set to `true` to replace the selection. When the regex matches for the
     * selected text.
     *
     * Can be a function which receives the text that will be replaced.
     */
    replaceSelection?: boolean | ((replacedText: string) => boolean);
    /**
     * A function that transforms the match into the desired text value.
     *
     * Return an empty string to delete all content.
     *
     * Return `false` to invalidate the match.
     */
    transformMatch?: (match: RegExpExecArray) => string | null | undefined | false;
}
export interface NodePasteRule extends BaseContentPasteRule {
    /**
     * The type of rule.
     */
    type: 'node';
    /**
     * The node type to create.
     */
    nodeType: NodeType;
    /**
     * A function that transforms the match into the content to use when creating
     * a node.
     *
     * Pass `() => {}` to remove the matched text.
     *
     * If this function is undefined, then the text node that is cut from the match
     * will be used as the content.
     */
    getContent?: (match: RegExpExecArray) => Fragment | ProsemirrorNode | ProsemirrorNode[] | undefined | void;
}
/**
 * For handling simpler text updates.
 */
export interface TextPasteRule extends BaseRegexPasteRule {
    /**
     * The type of rule.
     */
    type: 'text';
    /**
     * A function that transforms the match into the desired text value.
     *
     * Return an empty string to delete all content.
     *
     * Return `false` to invalidate the match.
     */
    transformMatch?: (match: RegExpExecArray) => string | null | undefined | false;
}
export type FileHandlerProps = FilePasteHandlerProps | FileDropHandlerProps;
export interface FilePasteHandlerProps {
    type: 'paste';
    /** All the matching files */
    files: File[];
    event: ClipboardEvent;
    view: EditorView;
    selection: Selection;
}
export interface FileDropHandlerProps {
    type: 'drop';
    /** All the matching files */
    files: File[];
    event: DragEvent;
    view: EditorView;
    pos: number;
}
/**
 * For handling pasting files and also file drops.
 */
export interface FilePasteRule extends BasePasteRule {
    type: 'file';
    /**
     * A regex test for the file type.
     */
    regexp?: RegExp;
    /**
     * The names of nodes for which this paste rule can be ignored. This means
     * that if content is within any of the nodes provided the transformation will
     * be ignored.
     */
    ignoredNodes?: string[];
    /**
     * Return `false` to defer to the next image handler.
     *
     * The file
     */
    fileHandler: (props: FileHandlerProps) => boolean;
}
export type PasteRule = FilePasteRule | TextPasteRule | NodePasteRule | MarkPasteRule;
export interface IsInCodeOptions {
    /**
     * When this is set to true ensure the selection is fully contained within a code block. This means that selections that span multiple characters must all be within a code region for it to return true.
     *
     * @defaultValue true
     */
    contained?: boolean;
}
/**
 * Check whether the current selection is completely contained within a code block or mark.
 */
export declare function isInCode(selection: Selection, { contained }?: IsInCodeOptions): boolean;
export {};
