"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  EmojiPopupComponent: () => EmojiPopupComponent,
  FloatingWrapper: () => FloatingWrapper,
  GenIcon: () => GenIcon,
  Icon: () => Icon,
  IconBase: () => IconBase,
  MentionAtomPopupComponent: () => MentionAtomPopupComponent,
  PositionerPortal: () => PositionerPortal,
  ThemeProvider: () => ThemeProvider,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(src_exports);

// src/floating-menu.tsx
var import_react = require("@floating-ui/react");
var import_react2 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
var import_core = require("@remirror/core");
var import_extension_positioner = require("@remirror/extension-positioner");
var import_react_core = require("@remirror/react-core");
var import_react_hooks = require("@remirror/react-hooks");
var import_theme = require("@remirror/theme");

// src/commonjs-packages/seznam-compose-react-refs.ts
var import_compose_react_refs = __toESM(require("@seznam/compose-react-refs"), 1);
var composeRefs = typeof import_compose_react_refs.default === "object" && import_compose_react_refs.default.__esModule && import_compose_react_refs.default.default ? import_compose_react_refs.default.default : import_compose_react_refs.default;

// src/floating-menu.tsx
function useMemoizedPosition(props) {
  const { height, left, top, width } = props;
  return (0, import_react2.useMemo)(() => ({ height, left, top, width }), [height, left, top, width]);
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
  const [isFocused] = (0, import_react_hooks.useEditorFocus)({ blurOnInactive, ignoredElements });
  const {
    ref,
    active,
    height,
    x: left,
    y: top,
    width,
    visible
  } = (0, import_react_hooks.usePositioner)(() => {
    const active2 = isFocused && enabled;
    const refinedPositioner = (0, import_extension_positioner.getPositioner)(positioner);
    return refinedPositioner.active(active2);
  }, [isFocused, enabled, renderOutsideEditor]);
  const shouldShow = (hideWhenInvisible ? visible : true) && active;
  const position = useMemoizedPosition({ height, left, top, width });
  const _placement = isFloatingUIPlacement(placement) ? placement : void 0;
  const middleware = (0, import_react2.useMemo)(() => {
    if (propsMiddleware) {
      return propsMiddleware;
    }
    return [
      _placement ? (0, import_react.flip)({ padding: 8 }) : (0, import_react.autoPlacement)({ padding: 8 }),
      (0, import_react.offset)({ mainAxis: 12 })
    ];
  }, [_placement, propsMiddleware]);
  const { refs, floatingStyles } = (0, import_react.useFloating)({
    placement: _placement,
    open: visible,
    whileElementsMounted: import_react.autoUpdate,
    strategy,
    middleware
  });
  const handleMouseDown = (0, import_react2.useCallback)(
    (e) => {
      if (renderOutsideEditor || useFloatingPortal) {
        e.preventDefault();
      }
    },
    [renderOutsideEditor, useFloatingPortal]
  );
  let floatingElement = /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      "aria-label": floatingLabel,
      ref: refs.setFloating,
      style: floatingStyles,
      className: (0, import_core.cx)(import_theme.ComponentsTheme.FLOATING_POPOVER, containerClass),
      onMouseDown: handleMouseDown
    },
    shouldShow && children
  );
  if (!renderOutsideEditor && !useFloatingPortal) {
    floatingElement = /* @__PURE__ */ import_react2.default.createElement(PositionerPortal, null, floatingElement);
  } else if (useFloatingPortal) {
    const props2 = (0, import_core.isObject)(useFloatingPortal) ? useFloatingPortal : {};
    floatingElement = /* @__PURE__ */ import_react2.default.createElement(import_react.FloatingPortal, __spreadValues({}, props2), floatingElement);
  }
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(PositionerPortal, null, /* @__PURE__ */ import_react2.default.createElement(
    "span",
    {
      className: import_theme.ExtensionPositionerTheme.POSITIONER,
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
  const container = (0, import_react_core.useHelpers)().getPositionerWidget();
  return (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, props.children), container);
};
function isFloatingUIPlacement(placement) {
  return !(placement == null ? void 0 : placement.startsWith("auto"));
}

// src/icons/icons-base.tsx
var import_react4 = __toESM(require("react"), 1);
var Icons = __toESM(require("@remirror/icons"), 1);

// src/icons/icons-context.tsx
var import_react3 = require("react");
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = (0, import_react3.createContext)(DefaultContext);
var IconProvider = IconContext.Provider;

// src/icons/icons-base.tsx
function Tree2Element(tree) {
  return tree.map(
    (node, index) => {
      var _a;
      return (0, import_react4.createElement)(node.tag, __spreadValues({ key: index }, node.attr), Tree2Element((_a = node.child) != null ? _a : []));
    }
  );
}
function GenIcon(tree, viewBox = "0 0 24 24") {
  return (props) => /* @__PURE__ */ import_react4.default.createElement(IconBase, __spreadValues({ viewBox }, props), Tree2Element(tree != null ? tree : []));
}
var Icon = (props) => {
  const { name } = props;
  return /* @__PURE__ */ import_react4.default.createElement(IconBase, __spreadValues({}, props), Tree2Element(Icons[name]));
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
    return /* @__PURE__ */ import_react4.default.createElement(
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
      title && /* @__PURE__ */ import_react4.default.createElement("title", null, title),
      props.children
    );
  };
  return /* @__PURE__ */ import_react4.default.createElement(IconContext.Consumer, null, renderSvg);
};

