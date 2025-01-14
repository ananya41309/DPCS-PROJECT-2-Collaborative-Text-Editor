import { ProsemirrorPlugin } from '@remirror/pm';
import { PlainExtension } from '../../extension';
interface DecorationsOptions {
}
/**
 * `UploadExtension` handle the file upload process.
 */
export declare class UploadExtension extends PlainExtension<DecorationsOptions> {
    get name(): "upload";
    /**
     * Create the extension plugin for inserting decorations into the editor.
     */
    createExternalPlugins(): ProsemirrorPlugin[];
}
declare global {
    namespace Remirror {
        interface AllExtensions {
            upload: UploadExtension;
        }
    }
}
export {};
