// src/use-keymaps.ts
import { useMemo } from "react";
import { ExtensionPriority, KeymapExtension } from "@remirror/core";
import { useExtensionCustomEvent } from "@remirror/react-core";
function useKeymaps(bindings, priority = ExtensionPriority.Medium) {
  const tuple = useMemo(() => [priority, bindings], [priority, bindings]);
  useExtensionCustomEvent(KeymapExtension, "keymap", tuple);
}
export {
  useKeymaps
};
