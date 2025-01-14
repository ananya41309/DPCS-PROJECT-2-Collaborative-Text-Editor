import { AddCustomHandler } from '@remirror/core';
import { AnyFunction } from '@remirror/core';
import { CommandFunction } from '@remirror/core';
import { Coords } from '@remirror/core';
import type { CreateEventHandlers } from '@remirror/extension-events';
import { CustomHandler } from '@remirror/core';
import { DecorationSet } from '@remirror/pm/view';
import { EditorState } from '@remirror/core';
import { EditorStateProps } from '@remirror/core';
import { EditorViewProps } from '@remirror/core';
import { Except } from '@remirror/core';
import { FindProsemirrorNodeResult } from '@remirror/core';
import { GetMarkRange } from '@remirror/core';
import { Helper } from '@remirror/core';
import type { HoverEventHandlerState } from '@remirror/extension-events';
import { isEmptyBlockNode } from '@remirror/core';
import { MarkType } from '@remirror/core';
import type { MouseEventHandlerState } from '@remirror/extension-events';
import { PlainExtension } from '@remirror/core';
import { ProsemirrorAttributes } from '@remirror/core';
import { StateUpdateLifecycleProps } from '@remirror/core';
import { Static } from '@remirror/core';
import { Transaction } from '@remirror/core';
import { TransactionProps } from '@remirror/core';
import { Unsubscribe } from 'nanoevents';

/**
 * Always render a position regardless of selection.
 */
declare const alwaysPositioner: Positioner<{
    from: Coords;
    to: Coords;
}>;
export { alwaysPositioner }
export { alwaysPositioner as alwaysPositioner_alias_1 }

declare interface BasePositioner<Data> {
    /**
     * Determines whether anything has changed and whether to continue with a
     * recalculation. By default this is only true when the document has or
     * selection has changed.
     *
     * @remarks
     *
     * Sometimes it is useful to recalculate the positioner on every state update.
     * In this case you can set this method to always return true.
     *
     * ```ts
     * const positioner: Positioner = {
     *   hasStateChanged: () => true
     * };
     * ```
     */
    hasChanged: (props: BasePositionerProps) => boolean;
    /**
     * Get a unique id for the data returned from `getActive`.
     *
     * If left undefined, it defaults to use the index.
     */
    getID?: (data: Data, index: number) => string;
    /**
     * Get the active items that will be passed into the `getPosition` method.
     */
    getActive: (props: GetActiveProps) => Data[];
    /**
     * Calculate and return an array of `VirtualPosition`'s which represent the
     * virtual element the positioner represents.
     */
    getPosition: (props: GetPositionProps<Data>) => PositionerPosition;
    /**
     * An array of update listeners to determines when the positioner will update it's position.
     *
     * - `state` - updates when the prosemirror state is updated - default.
     * - `scroll` - updates when the editor is scrolled (debounced)
     *
     * @defaultValue ['state']
     */
    events?: PositionerUpdateEvent[];
}
export { BasePositioner }
export { BasePositioner as BasePositioner_alias_1 }

declare interface BasePositionerProps extends Omit<StateUpdateLifecycleProps, 'previousState'> {
    helpers: Record<string, AnyFunction>;
    previousState: undefined | EditorState;
    /**
     * The event that triggered this update.
     */
    event: PositionerUpdateEvent;
    /**
     * The scroll event information.
     */
    scroll?: {
        scrollTop: number;
    };
    /**
     * The hover event information. This is only present when the update was
     * triggered by a hover event.
     */
    hover?: Except<HoverEventHandlerState, 'view'>;
    /**
     * The contextmenu event information. This is only present when the update was
     * triggered by a contextmenu event.
     */
    contextmenu?: Except<MouseEventHandlerState, 'view'>;
}
export { BasePositionerProps }
export { BasePositionerProps as BasePositionerProps_alias_1 }

/**
 * Creates a positioner for the current block node.
 *
 * It spans the full width and height of the block.
 */
declare const blockNodePositioner: Positioner<FindProsemirrorNodeResult>;
export { blockNodePositioner }
export { blockNodePositioner as blockNodePositioner_alias_1 }

