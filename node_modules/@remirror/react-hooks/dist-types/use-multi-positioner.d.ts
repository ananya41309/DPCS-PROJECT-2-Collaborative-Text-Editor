import { RefCallback } from 'react';
import { PositionerParam, PositionerPosition } from '@remirror/extension-positioner';
export interface UseMultiPositionerReturn<Data = any> extends PositionerPosition {
    /**
     * This ref must be applied to the component that is being positioned in order
     * to correctly obtain the position data.
     */
    ref: RefCallback<HTMLElement>;
    /**
     * The element that the ref has found.
     */
    element?: HTMLElement;
    /**
     * A key to uniquely identify this positioner. This can be applied to the
     * react element.
     */
    key: string;
    /**
     * Metadata associated with the position
     */
    data: Data;
}
/**
 * A positioner for your editor. This returns an array of active positions and
 * is useful for tracking the positions of multiple items in the editor.
 *
 * ```ts
 * import { Positioner } from 'remirror/extensions';
 * import { useMultiPositioner } from '@remirror/react';
 *
 * const positioner = Positioner.create({
 *   ...config, // custom config
 * })
 *
 * const MenuComponent: FC = () => {
 *   const positions = usePositioner(positioner, []);
 *
 *   return (
 *     <>
 *       {
 *         positions.map(({ ref, bottom, left, key }) => (
 *           <div style={{ bottom, left }} ref={ref} key={key}>
 *             <MenuIcon {...options} />
 *           </div>
 *         )
 *       }
 *     </>
 *   )
 * };
 * ```
 *
 * @param positioner - the positioner which will be used
 * @param deps - an array of dependencies which will cause the hook to rerender
 * with an updated positioner. This is the only way to update the positioner.
 */
export declare function useMultiPositioner<Data = any>(positioner: PositionerParam, deps: unknown[]): Array<UseMultiPositionerReturn<Data>>;
