import type { GetHandler } from '@remirror/core';
import { DocChangedOptions } from '@remirror/core';
/**
 * A hook for subscribing to transactions that change the document
 */
export declare function useDocChanged(handler: NonNullable<GetHandler<DocChangedOptions>['docChanged']>): void;
