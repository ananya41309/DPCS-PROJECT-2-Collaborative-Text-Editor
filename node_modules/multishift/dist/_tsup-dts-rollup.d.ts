import type { AnyFunction } from '@remirror/core-types';
import _composeRefs from '@seznam/compose-react-refs';
import type { DependencyList } from 'react';
import type { DetailedHTMLProps } from 'react';
import type { Dispatch } from 'react';
import type { EffectCallback } from 'react';
import type { HTMLAttributes } from 'react';
import type { HTMLProps } from 'react';
import type { KeyboardEvent as KeyboardEvent_2 } from 'react';
import type { MouseEvent as MouseEvent_2 } from 'react';
import type { MutableRefObject } from 'react';
import type { Nullable } from '@remirror/core-types';
import type { Ref } from 'react';
import type { SyntheticEvent } from 'react';
import type { Value } from '@remirror/core-types';

declare interface A11yStatusMessageProps<Item = any> {
    state: MultishiftState<Item>;
    items: Item[];
    itemsToString: (items: Item[], itemToString?: (item: Item) => string) => string;
}
export { A11yStatusMessageProps }
export { A11yStatusMessageProps as A11yStatusMessageProps_alias_1 }

/**
 * Type representing Generic Action
 */
declare interface Action<Type extends string = string> {
    type: Type;
}
export { Action }
export { Action as Action_alias_1 }

/**
 * An *action creator* is, quite simply, a function that creates an action. Do
 * not confuse the two terms—again, an action is a payload of information, and
 * an action creator is a factory that creates an action.
 *
 * Calling an action creator only produces an action, but does not dispatch it.
 * You need to call the store's `dispatch` function to actually cause the
 * mutation. Sometimes we say *bound action creators* to mean functions that
 * call an action creator and immediately dispatch its result to a specific
 * store instance.
 *
 * If an action creator needs to read the current state, perform an API call, or
 * cause a side effect, like a routing transition, it should return an async
 * action instead of an action.
 *
 * @typeParam A Returned action type.
 */
declare type ActionCreator<A> = (...args: any[]) => A;
export { ActionCreator }
export { ActionCreator as ActionCreator_alias_1 }

declare type ActionCreatorMapToDispatch<CreatorMap extends ActionCreatorsMapObject> = {
    [P in keyof CreatorMap]: (...args: Parameters<CreatorMap[P]>) => void;
};
export { ActionCreatorMapToDispatch }
export { ActionCreatorMapToDispatch as ActionCreatorMapToDispatch_alias_1 }

/**
 * Object whose values are action creator functions.
 */
declare interface ActionCreatorsMapObject<A = any> {
    [key: string]: ActionCreator<A>;
}
export { ActionCreatorsMapObject }
export { ActionCreatorsMapObject as ActionCreatorsMapObject_alias_1 }

/**
 * The action creators which can be dispatched via the reducer.
 */
