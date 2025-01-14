import { ApplySchemaAttributes } from '@remirror/core';
import { CommandFunction } from '@remirror/core';
import { KeyBindingProps } from '@remirror/core';
import { NodeExtension } from '@remirror/core';
import { NodeExtensionSpec } from '@remirror/core';
import { NodeSpecOverride } from '@remirror/core';
import { PrimitiveSelection } from '@remirror/core';
import { ProsemirrorAttributes } from '@remirror/core';

declare interface ParagraphCommandOptions {
    attrs?: ProsemirrorAttributes;
    selection?: PrimitiveSelection;
    preserveAttrs?: boolean;
}

/**
 * The paragraph is one of the essential building blocks for a prosemirror
 * editor and by default it is provided to all editors.
 *
 * @core
 */
declare class ParagraphExtension extends NodeExtension {
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
export { ParagraphExtension }
export { ParagraphExtension as ParagraphExtension_alias_1 }

export { }

declare global {
  namespace Remirror {
    interface AllExtensions {
      paragraph: ParagraphExtension;
    }
  }
}
