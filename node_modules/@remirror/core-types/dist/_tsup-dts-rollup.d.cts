import type { __INTERNAL_REMIRROR_IDENTIFIER_KEY__ } from '@remirror/core-constants';
import { And } from '@remirror/types';
import { AnyConstructor } from '@remirror/types';
import { AnyFunction } from '@remirror/types';
import { Array1 } from '@remirror/types';
import { Array2 } from '@remirror/types';
import { Array3 } from '@remirror/types';
import { Asyncify } from '@remirror/types';
import { AsyncReturnType } from '@remirror/types';
import type { AttributeSpec } from '@remirror/pm/model';
import { Brand } from '@remirror/types';
import { CamelCase } from '@remirror/types';
import { Class } from '@remirror/types';
import { CommandFunction } from '@remirror/pm';
import { CommandFunctionProps } from '@remirror/pm';
import { ConditionalExcept } from '@remirror/types';
import { ConditionalKeys } from '@remirror/types';
import { ConditionalPick } from '@remirror/types';
import { ConditionalReturnKeys } from '@remirror/types';
import { ConditionalReturnPick } from '@remirror/types';
import { Coords } from '@remirror/types';
import { Decoration } from '@remirror/pm';
import { Decoration as Decoration_2 } from '@remirror/pm/view';
import { DecorationSet } from '@remirror/pm';
import { DecorationSource } from '@remirror/pm/view';
import { DeepPartial } from '@remirror/types';
import { DeepString } from '@remirror/types';
import { DelimiterCase } from '@remirror/types';
import { Diff } from '@remirror/types';
import { DispatchFunction } from '@remirror/pm';
import { EditorSchema } from '@remirror/pm';
import { EditorState } from '@remirror/pm';
import { EditorView } from '@remirror/pm';
import { EmptyShape } from '@remirror/types';
import { Entries } from '@remirror/types';
import { Entry } from '@remirror/types';
import { Except } from '@remirror/types';
import type { ExtensionPriority } from '@remirror/core-constants';
import { FixedLengthArray } from '@remirror/types';
import { Flavor } from '@remirror/types';
import { Flavoring } from '@remirror/types';
import { FlipPartialAndRequired } from '@remirror/types';
import { Fragment } from '@remirror/pm';
import { Get } from '@remirror/types';
import { GetRequiredKeys } from '@remirror/types';
import { IfEmpty } from '@remirror/types';
import { IfHasRequiredProperties } from '@remirror/types';
import { IfMatches } from '@remirror/types';
import { IfNoRequiredProperties } from '@remirror/types';
import { IndexUnionFromTuple } from '@remirror/types';
import { InputRule } from '@remirror/pm';
import { IterableElement } from '@remirror/types';
import { JsonArray } from '@remirror/types';
import { JsonObject } from '@remirror/types';
import { JsonPrimitive } from '@remirror/types';
import { JsonValue } from '@remirror/types';
import { KebabCase } from '@remirror/types';
import { KeepPartialProperties } from '@remirror/types';
import { Listable } from '@remirror/types';
import { Literal } from '@remirror/types';
import { LiteralUnion } from '@remirror/types';
import { MakeNullable } from '@remirror/types';
import { MakeOptional } from '@remirror/types';
import { MakeReadonly } from '@remirror/types';
import { MakeRequired } from '@remirror/types';
import { MakeUndefined } from '@remirror/types';
import { Mapping } from '@remirror/pm';
import { Mark } from '@remirror/pm';
import type { MarkSpec } from '@remirror/pm/model';
import { MarkType } from '@remirror/pm';
import { Merge } from '@remirror/types';
import { MergeExclusive } from '@remirror/types';
import { MinArray } from '@remirror/types';
import type { NodeSpec } from '@remirror/pm/model';
import { NodeType } from '@remirror/pm';
import { NodeView } from '@remirror/pm';
import { NodeView as NodeView_2 } from '@remirror/pm/view';
import { NonChainableCommandFunction } from '@remirror/pm';
import { NonNullableShape } from '@remirror/types';
import { Nullable } from '@remirror/types';
import { ObjectMark } from '@remirror/types';
import { ObservableLike } from '@remirror/types';
import { Opaque } from '@remirror/types';
import { PackageJson } from '@remirror/types';
import { PartialDeep } from '@remirror/types';
import { PartialWithRequiredKeys } from '@remirror/types';
import { PascalCase } from '@remirror/types';
import { PickPartial } from '@remirror/types';
import { PickRequired } from '@remirror/types';
import { PluginKey } from '@remirror/pm';
import { Predicate } from '@remirror/types';
import { Primitive } from '@remirror/types';
import { Promisable } from '@remirror/types';
import { ProsemirrorAttributes } from '@remirror/types';
import { ProsemirrorCommandFunction } from '@remirror/pm';
import { ProsemirrorNode } from '@remirror/pm';
import { ProsemirrorPlugin } from '@remirror/pm';
import { ReadonlyDeep } from '@remirror/types';
import type { RemirrorIdentifier } from '@remirror/core-constants';
import { RemoveFlavoring } from '@remirror/types';
import { Replace } from '@remirror/types';
import { RequireAtLeastOne } from '@remirror/types';
import { RequireExactlyOne } from '@remirror/types';
import { ResolvedPos } from '@remirror/pm';
import { Selection as Selection_2 } from '@remirror/pm';
import { SetOptional } from '@remirror/types';
import { SetRequired } from '@remirror/types';
import { SetReturnType } from '@remirror/types';
import { Shape } from '@remirror/types';
import { Simplify } from '@remirror/types';
import { Slice } from '@remirror/pm';
import { SnakeCase } from '@remirror/types';
import { StrictReplace } from '@remirror/types';
import { Stringified } from '@remirror/types';
import { StringKey } from '@remirror/types';
import { Transaction } from '@remirror/pm';
import { TsConfigJson } from '@remirror/types';
import { TupleOf } from '@remirror/types';
import { TupleUnion } from '@remirror/types';
import { TupleValue } from '@remirror/types';
import { TypedArray } from '@remirror/types';
import { UndefinedFlipPartialAndRequired } from '@remirror/types';
import { UndefinedPickPartial } from '@remirror/types';
import { UnionToIntersection } from '@remirror/types';
import { UnknownShape } from '@remirror/types';
import { UseDefault } from '@remirror/types';
import { Value } from '@remirror/types';
import { ValueOf } from '@remirror/types';
import { Writable } from '@remirror/types';
import { Writeable } from '@remirror/types';

