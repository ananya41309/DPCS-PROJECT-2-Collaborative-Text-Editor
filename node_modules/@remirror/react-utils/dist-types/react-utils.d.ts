import { Fragment, ReactElement, ReactNode } from 'react';
import type { AnyFunction, UnknownShape } from '@remirror/core-types';
/**
 * A drop in replacement for built in React.isValidElement which accepts a test value of any type
 *
 * @param value - the value to check
 */
export declare function isValidElement<Props extends object = any>(value: unknown): value is ReactElement<Props>;
/**
 * Check whether a react node is a built in dom element (i.e. `div`, `span`)
 *
 * @param value - the value to check
 */
export declare function isReactDOMElement<Props extends object = any>(value: unknown): value is ReactElement<Props> & {
    type: string;
};
/**
 * Checks whether the element is a react fragment
 *
 * @param value - the value to check
 */
export declare function isReactFragment<Props extends object = any>(value: unknown): value is ReactElement<Props> & {
    type: typeof Fragment;
};
/**
 * Retrieve the element props for JSX Element
 *
 * @param element
 */
export declare function getElementProps<Type = UnknownShape>(element: JSX.Element): UnknownShape & Type & {
    children: JSX.Element;
};
/**
 * Will throw an error if the child provided is not a function.
 *
 * @remarks
 * This is currently used in the remirror component to throw an error when the element children
 * are not a render prop. It should be called outside of render for class Components.
 *
 * @param prop - the prop to test
 */
export declare const propIsFunction: (value: unknown) => value is AnyFunction;
/**
 * Add the specified key to an element when it is a valid react element.
 *
 * This is useful when returning an array of components because a fragment isn't sufficient.
 */
export declare function addKeyToElement(element: ReactNode, key: string | number): ReactNode;
