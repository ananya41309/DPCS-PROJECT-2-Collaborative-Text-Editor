import { Asyncify } from 'type-fest';
import { AsyncReturnType } from 'type-fest';
import { CamelCase } from 'type-fest';
import { Class } from 'type-fest';
import { ConditionalExcept } from 'type-fest';
import { ConditionalKeys } from 'type-fest';
import { ConditionalPick } from 'type-fest';
import { DelimiterCase } from 'type-fest';
import { Entries } from 'type-fest';
import { Entry } from 'type-fest';
import { Except } from 'type-fest';
import { FixedLengthArray } from 'type-fest';
import { Get } from 'type-fest';
import { IterableElement } from 'type-fest';
import { JsonArray } from 'type-fest';
import { JsonObject } from 'type-fest';
import { JsonValue } from 'type-fest';
import { KebabCase } from 'type-fest';
import { LiteralUnion } from 'type-fest';
import { Merge } from 'type-fest';
import { MergeExclusive } from 'type-fest';
import { ObservableLike } from 'type-fest';
import { Opaque } from 'type-fest';
import { PackageJson } from 'type-fest';
import { PartialDeep } from 'type-fest';
import { PascalCase } from 'type-fest';
import { Primitive } from 'type-fest';
import { Promisable } from 'type-fest';
import { ReadonlyDeep } from 'type-fest';
import { RequireAtLeastOne } from 'type-fest';
import { RequireExactlyOne } from 'type-fest';
import { SetOptional } from 'type-fest';
import { SetRequired } from 'type-fest';
import { SetReturnType } from 'type-fest';
import { SnakeCase } from 'type-fest';
import { Stringified } from 'type-fest';
import { TsConfigJson } from 'type-fest';
import { TypedArray } from 'type-fest';
import { UnionToIntersection } from 'type-fest';
import { ValueOf } from 'type-fest';
import { Writable } from 'type-fest';

/**
 * A shorthand for creating and intersection of two object types.
 */
declare type And<Type extends Shape, Other extends Shape> = Type & Other;
export { And }
export { And as And_alias_1 }

/**
 * Matches any constructor type.
 */
declare type AnyConstructor<Type = any> = new (...args: any[]) => Type;
export { AnyConstructor }
export { AnyConstructor as AnyConstructor_alias_1 }

/**
 * Concisely and cleanly define an arbitrary function.
 *
 * @remarks
 * Taken from `simplytyped` Useful when designing many api's that don't care
 * what function they take in, they just need to know what it returns.
 */
declare type AnyFunction<Type = any> = (...args: any[]) => Type;
export { AnyFunction }
export { AnyFunction as AnyFunction_alias_1 }

/**
 * An array which must include the first item.
 */
declare type Array1<Type> = MinArray<Type, 1>;
export { Array1 }
export { Array1 as Array1_alias_1 }

/**
 * An array which must include the first 2 items.
 */
declare type Array2<Type> = MinArray<Type, 2>;
export { Array2 }
export { Array2 as Array2_alias_1 }

/**
 * An array which must include the first 3 items.
 */
declare type Array3<Type> = MinArray<Type, 3>;
export { Array3 }
export { Array3 as Array3_alias_1 }

export { Asyncify }

export { AsyncReturnType }

/**
 * Create a "branded" version of a type. TypeScript won't allow implicit
 * conversion to this type
 */
declare type Brand<Type, B> = Type & Branding<B>;
export { Brand }
export { Brand as Brand_alias_1 }

declare const _brand: unique symbol;

/**
 * Used by Brand to mark a type in a readable way.
 */
declare interface Branding<Name> {
    readonly [_brand]: Name;
}

export { CamelCase }

export { Class }

export { ConditionalExcept }

export { ConditionalKeys }

export { ConditionalPick }

/**
 * Conditionally pick keys which are functions and have the requested return
 * type.
 */
declare type ConditionalReturnKeys<Base, Return> = NonNullable<{
    [Key in keyof Base]: Base[Key] extends AnyFunction<infer R> ? R extends Return ? Key : never : never;
}[keyof Base]>;
export { ConditionalReturnKeys }
export { ConditionalReturnKeys as ConditionalReturnKeys_alias_1 }

/**
 * Pick the properties from an object that are methods with the requested
 * `Return` type.
 */
declare type ConditionalReturnPick<Base, Return> = Pick<Base, ConditionalReturnKeys<Base, Return>>;
export { ConditionalReturnPick }
export { ConditionalReturnPick as ConditionalReturnPick_alias_1 }