/**
 * Wrap a type in this to let the `DefaultOptions` know that it can accept
 * undefined as the default value.
 */
declare type AcceptUndefined<Type> = Type & AcceptUndefinedAnnotation;
export { AcceptUndefined }
export { AcceptUndefined as AcceptUndefined_alias_1 }

/**
 * This type is in response to the issue raised
 * [here](https://github.com/remirror/remirror/issues/624). It allows an type to
 * be `undefined`.
 */
declare type AcceptUndefinedAnnotation = Flavoring<'AcceptUndefinedAnnotation'>;

/**
 * A parameter for a non empty selection which defines the anchor (the non
 * movable part of the selection) and the head (the movable part of the
 * selection).
 */
declare interface AnchorHeadProps {
    /**
     * The non-movable part of the selection.
     */
    anchor: number;
    /**
     * The movable part of the selection.
     */
    head: number;
}
export { AnchorHeadProps }
export { AnchorHeadProps as AnchorHeadProps_alias_1 }

export { And }

export { AnyConstructor }

export { AnyFunction }

declare interface ApplySchemaAttributes {
    /**
     * A function which returns the object of defaults. Since this is for extra
     * attributes a default must be provided.
     */
    defaults: () => Record<string, {
        default?: JsonPrimitive;
    }>;
    /**
     * Read a value from the dome and convert it into prosemirror attributes.
     */
    parse: (domNode: Node | string) => ProsemirrorAttributes;
    /**
     * Take the node attributes and create the object of string attributes for
     * storage on the dom node.
     */
    dom: (nodeOrMark: ProsemirrorNode | Mark) => Record<string, string>;
}
export { ApplySchemaAttributes }
export { ApplySchemaAttributes as ApplySchemaAttributes_alias_1 }

export { Array1 }

export { Array2 }

export { Array3 }

export { Asyncify }

export { AsyncReturnType }

/**
 * A parameter builder interface containing the `attrs` property.
 */
declare interface AttributesProps {
    /**
     * An object describing the attrs for a prosemirror mark / node
     */
    attrs: ProsemirrorAttributes;
}
export { AttributesProps }
export { AttributesProps as AttributesProps_alias_1 }

export { Brand }

export { CamelCase }

export { Class }

export { CommandFunction }

export { CommandFunctionProps }

export { ConditionalExcept }

export { ConditionalKeys }

export { ConditionalPick }

export { ConditionalReturnKeys }

export { ConditionalReturnPick }

export { Coords }

/**
 * A handler type which gives you full control of what the handler can do and
 * what is can return.
 *
 * For example with keybindings you will probably receive an object of event
 * handlers which need to be added to the `keymap` plugin. The custom handler
 * annotation allows you to accept functions or objects which return non void
 * values and set upt the handler for yourself.
 *
 * For custom handlers the `option`s value is meaningless and can only be
 * changed through the `addCustomHandler` method.
 */
declare type CustomHandler<Type> = Type & CustomHandlerAnnotation;
export { CustomHandler }
export { CustomHandler as CustomHandler_alias_1 }

declare type CustomHandlerAnnotation = Flavoring<'CustomHandlerAnnotation'>;

declare type CustomHandlerKey<Options extends ValidOptions> = StringKey<GetCustomHandler<Options>>;
export { CustomHandlerKey }
export { CustomHandlerKey as CustomHandlerKey_alias_1 }

declare type CustomHandlerKeyList<Options extends ValidOptions> = Array<CustomHandlerKey<Options>>;
export { CustomHandlerKeyList }
export { CustomHandlerKeyList as CustomHandlerKeyList_alias_1 }

declare type CustomHandlerShape<Type extends Shape> = {
    [Key in keyof Type]: CustomHandler<Type[Key]>;
};
export { CustomHandlerShape }
export { CustomHandlerShape as CustomHandlerShape_alias_1 }

export { Decoration }

export { DecorationSet }

export { DeepPartial }

export { DeepString }

export { DelimiterCase }

export { Diff }

export { DispatchFunction }

/**
 * A function used to cleanup any effects from the `Handler` or `Custom`
 * options.
 *
 * In react you would use the return value from the `addHandler` or `setCustom`
 * as the clean up function for your `useEffect` hooks.
 */
declare type Dispose = () => void;
export { Dispose }
export { Dispose as Dispose_alias_1 }

declare interface DOMCompatibleAttributes {
    [attribute: string]: string | number | undefined;
}
export { DOMCompatibleAttributes }
export { DOMCompatibleAttributes as DOMCompatibleAttributes_alias_1 }

