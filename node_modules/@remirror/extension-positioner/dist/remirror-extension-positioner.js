var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => {
  var _a2;
  return [, , , __create((_a2 = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a2 : null)];
};
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/core-positioners.ts
import {
  findParentNode,
  getDefaultBlockNode,
  getMarkRanges,
  getSelectedWord,
  getTextSelection,
  isElementDomNode as isElementDomNode2,
  isSelectionEmpty,
  isTextSelection
} from "@remirror/core";

// src/positioner.ts
import { createNanoEvents } from "nanoevents";
import {
  ErrorConstant,
  invariant,
  isFunction
} from "@remirror/core";
var _handler, _active, _props, _ids, _updated, _constructorProps, _getActive, _getID, _getPosition;
var _Positioner = class _Positioner {
  constructor(props) {
    __publicField(this, "events");
    __privateAdd(this, _handler, createNanoEvents());
    __privateAdd(this, _active, []);
    __privateAdd(this, _props, /* @__PURE__ */ new Map());
    __privateAdd(this, _ids, []);
    __privateAdd(this, _updated, false);
    /**
     * Store the props for the most recent update. This is used by `React` to
     * reapply the most recent props to the new positioner when the positioner is
     * recreated within a component.
     */
    __publicField(this, "recentUpdate");
    __privateAdd(this, _constructorProps);
    __privateAdd(this, _getActive);
    __privateAdd(this, _getID);
    __privateAdd(this, _getPosition);
    __publicField(this, "hasChanged");
    /**
     * Add a listener to the positioner events.
     */
    __publicField(this, "addListener", (event, cb) => __privateGet(this, _handler).on(event, cb));
    var _a2;
    __privateSet(this, _constructorProps, props);
    __privateSet(this, _getActive, props.getActive);
    __privateSet(this, _getPosition, props.getPosition);
    __privateSet(this, _getID, props.getID);
    this.hasChanged = props.hasChanged;
    this.events = (_a2 = props.events) != null ? _a2 : ["state", "scroll"];
  }
  /**
   * Create a positioner.
   */
  static create(props) {
    return new _Positioner(props);
  }
  /**
   * Create a positioner from an existing positioner.
   *
   * This is useful when you want to modify parts of the positioner.
   */
  static fromPositioner(positioner, base) {
    return _Positioner.create(__spreadValues(__spreadValues({}, positioner.basePositioner), base));
  }
  get basePositioner() {
    return {
      getActive: __privateGet(this, _getActive),
      getPosition: __privateGet(this, _getPosition),
      hasChanged: this.hasChanged,
      events: this.events,
      getID: __privateGet(this, _getID)
    };
  }
  /**
   * Get the active element setters.
   */
  onActiveChanged(props) {
    this.recentUpdate = props;
    const active = __privateGet(this, _getActive).call(this, props);
    __privateSet(this, _active, active);
    __privateSet(this, _props, /* @__PURE__ */ new Map());
    __privateSet(this, _updated, false);
    __privateSet(this, _ids, []);
    const elementSetters = [];
    for (const [index, data] of active.entries()) {
      const id = this.getID(data, index);
      __privateGet(this, _ids).push(id);
      elementSetters.push({
        setElement: (element) => this.addProps(__spreadProps(__spreadValues({}, props), { data, element }), index),
        id,
        data
      });
    }
    __privateGet(this, _handler).emit("update", elementSetters);
  }
  /**
   * Get the id for the active data. Defaults to the index of the data item.
   */
  getID(data, index) {
    var _a2, _b;
    return (_b = (_a2 = __privateGet(this, _getID)) == null ? void 0 : _a2.call(this, data, index)) != null ? _b : index.toString();
  }
  addProps(props, index) {
    if (__privateGet(this, _updated)) {
      return;
    }
    __privateGet(this, _props).set(index, props);
    if (__privateGet(this, _props).size < __privateGet(this, _active).length) {
      return;
    }
    const doneProps = [];
    for (const index2 of __privateGet(this, _active).keys()) {
      const item = __privateGet(this, _props).get(index2);
      invariant(item, {
        code: ErrorConstant.INTERNAL,
        message: "Something went wrong when retrieving the parameters"
      });
      const id = __privateGet(this, _ids)[index2];
      if (!id) {
        return;
      }
      doneProps.push({
        position: __privateGet(this, _getPosition).call(this, item),
        element: item.element,
        id
      });
    }
    __privateGet(this, _handler).emit("done", doneProps);
  }
  /**
   * Create a new Positioner with the provided props.
   */
  clone(props) {
    return _Positioner.create(__spreadValues(__spreadValues({}, __privateGet(this, _constructorProps)), isFunction(props) ? props(__privateGet(this, _constructorProps)) : props));
  }
  /**
   * Clones the positioner while updating the `active` value. This is designed
   * for usage in frameworks like `react`.
   */
  active(isActive) {
    const filterFunction = isFunction(isActive) ? isActive : () => isActive;
    return this.clone((original) => ({
      getActive: (props) => original.getActive(props).filter(filterFunction)
    }));
  }
};
_handler = new WeakMap();
_active = new WeakMap();
_props = new WeakMap();
_ids = new WeakMap();
_updated = new WeakMap();
_constructorProps = new WeakMap();
_getActive = new WeakMap();
_getID = new WeakMap();
_getPosition = new WeakMap();
/**
 * An empty return value for the positioner.
 */
__publicField(_Positioner, "EMPTY", []);
var Positioner = _Positioner;

// src/positioner-utils.ts
import {
  getStyle,
  hasTransactionChanged,
  isElementDomNode,
  within
} from "@remirror/core";
import { isEmptyBlockNode } from "@remirror/core";
function isPositionerUpdateTransaction(tr, key = POSITIONER_UPDATE_ALL) {
  var _a2;
  const { key: trKey } = (_a2 = tr == null ? void 0 : tr.getMeta(POSITIONER_UPDATE_KEY)) != null ? _a2 : {};
  return trKey === key;
}
function hasStateChanged(props) {
  const { tr, state, previousState } = props;
  if (!previousState) {
    return true;
  }
  if (tr && isPositionerUpdateTransaction(tr)) {
    return true;
  }
  if (tr) {
    return hasTransactionChanged(tr);
  }
  return !state.doc.eq(previousState.doc) || !state.selection.eq(previousState.selection);
}
function isPositionVisible(rect, element, options = {}) {
  const elementRect = element.getBoundingClientRect();
  const { accountForPadding = false } = options;
  let leftDelta = 0;
  let rightDelta = 0;
  let topDelta = 0;
  let bottomDelta = 0;
  if (isElementDomNode(element) && accountForPadding) {
    const paddingLeft = Number.parseFloat(getStyle(element, "padding-left").replace("px", ""));
    const paddingRight = Number.parseFloat(getStyle(element, "padding-right").replace("px", ""));
    const paddingTop = Number.parseFloat(getStyle(element, "padding-top").replace("px", ""));
    const paddingBottom = Number.parseFloat(getStyle(element, "padding-bottom").replace("px", ""));
    const borderLeft = Number.parseFloat(getStyle(element, "border-left").replace("px", ""));
    const borderRight = Number.parseFloat(getStyle(element, "border-right").replace("px", ""));
    const borderTop = Number.parseFloat(getStyle(element, "border-top").replace("px", ""));
    const borderBottom = Number.parseFloat(getStyle(element, "border-bottom").replace("px", ""));
    const verticalScrollBarWidth = element.offsetWidth - element.clientWidth;
    const horizontalScrollBarHeight = element.offsetHeight - element.clientHeight;
    leftDelta += paddingLeft + borderLeft + (element.dir === "rtl" ? verticalScrollBarWidth : 0);
    rightDelta += paddingRight + borderRight + (element.dir === "rtl" ? 0 : verticalScrollBarWidth);
    topDelta += paddingTop + borderTop;
    bottomDelta += paddingBottom + borderBottom + horizontalScrollBarHeight;
  }
  const containerRect = new DOMRect(
    elementRect.left + leftDelta,
    elementRect.top + topDelta,
    elementRect.width - rightDelta,
    elementRect.height - bottomDelta
  );
  for (const [top, left] of [
    [rect.top, rect.left],
    [rect.top, rect.right],
    [rect.bottom, rect.left],
    [rect.bottom, rect.right]
  ]) {
    if (within(top, containerRect.top, containerRect.bottom) && within(left, containerRect.left, containerRect.right)) {
      return true;
    }
  }
  return false;
}
var POSITIONER_WIDGET_KEY = "remirror-positioner-widget";
var POSITIONER_UPDATE_KEY = "positionerUpdate";
var POSITIONER_UPDATE_ALL = "__all_positioners__";

// src/core-positioners.ts
var basePosition = { y: -999999, x: -999999, width: 0, height: 0 };
var baseRect = __spreadProps(__spreadValues({}, basePosition), {
  left: -999999,
  top: -999999,
  bottom: -999999,
  right: -999999
});
var defaultAbsolutePosition = __spreadProps(__spreadValues({}, basePosition), {
  rect: __spreadProps(__spreadValues({}, baseRect), { toJSON: () => baseRect }),
  visible: false
});
var blockNodePositioner = Positioner.create({
  hasChanged: hasStateChanged,
  /**
   * This is only active for empty top level nodes. The data is the cursor start
   * and end position.
   */
  getActive(props) {
    const { state } = props;
    if (!isSelectionEmpty(state) || state.selection.$anchor.depth > 2) {
      return Positioner.EMPTY;
    }
    const parentNode = findParentNode({ predicate: (node) => node.type.isBlock, selection: state });
    return parentNode ? [parentNode] : Positioner.EMPTY;
  },
  getPosition(props) {
    const { view, data } = props;
    const node = view.nodeDOM(data.pos);
    if (!isElementDomNode2(node)) {
      return defaultAbsolutePosition;
    }
    const rect = node.getBoundingClientRect();
    const editorRect = view.dom.getBoundingClientRect();
    const height = rect.height;
    const width = rect.width;
    const left = view.dom.scrollLeft + rect.left - editorRect.left;
    const top = view.dom.scrollTop + rect.top - editorRect.top;
    const visible = isPositionVisible(rect, view.dom);
    return { y: top, x: left, height, width, rect, visible };
  }
});
var editorPositioner = Positioner.create({
  hasChanged: hasStateChanged,
  /**
   * This is always active, regardless of selection position
   */
  getActive() {
    return [true];
  },
  getPosition(props) {
    const { view } = props;
    const rect = view.dom.getBoundingClientRect();
    const height = Math.min(view.dom.clientHeight, rect.height);
    const width = Math.min(view.dom.clientWidth, rect.width);
    const left = view.dom.scrollLeft;
    const top = view.dom.scrollTop;
    const visible = true;
    return { y: top, x: left, height, width, rect, visible };
  }
});
var emptyBlockNodePositioner = blockNodePositioner.clone(({ getActive }) => ({
  getActive: (props) => {
    const [parentNode] = getActive(props);
    return parentNode && isEmptyBlockNode(parentNode.node) && parentNode.node.type === getDefaultBlockNode(props.state.schema) ? [parentNode] : Positioner.EMPTY;
  }
}));
var emptyBlockNodeStartPositioner = emptyBlockNodePositioner.clone(({ getPosition }) => ({
  getPosition: (props) => __spreadProps(__spreadValues({}, getPosition(props)), { width: 1 })
}));
var emptyBlockNodeEndPositioner = emptyBlockNodePositioner.clone(({ getPosition }) => ({
  getPosition: (props) => {
    const { width, x: left, y: top, height } = getPosition(props);
    return __spreadProps(__spreadValues({}, getPosition(props)), {
      width: 1,
      x: width + left,
      rect: new DOMRect(width + left, top, 1, height)
    });
  }
}));
function createSelectionPositioner(isActive) {
  return Positioner.create({
    hasChanged: hasStateChanged,
    getActive: (props) => {
      const { state, view } = props;
      if (!isActive(state) || !isTextSelection(state.selection)) {
        return Positioner.EMPTY;
      }
      try {
        const { head, anchor } = state.selection;
        return [{ from: view.coordsAtPos(anchor), to: view.coordsAtPos(head) }];
      } catch (e) {
        return Positioner.EMPTY;
      }
    },
    getPosition(props) {
      var _a2;
      const { element, data, view } = props;
      const { from, to } = data;
      const parent = (_a2 = element.offsetParent) != null ? _a2 : view.dom;
      const parentRect = parent.getBoundingClientRect();
      const height = Math.abs(to.bottom - from.top);
      const spansMultipleLines = height > from.bottom - from.top;
      const leftmost = Math.min(from.left, to.left);
      const topmost = Math.min(from.top, to.top);
      const left = parent.scrollLeft + (spansMultipleLines ? to.left - parentRect.left : leftmost - parentRect.left);
      const top = parent.scrollTop + topmost - parentRect.top;
      const width = spansMultipleLines ? 1 : Math.abs(from.left - to.right);
      const rect = new DOMRect(spansMultipleLines ? to.left : leftmost, topmost, width, height);
      const visible = isPositionVisible(rect, view.dom);
      return { rect, y: top, x: left, height, width, visible };
    }
  });
}
var selectionPositioner = createSelectionPositioner((state) => !state.selection.empty);
var cursorPositioner = createSelectionPositioner((state) => state.selection.empty);
var alwaysPositioner = createSelectionPositioner(() => true);
var nearestWordPositioner = selectionPositioner.clone(() => ({
  getActive: (props) => {
    const { state, view } = props;
    if (!state.selection.empty) {
      return Positioner.EMPTY;
    }
    const word = getSelectedWord(state);
    if (!word) {
      return Positioner.EMPTY;
    }
    try {
      return [{ from: view.coordsAtPos(word.from), to: view.coordsAtPos(word.to) }];
    } catch (e) {
      return Positioner.EMPTY;
    }
  }
}));
function createMarkPositioner(props) {
  const { type, all = false, onlyVisible = false } = props;
  return Positioner.create({
    hasChanged: hasStateChanged,
    getActive: (props2) => {
      const { state, view } = props2;
      const selection = getTextSelection(all ? "all" : state.selection, state.doc);
      try {
        const ranges = getMarkRanges(selection, type).map((range) => {
          const { from, to } = range;
          const cursor = { from: view.coordsAtPos(from), to: view.coordsAtPos(to) };
          const visible = isPositionVisible(getCursorRect(cursor.from), view.dom) || isPositionVisible(getCursorRect(cursor.to), view.dom);
          return __spreadProps(__spreadValues({}, range), { visible, cursor });
        });
        return onlyVisible ? ranges.filter((range) => range.visible) : ranges;
      } catch (e) {
        return Positioner.EMPTY;
      }
    },
    getPosition: (props2) => {
      var _a2;
      const { element, data, view } = props2;
      const { cursor, visible } = data;
      const { from, to } = cursor;
      const parent = (_a2 = element.offsetParent) != null ? _a2 : view.dom;
      const parentRect = parent.getBoundingClientRect();
      const height = Math.abs(to.bottom - from.top);
      const spansMultipleLines = height > from.bottom - from.top;
      const leftmost = Math.min(from.left, to.left);
      const topmost = Math.min(from.top, to.top);
      const left = parent.scrollLeft + (spansMultipleLines ? to.left - parentRect.left : leftmost - parentRect.left);
      const top = parent.scrollTop + topmost - parentRect.top;
      const width = spansMultipleLines ? 1 : Math.abs(from.left - to.right);
      const rect = new DOMRect(spansMultipleLines ? to.left : leftmost, topmost, width, height);
      return { rect, y: top, x: left, height, width, visible };
    }
  });
}
function getCursorRect(coords) {
  return new DOMRect(coords.left, coords.top, 1, coords.top - coords.bottom);
}
var positioners = {
  /**
   * Creates a rect which wraps the current selection.
   */
  selection: selectionPositioner,
  /**
   * Creates a rect for the cursor. Is inactive for
   */
  cursor: cursorPositioner,
  /**
   * Creates a positioner which always shows the position of the selection whether empty or not.
   */
  always: alwaysPositioner,
  /**
   * Creates a position which wraps the entire selected block node.
   */
  block: blockNodePositioner,
  /**
   * Creates a position which wraps the entire selected block node. This is only active when the block node is empty.
   */
  emptyBlock: emptyBlockNodePositioner,
  /**
   * Creates a position which wraps the entire selected block node. This is only active when the block node is empty.
   */
  emptyBlockStart: emptyBlockNodeStartPositioner,
  /**
   * Creates a position which wraps the entire selected block node. This is only active when the block node is empty.
   */
  emptyBlockEnd: emptyBlockNodeEndPositioner,
  /**
   * Create a rect which surrounds the nearest word.
   */
  nearestWord: nearestWordPositioner,
  /**
   * Create a rect which surrounds the visible portion of the editor.
   */
  editor: editorPositioner
};

// src/positioner-extension.ts
import {
  command,
  debounce,
  extension,
  helper,
  isFunction as isFunction2,
  isString,
  PlainExtension
} from "@remirror/core";
import { Decoration, DecorationSet } from "@remirror/pm/view";
import { ExtensionPositionerTheme } from "@remirror/theme";
var _getPositionerWidget_dec, _forceUpdatePositioners_dec, _a, _PositionerExtension_decorators, _init;
_PositionerExtension_decorators = [extension({
  defaultOptions: { scrollDebounce: 100 },
  customHandlerKeys: ["positioner"],
  staticKeys: ["scrollDebounce"]
})];
var PositionerExtension = class extends (_a = PlainExtension, _forceUpdatePositioners_dec = [command()], _getPositionerWidget_dec = [helper()], _a) {
  constructor() {
    super(...arguments);
    __runInitializers(_init, 5, this);
    /**
     * All the active positioners for the editor.
     */
    __publicField(this, "positioners", []);
    /**
     * The document element which is used for storing the positioner decoration.
     */
    __publicField(this, "element");
    __publicField(this, "onAddCustomHandler", ({ positioner }) => {
      if (!positioner) {
        return;
      }
      this.positioners = [...this.positioners, positioner];
      this.store.commands.forceUpdate();
      return () => {
        this.positioners = this.positioners.filter((handler) => handler !== positioner);
      };
    });
  }
  get name() {
    return "positioner";
  }
  createAttributes() {
    return { class: ExtensionPositionerTheme.EDITOR };
  }
  init() {
    this.onScroll = debounce(this.options.scrollDebounce, this.onScroll.bind(this));
  }
  createEventHandlers() {
    return {
      scroll: () => {
        this.onScroll();
        return false;
      },
      hover: (_, hover) => {
        this.positioner(this.getBaseProps("hover", { hover }));
        return false;
      },
      contextmenu: (_, contextmenu) => {
        this.positioner(this.getBaseProps("contextmenu", { contextmenu }));
        return false;
      }
    };
  }
  onStateUpdate(update) {
    this.positioner(__spreadProps(__spreadValues({}, update), {
      previousState: update.firstUpdate ? void 0 : update.previousState,
      event: "state",
      helpers: this.store.helpers
    }));
  }
  /**
   * Create a placeholder decoration which is never removed from the document.
   */
  createDecorations(state) {
    var _a2;
    (_a2 = this.element) != null ? _a2 : this.element = this.createElement();
    if (!this.element.hasChildNodes()) {
      return DecorationSet.empty;
    }
    const decoration = Decoration.widget(0, this.element, {
      key: "positioner-widget",
      side: -1,
      // TODO tests this which prevents any events from bubbling through
      stopEvent: () => true
    });
    return DecorationSet.create(state.doc, [decoration]);
  }
  forceUpdatePositioners(key = POSITIONER_UPDATE_ALL) {
    return ({ tr, dispatch }) => {
      dispatch == null ? void 0 : dispatch(tr.setMeta(POSITIONER_UPDATE_KEY, { key }));
      return true;
    };
  }
  getPositionerWidget() {
    var _a2;
    return (_a2 = this.element) != null ? _a2 : this.element = this.createElement();
  }
  createElement() {
    const element = document.createElement("span");
    element.dataset.id = POSITIONER_WIDGET_KEY;
    element.classList.add(POSITIONER_WIDGET_KEY);
    element.setAttribute("role", "presentation");
    return element;
  }
  triggerPositioner(positioner, update) {
    if (!positioner.hasChanged(update)) {
      return;
    }
    positioner.onActiveChanged(__spreadProps(__spreadValues({}, update), { view: this.store.view }));
  }
  positioner(update) {
    for (const positioner of this.positioners) {
      const eventIsNotSupported = !positioner.events.includes(update.event);
      if (eventIsNotSupported) {
        continue;
      }
      this.triggerPositioner(positioner, update);
    }
  }
  getBaseProps(event, extra) {
    const state = this.store.getState();
    const previousState = this.store.previousState;
    return __spreadValues({
      helpers: this.store.helpers,
      event,
      firstUpdate: false,
      previousState,
      state
    }, extra);
  }
  onScroll() {
    this.positioner(
      this.getBaseProps("scroll", {
        scroll: { scrollTop: this.store.view.dom.scrollTop }
      })
    );
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 1, "forceUpdatePositioners", _forceUpdatePositioners_dec, PositionerExtension);
__decorateElement(_init, 1, "getPositionerWidget", _getPositionerWidget_dec, PositionerExtension);
PositionerExtension = __decorateElement(_init, 0, "PositionerExtension", _PositionerExtension_decorators, PositionerExtension);
__runInitializers(_init, 1, PositionerExtension);
function getPositioner(positioner) {
  if (isString(positioner)) {
    return positioners[positioner].clone();
  }
  if (isFunction2(positioner)) {
    return positioner().clone();
  }
  return positioner.clone();
}
export {
  POSITIONER_UPDATE_ALL,
  POSITIONER_UPDATE_KEY,
  POSITIONER_WIDGET_KEY,
  Positioner,
  PositionerExtension,
  alwaysPositioner,
  blockNodePositioner,
  createMarkPositioner,
  cursorPositioner,
  defaultAbsolutePosition,
  editorPositioner,
  emptyBlockNodeEndPositioner,
  emptyBlockNodePositioner,
  emptyBlockNodeStartPositioner,
  getPositioner,
  hasStateChanged,
  isEmptyBlockNode,
  isPositionVisible,
  isPositionerUpdateTransaction,
  nearestWordPositioner,
  positioners,
  selectionPositioner
};
