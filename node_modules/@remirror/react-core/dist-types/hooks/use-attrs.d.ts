import type { AnyExtension, AttrsFromExtensions } from '@remirror/core';
/**
 * A core hook which provides the attributes for the nodes and marks in the
 * editor.
 *
 * ```tsx
 * import { useAttrs } from '@remirror/react';
 *
 * const EditorButton = () => {
 *   const attrs = useAttrs();
 *   const { link } = attrs;
 *
 *   return <a href={link.href}>{link().href}</a>;
 * }
 * ```
 */
export declare function useAttrs<Extension extends AnyExtension = Remirror.Extensions>(update?: boolean): AttrsFromExtensions<Extension>;