/**
 * Defines the return type of the toDOM methods for both nodes and marks
 *
 * @remarks
 *
 * This differs from the default Prosemirror type definition which seemed didn't
 * work at the time of writing.
 *
 * Additionally we don't want to support domNodes in the toDOM spec since this
 * will create problems once SSR is fully supported
 *
 * DOMOutputSpec is a description of a DOM structure. Can be either a string,
 * which is interpreted as a text node, a DOM node (not supported by remirror),
 * which is interpreted as itself, a {dom: Node, contentDOM: ?Node} object (not
 * supported by remirror), or an array (DOMOutputSpecArray).
 *
 * An array (DOMOutputSpecArray) describes a DOM element. The first value in the
 * array should be a string—the name of the DOM element, optionally prefixed by
 * a namespace URL and a space. If the second element is plain object (DOMCompatibleAttributes),
 * it is interpreted as a set of attributes for the element. Any elements
 * after that (including the 2nd if it's not an attribute object) are
 * interpreted as children of the DOM elements, and must either be valid
 * DOMOutputSpec values, or the number zero.
 *
 * The number zero (pronounced “hole”) is used to indicate the place where a
 * node's child nodes should be inserted. If it occurs in an output spec, it
 * should be the only child element in its parent node.
 */
declare type DOMOutputSpec = string | DOMOutputSpecArray;
export { DOMOutputSpec }
export { DOMOutputSpec as DOMOutputSpec_alias_1 }

declare type DOMOutputSpecArray = [string, ...DOMOutputSpec[]] | [string, DOMCompatibleAttributes, ...DOMOutputSpec[]] | [string, 0] | [string, DOMCompatibleAttributes, 0];

/**
 * Wrap an option in this type to indicate to the TypeScript compiler that it is
 * a dynamic property. It can be set through the constructor parameter at
 * instantiation and can by updated throughout the lifetime of your editor.
 *
 * @remarks
 *
 * This is the default type assumed and it can be left unused.
 *
 * ```ts
 * import { Dynamic, PlainExtension } from 'remirror';
 *
 * interface MyExtensionOptions {
 *   isSwitchedOn: Dynamic<boolean>;
 * }
 *
 * export class MyExtension extends PlainExtension<MyExtensionOptions> {
 *   get name() {
 *     return 'my' as const';
 *   }
 * }
 *
 * new extension = new MyExtension({ isSwitchedOn: false });
 * extension.setOptions({ isSwitchedOn: true });
 * ```
 */
declare type Dynamic<Type> = Type & DynamicAnnotation;
export { Dynamic }
export { Dynamic as Dynamic_alias_1 }

declare type DynamicAnnotation = Flavoring<'DynamicAnnotation'>;

/**
 * A dynamic attributes creator. This is used to create attributes that are
 * dynamically set when a node is first added to the dom.
 */
declare type DynamicAttributeCreator = (nodeOrMark: ProsemirrorNode | Mark) => JsonPrimitive;
export { DynamicAttributeCreator }
export { DynamicAttributeCreator as DynamicAttributeCreator_alias_1 }

declare type DynamicKey<Options extends ValidOptions> = StringKey<GetDynamic<Options>>;
export { DynamicKey }
export { DynamicKey as DynamicKey_alias_1 }

declare type DynamicKeyList<Options extends ValidOptions> = Array<DynamicKey<Options>>;
export { DynamicKeyList }
export { DynamicKeyList as DynamicKeyList_alias_1 }

declare type DynamicShape<Type extends object> = {
    [Key in keyof Type]: Dynamic<Type[Key]>;
};
export { DynamicShape }
export { DynamicShape as DynamicShape_alias_1 }

export { EditorSchema }

export { EditorState }

/**
 * A parameter builder interface containing the `state` property.
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare interface EditorStateProps {
    /**
     * A snapshot of the prosemirror editor state.
     */
    state: EditorState;
}
export { EditorStateProps }
export { EditorStateProps as EditorStateProps_alias_1 }

export { EditorView }

/**
 * A parameter builder interface containing the `view` property.
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare interface EditorViewProps {
    /**
     * An instance of the Prosemirror editor `view`.
     */
    view: EditorView;
}
export { EditorViewProps }
export { EditorViewProps as EditorViewProps_alias_1 }

export { EmptyShape }

export { Entries }

export { Entry }

export { Except }

export { FixedLengthArray }

export { Flavor }

export { Flavoring }

export { FlipPartialAndRequired }

export { Fragment }

/**
 * A parameter builder interface describing a `from`/`to` range.
 */
declare interface FromToProps {
    /**
     * The starting position in the document.
     */
    from: number;
    /**
     * The ending position in the document.
     */
    to: number;
}
export { FromToProps }
export { FromToProps as FromToProps_alias_1 }

export { Get }

/**
 * Get the properties that accept undefined as a default.
 */
declare type GetAcceptUndefined<Options extends Shape> = ConditionalPick<Options, AcceptUndefinedAnnotation> & Partial<ConditionalPick<PickPartial<Options>, AcceptUndefinedAnnotation>>;
export { GetAcceptUndefined }
export { GetAcceptUndefined as GetAcceptUndefined_alias_1 }

/**
 * A function which takes a regex match array (strings) or a single string match
 * and transforms it into an `Attributes` object.
 */
declare type GetAttributes = ProsemirrorAttributes | GetAttributesFunction;
export { GetAttributes }
export { GetAttributes as GetAttributes_alias_1 }

/**
 * The matches array. `matches[0]` is the full match.
 */
declare type GetAttributesFunction = (matches: string[]) => ProsemirrorAttributes | undefined;

declare interface GetAttributesProps {
    /**
     * A helper function for setting the attributes for a transformation .
     */
    getAttributes: GetAttributes;
}
export { GetAttributesProps }
export { GetAttributesProps as GetAttributesProps_alias_1 }

/**
 * The options that can be passed into a constructor.
 */
declare type GetConstructorProps<Options extends ValidOptions> = GetStatic<Options> & GetDynamic<Options>;
export { GetConstructorProps }
export { GetConstructorProps as GetConstructorProps_alias_1 }

/**
 * Get the object event handler `Options` from the options type.
 */
