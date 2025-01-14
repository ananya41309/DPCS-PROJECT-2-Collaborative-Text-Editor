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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/floating-menu.tsx
import {
  autoPlacement,
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  useFloating
} from "@floating-ui/react";
import React, {
  useCallback,
  useMemo
} from "react";
import { createPortal } from "react-dom";
import { cx, isObject } from "@remirror/core";
import { getPositioner } from "@remirror/extension-positioner";
import { useHelpers } from "@remirror/react-core";
import { useEditorFocus, usePositioner } from "@remirror/react-hooks";
import { ComponentsTheme, ExtensionPositionerTheme } from "@remirror/theme";

// src/commonjs-packages/seznam-compose-react-refs.ts
import _composeRefs from "@seznam/compose-react-refs";
var composeRefs = typeof _composeRefs === "object" && _composeRefs.__esModule && _composeRefs.default ? _composeRefs.default : _composeRefs;

// src/floating-menu.tsx
function useMemoizedPosition(props) {
  const { height, left, top, width } = props;
  return useMemo(() => ({ height, left, top, width }), [height, left, top, width]);
}
var FloatingWrapper = (props) => {
  const {
    containerClass,
    placement = "right-end",
    positioner,
    children,
    blurOnInactive = false,
    ignoredElements = [],
    enabled = true,
    floatingLabel,
    hideWhenInvisible = true,
    renderOutsideEditor = false,
    middleware: propsMiddleware,
    strategy,
    useFloatingPortal
  } = props;
  const [isFocused] = useEditorFocus({ blurOnInactive, ignoredElements });
  const {
    ref,
    active,
    height,
    x: left,
    y: top,
    width,
    visible
  } = usePositioner(() => {
    const active2 = isFocused && enabled;
    const refinedPositioner = getPositioner(positioner);
    return refinedPositioner.active(active2);
  }, [isFocused, enabled, renderOutsideEditor]);
  const shouldShow = (hideWhenInvisible ? visible : true) && active;
  const position = useMemoizedPosition({ height, left, top, width });
  const _placement = isFloatingUIPlacement(placement) ? placement : void 0;
  const middleware = useMemo(() => {
    if (propsMiddleware) {
      return propsMiddleware;
    }
    return [
      _placement ? flip({ padding: 8 }) : autoPlacement({ padding: 8 }),
      offset({ mainAxis: 12 })
    ];
  }, [_placement, propsMiddleware]);
  const { refs, floatingStyles } = useFloating({
    placement: _placement,
    open: visible,
    whileElementsMounted: autoUpdate,
    strategy,
    middleware
  });
  const handleMouseDown = useCallback(
    (e) => {
      if (renderOutsideEditor || useFloatingPortal) {
        e.preventDefault();
      }
    },
    [renderOutsideEditor, useFloatingPortal]
  );
  let floatingElement = /* @__PURE__ */ React.createElement(
    "div",
    {
      "aria-label": floatingLabel,
      ref: refs.setFloating,
      style: floatingStyles,
      className: cx(ComponentsTheme.FLOATING_POPOVER, containerClass),
      onMouseDown: handleMouseDown
    },
    shouldShow && children
  );
  if (!renderOutsideEditor && !useFloatingPortal) {
    floatingElement = /* @__PURE__ */ React.createElement(PositionerPortal, null, floatingElement);
  } else if (useFloatingPortal) {
    const props2 = isObject(useFloatingPortal) ? useFloatingPortal : {};
    floatingElement = /* @__PURE__ */ React.createElement(FloatingPortal, __spreadValues({}, props2), floatingElement);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PositionerPortal, null, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: ExtensionPositionerTheme.POSITIONER,
      style: {
        top: position.top,
        left: position.left,
        width: position.width,
        height: position.height
      },
      ref: composeRefs(ref, refs.setReference)
    }
  )), floatingElement);
};
var PositionerPortal = (props) => {
  const container = useHelpers().getPositionerWidget();
  return createPortal(/* @__PURE__ */ React.createElement(React.Fragment, null, props.children), container);
};
function isFloatingUIPlacement(placement) {
  return !(placement == null ? void 0 : placement.startsWith("auto"));
}

// src/icons/icons-base.tsx
import React2, { createElement } from "react";
import * as Icons from "@remirror/icons";

