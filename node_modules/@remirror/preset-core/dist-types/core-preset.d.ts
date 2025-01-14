import { AnyExtension, BuiltinPreset, GetStaticAndDynamic, RemirrorManager, Static } from '@remirror/core';
import { DocExtension, DocOptions } from '@remirror/extension-doc';
import { EventsExtension } from '@remirror/extension-events';
import { GapCursorExtension } from '@remirror/extension-gap-cursor';
import { HistoryExtension, HistoryOptions } from '@remirror/extension-history';
import { ParagraphExtension } from '@remirror/extension-paragraph';
import { PositionerExtension, PositionerOptions } from '@remirror/extension-positioner';
import { TextExtension } from '@remirror/extension-text';
/**
 * The options for the core preset.
 */
export interface CorePresetOptions extends DocOptions, PositionerOptions, HistoryOptions {
    /**
     * You can exclude one or multiple extensions from the [[`corePreset`]]
     * function by passing their extension names in `excludeExtensions`.
     *
     * When using the `yjs` extension it is important to exclude the history
     * extension to prevent issues with collaborative editing mode.
     *
     * @defaultValue []
     */
    excludeExtensions?: Static<ExcludeExtensionKey[]>;
}
type ExcludeExtensionKey = CorePreset['name'];
/**
 * The core preset is included by default when creating an editor with
 * `@remirror/react`.
 *
 * It comes with the the following extensions.
 *
 * - `HistoryExtension` - for undo and redo functionality
 * - `DocExtension` - provides the top level prosemirror node.
 * - `TextExtension` - provides the prosemirror text node
 * - `ParagraphExtension` - provides the prosemirror paragraph node
 * - `PositionerExtension` - set up automatic position checking and creation of
 *   virtual nodes from any part of the editor.
 */
export declare function corePreset(options?: GetStaticAndDynamic<CorePresetOptions>): CorePreset[];
export interface CreateCoreManagerOptions extends Remirror.ManagerSettings {
    /**
     * The core preset options.
     */
    core?: GetStaticAndDynamic<CorePresetOptions>;
}
export type CorePreset = HistoryExtension | GapCursorExtension | DocExtension | TextExtension | ParagraphExtension | PositionerExtension | EventsExtension;
/**
 * Create a manager with the core preset already applied.
 */
export declare function createCoreManager<Extension extends AnyExtension>(extensions: Extension[] | (() => Extension[]), options?: CreateCoreManagerOptions): RemirrorManager<Extension | CorePreset | BuiltinPreset>;
export {};