declare type GetCustomHandler<Options extends Shape> = ConditionalPick<Options, CustomHandlerAnnotation> & Partial<ConditionalPick<PickPartial<Options>, CustomHandlerAnnotation>>;
export { GetCustomHandler }
export { GetCustomHandler as GetCustomHandler_alias_1 }

/**
 * Get the dynamic `Options` from the options type.
 */
declare type GetDynamic<Options extends Shape> = Omit<ConditionalExcept<Options, Exclude<Remirror.ValidOptionsExtender[keyof Remirror.ValidOptionsExtender], DynamicAnnotation>>, keyof ConditionalPick<PickPartial<Options>, Exclude<Remirror.ValidOptionsExtender[keyof Remirror.ValidOptionsExtender], DynamicAnnotation>>>;
export { GetDynamic }
export { GetDynamic as GetDynamic_alias_1 }

declare type GetFixed<Options extends ValidOptions> = Readonly<Required<Options>>;
export { GetFixed }
export { GetFixed as GetFixed_alias_1 }

declare type GetFixedCustomHandler<Options extends ValidOptions> = Readonly<Required<GetCustomHandler<Options>>>;
export { GetFixedCustomHandler }
export { GetFixedCustomHandler as GetFixedCustomHandler_alias_1 }

declare type GetFixedDynamic<Options extends ValidOptions> = Readonly<Required<GetDynamic<Options>>>;
export { GetFixedDynamic }
export { GetFixedDynamic as GetFixedDynamic_alias_1 }

declare type GetFixedProps<Options extends ValidOptions> = GetFixedDynamic<Options> & GetFixedStatic<Options>;
export { GetFixedProps }
export { GetFixedProps as GetFixedProps_alias_1 }

declare type GetFixedStatic<Options extends ValidOptions> = Readonly<Required<GetStatic<Options>>>;
export { GetFixedStatic }
export { GetFixedStatic as GetFixedStatic_alias_1 }

declare type GetFlippedStatic<Options extends ValidOptions> = FlipPartialAndRequired<Options>;
export { GetFlippedStatic }
export { GetFlippedStatic as GetFlippedStatic_alias_1 }

/**
 * Get the event handler `Options` from the options type.
 */
declare type GetHandler<Options extends Shape> = ConditionalPick<Options, HandlerAnnotation> & Partial<ConditionalPick<PickPartial<Options>, HandlerAnnotation>>;
export { GetHandler }
export { GetHandler as GetHandler_alias_1 }

declare type GetMappedCustomHandler<Options extends ValidOptions> = {
    [Key in keyof GetCustomHandler<Options>]: Array<GetCustomHandler<Options>[Key]>;
};
export { GetMappedCustomHandler }
export { GetMappedCustomHandler as GetMappedCustomHandler_alias_1 }

declare type GetMappedHandler<Options extends ValidOptions> = {
    [Key in keyof GetHandler<Options>]: Array<[
    priority: ExtensionPriority,
    handler: GetHandler<Options>[Key]
    ]>;
};
export { GetMappedHandler }
export { GetMappedHandler as GetMappedHandler_alias_1 }

declare type GetPartialDynamic<Options extends ValidOptions> = Partial<GetDynamic<Options>>;
export { GetPartialDynamic }
export { GetPartialDynamic as GetPartialDynamic_alias_1 }

export { GetRequiredKeys }

/**
 * Get the static `Options` from the options type.
 */
declare type GetStatic<Options extends Shape> = ConditionalPick<Options, StaticAnnotation> & Partial<ConditionalPick<PickPartial<Options>, StaticAnnotation>>;
export { GetStatic }
export { GetStatic as GetStatic_alias_1 }

/**
 * Options excluding the handlers.
 */
declare type GetStaticAndDynamic<Options extends Shape> = GetDynamic<Options> & GetStatic<Options>;
export { GetStaticAndDynamic }
export { GetStaticAndDynamic as GetStaticAndDynamic_alias_1 }

/**
 * A handler is a callback provided by the user to respond to events from your
 * extension. Often times it's helpful to be able to consume a handler in
 * multiple places. Remirror can help automate the registration of handlers that
 * can be consumed multiple times.
 *
 * @remarks
 *
 * Use this type to annotate a method in your options as an event handler. This
 * will tell the TypeScript compiler to include this event in the relevant
 * methods for composing events together.
 *
 * To automate the creation of handler code you will also need to set the
 * `handlerKeys` static property for your `Extension` or `Preset` to be an array
 * with the keys you've annotated as a handler. An **eslint** rule will be
 * created to automate this.
 *
 * ```ts
 * import { PlainExtension, extension } from 'remirror';
 * interface CustomOptions {
 *   simple: boolean; // Automatically a dynamic property
 *   onChange: Handler<(value: string) => void>;
 * }
 *
 * @extension({ handlerKeys: ['onChange'] }) class CustomExtension
 * extends PlainExtension<CustomOptions> {get name() {return 'custom' as const;
 *   }
 * }
 *
 * // No prompt to include the `onChange` handler due to the annotation. const
 * extension = new CustomExtension({simple: false});
 *
 * const dispose = extension.addHandlers('onChange', (value) => {sideEffect();
 * });
 *
 * // Later
 *
 * dispose();
 * ```
 */
declare type Handler<Type extends AnyFunction<void>> = Type & HandlerAnnotation;
export { Handler }
export { Handler as Handler_alias_1 }

declare type HandlerAnnotation = Flavoring<'HandlerAnnotation'>;

declare type HandlerKey<Options extends ValidOptions> = StringKey<GetHandler<Options>>;
export { HandlerKey }
export { HandlerKey as HandlerKey_alias_1 }

