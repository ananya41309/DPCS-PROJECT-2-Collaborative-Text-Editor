import { AnyExtension, RemirrorManager } from '@remirror/core';
import type { CreateReactManagerOptions, ReactExtensions } from './react-types';
/**
 * Create a React [[`RemirrorManager`]] with all the default react presets and
 * extensions.
 */
export declare function createReactManager<Extension extends AnyExtension>(extensions: Extension[] | (() => Extension[]) | RemirrorManager<ReactExtensions<Extension>>, options?: CreateReactManagerOptions): RemirrorManager<ReactExtensions<Extension>>;
