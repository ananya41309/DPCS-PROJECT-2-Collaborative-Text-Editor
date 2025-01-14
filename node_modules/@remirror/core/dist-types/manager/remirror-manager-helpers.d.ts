import type { Dispose, EditorView } from '@remirror/core-types';
import { AnyExtension, GetExtensions } from '../extension';
import type { GetConstructor, StateUpdateLifecycleProps } from '../types';
/**
 * Transforms the unsorted array of presets and extension into presets and
 * sorted extensions. Handles uniqueness of extensions and automatically throws
 * an error when required extensions are missing.
 *
 * @internalremarks Currently matching by constructor - what if different
 * versions exist in the same app
 *
 * @param initialExtensions - the extensions to be transformed. This includes
 * the extension that are parents to other extensions.
 *
 * @returns the list of extension instances sorted by priority
 */
export declare function transformExtensions<RawExtensions extends AnyExtension>(initialExtensions: readonly RawExtensions[], settings: Remirror.ManagerSettings): ExtensionTransformation<RawExtensions>;
/**
 * This is the object shape that is returned from the combined transformation.
 */
export interface ExtensionTransformation<Extension extends AnyExtension, Expanded extends AnyExtension = GetExtensions<Extension>> {
    /**
     * The list of extensions sorted by priority and original extension. Every
     * extension passed in and those contained by presets are placed here.
     */
    extensions: Expanded[];
    /**
     * A map where the key is the [[`ExtensionConstructor`]] and the value is the
     * [[`Extension`]] instance. This is used to lookup extensions contained
     * within a manager. It is a weak map so that values can be garbage collected
     * when references to the constructor are lost.
     */
    extensionMap: WeakMap<GetConstructor<Expanded>, Expanded>;
}
export interface ManagerLifecycleHandlers {
    /**
     * Contains the methods run when the manager is first created.
     */
    create: Array<() => Dispose | void>;
    /**
     * Holds the methods to run once the Editor has received the view from the
     * attached.
     */
    view: Array<(view: EditorView) => Dispose | void>;
    /**
     * The update method is called every time the state updates. This allows
     * extensions to listen to updates.
     */
    update: Array<(props: StateUpdateLifecycleProps) => void>;
    /**
     * Called when the manager is being destroyed.
     */
    destroy: Array<() => void>;
}
interface SetupExtensionProps {
    extension: AnyExtension;
    nodeNames: string[];
    markNames: string[];
    plainNames: string[];
    store: Remirror.ExtensionStore;
    handlers: ManagerLifecycleHandlers;
}
/**
 * This helper function extracts all the lifecycle methods from the provided
 * extension and adds them to the provided `handler` container.
 */
export declare function extractLifecycleMethods(props: SetupExtensionProps): void;
export {};
