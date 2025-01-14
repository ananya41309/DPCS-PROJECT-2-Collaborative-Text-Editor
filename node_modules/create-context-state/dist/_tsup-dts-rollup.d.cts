import { ComponentType } from 'react';
import { Context } from 'react';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';

declare type ContextCreator<Context extends object, Props extends object, State> = (helpers: ContextCreatorHelpers<Context, Props, State>) => Context;
export { ContextCreator }
export { ContextCreator as ContextCreator_alias_1 }

declare interface ContextCreatorHelpers<Context extends object, Props extends object, State = undefined> {
    /**
     * Get the context with a partial update.
     */
    get: GetContext<Context>;
    /**
     * Set the context with a partial update.
     */
    set: SetContext<Context>;
    /**
     * The latest value for the provided props.
     */
    props: Props;
    /**
     * The previous value for the generated context. This is `undefined` when
     * first rendered.
     */
    previousContext: Context | undefined;
    /**
     * The state provided by the custom hook.
     */
    state: State;
}
export { ContextCreatorHelpers }
export { ContextCreatorHelpers as ContextCreatorHelpers_alias_1 }

declare interface ContextHook<Ctx extends object> {
    (): Ctx;
    <SelectedValue>(selector: ContextSelector<Ctx, SelectedValue>, equalityFn?: EqualityChecker<SelectedValue>): SelectedValue;
}
export { ContextHook }
export { ContextHook as ContextHook_alias_1 }

export declare function contextHookFactory<Ctx extends object>(DefaultContext: Context<Ctx | null>): ContextHook<Ctx>;

export declare type ContextSelector<Ctx extends object, SelectedValue> = (state: Ctx) => SelectedValue;

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
declare function createContextHook<Ctx extends object, Props extends PropsWithChildren<object> = PropsWithChildren<object>>(useHook: UseHook<Ctx, Props>): CreateContextReturn<Ctx, Props>;
export { createContextHook }
export { createContextHook as createContextHook_alias_1 }

declare type CreateContextReturn<Ctx extends object, Props extends object = object> = [
Provider: ComponentType<PropsWithChildren<Props>>,
hook: ContextHook<Ctx>,
DefaultContext: Context<Ctx | null>
];
export { CreateContextReturn }
export { CreateContextReturn as CreateContextReturn_alias_1 }

/**
 * Create a context and provider with built in setters and getters.
 *
 * ```tsx
 * import { createContextState } from 'create-context-state';
 *
 * interface Context {
 *   count: number;
 *   increment: () => void;
 *   decrement: () => void;
 *   reset: () => void;
 * }
 *
 * interface Props {
 *   defaultCount: number;
 * }
 *
 * const [CountProvider, useCount] = createContextState<Context, Props>(({ set, props }) => ({
 *   count: previousContext?.count ?? props.defaultCount,
 *   increment: () => set((state) => ({ count: state.count + 1 })),
 *   decrement: () => set((state) => ({ count: state.count - 1 })),
 *   reset: () => set({ count: props.defaultCount }),
 * }));
 *
 * const App = () => {
 *   return (
 *     <CountProvider>
 *       <Counter />
 *     </CountProvider>
 *   );
 * };
 *
 * const Counter = () => {
 *   const { count, increment, decrement, reset } = useCount();
 *
 *   return (
 *     <>
 *       <h1>{count}</h1>
 *       <button onClick={() => increment()}>+</button>
 *       <button onClick={() => decrement()}>-</button>
 *       <button onClick={() => reset()}>reset</button>
 *     </>
 *   );
 * };
 * ```
 *
 * @typeParam Context - The type of the context that is returned from the
 * `useContext` hook.
 * @typeParam Props - The optional props that are passed through to the
 * `Provider`.
 * @typeParam State - Additional state which can be captured via hooks.
 *
 * @param creator - A function used to create the desired context.
 * @param hook - An optional hook which can be used to provide additional state
 * to use in the creator function. Using hooks which rely on context will
 * constrain the returned `Provider` function to only be used in scenarios where
 * the the context is available. Make sure to memoize any exotic values (objects
 * and arrays) returned from the hook or your code will infinitely render.
 */
declare function createContextState<Context extends object, Props extends object = object>(creator: ContextCreator<Context, Props, undefined>): CreateContextReturn<Context, Props>;

declare function createContextState<Context extends object, Props extends object, State>(creator: ContextCreator<Context, Props, State>, hook: NamedHook<Props, State>): CreateContextReturn<Context, Props>;
export { createContextState }
export { createContextState as createContextState_alias_1 }

export declare type EqualityChecker<SelectedValue> = (selectedValue: SelectedValue, newSelectedValue: unknown) => boolean;

declare interface GetContext<Context extends object> {
    (): Context;
    <SelectedValue>(selector: ContextSelector<Context, SelectedValue>): SelectedValue;
}
export { GetContext }
export { GetContext as GetContext_alias_1 }

/**
 * Get the signature for the named hooks.
 */
declare type NamedHook<Props extends object, State> = (props: Props) => State;
export { NamedHook }
export { NamedHook as NamedHook_alias_1 }

declare type PartialContext<Context extends object> = Partial<Context> | ((context: Context) => Partial<Context>);
export { PartialContext }
export { PartialContext as PartialContext_alias_1 }

declare type SetContext<Context extends object> = (partial: PartialContext<Context>) => void;
export { SetContext }
export { SetContext as SetContext_alias_1 }

/**
 * Split but don't allow empty string.
 */
export declare type Split<Input extends string, Splitter extends string> = Input extends `${infer T}${Splitter}${infer Rest}` ? '' extends T ? [...Split<Rest, Splitter>] : [T, ...Split<Rest, Splitter>] : [Input];

export declare type SplitEmpty<Input extends string, Splitter extends string> = Input extends `${infer T}${Splitter}${infer Rest}` ? [T, ...Split<Rest, Splitter>] : [Input];

declare type UseHook<Context extends object, Props extends object = object> = (props: Props) => Context;

export declare const useIsomorphicLayoutEffect: typeof React_2.useLayoutEffect;

export { }
