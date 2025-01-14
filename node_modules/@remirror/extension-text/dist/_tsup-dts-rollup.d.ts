import { NodeExtension } from '@remirror/core';
import { NodeExtensionSpec } from '@remirror/core';

/**
 * The default text passed into the prosemirror schema.
 *
 * Extra attributes are not allowed on the text extension.
 *
 * @core
 */
declare class TextExtension extends NodeExtension {
    get name(): "text";
    createTags(): "inline"[];
    createNodeSpec(): NodeExtensionSpec;
}
export { TextExtension }
export { TextExtension as TextExtension_alias_1 }

export { }

declare global {
  namespace Remirror {
    interface AllExtensions {
      text: TextExtension;
    }
  }
}