declare type HandlerKeyList<Options extends ValidOptions> = Array<HandlerKey<Options>>;
export { HandlerKeyList }
export { HandlerKeyList as HandlerKeyList_alias_1 }

declare type HandlerShape<Type extends Shape> = {
    [Key in keyof Type]: Handler<Type[Key]>;
};
export { HandlerShape }
export { HandlerShape as HandlerShape_alias_1 }

/**
 * The method signature used to translate messages using your chosen i18n solution
 *
 * @param message - the RemirrorMessage object containing an ICU formatted message
 * @param [values] - key value pairs to insert into the ICU message (optional)
 * @param [locale] - the locale code of the locale currently in use
 * @param [supportedLocales[]] - a list of locale codes supported by the parent application
 * @returns a string containing the translated text from an ICU message formatter
 */
declare type I18nFormatter = (message: RemirrorMessage, values?: Record<string, any>, locale?: string, supportedLocales?: string[]) => string;
export { I18nFormatter }
export { I18nFormatter as I18nFormatter_alias_1 }

export { IfEmpty }

export { IfHasRequiredProperties }

export { IfMatches }

export { IfNoRequiredProperties }

export { IndexUnionFromTuple }

export { InputRule }

export { IterableElement }

export { JsonArray }

export { JsonObject }

export { JsonPrimitive }

export { JsonValue }

export { KebabCase }

export { KeepPartialProperties }

/**
 * The command function passed to any of the keybindings.
 */
declare type KeyBindingCommandFunction = (params: KeyBindingProps) => boolean;
export { KeyBindingCommandFunction }
export { KeyBindingCommandFunction as KeyBindingCommandFunction_alias_1 }

/**
 * Some commonly used keybinding names to help with auto complete.
 */
declare type KeyBindingNames = 'Enter' | 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'PageUp' | 'PageDown' | 'Home' | 'End' | 'Escape' | 'Delete' | 'Backspace' | 'Tab' | 'Shift-Tab';
export { KeyBindingNames }
export { KeyBindingNames as KeyBindingNames_alias_1 }

declare interface KeyBindingProps extends CommandFunctionProps {
    /**
     * A method to run the next (lower priority) command in the chain of
     * keybindings.
     *
     * @remarks
     *
     * This can be used to chain together keyboard commands between extensions.
     * It's possible that you will need to combine actions when a key is pressed
     * while still running the default action. This method allows for the
     * greater degree of control.
     *
     * By default, matching keyboard commands from the different extension are
     * chained together (in order of priority) until one returns `true`. Calling
     * `next` changes this default behaviour. The default keyboard chaining
     * stops and you are given full control of the keyboard command chain.
     */
    next: () => boolean;
}
export { KeyBindingProps }
export { KeyBindingProps as KeyBindingProps_alias_1 }

/**
 * A map of keyboard bindings and their corresponding command functions (a.k.a
 * editing actions).
 *
 * @typeParam Schema - the underlying editor schema.
 *
 * @remarks
 *
 * Each keyboard binding returns an object mapping the keys pressed to the
 * {@link KeyBindingCommandFunction}. By default the highest priority extension
 * will be run first. If it returns true, then nothing else will be run after.
 * If it returns `false` then the next (lower priority) extension defining the
 * same keybinding will be run.
 *
 * It is possible to combine the commands being run by using the `next`
 * parameter. When called it will run the keybinding command function for the
 * proceeding (lower priority) extension. The act of calling the `next` method
 * will prevent the default flow from executing.
 */
declare type KeyBindings = Partial<Record<KeyBindingNames, KeyBindingCommandFunction>> & Record<string, KeyBindingCommandFunction>;
export { KeyBindings }
export { KeyBindings as KeyBindings_alias_1 }

export { Listable }

export { Literal }

export { LiteralUnion }

export { MakeNullable }

export { MakeOptional }

export { MakeReadonly }

export { MakeRequired }

export { MakeUndefined }

export { Mapping }

export { Mark }

/**
 * The schema spec definition for a mark extension
 */
declare interface MarkExtensionSpec extends Pick<MarkSpec, 'attrs' | 'inclusive' | 'excludes' | 'group' | 'spanning' | 'parseDOM'> {
    /**
     * Defines the default way marks of this type should be serialized to
     * DOM/HTML.
     */
    toDOM?: (mark: MarkWithAttributes, inline: boolean) => DOMOutputSpec;
}
export { MarkExtensionSpec }
export { MarkExtensionSpec as MarkExtensionSpec_alias_1 }

declare type MarkSpecOverride = Pick<MarkSpec, 'inclusive' | 'excludes' | 'group' | 'spanning' | 'parseDOM'>;
export { MarkSpecOverride }
export { MarkSpecOverride as MarkSpecOverride_alias_1 }

export { MarkType }

/**
 * A parameter builder interface containing the mark `type` property.
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare interface MarkTypeProps {
    /**
     * The prosemirror mark type instance.
     */
    type: MarkType | string;
}
export { MarkTypeProps }
export { MarkTypeProps as MarkTypeProps_alias_1 }

/**
 * A parameter builder interface containing the `types` property which takes a
 * single type or multiple types.
 *
 * @remarks
 *
 * This can be used to check whether a certain type matches any of these types.
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare interface MarkTypesProps {
    /**
     * The prosemirror node types to use.
     */
    types: MarkType | MarkType[];
}
export { MarkTypesProps }
export { MarkTypesProps as MarkTypesProps_alias_1 }

declare type MarkWithAttributes<Attributes extends object = object> = Mark & {
    attrs: ProsemirrorAttributes<Attributes>;
};
export { MarkWithAttributes }
export { MarkWithAttributes as MarkWithAttributes_alias_1 }

