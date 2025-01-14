import type { NodeViewMethod } from '@remirror/core-types';
import { PlainExtension } from '../extension';
import type { CreateExtensionPlugin } from '../types';
/**
 * This extension allows others extension to add the `createNodeView` method
 * for creating nodeViews which alter how the dom is rendered for the node.
 *
 * @remarks
 *
 * This is an example of adding custom functionality to an extension via the
 * `ExtensionParameterMethods`.
 *
 * @category Builtin Extension
 */
export declare class NodeViewsExtension extends PlainExtension {
    get name(): "nodeViews";
    createPlugin(): CreateExtensionPlugin;
}
declare global {
    namespace Remirror {
        interface ManagerSettings {
            /**
             * Add custom node views to the manager which will take priority over the
             * nodeViews provided by the extensions and plugins.
             */
            nodeViews?: Record<string, NodeViewMethod>;
        }
        interface BaseExtension {
            /**
             * Registers one or multiple nodeViews for the extension.
             *
             * This is a shorthand way of registering a nodeView without the need to
             * create a prosemirror plugin. It allows for the registration of one nodeView
             * which has the same name as the extension.
             *
             * To register more than one you would need to use a custom plugin returned
             * from the `plugin` method.
             *
             * @param parameter - schema parameter with type included
             */
            createNodeViews?(): NodeViewMethod | Record<string, NodeViewMethod>;
        }
        interface AllExtensions {
            nodeViews: NodeViewsExtension;
        }
    }
}