/**
 * Defines coordinates returned by the [[`EditorView.coordsAtPos`]] function.
 */
declare interface Coords {
    /**
     * Vertical distance from the top of the page viewport to the top side of the
     * described position (px).
     */
    top: number;
    /**
     * Horizontal distance from the left of the page viewport to the left side of
     * the described position (px).
     */
    left: number;
    /**
     * Vertical distance from the top of the page viewport to the bottom side of
     * the described position (px).
     */
    bottom: number;
    /**
     * Horizontal distance from the left of the page viewport to the right side of
     * the described position (px).
     */
    right: number;
}
export { Coords }
export { Coords as Coords_alias_1 }

/**
 * A recursive partial type. Useful for object that will be merged with
 * defaults.
 */
declare type DeepPartial<Type> = Type extends object ? {
    [K in keyof Type]?: DeepPartial<Type[K]>;
} : Type;
export { DeepPartial }
export { DeepPartial as DeepPartial_alias_1 }

/**
 * Converts every nested type to a string.
 */
declare type DeepString<Type> = Type extends object ? {
    [K in keyof Type]: DeepString<Type[K]>;
} : string;
export { DeepString }
export { DeepString as DeepString_alias_1 }

export { DelimiterCase }

/**
 * Get the diff between two types. All identical keys are stripped away.
 *
 * @remarks
 *
 * ```ts
 * type Fun = Diff<{notFun: false, fun: true}, {notFun: true, wow: string}>;
 * // => { fun: true, wow: string }
 * ```
 */
declare type Diff<A, B> = Omit<A, keyof B> & Omit<B, keyof A>;
export { Diff }
export { Diff as Diff_alias_1 }

/**
 * An alternative to usage of `{}` as a type.
 */
declare type EmptyShape = Record<never, never>;
export { EmptyShape }
export { EmptyShape as EmptyShape_alias_1 }

export { Entries }

export { Entry }

export { Except }

export { FixedLengthArray }

/**
 * Create a "flavored" version of a type. TypeScript will disallow mixing
 * flavors, but will allow unflavored values of that type to be passed in where
 * a flavored version is expected. This is a less restrictive form of branding.
 */
declare type Flavor<Type, Name> = Type & Flavoring<Name>;
export { Flavor }
export { Flavor as Flavor_alias_1 }

declare const _flavor: unique symbol;

/**
 * Used by `Flavor` to mark a type in a readable way.
 */
declare interface Flavoring<Name> {
    readonly [_flavor]?: Name;
}
export { Flavoring }
export { Flavoring as Flavoring_alias_1 }

/**
 * Reverses the partial and required keys for the type provided. If it was a
 * required property it becomes a partial property and if it was a partial
 * property it becomes a required property.
 */
declare type FlipPartialAndRequired<Type extends Shape> = PickPartial<Type> & Partial<PickRequired<Type>>;
export { FlipPartialAndRequired }
export { FlipPartialAndRequired as FlipPartialAndRequired_alias_1 }

export { Get }

/**
 * Get all the keys for required properties on this type.
 */
declare type GetRequiredKeys<Type extends Shape> = keyof ConditionalPick<KeepPartialProperties<Type>, NeverBrand>;
export { GetRequiredKeys }
export { GetRequiredKeys as GetRequiredKeys_alias_1 }

/**
 * Conditional type which checks if the provided `Type` is and empty object (no
 * properties). If it is uses the `Then` type if not falls back to the `Else`
 * type.
 */
declare type IfEmpty<Type extends object, Then, Else> = keyof Type extends never ? Then : Else;
export { IfEmpty }
export { IfEmpty as IfEmpty_alias_1 }

/**
 * A method that can pull all the extraAttributes from the provided dom node.
 */
/**
 * Checks the type provided and if it has any properties which are required it
 * will return the `Then` type. When none of the properties are required it will
 * return the `Else` type.
 *
 * @remarks
 *
 * This is a reverse of the `IfNoRequiredProperties` type.
 */
declare type IfHasRequiredProperties<Type extends object, Then, Else> = IfNoRequiredProperties<Type, Else, Then>;
export { IfHasRequiredProperties }
export { IfHasRequiredProperties as IfHasRequiredProperties_alias_1 }

/**
 * Condition that checks if the keys of the two objects match. If so, respond
 * with `Then` otherwise `Else`.
 */
