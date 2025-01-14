// src/use-keymap.ts
import { useMemo } from "react";
import {
  ExtensionPriority,
  KeymapExtension
} from "@remirror/core";
import { useExtensionCustomEvent } from "@remirror/react-core";
function useKeymap(name, handler, priority = ExtensionPriority.Medium) {
  const tuple = useMemo(
    () => [priority, { [name]: handler }],
    [priority, name, handler]
  );
  useExtensionCustomEvent(KeymapExtension, "keymap", tuple);
}
export {
  useKeymap
};