// src/icons/icons-context.tsx
import { createContext } from "react";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = createContext(DefaultContext);
var IconProvider = IconContext.Provider;

// src/icons/icons-base.tsx
function Tree2Element(tree) {
  return tree.map(
    (node, index) => {
      var _a;
      return createElement(node.tag, __spreadValues({ key: index }, node.attr), Tree2Element((_a = node.child) != null ? _a : []));
    }
  );
}
function GenIcon(tree, viewBox = "0 0 24 24") {
  return (props) => /* @__PURE__ */ React2.createElement(IconBase, __spreadValues({ viewBox }, props), Tree2Element(tree != null ? tree : []));
}
var Icon = (props) => {
  const { name } = props;
  return /* @__PURE__ */ React2.createElement(IconBase, __spreadValues({}, props), Tree2Element(Icons[name]));
};
var IconBase = (props) => {
  const renderSvg = (context) => {
    var _a, _b, _d;
    const computedSize = (_b = (_a = props.size) != null ? _a : context.size) != null ? _b : "1em";
    let className;
    if (context.className) {
      className = context.className;
    }
    if (props.className) {
      className = (className ? "".concat(className, " ") : "") + props.className;
    }
    const _c = props, { title } = _c, svgProps = __objRest(_c, ["title"]);
    return /* @__PURE__ */ React2.createElement(
      "svg",
      __spreadProps(__spreadValues(__spreadValues({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, context.attr), svgProps), {
        className,
        style: __spreadValues(__spreadValues({ color: (_d = props.color) != null ? _d : context.color }, context.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }),
      title && /* @__PURE__ */ React2.createElement("title", null, title),
      props.children
    );
  };
  return /* @__PURE__ */ React2.createElement(IconContext.Consumer, null, renderSvg);
};

// src/popups/emoji-popup-component.tsx
import React3 from "react";
import { cx as cx2 } from "@remirror/core";
import { useEmoji } from "@remirror/react-hooks";
import { ExtensionEmojiTheme } from "@remirror/theme";
var EmojiFromCdn = (props) => /* @__PURE__ */ React3.createElement(
  "img",
  {
    role: "presentation",
    className: ExtensionEmojiTheme.EMOJI_IMAGE,
    "aria-label": props.annotation,
    alt: props.annotation,
    src: props.url
  }
);
var emptyList = [];
var EmojiPopupComponent = () => {
  var _a;
  const { state, getMenuProps, getItemProps, indexIsHovered, indexIsSelected } = useEmoji();
  const enabled = !!state;
  if (state == null ? void 0 : state.exit) {
    return null;
  }
  return /* @__PURE__ */ React3.createElement(FloatingWrapper, { positioner: "cursor", enabled, placement: "auto-end", renderOutsideEditor: true }, /* @__PURE__ */ React3.createElement("div", __spreadProps(__spreadValues({}, getMenuProps()), { className: cx2(ExtensionEmojiTheme.EMOJI_POPUP_WRAPPER) }), enabled && ((_a = state == null ? void 0 : state.list) != null ? _a : emptyList).map((emoji, index) => {
    var _a2, _b;
    const isHighlighted = indexIsSelected(index);
    const isHovered = indexIsHovered(index);
    const shortcode = (_b = (_a2 = emoji.shortcodes) == null ? void 0 : _a2[0]) != null ? _b : emoji.annotation;
    return /* @__PURE__ */ React3.createElement(
      "div",
      __spreadValues({
        key: emoji.emoji,
        className: cx2(
          ExtensionEmojiTheme.EMOJI_POPUP_ITEM,
          isHighlighted && ExtensionEmojiTheme.EMOJI_POPUP_HIGHLIGHT,
          isHovered && ExtensionEmojiTheme.EMOJI_POPUP_HOVERED
        )
      }, getItemProps({
        item: emoji,
        index
      })),
      /* @__PURE__ */ React3.createElement("span", { className: ExtensionEmojiTheme.EMOJI_POPUP_CHAR }, /* @__PURE__ */ React3.createElement(EmojiFromCdn, __spreadValues({}, emoji))),
      /* @__PURE__ */ React3.createElement("span", { className: ExtensionEmojiTheme.EMOJI_POPUP_NAME }, ":", shortcode, ":")
    );
  })));
};

// src/popups/mention-atom-popup-component.tsx
import React4, { useEffect } from "react";
import { cx as cx3, isEmptyArray } from "@remirror/core";
import { ReactComponentMessages as Messages } from "@remirror/messages";
import { useCommands, useI18n } from "@remirror/react-core";
import {
  useMentionAtom
} from "@remirror/react-hooks";
import { ExtensionMentionAtomTheme as Theme } from "@remirror/theme";
function useMentionAtomChangeHandler(props) {
  const { onChange, state } = props;
  useEffect(() => {
    onChange(state);
  }, [state, onChange]);
}
function MentionAtomPopupComponent(props) {
  const { focus } = useCommands();
  const _a = props, {
    onChange,
    ItemComponent = DefaultItemComponent,
    ZeroItemsComponent = DefaultZeroItemsComponent
  } = _a, hookProps = __objRest(_a, [
    "onChange",
    "ItemComponent",
    "ZeroItemsComponent"
  ]);
  const { state, getMenuProps, getItemProps, indexIsHovered, indexIsSelected } = useMentionAtom(hookProps);
  useMentionAtomChangeHandler({ state, onChange });
  return /* @__PURE__ */ React4.createElement(FloatingWrapper, { positioner: "cursor", enabled: !!state, placement: "auto-end", renderOutsideEditor: true }, /* @__PURE__ */ React4.createElement("div", __spreadProps(__spreadValues({}, getMenuProps()), { className: cx3(Theme.MENTION_ATOM_POPUP_WRAPPER) }), !!state && isEmptyArray(hookProps.items) ? /* @__PURE__ */ React4.createElement(ZeroItemsComponent, null) : hookProps.items.map((item, index) => {
    const isHighlighted = indexIsSelected(index);
    const isHovered = indexIsHovered(index);
    return /* @__PURE__ */ React4.createElement(
      "div",
      __spreadValues({
        key: item.id,
        className: cx3(
          Theme.MENTION_ATOM_POPUP_ITEM,
          isHighlighted && Theme.MENTION_ATOM_POPUP_HIGHLIGHT,
          isHovered && Theme.MENTION_ATOM_POPUP_HOVERED
        )
      }, getItemProps({
        onClick: () => {
          state == null ? void 0 : state.command(item);
          focus();
        },
        item,
        index
      })),
      /* @__PURE__ */ React4.createElement(ItemComponent, { item, state })
    );
  })));
}
function DefaultItemComponent(props) {
  return /* @__PURE__ */ React4.createElement("span", { className: Theme.MENTION_ATOM_POPUP_NAME }, props.item.label);
}
var DefaultZeroItemsComponent = () => {
  const t = useI18n();
  return /* @__PURE__ */ React4.createElement("span", { className: Theme.MENTION_ATOM_ZERO_ITEMS }, t(Messages.NO_ITEMS_AVAILABLE));
};

// src/providers/theme-provider.tsx
import React5, {
  createContext as createContext2,
  useContext,
  useMemo as useMemo2
} from "react";
import { cx as cx4, deepMerge } from "@remirror/core";
import {
  createThemeVariables,
  defaultRemirrorTheme,
  THEME
} from "@remirror/theme";
var ThemeContext = createContext2({});
function useTheme(props = {}) {
  const parent = useContext(ThemeContext);
  const theme = useMemo2(() => {
    var _a;
    return deepMerge(parent, (_a = props.theme) != null ? _a : {});
  }, [parent, props.theme]);
  const style = useMemo2(() => createThemeVariables(theme).styles, [theme]);
  const className = cx4(THEME, props.className);
  return useMemo2(() => ({ style, className, theme }), [style, className, theme]);
}
var ThemeProvider = (props) => {
  var _a;
  const { children, as: Component = "div" } = props;
  const { theme, style, className } = useTheme({ theme: (_a = props.theme) != null ? _a : defaultRemirrorTheme });
  return /* @__PURE__ */ React5.createElement(ThemeContext.Provider, { value: theme }, /* @__PURE__ */ React5.createElement(Component, { style, className }, children));
};
export {
  EmojiPopupComponent,
  FloatingWrapper,
  GenIcon,
  Icon,
  IconBase,
  MentionAtomPopupComponent,
  PositionerPortal,
  ThemeProvider,
  useTheme
};
