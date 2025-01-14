import { AddCustomHandler, CommandFunction, CustomHandler, EditorState, Helper, PlainExtension, ProsemirrorAttributes, StateUpdateLifecycleProps, Static } from '@remirror/core';
import type { CreateEventHandlers } from '@remirror/extension-events';
import { DecorationSet } from '@remirror/pm/view';
import { positioners } from './core-positioners';
import type { Positioner, SetActiveElement } from './positioner';
export interface PositionerOptions {
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
/**
 * This is the positioner extension which is used to track the positions of
 * different parts of your editor.
 *
 * For example, you can track the cursor or all visible paragraph nodes.
 */
export declare class PositionerExtension extends PlainExtension<PositionerOptions> {
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
export interface PositionerHandler {
    /**
     * The positioner to use for calculating the relative position.
     */
    positioner: Positioner;
    /**
     * Method to call when there is a change in the position.
     */
    onChange: PositionerChangeHandlerMethod;
}
/**
 * This type is used for setting elements which are associated with the relevant
 * positioner. Once teh
 */
export type PositionerChangeHandlerMethod = (elementSetters: SetActiveElement[]) => void;
/**
 * This is a helper method for getting the positioner. The props can either
 * be a named positioner or a positioner that you've created for the purpose.
 */
export declare function getPositioner(positioner: PositionerParam): Positioner;
export type StringPositioner = keyof typeof positioners;
export type CallbackPositioner = () => Positioner;
export type PositionerParam = StringPositioner | Positioner | CallbackPositioner;
declare global {
    namespace Remirror {
        interface AllExtensions {
            positioner: PositionerExtension;
        }
    }
}
