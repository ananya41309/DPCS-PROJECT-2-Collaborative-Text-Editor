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

// src/use-menu-navigation.ts
var use_menu_navigation_exports = {};
__export(use_menu_navigation_exports, {
  useMenuNavigation: () => useMenuNavigation
});
module.exports = __toCommonJS(use_menu_navigation_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useMenuNavigation
});
