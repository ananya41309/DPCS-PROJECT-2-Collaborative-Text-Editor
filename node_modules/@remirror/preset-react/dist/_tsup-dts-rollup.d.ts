import { OnSetOptionsProps } from '@remirror/core';
import { PlaceholderExtension } from '@remirror/extension-placeholder';
import { PlaceholderOptions } from '@remirror/extension-placeholder';
import { PlaceholderPluginState } from '@remirror/extension-placeholder';
import { PlainExtension } from '@remirror/core';
import { ReactComponentExtension } from '@remirror/extension-react-component';
import { ReactComponentOptions } from '@remirror/extension-react-component';

export { PlaceholderExtension }

export { PlaceholderOptions }

export { PlaceholderPluginState }

/**
 * This extension supplies all required extensions for the functionality of the
 * `React` framework implementation.
 *
 * Provides support for SSR, Placeholders and React components for components
 * when using **remirror** with React.
 */
declare class ReactExtension extends PlainExtension<ReactExtensionOptions> {
    get name(): "react";
    protected onSetOptions(props: OnSetOptionsProps<ReactExtensionOptions>): void;
    createExtensions(): (PlaceholderExtension | ReactComponentExtension)[];
}
export { ReactExtension }
export { ReactExtension as ReactExtension_alias_1 }

declare interface ReactExtensionOptions extends PlaceholderOptions, ReactComponentOptions {
}
export { ReactExtensionOptions }
export { ReactExtensionOptions as ReactExtensionOptions_alias_1 }

export { }
