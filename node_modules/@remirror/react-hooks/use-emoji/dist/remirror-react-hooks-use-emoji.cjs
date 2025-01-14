"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/use-emoji.ts
var use_emoji_exports = {};
__export(use_emoji_exports, {
  useEmoji: () => useEmoji
});
module.exports = __toCommonJS(use_emoji_exports);
var import_react4 = require("react");
var import_core3 = require("@remirror/core");
var import_extension_emoji = require("@remirror/extension-emoji");
var import_react_core4 = require("@remirror/react-core");

// src/use-menu-navigation.ts
var import_multishift = require("multishift");
var import_react3 = require("react");
var import_react_core3 = require("@remirror/react-core");

// src/react-hook-utils.ts
function indexFromArrowPress({
  direction,
  matchLength,
  previousIndex
}) {
  return direction === "next" ? previousIndex + 1 > matchLength - 1 ? 0 : previousIndex + 1 : previousIndex - 1 < 0 ? matchLength - 1 : previousIndex - 1;
}

// src/use-keymap.ts
var import_react = require("react");
var import_core = require("@remirror/core");
var import_react_core = require("@remirror/react-core");
function useKeymap(name, handler, priority = import_core.ExtensionPriority.Medium) {
  const tuple = (0, import_react.useMemo)(
    () => [priority, { [name]: handler }],
    [priority, name, handler]
  );
  (0, import_react_core.useExtensionCustomEvent)(import_core.KeymapExtension, "keymap", tuple);
}

// src/use-keymaps.ts
var import_react2 = require("react");
var import_core2 = require("@remirror/core");
var import_react_core2 = require("@remirror/react-core");
function useKeymaps(bindings, priority = import_core2.ExtensionPriority.Medium) {
  const tuple = (0, import_react2.useMemo)(() => [priority, bindings], [priority, bindings]);
  (0, import_react_core2.useExtensionCustomEvent)(import_core2.KeymapExtension, "keymap", tuple);
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
  const [index, setIndex] = (0, import_react3.useState)(0);
  const { focus } = (0, import_react_core3.useCommands)();
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
  } = (0, import_multishift.useMultishift)({
    items,
    isOpen,
    highlightedIndexes: 0 <= index && index < items.length ? [index] : [],
    type: import_multishift.Type.ControlledMenu
  });
  const homeCallback = (0, import_react3.useCallback)(() => {
    if (!isOpen) {
      return false;
    }
    if (index !== 0) {
      setIndex(0);
    }
    return true;
  }, [index, isOpen]);
  const endCallback = (0, import_react3.useCallback)(() => {
    if (!isOpen) {
      return false;
    }
    if (index === items.length - 1) {
      setIndex(items.length - 1);
    }
    return true;
  }, [items, index, isOpen]);
  const nextCallback = (0, import_react3.useCallback)(() => {
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
  const previousCallback = (0, import_react3.useCallback)(() => {
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
  const submitCallback = (0, import_react3.useCallback)(() => {
    const item = items[index];
    if (!isOpen || !item) {
      return false;
    }
    return onSubmit(item, "keyPress");
  }, [index, isOpen, items, onSubmit]);
  const dismissCallback = (0, import_react3.useCallback)(() => {
    if (!isOpen) {
      return false;
    }
    return onDismiss();
  }, [isOpen, onDismiss]);
  const getItemProps = (0, import_react3.useCallback)(
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
  const submitBindings = (0, import_react3.useMemo)(() => {
    const bindings = {};
    for (const key of submitKeys) {
      bindings[key] = submitCallback;
    }
    return bindings;
  }, [submitCallback, submitKeys]);
  const dismissBindings = (0, import_react3.useMemo)(() => {
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
  return (0, import_react3.useMemo)(
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

// src/use-emoji.ts
var emptyEmoji = [];
function useEmoji(props = {}) {
  var _a;
  const { direction, dismissKeys, focusOnClick, submitKeys } = props;
  const [state, setState] = (0, import_react4.useState)(null);
  const helpers = (0, import_react_core4.useHelpers)();
  const items = (_a = state == null ? void 0 : state.list) != null ? _a : emptyEmoji;
  const isOpen = !!state;
  const onDismiss = (0, import_react4.useCallback)(() => {
    if (!state) {
      return false;
    }
    helpers.getSuggestMethods().addIgnored({ from: state.range.from, name: "emoji", specific: true });
    setState(__spreadProps(__spreadValues({}, state), { exit: true }));
    return true;
  }, [helpers, state]);
  const onSubmit = (0, import_react4.useCallback)(
    (emoji) => {
      if (!state || (0, import_core3.isEmptyArray)(state.list)) {
        return false;
      }
      state.apply(emoji.emoji);
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
  const onChange = (0, import_react4.useCallback)(
    (props2) => {
      const { change, exit, query, moji, apply, range } = props2;
      if (change) {
        setIndex(0);
        setState({
          list: (0, import_core3.take)(moji.search(query), 20).map((emoji) => __spreadProps(__spreadValues({}, emoji), { url: moji.url(emoji) })),
          apply: (code) => {
            setState(null);
            return apply(code);
          },
          range,
          query,
          exit
        });
      }
      if (exit) {
        setState(null);
      }
    },
    [setIndex]
  );
  (0, import_react_core4.useExtensionEvent)(import_extension_emoji.EmojiExtension, "suggestEmoji", onChange);
  return (0, import_react4.useMemo)(() => __spreadProps(__spreadValues({}, menu), { state }), [menu, state]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useEmoji
});