// src/popups/emoji-popup-component.tsx
var import_react5 = __toESM(require("react"), 1);
var import_core2 = require("@remirror/core");
var import_react_hooks2 = require("@remirror/react-hooks");
var import_theme2 = require("@remirror/theme");
var EmojiFromCdn = (props) => /* @__PURE__ */ import_react5.default.createElement(
  "img",
  {
    role: "presentation",
    className: import_theme2.ExtensionEmojiTheme.EMOJI_IMAGE,
    "aria-label": props.annotation,
    alt: props.annotation,
    src: props.url
  }
);
var emptyList = [];
var EmojiPopupComponent = () => {
  var _a;
  const { state, getMenuProps, getItemProps, indexIsHovered, indexIsSelected } = (0, import_react_hooks2.useEmoji)();
  const enabled = !!state;
  if (state == null ? void 0 : state.exit) {
    return null;
  }
  return /* @__PURE__ */ import_react5.default.createElement(FloatingWrapper, { positioner: "cursor", enabled, placement: "auto-end", renderOutsideEditor: true }, /* @__PURE__ */ import_react5.default.createElement("div", __spreadProps(__spreadValues({}, getMenuProps()), { className: (0, import_core2.cx)(import_theme2.ExtensionEmojiTheme.EMOJI_POPUP_WRAPPER) }), enabled && ((_a = state == null ? void 0 : state.list) != null ? _a : emptyList).map((emoji, index) => {
    var _a2, _b;
    const isHighlighted = indexIsSelected(index);
    const isHovered = indexIsHovered(index);
    const shortcode = (_b = (_a2 = emoji.shortcodes) == null ? void 0 : _a2[0]) != null ? _b : emoji.annotation;
    return /* @__PURE__ */ import_react5.default.createElement(
      "div",
      __spreadValues({
        key: emoji.emoji,
        className: (0, import_core2.cx)(
          import_theme2.ExtensionEmojiTheme.EMOJI_POPUP_ITEM,
          isHighlighted && import_theme2.ExtensionEmojiTheme.EMOJI_POPUP_HIGHLIGHT,
          isHovered && import_theme2.ExtensionEmojiTheme.EMOJI_POPUP_HOVERED
        )
      }, getItemProps({
        item: emoji,
        index
      })),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: import_theme2.ExtensionEmojiTheme.EMOJI_POPUP_CHAR }, /* @__PURE__ */ import_react5.default.createElement(EmojiFromCdn, __spreadValues({}, emoji))),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: import_theme2.ExtensionEmojiTheme.EMOJI_POPUP_NAME }, ":", shortcode, ":")
    );
  })));
};

