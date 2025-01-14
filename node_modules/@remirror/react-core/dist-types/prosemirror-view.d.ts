import { DirectEditorProps, EditorView } from '@remirror/pm/view';
/**
 * Creates a new editor view
 *
 * @param place
 * @param props
 */
export declare function createEditorView(place: Node | ((p: HTMLElement) => void) | null, props: DirectEditorProps): EditorView;
