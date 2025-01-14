import { __INTERNAL_REMIRROR_IDENTIFIER_KEY__, ExtensionPriority, RemirrorIdentifier } from '@remirror/core-constants';
import type { AnyFunction, Dispose, EmptyShape, GetAcceptUndefined, GetConstructorProps, GetCustomHandler, GetFixed, GetFixedDynamic, GetHandler, GetPartialDynamic, GetStatic, IfNoRequiredProperties, LiteralUnion, MakeUndefined, Primitive, RemoveAnnotations, Replace, Shape, StringKey, UndefinedFlipPartialAndRequired, ValidOptions } from '@remirror/core-types';
import type { OnSetOptionsProps } from '../types';
declare const IGNORE = "__IGNORE__";
declare const GENERAL_OPTIONS: "__ALL__";
export declare abstract class BaseClass<Options extends ValidOptions = EmptyShape, DefaultStaticOptions extends Shape = EmptyShape> {
    /**
     * The default options for this extension.
     *
     * TODO see if this can be cast to something other than any and allow
     * composition.
     */
    static readonly defaultOptions: any;
    /**
     * The static keys for this class.
     */
    static readonly staticKeys: string[];
    /**
     * The event handler keys.
     */
    static readonly handlerKeys: string[];
    /**
     * Customize the way the handler should behave.
     */
    static handlerKeyOptions: Partial<Record<string, HandlerKeyOptions> & {
        [GENERAL_OPTIONS]?: HandlerKeyOptions;
    }>;
    /**
     * The custom keys.
     */
    static readonly customHandlerKeys: string[];
    /**
     * This is not for external use. It is purely here for TypeScript inference of
     * the generic `Options` type parameter.
     *
     * @internal
     */
    ['~O']: Options & DefaultStaticOptions;
    /**
     * This identifies this as a `Remirror` object. .
     * @internal
     */
    abstract readonly [__INTERNAL_REMIRROR_IDENTIFIER_KEY__]: RemirrorIdentifier;
    /**
     * The unique name of this extension.
     *
     * @remarks
     *
     * Every extension **must** have a name. The name should have a distinct type
     * to allow for better type inference for end users. By convention the name
     * should be `camelCased` and unique within your editor instance.
     *
     * ```ts
     * class SimpleExtension extends Extension {
     *   get name() {
     *     return 'simple' as const;
     *   }
     * }
     * ```
     */
    abstract get name(): string;
    /**
     * The options for this extension.
     *
     * @remarks
     *
     * Options are composed of Static, Dynamic, Handlers and ObjectHandlers.
     *
     * - `Static` - set at instantiation by the constructor.
     * - `Dynamic` - optionally set at instantiation by the constructor and also
     *   set during the runtime.
     * - `Handlers` - can only be set during the runtime.
     * - `ObjectHandlers` - Can only be set during the runtime of the extension.
     */
    get options(): RemoveAnnotations<GetFixed<Options> & DefaultStaticOptions>;
    /**
     * Get the dynamic keys for this extension.
     */
    get dynamicKeys(): string[];
    /**
     * The options that this instance was created with, merged with all the
     * default options.
     */
    get initialOptions(): RemoveAnnotations<GetFixed<Options> & DefaultStaticOptions>;
    /**
     * The initial options at creation (used to reset).
     */
    private readonly _initialOptions;
    /**
     * All the dynamic keys supported by this extension.
     */
    private readonly _dynamicKeys;
    /**
     * Private instance of the extension options.
     */
    private _options;
    /**
     * The mapped function handlers.
     */
    private _mappedHandlers;
    constructor(defaultOptions: DefaultStaticOptions, ...[options]: ConstructorProps<Options, DefaultStaticOptions>);
    /**
     * This method is called by the extension constructor. It is not strictly a
     * lifecycle method since at this point the manager has not yet been
     * instantiated.
     *
     * @remarks
     *
     * It should be used instead of overriding the constructor which is strongly
     * advised against.
     *
     * There are some limitations when using this method.
     *
     * - Accessing `this.store` will throw an error since the manager hasn't been
     *   created and it hasn't yet been attached to the extensions.
     * - `this.type` in `NodeExtension` and `MarkExtension` will also throw an
     *   error since the schema hasn't been created yet.
     *
     * You should use this to setup any instance properties with the options
     * provided to the extension.
     */
    protected init(): void;
    /**
     * Clone the current instance with the provided options. If nothing is
     * provided it uses the same initial options as the current instance.
     */
    abstract clone(...parameters: ConstructorProps<Options, DefaultStaticOptions>): BaseClass<Options, DefaultStaticOptions>;
    /**
     * Get the dynamic keys for this extension.
     */
    private getDynamicKeys;
    /**
     * Throw an error if non dynamic keys are updated.
     */
    private ensureAllKeysAreDynamic;
    /**
     * Update the properties with the provided partial value when changed.
     */
    setOptions(update: GetPartialDynamic<Options>): void;
    /**
     * Reset the extension properties to their default values.
     *
     * @nonVirtual
     */
    resetOptions(): void;
    /**
     * Override this to receive updates whenever the options have been updated on
     * this instance. This method is called after the updates have already been
     * applied to the instance. If you need more control over exactly how the
     * option should be applied you should set the option to be `Custom`.
     *
     * **Please Note**:
     *
     * This must be defined as a instance method and not a property since it is
     * called in the constructor.
     *
     * ```ts
     * class ThisPreset extends Preset {
     *   // GOOD ✅
     *   onSetOptions(props: OnSetOptionsProps<Options>) {}
     *
     *    // BAD ❌
     *   onSetOptions = (props: OnSetOptionsProps<Options>) => {}
     * }
     * ```
     *
     * @abstract
     */
    protected onSetOptions?(props: OnSetOptionsProps<Options>): void;
    /**
     * Update the private options.
     */
    private getDynamicOptions;
    /**
     * Update the dynamic options.
     */
    private updateDynamicOptions;
    /**
     * Set up the mapped handlers object with default values (an empty array);
     */
    private populateMappedHandlers;
    /**
     * This is currently fudged together, I'm not sure it will work.
     */
    private createDefaultHandlerOptions;
    /**
     * Add a handler to the event handlers so that it is called along with all the
     * other handler methods.
     *
     * This is helpful for integrating react hooks which can be used in multiple
     * places. The original problem with fixed properties is that you can only
     * assign to a method once and it overwrites any other methods. This pattern
     * for adding handlers allows for multiple usages of the same handler in the
     * most relevant part of the code.
     *
     * More to come on this pattern.
     *
     * @nonVirtual
     */
    addHandler<Key extends keyof GetHandler<Options>>(key: Key, method: GetHandler<Options>[Key], priority?: ExtensionPriority): Dispose;
    /**
     * Determines if handlers exist for the given key.
     *
     * Checking the existence of a handler property directly gives wrong results.
     * `this.options.onHandlerName` is always truthy because it is a reference to
     * the wrapper function that calls each handler.
     *
     * ```ts
     *
     * // GOOD ✅
     * if (!this.hasHandlers('onHandlerName')) {
     *   return;
     * }
     *
     * // BAD ❌
     * if (!this.options.onHandlerName) {
     *   return;
     * }
     * ```
     *
     * @param key The handler to test
     */
    hasHandlers<Key extends keyof GetHandler<Options>>(key: Key): boolean;
    private sortHandlers;
    /**
     * A method that can be used to add a custom handler. It is up to the
     * extension creator to manage the handlers and dispose methods.
     */
    addCustomHandler<Key extends keyof GetCustomHandler<Options>>(key: Key, value: Required<GetCustomHandler<Options>>[Key]): Dispose;
    /**
     * Override this method if you want to set custom handlers on your extension.
     *
     * This must return a dispose function.
     */
    protected onAddCustomHandler?: AddCustomHandler<Options>;
}
/**
 * @internal
 */