declare type CallbackPositioner = () => Positioner;
export { CallbackPositioner }
export { CallbackPositioner as CallbackPositioner_alias_1 }

/**
 * Create a positioner for the currently selected mark
 */
declare function createMarkPositioner(props: MarkPositionerProps): Positioner<CreateMarkPositionerData>;
export { createMarkPositioner }
export { createMarkPositioner as createMarkPositioner_alias_1 }

declare interface CreateMarkPositionerData extends GetMarkRange, VisibleProps {
    cursor: {
        from: Coords;
        to: Coords;
    };
}

/**
 * This can be used to position a menu that is inline with the first character
 * of the selection. This is useful for suggestions since they should typically
 * appear while typing without a multi character selection.
 *
 * @remarks
 *
 * The menu will center itself within the selection.
 *
 * - `right` should be used to absolutely position away from the right hand edge
 *   of the screen.
 * - `left` should be used to absolutely position away from the left hand edge
 *   of the screen.
 * - `bottom` absolutely positions the element above the text selection.
 * - `top` absolutely positions the element below the text selection
 */
declare const cursorPositioner: Positioner<{
    from: Coords;
    to: Coords;
}>;
export { cursorPositioner }
export { cursorPositioner as cursorPositioner_alias_1 }

declare const defaultAbsolutePosition: PositionerPosition;
export { defaultAbsolutePosition }
export { defaultAbsolutePosition as defaultAbsolutePosition_alias_1 }

/**
 * Creates a positioner for the visible portion editor.
 *
 * E.g. The "viewport" of the editor inside any scrollable area.
 */
declare const editorPositioner: Positioner<boolean>;
export { editorPositioner }
export { editorPositioner as editorPositioner_alias_1 }

declare interface ElementsAddedProps {
    position: PositionerPosition;
    element: HTMLElement;
    id: string;
}
export { ElementsAddedProps }
export { ElementsAddedProps as ElementsAddedProps_alias_1 }

/**
 * Returns the position as a single pixel width for the end of the current block
 * node.
 */
declare const emptyBlockNodeEndPositioner: Positioner<FindProsemirrorNodeResult>;
export { emptyBlockNodeEndPositioner }
export { emptyBlockNodeEndPositioner as emptyBlockNodeEndPositioner_alias_1 }

/**
 * Returns the block node position only when it is empty and the selection is
 * empty.
 */
declare const emptyBlockNodePositioner: Positioner<FindProsemirrorNodeResult>;
export { emptyBlockNodePositioner }
export { emptyBlockNodePositioner as emptyBlockNodePositioner_alias_1 }

/**
 * Returns the position as a single pixel width for the start of the block node
 * as a position
 */
declare const emptyBlockNodeStartPositioner: Positioner<FindProsemirrorNodeResult>;
export { emptyBlockNodeStartPositioner }
export { emptyBlockNodeStartPositioner as emptyBlockNodeStartPositioner_alias_1 }

declare interface GetActiveProps extends EditorViewProps, BasePositionerProps {
}
export { GetActiveProps }
export { GetActiveProps as GetActiveProps_alias_1 }

/**
 * This is a helper method for getting the positioner. The props can either
 * be a named positioner or a positioner that you've created for the purpose.
 */
declare function getPositioner(positioner: PositionerParam): Positioner;
export { getPositioner }
export { getPositioner as getPositioner_alias_1 }

declare interface GetPositionProps<Data> extends EditorViewProps, BasePositionerProps {
    /**
     * The data that can be transformed into a position.
     */
    data: Data;
    /**
     * The reference element being used by the positioner to determine
     * positioning.
     */
    element: HTMLElement;
}
export { GetPositionProps }
export { GetPositionProps as GetPositionProps_alias_1 }

declare interface HasChangedProps extends EditorStateProps, Partial<TransactionProps> {
    previousState: EditorState | undefined;
}

/**
 * Checks the transaction for changes or compares the state with the previous
 * state.
 *
 * Return `true` when a change is detected in the document or the selection.
 */
