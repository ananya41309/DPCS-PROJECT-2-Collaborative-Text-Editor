import { CreateExtensionPlugin, OnSetOptionsProps, PlainExtension, ProsemirrorAttributes } from '@remirror/core';
export interface PlaceholderOptions {
    /**
     * The placeholder text to use.
     */
    placeholder?: string;
    /**
     * The class to decorate the empty top level node with. If you change this
     * then you will also need to apply your own styles.
     */
    emptyNodeClass?: string;
}
export interface PlaceholderPluginState extends Required<PlaceholderOptions> {
    empty: boolean;
}
/**
 * The placeholder extension which adds a placeholder annotation to an empty
 * document.
 */
export declare class PlaceholderExtension extends PlainExtension<PlaceholderOptions> {
    get name(): "placeholder";
    createAttributes(): ProsemirrorAttributes;
    createPlugin(): CreateExtensionPlugin;
    protected onSetOptions(props: OnSetOptionsProps<PlaceholderOptions>): void;
}
declare global {
    namespace Remirror {
        interface AllExtensions {
            placeholder: PlaceholderExtension;
        }
    }
}
