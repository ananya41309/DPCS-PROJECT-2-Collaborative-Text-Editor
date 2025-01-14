var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/use-mention.ts
import { useCallback as useCallback2, useMemo as useMemo4, useState as useState2 } from "react";
import { MentionExtension } from "@remirror/extension-mention";
import { ChangeReason } from "@remirror/pm/suggest";
import { useExtensionEvent, useHelpers } from "@remirror/react-core";

// src/use-menu-navigation.ts
import {
  Type,
  useMultishift
} from "multishift";
import { useCallback, useMemo as useMemo3, useState } from "react";
import { useCommands } from "@remirror/react-core";

// src/react-hook-utils.ts
function indexFromArrowPress({
  direction,
  matchLength,
  previousIndex
}) {
  return direction === "next" ? previousIndex + 1 > matchLength - 1 ? 0 : previousIndex + 1 : previousIndex - 1 < 0 ? matchLength - 1 : previousIndex - 1;
}

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

// src/use-keymaps.ts
import { useMemo as useMemo2 } from "react";
import { ExtensionPriority as ExtensionPriority2, KeymapExtension as KeymapExtension2 } from "@remirror/core";
import { useExtensionCustomEvent as useExtensionCustomEvent2 } from "@remirror/react-core";
function useKeymaps(bindings, priority = ExtensionPriority2.Medium) {
  const tuple = useMemo2(() => [priority, bindings], [priority, bindings]);
  useExtensionCustomEvent2(KeymapExtension2, "keymap", tuple);
}

// src/use-menu-navigation.ts
var DEFAULT_DISMISS_KEYS = ["Escape", "Tab", "Shift-Tab"];
var DEFAULT_SUBMIT_KEYS = ["Enter"];
function useMenuNavigation(props) {
  const {
    items,
    direction = "vertical",
    isOpen,
    onDismiss,
    onSubmit,
    focusOnClick = true,
    dismissKeys = DEFAULT_DISMISS_KEYS,
    submitKeys = DEFAULT_SUBMIT_KEYS
  } = props;
  const [index, setIndex] = useState(0);
  const { focus } = useCommands();
  const nextShortcut = direction === "vertical" ? "ArrowDown" : "ArrowRight";
  const previousShortcut = direction === "vertical" ? "ArrowUp" : "ArrowLeft";
  const {
    getMenuProps,
    getItemProps: _getItemProps,
    hoveredIndex,
    itemIsSelected,
    indexIsSelected,
    indexIsHovered,
    itemIsHovered
  } = useMultishift({
    items,
    isOpen,
    highlightedIndexes: 0 <= index && index < items.length ? [index] : [],
    type: Type.ControlledMenu
  });
  const homeCallback = useCallback(() => {
    if (!isOpen) {
      return false;
    }
    if (index !== 0) {
      setIndex(0);
    }
    return true;
  }, [index, isOpen]);
  const endCallback = useCallback(() => {
    if (!isOpen) {
      return false;
    }
    if (index === items.length - 1) {
      setIndex(items.length - 1);
    }
    return true;
  }, [items, index, isOpen]);
  const nextCallback = useCallback(() => {
    if (!isOpen) {
      return false;
    }
    setIndex(
      indexFromArrowPress({
        direction: "next",
        matchLength: items.length,
        previousIndex: index
      })
    );
    return true;
  }, [items, index, isOpen]);
  const previousCallback = useCallback(() => {
    if (!isOpen) {
      return false;
    }
    setIndex(
      indexFromArrowPress({
        direction: "previous",
        matchLength: items.length,
        previousIndex: index
      })
    );
    return true;
  }, [items, index, isOpen]);
  const submitCallback = useCallback(() => {
    const item = items[index];
    if (!isOpen || !item) {
      return false;
    }
    return onSubmit(item, "keyPress");
  }, [index, isOpen, items, onSubmit]);
  const dismissCallback = useCallback(() => {
    if (!isOpen) {
      return false;
    }
    return onDismiss();
  }, [isOpen, onDismiss]);
  const getItemProps = useCallback(
    (itemProps) => __spreadValues({}, _getItemProps(__spreadProps(__spreadValues({}, itemProps), {
      onClick: (event) => {
        var _a;
        (_a = itemProps.onClick) == null ? void 0 : _a.call(itemProps, event);
        onSubmit(itemProps.item, "click");
        if (focusOnClick) {
          focus();
        }
      }
    }))),
    [_getItemProps, onSubmit, focus, focusOnClick]
  );
  const submitBindings = useMemo3(() => {
    const bindings = {};
    for (const key of submitKeys) {
      bindings[key] = submitCallback;
    }
    return bindings;
  }, [submitCallback, submitKeys]);
  const dismissBindings = useMemo3(() => {
    const bindings = {};
    for (const key of dismissKeys) {
      bindings[key] = dismissCallback;
    }
    return bindings;
  }, [dismissCallback, dismissKeys]);
  useKeymap(nextShortcut, nextCallback);
  useKeymap(previousShortcut, previousCallback);
  useKeymap("Home", homeCallback);
  useKeymap("Cmd-".concat(nextShortcut), homeCallback);
  useKeymap("End", nextCallback);
  useKeymap("Cmd-".concat(previousShortcut), endCallback);
  useKeymaps(submitBindings);
  useKeymaps(dismissBindings);
  return useMemo3(
    () => ({
      getMenuProps,
      getItemProps,
      hoveredIndex,
      indexIsSelected,
      itemIsSelected,
      indexIsHovered,
      itemIsHovered,
      index,
      setIndex
    }),
    [
      getItemProps,
      getMenuProps,
      hoveredIndex,
      indexIsHovered,
      indexIsSelected,
      itemIsHovered,
      itemIsSelected,
      index
    ]
  );
}

