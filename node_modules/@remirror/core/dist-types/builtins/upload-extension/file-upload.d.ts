import { NodeType } from '@remirror/pm/model';
import { EditorView } from '@remirror/pm/view';
import { FileUploader } from './file-uploader';
import { UploadContext } from './upload-context';
/**
 * Any `ProsemirrorNode` can use the `uploadFile` function in this file as long
 * as its attributes implement this interface.
 */
interface AbstractNodeAttributes {
    id?: any;
    error?: string | null;
}
export type UploadFileHandler<NodeAttributes> = () => FileUploader<NodeAttributes>;
export interface UploadPlaceholderPayload<NodeAttributes extends AbstractNodeAttributes> {
    context: UploadContext;
    fileUploader: FileUploader<NodeAttributes>;
}
export interface UploadFileProps<NodeAttributes extends AbstractNodeAttributes = object> {
    file: File;
    pos: number | undefined;
    view: EditorView;
    fileType: NodeType;
    uploadHandler: UploadFileHandler<NodeAttributes>;
}
/**
 * Insert a file into the editor and upload it.
 */
export declare function uploadFile<NodeAttributes extends AbstractNodeAttributes>({ file, pos, view, fileType, uploadHandler, }: UploadFileProps<NodeAttributes>): void;
export {};
