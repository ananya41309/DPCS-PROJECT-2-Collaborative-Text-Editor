/**
 * @module
 *
 * Taken from
 * https://github.com/react-icons/react-icons/blob/10199cca7abeb3efbc647090714daa279da45779/packages/react-icons/src/iconContext.tsx#L1-L19
 */
import { Context, CSSProperties, SVGAttributes } from 'react';
export interface IconContext {
    color?: string;
    size?: string;
    className?: string;
    style?: CSSProperties;
    attr?: SVGAttributes<SVGElement>;
}
export declare const DefaultContext: IconContext;
export declare const IconContext: Context<IconContext>;
export declare const IconProvider: import("react").Provider<IconContext>;
