var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

// src/portals/portal-container.ts
import { createNanoEvents } from "nanoevents";
import { uniqueId } from "@remirror/core-helpers";
var _events;
var PortalContainer = class {
  constructor() {
    /**
     * A map of all the active portals which have a one to one relation between
     * the container and the component.
     */
    __publicField(this, "portals", /* @__PURE__ */ new Map());
    /**
     * The event listener which allows consumers to subscribe to when a new portal
     * is added / deleted via the updated event.
     */
    __privateAdd(this, _events, createNanoEvents());
    /**
     * Event handler for subscribing to update events from the portalContainer.
     */
    __publicField(this, "on", (callback) => __privateGet(this, _events).on("update", callback));
    /**
     * Subscribe to one event before automatically unbinding.
     */
    __publicField(this, "once", (callback) => {
      const unbind = __privateGet(this, _events).on("update", (portals) => {
        unbind();
        callback(portals);
      });
      return unbind;
    });
  }
  /**
   * Trigger an update in all subscribers.
   */
  update() {
    __privateGet(this, _events).emit("update", this.portals);
  }
  /**
   * Responsible for registering a new portal by rendering the react element
   * into the provided container.
   */
  render({ Component, container }) {
    var _a2;
    const portal = this.portals.get(container);
    this.portals.set(container, { Component, key: (_a2 = portal == null ? void 0 : portal.key) != null ? _a2 : uniqueId() });
    this.update();
  }
  /**
   * Force an update in all the portals by setting new keys for every portal.
   *
   * Delete all orphaned containers (deleted from the DOM). This is useful for
   * Decoration where there is no destroy method.
   */
  forceUpdate() {
    for (const [container, { Component }] of this.portals) {
      this.portals.set(container, { Component, key: uniqueId() });
    }
  }
  /**
   * Deletes the portal within the container.
   */
  remove(container) {
    this.portals.delete(container);
    this.update();
  }
};
_events = new WeakMap();

// src/portals/react-portals.tsx
import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
var RemirrorPortals = (props) => {
  const { portals } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, portals.map(
    ([container, { Component, key }]) => createPortal(/* @__PURE__ */ React.createElement(Component, null), container, key)
  ));
};
function usePortals(portalContainer) {
  const [portals, setPortals] = useState(() => Array.from(portalContainer.portals.entries()));
  useEffect(
    () => (
      // Auto disposed when the component un-mounts.
      portalContainer.on((portalMap) => {
        setPortals(Array.from(portalMap.entries()));
      })
    ),
    [portalContainer]
  );
  return useMemo(() => portals, [portals]);
}

// src/react-component-extension.ts
import { extension, isNodeExtension, PlainExtension } from "@remirror/core";
import { entries as entries2, object } from "@remirror/core-helpers";