declare function hasStateChanged(props: HasChangedProps): boolean;
export { hasStateChanged }
export { hasStateChanged as hasStateChanged_alias_1 }

export { isEmptyBlockNode }
export { isEmptyBlockNode as isEmptyBlockNode_alias_1 }

/**
 * Checks if the given transaction force updates positioners.
 *
 * @param tr - the Transaction to check
 * @param key - filter for a specific key. Defaults to all.
 */
declare function isPositionerUpdateTransaction(tr: Transaction, key?: string): boolean;
export { isPositionerUpdateTransaction }
export { isPositionerUpdateTransaction as isPositionerUpdateTransaction_alias_1 }

/**
 * Checks that the rect is visible within the provided element.
 *
 * This is specific for the remirror editor.
 */
declare function isPositionVisible(rect: DOMRect, element: Element, options?: IsPositionVisibleOptions): boolean;
export { isPositionVisible }
export { isPositionVisible as isPositionVisible_alias_1 }

declare interface IsPositionVisibleOptions {
    /**
     * When `true` account for padding and the scroll bar width for the provided
     * element.
     *
     * @defaultValue false
     */
    accountForPadding?: boolean;
}

declare interface MarkPositionerProps {
    /**
     * The `type` of mark to look for.
     */
    type: MarkType | string;
    /**
     * When true will find all marks of the provided type in the doc.
     *
     * @defaultValue false
     */
    all?: boolean;
    /**
     * When true will only be active for the visible positions.
     *
     * @defaultValue false
     */
    onlyVisible?: boolean;
}
export { MarkPositionerProps }
export { MarkPositionerProps as MarkPositionerProps_alias_1 }

/**
 * Creates a position which captures the current active word. Nothing is returned
 * if no word is active.
 *
 * This is only active when the selection is empty (cursor selection)
 *
 * @remarks
 *
 * Creates a rect that wraps the nearest word.
 */
declare const nearestWordPositioner: Positioner<{
    from: Coords;
    to: Coords;
}>;
export { nearestWordPositioner }
export { nearestWordPositioner as nearestWordPositioner_alias_1 }

/**
 * This is the positioner. It exists to report the position of things in the
 * editor. Typically you will use it to get the position of the cursor.
 *
 * But you can be more ambitious and get the position all the active nodes of a
 * certain type. Or all visible nodes of a certain type in the editor, updated
 * as it scrolls.
 *
 * The positions returned have a rect which is the viewport position.
 *
 * There are also the `top`, `left`, `right`, `bottom` which represent the
 * absolute positioned rectangle of the position in questions. For a cursor
 * position `left` and `right` are probably the same.
 */
declare class Positioner<Data = any> {
    #private;
    /**
     * An empty return value for the positioner.
     */
    static EMPTY: never[];
    /**
     * Create a positioner.
     */
    static create<Data>(props: BasePositioner<Data>): Positioner<Data>;
    /**
     * Create a positioner from an existing positioner.
     *
     * This is useful when you want to modify parts of the positioner.
     */
    static fromPositioner<Data>(positioner: Positioner, base: Partial<BasePositioner<Data>>): Positioner<Data>;
    readonly events: PositionerUpdateEvent[];
    /**
     * Store the props for the most recent update. This is used by `React` to
     * reapply the most recent props to the new positioner when the positioner is
     * recreated within a component.
     */
    recentUpdate?: GetActiveProps;
    readonly hasChanged: (props: BasePositionerProps) => boolean;
    get basePositioner(): BasePositioner<Data>;
    private constructor();
    /**
     * Get the active element setters.
     */
    onActiveChanged(props: GetActiveProps): void;
    /**
     * Get the id for the active data. Defaults to the index of the data item.
     */
    getID(data: Data, index: number): string;
    /**
     * Add a listener to the positioner events.
     */
    readonly addListener: <Key extends keyof PositionerEvents<Data>>(event: Key, cb: PositionerEvents<Data>[Key]) => Unsubscribe;
    private addProps;
    /**
     * Create a new Positioner with the provided props.
     */
    clone(props?: PositionerCloneProps<Data>): Positioner<Data>;
    /**
     * Clones the positioner while updating the `active` value. This is designed
     * for usage in frameworks like `react`.
     */
    active(isActive: boolean | ((data: Data) => boolean)): Positioner<Data>;
}
export { Positioner }
export { Positioner as Positioner_alias_1 }

