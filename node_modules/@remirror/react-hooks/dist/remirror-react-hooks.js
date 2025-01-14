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

// src/react-hook-utils.ts
function indexFromArrowPress({
  direction,
  matchLength,
  previousIndex
}) {
  return direction === "next" ? previousIndex + 1 > matchLength - 1 ? 0 : previousIndex + 1 : previousIndex - 1 < 0 ? matchLength - 1 : previousIndex - 1;
}

// src/use-editor-event.ts
import { EventsExtension } from "@remirror/extension-events";
import { useExtensionEvent } from "@remirror/react-core";
function useEditorEvent(event, handler) {
  useExtensionEvent(EventsExtension, event, handler);
}

// src/use-editor-focus.ts
import { useCallback, useState } from "react";
import { isElementDomNode } from "@remirror/core";
import { useRemirrorContext } from "@remirror/react-core";
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

// src/use-emoji.ts
import { useCallback as useCallback3, useMemo as useMemo4, useState as useState3 } from "react";
import { isEmptyArray, take } from "@remirror/core";
import {
  EmojiExtension
} from "@remirror/extension-emoji";
import { useExtensionEvent as useExtensionEvent2, useHelpers } from "@remirror/react-core";

// src/use-menu-navigation.ts
import {
  Type,
  useMultishift
} from "multishift";
import { useCallback as useCallback2, useMemo as useMemo3, useState as useState2 } from "react";
import { useCommands } from "@remirror/react-core";

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
  const [index, setIndex] = useState2(0);
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
  const homeCallback = useCallback2(() => {
    if (!isOpen) {
      return false;
    }
    if (index !== 0) {
      setIndex(0);
    }
    return true;
  }, [index, isOpen]);
  const endCallback = useCallback2(() => {
    if (!isOpen) {
      return false;
    }
    if (index === items.length - 1) {
      setIndex(items.length - 1);
    }
    return true;
  }, [items, index, isOpen]);
  const nextCallback = useCallback2(() => {
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
  const previousCallback = useCallback2(() => {
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
  const submitCallback = useCallback2(() => {
    const item = items[index];
    if (!isOpen || !item) {
      return false;
    }
    return onSubmit(item, "keyPress");
  }, [index, isOpen, items, onSubmit]);
  const dismissCallback = useCallback2(() => {
    if (!isOpen) {
      return false;
    }
    return onDismiss();
  }, [isOpen, onDismiss]);
  const getItemProps = useCallback2(
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

// src/use-emoji.ts
var emptyEmoji = [];
function useEmoji(props = {}) {
  var _a;
  const { direction, dismissKeys, focusOnClick, submitKeys } = props;
  const [state, setState] = useState3(null);
  const helpers = useHelpers();
  const items = (_a = state == null ? void 0 : state.list) != null ? _a : emptyEmoji;
  const isOpen = !!state;
  const onDismiss = useCallback3(() => {
    if (!state) {
      return false;
    }
    helpers.getSuggestMethods().addIgnored({ from: state.range.from, name: "emoji", specific: true });
    setState(__spreadProps(__spreadValues({}, state), { exit: true }));
    return true;
  }, [helpers, state]);
  const onSubmit = useCallback3(
    (emoji) => {
      if (!state || isEmptyArray(state.list)) {
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
  const onChange = useCallback3(
    (props2) => {
      const { change, exit, query, moji, apply, range } = props2;
      if (change) {
        setIndex(0);
        setState({
          list: take(moji.search(query), 20).map((emoji) => __spreadProps(__spreadValues({}, emoji), { url: moji.url(emoji) })),
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
  useExtensionEvent2(EmojiExtension, "suggestEmoji", onChange);
  return useMemo4(() => __spreadProps(__spreadValues({}, menu), { state }), [menu, state]);
}

// src/use-history.ts
import { HistoryExtension } from "@remirror/extension-history";
import { useExtensionEvent as useExtensionEvent3 } from "@remirror/react-core";
function useHistory(event, handler) {
  useExtensionEvent3(HistoryExtension, event, handler);
}

// src/use-hover.ts
function useHover(handler) {
  useEditorEvent("hover", handler);
}

// src/use-mention.ts
import { useCallback as useCallback4, useMemo as useMemo5, useState as useState4 } from "react";
import { MentionExtension } from "@remirror/extension-mention";
import { ChangeReason } from "@remirror/pm/suggest";
import { useExtensionEvent as useExtensionEvent4, useHelpers as useHelpers2 } from "@remirror/react-core";
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
  const [state, setState] = useState4(null);
  const helpers = useHelpers2();
  const isOpen = !!state;
  const onDismiss = useCallback4(() => {
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
  const onSubmit = useCallback4(
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
  const onChange = useCallback4(
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
  useExtensionEvent4(MentionExtension, "onChange", onChange);
  return useMemo5(() => __spreadProps(__spreadValues({}, menu), { state }), [menu, state]);
}

// src/use-mention-atom.ts
import { useCallback as useCallback5, useMemo as useMemo6, useState as useState5 } from "react";
import {
  MentionAtomExtension
} from "@remirror/extension-mention-atom";
import { ChangeReason as ChangeReason2 } from "@remirror/pm/suggest";
import { useExtensionEvent as useExtensionEvent5, useHelpers as useHelpers3 } from "@remirror/react-core";
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
  const [state, setState] = useState5(null);
  const helpers = useHelpers3();
  const isOpen = !!state;
  const onDismiss = useCallback5(() => {
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
  const onSubmit = useCallback5(
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
  const onChange = useCallback5(
    (props2, command) => {
      const { query, range, name, exitReason, changeReason, text } = props2;
      if (exitReason) {
        setState(null);
        return;
      }
      if (!changeReason) {
        return;
      }
      if (changeReason !== ChangeReason2.Move) {
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
  useExtensionEvent5(MentionAtomExtension, "onChange", onChange);
  return useMemo6(() => __spreadProps(__spreadValues({}, menu), { state }), [menu, state]);
}

// src/use-multi-positioner.ts
import { useLayoutEffect as useLayoutEffect2, useMemo as useMemo7, useRef as useRef2, useState as useState6 } from "react";
import { omitUndefined } from "@remirror/core";
import {
  defaultAbsolutePosition,
  getPositioner,
  PositionerExtension
} from "@remirror/extension-positioner";
import { useExtension } from "@remirror/react-core";

// src/use-previous.ts
import { useRef } from "react";

// src/use-isomorphic-layout-effect.ts
import { useEffect, useLayoutEffect } from "react";
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;

// src/use-previous.ts
function usePrevious(value) {
  const ref = useRef();
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// src/use-multi-positioner.ts
function useMultiPositioner(positioner, deps) {
  const [state, setState] = useState6([]);
  const [memoizedPositioner, setMemoizedPositioner] = useState6(() => getPositioner(positioner));
  const [collectRefs, setCollectRefs] = useState6([]);
  const positionerRef = useRef2(positioner);
  const previousPositioner = usePrevious(memoizedPositioner);
  positionerRef.current = positioner;
  useExtension(
    PositionerExtension,
    ({ addCustomHandler }) => {
      const positioner2 = getPositioner(positionerRef.current);
      const dispose = addCustomHandler("positioner", positioner2);
      setMemoizedPositioner(positioner2);
      return dispose;
    },
    deps
  );
  useLayoutEffect2(() => {
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
  return useMemo7(() => {
    const positions = [];
    for (const [index, { ref, data, id: key }] of collectRefs.entries()) {
      const stateValue = state[index];
      const { element, position = {} } = stateValue != null ? stateValue : {};
      const absolutePosition = __spreadValues(__spreadValues({}, defaultAbsolutePosition), omitUndefined(position));
      positions.push(__spreadValues({ ref, element, data, key }, absolutePosition));
    }
    return positions;
  }, [collectRefs, state]);
}

// src/use-positioner.ts
import { useMemo as useMemo8, useRef as useRef3 } from "react";
import { isBoolean, uniqueId } from "@remirror/core";
import {
  defaultAbsolutePosition as defaultAbsolutePosition2
} from "@remirror/extension-positioner";
function usePositioner(positioner, activeOrDeps) {
  const deps = activeOrDeps == null || isBoolean(activeOrDeps) ? [positioner] : activeOrDeps;
  const isActive = isBoolean(activeOrDeps) ? activeOrDeps : true;
  const key = useRef3(uniqueId());
  const positions = useMultiPositioner(positioner, deps);
  const position = positions[0];
  return useMemo8(() => {
    if (position && isActive) {
      return __spreadProps(__spreadValues({}, position), { active: true });
    }
    return __spreadProps(__spreadValues({}, defaultAbsolutePosition2), {
      ref: void 0,
      data: {},
      active: false,
      key: key.current
    });
  }, [isActive, position]);
}

// src/use-suggest.ts
import { useCallback as useCallback6, useMemo as useMemo9, useRef as useRef4, useState as useState7 } from "react";
import {
  isEmptyObject,
  PluginsExtension,
  SuggestExtension
} from "@remirror/core";
import { hasStateChanged } from "@remirror/extension-positioner";
import {
  useExtensionCustomEvent as useExtensionCustomEvent3,
  useExtensionEvent as useExtensionEvent6,
  useRemirrorContext as useRemirrorContext2
} from "@remirror/react-core";
function useSuggest(props) {
  const { helpers } = useRemirrorContext2();
  const [hookState, setHookState] = useState7(() => __spreadValues({
    change: void 0,
    exit: void 0,
    shouldResetChangeState: false,
    shouldResetExitState: false
  }, helpers.getSuggestMethods()));
  const stateRef = useRef4({});
  const onChange = useCallback6((options) => {
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
    if (!isEmptyObject(stateUpdate)) {
      setHookState((prevState) => __spreadValues(__spreadValues({}, prevState), stateUpdate));
    }
  }, []);
  const onApplyState = useCallback6(
    ({ tr, state, previousState }) => {
      if (!hasStateChanged({ tr, state, previousState }) || helpers.getSuggestState().removed) {
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
  useExtensionEvent6(PluginsExtension, "applyState", onApplyState);
  const suggester = useMemo9(
    () => __spreadProps(__spreadValues({}, props), { onChange }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, ...Object.values(props)]
  );
  useExtensionCustomEvent3(SuggestExtension, "suggester", suggester);
  return useMemo9(
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
export {
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
};
