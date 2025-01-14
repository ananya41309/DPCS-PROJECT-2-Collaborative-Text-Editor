import { AnyExtension, RemirrorEventListener } from '@remirror/core';
import type { ReactFrameworkOutput } from '../react-types';
/**
 * The `ReactContext` for the Remirror editor.
 */
export declare const RemirrorContext: import("react").Context<ReactFrameworkOutput<any> | null>;
/**
 * This provides access to the remirror context when using the `Remirror`.
 *
 * The first argument which is optional can also be a change handler which is
 * called every time the state updates.
 *
 * @remarks
 *
 * The following example applies the root props to the div.
 *
 * ```tsx
 * import { Remirror, useRemirrorContext } from 'remirror';
 *
 * const HooksComponent = (props) => {
 *   // This pulls the remirror props out from the context.
 *   const { getRootProps } = useRemirrorContext();
 *
 *   return <div {...getRootProps()} />;
 * }
 *
 * class App extends Component {
 *   render() {
 *     return (
 *       <Remirror>
 *         <HooksComponent />
 *       </Remirror>
 *     );
 *   }
 * }
 * ```
 *
 * For performance reasons `useRemirror` does not automatically trigger a
 * rerender on every editor update. This allows for you use it in component
 * which don't need to track the latest editor state, without suffering a
 * performance penalty.
 *
 * However if you do want to track whether a command is enabled at the current
 * selection or whether a certain formatting mark (bold) is active at the
 * current selection you can pass through an optional parameter.
 *
 * ```tsx
 * const EditorButton = () => {
 *   const { active, commands } = useRemirrorContext({ autoUpdate: true });
 *
 *   return (
 *     <button style={{ fontWeight: active.bold() ? 'bold' : undefined }}>
 *       B
 *     <button>
 *   );
 * }
 * ```
 *
 * The above example keep track of whether the current selection is bold on
 * every update to the editor. Updates can be document changes and selection
 * changes.
 *
 * For more control you can also use a handler function as the first parameter
 * to selectively rerender as you see fit.
 *
 * ```tsx
 * const EditorButton = () => {
 *   const { active, commands } = useRemirrorContext(() => {
 *     if (active.bold() === boldActive) {
 *       return;
 *     }
 *
 *     setBoldActive(active.bold());
 *   });
 *
 *   const [boldActive, setBoldActive] = useState(active.bold());
 *
 *   return (
 *     <button style={{ fontWeight: boldActive ? 'bold' : undefined }}>
 *       B
 *     <button>
 *   )
 * }
 * ```
 *
 * In this case the component only re-renders when the bold formatting changes.
 */
export declare function useRemirrorContext<Extension extends AnyExtension = Remirror.Extensions>(handler?: RemirrorEventListener<Extension> | {
    autoUpdate: boolean;
}): ReactFrameworkOutput<Extension>;
