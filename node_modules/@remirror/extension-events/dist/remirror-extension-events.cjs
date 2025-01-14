"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  EventsExtension: () => EventsExtension
});
module.exports = __toCommonJS(src_exports);

// src/events-extension.ts
var import_core = require("@remirror/core");

// src/events-utils.ts
function posAtDOM(view, node, offset, bias) {
  const pos = view.docView.posFromDOM(node, offset, bias);
  if (pos === null || pos < 0) {
    return null;
  }
  return pos;
}
function getPositionFromEvent(view, event) {
  var _a2;
  const target = event.target;
  if (target) {
    const pos = posAtDOM(view, target, 0);
    if (pos !== null) {
      const $pos = view.state.doc.resolve(pos);
      const border = $pos.node().isLeaf ? 0 : 1;
      const inside = $pos.start() - border;
      return { pos, inside };
    }
  }
  return (_a2 = view.posAtCoords({ left: event.clientX, top: event.clientY })) != null ? _a2 : void 0;
}

// src/events-extension.ts
var _isInteracting_dec, _a, _EventsExtension_decorators, _init;
_EventsExtension_decorators = [(0, import_core.extension)({
  handlerKeys: [
    "blur",
    "focus",
    "mousedown",
    "mouseup",
    "mouseenter",
    "mouseleave",
    "textInput",
    "keypress",
    "keyup",
    "keydown",
    "click",
    "clickMark",
    "doubleClick",
    "doubleClickMark",
    "tripleClick",
    "tripleClickMark",
    "contextmenu",
    "hover",
    "scroll",
    "copy",
    "cut",
    "paste",
    "editable"
  ],
  handlerKeyOptions: {
    blur: { earlyReturnValue: true },
    focus: { earlyReturnValue: true },
    mousedown: { earlyReturnValue: true },
    mouseleave: { earlyReturnValue: true },
    mouseup: { earlyReturnValue: true },
    click: { earlyReturnValue: true },
    doubleClick: { earlyReturnValue: true },
    tripleClick: { earlyReturnValue: true },
    hover: { earlyReturnValue: true },
    contextmenu: { earlyReturnValue: true },
    scroll: { earlyReturnValue: true },
    copy: { earlyReturnValue: true },
    cut: { earlyReturnValue: true },
    paste: { earlyReturnValue: true }
  },
  defaultPriority: import_core.ExtensionPriority.High
})];
var EventsExtension = class extends (_a = import_core.PlainExtension, _isInteracting_dec = [(0, import_core.helper)()], _a) {
  constructor() {
    super(...arguments);
    __runInitializers(_init, 5, this);
    /**
     * Indicates whether the user is currently interacting with the editor.
     */
    __publicField(this, "mousedown", false);
    /**
     * True when the mouse is within the bounds of the editor.
     */
    __publicField(this, "mouseover", false);
    __publicField(this, "createMouseEventHandler", (fn) => (view, mouseEvent) => {
      var _a2;
      const event = mouseEvent;
      const eventPosition = getPositionFromEvent(view, event);
      if (!eventPosition) {
        return false;
      }
      const nodes = [];
      const marks = [];
      const { inside, pos } = eventPosition;
      if (inside === -1) {
        return false;
      }
      const $pos = view.state.doc.resolve(pos);
      const currentNodeDepth = $pos.depth + 1;
      for (const index of (0, import_core.range)(currentNodeDepth, 1)) {
        nodes.push({
          node: index > $pos.depth && $pos.nodeAfter ? $pos.nodeAfter : $pos.node(index),
          pos: $pos.before(index)
        });
      }
      for (const { type } of (_a2 = $pos.marksAcross($pos)) != null ? _a2 : []) {
        const range2 = (0, import_core.getMarkRange)($pos, type);
        if (range2) {
          marks.push(range2);
        }
      }
      return fn(event, {
        view,
        nodes,
        marks,
        getMark: (markType) => {
          const type = (0, import_core.isString)(markType) ? view.state.schema.marks[markType] : markType;
          (0, import_core.invariant)(type, {
            code: import_core.ErrorConstant.EXTENSION,
            message: "The mark ".concat(markType, " being checked does not exist within the editor schema.")
          });
          return marks.find((range2) => range2.mark.type === type);
        },
        getNode: (nodeType) => {
          var _a3;
          const type = (0, import_core.isString)(nodeType) ? view.state.schema.nodes[nodeType] : nodeType;
          (0, import_core.invariant)(type, {
            code: import_core.ErrorConstant.EXTENSION,
            message: "The node being checked does not exist"
          });
          const nodeWithPos = nodes.find(({ node }) => node.type === type);
          if (!nodeWithPos) {
            return;
          }
          return __spreadProps(__spreadValues({}, nodeWithPos), { isRoot: !!((_a3 = nodes[0]) == null ? void 0 : _a3.node.eq(nodeWithPos.node)) });
        }
      });
    });
  }
  get name() {
    return "events";
  }
  /**
   * Add a new lifecycle method which is available to all extensions for adding
   * a click handler to the node or mark.
   */
  onView() {
    var _a2, _b;
    if (
      // managerSettings excluded this from running
      (_a2 = this.store.managerSettings.exclude) == null ? void 0 : _a2.clickHandler
    ) {
      return;
    }
    for (const extension2 of this.store.extensions) {
      if (
        // Method doesn't exist
        !extension2.createEventHandlers || // Extension settings exclude it
        ((_b = extension2.options.exclude) == null ? void 0 : _b.clickHandler)
      ) {
        continue;
      }
      const eventHandlers = extension2.createEventHandlers();
      for (const [key, handler] of (0, import_core.entries)(eventHandlers)) {
        this.addHandler(key, handler);
      }
    }
  }
  /**
   * Create the plugin which manages all of the events being listened to within
   * the editor.
   */
  createPlugin() {
    const eventMap = /* @__PURE__ */ new WeakMap();
    const runClickHandlerOn = (clickMark, click, view, pos, node, nodePos, event, direct) => {
      const state = this.store.currentState;
      const { schema, doc } = state;
      const $pos = doc.resolve(pos);
      const handled = eventMap.has(event);
      const baseState = createClickMarkState({ $pos, handled, view, state });
      let returnValue = false;
      if (!handled) {
        returnValue = clickMark(event, baseState) || returnValue;
      }
      const clickState = __spreadProps(__spreadValues({}, baseState), {
        pos,
        direct,
        nodeWithPosition: { node, pos: nodePos },
        getNode: (nodeType) => {
          const type = (0, import_core.isString)(nodeType) ? schema.nodes[nodeType] : nodeType;
          (0, import_core.invariant)(type, {
            code: import_core.ErrorConstant.EXTENSION,
            message: "The node being checked does not exist"
          });
          return type === node.type ? { node, pos: nodePos } : void 0;
        }
      });
      eventMap.set(event, true);
      return click(event, clickState) || returnValue;
    };
    return {
      props: {
        handleKeyPress: (_, event) => this.options.keypress(event) || false,
        handleKeyDown: (_, event) => this.options.keydown(event) || false,
        handleTextInput: (_, from, to, text) => this.options.textInput({ from, to, text }) || false,
        handleClickOn: (view, pos, node, nodePos, event, direct) => runClickHandlerOn(
          this.options.clickMark,
          this.options.click,
          view,
          pos,
          node,
          nodePos,
          event,
          direct
        ),
        handleDoubleClickOn: (view, pos, node, nodePos, event, direct) => runClickHandlerOn(
          this.options.doubleClickMark,
          this.options.doubleClick,
          view,
          pos,
          node,
          nodePos,
          event,
          direct
        ),
        handleTripleClickOn: (view, pos, node, nodePos, event, direct) => runClickHandlerOn(
          this.options.tripleClickMark,
          this.options.tripleClick,
          view,
          pos,
          node,
          nodePos,
          event,
          direct
        ),
        handleDOMEvents: {
          focus: (_, event) => this.options.focus(event) || false,
          blur: (_, event) => this.options.blur(event) || false,
          mousedown: (_, event) => {
            this.startMouseover();
            return this.options.mousedown(event) || false;
          },
          mouseup: (_, event) => {
            this.endMouseover();
            return this.options.mouseup(event) || false;
          },
          mouseleave: (_, event) => {
            this.mouseover = false;
            return this.options.mouseleave(event) || false;
          },
          mouseenter: (_, event) => {
            this.mouseover = true;
            return this.options.mouseenter(event) || false;
          },
          keyup: (_, event) => this.options.keyup(event) || false,
          mouseout: this.createMouseEventHandler((event, props) => {
            const state = __spreadProps(__spreadValues({}, props), { hovering: false });
            return this.options.hover(event, state) || false;
          }),
          mouseover: this.createMouseEventHandler((event, props) => {
            const state = __spreadProps(__spreadValues({}, props), { hovering: true });
            return this.options.hover(event, state) || false;
          }),
          contextmenu: this.createMouseEventHandler(
            (event, props) => this.options.contextmenu(event, props) || false
          ),
          scroll: (_, event) => this.options.scroll(event) || false,
          copy: (_, event) => this.options.copy(event) || false,
          cut: (_, event) => this.options.cut(event) || false,
          paste: (_, event) => this.options.paste(event) || false
        }
      },
      view: (_view) => {
        let prevEditable = _view.editable;
        const options = this.options;
        return {
          update(view) {
            const currentEditable = view.editable;
            if (currentEditable !== prevEditable) {
              options.editable(currentEditable);
              prevEditable = currentEditable;
            }
          }
        };
      }
    };
  }
  isInteracting() {
    return this.mousedown && this.mouseover;
  }
  startMouseover() {
    this.mouseover = true;
    if (this.mousedown) {
      return;
    }
    this.mousedown = true;
    this.store.document.documentElement.addEventListener(
      "mouseup",
      () => {
        this.endMouseover();
      },
      { once: true }
    );
  }
  endMouseover() {
    if (!this.mousedown) {
      return;
    }
    this.mousedown = false;
    this.store.commands.emptyUpdate();
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 1, "isInteracting", _isInteracting_dec, EventsExtension);
EventsExtension = __decorateElement(_init, 0, "EventsExtension", _EventsExtension_decorators, EventsExtension);
__runInitializers(_init, 1, EventsExtension);
function createClickMarkState(props) {
  var _a2;
  const { handled, view, $pos, state } = props;
  const clickState = { getMark: import_core.noop, markRanges: [], view, state };
  if (handled) {
    return clickState;
  }
  for (const { type } of (_a2 = $pos.marksAcross($pos)) != null ? _a2 : []) {
    const range2 = (0, import_core.getMarkRange)($pos, type);
    if (range2) {
      clickState.markRanges.push(range2);
    }
  }
  clickState.getMark = (markType) => {
    const type = (0, import_core.isString)(markType) ? state.schema.marks[markType] : markType;
    (0, import_core.invariant)(type, {
      code: import_core.ErrorConstant.EXTENSION,
      message: "The mark ".concat(markType, " being checked does not exist within the editor schema.")
    });
    return clickState.markRanges.find((range2) => range2.mark.type === type);
  };
  return clickState;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EventsExtension
});
