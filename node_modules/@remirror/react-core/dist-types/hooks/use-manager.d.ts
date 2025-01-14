import type { AnyExtension, RemirrorManager } from '@remirror/core';
import type { CreateReactManagerOptions, ReactExtensions } from '../react-types';
/**
 * A hook for creating the editor manager directly in the react component.
 *
 * @remarks
 *
 * The manager is a singleton and doesn't rerender until `manager.destroy()` is
 * called. You should call this method in a `useEffect`
 *
 * This is intentional. However, it's something that can be addressed if it
 * causes issues.
 *
 * ```tsx
 * import { useExtension } from '@remirror/react';
 * import { PresetCore } from 'remirror/preset-core';
 * import { BoldExtension } from 'remirror/extension-bold';
 *
 * const Framework = () => {
 *   const manager = useManager([new BoldExtension(), new CorePreset()]);
 *
 *   <Remirror >
 *     <MyEditor />
 *   </Remirror>;
 * }
 * ```
 *
 * This is intended for internal usage only.
 *
 * @internal
 */
export declare function useManager<Extension extends AnyExtension = Remirror.Extensions>(extensions: (() => Extension[]) | RemirrorManager<ReactExtensions<Extension>>, options?: CreateReactManagerOptions): RemirrorManager<ReactExtensions<Extension>>;
