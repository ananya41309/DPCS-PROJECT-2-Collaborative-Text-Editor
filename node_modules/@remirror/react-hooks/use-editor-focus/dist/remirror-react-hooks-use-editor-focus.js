// src/use-editor-focus.ts
import { useCallback, useState } from "react";
import { isElementDomNode } from "@remirror/core";
import { useRemirrorContext } from "@remirror/react-core";

// src/use-editor-event.ts
import { EventsExtension } from "@remirror/extension-events";
import { useExtensionEvent } from "@remirror/react-core";
function useEditorEvent(event, handler) {
  useExtensionEvent(EventsExtension, event, handler);
}

// src/use-editor-focus.ts
function useEditorFocus(props = {}) {
  const { ignoredElements = [], blurOnInactive = false } = props;
  const { view, commands } = useRemirrorContext();
  const [isFocused, setIsFocused] = useState(() => view.hasFocus());
  useEditorEvent(
    "blur",
    useCallback(
      (event) => {
        const focusedElement = isElementDomNode(event.relatedTarget) ? event.relatedTarget : document.activeElement;
        const ignoreBlur = !blurOnInactive && !focusedElement;
        if (ignoreBlur || view.dom.contains(focusedElement)) {
          return false;
        }
        for (const element of ignoredElements) {
          if (element == null ? void 0 : element.contains(focusedElement)) {
            return false;
          }
        }
        setIsFocused(false);
        return false;
      },
      [blurOnInactive, ignoredElements, view.dom]
    )
  );
  useEditorEvent(
    "focus",
    useCallback(
      (_) => {
        if (isFocused) {
          return false;
        }
        setIsFocused(true);
        return false;
      },
      [isFocused]
    )
  );
  return [isFocused, commands.focus];
}
export {
  useEditorFocus
};
