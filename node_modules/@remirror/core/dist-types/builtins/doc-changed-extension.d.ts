import type { Handler } from '@remirror/core-types';
import { PlainExtension } from '../extension';
import type { StateUpdateLifecycleProps } from '../types';
export interface DocChangedOptions {
    docChanged?: Handler<(props: StateUpdateLifecycleProps) => void>;
}
export declare class DocChangedExtension extends PlainExtension<DocChangedOptions> {
    get name(): "docChanged";
    onStateUpdate(props: StateUpdateLifecycleProps): void;
}
