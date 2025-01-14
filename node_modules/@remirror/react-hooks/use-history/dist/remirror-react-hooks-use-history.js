// src/use-history.ts
import { HistoryExtension } from "@remirror/extension-history";
import { useExtensionEvent } from "@remirror/react-core";
function useHistory(event, handler) {
  useExtensionEvent(HistoryExtension, event, handler);
}
export {
  useHistory
};
