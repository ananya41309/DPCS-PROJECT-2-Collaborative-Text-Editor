// src/use-editor-event.ts
import { EventsExtension } from "@remirror/extension-events";
import { useExtensionEvent } from "@remirror/react-core";
function useEditorEvent(event, handler) {
  useExtensionEvent(EventsExtension, event, handler);
}

// src/use-context-menu.ts
function useContextMenu(handler) {
  useEditorEvent("contextmenu", handler);
}
export {
  useContextMenu
};
