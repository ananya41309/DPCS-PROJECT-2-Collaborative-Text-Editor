import type { DependencyList, Dispatch, EffectCallback, MutableRefObject } from 'react';
import type { GetA11yStatusMessage, ItemsToString, MultishiftA11yIdProps, MultishiftProps, MultishiftRootActions, MultishiftState } from './multishift-types';
import { GetElementIds } from './multishift-utils';
/**
 * Creates the reducer for managing the multishift internal state.
 */
export declare function useMultishiftReducer<Item = any>(props: MultishiftProps<Item>): [MultishiftState<Item>, Dispatch<MultishiftRootActions<Item>>];
/**
 * Creates the ids for identifying the elements in the app.
 */
export declare function useElementIds(props: MultishiftA11yIdProps): GetElementIds;
interface UseElementRefs {
    toggleButton: MutableRefObject<HTMLElement | undefined>;
    input: MutableRefObject<HTMLElement | undefined>;
    menu: MutableRefObject<HTMLElement | undefined>;
    comboBox: MutableRefObject<HTMLElement | undefined>;
    items: MutableRefObject<HTMLElement[]>;
    ignored: MutableRefObject<HTMLElement[]>;
}
/**
 * Get the element references.
 */
export declare function useElementRefs(): UseElementRefs;
interface UseSetA11yProps<Item = any> {
    state: MultishiftState<Item>;
    items: Item[];
    itemsToString?: ItemsToString<Item>;
    getA11yStatusMessage?: GetA11yStatusMessage<Item>;
    customA11yStatusMessage?: string;
}
export declare function useSetA11y<Item = any>(props: UseSetA11yProps<Item>): void;
/**
 * This is a hook that listens for events mouse and touch events.
 *
 * When something does occur outside of the registered elements it will dispatch
 * the relevant action.
 */
export declare function useOuterEventListener<Item = any>(refs: ReturnType<typeof useElementRefs>, state: MultishiftState<Item>, { outerMouseUp, outerTouchEnd }: {
    outerMouseUp: () => void;
    outerTouchEnd: () => void;
}): MutableRefObject<{
    isMouseDown: boolean;
    isTouchMove: boolean;
    lastBlurred: HTMLElement | undefined;
}>;
/**
 * A hook for managing multiple timeouts.
 *
 * @remarks
 *
 * All timeouts are automatically cleared when un-mounting.
 */
export declare function useTimeouts(): Readonly<[(fn: () => void, time?: number) => void, () => void]>;
/**
 * React effect hook that ignores the first invocation (e.g. on mount).
 *
 * @remarks
 *
 * The signature is exactly the same as the useEffect hook.
 *
 * ```tsx
 * import React from 'react'
 * import { useEffectOnUpdate } from 'react-use';
 *
 * const Demo = () => {
 *   const [count, setCount] = React.useState(0);
 *
 *   React.useEffect(() => {
 *     const interval = setInterval(() => {
 *       setCount(count => count + 1)
 *     }, 1000)
 *
 *     return () => {
 *       clearInterval(interval)
 *     }
 *   }, [])
 *
 *   useEffectOnUpdate(() => {
 *     log('count', count) // will only show 1 and beyond
 *
 *     return () => { // *OPTIONAL*
 *       // do something on unmount
 *     }
 *   }) // you can include deps array if necessary
 *
 *   return <div>Count: {count}</div>
 * };
 * ```
 */
export declare function useEffectOnUpdate(effect: EffectCallback, dependencies: DependencyList): void;
/**
 * React lifecycle hook that calls a function when the component will unmount.
 *
 * @remarks
 *
 * Try `useEffectOnce` if you need both a mount and unmount function.
 *
 * ```jsx
 * import {useUnmount} from 'react-use';
 *
 * const Demo = () => {
 *   useUnmount(() => log('UNMOUNTED'));
 *   return null;
 * };
 * ```
 */
export declare function useUnmount(fn: () => void | undefined): void;
export {};