// src/popups/mention-atom-popup-component.tsx
var import_react6 = __toESM(require("react"), 1);
var import_core3 = require("@remirror/core");
var import_messages = require("@remirror/messages");
var import_react_core2 = require("@remirror/react-core");
var import_react_hooks3 = require("@remirror/react-hooks");
var import_theme3 = require("@remirror/theme");
function useMentionAtomChangeHandler(props) {
  const { onChange, state } = props;
  (0, import_react6.useEffect)(() => {
    onChange(state);
  }, [state, onChange]);
}
function MentionAtomPopupComponent(props) {
  const { focus } = (0, import_react_core2.useCommands)();
  const _a = props, {
    onChange,
    ItemComponent = DefaultItemComponent,
    ZeroItemsComponent = DefaultZeroItemsComponent
  } = _a, hookProps = __objRest(_a, [
    "onChange",
    "ItemComponent",
    "ZeroItemsComponent"
  ]);
  const { state, getMenuProps, getItemProps, indexIsHovered, indexIsSelected } = (0, import_react_hooks3.useMentionAtom)(hookProps);
  useMentionAtomChangeHandler({ state, onChange });
  return /* @__PURE__ */ import_react6.default.createElement(FloatingWrapper, { positioner: "cursor", enabled: !!state, placement: "auto-end", renderOutsideEditor: true }, /* @__PURE__ */ import_react6.default.createElement("div", __spreadProps(__spreadValues({}, getMenuProps()), { className: (0, import_core3.cx)(import_theme3.ExtensionMentionAtomTheme.MENTION_ATOM_POPUP_WRAPPER) }), !!state && (0, import_core3.isEmptyArray)(hookProps.items) ? /* @__PURE__ */ import_react6.default.createElement(ZeroItemsComponent, null) : hookProps.items.map((item, index) => {
    const isHighlighted = indexIsSelected(index);
    const isHovered = indexIsHovered(index);
    return /* @__PURE__ */ import_react6.default.createElement(
      "div",
      __spreadValues({
        key: item.id,
        className: (0, import_core3.cx)(
          import_theme3.ExtensionMentionAtomTheme.MENTION_ATOM_POPUP_ITEM,
          isHighlighted && import_theme3.ExtensionMentionAtomTheme.MENTION_ATOM_POPUP_HIGHLIGHT,
          isHovered && import_theme3.ExtensionMentionAtomTheme.MENTION_ATOM_POPUP_HOVERED
        )
      }, getItemProps({
        onClick: () => {
          state == null ? void 0 : state.command(item);
          focus();
        },
        item,
        index
      })),
      /* @__PURE__ */ import_react6.default.createElement(ItemComponent, { item, state })
    );
  })));
}
function DefaultItemComponent(props) {
  return /* @__PURE__ */ import_react6.default.createElement("span", { className: import_theme3.ExtensionMentionAtomTheme.MENTION_ATOM_POPUP_NAME }, props.item.label);
}
var DefaultZeroItemsComponent = () => {
  const t = (0, import_react_core2.useI18n)();
  return /* @__PURE__ */ import_react6.default.createElement("span", { className: import_theme3.ExtensionMentionAtomTheme.MENTION_ATOM_ZERO_ITEMS }, t(import_messages.ReactComponentMessages.NO_ITEMS_AVAILABLE));
};

// src/providers/theme-provider.tsx
var import_react7 = __toESM(require("react"), 1);
var import_core4 = require("@remirror/core");
var import_theme4 = require("@remirror/theme");
var ThemeContext = (0, import_react7.createContext)({});
function useTheme(props = {}) {
  const parent = (0, import_react7.useContext)(ThemeContext);
  const theme = (0, import_react7.useMemo)(() => {
    var _a;
    return (0, import_core4.deepMerge)(parent, (_a = props.theme) != null ? _a : {});
  }, [parent, props.theme]);
  const style = (0, import_react7.useMemo)(() => (0, import_theme4.createThemeVariables)(theme).styles, [theme]);
  const className = (0, import_core4.cx)(import_theme4.THEME, props.className);
  return (0, import_react7.useMemo)(() => ({ style, className, theme }), [style, className, theme]);
}
var ThemeProvider = (props) => {
  var _a;
  const { children, as: Component = "div" } = props;
  const { theme, style, className } = useTheme({ theme: (_a = props.theme) != null ? _a : import_theme4.defaultRemirrorTheme });
  return /* @__PURE__ */ import_react7.default.createElement(ThemeContext.Provider, { value: theme }, /* @__PURE__ */ import_react7.default.createElement(Component, { style, className }, children));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EmojiPopupComponent,
  FloatingWrapper,
  GenIcon,
  Icon,
  IconBase,
  MentionAtomPopupComponent,
  PositionerPortal,
  ThemeProvider,
  useTheme
});
