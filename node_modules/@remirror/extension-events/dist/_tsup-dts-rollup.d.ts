import { CreateExtensionPlugin } from '@remirror/core';
import { EditorState } from '@remirror/core';
import { EditorStateProps } from '@remirror/core';
import { EditorView } from '@remirror/core';
import { EditorViewProps } from '@remirror/core';
import { GetHandler } from '@remirror/core';
import { GetMarkRange } from '@remirror/core';
import { Handler } from '@remirror/core';
import { Helper } from '@remirror/core';
import { MarkType } from '@remirror/core';
import { NodeType } from '@remirror/core';
import { NodeWithPosition } from '@remirror/core';
import { PlainExtension } from '@remirror/core';

declare interface BaseEventState extends EditorViewProps, EditorStateProps {
    /**
     * The editor state before updates from the event.
     */
    state: EditorState;
}

declare type ClickEventHandler = (event: MouseEvent, state: ClickHandlerState) => boolean | undefined | void;
export { ClickEventHandler }
export { ClickEventHandler as ClickEventHandler_alias_1 }

/**
 * The helpers passed into the `ClickHandler`.
 */
declare interface ClickHandlerState extends ClickMarkHandlerState {
    /**
     * The position that was clicked.
     */
    pos: number;
    /**
     * Returns undefined when the nodeType doesn't match. Otherwise returns the
     * node with a position property.
     */
    getNode: (nodeType: string | NodeType) => NodeWithPosition | undefined;
    /**
     * The node that was clicked with the desired position.
     */
    nodeWithPosition: NodeWithPosition;
    /**
     * When this is true it means that the current clicked node is the node that
     * was directly clicked.
     */
    direct: boolean;
}
export { ClickHandlerState }
export { ClickHandlerState as ClickHandlerState_alias_1 }

declare type ClickMarkEventHandler = (event: MouseEvent, state: ClickMarkHandlerState) => boolean | undefined | void;
export { ClickMarkEventHandler }
export { ClickMarkEventHandler as ClickMarkEventHandler_alias_1 }

declare interface ClickMarkHandlerState extends BaseEventState {
    /**
     * Return the mark range if it exists for the clicked position.
     */
    getMark: (markType: string | MarkType) => GetMarkRange | undefined | void;
    /**
     * The list of mark ranges included. This is only populated when `direct` is
     * true.
     */
    markRanges: GetMarkRange[];
}
export { ClickMarkHandlerState }
export { ClickMarkHandlerState as ClickMarkHandlerState_alias_1 }

export declare type ClipboardEventHandler = (event: ClipboardEvent) => boolean | undefined | void;

declare type ContextMenuEventHandler = (event: MouseEvent, state: ContextMenuEventHandlerState) => boolean | undefined | void;
export { ContextMenuEventHandler }
export { ContextMenuEventHandler as ContextMenuEventHandler_alias_1 }

declare type ContextMenuEventHandlerState = MouseEventHandlerState;
export { ContextMenuEventHandlerState }
export { ContextMenuEventHandlerState as ContextMenuEventHandlerState_alias_1 }

/**
 * The return type for the `createEventHandlers` extension creator method.
 */
declare type CreateEventHandlers = GetHandler<EventsOptions>;
export { CreateEventHandlers }
export { CreateEventHandlers as CreateEventHandlers_alias_1 }

export declare type EditableEventHandler = (currentEditable: boolean) => void;

/**
 * The events extension which listens to events which occur within the
 * remirror editor.
 */
declare class EventsExtension extends PlainExtension<EventsOptions> {
    get name(): "events";
    /**
     * Indicates whether the user is currently interacting with the editor.
     */
    private mousedown;
    /**
     * True when the mouse is within the bounds of the editor.
     */
    private mouseover;
    /**
     * Add a new lifecycle method which is available to all extensions for adding
     * a click handler to the node or mark.
     */
    onView(): void;
    /**
     * Create the plugin which manages all of the events being listened to within
     * the editor.
     */
    createPlugin(): CreateExtensionPlugin;
    /**
     * Check if the user is currently interacting with the editor.
     */
    isInteracting(): Helper<boolean>;
    private startMouseover;
    private endMouseover;
    private readonly createMouseEventHandler;
}
export { EventsExtension }
export { EventsExtension as EventsExtension_alias_1 }

