import { OnSetOptionsProps, PlainExtension } from '@remirror/core';
import { PlaceholderExtension, PlaceholderOptions } from '@remirror/extension-placeholder';
import { ReactComponentExtension, ReactComponentOptions } from '@remirror/extension-react-component';
export interface ReactExtensionOptions extends PlaceholderOptions, ReactComponentOptions {
}
/**
 * This extension supplies all required extensions for the functionality of the
 * `React` framework implementation.
 *
 * Provides support for SSR, Placeholders and React components for components
 * when using **remirror** with React.
 */
export declare class ReactExtension extends PlainExtension<ReactExtensionOptions> {
    get name(): "react";
    protected onSetOptions(props: OnSetOptionsProps<ReactExtensionOptions>): void;
    createExtensions(): (PlaceholderExtension | ReactComponentExtension)[];
}
