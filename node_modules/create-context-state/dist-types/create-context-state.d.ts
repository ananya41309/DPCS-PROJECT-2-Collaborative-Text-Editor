import { ContextSelector, CreateContextReturn } from './create-context-hook';
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
export declare function createContextState<Context extends object, Props extends object = object>(creator: ContextCreator<Context, Props, undefined>): CreateContextReturn<Context, Props>;
export declare function createContextState<Context extends object, Props extends object, State>(creator: ContextCreator<Context, Props, State>, hook: NamedHook<Props, State>): CreateContextReturn<Context, Props>;
export interface GetContext<Context extends object> {
    (): Context;
    <SelectedValue>(selector: ContextSelector<Context, SelectedValue>): SelectedValue;
}
export type PartialContext<Context extends object> = Partial<Context> | ((context: Context) => Partial<Context>);
export type SetContext<Context extends object> = (partial: PartialContext<Context>) => void;
/**
 * Get the signature for the named hooks.
 */
export type NamedHook<Props extends object, State> = (props: Props) => State;
export interface ContextCreatorHelpers<Context extends object, Props extends object, State = undefined> {
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
export type ContextCreator<Context extends object, Props extends object, State> = (helpers: ContextCreatorHelpers<Context, Props, State>) => Context;