declare const POSITIONER_UPDATE_ALL = "__all_positioners__";
export { POSITIONER_UPDATE_ALL }
export { POSITIONER_UPDATE_ALL as POSITIONER_UPDATE_ALL_alias_1 }

declare const POSITIONER_UPDATE_KEY = "positionerUpdate";
export { POSITIONER_UPDATE_KEY }
export { POSITIONER_UPDATE_KEY as POSITIONER_UPDATE_KEY_alias_1 }

declare const POSITIONER_WIDGET_KEY = "remirror-positioner-widget";
export { POSITIONER_WIDGET_KEY }
export { POSITIONER_WIDGET_KEY as POSITIONER_WIDGET_KEY_alias_1 }

/**
 * This type is used for setting elements which are associated with the relevant
 * positioner. Once teh
 */
declare type PositionerChangeHandlerMethod = (elementSetters: SetActiveElement[]) => void;
export { PositionerChangeHandlerMethod }
export { PositionerChangeHandlerMethod as PositionerChangeHandlerMethod_alias_1 }

declare type PositionerCloneProps<Data> = Partial<BasePositioner<Data>> | ((original: BasePositioner<Data>) => Partial<BasePositioner<Data>>);

declare interface PositionerEvents<Data = any> {
    /**
     * Called when the dom elements have all been received. In some frameworks
     * like `React` this may be called asynchronously.
     */
    done: (props: ElementsAddedProps[]) => void;
    /**
     * Called when the active values have been updated.
     */
    update: (elementSetters: Array<SetActiveElement<Data>>) => void;
}

/**
 * This is the positioner extension which is used to track the positions of
 * different parts of your editor.
 *
 * For example, you can track the cursor or all visible paragraph nodes.
 */
declare class PositionerExtension extends PlainExtension<PositionerOptions> {
    get name(): "positioner";
    /**
     * All the active positioners for the editor.
     */
    private positioners;
    /**
     * The document element which is used for storing the positioner decoration.
     */
    private element?;
    protected onAddCustomHandler: AddCustomHandler<PositionerOptions>;
    createAttributes(): ProsemirrorAttributes;
    protected init(): void;
    createEventHandlers(): CreateEventHandlers;
    onStateUpdate(update: StateUpdateLifecycleProps): void;
    /**
     * Create a placeholder decoration which is never removed from the document.
     */
    createDecorations(state: EditorState): DecorationSet;
    /**
     * Trigger an update of positioners manually. This can be useful to update positioners when
     * the view is updated in a way that doesn't trigger a ProseMirror state change. For instance
     * when an image URL is loaded and the document is reflowed.
     *
     * @param key - Allows filtering a specific type of positioner to update. Defaults to all.
     */
    forceUpdatePositioners(key?: string): CommandFunction;
    /**
     * Get the html element which contains all the positioner elements and
     * components.
     */
    getPositionerWidget(): Helper<HTMLElement>;
    private createElement;
    private triggerPositioner;
    private positioner;
    private getBaseProps;
    private onScroll;
}
export { PositionerExtension }
export { PositionerExtension as PositionerExtension_alias_1 }

declare interface PositionerHandler {
    /**
     * The positioner to use for calculating the relative position.
     */
    positioner: Positioner;
    /**
     * Method to call when there is a change in the position.
     */
    onChange: PositionerChangeHandlerMethod;
}
export { PositionerHandler }
export { PositionerHandler as PositionerHandler_alias_1 }

declare interface PositionerOptions {
    /**
     * An object specifying the positioner and the change handler for responding
     * to changes in the positioner output. This is a custom handler and should be
     * amended with `addCustomHandler`.
     */
    positioner?: CustomHandler<Positioner>;
    /**
     * The `ms` to debounce scroll events. Scroll events affect the visibility of
     * the rendered positioners. By default they are enabled for all positioners.
     *
     * @defaultValue 100
     */
    scrollDebounce?: Static<number>;
}
export { PositionerOptions }
export { PositionerOptions as PositionerOptions_alias_1 }

