import { Alignment, FloatingPortal, Middleware, Placement as FloatingUIPlacement, Strategy } from '@floating-ui/react';
import { FC, PropsWithChildren, ReactNode } from 'react';
import type { PositionerParam } from '@remirror/extension-positioner';
import { UseEditorFocusProps } from '@remirror/react-hooks';
interface BaseFloatingPositioner extends UseEditorFocusProps {
    /**
     * The positioner used to determine the position of the relevant part of the
     * editor state.
     */
    positioner: PositionerParam;
    /**
     * When `true` will hide the popover element whenever the positioner is no
     * longer visible in the DOM.
     */
    hideWhenInvisible?: boolean;
    /**
     * Set animated as detailed [here](https://reakit.io/docs/popover/#animating).
     *
     * Currently this is turned off due to problems with an infinite loop.
     */
    animated?: boolean | number;
    /**
     * Set to false to make the positioner inactive.
     */
    enabled?: boolean;
    /**
     * Where to place the popover relative to the positioner.
     * @remarks
     * The floating-ui library has removed the auto- prefixed placement attribute types.
     * The type declaration you see here is for compatibility with Popper.js.
     *
     * https://floating-ui.com/docs/autoPlacement#conflict-with-flip
     */
    placement?: FloatingUIPlacement | 'auto' | `auto-${Alignment}`;
    /**
     * When `true` the child component is rendered outside the `ProseMirror`
     * editor. Set this to `false` when you need to render special components
     * (like inputs) which capture events and conflict with the default
     * prosemirror editor.
     *
     * For toolbars which rely on clicks you can leave this as the default.
     *
     * Setting to true will also make scrolling less smooth since it will be using
     * JavaScript to keep track of the position of the element.
     *
     * @defaultValue false
     */
    renderOutsideEditor?: boolean;
    /**
     * Array of middleware objects to modify the positioning or provide data for
     * rendering.
     */
    middleware?: Array<Middleware | null | undefined | false>;
    /**
     * The strategy to use when positioning the floating element.
     */
    strategy?: Strategy;
    /**
     * Portals the floating element into a given container element — by default,
     * outside of the app root and into the body.
     * @see https://floating-ui.com/docs/FloatingPortal
     * @defaultValue false
     * @remarks This is conflict to renderOutsideEditor, and renderOutsideEditor has high priority.
     * And this property will cause the loss of the css variable if you use remirror's internal style
     */
    useFloatingPortal?: boolean | Parameters<typeof FloatingPortal>[0];
}
interface FloatingWrapperProps extends BaseFloatingPositioner {
    /**
     * When true the arrow will be displayed.
     *
     * @defaultValue false
     */
    displayArrow?: boolean;
    animatedClass?: string;
    containerClass?: string;
    floatingLabel?: string;
}
export declare const FloatingWrapper: FC<PropsWithChildren<FloatingWrapperProps>>;
export interface PositionerComponentProps {
    children: ReactNode;
}
/**
 * Render a component into the editors positioner widget using `createPortal`
 * from `react-dom`.
 */
export declare const PositionerPortal: FC<PositionerComponentProps>;
export {};
/**
 * Respond to user queries in the editor.
 */
