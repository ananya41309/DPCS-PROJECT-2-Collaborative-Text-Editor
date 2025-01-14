import type { ActiveFromExtensions, AnyExtension } from '@remirror/core';
/**
 * This is a shorthand method for retrieving the active available in the
 * editor.
 *
 * ```ts
 * import { useActive } from '@remirror/react';
 * ```
 *
 * This hooks updates the local component on each state update for the editor,
 * so it can be quite expensive.
 *
 * @param autoUpdate - Set to false to prevent automatic re-rendering on every
 * state update.
 */
export declare function useActive<Extension extends AnyExtension = Remirror.Extensions>(autoUpdate?: boolean): ActiveFromExtensions<Extension>;
