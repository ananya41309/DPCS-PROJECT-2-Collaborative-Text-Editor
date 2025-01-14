import { AnyExtension, CommandsFromExtensions } from '@remirror/core';
/**
 * A core hook which provides the commands for usage in your editor.
 *
 * ```tsx
 * import { useCommands } from '@remirror/react';
 *
 * const EditorButton = () => {
 *   const commands = useCommands();
 *
 *   return (
 *     <>
 *       <button onClick={() => commands.toggleBold()}>
 *         Click me!
 *       </button>
 *     </>
 *   );
 * }
 * ````
 */
export declare function useCommands<Extension extends AnyExtension = Remirror.Extensions>(): CommandsFromExtensions<Extension>;
