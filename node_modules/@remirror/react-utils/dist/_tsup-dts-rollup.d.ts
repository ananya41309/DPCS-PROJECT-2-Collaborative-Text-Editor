import type { AnyFunction } from '@remirror/core-types';
import { Fragment } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import type { UnknownShape } from '@remirror/core-types';

/**
 * Add the specified key to an element when it is a valid react element.
 *
 * This is useful when returning an array of components because a fragment isn't sufficient.
 */
declare function addKeyToElement(element: ReactNode, key: string | number): ReactNode;
export { addKeyToElement }
export { addKeyToElement as addKeyToElement_alias_1 }

/**
 * Retrieve the element props for JSX Element
 *
 * @param element
 */
declare function getElementProps<Type = UnknownShape>(element: JSX.Element): UnknownShape & Type & {
    children: JSX.Element;
};
export { getElementProps }
export { getElementProps as getElementProps_alias_1 }

/**
 * Check whether a react node is a built in dom element (i.e. `div`, `span`)
 *
 * @param value - the value to check
 */
declare function isReactDOMElement<Props extends object = any>(value: unknown): value is ReactElement<Props> & {
    type: string;
};
export { isReactDOMElement }
export { isReactDOMElement as isReactDOMElement_alias_1 }

/**
 * Checks whether the element is a react fragment
 *
 * @param value - the value to check
 */
declare function isReactFragment<Props extends object = any>(value: unknown): value is ReactElement<Props> & {
    type: typeof Fragment;
};
export { isReactFragment }
export { isReactFragment as isReactFragment_alias_1 }

/**
 * A drop in replacement for built in React.isValidElement which accepts a test value of any type
 *
 * @param value - the value to check
 */
declare function isValidElement<Props extends object = any>(value: unknown): value is ReactElement<Props>;
export { isValidElement }
export { isValidElement as isValidElement_alias_1 }

/**
 * Will throw an error if the child provided is not a function.
 *
 * @remarks
 * This is currently used in the remirror component to throw an error when the element children
 * are not a render prop. It should be called outside of render for class Components.
 *
 * @param prop - the prop to test
 */
declare const propIsFunction: (value: unknown) => value is AnyFunction;
export { propIsFunction }
export { propIsFunction as propIsFunction_alias_1 }

export { }