export type CustomHandlerMethod<Options extends ValidOptions> = <Key extends keyof GetCustomHandler<Options>>(key: Key, value: Required<GetCustomHandler<Options>>[Key]) => Dispose;
export type AddCustomHandler<Options extends ValidOptions> = (props: Partial<GetCustomHandler<Options>>) => Dispose | undefined;
export type AddHandler<Options extends ValidOptions> = <Key extends keyof GetHandler<Options>>(key: Key, method: GetHandler<Options>[Key]) => Dispose;
/**
 * TODO see if this is needed or remove.
 */
export type AddHandlers<Options extends ValidOptions> = (props: Partial<GetHandler<Options>>) => Dispose;
export interface HandlerKeyOptions<ReturnType = any, Args extends any[] = any[]> {
    /**
     * When this value is encountered the handler will exit early.
     *
     * Set the value to `'__IGNORE__'` to ignore the early return value.
     */
    earlyReturnValue?: LiteralUnion<typeof IGNORE, Primitive> | ((value: unknown) => boolean);
    /**
     * Allows combining the values from the handlers together to produce a single
     * reduced output value.
     */
    reducer?: {
        /**
         * Combine the value with the the previous value
         */
        accumulator: (accumulated: ReturnType, latestValue: ReturnType, ...args: Args) => ReturnType;
        /**
         * The a function that returns the default value for combined handler
         * values. This is required for setting up a default value.
         */
        getDefault: (...args: Args) => ReturnType;
    };
}
export interface BaseClass<Options extends ValidOptions, DefaultStaticOptions extends Shape = EmptyShape> {
    constructor: BaseClassConstructor<Options, DefaultStaticOptions>;
}
export interface BaseClassConstructor<Options extends ValidOptions = EmptyShape, DefaultStaticOptions extends Shape = EmptyShape> extends Function {
    new (...args: ConstructorProps<Options, DefaultStaticOptions>): any;
    /**
     * The identifier for the constructor which can determine whether it is a node
     * constructor, mark constructor or plain constructor.
     * @internal
     */
    readonly [__INTERNAL_REMIRROR_IDENTIFIER_KEY__]: RemirrorIdentifier;
    /**
     * Defines the `defaultOptions` for all extension instances.
     *
     * @remarks
     *
     * Once set it can't be updated during run time. Some of the settings are
     * optional and some are not. Any non-required settings must be specified in
     * the `defaultOptions`.
     *
     * **Please note**: There is a slight downside when setting up
     * `defaultOptions`. `undefined` is not supported for partial settings at this
     * point in time. As a workaround use `null` as the type and pass it as the
     * value in the default settings.
     *
     * @defaultValue {}
     *
     * @internal
     */
    readonly defaultOptions: DefaultOptions<Options, DefaultStaticOptions>;
    /**
     * An array of the keys that are static for this extension.
     *
     * This is actually currently unused, but might become useful in the future.
     * An auto-fix lint rule will be added should that be the case.
     */
    readonly staticKeys: string[];
    /**
     * An array of all the keys which correspond to the the event handler options.
     *
     * This **MUST** be present if you want to use event handlers in your
     * extension.
     *
     * Every key here is automatically removed from the `setOptions` method and is
     * added to the `addHandler` method for adding new handlers. The
     * `this.options[key]` is automatically replaced with a method that combines
     * all the handlers into one method that can be called effortlessly. All this
     * work is done for you.
     */
    readonly handlerKeys: string[];
    /**
     * Customize the way the handler should behave.
     */
    readonly handlerKeyOptions: Partial<Record<string, HandlerKeyOptions> & {
        __ALL__?: HandlerKeyOptions;
    }>;
    /**
     * A list of the custom keys in the extension or preset options.
     */
    readonly customHandlerKeys: string[];
}
export type AnyBaseClassConstructor = Replace<BaseClassConstructor<any, any>, {
    new (...args: any[]): AnyFunction;
}>;
/**
 * Auto infers the parameter for the constructor. If there is a required static
 * option then the TypeScript compiler will error if nothing is passed in.
 */
export type ConstructorProps<Options extends ValidOptions, DefaultStaticOptions extends Shape> = IfNoRequiredProperties<GetStatic<Options>, [
    options?: GetConstructorProps<Options> & DefaultStaticOptions
], [
    options: GetConstructorProps<Options> & DefaultStaticOptions
]>;
/**
 * Get the expected type signature for the `defaultOptions`. Requires that every
 * optional setting key (except for keys which are defined on the
 * `BaseExtensionOptions`) has a value assigned.
 */
export type DefaultOptions<Options extends ValidOptions, DefaultStaticOptions extends Shape> = MakeUndefined<UndefinedFlipPartialAndRequired<GetStatic<Options>> & Partial<DefaultStaticOptions> & GetFixedDynamic<Options>, StringKey<GetAcceptUndefined<Options>>>;
export interface AnyBaseClassOverrides {
    addCustomHandler: AnyFunction;
    addHandler: AnyFunction;
    clone: AnyFunction;
}
export {};
