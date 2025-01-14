import type { MountedPortal, PortalContainer } from './portal-container';
/**
 * The component that places all the portals into the DOM.
 *
 * Portals can currently be created by a [[`ReactNodeView`]] and coming soon
 * both the [[`ReactMarkView`]] and [[`ReactDecoration`]].
 */
export declare const RemirrorPortals: (props: RemirrorPortalsProps) => JSX.Element;
export interface RemirrorPortalsProps {
    /**
     * An array of tuples holding all the element containers for node view
     * portals.
     */
    portals: Array<[HTMLElement, MountedPortal]>;
}
/**
 * A hook which subscribes to updates from the portal container.
 *
 * This is should used in the `ReactEditor` component and the value should be
 * passed through to the `RemirrorPortals` component.
 */
export declare function usePortals(portalContainer: PortalContainer): Array<[HTMLElement, MountedPortal]>;
