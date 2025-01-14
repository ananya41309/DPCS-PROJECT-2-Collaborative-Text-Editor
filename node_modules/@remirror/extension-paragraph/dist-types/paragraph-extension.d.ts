import { ApplySchemaAttributes, CommandFunction, KeyBindingProps, NodeExtension, NodeExtensionSpec, NodeSpecOverride, PrimitiveSelection, ProsemirrorAttributes } from '@remirror/core';
/**
 * The paragraph is one of the essential building blocks for a prosemirror
 * editor and by default it is provided to all editors.
 *
 * @core
 */
export declare class ParagraphExtension extends NodeExtension {
    get name(): "paragraph";
    createTags(): ("lastNodeCompatible" | "formattingNode" | "block" | "textBlock")[];
    createNodeSpec(extra: ApplySchemaAttributes, override: NodeSpecOverride): NodeExtensionSpec;
    /**
     * Convert the current node to a paragraph.
     */
    convertParagraph(options?: ParagraphCommandOptions): CommandFunction;
    /**
     * Inserts a paragraph into the editor at the current selection.
     */
    insertParagraph(content: string, options?: ParagraphCommandOptions): CommandFunction;
    /**
     * Add the paragraph shortcut to the editor. This makes a paragraph into a
     */
    shortcut(props: KeyBindingProps): boolean;
}
interface ParagraphCommandOptions {
    attrs?: ProsemirrorAttributes;
    selection?: PrimitiveSelection;
    preserveAttrs?: boolean;
}
declare global {
    namespace Remirror {
        interface AllExtensions {
            paragraph: ParagraphExtension;
        }
    }
}
export {};
