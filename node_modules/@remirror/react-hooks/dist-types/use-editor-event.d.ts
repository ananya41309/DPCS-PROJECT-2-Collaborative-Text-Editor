import type { GetHandler, StringKey } from '@remirror/core';
import { EventsOptions } from '@remirror/extension-events';
/**
 * A hook for subscribing to events from the editor.
 */
export declare function useEditorEvent<Key extends StringKey<GetHandler<EventsOptions>>>(event: Key, handler: NonNullable<GetHandler<EventsOptions>[Key]>): void;