declare interface MarkWithAttributesProps<Attributes extends object = object> {
    /**
     * A mark with a specific shape for `node.attrs`
     */
    mark: MarkWithAttributes<Attributes>;
}
export { MarkWithAttributesProps }
export { MarkWithAttributesProps as MarkWithAttributesProps_alias_1 }

export { Merge }

export { MergeExclusive }

export { MinArray }

/**
 * The schema spec definition for a node extension
 */
declare interface NodeExtensionSpec extends Partial<Pick<NodeSpec, 'content' | 'marks' | 'group' | 'inline' | 'atom' | 'attrs' | 'selectable' | 'draggable' | 'code' | 'defining' | 'isolating' | 'parseDOM' | 'toDebugString' | 'allowGapCursor' | 'leafText'>> {
    /**
     * Defines the default way a node of this type should be serialized to
     * DOM/HTML (as used by [[`DOMSerializer.fromSchema`]].
     *
     * Should return a [[`DOMOutputSpec`]] that describes a DOM node, with an
     * optional number zero (“hole”) in it to indicate where the node's content
     * should be inserted.
     */
    toDOM?: (node: NodeWithAttributes) => DOMOutputSpec;
}
export { NodeExtensionSpec }
export { NodeExtensionSpec as NodeExtensionSpec_alias_1 }

declare interface NodeMarkOptions {
    node?: ProsemirrorNode;
    mark?: Mark;
}
export { NodeMarkOptions }
export { NodeMarkOptions as NodeMarkOptions_alias_1 }

declare type NodeSpecOverride = Pick<NodeSpec, 'content' | 'marks' | 'group' | 'inline' | 'atom' | 'selectable' | 'draggable' | 'code' | 'defining' | 'isolating' | 'parseDOM' | 'leafText'>;
export { NodeSpecOverride }
export { NodeSpecOverride as NodeSpecOverride_alias_1 }

export { NodeType }

/**
 * A parameter builder interface containing the node `type` property.
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare interface NodeTypeProps {
    /**
     * A prosemirror node type instance.
     */
    type: NodeType | string;
}
export { NodeTypeProps }
export { NodeTypeProps as NodeTypeProps_alias_1 }

/**
 * A parameter builder interface containing the `types` property which takes a
 * single type or multiple types.
 *
 * @remarks
 *
 * This can be used to check whether a certain type matches any of these types.
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare interface NodeTypesProps {
    /**
     * The prosemirror node types to use.
     */
    types: NodeType | string | Array<NodeType | string>;
}
export { NodeTypesProps }
export { NodeTypesProps as NodeTypesProps_alias_1 }

export { NodeView }

/**
 * The method signature used to call the Prosemirror `nodeViews`
 *
 * @param node - the node which uses this nodeView
 * @param view - the editor view used by this nodeView
 * @param getPos - a utility method to get the absolute cursor position of the
 * node.
 * @param decorations - a list of the decorations affecting this node view (in
 * case the node view needs to update it's presentation)
 */
declare type NodeViewMethod<View extends NodeView_2 = NodeView_2> = (node: ProsemirrorNode, view: EditorView, getPos: () => number | undefined, decorations: readonly Decoration_2[], innerDecorations: DecorationSource) => View;
export { NodeViewMethod }
export { NodeViewMethod as NodeViewMethod_alias_1 }

declare type NodeWithAttributes<Attributes extends object = object> = ProsemirrorNode & {
    attrs: ProsemirrorAttributes<Attributes>;
};
export { NodeWithAttributes }
export { NodeWithAttributes as NodeWithAttributes_alias_1 }

declare interface NodeWithAttributesProps<Attributes extends object = object> {
    /**
     * A prosemirror node with a specific shape for `node.attrs`
     */
    node: NodeWithAttributes<Attributes>;
}
export { NodeWithAttributesProps }
export { NodeWithAttributesProps as NodeWithAttributesProps_alias_1 }

export { NonChainableCommandFunction }

export { NonNullableShape }

export { Nullable }

export { ObjectMark }

export { ObservableLike }

export { Opaque }

declare interface OptionalMarkProps {
    /**
     * The nullable prosemirror mark which may or may not exist.
     */
    mark: Mark | null | undefined;
}
export { OptionalMarkProps }
export { OptionalMarkProps as OptionalMarkProps_alias_1 }

declare interface OptionalProsemirrorNodeProps {
    /**
     * The nullable prosemirror node which may or may not exist. Please note that
     * the `find` will fail if this does not exists.
     *
     * To prevent cryptic errors this should always be the `doc` node.
     */
    node: ProsemirrorNode | null | undefined;
}
export { OptionalProsemirrorNodeProps }
export { OptionalProsemirrorNodeProps as OptionalProsemirrorNodeProps_alias_1 }

export { PackageJson }

export { PartialDeep }

export { PartialWithRequiredKeys }

export { PascalCase }

export { PickPartial }

export { PickRequired }

export { PluginKey }

declare interface PosProps {
    /**
     * The position of the referenced prosemirror item.
     */
    pos: number;
}
export { PosProps }
export { PosProps as PosProps_alias_1 }

export { Predicate }

declare interface PredicateProps<Type> {
    /**
     * The predicate function
     */
    predicate: (value: Type) => boolean;
}
export { PredicateProps }
export { PredicateProps as PredicateProps_alias_1 }

export { Primitive }

/**
 * The type of arguments acceptable for a selection.
 *
 * - Can be a selection
 * - A range of `{ from: number; to: number }`
 * - A single position with a `number`
 * - `'start' | 'end' | 'all'`
 * - { anchor: number, head: number }
 */
declare type PrimitiveSelection = Selection_2 | FromToProps | AnchorHeadProps | number | ResolvedPos | 'start' | 'end' | 'all';
export { PrimitiveSelection }
export { PrimitiveSelection as PrimitiveSelection_alias_1 }

export { Promisable }

