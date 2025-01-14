import { AnyExtension } from '@remirror/core';
import { BuiltinPreset } from '@remirror/core';
import { DocExtension } from '@remirror/extension-doc';
import { DocOptions } from '@remirror/extension-doc';
import { EventsExtension } from '@remirror/extension-events';
import { GapCursorExtension } from '@remirror/extension-gap-cursor';
import { GetStaticAndDynamic } from '@remirror/core';
import { HistoryExtension } from '@remirror/extension-history';
import { HistoryOptions } from '@remirror/extension-history';
import { ParagraphExtension } from '@remirror/extension-paragraph';
import { PositionerExtension } from '@remirror/extension-positioner';
import { PositionerOptions } from '@remirror/extension-positioner';
import { RemirrorManager } from '@remirror/core';
import { Static } from '@remirror/core';
import { TextExtension } from '@remirror/extension-text';

declare type CorePreset = HistoryExtension | GapCursorExtension | DocExtension | TextExtension | ParagraphExtension | PositionerExtension | EventsExtension;
export { CorePreset }
export { CorePreset as CorePreset_alias_1 }

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
declare function corePreset(options?: GetStaticAndDynamic<CorePresetOptions>): CorePreset[];
export { corePreset }
export { corePreset as corePreset_alias_1 }

/**
 * The options for the core preset.
 */
declare interface CorePresetOptions extends DocOptions, PositionerOptions, HistoryOptions {
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
export { CorePresetOptions }
export { CorePresetOptions as CorePresetOptions_alias_1 }

/**
 * Create a manager with the core preset already applied.
 */
declare function createCoreManager<Extension extends AnyExtension>(extensions: Extension[] | (() => Extension[]), options?: CreateCoreManagerOptions): RemirrorManager<Extension | CorePreset | BuiltinPreset>;
export { createCoreManager }
export { createCoreManager as createCoreManager_alias_1 }

declare interface CreateCoreManagerOptions extends Remirror.ManagerSettings {
    /**
     * The core preset options.
     */
    core?: GetStaticAndDynamic<CorePresetOptions>;
}
export { CreateCoreManagerOptions }
export { CreateCoreManagerOptions as CreateCoreManagerOptions_alias_1 }

declare type ExcludeExtensionKey = CorePreset['name'];

export { }
