import type { Value } from '@remirror/core-types';
export declare const SPECIAL_KEYS: readonly ["Tab", "Space", "Enter", "Escape", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown", "SelectAll"];
export type SpecialKey = (typeof SPECIAL_KEYS)[number];
export declare const SPECIAL_INPUT_KEYS: readonly ["ArrowDown", "ArrowUp", "Enter", "Escape"];
export declare const SPECIAL_MENU_KEYS: readonly ["ArrowDown", "ArrowUp", "Space", "Tab", "Enter", "Escape", "Home", "End", "SelectAll"];
export declare const SPECIAL_TOGGLE_BUTTON_KEYS: readonly ["ArrowDown", "ArrowUp", "Space"];
export declare const Type: {
    /**
     * Describes a selection only drop down. There is no input for filtering
     * longer lists.
     */
    readonly Select: "select";
    /**
     * Describes the combination of a selection drop down with an input for
     * filtering potential options.
     */
    readonly ComboBox: "combobox";
    /**
     * A menu rendered without a toggleButton, combobox or input element. It is up
     * to you to provide the input value and manage the focus.
     */
    readonly ControlledMenu: "controlled-menu";
};
export type DropdownType = Value<typeof Type>;
export declare const MultishiftActionTypes: {
    readonly SelectItems: "$$__SELECT_ITEMS__";
    readonly SelectItem: "$$__SELECT_ITEM__";
    readonly RemoveSelectedItems: "$$_REMOVE__SELECTED_ITEMS__";
    readonly RemoveSelectedItem: "$$__REMOVE_SELECTED_ITEM__";
    readonly ClearSelection: "$$__CLEAR_SELECTION__";
    readonly SetHoverItemIndex: "$$__SET_HOVER_ITEM_INDEX__";
    readonly ToggleMenu: "$$__TOGGLE_MENU__";
    readonly CloseMenu: "$$__CLOSE_MENU__";
    readonly OpenMenu: "$$__OPEN_MENU__";
    readonly SetHighlightedIndexes: "$$__SET_HIGHLIGHTED_INDEXES__";
    readonly SetHighlightedIndex: "$$__SET_HIGHLIGHTED_INDEX__";
    readonly ClearHighlighted: "$$__CLEAR_HIGHLIGHTED__";
    readonly ClearHover: "$$__CLEAR_HOVER__";
    readonly Reset: "$$__RESET__";
    readonly SetState: "$$__SET_STATE__";
    readonly ItemMouseMove: "$$__ITEM_MOUSE_MOVE__";
    readonly ItemMouseLeave: "$$__ITEM_MOUSE_LEAVE__";
    readonly ItemClick: "$$__ITEM_CLICK__";
    readonly ToggleButtonClick: "$$__TOGGLE_BUTTON_CLICK__";
    readonly ToggleButtonBlur: "$$__TOGGLE_BUTTON_BLUR__";
    readonly ToggleButtonSpecialKeyDown: "$$__TOGGLE_BUTTON_SPECIAL_KEY_DOWN__";
    readonly MenuBlur: "$$__MENU_BLUR__";
    readonly MenuSpecialKeyDown: "$$__MENU_SPECIAL_KEY_DOWN__";
    readonly MenuCharacterKeyDown: "$$__MENU_CHARACTER_KEY_DOWN__";
    readonly InputBlur: "$$__INPUT_BLUR__";
    readonly InputSpecialKeyDown: "$$__INPUT_SPECIAL_KEY_DOWN__";
    readonly ClearJumpText: "$$__CLEAR_JUMP_TEXT__";
    readonly InputValueChange: "$$__INPUT_VALUE_CHANGE__";
    readonly ClearInputValue: "$$__CLEAR_INPUT_VALUE__";
    readonly OuterMouseUp: "$$__OUTER_MOUSE_UP__";
    readonly OuterTouchEnd: "$$__OUTER_TOUCH_END__";
};
type MultishiftActionTypes = typeof MultishiftActionTypes;
type MultishiftTypesInterface = {
    [P in Value<MultishiftActionTypes>]: any;
};
declare global {
    namespace Multishift {
        /**
         * This is an interface of all the actionTypes available. Use declaration merging to
         * extend it with your own custom actionTypes.
         */
        interface ActionTypes extends MultishiftTypesInterface {
        }
    }
}
export {};
