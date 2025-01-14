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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  indexFromArrowPress: () => indexFromArrowPress,
  useEditorEvent: () => useEditorEvent,
  useEditorFocus: () => useEditorFocus,
  useEmoji: () => useEmoji,
  useHistory: () => useHistory,
  useHover: () => useHover,
  useKeymap: () => useKeymap,
  useKeymaps: () => useKeymaps,
  useMention: () => useMention,
  useMentionAtom: () => useMentionAtom,
  useMenuNavigation: () => useMenuNavigation,
  useMultiPositioner: () => useMultiPositioner,
  usePositioner: () => usePositioner,
  useSuggest: () => useSuggest
});
module.exports = __toCommonJS(src_exports);

// src/react-hook-utils.ts
function indexFromArrowPress({
  direction,
  matchLength,
  previousIndex
}) {
  return direction === "next" ? previousIndex + 1 > matchLength - 1 ? 0 : previousIndex + 1 : previousIndex - 1 < 0 ? matchLength - 1 : previousIndex - 1;
}

// src/use-editor-event.ts
var import_extension_events = require("@remirror/extension-events");
var import_react_core = require("@remirror/react-core");
function useEditorEvent(event, handler) {
  (0, import_react_core.useExtensionEvent)(import_extension_events.EventsExtension, event, handler);
}

