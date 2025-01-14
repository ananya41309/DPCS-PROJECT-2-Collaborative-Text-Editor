/**
 * @module
 *
 * Create menu navigation handlers when showing popup menus inside the editor.
 */
import { MultishiftHelpers, MultishiftPropGetters, MultishiftState } from 'multishift';
import { KeyBindingNames } from '@remirror/core';
interface MenuNavigationProps<Item = any> extends MenuNavigationOptions {
    /**
     * The items that will be rendered as part of the dropdown menu.
     *
     * When the items are an empty array then nothing will be shown.
     */
    items: Item[];
    /**
     * Set to `true` when the menu should be visible.
     */
    isOpen: boolean;
    /**
     * Called when submitting the inline menu via the keyboard.
     *
     * Currently the hardcoded submit key is `Enter`
     *
     * Return `true` to indicate the event was handled or false to indicated that
     * nothing has been done.
     */
    onSubmit: (item: Item, type: 'click' | 'keyPress') => boolean;
    /**
     * Called when dismissing the inline menu.
     *
     * Currently `Tab` and `Escape` dismiss the menu.
     *
     * Return `true` to indicate the event was handled or false to indicated that
     * nothing has been done.
     */
    onDismiss: () => boolean;
}
export interface MenuNavigationOptions {
    /**
     * The direction of the arrow key press.
     *
     * @defaultValue 'vertical';
     */
    direction?: MenuDirection;
    /**
     * Keys that can submit the selection.
     *
     * @defaultValue ['Enter']
     */
    submitKeys?: KeyBindingNames[];
    /**
     * Keys that can dismiss the menu.
     *
     * @defaultValue ['Escape', 'Tab', 'Shift-Tab']
     */
    dismissKeys?: KeyBindingNames[];
    /**
     * When true, refocus the editor when a click is made.
     *
     * @defaultValue true
     */
    focusOnClick?: boolean;
}
export type MenuDirection = 'horizontal' | 'vertical';
export interface UseMenuNavigationReturn<Item = any> extends Pick<MultishiftPropGetters<Item>, 'getMenuProps' | 'getItemProps'>, Pick<MultishiftHelpers<Item>, 'itemIsSelected' | 'indexIsSelected' | 'indexIsHovered' | 'itemIsHovered'>, Pick<MultishiftState<Item>, 'hoveredIndex'> {
    /**
     * The selected index.
     */
    index: number;
    setIndex: (index: number) => void;
}
/**
 * This hook provides the primitives for rendering a dropdown menu within
 */
export declare function useMenuNavigation<Item = any>(props: MenuNavigationProps): UseMenuNavigationReturn<Item>;
export {};
