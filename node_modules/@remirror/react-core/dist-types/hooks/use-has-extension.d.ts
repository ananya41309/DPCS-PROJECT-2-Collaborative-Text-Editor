import { AnyExtensionConstructor } from '@remirror/core';
/**
 * Assert if an extension is present in the manager by providing its constructor
 */
export declare function useHasExtension<Type extends AnyExtensionConstructor>(Constructor: Type): boolean;