declare type IfMatches<A, B, Then, Else> = IfEmpty<Diff<A, B>, Then, Else>;
export { IfMatches }
export { IfMatches as IfMatches_alias_1 }

/**
 * A conditional check on the type. When there are no required keys it outputs
 * the `Then` type, otherwise it outputs the `Else` type.
 *
 * @remarks
 *
 * This is useful for dynamically setting the parameter list of a method call
 * depending on whether keys are required.
 */
declare type IfNoRequiredProperties<Type extends object, Then, Else> = GetRequiredKeys<Type> extends NeverBrand ? Then : Else;
export { IfNoRequiredProperties }
export { IfNoRequiredProperties as IfNoRequiredProperties_alias_1 }

/**
 * Extract the valid index union from a provided tuple.
 *
 * ```ts
 * import { IndexUnionFromTuple } from '@remirror/core-types';
 *
 * const tuple = ['a', 'b', 'c'];
 * type Index = IndexUnionFromTuple<typeof tuple> => 0 | 1 | 2
 * ```
 */
declare type IndexUnionFromTuple<Tuple extends readonly unknown[]> = Tuple extends Tuple ? number extends Tuple['length'] ? number : _IndexUnionFromTuple<[], Tuple['length']> : never;
export { IndexUnionFromTuple }
export { IndexUnionFromTuple as IndexUnionFromTuple_alias_1 }

declare type _IndexUnionFromTuple<Tuple extends readonly unknown[], Length extends number> = Tuple['length'] extends Length ? Tuple[number] : _IndexUnionFromTuple<[...Tuple, Tuple['length']], Length>;

export { IterableElement }

export { JsonArray }

export { JsonObject }

/**
 Matches any valid JSON primitive value.
 */
declare type JsonPrimitive = string | number | boolean | null;
export { JsonPrimitive }
export { JsonPrimitive as JsonPrimitive_alias_1 }

export { JsonValue }

export { KebabCase }

/**
 * Keeps the partial properties of a type unchanged. Transforms the rest to
 * `never`.
 */
declare type KeepPartialProperties<Type extends Shape> = {
    [Key in keyof Type]: Type[Key] extends undefined ? Type[Key] : NeverBrand;
};
export { KeepPartialProperties }
export { KeepPartialProperties as KeepPartialProperties_alias_1 }

/**
 * Allow a type of a list of types.
 */
declare type Listable<Type> = Type | Type[];
export { Listable }
export { Listable as Listable_alias_1 }

/**
 * All the literal types
 */
declare type Literal = string | number | boolean | undefined | null | void | object;
export { Literal }
export { Literal as Literal_alias_1 }

export { LiteralUnion }

/**
 * Makes specified keys of an interface nullable while the rest stay the same.
 */
declare type MakeNullable<Type extends object, Keys extends keyof Type> = Omit<Type, Keys> & {
    [Key in Keys]: Type[Key] | null;
};
export { MakeNullable }
export { MakeNullable as MakeNullable_alias_1 }

/**
 * Makes specified keys of an interface optional while the rest stay the same.
 */
declare type MakeOptional<Type extends object, Keys extends keyof Type> = Omit<Type, Keys> & {
    [Key in Keys]+?: Type[Key];
};
export { MakeOptional }
export { MakeOptional as MakeOptional_alias_1 }

/**
 * Makes specified keys of an interface readonly.
 */
declare type MakeReadonly<Type extends object, Keys extends keyof Type> = Omit<Type, Keys> & {
    +readonly [Key in Keys]: NonNullable<Type[Key]>;
};
export { MakeReadonly }
export { MakeReadonly as MakeReadonly_alias_1 }

/**
 * Makes specified keys of an interface Required while the rest remain
 * unchanged.
 */
declare type MakeRequired<Type extends object, Keys extends keyof Type> = Omit<Type, Keys> & {
    [Key in Keys]-?: Type[Key];
};
export { MakeRequired }
export { MakeRequired as MakeRequired_alias_1 }

/**
 * Makes specified keys of an interface optional while the rest stay the same.
 */
declare type MakeUndefined<Type extends object, Keys extends keyof Type> = Omit<Type, Keys> & {
    [Key in Keys]: Type[Key] | undefined;
};
export { MakeUndefined }
export { MakeUndefined as MakeUndefined_alias_1 }

export { Merge }

export { MergeExclusive }

