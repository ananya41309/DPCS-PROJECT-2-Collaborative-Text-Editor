import { CreateExtensionPlugin } from '@remirror/core';
import { OnSetOptionsProps } from '@remirror/core';
import { PlainExtension } from '@remirror/core';
import { ProsemirrorAttributes } from '@remirror/core';

/**
 * The placeholder extension which adds a placeholder annotation to an empty
 * document.
 */
declare class PlaceholderExtension extends PlainExtension<PlaceholderOptions> {
    get name(): "placeholder";
    createAttributes(): ProsemirrorAttributes;
    createPlugin(): CreateExtensionPlugin;
    protected onSetOptions(props: OnSetOptionsProps<PlaceholderOptions>): void;
}
export { PlaceholderExtension }
export { PlaceholderExtension as PlaceholderExtension_alias_1 }

declare interface PlaceholderOptions {
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
export { PlaceholderOptions }
export { PlaceholderOptions as PlaceholderOptions_alias_1 }

declare interface PlaceholderPluginState extends Required<PlaceholderOptions> {
    empty: boolean;
}
export { PlaceholderPluginState }
export { PlaceholderPluginState as PlaceholderPluginState_alias_1 }

export { }

declare global {
  namespace Remirror {
    interface AllExtensions {
      placeholder: PlaceholderExtension;
    }
  }
}