export { ProsemirrorAttributes }

export { ProsemirrorCommandFunction }

declare type ProsemirrorKeyBindings = Record<string, ProsemirrorCommandFunction>;
export { ProsemirrorKeyBindings }
export { ProsemirrorKeyBindings as ProsemirrorKeyBindings_alias_1 }

export { ProsemirrorNode }

declare interface ProsemirrorNodeProps {
    /**
     * The prosemirror node
     */
    node: ProsemirrorNode;
}
export { ProsemirrorNodeProps }
export { ProsemirrorNodeProps as ProsemirrorNodeProps_alias_1 }

export { ProsemirrorPlugin }

declare interface RangeProps {
    /**
     * The from/to interface.
     */
    range: FromToProps;
}
export { RangeProps }
export { RangeProps as RangeProps_alias_1 }

export { ReadonlyDeep }

declare interface RegExpProps {
    /**
     * The regular expression to test against.
     */
    regexp: RegExp;
}
export { RegExpProps }
export { RegExpProps as RegExpProps_alias_1 }

/**
 * Supported content for the remirror editor.
 *
 * @remarks
 *
 * Content can either be
 * - a string (which will be parsed by the stringHandler)
 * - JSON object matching Prosemirror expected shape
 * - A top level ProsemirrorNode
 *
 * @typeParam Schema - the underlying editor schema.
 */
declare type RemirrorContentType = string | RemirrorJSON | ProsemirrorNode | EditorState;
export { RemirrorContentType }
export { RemirrorContentType as RemirrorContentType_alias_1 }

/**
 * The core shape of any remirror specific object.
 */
declare interface RemirrorIdentifierShape {
    [__INTERNAL_REMIRROR_IDENTIFIER_KEY__]: RemirrorIdentifier;
}
export { RemirrorIdentifierShape }
export { RemirrorIdentifierShape as RemirrorIdentifierShape_alias_1 }

/**
 * A JSON representation of the prosemirror Node.
 *
 * @remarks
 * This is used to represent the top level doc nodes content.
 */
declare interface RemirrorJSON {
    type: string;
    marks?: Array<ObjectMark | string>;
    text?: string;
    content?: RemirrorJSON[];
    attrs?: Record<string, Literal>;
}
export { RemirrorJSON }
export { RemirrorJSON as RemirrorJSON_alias_1 }

/**
 * The definition for a translatable string in Remirror
 */
declare interface RemirrorMessage {
    /**
     * The unique id of this message within the Remirror code base
     *
     * These are namespaced via dot separation. I.e. "extension.command.toggle-bold.label"
     */
    id: string;
    /**
     * Context and/or description of this message's purpose
     */
    comment: string;
    /**
     * The default text for this message, this may be using ICU message format, and require an appropriate library to parse it.
     *
     * @see https://formatjs.io/docs/core-concepts/icu-syntax/
     */
    message: string;
}
export { RemirrorMessage }
export { RemirrorMessage as RemirrorMessage_alias_1 }

declare type RemoveAnnotation<Type> = RemoveFlavoring<RemoveFlavoring<RemoveFlavoring<RemoveFlavoring<RemoveFlavoring<Type, 'StaticAnnotation'>, 'DynamicAnnotation'>, 'HandlerAnnotation'>, 'CustomHandlerAnnotation'>, 'AcceptUndefinedAnnotation'>;
export { RemoveAnnotation }
export { RemoveAnnotation as RemoveAnnotation_alias_1 }

declare type RemoveAnnotations<Options extends Shape> = {
    [Key in keyof Options]: RemoveAnnotation<Options[Key]>;
};
export { RemoveAnnotations }
export { RemoveAnnotations as RemoveAnnotations_alias_1 }

export { RemoveFlavoring }

export { Replace }

export { RequireAtLeastOne }

export { RequireExactlyOne }

export { ResolvedPos }

declare interface ResolvedPosProps {
    /**
     * A prosemirror resolved pos with provides helpful context methods when working with
     * a position in the editor.
     */
    $pos: ResolvedPos;
}
export { ResolvedPosProps }
export { ResolvedPosProps as ResolvedPosProps_alias_1 }

/**
 * A mapping of the attribute name to it's default, getter and setter. If the
 * value is set to a string then it will be resolved as the `default`.
 *
 * If it is set to a function then it will be a dynamic node or mark.
 */
declare type SchemaAttributes = Record<string, SchemaAttributesObject | string | DynamicAttributeCreator>;
export { SchemaAttributes }
export { SchemaAttributes as SchemaAttributes_alias_1 }

/**
 * The configuration object for adding extra attributes to the node or mark in
 * the editor schema.
 *
 * Please note that using this will alter the schema, so changes here can cause
 * breaking changes for users if not managed carefully.
 *
 * TODO #462 is being added to support migrations so that breaking changes can
 * be handled automatically.
 */
declare interface SchemaAttributesObject extends Pick<AttributeSpec, 'validate'> {
    /**
     * The default value for the attribute being added, if set to `null` then the
     * initial value for any nodes is not required.
     *
     * If set to `undefined` then a value must be provided whenever a node or mark
     * that has this extra attribute is created. ProseMirror will throw if the
     * value isn't required. Make sure you know what you're doing before setting
     * it to undefined as it could cause unintended errors.
     *
     * This can also be a function which enables dynamically setting the attribute
     * based on the value returned.
     */
    default: JsonPrimitive | DynamicAttributeCreator;
    /**
     * A function used to extract the attribute from the dom and must be applied
     * to the `parseDOM` method.
     *
     * If a string is set this will automatically call
     * `domNode.getAttribute('<name>')`.
     */
    parseDOM?: ((domNode: HTMLElement) => JsonPrimitive | undefined) | string;
    /**
     * Takes the node attributes and applies them to the dom.
     *
     * This is called in the `toDOM` method.
     *
     * - If a string is set this will always be the constant value set in the dom.
     * - If a tuple with two items is set then the first `string` is the attribute
     *   to set in the dom and the second string is the value that will be stored.
     *
     * Return undefined from the function call to skip adding the attribute.
     */
    toDOM?: string | [string, string?] | Record<string, string> | ((attrs: ProsemirrorAttributes, options: NodeMarkOptions) => string | [string, string?] | Record<string, string> | null | undefined);
}
export { SchemaAttributesObject }
export { SchemaAttributesObject as SchemaAttributesObject_alias_1 }

