import type { Handler, ProsemirrorPlugin } from '@remirror/core-types';
import type { ShouldSkipFunction } from '@remirror/core-utils';
import { InputRule } from '@remirror/pm/inputrules';
import { PlainExtension } from '../extension';
export interface InputRulesOptions {
    /**
     * Handlers which can be registered to check whether an input rule should be
     * active at this time.
     *
     * The handlers are given a parameter with the current `state`, the `fullMatch`
     * and the `captureGroup` and can determine whether the input rule should
     * still be run.
     *
     * Return `true` to prevent any active input rules from being triggered.
     */
    shouldSkipInputRule?: Handler<ShouldSkipFunction>;
}
/**
 * This extension allows others extension to add the `createInputRules` method
 * for automatically transforming text when a certain regex pattern is typed.
 *
 * @remarks
 *
 * This is an example of adding custom functionality to an extension via the
 * `ExtensionParameterMethods`.
 *
 * @category Builtin Extension
 */
export declare class InputRulesExtension extends PlainExtension<InputRulesOptions> {
    get name(): "inputRules";
    /**
     * Add the extension store method for rebuilding all input rules.
     */
    onCreate(): void;
    /**
     * Add the `inputRules` plugin to the editor.
     */
    createExternalPlugins(): ProsemirrorPlugin[];
    private generateInputRulesPlugin;
    /**
     * The method for rebuilding all the input rules.
     *
     * 1. Rebuild inputRules.
     * 2. Replace the old input rules plugin.
     * 3. Update the plugins used in the state (triggers an editor update).
     */
    private rebuildInputRules;
}
declare global {
    namespace Remirror {
        interface ExcludeOptions {
            /**
             * Whether to use the inputRules for this particular extension.
             *
             * @defaultValue undefined
             */
            inputRules?: boolean;
        }
        interface ExtensionStore {
            /**
             * When called this will run through every `createInputRules` method on every
             * extension to recreate input rules.
             *
             * @remarks
             *
             * Under the hood it updates the plugin which is used to insert the
             * input rules into the editor. This causes the state to be updated and
             * will cause a rerender in your ui framework.
             */
            rebuildInputRules: () => void;
        }
        interface BaseExtension {
            /**
             * Register input rules which are activated if the regex matches as a user is
             * typing.
             *
             * @param parameter - schema parameter with type included
             */
            createInputRules?(): InputRule[];
        }
        interface AllExtensions {
            inputRules: InputRulesExtension;
        }
    }
}
