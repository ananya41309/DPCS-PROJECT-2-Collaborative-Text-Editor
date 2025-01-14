import type { ProsemirrorPlugin } from '@remirror/core-types';
import { PasteRule } from '@remirror/pm/paste-rules';
import { PlainExtension } from '../extension';
export interface PasteRulesOptions {
}
/**
 * This extension allows others extension to add the `createPasteRules` method
 * for automatically transforming pasted text which matches a certain regex
 * pattern in the dom.
 *
 * @category Builtin Extension
 */
export declare class PasteRulesExtension extends PlainExtension {
    get name(): "pasteRules";
    createExternalPlugins(): ProsemirrorPlugin[];
    private generatePasteRulesPlugin;
}
declare global {
    namespace Remirror {
        interface ExcludeOptions {
            /**
             * Whether to exclude the extension's pasteRules
             *
             * @defaultValue undefined
             */
            pasteRules?: boolean;
        }
        interface BaseExtension {
            /**
             * Register paste rules for this extension.
             *
             * Paste rules are activated when text, images, or html is pasted into the
             * editor.
             */
            createPasteRules?(): PasteRule[] | PasteRule;
        }
        interface AllExtensions {
            pasteRules: PasteRulesExtension;
        }
    }
}
