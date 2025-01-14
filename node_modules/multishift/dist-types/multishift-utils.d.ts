import type { Dispatch, KeyboardEvent, SyntheticEvent } from 'react';
import type { AnyFunction, Nullable } from '@remirror/core-types';
import { SpecialKey } from './multishift-constants';
import type { ActionCreatorMapToDispatch, ActionCreatorsMapObject, GetItemId, ItemClickPayload, ItemToString, Modifier, MultishiftA11yIdProps, MultishiftBehaviorProps, MultishiftChangeHandlerProps, MultishiftDefaultValueProps, MultishiftInitialValueProps, MultishiftProps, MultishiftState, MultishiftStateChangeset, MultishiftStateHelpers, MultishiftStateProps, SpecialKeyDownPayload } from './multishift-types';
/**
 * The default unique identifier getter function.
 */
export declare function defaultGetItemId<Item = any>(item: Item): Item;
/**
 * The default itemToString implementation.
 */
export declare function defaultItemToString<Item = any>(item: Item | undefined): string;
/**
 * The default itemsToString function.
 *
 * Creates a comma separated string of the item string values.
 *
 * @param items - the list of all selected items
 * @param itemToString - retrieve the string from an individual
 */
export declare function defaultItemsToString<Item = any>(selectedItems: Item[], itemToString?: ItemToString): string;
export interface GetInitialPropsProps<Item = any> extends MultishiftBehaviorProps, MultishiftStateProps<Item>, MultishiftDefaultValueProps<Item>, MultishiftInitialValueProps<Item> {
}
export declare const DEFAULT_STATE: MultishiftState;
/**
 * Get all the default state values.
 */
export declare function getDefaultState<Item = any>(defaults: GetDefaultStateProps<Item>): MultishiftState<Item>;
/**
 * Get the initial state or props when provided.
 */