/**
 * Create a type for an array (as a tuple) which has at least the provided
 * `Length`.
 *
 * This can be  useful when `noUncheckedIndexedAccess` is set to true in the
 * compiler options. Annotate types when you are sure the provided index will
 * always be available.
 *
 * ```ts
 * import { MinArray } from '@remirror/core-types';
 *
 * MinArray<string, 2>; // => [string, string, ...string[]];
 * ```
 */
declare type MinArray<Type, Length extends number> = Length extends Length ? number extends Length ? Type[] : _MinArray<Type, Length, []> : never;
export { MinArray }
export { MinArray as MinArray_alias_1 }

declare type _MinArray<Type, Length extends number, Accumulated extends unknown[]> = Accumulated['length'] extends Length ? [...Accumulated, ...Type[]] : _MinArray<Type, Length, [Type, ...Accumulated]>;

declare type NeverBrand = Brand<object, never>;

declare type NonNullableShape<Type extends object> = {
    [Key in keyof Type]: NonNullable<Type[Key]>;
};
export { NonNullableShape }
export { NonNullableShape as NonNullableShape_alias_1 }

/**
 * Makes a type nullable or undefined.
 */
declare type Nullable<Type> = Type | null | undefined;
export { Nullable }
export { Nullable as Nullable_alias_1 }

/**
 * A JSON representation of a prosemirror Mark.
 */
declare interface ObjectMark {
    type: string;
    attrs?: Record<string, Literal>;
}
export { ObjectMark }
export { ObjectMark as ObjectMark_alias_1 }

export { ObservableLike }

export { Opaque }

export { PackageJson }

export { PartialDeep }

/**
 * Make the whole interface partial except for some specified keys which will be
 * made required.
 */
declare type PartialWithRequiredKeys<Type extends object, Keys extends keyof Type> = Partial<Pick<Type, Exclude<keyof Type, Keys>>> & Required<Pick<Type, Keys>>;
export { PartialWithRequiredKeys }
export { PartialWithRequiredKeys as PartialWithRequiredKeys_alias_1 }

export { PascalCase }

/**
 * Pick the `partial` properties from the provided Type and make them all
 * required.
 */
declare type PickPartial<Type extends Shape> = {
    [Key in keyof ConditionalExcept<KeepPartialProperties<Type>, NeverBrand>]-?: Type[Key];
};
export { PickPartial }
export { PickPartial as PickPartial_alias_1 }

/**
 * Only pick the `required` (non-`partial`) types from the given `Type`.
 */
declare type PickRequired<Type extends Shape> = {
    [Key in keyof ConditionalPick<KeepPartialProperties<Type>, NeverBrand>]: Type[Key];
};
export { PickRequired }
export { PickRequired as PickRequired_alias_1 }

/**
 * Creates a predicate type.
 */
declare type Predicate<Type> = (value: unknown) => value is Type;
export { Predicate }
export { Predicate as Predicate_alias_1 }

export { Primitive }

export { Promisable }

/**
 * Used for attributes which can be added to prosemirror nodes and marks.
 */
declare type ProsemirrorAttributes<Extra extends object = object> = Record<string, unknown> & Remirror.Attributes & Extra & {
    /**
     * The class is a preserved attribute name.
     */
    class?: string;
};
export { ProsemirrorAttributes }
export { ProsemirrorAttributes as ProsemirrorAttributes_alias_1 }

export { ReadonlyDeep }

/**
 * Remove the flavoring from a type.
 */
declare type RemoveFlavoring<Type, Name> = Type extends Flavor<infer T, Name> ? T : Type;
export { RemoveFlavoring }
export { RemoveFlavoring as RemoveFlavoring_alias_1 }

/**
 * Replace and extend any object keys.
 */
declare type Replace<Type, Replacements extends Shape> = Omit<Type, keyof Replacements> & Replacements;
export { Replace }
export { Replace as Replace_alias_1 }

export { RequireAtLeastOne }

export { RequireExactlyOne }

export { SetOptional }

export { SetRequired }

export { SetReturnType }

/**
 * An object with string keys and values of type `any`
 */
declare interface Shape {
    [key: string]: any;
}
export { Shape }
export { Shape as Shape_alias_1 }

/**
 * When a type is really deep and has retained an unnecessary amount of type
 * information, this flattens it to a single array/object/value.
 *
 * TODO not using it right now as it's breaking with globally available types
 * via namespace.
 */
