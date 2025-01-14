/**
 * A core hook which provides the the currently selected text.
 *
 * ```tsx
 * import { useSelectedText } from '@remirror/react';
 *
 * const RandomSpan = () => {
 *   const text = useSelectedText();
 *
 *   return text  && <span>{text}</span>;
 * }
 * ````
 *
 * Return the value of the currently selected text. When the text selection is empty
 */
export declare function useSelectedText(): string | undefined;
