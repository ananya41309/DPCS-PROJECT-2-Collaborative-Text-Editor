import { MultishiftActionTypes } from './multishift-constants';
import type { CreateMultishiftAction, ItemClickPayload, MultishiftStateProps, SpecialKeyDownPayload } from './multishift-types';
export interface ItemsPayload<Item = any> {
    items: Item[];
    /**
     * By default whenever a selection is made the highlights are reset.
     * Set this to true to hold onto the highlights
     */
    keepHighlights?: boolean;
}
/**
 * Select the provided items.
 */
declare function selectItems<Item = any>(items: Item[], keepHighlights?: boolean): {
    type: "$$__SELECT_ITEMS__";
    payload: {
        items: Item[];
        keepHighlights: boolean;
    };
};
/**
 * Select the provided item.
 */
declare function selectItem<Item = any>(item: Item, keepHighlights?: boolean): {
    type: "$$__SELECT_ITEM__";
    payload: {
        items: Item[];
        keepHighlights: boolean;
    };
};
/**
 * Remove the provided items from the current selection.
 */
declare function removeSelectedItems<Item = any>(items: Item[], keepHighlights?: boolean): {
    type: "$$_REMOVE__SELECTED_ITEMS__";
    payload: {
        items: Item[];
        keepHighlights: boolean;
    };
};
/**
 * Remove the provided item from the current selection.
 */
declare function removeSelectedItem<Item = any>(item: Item, keepHighlights?: boolean): {
    type: "$$__REMOVE_SELECTED_ITEM__";
    payload: {
        items: Item[];
        keepHighlights: boolean;
    };
};
/**
 * Remove the provided item from the current selection.
 */
declare function clearSelection(): {
    type: "$$__CLEAR_SELECTION__";
};
/**
 * Set the `hoverIndex` to a certain value.
 */
declare function setHoverItemIndex(payload: number): {
    type: "$$__SET_HOVER_ITEM_INDEX__";
    payload: number;
};
/**
 * Toggle the `isOpen` status of the menu.
 */
declare function toggleMenu(): {
    type: "$$__TOGGLE_MENU__";
};
/**
 * Set isOpen to false (closing the menu).
 */
declare function closeMenu(): {
    type: "$$__CLOSE_MENU__";
};
/**
 * Set `isOpen` to true (opening the menu).
 */
declare function openMenu(): {
    type: "$$__OPEN_MENU__";
};
/**
 * Set the highlighted item indexes.
 */
declare function setHighlightedIndexes(payload: number[]): {
    type: "$$__SET_HIGHLIGHTED_INDEXES__";
    payload: number[];
};
/**
 * Set the highlighted item index.
 */
declare function setHighlightedIndex(index: number): {
    type: "$$__SET_HIGHLIGHTED_INDEX__";
    payload: number[];
};
/**
 * Removes all the highlighted items including the hover.
 */
declare function clearHighlighted(): {
    type: "$$__CLEAR_HIGHLIGHTED__";
};
/**
 * Reset the state of the reducer.
 */
declare function reset(): {
    type: "$$__RESET__";
};
/**
 * Dispatched when the mouse hovers over an item
 */
declare function itemMouseMove(payload: number): {
    type: "$$__ITEM_MOUSE_MOVE__";
    payload: number;
};
declare function itemMouseLeave(payload: number): {
    type: "$$__ITEM_MOUSE_LEAVE__";
    payload: number;
};
/**
 * Reports when a user has clicked on an item's element.
 */
declare function itemClick(payload: ItemClickPayload): {
    type: "$$__ITEM_CLICK__";
    payload: ItemClickPayload;
};
/**
 * Called when the menu is blurred.
 */
declare function menuBlur(): {
    type: "$$__MENU_BLUR__";
};
declare function inputBlur(): {
    type: "$$__INPUT_BLUR__";
};
declare function toggleButtonBlur(): {
    type: "$$__TOGGLE_BUTTON_BLUR__";
};
/**
 * Clears the jump text value.
 */
declare function clearJumpText(): {
    type: "$$__CLEAR_JUMP_TEXT__";
};
declare function clearInputValue(): {
    type: "$$__CLEAR_INPUT_VALUE__";
};
/**
 * Dispatches the action for clicking the toggle button
 */
declare function toggleButtonClick(): {
    type: "$$__TOGGLE_BUTTON_CLICK__";
};
declare function outerTouchEnd(): {
    type: "$$__OUTER_TOUCH_END__";
};
declare function outerMouseUp(): {
    type: "$$__OUTER_MOUSE_UP__";
};
/**
 * Handle the menu key down event.
 */
