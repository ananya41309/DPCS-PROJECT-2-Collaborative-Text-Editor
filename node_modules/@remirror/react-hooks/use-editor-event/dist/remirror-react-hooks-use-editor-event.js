// src/use-editor-event.ts
import { EventsExtension } from "@remirror/extension-events";
import { useExtensionEvent } from "@remirror/react-core";
function useEditorEvent(event, handler) {
  useExtensionEvent(EventsExtension, event, handler);
}
export {
  useEditorEvent
};
