import { NodeExtension, NodeExtensionSpec } from '@remirror/core';
/**
 * The default text passed into the prosemirror schema.
 *
 * Extra attributes are not allowed on the text extension.
 *
 * @core
 */
export declare class TextExtension extends NodeExtension {
    get name(): "text";
    createTags(): "inline"[];
    createNodeSpec(): NodeExtensionSpec;
}
declare global {
    namespace Remirror {
        interface AllExtensions {
            text: TextExtension;
        }
    }
}