// src/use-mention.ts
function useMention(props) {
  const {
    items,
    ignoreMatchesOnDismiss = true,
    onExit,
    direction,
    dismissKeys,
    focusOnClick,
    submitKeys
  } = props;
  const [state, setState] = useState2(null);
  const helpers = useHelpers();
  const isOpen = !!state;
  const onDismiss = useCallback2(() => {
    if (!state) {
      return false;
    }
    const { range, name } = state;
    if (ignoreMatchesOnDismiss) {
      helpers.getSuggestMethods().addIgnored({ from: range.from, name, specific: true });
    }
    setState(null);
    return true;
  }, [helpers, ignoreMatchesOnDismiss, state]);
  const onSubmit = useCallback2(
    (item) => {
      if (!state) {
        return false;
      }
      const { command } = state;
      command(item);
      return true;
    },
    [state]
  );
  const menu = useMenuNavigation({
    items,
    isOpen,
    onDismiss,
    onSubmit,
    direction,
    dismissKeys,
    focusOnClick,
    submitKeys
  });
  const { setIndex } = menu;
  const onChange = useCallback2(
    (props2, cmd) => {
      const {
        query,
        text,
        range,
        ignoreNextExit,
        name,
        exitReason,
        changeReason,
        textAfter,
        defaultAppendTextValue
      } = props2;
      if (changeReason) {
        const command = (attrs) => {
          ignoreNextExit();
          const regex = /^\s+/;
          const appendText = regex.test(textAfter) ? "" : defaultAppendTextValue;
          cmd(__spreadValues({ appendText }, attrs));
          setState(null);
        };
        if (changeReason !== ChangeReason.Move) {
          setIndex(0);
        }
        setState({ reason: changeReason, name, query, text, range, command });
        return;
      }
      if (!exitReason || !onExit) {
        setState(null);
        return;
      }
      const exitCommand = (attrs) => {
        cmd(__spreadValues({ appendText: "" }, attrs));
      };
      onExit({ reason: exitReason, name, query, text, range }, exitCommand);
      setState(null);
    },
    [setIndex, onExit]
  );
  useExtensionEvent(MentionExtension, "onChange", onChange);
  return useMemo4(() => __spreadProps(__spreadValues({}, menu), { state }), [menu, state]);
}
export {
  useMention
};