declare const Actions: {
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
export { Actions }
export { Actions as Actions_alias_1 }

/**
 * Infers Action union-type from action-creator map object
 */
declare type ActionType<ActionCreatorMap> = ActionCreatorMap extends ActionCreator<any> ? ReturnType<ActionCreatorMap> : ActionCreatorMap extends Record<any, any> ? {
    [K in keyof ActionCreatorMap]: ActionType<ActionCreatorMap[K]>;
}[keyof ActionCreatorMap] : never;

/**
 * Type representing an Action with Payload
 */
declare interface ActionWithPayload<Type extends string = string, Payload = any> {
    type: Type;
    payload: Payload;
}
export { ActionWithPayload }
export { ActionWithPayload as ActionWithPayload_alias_1 }

/**
 * Adds the list of `newItems` to the list of `prevItems`. If `multiple` is
 * false (or undefined) then simply replace the array with the first item from
 * the `newItems` list.
 */
export declare function addItems<Item = any>(currentItems: Item[], newItems: Item[], getItemId: GetItemId<Item>, multiple?: boolean): Item[];

/**
 * Returns true when all items are selected within the list.
 */
export declare function allItemsSelected<Item = any>(currentItems: Item[], newItems: Item[], getItemId: GetItemId<Item>): boolean;

declare type AllMultishiftActions<Item = any> = Multishift.Actions<Item> & Multishift.CoreActions<Item>;
export { AllMultishiftActions }
export { AllMultishiftActions as AllMultishiftActions_alias_1 }

declare type AllMultishiftDispatchActions<Item = any> = {
    [P in keyof AllMultishiftActions<Item>]: (...args: Parameters<AllMultishiftActions<Item>[P]>) => void;
};
export { AllMultishiftDispatchActions }
export { AllMultishiftDispatchActions as AllMultishiftDispatchActions_alias_1 }

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they may
 * be invoked directly.
 */
export declare function bindActionCreators<Action, CreatorMap extends ActionCreatorsMapObject<Action>, ActionDispatch extends Dispatch<any>>(actionCreators: CreatorMap, dispatch: ActionDispatch): ActionCreatorMapToDispatch<CreatorMap>;

/**
 * This is intended to be used to compose event handlers. They are executed in
 * order until one of them returns a truthy value.
 */
export declare function callAllEventHandlers<Type extends Event = any, Node extends Element = any, Synth extends SyntheticEvent<Element, Type> = SyntheticEvent<Node, Type>, Method extends (event: Synth, ...args: any[]) => void | undefined | false | true = AnyFunction>(...fns: Array<Method | undefined | null | false>): (event: Synth, ...args: any[]) => void;

/**
 * Call all relevant change handlers.
 */
export declare function callChangeHandlers<Item = any>(handlers: MultishiftChangeHandlerProps<Item>, changeset: MultishiftStateChangeset<Item>): void;

/**
 * Checks whether the an index is highlighted within a set of indexes and a
 * highlighted group.
 */
export declare function checkItemHighlighted(index: number, options: Omit<GetHighlightedIndexesProps, 'items'>): boolean;

/**
 * Removes all the highlighted items including the hover.
 */
declare function clearHighlighted(): {
    type: "$$__CLEAR_HIGHLIGHTED__";
};

declare function clearInputValue(): {
    type: "$$__CLEAR_INPUT_VALUE__";
};

/**
 * Clears the jump text value.
 */
declare function clearJumpText(): {
    type: "$$__CLEAR_JUMP_TEXT__";
};

/**
 * Remove the provided item from the current selection.
 */
declare function clearSelection(): {
    type: "$$__CLEAR_SELECTION__";
};

/**
 * Set isOpen to false (closing the menu).
 */
declare function closeMenu(): {
    type: "$$__CLOSE_MENU__";
};

declare type ComposeRefs = typeof _composeRefs;

export declare const composeRefs: ComposeRefs;

declare interface CreateChangesFromKeyDownProps<Item = any> {
    state: MultishiftState<Item>;
    modifiers: Modifier[];
    defaultState: MultishiftState<Item>;
    key: SpecialKey;
    props: MultishiftProps<Item>;
    items: Item[];
    getItemId: GetItemId<Item>;
    disabled: number[];
}

/**
 * Create a payload for the item click event.
 */
export declare function createItemClickPayload(event: React.MouseEvent, index: number): ItemClickPayload;

/**
 * Create a payload for the keydown event.
 */
export declare function createKeyDownPayload(event: KeyboardEvent_2, key: SpecialKey, disabled: number[]): SpecialKeyDownPayload;

declare type CreateMultishiftAction<Type extends string, Payload = any, Args extends any[] = [Payload]> = (...args: Args) => ActionWithPayload<Type, Payload>;
export { CreateMultishiftAction }
export { CreateMultishiftAction as CreateMultishiftAction_alias_1 }

/**
 * Helpers for transforming the state object.
 */
export declare function createStateHelpers<Item = any>({ getItemId, multiple }: MultishiftProps<Item>, state: MultishiftState<Item>): MultishiftStateHelpers<Item>;

export declare const DEFAULT_STATE: MultishiftState;

/**
 * The default unique identifier getter function.
 */
export declare function defaultGetItemId<Item = any>(item: Item): Item;

/**
 * The default itemsToString function.
 *
 * Creates a comma separated string of the item string values.
 *
 * @param items - the list of all selected items
 * @param itemToString - retrieve the string from an individual
 */
export declare function defaultItemsToString<Item = any>(selectedItems: Item[], itemToString?: ItemToString): string;

/**
 * The default itemToString implementation.
 */
export declare function defaultItemToString<Item = any>(item: Item | undefined): string;

declare type Direction = 'horizontal' | 'vertical';
export { Direction }
export { Direction as Direction_alias_1 }

declare type DropdownType = Value<typeof Type>;
export { DropdownType }
export { DropdownType as DropdownType_alias_1 }

declare type GetA11yStatusMessage<Item = any> = (options: A11yStatusMessageProps<Item>) => string;
export { GetA11yStatusMessage }
export { GetA11yStatusMessage as GetA11yStatusMessage_alias_1 }

export declare const getChangesFromInputKeyDown: <Item = any>(params: CreateChangesFromKeyDownProps<Item>) => Partial<MultishiftState<Item>>;

/**
 * Create the desired change object when an item is clicked.
 */
export declare function getChangesFromItemClick<Item = any>({ modifiers, items, defaultState, state, index, props, getItemId, }: GetChangesFromItemClickProps<Item>): MultishiftStateProps<Item>;

declare interface GetChangesFromItemClickProps<Item = any> {
    modifiers: Modifier[];
    index: number;
    items: Item[];
    props: MultishiftBehaviorProps;
    defaultState: MultishiftState<Item>;
    state: MultishiftState<Item>;
    getItemId: GetItemId<Item>;
}

/**
 * Get the changes that have happened when a menu key is pressed.
 */
export declare function getChangesFromMenuKeyDown<Item = any>({ modifiers, defaultState, state, key, items, getItemId, props, disabled, }: CreateChangesFromKeyDownProps<Item>): MultishiftStateProps<Item>;

export declare function getChangesFromToggleButtonKeyDown<Item = any>({ key, defaultState, props, getItemId, state, }: CreateChangesFromKeyDownProps<Item>): MultishiftStateProps<Item>;

declare interface GetComboBoxPropsOptions<Element extends HTMLElement = any, RefKey extends string = 'ref'> extends RefProps<RefKey>, HTMLProps<Element> {
}
export { GetComboBoxPropsOptions }
export { GetComboBoxPropsOptions as GetComboBoxPropsOptions_alias_1 }

declare type GetComboBoxPropsReturn<Element extends HTMLElement = any, RefKey extends string = 'ref'> = DetailedHTMLProps<HTMLAttributes<Element>, Element> & {
    [P in RefKey]: Ref<any>;
} & {
    /**
     * @defaultValue 'combobox'
     */
    role: string;
    'aria-expanded': boolean;
    'aria-haspopup': boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    'aria-owns': string | undefined;
    'aria-labelledby': string;
};
export { GetComboBoxPropsReturn }
export { GetComboBoxPropsReturn as GetComboBoxPropsReturn_alias_1 }

/**
 * Get all the default state values.
 */
export declare function getDefaultState<Item = any>(defaults: GetDefaultStateProps<Item>): MultishiftState<Item>;

export declare interface GetDefaultStateProps<Item = any> extends MultishiftDefaultValueProps<Item>, MultishiftBehaviorProps {
}

export declare interface GetElementIds {
    labelId: string;
    inputId: string;
    menuId: string;
    getItemA11yId: (index?: number | undefined) => string;
    toggleButtonId: string;
}

/**
 * Get the ids for each element.
 */
export declare function getElementIds(defaultId: string | number, props?: MultishiftA11yIdProps): GetElementIds;

/**
 * Get an array of all the highlighted items Including any from the currently
 * incomplete group.
 */
export declare function getHighlightedIndexes<Item = any>({ start, end, indexes, items, hoveredIndex, }: GetHighlightedIndexesProps<Item>): number[];

declare interface GetHighlightedIndexesProps<Item = any> {
    /**
     * The current highlighted indexes
     */
    indexes: number[];
    /**
     * The start of the new highlight grouping.
     */
    start: number;
    /**
     * The end of the new highlight grouping.
     */
    end?: number;
    /**
     * The items being rendered right now.
     */
    items: Item[];
    /**
     * If included will also include the hovered index.
     */
    hoveredIndex?: number;
}

/**
 * Determines which highlighted indexes should be available on first open.
 */
export declare function getHighlightedIndexOnOpen<Item = any>(props: Pick<MultishiftProps<Item>, 'items' | 'initialHighlightedIndexes' | 'defaultHighlightedIndexes'>, state: MultishiftState<Item>, offset: number, getItemId: GetItemId<Item>): number[];

declare interface GetHighlightReset {
    highlightedGroupEndIndex: number | undefined;
    highlightedGroupStartIndex: number;
    highlightedIndexes: number[];
    hoveredIndex: number;
}

/**
 * The state that corresponds to the default highlight state. Useful when the
 * highlighted values need to be reset.
 */
export declare function getHighlightReset<Item = any>(defaultState: MultishiftState<Item>): GetHighlightReset;

export declare interface GetInitialPropsProps<Item = any> extends MultishiftBehaviorProps, MultishiftStateProps<Item>, MultishiftDefaultValueProps<Item>, MultishiftInitialValueProps<Item> {
}

/**
 * Get the initial state or props when provided.
 */
export declare function getInitialStateProps<Item = any>(initialProps: GetInitialPropsProps): MultishiftState<Item>;

declare type GetItemId<Item = any> = (items: Item) => any;
export { GetItemId }
export { GetItemId as GetItemId_alias_1 }

/**
 * Get the item index from the items prop.
 */
export declare function getItemIndex<Item = any>(index: number, item: Item, items: Item[]): number;

declare interface GetItemIndexByJumpTextProps<Item = any> {
    text: string;
    highlightedIndexes: number[];
    items: Item[];
    itemToString?: ItemToString;
}

/**
 * Finds the nearest match when typing into a non input dropdown.
 */
export declare function getItemIndexesByJumpText<Item = any>({ text, highlightedIndexes, items, itemToString, }: GetItemIndexByJumpTextProps<Item>): [number] | [];

declare interface GetItemPropsOptions<Element extends HTMLElement = any, RefKey extends string = 'ref', Item = any> extends GetPropsWithRefOptions<Element, RefKey> {
    /**
     * This is the item data that will be selected when the user selects a
     * particular item.
     */
    item: Item;
    /**
     * This is how downshift keeps track of your item when updating the
     * highlightedIndex as the user keys around. By default, downshift will assume
     * the index is the order in which you're calling getItemProps. This is often
     * good enough, but if you find odd behavior, try setting this explicitly.
     * It's probably best to be explicit about index when using a windowing
     * library like react-virtualized.
     */
    index: number;
}
export { GetItemPropsOptions }
export { GetItemPropsOptions as GetItemPropsOptions_alias_1 }

/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 *
 * @param event - the keyboard event
 */
export declare function getKeyName(event: KeyboardEvent_2<HTMLElement>): string;

declare type GetLabelPropsWithRefReturn<Element extends HTMLElement = any, RefKey extends string = 'ref'> = {
    [P in Exclude<RefKey, 'key'>]: Ref<any>;
} & DetailedHTMLProps<HTMLAttributes<Element>, Element> & {
    htmlFor?: string;
};
export { GetLabelPropsWithRefReturn }
export { GetLabelPropsWithRefReturn as GetLabelPropsWithRefReturn_alias_1 }

declare type GetLastHighlightProps = Pick<MultishiftState, 'highlightedIndexes' | 'highlightedGroupEndIndex' | 'highlightedGroupStartIndex'>;

/**
 * Get an array of the event modifiers
 */
export declare function getModifiers(event: GetModifiersEvent): Array<(typeof modifierKeys)[number]>;

declare interface GetModifiersEvent {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}

/**
 * Get the most recently updated highlighted index.
 *
 * Returns -1 when no highlighted index is found.
 */
export declare function getMostRecentHighlightIndex(lastHighlight: GetLastHighlightProps): number;

export declare function getNextWrappingIndex({ start, steps, size, circular, }: GetNextWrappingIndexProps): number | undefined;

/**
 * Get the next index when navigating with arrow keys.
 */
export declare function getNextWrappingIndexes(params: GetNextWrappingIndexProps): [number] | [];

declare interface GetNextWrappingIndexProps {
    steps: number;
    start: number;
    size: number;
    circular: boolean;
}

declare interface GetPropsWithRefOptions<Element extends HTMLElement = any, RefKey extends string = 'ref'> extends RefProps<RefKey>, HTMLProps<Element> {
    /**
     * Determine whether or not the item can be highlighted and selected.
     */
    disabled?: boolean;
}
export { GetPropsWithRefOptions }
export { GetPropsWithRefOptions as GetPropsWithRefOptions_alias_1 }

declare type GetPropsWithRefReturn<Element extends HTMLElement = any, RefKey extends string = 'ref'> = {
    [P in Exclude<RefKey, 'key'>]: Ref<any>;
} & DetailedHTMLProps<HTMLAttributes<Element>, Element>;
export { GetPropsWithRefReturn }
export { GetPropsWithRefReturn as GetPropsWithRefReturn_alias_1 }

declare interface GetRemoveButtonOptions<Element extends HTMLElement = any, Item = any> extends HTMLProps<Element> {
    /**
     * You must provide the selectedItem property.
     */
    item: Item;
    /**
     * Prevents this from being selected.
     */
    disabled?: boolean;
}
export { GetRemoveButtonOptions }
export { GetRemoveButtonOptions as GetRemoveButtonOptions_alias_1 }

declare interface GetRemoveButtonReturn<Element extends HTMLElement = any> extends DetailedHTMLProps<HTMLAttributes<Element>, Element> {
    /**
     * The aria role for the button. This can be overridden in the options.
     *
     * @defaultValue 'button'
     */
    role: string;
}
export { GetRemoveButtonReturn }
export { GetRemoveButtonReturn as GetRemoveButtonReturn_alias_1 }

/**
 * Uses controlled props where available otherwise fallbacks back to internal
 * state.
 */
export declare function getState<Item = any>(state: MultishiftState<Item>, props: MultishiftStateProps<Item>): MultishiftState<Item>;

declare interface IgnoredElementOptions<Element extends HTMLElement = any, RefKey extends string = 'ref'> extends GetPropsWithRefOptions<Element, RefKey> {
}
export { IgnoredElementOptions }
export { IgnoredElementOptions as IgnoredElementOptions_alias_1 }

declare function inputBlur(): {
    type: "$$__INPUT_BLUR__";
};

declare function inputSpecialKeyDown(payload: SpecialKeyDownPayload): {
    type: "$$__INPUT_SPECIAL_KEY_DOWN__";
    payload: SpecialKeyDownPayload;
};

declare function inputValueChange(payload: string): {
    type: "$$__INPUT_VALUE_CHANGE__";
    payload: string;
};

/**
 * Checks that this is a browser environment.
 */
export declare function isBrowser(): boolean;

/**
 * Checks for an element node like `<p>` or `<div>`.
 *
 * @param domNode - the dom node
 */
export declare const isHTMLElement: (domNode: unknown) => domNode is HTMLElement;

/**
 * Check if the browser is running on a mac.
 */
export declare const isMac: () => boolean;

/**
 * Checks whether the passed value is a valid dom node
 *
 * @param domNode - the dom node
 */
export declare function isNode(domNode: unknown): domNode is Node;

/**
 * Checks whether the parent contains (or is the same as) the child node.
 */
export declare function isOrContainsNode(parent: Node, child: Node | null): child is Node;

/**
 * Check that the character is valid for jumpText.
 */
export declare function isValidCharacterKey(key: string): boolean;

/**
 * Check whether the provided value is a valid index.
 */
export declare function isValidIndex(index: number | undefined | null): index is number;

export declare function isValidIndexAndNotDisabled(index: number | undefined, disabled: number[]): index is number;

/**
 * Reports when a user has clicked on an item's element.
 */
declare function itemClick(payload: ItemClickPayload): {
    type: "$$__ITEM_CLICK__";
    payload: ItemClickPayload;
};

declare interface ItemClickPayload {
    index: number;
    modifiers: Modifier[];
    /**
     * This is provided so that the state reducer has access to the event. It
     * should not be stored.
     */
    event: MouseEvent_2<any>;
}
export { ItemClickPayload }
export { ItemClickPayload as ItemClickPayload_alias_1 }

declare function itemMouseLeave(payload: number): {
    type: "$$__ITEM_MOUSE_LEAVE__";
    payload: number;
};

/**
 * Dispatched when the mouse hovers over an item
 */
declare function itemMouseMove(payload: number): {
    type: "$$__ITEM_MOUSE_MOVE__";
    payload: number;
};

declare interface ItemsPayload<Item = any> {
    items: Item[];
    /**
     * By default whenever a selection is made the highlights are reset.
     * Set this to true to hold onto the highlights
     */
    keepHighlights?: boolean;
}
export { ItemsPayload }
export { ItemsPayload as ItemsPayload_alias_1 }

declare type ItemsToString<Item = any> = (items: Item[], itemToString?: (item: Item) => string) => string;
export { ItemsToString }
export { ItemsToString as ItemsToString_alias_1 }

declare type ItemToString<Item = any> = (item: Item) => string;
export { ItemToString }
export { ItemToString as ItemToString_alias_1 }

/**
 * Called when the menu is blurred.
 */
declare function menuBlur(): {
    type: "$$__MENU_BLUR__";
};

declare function menuCharacterKeyDown(payload: string): {
    type: "$$__MENU_CHARACTER_KEY_DOWN__";
    payload: string;
};

/**
 * Handle the menu key down event.
 */
declare function menuSpecialKeyDown(payload: SpecialKeyDownPayload): {
    type: "$$__MENU_SPECIAL_KEY_DOWN__";
    payload: SpecialKeyDownPayload;
};

/**
 * Modifiers that are used to determine the behaviour of the click or key down
 * action.
 */
declare type Modifier = 'shiftKey' | 'altKey' | 'metaKey' | 'ctrlKey';
export { Modifier }
export { Modifier as Modifier_alias_1 }

declare const modifierKeys: readonly ["altKey", "shiftKey", "metaKey", "ctrlKey"];

declare interface MultishiftA11yIdProps {
    id?: string;
    inputId?: string;
    labelId?: string;
    menuId?: string;
    toggleButtonId?: string;
    /**
     * Get the item id which will be used to identifying the item in the dom for
     * accessibility purposes.
     */
    getItemA11yId?: (index?: number) => string;
}
export { MultishiftA11yIdProps }
export { MultishiftA11yIdProps as MultishiftA11yIdProps_alias_1 }

declare const MultishiftActionTypes: {
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
export { MultishiftActionTypes }
export { MultishiftActionTypes as MultishiftActionTypes_alias_1 }

declare interface MultishiftBaseProps<Item = any> {
    /**
     * The list ot items which are visible in menu.
     *
     * This can be changed via filtering.
     */
    items: Item[];
    /**
     * A unique id for the item which is used to compare between two items.
     *
     * This defaults to just returning the item directly which means items are
     * identical when `item === item`.
     *
     * The primary use case is when items are objects and the equality check above
     * is always false even for objects with the same values. In that case you can
     * define the `getItemId` prop.
     *
     * ```ts
     * const items = [{value: 'A', id: 'a'}, {value: 'B', id: 'b'}];
     * const getItemId = (item: typeof items[0]) => item.id;
     * ```
     *
     * This is very useful when an item is selected. By default multishift will
     * run a uniqueness check and use the function provided above to prevent
     * duplication.
     */
    getItemId?: GetItemId<Item>;
    /**
     * This function will be called each time multishift sets its internal state
     * (or calls the onStateChange handler for controlled props). It allows you to
     * modify the state change that will take place which can give you fine
     * grained control over how the component interacts with user updates without
     * having to use controlled Props. It gives you the current state and the
     * state that will be set, and you return the state that you want to set.
     *
     * @param changeSet - An object with the `prevState` before any changes, the
     * `changes`. created by the built in reducer and the current `state` it
     * produced.
     * @param action - The action that was dispatched.
     * @param props - The latest props passed into the hook.
     *
     */
    stateReducer?: (changesAndState: MultishiftStateChangeset<Item>, action: MultishiftRootActions<Item>, props: MultishiftProps<Item>) => MultishiftState<Item>;
    /**
     * Takes a list of items and transforms them into a string.
     *
     * This defaults to a comma separated list of the values.
     */
    itemsToString?: ItemsToString<Item>;
    itemToString?: ItemToString<Item>;
    /**
     * This function is passed as props to a status component nested within and
     * allows you to create your own assertive ARIA statuses.
     *
     * A default getA11yStatusMessage function is provided that will check
     * `items.current.length` and return "No results." or if there are results but
     * no item is highlighted, "resultCount results are available, use up and down
     * arrow keys to navigate." If items are highlighted it will run
     * `itemToString(highlightedItem)` and display the value of the
     * `highlightedItem`.
     */
    getA11yStatusMessage?: GetA11yStatusMessage;
}
export { MultishiftBaseProps }
export { MultishiftBaseProps as MultishiftBaseProps_alias_1 }

declare interface MultishiftBehaviorProps {
    /**
     * The dropdown type affects how the dropdown should be set up.
     *
     * ### `select`
     *
     * Use this to implement a selection drop down. With a toggle button and
     * items. There is no autocomplete functionality and items typically don't
     * change.
     *
     * ```tsx
     * const items ['a', 'b', 'c'];
     * const { getToggleButtonProps, getMenuProps, getItemProps, getLabelProps } = useMultishift({ type: 'select', items });
     *
     * return (
     *   <div>
     *     <label {...getLabelProps()}>Choose an element:</label>
     *     <button {...getToggleButtonProps()}>{selectedItems[0] || 'Names'}</button>
     *     <button onClick={() => clearSelection()}>Clear</button>
     *     <ul {...getMenuProps()}>
     *     {isOpen &&
     *       items.map((option, index) => (
     *         <li
     *           style={{
     *             userSelect:'none',
     *             fontWeight: selectedItems.includes(option) ? 'bold' : 'normal',
     *             ...(itemHighlightedAtIndex(index) || hoveredIndex === index
     *               ? { backgroundColor: '#bde4ff' }
     *               : {}),
     *           }}
     *           key={`${option}${index}`}
     *           {...getItemProps({ item: option, index })}
     *         >
     *           {option}
     *         </li>
     *       ))}
     *     </ul>
     *   </div>
     * )
     * ```
     *
     * ### `combobox`
     *
     * The combination of a select dropdown paired with an input for filtering the
     * results.
     *
     * The combobox usually will include both a toggle button and input box.
     *
     * ```tsx
     * const items ['a', 'b', 'c'];
     * const {
     *   getToggleButtonProps,
     *   getMenuProps,
     *   getItemProps,
     *   getLabelProps,
     *   getComboBoxProps,
     *   getInputProps
     * } = useMultishift({ type: 'autocomplete', items });
     *
     * return (
     *   <div {...getComboBoxProps()}>
     *     <label {...getLabelProps()}>Choose an element:</label>
     *     <button {...getToggleButtonProps()}>{selectedItems[0] || 'Names'}</button>
     *     <input {...getInputProps()}
     *     <button onClick={() => clearSelection()}>Clear</button>
     *     <ul {...getMenuProps()}>
     *     {isOpen &&
     *       items.map((item, index) => (
     *         <li
     *           key={`${item}${index}`}
     *           {...getItemProps({ item: item, index })}
     *         >
     *           {item}
     *         </li>
     *       ))}
     *     </ul>
     *   </div>
     * )
     * ```
     */
    type: DropdownType;
    /**
     * Set to true to allow multiple items to be selected in the list. When not
     * specified (or set to false) only one item can be selected (and only one at
     * a time.
     */
    multiple?: boolean;
    /**
     * The direction which drop down should be rendered.
     *
     * - When `vertical` the `ArrowUp` and `ArrowDown` keyDown handlers are used.
     * - When `horizontal` the `ArrowLeft` and `ArrowRight` handlers are used.
     *
     * @defaultValue 'vertical'
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * Whether the input should be closed when a selection is made. This default
     * to false when `multiple=true`.
     */
    closeOnSelection?: boolean;
    /**
     * When true will automatically selected the higlightedIndexes on blur.
     *
     * @defaultValue true
     */
    autoSelectOnBlur?: boolean;
    /**
     * By default typing into non text input combo-box will jump to the closest
     * index.
     *
     * Setting this to false will ignore this behaviour
     */
    ignoreJumpText?: boolean;
    /**
     * Controls the circular keyboard navigation between items. If set to true,
     * when first item is highlighted, the `ArrowUp` will move highlight to the
     * last item, and vice versa using `ArrowDown`.
     */
    circularNavigation?: boolean;
    /**
     * Set a custom message to render for the duration provided by the timeout.
     *
     * @defaultValue ''
     */
    customA11yStatusMessage?: string;
    /**
     * When true will include the hovered index in the next selection (whether on
     * blur) or active selection.
     *
     * @defaultValue false
     */
    includeHoveredIndexInSelection?: boolean;
}
export { MultishiftBehaviorProps }
export { MultishiftBehaviorProps as MultishiftBehaviorProps_alias_1 }

declare interface MultishiftChangeHandlerProps<Item = any> {
    /**
     * This function is called anytime the internal state changes. This can be
     * useful if you're using multishift as a "controlled" component, where you
     * manage some or all of the state (e.g. isOpen, selectedItems,
     * highlightedIndexes, etc) and then pass it as props, rather than letting
     * multishift control all its state itself.
     *
     * The parameters both take the shape of internal state ({highlightedIndex:
     * number, inputValue: string, isOpen: boolean, selectedItem: any}) but differ
     * slightly.
     *
     * @param changes - These are the properties that actually have changed since
     * the last state change. This also has a type property which you can learn
     * more about in the stateChangeTypes section.
     * @param state - This is the full state object.
     *
     * Tip: This function will be called any time any state is changed.
     *
     * NOTE: This is only called when state actually changes. You should not
     * attempt to use this to handle events. If you wish to handle events, put
     * your event handlers directly on the elements (make sure to use the prop
     * getters though!
     *
     * For example: `<input onBlur={handleBlur} />` should be `<input
     * {...getInputProps({onBlur: handleBlur})} />`).
     */
    onStateChange?: (changes: MultishiftStateProps<Item>, state: MultishiftState<Item>) => void;
    /**
     * Called when the selected items change, either by the user selecting an item
     * or the user clearing the selection. Called with the items that were
     * selected or an empty array when removed
     *
     * @param selectedItems - The currently selected items if an empty array then
     * the selection was cleared.
     * @param state - the list of all currently selected items.
     */
    onSelectedItemsChange?: (selectedItems: Item[], state: MultishiftState<Item>) => void;
    onOuterClick?: (state: MultishiftState<Item>) => void;
    onJumpTextChange?: (jumpText: string, state: MultishiftState<Item>) => void;
    onIsOpenChange?: (isOpen: boolean, state: MultishiftState<Item>) => void;
    onInputValueChange?: (inputValue: string, state: MultishiftState<Item>) => void;
    onHoveredIndexChange?: (hoveredIndex: number, state: MultishiftState<Item>) => void;
    onHighlightedIndexesChange?: (highlightedIndexes: number[], state: MultishiftState<Item>) => void;
    onHighlightedGroupStartIndexChange?: (highlightedGroupStartIndex: number, state: MultishiftState<Item>) => void;
    onHighlightedGroupEndIndexChange?: (highlightedGroupEndIndex: number | undefined, state: MultishiftState<Item>) => void;
}
export { MultishiftChangeHandlerProps }
export { MultishiftChangeHandlerProps as MultishiftChangeHandlerProps_alias_1 }

declare interface MultishiftDefaultValueProps<Item = any> {
    defaultSelectedItems?: Item[];
    defaultJumpText?: string;
    defaultIsOpen?: boolean;
    defaultInputValue?: string;
    defaultHoveredIndex?: number;
    defaultHighlightedIndexes?: number[];
    defaultHighlightedGroupStartIndex?: number;
    defaultHighlightedGroupEndIndex?: number;
}
export { MultishiftDefaultValueProps }
export { MultishiftDefaultValueProps as MultishiftDefaultValueProps_alias_1 }

declare type MultishiftDispatchActions<Item = any> = {
    [P in keyof Multishift.CoreActions<Item>]: (...args: Parameters<Multishift.CoreActions<Item>[P]>) => void;
};
export { MultishiftDispatchActions }
export { MultishiftDispatchActions as MultishiftDispatchActions_alias_1 }

declare interface MultishiftFocusHelpers {
    /**
     * Focus on the menu.
     */
    focusMenu: () => void;
    /**
     * Focus on a menu item by the provided index.
     */
    focusMenuItem: (index: number) => void;
    /**
     * Focus on the input element when defined.
     */
    focusInput: () => void;
    /**
     * Focus on the toggle button.
     */
    focusToggleButton: () => void;
}
export { MultishiftFocusHelpers }
export { MultishiftFocusHelpers as MultishiftFocusHelpers_alias_1 }

declare interface MultishiftHelpers<Item = any> {
    /**
     * Check if the item at the given index is highlighted.
     *
     * @remarks
     *
     * The highlight includes the current highlight (caused by hovers and the
     * arrow keys> as well as multi selection highlighting when the shift key is
     * pressed.
     */
    itemHighlightedAtIndex: (index: number) => boolean;
    /**
     * Return true when the provided item index is hovered.
     */
    indexIsHovered: (index: number) => boolean;
    /**
     * Return true when the provided item is hovered.
     */
    itemIsHovered: (item: Item) => boolean;
    /**
     * Return true when the provided item index is selected.
     */
    indexIsSelected: (index: number) => boolean;
    /**
     * Return true when the provided item is selected.
     */
    itemIsSelected: (item: Item) => boolean;
    /**
     * Return the index of the provided item within the list of items.
     *
     * @remarks
     *
     * `-1` when not found
     */
    indexOfItem: (item: Item) => number;
    /**
     * The most recently highlighted index which can be used when making a
     * multiple selection.
     *
     * When none is found it will return `-1`
     */
    mostRecentHighlightedIndex: number;
}
export { MultishiftHelpers }
export { MultishiftHelpers as MultishiftHelpers_alias_1 }

declare interface MultishiftInitialValueProps<Item = any> {
    initialSelectedItems?: Item[];
    initialJumpText?: string;
    initialIsOpen?: boolean;
    initialInputValue?: string;
    initialHoveredIndex?: number;
    initialHighlightedIndexes?: number[];
    initialHighlightedGroupStartIndex?: number;
    initialHighlightedGroupEndIndex?: number;
}
export { MultishiftInitialValueProps }
export { MultishiftInitialValueProps as MultishiftInitialValueProps_alias_1 }

declare interface MultishiftItemsChangeset<Item = any> {
    previous: Item[];
    current: Item[];
}
export { MultishiftItemsChangeset }
export { MultishiftItemsChangeset as MultishiftItemsChangeset_alias_1 }

/**
 * These functions are used to apply props to the elements that you render. This
 * gives you maximum flexibility to render what, when, and wherever you like.
 *
 * @remarks
 *
 * You call these on the element in question For example:
 *
 * ```tsx
 * <input {...getInputProps()} />
 * ```
 *
 * It's advisable to pass all your props to that function rather than applying
 * them on the element yourself to avoid your props being overridden (or
 * overriding the props returned). For example:
 *
 * ```tsx
 * // Good
 * <input getInputProps({
 *   onKeyUp(event) {
 *    log(event);
 *   }
 * }) />
 *
 * // Bad
 * <input getInputProps() onKeyUp={event => {
 *   log(event);
 * } />
 * ```
 */
declare interface MultishiftPropGetters<Item = any> {
    /**
     * Get the augmented props that will be used in the wrapper element on
     * autocomplete dropdowns.
     *
     * @remarks
     *
     * Return the props to be applied to the root element that is rendered. This
     * should always be used for `autocomplete` dropdowns but will throw an error
     * if used within a `select` dropdown.
     */
    getComboBoxProps: <Element extends HTMLElement = any, RefKey extends string = 'ref'>(options?: GetComboBoxPropsOptions<Element, RefKey>) => GetComboBoxPropsReturn<Element, RefKey>;
    /**
     * Get the augmented props for the toggle button which typically opens and
     * closes the menu.
     *
     * @remarks
     *
     * Returns the props you should apply to any menu toggle button element you
     * render.
     */
    getToggleButtonProps: <Element extends HTMLElement = any, RefKey extends string = 'ref'>(options?: GetPropsWithRefOptions<Element, RefKey>) => GetPropsWithRefReturn<Element, RefKey>;
    /**
     * Get the augmented props for your menu dropdown container element.
     *
     * @remarks
     *
     * This method should be applied to the element which contains your list of
     * items. Typically, this will be a `<div>` or a `<ul>` that surrounds a map
     * expression. This handles the proper ARIA roles and attributes.
     *
     * refKey: if you're rendering a composite component, that component will need
     * to accept a prop which it forwards to the root DOM element. Commonly, folks
     * call this innerRef. So you'd call: getMenuProps({refKey: 'innerRef'}) and
     * your composite component would forward like: `<ul ref={props.innerRef} />`.
     * However, if you are just rendering a primitive component like `<div>`, there
     * is no need to specify this property. Please keep in mind that menus, for
     * accessiblity purposes, should always be rendered, regardless of whether you
     * hide it or not. Otherwise, getMenuProps may throw error if you unmount and
     * remount the menu.
     *
     * aria-label: By default the menu will add an aria-labelledby that refers to
     * the `<label>` rendered with getLabelProps. However, if you provide aria-label
     * to give a more specific label that describes the options available, then
     * aria-labelledby will not be provided and screen readers can use your
     * aria-label instead. In some cases, you might want to completely bypass the
     * refKey check. Then you can provide the object {suppressRefError : true} as
     * the second argument to getMenuProps. Please use it with extreme care and
     * only if you are absolutely sure that the ref is correctly forwarded
     * otherwise Downshift will unexpectedly fail.
     *
     * ```tsx
     * const {getMenuProps} = useMultishift({items})
     * const ui = (
     *   <ul {...getMenuProps()}>
     *     {!isOpen
     *       ? null
     *       : items.map((item, index) => (
     *           <li {...getItemProps({item, index, key: item.id})}>{item.name}</li>
     *         ))}
     *   </ul>
     * )
     * ```
     *
     * > Note that for accessibility reasons it's best if you always render this
     * > element whether or not downshift is in an isOpen state.
     */
    getMenuProps: <Element extends HTMLElement = any, RefKey extends string = 'ref'>(options?: GetPropsWithRefOptions<Element, RefKey>) => GetPropsWithRefReturn<Element, RefKey>;
    /**
     * Get the augmented props for each item being rendered.
     *
     * @remarks
     *
     * The props returned from calling this function should be applied to any menu
     * items you render.
     *
     * This is an impure function, so it should only be called when you will
     * actually be applying the props to an item.
     */
    getItemProps: <Element extends HTMLElement = any, RefKey extends string = 'ref'>(options: GetItemPropsOptions<Element, RefKey, Item>) => GetPropsWithRefReturn<Element, RefKey>;
    /**
     * Get the augmented props for the autocomplete input element.
     *
     * @remarks
     *
     * This method should be applied to the input you render. It is recommended
     * that you pass all props as an object to this method which will compose
     * together any of the event handlers you need to apply to the input while
     * preserving the ones that downshift needs to apply to make the input behave.
     *
     * There are no required properties for this method.
     *
     * Optional properties:
     *
     * disabled: If this is set to true, then no event handlers will be returned
     * from getInputProps and a disabled prop will be returned (effectively
     * disabling the input).
     *
     */
    getInputProps: <Element extends HTMLInputElement = any, RefKey extends string = 'ref'>(options?: GetPropsWithRefOptions<Element, RefKey>) => GetPropsWithRefReturn<Element, RefKey>;
    /**
     * Gets the props to attach to a button that removes a selected item.
     */
    getRemoveButtonProps: <Element extends HTMLElement = any>(options: GetRemoveButtonOptions<Element, Item>) => GetRemoveButtonReturn<Element>;
    /**
     * This method should be applied to the label you render. It will generate an
     * id that will be used to label the toggle button and the menu.
     *
     * @remarks
     *
     * There are no required properties for this method.
     *
     * > Note: For accessibility purposes, calling this method is highly
     * recommended.
     */
    getLabelProps: <Element extends HTMLElement = any, RefKey extends string = 'ref'>(options?: IgnoredElementOptions<Element, RefKey>) => GetLabelPropsWithRefReturn<Element, RefKey>;
    /**
     * Adds a ref to an element which will prevent blurring from happening when
     * the element is in focus.
     *
     * @remarks
     *
     * - Allows for autofocusing the input / toggle button or items when [a
     *   specific one] when focused.
     */
    getIgnoredElementProps: <Element extends HTMLElement = any, RefKey extends string = 'ref'>(options?: IgnoredElementOptions<Element, RefKey>) => GetPropsWithRefReturn<Element, RefKey>;
}
export { MultishiftPropGetters }
export { MultishiftPropGetters as MultishiftPropGetters_alias_1 }

declare interface MultishiftProps<Item = any> extends MultishiftA11yIdProps, MultishiftBehaviorProps, MultishiftBaseProps<Item>, MultishiftStateProps<Item>, MultishiftDefaultValueProps<Item>, MultishiftInitialValueProps<Item>, MultishiftChangeHandlerProps<Item> {
}
export { MultishiftProps }
export { MultishiftProps as MultishiftProps_alias_1 }

export declare const multishiftReducer: <Item = any>(state: MultishiftState<Item>, action: MultishiftRootActions<Item>, props: MultishiftProps<Item>) => [MultishiftState<Item>, Partial<MultishiftState<Item>>];

declare interface MultishiftReturn<Item = any> extends MultishiftState<Item>, MultishiftPropGetters<Item>, MultishiftDispatchActions<Item>, MultishiftStateHelpers<Item>, MultishiftHelpers, MultishiftFocusHelpers {
    /**
     * Manually dispatch an action into the state reducer.
     */
    dispatch: Dispatch<MultishiftRootActions<Item>>;
}
export { MultishiftReturn }
export { MultishiftReturn as MultishiftReturn_alias_1 }

declare type MultishiftRootActions<Item = any> = ActionType<AllMultishiftActions<Item>>;
export { MultishiftRootActions }
export { MultishiftRootActions as MultishiftRootActions_alias_1 }

declare interface MultishiftState<Item = any> {
    /**
     * Contains all the selected items.
     *
     * When `multiple` selection is enabled this can contain more than one item.
     *
     * @defaultValue []
     */
    selectedItems: Item[];
    /**
     * This tracks the text typed when no input is available for filtering.
     *
     * It allows the implementation of quick jump to item functionality.
     *
     * @defaultValue ''
     */
    jumpText: string;
    /**
     * Determines whether or not the menu items should be displayed.
     *
     * @defaultValue false
     */
    isOpen: boolean;
    /**
     * This tracks the input value when filtering the items to insert.
     *
     * @defaultValue ''
     */
    inputValue: string;
    /**
     * Each index represents a position that is highlighted. This is to allow the
     * selection of multiple items in one sweep.
     *
     * Examples are
     * - Ctrl / Cmd click - toggle one position / or start a new highlight group
     * - Shift click - add start or complete a new highlighted group
     * - Click and drag - drag over multiple items to select each one
     * - ArrowKey shift - Select multiple highlighted items
     *
     * @defaultValue []
     */
    highlightedIndexes: number[];
    /**
     * Marks the position as the starting point for a new highlighted group.
     *
     * @defaultValue -1
     */
    highlightedGroupStartIndex: number;
    /**
     * Marks the position as the end point for a new highlighted group.
     *
     * @defaultValue undefined
     */
    highlightedGroupEndIndex: number | undefined;
    /**
     * Marks the index of the currently hovered item.
     *
     * @defaultValue -1
     */
    hoveredIndex: number;
}
export { MultishiftState }
export { MultishiftState as MultishiftState_alias_1 }

declare interface MultishiftStateChangeset<Item = any> {
    /**
     * The changes accumulated so far.
     */
    changes: MultishiftStateProps<Item>;
    /**
     * The current state object
     */
    state: MultishiftState<Item>;
    /**
     * The previous state object.
     */
    prevState: MultishiftState<Item>;
}
export { MultishiftStateChangeset }
export { MultishiftStateChangeset as MultishiftStateChangeset_alias_1 }

/**
 * This provides utility methods which make updating the state for
 * _uncontrolled_ components a bit simpler.
 *
 * @typeParam Item = the underlying item type.
 */
declare interface MultishiftStateHelpers<Item = any> {
    /**
     * Add multiple items to the `selectedItems`.
     *
     * @param items - the items array to be added to the selection. When multiple
     * is not true only the first item will be used and replace any current
     * `selectedItems`.
     */
    addItems: (items: Item[]) => any[];
    /**
     * Add one item to the `selectedItems`.
     *
     * @param item - the item to be added to the selection. When multiple is not
     * true this will replace the current selected item.
     */
    addItem: (item: Item) => any[];
    /**
     * Remove items from the `selectedItems`.
     *
     * @param items - the items to be removed.
     */
    removeItems: (items: Item[]) => Item[];
    /**
     * Remove one item from the `selectedItems`
     *
     * @param item - the item to remove
     */
    removeItem: (item: Item) => Item[];
    /**
     * Toggle item selection
     */
    toggleItems: (items: Item[]) => Item[];
    toggleItem: (item: Item) => Item[];
}
export { MultishiftStateHelpers }
export { MultishiftStateHelpers as MultishiftStateHelpers_alias_1 }

declare type MultishiftStateProps<Item = any> = Partial<MultishiftState<Item>>;
export { MultishiftStateProps }
export { MultishiftStateProps as MultishiftStateProps_alias_1 }

declare interface OmitUnchangedProps<Item = any> {
    state: MultishiftState<Item>;
    getItemId: GetItemId<Item>;
}

/**
 * Removes any unchanged values from the changes object so that only the correct
 * callbacks are triggered.
 */
export declare function omitUnchangedState<Item = any>(changes: MultishiftStateProps<Item>, { state, getItemId }: OmitUnchangedProps<Item>): MultishiftStateProps<Item>;

/**
 * Set `isOpen` to true (opening the menu).
 */
declare function openMenu(): {
    type: "$$__OPEN_MENU__";
};

declare function outerMouseUp(): {
    type: "$$__OUTER_MOUSE_UP__";
};

declare function outerTouchEnd(): {
    type: "$$__OUTER_TOUCH_END__";
};

declare interface RefProps<RefKey extends string = 'ref'> {
    /**
     * A custom ref key which allows a reference to be obtained from non standard
     * components.
     *
     * @defaultValue 'ref'
     */
    refKey?: RefKey;
}
export { RefProps }
export { RefProps as RefProps_alias_1 }

/**
 * Remove all `removalItems` from the `prevItems` array.
 */
export declare function removeItems<Item = any>(currentItems: Item[], removalItems: Item[], getItemId: GetItemId<Item>): Item[];

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
 * Reset the state of the reducer.
 */
declare function reset(): {
    type: "$$__RESET__";
};

/**
 * Scroll node into view if necessary
 * @param element - the element that should scroll into view
 * @param menuElement - the menu element of the component
 */
export declare function scrollIntoView(element: Nullable<HTMLElement> | null | undefined, menuElement: Nullable<HTMLElement>): void;

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
 * Set the highlighted item index.
 */
declare function setHighlightedIndex(index: number): {
    type: "$$__SET_HIGHLIGHTED_INDEX__";
    payload: number[];
};

/**
 * Set the highlighted item indexes.
 */
declare function setHighlightedIndexes(payload: number[]): {
    type: "$$__SET_HIGHLIGHTED_INDEXES__";
    payload: number[];
};

/**
 * Set the `hoverIndex` to a certain value.
 */
declare function setHoverItemIndex(payload: number): {
    type: "$$__SET_HOVER_ITEM_INDEX__";
    payload: number;
};

declare function setState<Item = any>(payload: MultishiftStateProps<Item>): {
    type: "$$__SET_STATE__";
    payload: Partial<MultishiftState<Item>>;
};

declare const SPECIAL_INPUT_KEYS: readonly ["ArrowDown", "ArrowUp", "Enter", "Escape"];
export { SPECIAL_INPUT_KEYS }
export { SPECIAL_INPUT_KEYS as SPECIAL_INPUT_KEYS_alias_1 }

declare const SPECIAL_KEYS: readonly ["Tab", "Space", "Enter", "Escape", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown", "SelectAll"];
export { SPECIAL_KEYS }
export { SPECIAL_KEYS as SPECIAL_KEYS_alias_1 }

declare const SPECIAL_MENU_KEYS: readonly ["ArrowDown", "ArrowUp", "Space", "Tab", "Enter", "Escape", "Home", "End", "SelectAll"];
export { SPECIAL_MENU_KEYS }
export { SPECIAL_MENU_KEYS as SPECIAL_MENU_KEYS_alias_1 }

declare const SPECIAL_TOGGLE_BUTTON_KEYS: readonly ["ArrowDown", "ArrowUp", "Space"];
export { SPECIAL_TOGGLE_BUTTON_KEYS }
export { SPECIAL_TOGGLE_BUTTON_KEYS as SPECIAL_TOGGLE_BUTTON_KEYS_alias_1 }

declare type SpecialKey = (typeof SPECIAL_KEYS)[number];
export { SpecialKey }
export { SpecialKey as SpecialKey_alias_1 }

declare interface SpecialKeyDownPayload {
    modifiers: Modifier[];
    key: SpecialKey;
    /**
     * This is provided so that the state reducer has access to the event. It
     * should not be stored.
     */
    event: KeyboardEvent_2<any>;
    /**
     * The indexes of disabled items.
     */
    disabled: number[];
}
export { SpecialKeyDownPayload }
export { SpecialKeyDownPayload as SpecialKeyDownPayload_alias_1 }

declare function toggleButtonBlur(): {
    type: "$$__TOGGLE_BUTTON_BLUR__";
};

/**
 * Dispatches the action for clicking the toggle button
 */
declare function toggleButtonClick(): {
    type: "$$__TOGGLE_BUTTON_CLICK__";
};

declare function toggleButtonSpecialKeyDown(payload: SpecialKeyDownPayload): {
    type: "$$__TOGGLE_BUTTON_SPECIAL_KEY_DOWN__";
    payload: SpecialKeyDownPayload;
};

/**
 * Toggle the `isOpen` status of the menu.
 */
declare function toggleMenu(): {
    type: "$$__TOGGLE_MENU__";
};

/**
 * Toggles the selected items.
 *
 * Firstly check whether all the items provided are already part of the current
 * items
 *  - If this is the case then remove all the toggleItems.
 *  - If this is not the case then add all the items (without duplication)
 *
 * When multiple is false or undefined it will only return one element.
 */
export declare function toggleSelectedItems<Item = any>(currentItems: Item[], toggleItems: Item[], getItemId: GetItemId<Item>, multiple?: boolean): Item[];

declare const Type: {
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
export { Type }
export { Type as Type_alias_1 }

/**
 * React effect hook that ignores the first invocation (e.g. on mount).
 *
 * @remarks
 *
 * The signature is exactly the same as the useEffect hook.
 *
 * ```tsx
 * import React from 'react'
 * import { useEffectOnUpdate } from 'react-use';
 *
 * const Demo = () => {
 *   const [count, setCount] = React.useState(0);
 *
 *   React.useEffect(() => {
 *     const interval = setInterval(() => {
 *       setCount(count => count + 1)
 *     }, 1000)
 *
 *     return () => {
 *       clearInterval(interval)
 *     }
 *   }, [])
 *
 *   useEffectOnUpdate(() => {
 *     log('count', count) // will only show 1 and beyond
 *
 *     return () => { // *OPTIONAL*
 *       // do something on unmount
 *     }
 *   }) // you can include deps array if necessary
 *
 *   return <div>Count: {count}</div>
 * };
 * ```
 */
export declare function useEffectOnUpdate(effect: EffectCallback, dependencies: DependencyList): void;

/**
 * Creates the ids for identifying the elements in the app.
 */
export declare function useElementIds(props: MultishiftA11yIdProps): GetElementIds;

declare interface UseElementRefs {
    toggleButton: MutableRefObject<HTMLElement | undefined>;
    input: MutableRefObject<HTMLElement | undefined>;
    menu: MutableRefObject<HTMLElement | undefined>;
    comboBox: MutableRefObject<HTMLElement | undefined>;
    items: MutableRefObject<HTMLElement[]>;
    ignored: MutableRefObject<HTMLElement[]>;
}

/**
 * Get the element references.
 */
export declare function useElementRefs(): UseElementRefs;

export declare const useId: () => string;

/**
 * Multishift is a hook that provides all the necessary tools for building
 * accessible dropdown components.
 *
 * @remarks
 *
 * It supports `select` and `autocomplete` drop down experiences with built in
 * support for multi-selection.
 *
 * The library borrows (and steals) heavily from `downshift` but also adds some
 * features which are really important for the `remirror` project.
 *
 * - Focus on typescript support
 * - No React Native support
 * - Multi selection support
 * - Render with **only** menu support (fully controlled)
 *
 * Eventually some of the code will be contributed back to the downshift
 * library.
 */
declare const useMultishift: <Item = any>(props: MultishiftProps<Item>) => MultishiftReturn<Item>;
export { useMultishift }
export { useMultishift as useMultishift_alias_1 }

/**
 * Creates the reducer for managing the multishift internal state.
 */
export declare function useMultishiftReducer<Item = any>(props: MultishiftProps<Item>): [MultishiftState<Item>, Dispatch<MultishiftRootActions<Item>>];

/**
 * This is a hook that listens for events mouse and touch events.
 *
 * When something does occur outside of the registered elements it will dispatch
 * the relevant action.
 */
export declare function useOuterEventListener<Item = any>(refs: ReturnType<typeof useElementRefs>, state: MultishiftState<Item>, { outerMouseUp, outerTouchEnd }: {
    outerMouseUp: () => void;
    outerTouchEnd: () => void;
}): MutableRefObject<{
    isMouseDown: boolean;
    isTouchMove: boolean;
    lastBlurred: HTMLElement | undefined;
}>;

export declare function useSetA11y<Item = any>(props: UseSetA11yProps<Item>): void;

declare interface UseSetA11yProps<Item = any> {
    state: MultishiftState<Item>;
    items: Item[];
    itemsToString?: ItemsToString<Item>;
    getA11yStatusMessage?: GetA11yStatusMessage<Item>;
    customA11yStatusMessage?: string;
}

/**
 * A hook for managing multiple timeouts.
 *
 * @remarks
 *
 * All timeouts are automatically cleared when un-mounting.
 */
export declare function useTimeouts(): Readonly<[(fn: () => void, time?: number) => void, () => void]>;

/**
 * React lifecycle hook that calls a function when the component will unmount.
 *
 * @remarks
 *
 * Try `useEffectOnce` if you need both a mount and unmount function.
 *
 * ```jsx
 * import {useUnmount} from 'react-use';
 *
 * const Demo = () => {
 *   useUnmount(() => log('UNMOUNTED'));
 *   return null;
 * };
 * ```
 */
export declare function useUnmount(fn: () => void | undefined): void;

/**
 * Log a warning when using in an internal type that doesn't get resolved.
 */
export declare function warnIfInternalType(type: string, message?: string): void;

export { }

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
      selectItems: CreateMultishiftAction<
        typeof MultishiftActionTypes.SelectItems,
        ItemsPayload<Item>,
        [Item[], boolean?]
      >;
      selectItem: CreateMultishiftAction<
        typeof MultishiftActionTypes.SelectItem,
        ItemsPayload<Item>,
        [Item, boolean?]
      >;
      removeSelectedItems: CreateMultishiftAction<
        typeof MultishiftActionTypes.RemoveSelectedItems,
        ItemsPayload<Item>,
        [Item[], boolean?]
      >;
      removeSelectedItem: CreateMultishiftAction<
        typeof MultishiftActionTypes.RemoveSelectedItem,
        ItemsPayload<Item>,
        [Item, boolean?]
      >;
      setState: CreateMultishiftAction<
        typeof MultishiftActionTypes.SetState,
        MultishiftStateProps<Item>
      >;
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


declare global {
  namespace Multishift {
    /**
     * This is an interface of all the actionTypes available. Use declaration merging to
     * extend it with your own custom actionTypes.
     */
    interface ActionTypes extends MultishiftTypesInterface {}
  }
}
