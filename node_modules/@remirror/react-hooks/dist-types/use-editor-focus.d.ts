import { FocusType } from '@remirror/core';
export interface UseEditorFocusProps {
    /**
     * The elements that can be focused without setting `isFocused` to false.
     */
    ignoredElements?: Array<Element | null>;
    /**
     * Set this to true if you want to also update the focus value when the user
     * focuses on other windows or tabs (outside of the current DOM).
     *
     * @defaultValue false
     */
    blurOnInactive?: boolean;
}
/**
 * Keep track of the editor focus.
 *
 * Returns a focused value which is updated whenever the editor focus changes.
 *
 * When `true`, the editor is focused when `false` the editor is not focused.
 */
export declare function useEditorFocus(props?: UseEditorFocusProps): [isFocused: boolean, focus: (position?: FocusType) => void];