declare interface EventsOptions {
    /**
     * Listens for blur events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    blur?: Handler<FocusEventHandler>;
    /**
     * Listens for focus events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    focus?: Handler<FocusEventHandler>;
    /**
     * Listens to scroll events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    scroll?: Handler<ScrollEventHandler>;
    /**
     * Listens to `copy` events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    copy?: Handler<ClipboardEventHandler>;
    /**
     * Listens to `cut` events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    cut?: Handler<ClipboardEventHandler>;
    /**
     * Listens to `paste` events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    paste?: Handler<ClipboardEventHandler>;
    /**
     * Listens for mousedown events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    mousedown?: Handler<MouseEventHandler>;
    /**
     * Listens for mouseup events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    mouseup?: Handler<MouseEventHandler>;
    /**
     * Listens for mouseenter events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    mouseenter?: Handler<MouseEventHandler>;
    /**
     * Listens for mouseleave events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    mouseleave?: Handler<MouseEventHandler>;
    /**
     * Handle text input.
     */
    textInput?: Handler<TextInputHandler>;
    /**
     * Listens for keypress events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    keypress?: Handler<KeyboardEventHandler>;
    /**
     * Listens for keypress events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    keydown?: Handler<KeyboardEventHandler>;
    /**
     * Listens for keypress events on the editor.
     *
     * Return `true` to prevent any other prosemirror listeners from firing.
     */
    keyup?: Handler<KeyboardEventHandler>;
    /**
     * Listens for click events and provides information which may be useful in
     * handling them properly.
     *
     * This can be used to check if a node was clicked on.
     *
     * Please note that this click handler may be called multiple times for one
     * click. Starting from the node that was clicked directly, it walks up the
     * node tree until it reaches the `doc` node.
     *
     * Return `true` to prevent any other click listeners from being registered.
     */
    click?: Handler<ClickEventHandler>;
    /**
     * This is similar to the `click` handler, but with better performance when
     * only capturing clicks for marks.
     */
    clickMark?: Handler<ClickMarkEventHandler>;
    /**
     * Same as {@link EventsOptions.click} but for double clicks.
     */
    doubleClick?: Handler<ClickEventHandler>;
    /**
     * Same as {@link EventsOptions.clickMark} but for double clicks.
     */
    doubleClickMark?: Handler<ClickMarkEventHandler>;
    /**
     * Same as {@link EventsOptions.click} but for triple clicks.
     */
    tripleClick?: Handler<ClickEventHandler>;
    /**
     * Same as {@link EventsOptions.clickMark} but for triple clicks.
     */
    tripleClickMark?: Handler<ClickMarkEventHandler>;
    /**
     * Listen for contextmenu events and pass through props which detail the
     * direct node and parent nodes which were activated.
     */
    contextmenu?: Handler<ContextMenuEventHandler>;
    /**
     * Listen for hover events and pass through details of every node and mark
     * which was hovered at the current position.
     */
    hover?: Handler<HoverEventHandler>;
    /**
     * Listen for editable changed and pass through previous editable state and
     * current editable state
     */
    editable?: Handler<EditableEventHandler>;
}
export { EventsOptions }
export { EventsOptions as EventsOptions_alias_1 }

declare type FocusEventHandler = (event: FocusEvent) => boolean | undefined | void;
export { FocusEventHandler }
export { FocusEventHandler as FocusEventHandler_alias_1 }

/**
 * Extract the position from a provided event.
 */
export declare function getPositionFromEvent(view: EditorView, event: MouseEvent): PositionFromCoords | undefined;

declare type HoverEventHandler = (event: MouseEvent, state: HoverEventHandlerState) => boolean | undefined | void;
export { HoverEventHandler }
export { HoverEventHandler as HoverEventHandler_alias_1 }

declare interface HoverEventHandlerState extends MouseEventHandlerState {
    /**
     * This is true when hovering has started and false when hovering has ended.
     */
    hovering: boolean;
}
export { HoverEventHandlerState }
export { HoverEventHandlerState as HoverEventHandlerState_alias_1 }

declare type KeyboardEventHandler = (event: KeyboardEvent) => boolean | undefined | void;
export { KeyboardEventHandler }
export { KeyboardEventHandler as KeyboardEventHandler_alias_1 }

declare type MouseEventHandler = (event: MouseEvent) => boolean | undefined | void;
export { MouseEventHandler }
export { MouseEventHandler as MouseEventHandler_alias_1 }

declare interface MouseEventHandlerState {
    /**
     * The editor view.
     */
    view: EditorView;
    /**
     * The marks that currently wrap the context menu.
     */
    marks: GetMarkRange[];
    /**
     * An array of nodes with their positions. The first node is the node that was
     * acted on directly, and each node after is the parent of the one proceeding.
     * Consumers of this API can check if a node of a specific type was triggered
     * to determine how to render their context menu.
     */
    nodes: NodeWithPosition[];
    /**
     * Return the mark range if it exists for the clicked position.
     *
     *
     */
    getMark: (markType: string | MarkType) => GetMarkRange | undefined | void;
    /**
     * Returns undefined when the nodeType doesn't match. Otherwise returns the
     * node with a position property and `isRoot` which is true when the node was
     * clicked on directly.
     */
    getNode: (nodeType: string | NodeType) => (NodeWithPosition & {
        isRoot: boolean;
    }) | undefined | void;
}
export { MouseEventHandlerState }
export { MouseEventHandlerState as MouseEventHandlerState_alias_1 }

/**
 * The position created by `view.posAtCoords`
 */
export declare interface PositionFromCoords {
    /**
     * The position nearest to the viewport coordinates that were provided.
     */
    pos: number;
    /**
     * Holds the position of the inner node that the position falls inside of, or
     * -1 if it is at the top level, not in any node.
     */
    inside: number;
}

declare type ScrollEventHandler = (event: Event) => boolean | undefined | void;
export { ScrollEventHandler }
export { ScrollEventHandler as ScrollEventHandler_alias_1 }

declare type TextInputHandler = (props: {
    from: number;
    to: number;
    text: string;
}) => boolean | undefined | void;
export { TextInputHandler }
export { TextInputHandler as TextInputHandler_alias_1 }

export { }

declare global {
  namespace Remirror {
    interface ExcludeOptions {
      /**
       * Whether to exclude the extension's `clickHandler`.
       *
       * @defaultValue undefined
       */
      clickHandler?: boolean;
    }

    interface BaseExtension {
      /**
       * Create a click handler for this extension. Returns a function which is
       * used as the click handler. The callback provided is handled via the
       * `Events` extension and comes with a helpers object
       * `ClickHandlerHelper`.
       *
       * The returned function should return `true` if you want to prevent any
       * further click handlers from being handled.
       */
      createEventHandlers?(): CreateEventHandlers;
    }
    interface AllExtensions {
      events: EventsExtension;
    }
  }
}
