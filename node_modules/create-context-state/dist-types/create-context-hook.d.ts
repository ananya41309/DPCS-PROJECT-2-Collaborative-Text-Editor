import React, { ComponentType, Context, PropsWithChildren } from 'react';
/**
 * Create a `Provider` and `useContext` retriever with a custom hook.
 *
 * This can be used to create
 *
 * ```tsx
 * import { useState, useEffect } from 'react';
 * import { createContextHook } from 'create-context-state'
 *
 * interface Props {
 *   defaultCount: number;
 * }
 *
 * interface Context {
 *   count: number;
 *   increment: () => void;
 *   decrement: () => void;
 *   reset: () => void;
 * }
 *
 * const [CountProvider, useCountStore] = createContextHook<Context, Props>((props) => {
 *   const { defaultCount } = props;
 *
 *   const [context, setContext] = useState(() => {
 *     return {
 *       count: defaultCount,
 *       increment: () => setContext(value => ({...previous, count: previous.count + 1 })),
 *       decrement: () => setContext(previous => ({...previous, count: previous.count - 1 })),
 *       reset: () => setContext(previous => ({...previous, count: defaultCount })),
 *     }
 *   });
 *
 *   useEffect(() => {
 *     setContext((previousContext) => ({
 *       ...previousContext,
 *       count: defaultCount,
 *       reset: () => setContext(previous => ({...previous, count: defaultCount })),
 *     }));
 *   }, [defaultCount])
 *
 *   return context;
 * })
 *
 * const App = () => {
 *   return (
 *     <CountProvider defaultCount={100}>
 *       <InnerApp />
 *     </FooProvider>
 *   )
 * }
 *
 * const InnerApp = () => {
 *   const { count, increment, decrement, reset } = useCountStore()
 *
 *   return (
 *     <div>
 *       <h1>{count}</h1>
 *       <button onClick={increment}>+</button>
 *       <button onClick={decrement}>-</button>
 *       <button onClick={reset}>reset</button>
 *     </div>
 *   )
 * }
 * ```
 *
 * @typeParam Context - The type of the context that is returned from the
 * `useContext` hook.
 * @typeParam Props - The optional props that are passed through to the `Provider`.
 */
export declare function createContextHook<Ctx extends object, Props extends PropsWithChildren<object> = PropsWithChildren<object>>(useHook: UseHook<Ctx, Props>): CreateContextReturn<Ctx, Props>;
export type CreateContextReturn<Ctx extends object, Props extends object = object> = [
    Provider: ComponentType<PropsWithChildren<Props>>,
    hook: ContextHook<Ctx>,
    DefaultContext: Context<Ctx | null>
];
type UseHook<Context extends object, Props extends object = object> = (props: Props) => Context;
export declare function contextHookFactory<Ctx extends object>(DefaultContext: Context<Ctx | null>): ContextHook<Ctx>;
export type ContextSelector<Ctx extends object, SelectedValue> = (state: Ctx) => SelectedValue;
export type EqualityChecker<SelectedValue> = (selectedValue: SelectedValue, newSelectedValue: unknown) => boolean;
export interface ContextHook<Ctx extends object> {
    (): Ctx;
    <SelectedValue>(selector: ContextSelector<Ctx, SelectedValue>, equalityFn?: EqualityChecker<SelectedValue>): SelectedValue;
}
/**
 * Split but don't allow empty string.
 */
export type Split<Input extends string, Splitter extends string> = Input extends `${infer T}${Splitter}${infer Rest}` ? '' extends T ? [...Split<Rest, Splitter>] : [T, ...Split<Rest, Splitter>] : [Input];
export type SplitEmpty<Input extends string, Splitter extends string> = Input extends `${infer T}${Splitter}${infer Rest}` ? [T, ...Split<Rest, Splitter>] : [Input];
export declare const useIsomorphicLayoutEffect: typeof React.useLayoutEffect;
export {};