export declare function getInitialStateProps<Item = any>(initialProps: GetInitialPropsProps): MultishiftState<Item>;
export interface GetDefaultStateProps<Item = any> extends MultishiftDefaultValueProps<Item>, MultishiftBehaviorProps {
}
interface GetHighlightReset {
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
/**
 * Uses controlled props where available otherwise fallbacks back to internal
 * state.
 */
export declare function getState<Item = any>(state: MultishiftState<Item>, props: MultishiftStateProps<Item>): MultishiftState<Item>;
/**
 * Call all relevant change handlers.
 */
export declare function callChangeHandlers<Item = any>(handlers: MultishiftChangeHandlerProps<Item>, changeset: MultishiftStateChangeset<Item>): void;
export interface GetElementIds {
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
interface GetNextWrappingIndexProps {
    steps: number;
    start: number;
    size: number;
    circular: boolean;
}
export declare function getNextWrappingIndex({ start, steps, size, circular, }: GetNextWrappingIndexProps): number | undefined;
/**
 * Check whether the provided value is a valid index.
 */
export declare function isValidIndex(index: number | undefined | null): index is number;
/**
 * Get the next index when navigating with arrow keys.
 */
export declare function getNextWrappingIndexes(params: GetNextWrappingIndexProps): [number] | [];
export declare function isValidIndexAndNotDisabled(index: number | undefined, disabled: number[]): index is number;
interface GetItemIndexByJumpTextProps<Item = any> {
    text: string;
    highlightedIndexes: number[];
    items: Item[];
    itemToString?: ItemToString;
}
/**
 * Finds the nearest match when typing into a non input dropdown.
 */
export declare function getItemIndexesByJumpText<Item = any>({ text, highlightedIndexes, items, itemToString, }: GetItemIndexByJumpTextProps<Item>): [number] | [];
/**
 * Determines which highlighted indexes should be available on first open.
 */
export declare function getHighlightedIndexOnOpen<Item = any>(props: Pick<MultishiftProps<Item>, 'items' | 'initialHighlightedIndexes' | 'defaultHighlightedIndexes'>, state: MultishiftState<Item>, offset: number, getItemId: GetItemId<Item>): number[];
/**
 * Get the item index from the items prop.
 */
export declare function getItemIndex<Item = any>(index: number, item: Item, items: Item[]): number;
type GetLastHighlightProps = Pick<MultishiftState, 'highlightedIndexes' | 'highlightedGroupEndIndex' | 'highlightedGroupStartIndex'>;
/**
 * Get the most recently updated highlighted index.
 *
 * Returns -1 when no highlighted index is found.
 */
export declare function getMostRecentHighlightIndex(lastHighlight: GetLastHighlightProps): number;
/**
 * Check if the browser is running on a mac.
 */
export declare const isMac: () => boolean;
interface GetChangesFromItemClickProps<Item = any> {
    modifiers: Modifier[];
    index: number;
    items: Item[];
    props: MultishiftBehaviorProps;
    defaultState: MultishiftState<Item>;
    state: MultishiftState<Item>;
    getItemId: GetItemId<Item>;
}
/**
 * Returns true when all items are selected within the list.
 */
export declare function allItemsSelected<Item = any>(currentItems: Item[], newItems: Item[], getItemId: GetItemId<Item>): boolean;
/**
 * Adds the list of `newItems` to the list of `prevItems`. If `multiple` is
 * false (or undefined) then simply replace the array with the first item from
 * the `newItems` list.
 */
export declare function addItems<Item = any>(currentItems: Item[], newItems: Item[], getItemId: GetItemId<Item>, multiple?: boolean): Item[];
/**
 * Remove all `removalItems` from the `prevItems` array.
 */
export declare function removeItems<Item = any>(currentItems: Item[], removalItems: Item[], getItemId: GetItemId<Item>): Item[];
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
/**
 * Get an array of all the highlighted items Including any from the currently
 * incomplete group.
 */
export declare function getHighlightedIndexes<Item = any>({ start, end, indexes, items, hoveredIndex, }: GetHighlightedIndexesProps<Item>): number[];
/**
 * Checks whether the an index is highlighted within a set of indexes and a
 * highlighted group.
 */
export declare function checkItemHighlighted(index: number, options: Omit<GetHighlightedIndexesProps, 'items'>): boolean;
/**
 * Removes any unchanged values from the changes object so that only the correct
 * callbacks are triggered.
 */
export declare function omitUnchangedState<Item = any>(changes: MultishiftStateProps<Item>, { state, getItemId }: OmitUnchangedProps<Item>): MultishiftStateProps<Item>;
/**
 * Create the desired change object when an item is clicked.
 */
export declare function getChangesFromItemClick<Item = any>({ modifiers, items, defaultState, state, index, props, getItemId, }: GetChangesFromItemClickProps<Item>): MultishiftStateProps<Item>;
interface GetHighlightedIndexesProps<Item = any> {
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
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 *
 * @param event - the keyboard event
 */
export declare function getKeyName(event: KeyboardEvent<HTMLElement>): string;
/**
 * Log a warning when using in an internal type that doesn't get resolved.
 */
export declare function warnIfInternalType(type: string, message?: string): void;
interface CreateChangesFromKeyDownProps<Item = any> {
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
 * Get the changes that have happened when a menu key is pressed.
 */
export declare function getChangesFromMenuKeyDown<Item = any>({ modifiers, defaultState, state, key, items, getItemId, props, disabled, }: CreateChangesFromKeyDownProps<Item>): MultishiftStateProps<Item>;
export declare function getChangesFromToggleButtonKeyDown<Item = any>({ key, defaultState, props, getItemId, state, }: CreateChangesFromKeyDownProps<Item>): MultishiftStateProps<Item>;
export declare const getChangesFromInputKeyDown: <Item = any>(params: CreateChangesFromKeyDownProps<Item>) => Partial<MultishiftState<Item>>;
declare const modifierKeys: readonly ["altKey", "shiftKey", "metaKey", "ctrlKey"];
interface GetModifiersEvent {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
/**
 * Get an array of the event modifiers
 */
export declare function getModifiers(event: GetModifiersEvent): Array<(typeof modifierKeys)[number]>;
/**
 * This is intended to be used to compose event handlers. They are executed in
 * order until one of them returns a truthy value.
 */
export declare function callAllEventHandlers<Type extends Event = any, Node extends Element = any, Synth extends SyntheticEvent<Element, Type> = SyntheticEvent<Node, Type>, Method extends (event: Synth, ...args: any[]) => void | undefined | false | true = AnyFunction>(...fns: Array<Method | undefined | null | false>): (event: Synth, ...args: any[]) => void;
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they may
 * be invoked directly.
 */
export declare function bindActionCreators<Action, CreatorMap extends ActionCreatorsMapObject<Action>, ActionDispatch extends Dispatch<any>>(actionCreators: CreatorMap, dispatch: ActionDispatch): ActionCreatorMapToDispatch<CreatorMap>;
/**
 * Create a payload for the keydown event.
 */
export declare function createKeyDownPayload(event: KeyboardEvent, key: SpecialKey, disabled: number[]): SpecialKeyDownPayload;
/**
 * Create a payload for the item click event.
 */
export declare function createItemClickPayload(event: React.MouseEvent, index: number): ItemClickPayload;
/**
 * Check that the character is valid for jumpText.
 */
export declare function isValidCharacterKey(key: string): boolean;
/**
 * Scroll node into view if necessary
 * @param element - the element that should scroll into view
 * @param menuElement - the menu element of the component
 */
export declare function scrollIntoView(element: Nullable<HTMLElement> | null | undefined, menuElement: Nullable<HTMLElement>): void;
/**
 * Checks whether the passed value is a valid dom node
 *
 * @param domNode - the dom node
 */
export declare function isNode(domNode: unknown): domNode is Node;
/**
 * Checks for an element node like `<p>` or `<div>`.
 *
 * @param domNode - the dom node
 */
export declare const isHTMLElement: (domNode: unknown) => domNode is HTMLElement;
/**
 * Checks that this is a browser environment.
 */
export declare function isBrowser(): boolean;
/**
 * Checks whether the parent contains (or is the same as) the child node.
 */
export declare function isOrContainsNode(parent: Node, child: Node | null): child is Node;
interface OmitUnchangedProps<Item = any> {
    state: MultishiftState<Item>;
    getItemId: GetItemId<Item>;
}
/**
 * Helpers for transforming the state object.
 */
export declare function createStateHelpers<Item = any>({ getItemId, multiple }: MultishiftProps<Item>, state: MultishiftState<Item>): MultishiftStateHelpers<Item>;
export {};