/**
 * A parameter builder interface containing the `schema` property.
 *
 * @typeParam Nodes - the names of the nodes within the editor schema.
 * @typeParam Marks - the names of the marks within the editor schema.
 */
declare interface SchemaProps {
    /**
     * Each Remirror Editor has an automatically generated schema associated with
     * it. The schema is a ProseMirror primitive which describes the kind of nodes
     * that may occur in the document, and the way they are nested. For example,
     * it might say that the top-level node can contain one or more blocks, and
     * that paragraph nodes can contain any number of inline nodes, with any marks
     * applied to them.
     *
     * Read more about it [here](https://prosemirror.net/docs/guide/#schema).
     */
    schema: EditorSchema;
}
export { SchemaProps }
export { SchemaProps as SchemaProps_alias_1 }

export { Selection_2 as Selection }

declare interface SelectionProps {
    /**
     * The text editor selection
     */
    selection: Selection_2;
}
export { SelectionProps }
export { SelectionProps as SelectionProps_alias_1 }

export { SetOptional }

export { SetRequired }

export { SetReturnType }

export { Shape }

export { Simplify }

export { Slice }

export { SnakeCase }

declare interface StateJSON {
    /**
     * This allows for plugin state to be stored, although this is not currently
     * used in remirror.
     */
    [key: string]: unknown;
    /**
     * The main `ProseMirror` doc.
     */
    doc: RemirrorJSON;
    /**
     * The current selection.
     */
    selection: FromToProps;
}
export { StateJSON }
export { StateJSON as StateJSON_alias_1 }

/**
 * Wrap your type in this to represent a static option, which can only be set at
 * instantiation.
 *
 * ```ts
 * import { Static, PlainExtension } from 'remirror';
 *
 * interface MyExtensionOptions {
 *   content: Static<string>;
 * }
 *
 * export class MyExtension extends PlainExtension<MyExtensionOptions> {
 *   get name() {
 *     return 'my' as const';
 *   }
 * }
 *
 * new extension = new MyExtension({ content: 'awesome string' });
 * ```
 *
 * The above example creates an extension with the content options set to
 * 'awesome string'. This value is set and can never be updated.
 *
 * One slight downside to the `Static` annotation is that is does mess up auto
 * suggestions for string literals.
 */
declare type Static<Type> = Type & StaticAnnotation;
export { Static }
export { Static as Static_alias_1 }

declare type StaticAnnotation = Flavoring<'StaticAnnotation'>;

declare type StaticKey<Options extends ValidOptions> = StringKey<GetStatic<Options>>;
export { StaticKey }
export { StaticKey as StaticKey_alias_1 }

declare type StaticKeyList<Options extends ValidOptions> = Array<StaticKey<Options>>;
export { StaticKeyList }
export { StaticKeyList as StaticKeyList_alias_1 }

declare type StaticShape<Type extends object> = {
    [Key in keyof Type]: Static<Type[Key]>;
};
export { StaticShape }
export { StaticShape as StaticShape_alias_1 }

export { StrictReplace }

export { Stringified }

export { StringKey }

declare interface TextProps {
    /**
     * The text to insert or work with.
     */
    text: string;
}
export { TextProps }
export { TextProps as TextProps_alias_1 }

export { Transaction }

declare interface TransactionProps {
    /**
     * The prosemirror transaction
     */
    tr: Transaction;
}
export { TransactionProps }
export { TransactionProps as TransactionProps_alias_1 }

/**
 * Receives a transaction and returns an new transaction.
 *
 * Can be used to update the transaction and customise commands.
 */
declare type TransactionTransformer = (tr: Transaction, state: EditorState) => Transaction;
export { TransactionTransformer }
export { TransactionTransformer as TransactionTransformer_alias_1 }

declare interface TrStateProps {
    /**
     * The shared types between a state and a transaction. Allows for commands to
     * operate on either a state object or a transaction object.
     */
    trState: EditorState | Transaction;
}
export { TrStateProps }
export { TrStateProps as TrStateProps_alias_1 }

export { TsConfigJson }

export { TupleOf }

export { TupleUnion }

export { TupleValue }

export { TypedArray }

export { UndefinedFlipPartialAndRequired }

export { UndefinedPickPartial }

export { UnionToIntersection }

export { UnknownShape }

export { UseDefault }

/**
 * This constrains the valid options that can be passed into your extensions or
 * presets.
 */
declare interface ValidOptions {
    [option: string]: any;
}
export { ValidOptions }
export { ValidOptions as ValidOptions_alias_1 }

export { Value }

export { ValueOf }

export { Writable }

export { Writeable }

export { }

declare global {
  namespace Remirror {
    /**
     * The interface which defines the valid annotations that can be used as
     * part of options.
     *
     * @remarks
     * This is used purely for type inference and is not likely to be needed in
     * your codebase.
     */
    interface ValidOptionsExtender {
      DynamicAnnotation: DynamicAnnotation;
      HandlerAnnotation: HandlerAnnotation;
      CustomAnnotation: CustomHandlerAnnotation;
      StaticAnnotation: StaticAnnotation;
    }
  }
}