// src/react-node-view.tsx
import React2 from "react";
import { ErrorConstant, SELECTED_NODE_CLASS_NAME } from "@remirror/core-constants";
import {
  entries,
  invariant,
  isFunction,
  isPlainObject,
  isString,
  kebabCase,
  pascalCase
} from "@remirror/core-helpers";
import { isDomNode, isElementDomNode, isNodeOfType } from "@remirror/core-utils";
import { DOMSerializer } from "@remirror/pm/model";
import { NodeSelection } from "@remirror/pm/state";
var _node, _decorations, _view, _portalContainer, _Component, _getPosition, _options, _selected, _contentDOM, _contentDOMWrapper, _dom, _forwardRef;
var _ReactNodeView = class _ReactNodeView {
  /**
   * Create the node view for a react component and render it into the dom.
   */
  constructor({
    getPosition,
    node,
    portalContainer,
    view,
    ReactComponent,
    options
  }) {
    /**
     * The `ProsemirrorNode` that this nodeView is responsible for rendering.
     */
    __privateAdd(this, _node);
    /**
     * The decorations in the most recent update.
     */
    __privateAdd(this, _decorations, []);
    /**
     * The editor this nodeView belongs to.
     */
    __privateAdd(this, _view);
    /**
     * A container and event dispatcher which keeps track of all dom elements that
     * hold node views
     */
    __privateAdd(this, _portalContainer);
    /**
     * The extension responsible for creating this NodeView.
     */
    __privateAdd(this, _Component);
    /**
     * Method for retrieving the position of the current nodeView
     */
    __privateAdd(this, _getPosition);
    /**
     * The options passed through to the `ReactComponent`.
     */
    __privateAdd(this, _options);
    __privateAdd(this, _selected, false);
    __privateAdd(this, _contentDOM);
    /**
     * The wrapper for the content dom. Created from the node spec `toDOM` method.
     */
    __privateAdd(this, _contentDOMWrapper);
    __privateAdd(this, _dom);
    /**
     * Adds a ref to the component that has been provided and can be used to set
     * it as the content container. However it is advisable to either not use
     * ReactNodeViews for nodes with content or to take control of rendering the
     * content within the component..
     */
    __privateAdd(this, _forwardRef, (node) => {
      if (!node) {
        return;
      }
      invariant(__privateGet(this, _contentDOMWrapper), {
        code: ErrorConstant.REACT_NODE_VIEW,
        message: "You have applied a ref to a node view provided for '".concat(__privateGet(this, _node).type.name, "' which doesn't support content.")
      });
      node.append(__privateGet(this, _contentDOMWrapper));
    });
    /**
     * Render the provided component.
     *
     * This method is passed into the HTML element.
     */
    __publicField(this, "Component", () => {
      const ReactComponent = __privateGet(this, _Component);
      invariant(ReactComponent, {
        code: ErrorConstant.REACT_NODE_VIEW,
        message: "The custom react node view provided for ".concat(__privateGet(this, _node).type.name, " doesn't have a valid ReactComponent")
      });
      return /* @__PURE__ */ React2.createElement(
        ReactComponent,
        {
          updateAttributes: this.updateAttributes,
          selected: this.selected,
          view: __privateGet(this, _view),
          getPosition: __privateGet(this, _getPosition),
          node: __privateGet(this, _node),
          forwardRef: __privateGet(this, _forwardRef),
          decorations: __privateGet(this, _decorations)
        }
      );
    });
    /**
     * Passed to the Component to enable updating the attributes from within the component.
     */
    __publicField(this, "updateAttributes", (attrs) => {
      if (!__privateGet(this, _view).editable) {
        return;
      }
      const pos = __privateGet(this, _getPosition).call(this);
      if (pos == null) {
        return;
      }
      const tr = __privateGet(this, _view).state.tr.setNodeMarkup(pos, void 0, __spreadValues(__spreadValues({}, __privateGet(this, _node).attrs), attrs));
      __privateGet(this, _view).dispatch(tr);
    });
    var _a2;
    invariant(isFunction(getPosition), {
      message: "You are attempting to use a node view for a mark type. This is not supported yet. Please check your configuration."
    });
    __privateSet(this, _node, node);
    __privateSet(this, _view, view);
    __privateSet(this, _portalContainer, portalContainer);
    __privateSet(this, _Component, ReactComponent);
    __privateSet(this, _getPosition, getPosition);
    __privateSet(this, _options, options);
    __privateSet(this, _dom, this.createDom());
    const { contentDOM, wrapper } = (_a2 = this.createContentDom()) != null ? _a2 : {};
    __privateSet(this, _contentDOM, contentDOM != null ? contentDOM : void 0);
    __privateSet(this, _contentDOMWrapper, wrapper);
    if (__privateGet(this, _contentDOMWrapper)) {
      __privateGet(this, _dom).append(__privateGet(this, _contentDOMWrapper));
    }
    this.setDomAttributes(__privateGet(this, _node), __privateGet(this, _dom));
    this.Component.displayName = pascalCase("".concat(__privateGet(this, _node).type.name, "NodeView"));
    this.renderComponent();
  }
  /**
   * A shorthand method for creating the `ReactNodeView`.
   */
  static create(props) {
    const { portalContainer, ReactComponent, options } = props;
    return (node, view, getPosition) => new _ReactNodeView({
      options,
      node,
      view,
      getPosition,
      portalContainer,
      ReactComponent
    });
  }
  /**
   * Whether or not the node is currently selected.
   */
  get selected() {
    return __privateGet(this, _selected);
  }
  /**
   * The DOM node that should hold the node's content.
   *
   * This is only meaningful if the NodeView is not a leaf type and it can
   * accept content. When these criteria are met, `ProseMirror` will take care of
   * rendering the node's children into it.
   *
   * In order to make use of this in a
   */
  get contentDOM() {
    return __privateGet(this, _contentDOM);
  }
  /**
   * Provides readonly access to the dom element. The dom is automatically for
   * react components.
   */
  get dom() {
    return __privateGet(this, _dom);
  }
  /**
   * Render the react component into the dom.
   */
  renderComponent() {
    __privateGet(this, _portalContainer).render({
      Component: this.Component,
      container: __privateGet(this, _dom)
    });
  }
  /**
   * Create the dom element which will hold the react component.
   */
  createDom() {
    const { defaultBlockNode, defaultInlineNode } = __privateGet(this, _options);
    const element = __privateGet(this, _node).isInline ? document.createElement(defaultInlineNode) : document.createElement(defaultBlockNode);
    element.classList.add("".concat(kebabCase(__privateGet(this, _node).type.name), "-node-view-wrapper"));
    return element;
  }
  /**
   * The element that will contain the content for this element.
   */
  createContentDom() {
    var _a2, _b;
    if (__privateGet(this, _node).isLeaf) {
      return;
    }
    const domSpec = (_b = (_a2 = __privateGet(this, _node).type.spec).toDOM) == null ? void 0 : _b.call(_a2, __privateGet(this, _node));
    if (!domSpec) {
      return;
    }
    const { contentDOM, dom } = DOMSerializer.renderSpec(document, domSpec);
    let wrapper;
    if (!isElementDomNode(dom)) {
      return;
    }
    wrapper = dom;
    if (dom === contentDOM) {
      wrapper = document.createElement("span");
      wrapper.classList.add("".concat(kebabCase(__privateGet(this, _node).type.name), "-node-view-content-wrapper"));
      wrapper.append(contentDOM);
    }
    if (isElementDomNode(contentDOM)) {
    }
    return { wrapper, contentDOM };
  }
  /**
   * This is called whenever the node is called.
   */
  update(node, decorations) {
    if (!isNodeOfType({ types: __privateGet(this, _node).type, node })) {
      return false;
    }
    if (__privateGet(this, _node) === node && __privateGet(this, _decorations) === decorations) {
      return true;
    }
    if (!__privateGet(this, _node).sameMarkup(node)) {
      this.setDomAttributes(node, __privateGet(this, _dom));
    }
    __privateSet(this, _node, node);
    __privateSet(this, _decorations, decorations);
    this.renderComponent();
    return true;
  }
  /**
   * Copies the attributes from a ProseMirror Node to the parent DOM node.
   *
   * @param node The Prosemirror Node from which to source the attributes
   */
  setDomAttributes(node, element) {
    const { toDOM } = __privateGet(this, _node).type.spec;
    let attributes = node.attrs;
    if (toDOM) {
      const domSpec = toDOM(node);
      if (isString(domSpec) || isDomNodeOutputSpec(domSpec)) {
        return;
      }
      if (isPlainObject(domSpec[1])) {
        attributes = domSpec[1];
      }
    }
    for (const [attribute, value] of entries(attributes)) {
      element.setAttribute(attribute, value);
    }
  }
  /**
   * Marks the node as being selected.
   */
  selectNode() {
    __privateSet(this, _selected, true);
    if (__privateGet(this, _dom)) {
      __privateGet(this, _dom).classList.add(SELECTED_NODE_CLASS_NAME);
    }
    this.renderComponent();
  }
  /**
   * Remove the selected node markings from this component.
   */
  deselectNode() {
    __privateSet(this, _selected, false);
    if (__privateGet(this, _dom)) {
      __privateGet(this, _dom).classList.remove(SELECTED_NODE_CLASS_NAME);
    }
    this.renderComponent();
  }
  /**
   * This is called whenever the node is being destroyed.
   */
  destroy() {
    __privateGet(this, _portalContainer).remove(__privateGet(this, _dom));
  }
  /**
   * The handler which decides when mutations should be ignored.
   */
  ignoreMutation(mutation) {
    if (mutation.type === "selection") {
      return !__privateGet(this, _node).type.spec.selectable;
    }
    if (!__privateGet(this, _contentDOMWrapper)) {
      return true;
    }
    return !__privateGet(this, _contentDOMWrapper).contains(mutation.target);
  }
  stopEvent(event) {
    var _a2;
    if (!__privateGet(this, _dom)) {
      return false;
    }
    if (isFunction(__privateGet(this, _options).stopEvent)) {
      return __privateGet(this, _options).stopEvent({ event });
    }
    const target = event.target;
    const isInElement = __privateGet(this, _dom).contains(target) && !((_a2 = this.contentDOM) == null ? void 0 : _a2.contains(target));
    if (!isInElement) {
      return false;
    }
    const isDropEvent = event.type === "drop";
    const isInput = ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(target.tagName) || target.isContentEditable;
    if (isInput && !isDropEvent) {
      return true;
    }
    const isDraggable = !!__privateGet(this, _node).type.spec.draggable;
    const isSelectable = NodeSelection.isSelectable(__privateGet(this, _node));
    const isCopyEvent = event.type === "copy";
    const isPasteEvent = event.type === "paste";
    const isCutEvent = event.type === "cut";
    const isClickEvent = event.type === "mousedown";
    const isDragEvent = event.type.startsWith("drag");
    if (!isDraggable && isSelectable && isDragEvent) {
      event.preventDefault();
    }
    if (isDragEvent || isDropEvent || isCopyEvent || isPasteEvent || isCutEvent || isClickEvent && isSelectable) {
      return false;
    }
    return true;
  }
};
_node = new WeakMap();
_decorations = new WeakMap();
_view = new WeakMap();
_portalContainer = new WeakMap();
_Component = new WeakMap();
_getPosition = new WeakMap();
_options = new WeakMap();
_selected = new WeakMap();
_contentDOM = new WeakMap();
_contentDOMWrapper = new WeakMap();
_dom = new WeakMap();
_forwardRef = new WeakMap();
var ReactNodeView = _ReactNodeView;
function isDomNodeOutputSpec(value) {
  return isDomNode(value) || isPlainObject(value) && isDomNode(value.dom);
}

