/**
 * @module
 *
 * Taken from
 * https://github.com/react-icons/react-icons/blob/10199cca7abeb3efbc647090714daa279da45779/packages/react-icons/src/iconBase.tsx#L1-L62
 */
import { ReactNode, SVGAttributes } from 'react';
import * as Icons from '@remirror/icons';
import { IconTree } from '@remirror/icons';
/**
 * A higher order component which creates the Icon component.
 */
export declare function GenIcon(tree: IconTree[], viewBox?: string): IconType;
export interface IconProps extends IconBaseProps {
    /**
     * The name of the core icon to use.
     */
    name: Icons.CoreIcon;
}
/**
 * Dynamic icons for the remirror codebase..
 */
export declare const Icon: (props: IconProps) => JSX.Element;
export interface IconBaseProps extends SVGAttributes<SVGElement> {
    children?: ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export type IconType = (props: IconBaseProps) => JSX.Element;
/**
 * The base icon as an svg with the icon context available
 */
export declare const IconBase: (props: IconBaseProps) => JSX.Element;
