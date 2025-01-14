import { Unsubscribe } from 'nanoevents';
import type { FunctionComponent } from 'react';
export interface RenderProps {
    /**
     * Renders a JSX element.
     */
    Component: FunctionComponent;
}
export interface MountedPortal extends RenderProps {
    key: string;
}
export interface SingleRenderMethodProps extends RenderProps {
    key?: undefined;
    /**
     * The DOM element to contain the react portal.
     */
    container: HTMLElement;
}
export interface SharedRenderMethodProps extends RenderProps {
    /**
     * The DOM element to contain the react portal.
     */
    container: HTMLElement;
    /**
     * Shared renders must provide a key. By setting this value, the portal will
     * be rendered as a shared parameter.
     */
    key: string;
}
type RenderMethodProps = SingleRenderMethodProps;
export type PortalList = ReadonlyArray<[HTMLElement, MountedPortal]>;
export type PortalMap = Map<HTMLElement, MountedPortal>;
/**
 * The node view portal container keeps track of all the portals which have been
 * added by react to render the node views in the editor.
 */
export declare class PortalContainer {
    #private;
    /**
     * A map of all the active portals which have a one to one relation between
     * the container and the component.
     */
    portals: PortalMap;
    /**
     * Event handler for subscribing to update events from the portalContainer.
     */
    on: (callback: (portals: PortalMap) => void) => Unsubscribe;
    /**
     * Subscribe to one event before automatically unbinding.
     */
    once: (callback: (portals: PortalMap) => void) => Unsubscribe;
    /**
     * Trigger an update in all subscribers.
     */
    private update;
    /**
     * Responsible for registering a new portal by rendering the react element
     * into the provided container.
     */
    render({ Component, container }: RenderMethodProps): void;
    /**
     * Force an update in all the portals by setting new keys for every portal.
     *
     * Delete all orphaned containers (deleted from the DOM). This is useful for
     * Decoration where there is no destroy method.
     */
    forceUpdate(): void;
    /**
     * Deletes the portal within the container.
     */
    remove(container: HTMLElement): void;
}
export {};