declare type Simplify<T> = T extends object | any[] ? {
    [K in keyof T]: T[K];
} : T;
export { Simplify }
export { Simplify as Simplify_alias_1 }

export { SnakeCase }

/**
 * Replace only the current keys with different types.
 */
declare type StrictReplace<Type, Replacements extends Record<keyof Type, unknown>> = Omit<Type, keyof Replacements> & Replacements;
export { StrictReplace }
export { StrictReplace as StrictReplace_alias_1 }

export { Stringified }

/**
 * An alternative to keyof that only extracts the string keys.
 */
declare type StringKey<Type> = Extract<keyof Type, string>;
export { StringKey }
export { StringKey as StringKey_alias_1 }

export { TsConfigJson }

/**
 * Create a tuple of `Size` from the provided `Type`.
 */
declare type TupleOf<Type, Size extends number> = Size extends Size ? number extends Size ? Type[] : _TupleOf<Type, Size, []> : never;
export { TupleOf }
export { TupleOf as TupleOf_alias_1 }

declare type _TupleOf<Type, Size extends number, Tuple extends unknown[]> = Tuple['length'] extends Size ? Tuple : _TupleOf<Type, Size, [Type, ...Tuple]>;

/**
 * Returns tuple types that include every string in union TupleUnion<keyof {bar:
 * string; leet: number }>; ["bar", "leet"] | ["leet", "bar"];
 *
 * Taken from ❤️
 * https://github.com/microsoft/TypeScript/issues/13298#issuecomment-692864087
 *
 * Problem it is recursive and has quickly eats into the maximum depth.
 */
declare type TupleUnion<T> = ((T extends any ? (t: T) => T : never) extends infer U ? (U extends any ? (u: U) => any : never) extends (v: infer V) => any ? V : never : never) extends (_: any) => infer W ? [...TupleUnion<Exclude<T, W>>, W] : [];
export { TupleUnion }
export { TupleUnion as TupleUnion_alias_1 }

/**
 * Extract the values of a tuple as a union type.
 *
 * @remarks
 *
 * ```ts
 * const myTuple = ['a', 'b', 'c'] as const;
 *
 * type MyTuple = TupleValue<typeof myTuple>; // 'a' | 'b' | 'c'
 * ```
 */
declare type TupleValue<Tuple extends readonly unknown[]> = Tuple[number];
export { TupleValue }
export { TupleValue as TupleValue_alias_1 }

export { TypedArray }

/**
 * Reverses the partial and required keys for the type provided. If it was a
 * required property it becomes a partial property and if it was a partial
 * property it becomes a required property.
 */
declare type UndefinedFlipPartialAndRequired<Type extends Shape> = UndefinedPickPartial<Type> & Partial<PickRequired<Type>>;
export { UndefinedFlipPartialAndRequired }
export { UndefinedFlipPartialAndRequired as UndefinedFlipPartialAndRequired_alias_1 }

/**
 * Like pick partial but all types can still specify undefined.
 */
declare type UndefinedPickPartial<Type extends Shape> = {
    [Key in keyof PickPartial<Type>]: PickPartial<Type>[Key] | undefined;
};
export { UndefinedPickPartial }
export { UndefinedPickPartial as UndefinedPickPartial_alias_1 }

export { UnionToIntersection }

/**
 * An object with string keys and values of type `unknown`
 */
declare type UnknownShape<Type = unknown> = Record<string, Type>;
export { UnknownShape }
export { UnknownShape as UnknownShape_alias_1 }

/**
 * When the type is never use a default type instead.
 *
 * TODO why doesn't this work
 */
declare type UseDefault<Type, Default> = Type extends never ? Default : Type;
export { UseDefault }
export { UseDefault as UseDefault_alias_1 }

/**
 * Extract the values of an object as a union type.
 *
 * @remarks
 *
 * ```ts
 * const myRecord = { A: 'a', B: 'b', C: 'c' } as const;
 *
 * type MyRecord = Value<typeof myRecord>; // 'a' | 'b' | 'c'
 * ```
 */
declare type Value<Type> = Type[keyof Type];
export { Value }
export { Value as Value_alias_1 }

export { ValueOf }

export { Writable }

/**
 * Remove all readonly modifiers from the provided type.
 */
declare type Writeable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};
export { Writeable }
export { Writeable as Writeable_alias_1 }

export { }

declare global {
  namespace Remirror {
    /**
     * Define globally available extra node attributes here.
     */
    interface Attributes {}
  }
}