declare type PositionerParam = StringPositioner | Positioner | CallbackPositioner;
export { PositionerParam }
export { PositionerParam as PositionerParam_alias_1 }

/**
 * The absolutely positioned coordinates relative to the editor element. With
 * these coordinates you can perfectly simulate a position within the text
 * editor and render it as you decide.
 */
declare interface PositionerPosition extends Rect {
    /**
     * The position relative to the document viewport. This can be used with
     * `position: fixed` when that is a better fit for your application.
     */
    rect: DOMRect;
    /**
     * True when any part of the captured position is visible within the dom view.
     */
    visible: boolean;
}
export { PositionerPosition }
export { PositionerPosition as PositionerPosition_alias_1 }

declare const positioners: {
    /**
     * Creates a rect which wraps the current selection.
     */
    selection: Positioner<{
        from: Coords;
        to: Coords;
    }>;
    /**
     * Creates a rect for the cursor. Is inactive for
     */
    cursor: Positioner<{
        from: Coords;
        to: Coords;
    }>;
    /**
     * Creates a positioner which always shows the position of the selection whether empty or not.
     */
    always: Positioner<{
        from: Coords;
        to: Coords;
    }>;
    /**
     * Creates a position which wraps the entire selected block node.
     */
    block: Positioner<FindProsemirrorNodeResult>;
    /**
     * Creates a position which wraps the entire selected block node. This is only active when the block node is empty.
     */
    emptyBlock: Positioner<FindProsemirrorNodeResult>;
    /**
     * Creates a position which wraps the entire selected block node. This is only active when the block node is empty.
     */
    emptyBlockStart: Positioner<FindProsemirrorNodeResult>;
    /**
     * Creates a position which wraps the entire selected block node. This is only active when the block node is empty.
     */
    emptyBlockEnd: Positioner<FindProsemirrorNodeResult>;
    /**
     * Create a rect which surrounds the nearest word.
     */
    nearestWord: Positioner<{
        from: Coords;
        to: Coords;
    }>;
    /**
     * Create a rect which surrounds the visible portion of the editor.
     */
    editor: Positioner<boolean>;
};
export { positioners }
export { positioners as positioners_alias_1 }

/**
 * The events that can trigger a positioner update.
 */
declare type PositionerUpdateEvent = 'scroll' | 'state' | 'hover' | 'contextmenu';
export { PositionerUpdateEvent }
export { PositionerUpdateEvent as PositionerUpdateEvent_alias_1 }

declare interface Rect {
    /**
     * Pixel distance from left of the reference frame.
     * Alias of `left`.
     */
    x: number;
    /**
     * Pixel distance from top of the reference frame.
     * Alias of `top` for css.
     */
    y: number;
    /**
     * The height of the captured position.
     */
    height: number;
    /**
     * The width of the captured position.
     */
    width: number;
}
export { Rect }
export { Rect as Rect_alias_1 }

/**
 * Create a position that fully capture the selected text. When the selection
 * spans multiple lines, the position is created as a box that fully captures
 * the start cursor and end cursor.
 */
declare const selectionPositioner: Positioner<{
    from: Coords;
    to: Coords;
}>;
export { selectionPositioner }
export { selectionPositioner as selectionPositioner_alias_1 }

declare interface SetActiveElement<Data = any> {
    /**
     * Set the html element for the active position.
     */
    setElement: (element: HTMLElement) => void;
    /**
     * The unique ide for the active element.
     */
    id: string;
    data: Data;
}
export { SetActiveElement }
export { SetActiveElement as SetActiveElement_alias_1 }

declare type StringPositioner = keyof typeof positioners;
export { StringPositioner }
export { StringPositioner as StringPositioner_alias_1 }

declare interface VisibleProps {
    visible: boolean;
}
export { VisibleProps }
export { VisibleProps as VisibleProps_alias_1 }

export { }

declare global {
  namespace Remirror {
    interface AllExtensions {
      positioner: PositionerExtension;
    }
  }
}