// src/use-editor-focus.ts
var import_react = require("react");
var import_core = require("@remirror/core");
var import_react_core2 = require("@remirror/react-core");
function useEditorFocus(props = {}) {
  const { ignoredElements = [], blurOnInactive = false } = props;
  const { view, commands } = (0, import_react_core2.useRemirrorContext)();
  const [isFocused, setIsFocused] = (0, import_react.useState)(() => view.hasFocus());
  useEditorEvent(
    "blur",
    (0, import_react.useCallback)(
      (event) => {
        const focusedElement = (0, import_core.isElementDomNode)(event.relatedTarget) ? event.relatedTarget : document.activeElement;
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
    (0, import_react.useCallback)(
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

// src/use-emoji.ts
var import_react5 = require("react");
var import_core4 = require("@remirror/core");
var import_extension_emoji = require("@remirror/extension-emoji");
var import_react_core6 = require("@remirror/react-core");

// src/use-menu-navigation.ts
var import_multishift = require("multishift");
var import_react4 = require("react");
var import_react_core5 = require("@remirror/react-core");

// src/use-keymap.ts
var import_react2 = require("react");
var import_core2 = require("@remirror/core");
var import_react_core3 = require("@remirror/react-core");
function useKeymap(name, handler, priority = import_core2.ExtensionPriority.Medium) {
  const tuple = (0, import_react2.useMemo)(
    () => [priority, { [name]: handler }],
    [priority, name, handler]
  );
  (0, import_react_core3.useExtensionCustomEvent)(import_core2.KeymapExtension, "keymap", tuple);
}

// src/use-keymaps.ts
var import_react3 = require("react");
var import_core3 = require("@remirror/core");
var import_react_core4 = require("@remirror/react-core");
function useKeymaps(bindings, priority = import_core3.ExtensionPriority.Medium) {
  const tuple = (0, import_react3.useMemo)(() => [priority, bindings], [priority, bindings]);
  (0, import_react_core4.useExtensionCustomEvent)(import_core3.KeymapExtension, "keymap", tuple);
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
  const [index, setIndex] = (0, import_react4.useState)(0);
  const { focus } = (0, import_react_core5.useCommands)();
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
  const homeCallback = (0, import_react4.useCallback)(() => {
    if (!isOpen) {
      return false;
    }
    if (index !== 0) {
      setIndex(0);
    }
    return true;
  }, [index, isOpen]);
  const endCallback = (0, import_react4.useCallback)(() => {
    if (!isOpen) {
      return false;
    }
    if (index === items.length - 1) {
      setIndex(items.length - 1);
    }
    return true;
  }, [items, index, isOpen]);
  const nextCallback = (0, import_react4.useCallback)(() => {
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
  const previousCallback = (0, import_react4.useCallback)(() => {
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
  const submitCallback = (0, import_react4.useCallback)(() => {
    const item = items[index];
    if (!isOpen || !item) {
      return false;
    }
    return onSubmit(item, "keyPress");
  }, [index, isOpen, items, onSubmit]);
  const dismissCallback = (0, import_react4.useCallback)(() => {
    if (!isOpen) {
      return false;
    }
    return onDismiss();
  }, [isOpen, onDismiss]);
  const getItemProps = (0, import_react4.useCallback)(
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
  const submitBindings = (0, import_react4.useMemo)(() => {
    const bindings = {};
    for (const key of submitKeys) {
      bindings[key] = submitCallback;
    }
    return bindings;
  }, [submitCallback, submitKeys]);
  const dismissBindings = (0, import_react4.useMemo)(() => {
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
  return (0, import_react4.useMemo)(
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
  const [state, setState] = (0, import_react5.useState)(null);
  const helpers = (0, import_react_core6.useHelpers)();
  const items = (_a = state == null ? void 0 : state.list) != null ? _a : emptyEmoji;
  const isOpen = !!state;
  const onDismiss = (0, import_react5.useCallback)(() => {
    if (!state) {
      return false;
    }
    helpers.getSuggestMethods().addIgnored({ from: state.range.from, name: "emoji", specific: true });
    setState(__spreadProps(__spreadValues({}, state), { exit: true }));
    return true;
  }, [helpers, state]);
  const onSubmit = (0, import_react5.useCallback)(
    (emoji) => {
      if (!state || (0, import_core4.isEmptyArray)(state.list)) {
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
  const onChange = (0, import_react5.useCallback)(
    (props2) => {
      const { change, exit, query, moji, apply, range } = props2;
      if (change) {
        setIndex(0);
        setState({
          list: (0, import_core4.take)(moji.search(query), 20).map((emoji) => __spreadProps(__spreadValues({}, emoji), { url: moji.url(emoji) })),
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
  (0, import_react_core6.useExtensionEvent)(import_extension_emoji.EmojiExtension, "suggestEmoji", onChange);
  return (0, import_react5.useMemo)(() => __spreadProps(__spreadValues({}, menu), { state }), [menu, state]);
}

// src/use-history.ts
var import_extension_history = require("@remirror/extension-history");
var import_react_core7 = require("@remirror/react-core");
function useHistory(event, handler) {
  (0, import_react_core7.useExtensionEvent)(import_extension_history.HistoryExtension, event, handler);
}

// src/use-hover.ts
function useHover(handler) {
  useEditorEvent("hover", handler);
}

// src/use-mention.ts
var import_react6 = require("react");
var import_extension_mention = require("@remirror/extension-mention");
var import_suggest = require("@remirror/pm/suggest");
var import_react_core8 = require("@remirror/react-core");
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
  const [state, setState] = (0, import_react6.useState)(null);
  const helpers = (0, import_react_core8.useHelpers)();
  const isOpen = !!state;
  const onDismiss = (0, import_react6.useCallback)(() => {
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
  const onSubmit = (0, import_react6.useCallback)(
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
  const onChange = (0, import_react6.useCallback)(
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
        if (changeReason !== import_suggest.ChangeReason.Move) {
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
  (0, import_react_core8.useExtensionEvent)(import_extension_mention.MentionExtension, "onChange", onChange);
  return (0, import_react6.useMemo)(() => __spreadProps(__spreadValues({}, menu), { state }), [menu, state]);
}

// src/use-mention-atom.ts
var import_react7 = require("react");
var import_extension_mention_atom = require("@remirror/extension-mention-atom");
var import_suggest2 = require("@remirror/pm/suggest");
var import_react_core9 = require("@remirror/react-core");
function useMentionAtom(props) {
  const {
    ignoreMatchesOnDismiss = true,
    items,
    direction,
    dismissKeys,
    focusOnClick,
    submitKeys,
    replacementType
  } = props;
  const [state, setState] = (0, import_react7.useState)(null);
  const helpers = (0, import_react_core9.useHelpers)();
  const isOpen = !!state;
  const onDismiss = (0, import_react7.useCallback)(() => {
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
  const onSubmit = (0, import_react7.useCallback)(
    (item) => {
      if (!state) {
        return false;
      }
      state.command(__spreadValues({ replacementType }, item));
      return true;
    },
    [state, replacementType]
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
  const onChange = (0, import_react7.useCallback)(
    (props2, command) => {
      const { query, range, name, exitReason, changeReason, text } = props2;
      if (exitReason) {
        setState(null);
        return;
      }
      if (!changeReason) {
        return;
      }
      if (changeReason !== import_suggest2.ChangeReason.Move) {
        setIndex(0);
      }
      setState({
        query,
        range,
        name,
        reason: changeReason,
        text,
        command: (attrs) => {
          command(attrs);
          setState(null);
        }
      });
    },
    [setIndex]
  );
  (0, import_react_core9.useExtensionEvent)(import_extension_mention_atom.MentionAtomExtension, "onChange", onChange);
  return (0, import_react7.useMemo)(() => __spreadProps(__spreadValues({}, menu), { state }), [menu, state]);
}

// src/use-multi-positioner.ts
var import_react10 = require("react");
var import_core5 = require("@remirror/core");
var import_extension_positioner = require("@remirror/extension-positioner");
var import_react_core10 = require("@remirror/react-core");

// src/use-previous.ts
var import_react9 = require("react");

// src/use-isomorphic-layout-effect.ts
var import_react8 = require("react");
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? import_react8.useLayoutEffect : import_react8.useEffect;

// src/use-previous.ts
function usePrevious(value) {
  const ref = (0, import_react9.useRef)();
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// src/use-multi-positioner.ts
function useMultiPositioner(positioner, deps) {
  const [state, setState] = (0, import_react10.useState)([]);
  const [memoizedPositioner, setMemoizedPositioner] = (0, import_react10.useState)(() => (0, import_extension_positioner.getPositioner)(positioner));
  const [collectRefs, setCollectRefs] = (0, import_react10.useState)([]);
  const positionerRef = (0, import_react10.useRef)(positioner);
  const previousPositioner = usePrevious(memoizedPositioner);
  positionerRef.current = positioner;
  (0, import_react_core10.useExtension)(
    import_extension_positioner.PositionerExtension,
    ({ addCustomHandler }) => {
      const positioner2 = (0, import_extension_positioner.getPositioner)(positionerRef.current);
      const dispose = addCustomHandler("positioner", positioner2);
      setMemoizedPositioner(positioner2);
      return dispose;
    },
    deps
  );
  (0, import_react10.useLayoutEffect)(() => {
    const disposeUpdate = memoizedPositioner.addListener("update", (options) => {
      const items = [];
      for (const { id, data, setElement } of options) {
        const ref = (element) => {
          if (!element) {
            return;
          }
          setElement(element);
        };
        items.push({ id, data, ref });
      }
      setCollectRefs(items);
    });
    const disposeDone = memoizedPositioner.addListener("done", (options) => {
      setState(options);
    });
    if (previousPositioner == null ? void 0 : previousPositioner.recentUpdate) {
      memoizedPositioner.onActiveChanged(previousPositioner == null ? void 0 : previousPositioner.recentUpdate);
    }
    return () => {
      disposeUpdate();
      disposeDone();
    };
  }, [memoizedPositioner, previousPositioner]);
  return (0, import_react10.useMemo)(() => {
    const positions = [];
    for (const [index, { ref, data, id: key }] of collectRefs.entries()) {
      const stateValue = state[index];
      const { element, position = {} } = stateValue != null ? stateValue : {};
      const absolutePosition = __spreadValues(__spreadValues({}, import_extension_positioner.defaultAbsolutePosition), (0, import_core5.omitUndefined)(position));
      positions.push(__spreadValues({ ref, element, data, key }, absolutePosition));
    }
    return positions;
  }, [collectRefs, state]);
}

// src/use-positioner.ts
var import_react11 = require("react");
var import_core6 = require("@remirror/core");
var import_extension_positioner2 = require("@remirror/extension-positioner");
function usePositioner(positioner, activeOrDeps) {
  const deps = activeOrDeps == null || (0, import_core6.isBoolean)(activeOrDeps) ? [positioner] : activeOrDeps;
  const isActive = (0, import_core6.isBoolean)(activeOrDeps) ? activeOrDeps : true;
  const key = (0, import_react11.useRef)((0, import_core6.uniqueId)());
  const positions = useMultiPositioner(positioner, deps);
  const position = positions[0];
  return (0, import_react11.useMemo)(() => {
    if (position && isActive) {
      return __spreadProps(__spreadValues({}, position), { active: true });
    }
    return __spreadProps(__spreadValues({}, import_extension_positioner2.defaultAbsolutePosition), {
      ref: void 0,
      data: {},
      active: false,
      key: key.current
    });
  }, [isActive, position]);
}

// src/use-suggest.ts
var import_react12 = require("react");
var import_core7 = require("@remirror/core");
var import_extension_positioner3 = require("@remirror/extension-positioner");
var import_react_core11 = require("@remirror/react-core");
function useSuggest(props) {
  const { helpers } = (0, import_react_core11.useRemirrorContext)();
  const [hookState, setHookState] = (0, import_react12.useState)(() => __spreadValues({
    change: void 0,
    exit: void 0,
    shouldResetChangeState: false,
    shouldResetExitState: false
  }, helpers.getSuggestMethods()));
  const stateRef = (0, import_react12.useRef)({});
  const onChange = (0, import_react12.useCallback)((options) => {
    const { changeReason, exitReason, match, query, text, range } = options;
    const stateUpdate = __spreadValues({}, stateRef.current);
    stateRef.current = {};
    if (changeReason) {
      stateUpdate.change = { match, query, text, range, reason: changeReason };
      stateUpdate.shouldResetChangeState = false;
      if (!exitReason) {
        stateUpdate.exit = void 0;
      }
    }
    if (exitReason) {
      stateUpdate.exit = { match, query, text, range, reason: exitReason };
      stateUpdate.shouldResetExitState = false;
      if (!changeReason) {
        stateUpdate.change = void 0;
      }
    }
    if (!(0, import_core7.isEmptyObject)(stateUpdate)) {
      setHookState((prevState) => __spreadValues(__spreadValues({}, prevState), stateUpdate));
    }
  }, []);
  const onApplyState = (0, import_react12.useCallback)(
    ({ tr, state, previousState }) => {
      if (!(0, import_extension_positioner3.hasStateChanged)({ tr, state, previousState }) || helpers.getSuggestState().removed) {
        return;
      }
      const stateUpdate = __spreadValues({}, stateRef.current);
      if ((hookState.shouldResetChangeState || stateUpdate.shouldResetChangeState) && hookState.change) {
        stateUpdate.change = void 0;
      }
      if ((hookState.shouldResetExitState || stateUpdate.shouldResetExitState) && hookState.exit) {
        stateUpdate.exit = void 0;
      }
      if (!(hookState.shouldResetChangeState || stateUpdate.shouldResetChangeState) && hookState.change) {
        stateUpdate.shouldResetChangeState = true;
      }
      if (!(hookState.shouldResetExitState || stateUpdate.shouldResetExitState) && hookState.exit) {
        stateUpdate.shouldResetExitState = true;
      }
      stateRef.current = stateUpdate;
    },
    [hookState, helpers]
  );
  (0, import_react_core11.useExtensionEvent)(import_core7.PluginsExtension, "applyState", onApplyState);
  const suggester = (0, import_react12.useMemo)(
    () => __spreadProps(__spreadValues({}, props), { onChange }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, ...Object.values(props)]
  );
  (0, import_react_core11.useExtensionCustomEvent)(import_core7.SuggestExtension, "suggester", suggester);
  return (0, import_react12.useMemo)(
    () => ({
      addIgnored: hookState.addIgnored,
      change: hookState.change,
      exit: hookState.exit,
      clearIgnored: hookState.clearIgnored,
      ignoreNextExit: hookState.ignoreNextExit,
      removeIgnored: hookState.removeIgnored,
      setMarkRemoved: hookState.setMarkRemoved
    }),
    [
      hookState.addIgnored,
      hookState.change,
      hookState.clearIgnored,
      hookState.exit,
      hookState.ignoreNextExit,
      hookState.removeIgnored,
      hookState.setMarkRemoved
    ]
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  indexFromArrowPress,
  useEditorEvent,
  useEditorFocus,
  useEmoji,
  useHistory,
  useHover,
  useKeymap,
  useKeymaps,
  useMention,
  useMentionAtom,
  useMenuNavigation,
  useMultiPositioner,
  usePositioner,
  useSuggest
});