// src/react-component-extension.ts
var _ReactComponentExtension_decorators, _init, _a;
_ReactComponentExtension_decorators = [extension({
  defaultOptions: {
    defaultBlockNode: "div",
    defaultInlineNode: "span",
    defaultContentNode: "span",
    defaultEnvironment: "both",
    nodeViewComponents: {},
    stopEvent: null
  },
  staticKeys: ["defaultBlockNode", "defaultInlineNode", "defaultContentNode", "defaultEnvironment"]
})];
var ReactComponentExtension = class extends (_a = PlainExtension) {
  constructor() {
    super(...arguments);
    /**
     * The portal container which keeps track of all the React Portals containing
     * custom prosemirror NodeViews.
     */
    __publicField(this, "portalContainer", new PortalContainer());
  }
  get name() {
    return "reactComponent";
  }
  /**
   * Add the portal container to the manager store. This can be used by the
   * `<Remirror />` component to manage portals for node content.
   */
  onCreate() {
    this.store.setStoreKey("portalContainer", this.portalContainer);
  }
  /**
   * Create the node views from the custom components provided.
   */
  createNodeViews() {
    var _a2;
    const nodeViews = object();
    const managerComponents = (_a2 = this.store.managerSettings.nodeViewComponents) != null ? _a2 : {};
    for (const extension2 of this.store.extensions) {
      if (!extension2.ReactComponent || !isNodeExtension(extension2) || extension2.reactComponentEnvironment === "ssr") {
        continue;
      }
      nodeViews[extension2.name] = ReactNodeView.create({
        options: this.options,
        ReactComponent: extension2.ReactComponent,
        portalContainer: this.portalContainer
      });
    }
    const namedComponents = entries2(__spreadValues(__spreadValues({}, this.options.nodeViewComponents), managerComponents));
    for (const [name, ReactComponent] of namedComponents) {
      nodeViews[name] = ReactNodeView.create({
        options: this.options,
        ReactComponent,
        portalContainer: this.portalContainer
      });
    }
    return nodeViews;
  }
};
_init = __decoratorStart(_a);
ReactComponentExtension = __decorateElement(_init, 0, "ReactComponentExtension", _ReactComponentExtension_decorators, ReactComponentExtension);
__runInitializers(_init, 1, ReactComponentExtension);
export {
  PortalContainer,
  ReactComponentExtension,
  RemirrorPortals,
  usePortals
};