declare function menuSpecialKeyDown(payload: SpecialKeyDownPayload): {
    type: "$$__MENU_SPECIAL_KEY_DOWN__";
    payload: SpecialKeyDownPayload;
};
declare function toggleButtonSpecialKeyDown(payload: SpecialKeyDownPayload): {
    type: "$$__TOGGLE_BUTTON_SPECIAL_KEY_DOWN__";
    payload: SpecialKeyDownPayload;
};
declare function inputSpecialKeyDown(payload: SpecialKeyDownPayload): {
    type: "$$__INPUT_SPECIAL_KEY_DOWN__";
    payload: SpecialKeyDownPayload;
};
declare function menuCharacterKeyDown(payload: string): {
    type: "$$__MENU_CHARACTER_KEY_DOWN__";
    payload: string;
};
declare function inputValueChange(payload: string): {
    type: "$$__INPUT_VALUE_CHANGE__";
    payload: string;
};
declare function setState<Item = any>(payload: MultishiftStateProps<Item>): {
    type: "$$__SET_STATE__";
    payload: Partial<import("./multishift-types").MultishiftState<Item>>;
};
/**
 * The action creators which can be dispatched via the reducer.
 */
export declare const Actions: {
    itemMouseMove: typeof itemMouseMove;
    itemMouseLeave: typeof itemMouseLeave;
    itemClick: typeof itemClick;
    menuBlur: typeof menuBlur;
    toggleButtonBlur: typeof toggleButtonBlur;
    inputBlur: typeof inputBlur;
    toggleButtonClick: typeof toggleButtonClick;
    menuSpecialKeyDown: typeof menuSpecialKeyDown;
    toggleButtonSpecialKeyDown: typeof toggleButtonSpecialKeyDown;
    inputSpecialKeyDown: typeof inputSpecialKeyDown;
    menuCharacterKeyDown: typeof menuCharacterKeyDown;
    outerTouchEnd: typeof outerTouchEnd;
    outerMouseUp: typeof outerMouseUp;
    selectItems: typeof selectItems;
    selectItem: typeof selectItem;
    removeSelectedItems: typeof removeSelectedItems;
    removeSelectedItem: typeof removeSelectedItem;
    setState: typeof setState;
    clearSelection: typeof clearSelection;
    setHoverItemIndex: typeof setHoverItemIndex;
    inputValueChange: typeof inputValueChange;
    clearInputValue: typeof clearInputValue;
    toggleMenu: typeof toggleMenu;
    closeMenu: typeof closeMenu;
    openMenu: typeof openMenu;
    setHighlightedIndexes: typeof setHighlightedIndexes;
    setHighlightedIndex: typeof setHighlightedIndex;
    clearHighlighted: typeof clearHighlighted;
    reset: typeof reset;
    clearJumpText: typeof clearJumpText;
};
declare global {
    namespace Multishift {
        /**
         * This is an interface of actions available. Use declaration merging to
         * extend it with your own custom actions.
         */
        interface Actions<Item = any> {
            itemMouseMove: typeof itemMouseMove;
            itemMouseLeave: typeof itemMouseLeave;
            itemClick: typeof itemClick;
            menuBlur: typeof menuBlur;
            toggleButtonBlur: typeof toggleButtonBlur;
            inputBlur: typeof inputBlur;
            toggleButtonClick: typeof toggleButtonClick;
            menuSpecialKeyDown: typeof menuSpecialKeyDown;
            toggleButtonSpecialKeyDown: typeof toggleButtonSpecialKeyDown;
            inputSpecialKeyDown: typeof inputSpecialKeyDown;
            menuCharacterKeyDown: typeof menuCharacterKeyDown;
            outerTouchEnd: typeof outerTouchEnd;
            outerMouseUp: typeof outerMouseUp;
        }
        interface CoreActions<Item = any> {
            selectItems: CreateMultishiftAction<typeof MultishiftActionTypes.SelectItems, ItemsPayload<Item>, [
                Item[],
                boolean?
            ]>;
            selectItem: CreateMultishiftAction<typeof MultishiftActionTypes.SelectItem, ItemsPayload<Item>, [
                Item,
                boolean?
            ]>;
            removeSelectedItems: CreateMultishiftAction<typeof MultishiftActionTypes.RemoveSelectedItems, ItemsPayload<Item>, [
                Item[],
                boolean?
            ]>;
            removeSelectedItem: CreateMultishiftAction<typeof MultishiftActionTypes.RemoveSelectedItem, ItemsPayload<Item>, [
                Item,
                boolean?
            ]>;
            setState: CreateMultishiftAction<typeof MultishiftActionTypes.SetState, MultishiftStateProps<Item>>;
            clearSelection: typeof clearSelection;
            setHoverItemIndex: typeof setHoverItemIndex;
            inputValueChange: typeof inputValueChange;
            clearInputValue: typeof clearInputValue;
            toggleMenu: typeof toggleMenu;
            closeMenu: typeof closeMenu;
            openMenu: typeof openMenu;
            setHighlightedIndexes: typeof setHighlightedIndexes;
            setHighlightedIndex: typeof setHighlightedIndex;
            clearHighlighted: typeof clearHighlighted;
            reset: typeof reset;
            clearJumpText: typeof clearJumpText;
        }
    }
}
export {};
