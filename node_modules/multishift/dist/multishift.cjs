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
  Actions: () => Actions,
  MultishiftActionTypes: () => MultishiftActionTypes,
  SPECIAL_INPUT_KEYS: () => SPECIAL_INPUT_KEYS,
  SPECIAL_KEYS: () => SPECIAL_KEYS,
  SPECIAL_MENU_KEYS: () => SPECIAL_MENU_KEYS,
  SPECIAL_TOGGLE_BUTTON_KEYS: () => SPECIAL_TOGGLE_BUTTON_KEYS,
  Type: () => Type,
  useMultishift: () => useMultishift
});
module.exports = __toCommonJS(src_exports);

// src/multishift.ts
var import_react2 = require("react");
var import_core_helpers4 = require("@remirror/core-helpers");

// src/commonjs-packages/seznam-compose-react-refs.ts
var import_compose_react_refs = __toESM(require("@seznam/compose-react-refs"), 1);
var composeRefs = typeof import_compose_react_refs.default === "object" && import_compose_react_refs.default.__esModule && import_compose_react_refs.default.default ? import_compose_react_refs.default.default : import_compose_react_refs.default;

// src/multishift-constants.ts
var SPECIAL_KEYS = [
  "Tab",
  "Space",
  "Enter",
  "Escape",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "SelectAll"
];
var SPECIAL_INPUT_KEYS = ["ArrowDown", "ArrowUp", "Enter", "Escape"];
var SPECIAL_MENU_KEYS = [
  "ArrowDown",
  "ArrowUp",
  "Space",
  "Tab",
  "Enter",
  "Escape",
  "Home",
  "End",
  "SelectAll"
];
var SPECIAL_TOGGLE_BUTTON_KEYS = ["ArrowDown", "ArrowUp", "Space"];
var Type = {
  /**
   * Describes a selection only drop down. There is no input for filtering
   * longer lists.
   */
  Select: "select",
  /**
   * Describes the combination of a selection drop down with an input for
   * filtering potential options.
   */
  ComboBox: "combobox",
  /**
   * A menu rendered without a toggleButton, combobox or input element. It is up
   * to you to provide the input value and manage the focus.
   */
  ControlledMenu: "controlled-menu"
};
var MultishiftActionTypes = {
  SelectItems: "$$__SELECT_ITEMS__",
  SelectItem: "$$__SELECT_ITEM__",
  RemoveSelectedItems: "$$_REMOVE__SELECTED_ITEMS__",
  RemoveSelectedItem: "$$__REMOVE_SELECTED_ITEM__",
  ClearSelection: "$$__CLEAR_SELECTION__",
  SetHoverItemIndex: "$$__SET_HOVER_ITEM_INDEX__",
  ToggleMenu: "$$__TOGGLE_MENU__",
  CloseMenu: "$$__CLOSE_MENU__",
  OpenMenu: "$$__OPEN_MENU__",
  SetHighlightedIndexes: "$$__SET_HIGHLIGHTED_INDEXES__",
  SetHighlightedIndex: "$$__SET_HIGHLIGHTED_INDEX__",
  ClearHighlighted: "$$__CLEAR_HIGHLIGHTED__",
  ClearHover: "$$__CLEAR_HOVER__",
  Reset: "$$__RESET__",
  SetState: "$$__SET_STATE__",
  ItemMouseMove: "$$__ITEM_MOUSE_MOVE__",
  ItemMouseLeave: "$$__ITEM_MOUSE_LEAVE__",
  ItemClick: "$$__ITEM_CLICK__",
  ToggleButtonClick: "$$__TOGGLE_BUTTON_CLICK__",
  ToggleButtonBlur: "$$__TOGGLE_BUTTON_BLUR__",
  ToggleButtonSpecialKeyDown: "$$__TOGGLE_BUTTON_SPECIAL_KEY_DOWN__",
  MenuBlur: "$$__MENU_BLUR__",
  MenuSpecialKeyDown: "$$__MENU_SPECIAL_KEY_DOWN__",
  MenuCharacterKeyDown: "$$__MENU_CHARACTER_KEY_DOWN__",
  InputBlur: "$$__INPUT_BLUR__",
  InputSpecialKeyDown: "$$__INPUT_SPECIAL_KEY_DOWN__",
  ClearJumpText: "$$__CLEAR_JUMP_TEXT__",
  InputValueChange: "$$__INPUT_VALUE_CHANGE__",
  ClearInputValue: "$$__CLEAR_INPUT_VALUE__",
  OuterMouseUp: "$$__OUTER_MOUSE_UP__",
  OuterTouchEnd: "$$__OUTER_TOUCH_END__"
};

// src/multishift-action-creators.ts
function selectItems(items, keepHighlights = false) {
  return {
    type: MultishiftActionTypes.SelectItems,
    payload: { items, keepHighlights }
  };
}
function selectItem(item, keepHighlights = false) {
  return {
    type: MultishiftActionTypes.SelectItem,
    payload: { items: [item], keepHighlights }
  };
}
function removeSelectedItems(items, keepHighlights = false) {
  return {
    type: MultishiftActionTypes.RemoveSelectedItems,
    payload: { items, keepHighlights }
  };
}
function removeSelectedItem(item, keepHighlights = false) {
  return {
    type: MultishiftActionTypes.RemoveSelectedItem,
    payload: { items: [item], keepHighlights }
  };
}
function clearSelection() {
  return {
    type: MultishiftActionTypes.ClearSelection
  };
}
function setHoverItemIndex(payload) {
  return {
    type: MultishiftActionTypes.SetHoverItemIndex,
    payload
  };
}
function toggleMenu() {
  return {
    type: MultishiftActionTypes.ToggleMenu
  };
}
function closeMenu() {
  return {
    type: MultishiftActionTypes.CloseMenu
  };
}
function openMenu() {
  return {
    type: MultishiftActionTypes.OpenMenu
  };
}
function setHighlightedIndexes(payload) {
  return {
    type: MultishiftActionTypes.SetHighlightedIndexes,
    payload
  };
}
function setHighlightedIndex(index) {
  return {
    type: MultishiftActionTypes.SetHighlightedIndex,
    payload: [index]
  };
}
function clearHighlighted() {
  return {
    type: MultishiftActionTypes.ClearHighlighted
  };
}
function reset() {
  return {
    type: MultishiftActionTypes.Reset
  };
}
function itemMouseMove(payload) {
  return {
    type: MultishiftActionTypes.ItemMouseMove,
    payload
  };
}
function itemMouseLeave(payload) {
  return {
    type: MultishiftActionTypes.ItemMouseLeave,
    payload
  };
}
function itemClick(payload) {
  return {
    type: MultishiftActionTypes.ItemClick,
    payload
  };
}
function menuBlur() {
  return {
    type: MultishiftActionTypes.MenuBlur
  };
}
function inputBlur() {
  return {
    type: MultishiftActionTypes.InputBlur
  };
}
function toggleButtonBlur() {
  return {
    type: MultishiftActionTypes.ToggleButtonBlur
  };
}
function clearJumpText() {
  return {
    type: MultishiftActionTypes.ClearJumpText
  };
}
function clearInputValue() {
  return {
    type: MultishiftActionTypes.ClearInputValue
  };
}
function toggleButtonClick() {
  return {
    type: MultishiftActionTypes.ToggleButtonClick
  };
}
function outerTouchEnd() {
  return {
    type: MultishiftActionTypes.OuterTouchEnd
  };
}
function outerMouseUp() {
  return {
    type: MultishiftActionTypes.OuterMouseUp
  };
}
function menuSpecialKeyDown(payload) {
  return {
    type: MultishiftActionTypes.MenuSpecialKeyDown,
    payload
  };
}
function toggleButtonSpecialKeyDown(payload) {
  return {
    type: MultishiftActionTypes.ToggleButtonSpecialKeyDown,
    payload
  };
}
function inputSpecialKeyDown(payload) {
  return {
    type: MultishiftActionTypes.InputSpecialKeyDown,
    payload
  };
}
function menuCharacterKeyDown(payload) {
  return {
    type: MultishiftActionTypes.MenuCharacterKeyDown,
    payload
  };
}
function inputValueChange(payload) {
  return {
    type: MultishiftActionTypes.InputValueChange,
    payload
  };
}
function setState(payload) {
  return {
    type: MultishiftActionTypes.SetState,
    payload
  };
}
var Actions = {
  itemMouseMove,
  itemMouseLeave,
  itemClick,
  menuBlur,
  toggleButtonBlur,
  inputBlur,
  toggleButtonClick,
  menuSpecialKeyDown,
  toggleButtonSpecialKeyDown,
  inputSpecialKeyDown,
  menuCharacterKeyDown,
  outerTouchEnd,
  outerMouseUp,
  selectItems,
  selectItem,
  removeSelectedItems,
  removeSelectedItem,
  setState,
  clearSelection,
  setHoverItemIndex,
  inputValueChange,
  clearInputValue,
  toggleMenu,
  closeMenu,
  openMenu,
  setHighlightedIndexes,
  setHighlightedIndex,
  clearHighlighted,
  reset,
  clearJumpText
};

// src/multishift-hooks.ts
var import_a11y_status = require("a11y-status");
var import_react = require("react");
var import_core_helpers3 = require("@remirror/core-helpers");

// src/multishift-reducer.ts
var import_core_helpers2 = require("@remirror/core-helpers");

// src/multishift-utils.ts
var import_compute_scroll_into_view = __toESM(require("compute-scroll-into-view"), 1);
var import_tiny_warning = __toESM(require("tiny-warning"), 1);
var import_w3c_keyname = require("w3c-keyname");
var import_core_helpers = require("@remirror/core-helpers");
var computeScrollIntoView = (0, import_core_helpers.defaultImport)(import_compute_scroll_into_view.default);
function defaultGetItemId(item) {
  return item;
}
function defaultItemToString(item) {
  return item ? String(item) : "";
}
function defaultItemsToString(selectedItems, itemToString = defaultItemToString) {
  return selectedItems.map(itemToString).join(", ");
}
var DEFAULT_STATE = {
  selectedItems: [],
  jumpText: "",
  isOpen: false,
  inputValue: "",
  hoveredIndex: -1,
  highlightedIndexes: [],
  highlightedGroupStartIndex: -1,
  highlightedGroupEndIndex: void 0
};
var noUndefined = (fallback, values) => {
  for (const value of values) {
    if (!(0, import_core_helpers.isUndefined)(value)) {
      return value;
    }
  }
  return fallback;
};
function getDefaultState(defaults) {
  const {
    defaultSelectedItems,
    defaultJumpText,
    defaultIsOpen,
    defaultInputValue,
    defaultHoveredIndex,
    defaultHighlightedIndexes,
    defaultHighlightedGroupStartIndex,
    defaultHighlightedGroupEndIndex
  } = defaults;
  return {
    selectedItems: defaultSelectedItems != null ? defaultSelectedItems : DEFAULT_STATE.selectedItems,
    jumpText: noUndefined(DEFAULT_STATE.jumpText, [defaultJumpText]),
    isOpen: noUndefined(DEFAULT_STATE.isOpen, [defaultIsOpen]),
    inputValue: noUndefined(DEFAULT_STATE.inputValue, [defaultInputValue]),
    hoveredIndex: noUndefined(DEFAULT_STATE.hoveredIndex, [defaultHoveredIndex]),
    highlightedIndexes: defaultHighlightedIndexes != null ? defaultHighlightedIndexes : DEFAULT_STATE.highlightedIndexes,
    highlightedGroupStartIndex: noUndefined(DEFAULT_STATE.highlightedGroupStartIndex, [
      defaultHighlightedGroupStartIndex
    ]),
    highlightedGroupEndIndex: noUndefined(DEFAULT_STATE.highlightedGroupEndIndex, [
      defaultHighlightedGroupEndIndex
    ])
  };
}
function getInitialStateProps(initialProps) {
  const _a = initialProps, {
    initialSelectedItems,
    initialJumpText,
    initialIsOpen,
    initialInputValue,
    initialHoveredIndex,
    initialHighlightedIndexes,
    initialHighlightedGroupStartIndex,
    initialHighlightedGroupEndIndex,
    selectedItems,
    jumpText,
    isOpen,
    inputValue,
    hoveredIndex,
    highlightedIndexes,
    highlightedGroupStartIndex,
    highlightedGroupEndIndex
  } = _a, props = __objRest(_a, [
    "initialSelectedItems",
    "initialJumpText",
    "initialIsOpen",
    "initialInputValue",
    "initialHoveredIndex",
    "initialHighlightedIndexes",
    "initialHighlightedGroupStartIndex",
    "initialHighlightedGroupEndIndex",
    "selectedItems",
    "jumpText",
    "isOpen",
    "inputValue",
    "hoveredIndex",
    "highlightedIndexes",
    "highlightedGroupStartIndex",
    "highlightedGroupEndIndex"
  ]);
  const fallback = getDefaultState(props);
  return {
    selectedItems: noUndefined(fallback.selectedItems, [selectedItems, initialSelectedItems]),
    jumpText: noUndefined(fallback.jumpText, [jumpText, initialJumpText]),
    isOpen: noUndefined(fallback.isOpen, [isOpen, initialIsOpen]),
    inputValue: noUndefined(fallback.inputValue, [inputValue, initialInputValue]),
    hoveredIndex: noUndefined(fallback.hoveredIndex, [hoveredIndex, initialHoveredIndex]),
    highlightedIndexes: noUndefined(fallback.highlightedIndexes, [
      highlightedIndexes,
      initialHighlightedIndexes
    ]),
    highlightedGroupStartIndex: noUndefined(fallback.highlightedGroupStartIndex, [
      highlightedGroupStartIndex,
      initialHighlightedGroupStartIndex
    ]),
    highlightedGroupEndIndex: noUndefined(fallback.highlightedGroupEndIndex, [
      highlightedGroupEndIndex,
      initialHighlightedGroupEndIndex
    ])
  };
}
function getHighlightReset(defaultState) {
  return {
    highlightedGroupEndIndex: defaultState.highlightedGroupEndIndex,
    highlightedGroupStartIndex: defaultState.highlightedGroupStartIndex,
    highlightedIndexes: defaultState.highlightedIndexes,
    hoveredIndex: defaultState.hoveredIndex
  };
}
function getState(state, props) {
  var _a, _b;
  return {
    selectedItems: (_a = props.selectedItems) != null ? _a : state.selectedItems,
    jumpText: noUndefined(state.jumpText, [props.jumpText]),
    isOpen: noUndefined(state.isOpen, [props.isOpen]),
    inputValue: noUndefined(state.inputValue, [props.inputValue]),
    hoveredIndex: noUndefined(state.hoveredIndex, [props.hoveredIndex]),
    highlightedIndexes: (_b = props.highlightedIndexes) != null ? _b : state.highlightedIndexes,
    highlightedGroupStartIndex: noUndefined(state.highlightedGroupStartIndex, [
      props.highlightedGroupStartIndex
    ]),
    highlightedGroupEndIndex: noUndefined(state.highlightedGroupEndIndex, [
      props.highlightedGroupEndIndex
    ])
  };
}
var changeHandlerMap = {
  selectedItems: ({ onSelectedItemsChange }, { state }) => onSelectedItemsChange == null ? void 0 : onSelectedItemsChange(state.selectedItems, state),
  jumpText: ({ onJumpTextChange }, { state }) => onJumpTextChange == null ? void 0 : onJumpTextChange(state.jumpText, state),
  isOpen: ({ onIsOpenChange }, { state }) => onIsOpenChange == null ? void 0 : onIsOpenChange(state.isOpen, state),
  inputValue: ({ onInputValueChange }, { state }) => onInputValueChange == null ? void 0 : onInputValueChange(state.inputValue, state),
  hoveredIndex: ({ onHoveredIndexChange }, { state }) => onHoveredIndexChange == null ? void 0 : onHoveredIndexChange(state.hoveredIndex, state),
  highlightedIndexes: ({ onHighlightedIndexesChange }, { state }) => onHighlightedIndexesChange == null ? void 0 : onHighlightedIndexesChange(state.highlightedIndexes, state),
  highlightedGroupStartIndex: ({ onHighlightedGroupStartIndexChange }, { state }) => onHighlightedGroupStartIndexChange == null ? void 0 : onHighlightedGroupStartIndexChange(state.highlightedGroupStartIndex, state),
  highlightedGroupEndIndex: ({ onHighlightedGroupEndIndexChange }, { state }) => onHighlightedGroupEndIndexChange == null ? void 0 : onHighlightedGroupEndIndexChange(state.highlightedGroupEndIndex, state)
};
function callChangeHandlers(handlers, changeset) {
  const { changes, state, prevState } = changeset;
  const changedKeys = (0, import_core_helpers.keys)(changes);
  const { onStateChange } = handlers;
  changedKeys.forEach((key) => {
    changeHandlerMap[key](handlers, { changes, state, prevState });
  });
  if (!(0, import_core_helpers.isEmptyArray)(changedKeys.length) && onStateChange) {
    onStateChange(changes, state);
  }
}
function getElementIds(defaultId, props = (0, import_core_helpers.object)()) {
  const { id, labelId, menuId, getItemA11yId, toggleButtonId, inputId } = props;
  const uniqueId = id === void 0 ? "multishift-".concat(defaultId) : id;
  return {
    labelId: labelId != null ? labelId : "".concat(uniqueId, "-label"),
    inputId: inputId != null ? inputId : "".concat(uniqueId, "-input"),
    menuId: menuId != null ? menuId : "".concat(uniqueId, "-menu"),
    getItemA11yId: getItemA11yId != null ? getItemA11yId : (index) => "".concat(uniqueId, "-item-").concat(index != null ? index : 0),
    toggleButtonId: toggleButtonId != null ? toggleButtonId : "".concat(uniqueId, "-toggle-button")
  };
}
function getNextWrappingIndex({
  start,
  steps,
  size,
  circular
}) {
  if (size === 0) {
    return;
  }
  if (start === -1) {
    return steps > 0 ? 0 : size - 1;
  }
  const nextIndex = start + steps;
  if (nextIndex < 0) {
    return circular ? size - 1 : 0;
  }
  if (nextIndex >= size) {
    return circular ? 0 : size - 1;
  }
  return nextIndex;
}
function isValidIndex(index) {
  return (0, import_core_helpers.isNumber)(index) && index > -1;
}
function getNextWrappingIndexes(params) {
  const index = getNextWrappingIndex(params);
  return isValidIndex(index) ? [index] : [];
}
function getItemIndexesByJumpText({
  text,
  highlightedIndexes,
  items,
  itemToString = defaultItemToString
}) {
  let newHighlightedIndex = -1;
  const finder = (str) => str.startsWith(text);
  const itemStrings = items.map((item) => itemToString(item).toLowerCase());
  const startPosition = (Math.min(...highlightedIndexes) || -1) + 1;
  newHighlightedIndex = itemStrings.slice(startPosition).findIndex(finder);
  if (newHighlightedIndex > -1) {
    return [newHighlightedIndex + startPosition];
  }
  const index = itemStrings.slice(0, startPosition).findIndex(finder);
  return isValidIndex(index) ? [index] : [];
}
function getHighlightedIndexOnOpen(props, state, offset, getItemId) {
  const { items, initialHighlightedIndexes, defaultHighlightedIndexes } = props;
  const { selectedItems, highlightedIndexes } = state;
  if (!(0, import_core_helpers.isUndefined)(initialHighlightedIndexes) && !(0, import_core_helpers.isEmptyArray)(highlightedIndexes)) {
    return initialHighlightedIndexes;
  }
  if (defaultHighlightedIndexes) {
    return defaultHighlightedIndexes;
  }
  if (!(0, import_core_helpers.isEmptyArray)(selectedItems)) {
    const idsOfItems = items.map(getItemId);
    const index = selectedItems.map((selectedItem) => idsOfItems.indexOf(getItemId(selectedItem))).findIndex(isValidIndex);
    if (!isValidIndex(index)) {
      return [];
    }
    if (offset === 0) {
      return [index];
    }
    return getNextWrappingIndexes({
      steps: offset,
      start: index,
      size: items.length,
      circular: false
    });
  }
  if (offset === 0) {
    return [0];
  }
  return offset < 0 ? [items.length - 1] : [0];
}
function getItemIndex(index, item, items) {
  if (index !== void 0) {
    return index;
  }
  if (items.length === 0) {
    return -1;
  }
  return items.indexOf(item);
}
function getMostRecentHighlightIndex(lastHighlight) {
  const { highlightedGroupEndIndex, highlightedGroupStartIndex, highlightedIndexes } = lastHighlight;
  const lastIndex = (0, import_core_helpers.last)(highlightedIndexes);
  return isValidIndex(highlightedGroupEndIndex) ? highlightedGroupEndIndex : isValidIndex(highlightedGroupStartIndex) ? highlightedGroupStartIndex : isValidIndex(lastIndex) ? lastIndex : -1;
}
var isMac = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
function allItemsSelected(currentItems, newItems, getItemId) {
  return !(0, import_core_helpers.isEmptyArray)(newItems) ? newItems.every(
    (newItem) => currentItems.some((item) => getItemId(item) === getItemId(newItem))
  ) : false;
}
function addItems(currentItems, newItems, getItemId, multiple) {
  return multiple ? (0, import_core_helpers.uniqueBy)([...currentItems, ...newItems], getItemId, true) : (0, import_core_helpers.take)(newItems, 1);
}
function removeItems(currentItems, removalItems, getItemId) {
  return currentItems.filter(
    (prevItem) => !removalItems.some((newItem) => getItemId(newItem) === getItemId(prevItem))
  );
}
function toggleSelectedItems(currentItems, toggleItems, getItemId, multiple) {
  return allItemsSelected(currentItems, toggleItems, getItemId) ? removeItems(currentItems, toggleItems, getItemId) : addItems(currentItems, toggleItems, getItemId, multiple);
}
function getHighlightedIndexes({
  start,
  end,
  indexes,
  items,
  hoveredIndex
}) {
  const max = items.length - 1;
  const groupIndexes = isValidIndex(start) ? (0, import_core_helpers.range)(
    (0, import_core_helpers.clamp)({ min: 0, max, value: start }),
    (0, import_core_helpers.clamp)({ min: 0, max, value: isValidIndex(end) ? end : start })
  ) : [];
  const hoveredIndexes = isValidIndex(hoveredIndex) ? [hoveredIndex] : [];
  return (0, import_core_helpers.uniqueArray)([...hoveredIndexes, ...indexes, ...groupIndexes], true).filter(
    (index) => 0 <= index && index <= max
  );
}
function checkItemHighlighted(index, options) {
  const { start, end, indexes } = options;
  return indexes.includes(index) || (0, import_core_helpers.within)(index, start, end);
}
function omitUnchangedState(changes, { state, getItemId }) {
  return (0, import_core_helpers.omit)(changes, (value, key) => {
    if ((0, import_core_helpers.isArray)(value)) {
      if (key === "selectedItems") {
        return value.length !== state.selectedItems.length || value.some(
          (item, index) => getItemId(item) !== getItemId((0, import_core_helpers.assertGet)(state.selectedItems, index))
        );
      }
      if (key === "highlightedIndexes") {
        return value.length !== state.highlightedIndexes.length || value.some((val, index) => val !== state.highlightedIndexes[index]);
      }
    }
    return value !== state[key];
  });
}
function getChangesFromItemClick({
  modifiers,
  items,
  defaultState,
  state,
  index,
  props,
  getItemId
}) {
  const selectedItem = items[index];
  const isOpen = props.multiple ? true : defaultState.isOpen;
  const params = { state, getItemId };
  const defaultReturn = {
    highlightedGroupEndIndex: defaultState.highlightedGroupEndIndex,
    highlightedGroupStartIndex: props.multiple ? index : defaultState.highlightedGroupStartIndex
  };
  if (!selectedItem) {
    return __spreadProps(__spreadValues({}, defaultReturn), { isOpen });
  }
  const selectedItems = toggleSelectedItems(
    state.selectedItems,
    [selectedItem],
    getItemId,
    props.multiple
  );
  const shiftKeyPressed = modifiers.includes("shiftKey");
  const singleHighlightKeyPressed = modifiers.includes(isMac() ? "metaKey" : "ctrlKey") && modifiers.length === 1;
  if (!props.multiple) {
    return __spreadProps(__spreadValues({}, defaultReturn), {
      highlightedIndexes: defaultState.highlightedIndexes,
      selectedItems
    });
  }
  if (singleHighlightKeyPressed) {
    const indexes = getHighlightedIndexes({
      indexes: state.highlightedIndexes,
      start: state.highlightedGroupStartIndex,
      end: state.highlightedGroupEndIndex,
      hoveredIndex: props.includeHoveredIndexInSelection ? state.hoveredIndex : void 0,
      items
    });
    const isHighlighted = checkItemHighlighted(index, {
      indexes,
      start: state.highlightedGroupStartIndex,
      end: state.highlightedGroupEndIndex
    });
    const extra = isHighlighted ? {
      highlightedIndexes: indexes.filter((ii) => ii !== index),
      highlightedGroupEndIndex: void 0,
      highlightedGroupStartIndex: -1
    } : { highlightedIndexes: indexes, highlightedGroupStartIndex: index };
    const changes = __spreadValues(__spreadValues({}, defaultReturn), extra);
    return omitUnchangedState(changes, params);
  }
  if (shiftKeyPressed) {
    const indexes = (0, import_core_helpers.uniqueArray)(state.highlightedIndexes, true);
    const extra = isValidIndex(state.highlightedGroupStartIndex) ? {
      highlightedIndexes: indexes,
      highlightedGroupStartIndex: state.highlightedGroupStartIndex,
      highlightedGroupEndIndex: index
    } : { highlightedIndexes: indexes, highlightedGroupStartIndex: index };
    const changes = __spreadValues(__spreadValues({}, defaultReturn), extra);
    return omitUnchangedState(changes, params);
  }
  return omitUnchangedState(
    __spreadProps(__spreadValues({}, defaultReturn), {
      selectedItems,
      isOpen,
      highlightedIndexes: defaultState.highlightedIndexes
    }),
    params
  );
}
function getKeyName(event) {
  const key = (0, import_w3c_keyname.keyName)(event.nativeEvent);
  if (key === " ") {
    return "Space";
  }
  if (key.toLowerCase() === "a" && isMac() ? event.metaKey : event.ctrlKey) {
    return "SelectAll";
  }
  return key;
}
function warnIfInternalType(type, message = "") {
  (0, import_tiny_warning.default)(!type.startsWith("$$"), message);
}
function getChangesFromMenuKeyDown({
  modifiers,
  defaultState,
  state,
  key,
  items,
  getItemId,
  props,
  disabled
}) {
  const shiftKeyPressed = modifiers.includes("shiftKey");
  const metaKeyPressed = modifiers.includes("metaKey");
  const params = { state, getItemId };
  const mostRecentHighlightIndex = getMostRecentHighlightIndex(state);
  const highlightReset = getHighlightReset(defaultState);
  const indexes = getHighlightedIndexes({
    start: state.highlightedGroupStartIndex,
    end: state.highlightedGroupEndIndex,
    indexes: state.highlightedIndexes,
    hoveredIndex: props.includeHoveredIndexInSelection ? state.hoveredIndex : void 0,
    items
  }).filter((index) => !disabled.includes(index));
  if (key === "Escape") {
    return omitUnchangedState(
      __spreadProps(__spreadValues({}, getHighlightReset(defaultState)), {
        isOpen: false
      }),
      params
    );
  }
  if (key === "Enter" || key === "Space") {
    const highlightedItems = indexes.map((index) => (0, import_core_helpers.assertGet)(items, index));
    const highlights = props.multiple ? {} : __spreadProps(__spreadValues({}, highlightReset), { highlightedIndexes: [mostRecentHighlightIndex] });
    const selectedItems = toggleSelectedItems(
      state.selectedItems,
      highlightedItems,
      getItemId,
      props.multiple
    );
    const changes = __spreadProps(__spreadValues({}, highlights), {
      isOpen: props.multiple ? true : defaultState.isOpen,
      jumpText: defaultState.jumpText,
      selectedItems
    });
    return omitUnchangedState(changes, params);
  }
  if (key === "SelectAll") {
    const changes = {
      highlightedIndexes: (0, import_core_helpers.range)(0, items.length - 1).filter((index) => !disabled.includes(index)),
      highlightedGroupStartIndex: mostRecentHighlightIndex,
      highlightedGroupEndIndex: defaultState.highlightedGroupEndIndex
    };
    return omitUnchangedState(changes, params);
  }
  if (props.multiple && (key === "ArrowDown" || key === "ArrowUp") && shiftKeyPressed) {
    const isDown = key === "ArrowDown";
    const index = getNextWrappingIndex({
      start: mostRecentHighlightIndex,
      size: items.length,
      circular: false,
      steps: isDown ? 1 : -1
    });
    const endIndex = !metaKeyPressed ? index : isDown ? items.length - 1 : 0;
    const changes = isValidIndex(state.highlightedGroupStartIndex) ? {
      highlightedGroupEndIndex: endIndex
    } : isValidIndex(mostRecentHighlightIndex) ? {
      highlightedGroupStartIndex: mostRecentHighlightIndex,
      highlightedGroupEndIndex: endIndex
    } : { highlightedGroupStartIndex: index, highlightedGroupEndIndex: endIndex };
    return omitUnchangedState(changes, params);
  }
  if (key === "Home" || key === "ArrowUp" && metaKeyPressed || key === "End" || key === "ArrowDown" && metaKeyPressed) {
    const changes = {
      highlightedIndexes: key === "Home" || key === "ArrowUp" ? [0] : [items.length - 1]
    };
    return omitUnchangedState(changes, params);
  }
  if (key === "ArrowDown" || key === "ArrowUp") {
    const isDown = key === "ArrowDown";
    const highlightedIndexes = getNextWrappingIndexes({
      start: mostRecentHighlightIndex,
      size: items.length,
      circular: true,
      steps: isDown ? 1 : -1
    });
    const changes = __spreadProps(__spreadValues({}, getHighlightReset(defaultState)), {
      highlightedIndexes
    });
    return omitUnchangedState(changes, params);
  }
  if (key === "Tab") {
    const changes = {
      isOpen: false
    };
    return omitUnchangedState(changes, params);
  }
  return {};
}
function getChangesFromToggleButtonKeyDown({
  key,
  defaultState,
  props,
  getItemId,
  state
}) {
  const params = { state, getItemId };
  if (key === "ArrowDown" || key === "ArrowUp" || key === "Enter" || key === "Space") {
    const isNext = key === "ArrowDown";
    const isPrev = key === "ArrowUp";
    const highlights = props.type === Type.Select ? {
      highlightedIndexes: getHighlightedIndexOnOpen(
        props,
        state,
        isNext ? 1 : isPrev ? -1 : 0,
        getItemId
      )
    } : {};
    const changes = __spreadValues({
      isOpen: true
    }, highlights);
    return omitUnchangedState(changes, params);
  }
  if (key === "Escape") {
    return omitUnchangedState(
      __spreadProps(__spreadValues({}, getHighlightReset(defaultState)), {
        isOpen: false
      }),
      params
    );
  }
  return {};
}
var getChangesFromInputKeyDown = (params) => getChangesFromMenuKeyDown(params);
var modifierKeys = ["altKey", "shiftKey", "metaKey", "ctrlKey"];
function getModifiers(event) {
  return modifierKeys.filter((key) => event[key]);
}
function callAllEventHandlers(...fns) {
  return (event, ...args) => {
    fns.some((fn) => {
      if (fn) {
        return fn(event, ...args) === true;
      }
      return false;
    });
  };
}
function bindActionCreator(actionCreator, dispatch) {
  return (...args) => dispatch(actionCreator(...args));
}
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = (0, import_core_helpers.object)();
  const creatorKeys = (0, import_core_helpers.keys)(actionCreators);
  for (const key of creatorKeys) {
    const actionCreator = (0, import_core_helpers.assertGet)(actionCreators, key);
    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
  }
  return boundActionCreators;
}
function createKeyDownPayload(event, key, disabled) {
  return {
    event,
    key,
    modifiers: getModifiers(event),
    disabled
  };
}
function createItemClickPayload(event, index) {
  return {
    event,
    modifiers: getModifiers(event),
    index
  };
}
function isValidCharacterKey(key) {
  return /^\S$/.test(key);
}
function scrollIntoView(element, menuElement) {
  if (!element || !menuElement) {
    return;
  }
  const actions = computeScrollIntoView(element, {
    boundary: menuElement,
    block: "nearest",
    scrollMode: "if-needed"
  });
  actions.forEach(({ el, top, left }) => {
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
function isNode(domNode) {
  return (0, import_core_helpers.isObject)(domNode) && (0, import_core_helpers.isNumber)(domNode.nodeType) && (0, import_core_helpers.isString)(domNode.nodeName);
}
var isHTMLElement = (domNode) => isNode(domNode) && domNode.nodeType === 1 /* ELEMENT_NODE */;
function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}
function createStateHelpers({ getItemId = defaultGetItemId, multiple }, state) {
  return {
    addItems: (itemsToAdd) => addItems(state.selectedItems, itemsToAdd, getItemId, multiple),
    addItem: (itemToAdd) => addItems(state.selectedItems, [itemToAdd], getItemId, multiple),
    removeItems: (itemsToRemove) => removeItems(state.selectedItems, itemsToRemove, getItemId),
    removeItem: (itemToRemove) => removeItems(state.selectedItems, [itemToRemove], getItemId),
    toggleItems: (itemsToToggle) => removeItems(state.selectedItems, itemsToToggle, getItemId),
    toggleItem: (itemToToggle) => removeItems(state.selectedItems, [itemToToggle], getItemId)
  };
}

// src/multishift-reducer.ts
var multishiftReducer = (state, action, props) => {
  let changes = (0, import_core_helpers2.object)();
  const defaultState = getDefaultState(props);
  const {
    multiple,
    items,
    getItemId = defaultGetItemId,
    autoSelectOnBlur = true,
    itemToString,
    initialHighlightedIndexes
  } = props;
  const highlightReset = getHighlightReset(defaultState);
  switch (action.type) {
    case MultishiftActionTypes.SelectItems:
    case MultishiftActionTypes.SelectItem: {
      const extra = action.payload.keepHighlights ? {} : highlightReset;
      changes = __spreadProps(__spreadValues({}, extra), {
        selectedItems: addItems(state.selectedItems, action.payload.items, getItemId, multiple)
      });
      break;
    }
    case MultishiftActionTypes.RemoveSelectedItems:
    case MultishiftActionTypes.RemoveSelectedItem: {
      const extra = action.payload.keepHighlights ? {} : highlightReset;
      changes = __spreadProps(__spreadValues({}, extra), {
        selectedItems: removeItems(state.selectedItems, action.payload.items, getItemId)
      });
      break;
    }
    case MultishiftActionTypes.ClearSelection:
      changes = __spreadProps(__spreadValues({}, highlightReset), {
        selectedItems: []
      });
      break;
    case MultishiftActionTypes.SetHoverItemIndex:
      changes = __spreadProps(__spreadValues({}, state), {
        hoveredIndex: action.payload
      });
      break;
    case MultishiftActionTypes.ItemMouseMove:
      changes = {
        hoveredIndex: action.payload
      };
      break;
    case MultishiftActionTypes.ItemMouseLeave:
      changes = state.hoveredIndex === action.payload ? {
        hoveredIndex: defaultState.hoveredIndex
      } : {};
      break;
    case MultishiftActionTypes.ItemClick: {
      const { modifiers, index } = action.payload;
      changes = getChangesFromItemClick({
        defaultState,
        state,
        index,
        items,
        modifiers,
        props,
        getItemId
      });
      break;
    }
    case MultishiftActionTypes.InputBlur:
    case MultishiftActionTypes.ToggleButtonBlur:
    case MultishiftActionTypes.MenuBlur: {
      const {
        highlightedIndexes,
        selectedItems: selected,
        highlightedGroupStartIndex,
        highlightedGroupEndIndex
      } = state;
      const indexes = getHighlightedIndexes({
        start: highlightedGroupStartIndex,
        end: highlightedGroupEndIndex,
        indexes: highlightedIndexes,
        items
      });
      const extra = !(0, import_core_helpers2.isEmptyArray)(indexes) && autoSelectOnBlur ? {
        selectedItems: addItems(
          selected,
          indexes.map((index) => (0, import_core_helpers2.assertGet)(items, index)),
          getItemId,
          multiple
        )
      } : {};
      changes = omitUnchangedState(
        __spreadValues({
          isOpen: defaultState.isOpen,
          highlightedIndexes: defaultState.highlightedIndexes,
          highlightedGroupEndIndex: defaultState.highlightedGroupEndIndex,
          highlightedGroupStartIndex: defaultState.highlightedGroupStartIndex,
          hoveredIndex: defaultState.hoveredIndex,
          jumpText: defaultState.jumpText
        }, extra),
        { state, getItemId }
      );
      break;
    }
    case MultishiftActionTypes.MenuSpecialKeyDown: {
      const { key, modifiers, disabled } = action.payload;
      changes = getChangesFromMenuKeyDown({
        defaultState,
        items,
        key,
        modifiers,
        props,
        state,
        getItemId,
        disabled
      });
      break;
    }
    case MultishiftActionTypes.ToggleButtonSpecialKeyDown: {
      const { key, modifiers, disabled } = action.payload;
      changes = getChangesFromToggleButtonKeyDown({
        defaultState,
        items,
        key,
        modifiers,
        props,
        state,
        getItemId,
        disabled
      });
      break;
    }
    case MultishiftActionTypes.InputSpecialKeyDown: {
      const { key, modifiers, disabled } = action.payload;
      changes = getChangesFromInputKeyDown({
        defaultState,
        items,
        key,
        modifiers,
        props,
        state,
        getItemId,
        disabled
      });
      break;
    }
    case MultishiftActionTypes.MenuCharacterKeyDown: {
      const jumpText = "".concat(state.jumpText).concat(action.payload);
      const indexes = getItemIndexesByJumpText({
        text: jumpText,
        highlightedIndexes: state.highlightedIndexes,
        itemToString,
        items
      });
      const extraHighlights = !(0, import_core_helpers2.isEmptyArray)(indexes) ? { highlightedIndexes: indexes } : {};
      changes = omitUnchangedState(__spreadValues({ jumpText }, extraHighlights), { state, getItemId });
      break;
    }
    case MultishiftActionTypes.ToggleButtonClick:
    case MultishiftActionTypes.ToggleMenu: {
      const indexes = getHighlightedIndexOnOpen(
        {
          defaultHighlightedIndexes: defaultState.highlightedIndexes,
          initialHighlightedIndexes,
          items
        },
        state,
        0,
        getItemId
      );
      changes = {
        isOpen: !state.isOpen,
        highlightedIndexes: state.isOpen ? [] : indexes
      };
      break;
    }
    case MultishiftActionTypes.OpenMenu: {
      const highlightedIndexes = getHighlightedIndexOnOpen(
        {
          defaultHighlightedIndexes: defaultState.highlightedIndexes,
          initialHighlightedIndexes,
          items
        },
        state,
        0,
        getItemId
      );
      changes = {
        isOpen: true,
        highlightedIndexes,
        highlightedGroupEndIndex: void 0,
        highlightedGroupStartIndex: -1
      };
      break;
    }
    case MultishiftActionTypes.CloseMenu:
      changes = {
        isOpen: false
      };
      break;
    case MultishiftActionTypes.SetHighlightedIndexes:
    case MultishiftActionTypes.SetHighlightedIndex:
      changes = {
        highlightedIndexes: action.payload
      };
      break;
    case MultishiftActionTypes.ClearHighlighted:
      changes = getHighlightReset(defaultState);
      break;
    case MultishiftActionTypes.ClearJumpText:
      changes = {
        jumpText: ""
      };
      break;
    case MultishiftActionTypes.OuterMouseUp:
    case MultishiftActionTypes.OuterTouchEnd: {
      const {
        highlightedIndexes,
        selectedItems: selected,
        highlightedGroupEndIndex,
        highlightedGroupStartIndex
      } = state;
      const indexes = getHighlightedIndexes({
        start: highlightedGroupStartIndex,
        end: highlightedGroupEndIndex,
        indexes: highlightedIndexes,
        items
      });
      const highlightedItems = indexes.map((index) => (0, import_core_helpers2.assertGet)(items, index));
      const extra = !(0, import_core_helpers2.isEmptyArray)(indexes) && autoSelectOnBlur ? { selectedItems: addItems(selected, highlightedItems, getItemId, multiple) } : {};
      changes = __spreadValues(__spreadProps(__spreadValues({}, extra), {
        isOpen: false
      }), highlightReset);
      break;
    }
    case MultishiftActionTypes.Reset:
      changes = defaultState;
      break;
    case MultishiftActionTypes.InputValueChange:
      changes = __spreadProps(__spreadValues({}, getHighlightReset(defaultState)), {
        isOpen: true,
        inputValue: action.payload,
        jumpText: defaultState.jumpText
      });
      break;
    case MultishiftActionTypes.SetState:
      changes = __spreadValues({}, action.payload);
      break;
    default:
      warnIfInternalType(action.type, "All internal action types need to be managed");
  }
  return [__spreadValues(__spreadValues({}, state), changes), changes];
};

// src/use-id.ts
var React = __toESM(require("react"), 1);
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
var count = 0;
var genId = () => "multishift-id-".concat(count++);
var serverHandoffComplete = false;
function useReact17Id() {
  const [id, setId] = React.useState(() => serverHandoffComplete ? genId() : void 0);
  useIsomorphicLayoutEffect(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReact18Id = React["useId".toString()];
var useId = useReact18Id || useReact17Id;

// src/multishift-hooks.ts
function useMultishiftReducer(props) {
  const _a = props, { stateReducer } = _a, rest = __objRest(_a, ["stateReducer"]);
  const initialState = getInitialStateProps(rest);
  return (0, import_react.useReducer)((prevState, action) => {
    const [state, changes] = multishiftReducer(prevState, action, rest);
    const changeset = { changes, state, prevState };
    callChangeHandlers(rest, changeset);
    if (stateReducer) {
      return stateReducer(changeset, action, rest);
    }
    return state;
  }, initialState);
}
function useElementIds(props) {
  const defaultId = useId();
  return getElementIds(defaultId != null ? defaultId : "", props);
}
function useElementRefs() {
  const items = (0, import_react.useRef)([]);
  const ignored = (0, import_react.useRef)([]);
  const toggleButton = (0, import_react.useRef)();
  const input = (0, import_react.useRef)();
  const menu = (0, import_react.useRef)();
  const comboBox = (0, import_react.useRef)();
  items.current = [];
  ignored.current = [];
  return (0, import_react.useRef)({ toggleButton, input, menu, comboBox, items, ignored }).current;
}
var defaultGetA11yStatusMessage = ({
  items,
  state: { selectedItems, isOpen },
  itemsToString = defaultItemsToString
}) => {
  if (!(0, import_core_helpers3.isEmptyArray)(selectedItems)) {
    return "".concat(itemsToString(selectedItems), " has been selected.");
  }
  if ((0, import_core_helpers3.isEmptyArray)(items)) {
    return "";
  }
  const resultCount = items.length;
  if (isOpen) {
    if (resultCount === 0) {
      return "No results are available";
    }
    return "".concat(resultCount, " result").concat(resultCount === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter key to select.");
  }
  return "";
};
function useSetA11y(props) {
  const {
    state,
    items,
    itemsToString = defaultItemsToString,
    getA11yStatusMessage = defaultGetA11yStatusMessage,
    customA11yStatusMessage = ""
  } = props;
  const automaticMessage = getA11yStatusMessage({
    state,
    items,
    itemsToString
  });
  useEffectOnUpdate(() => {
    (0, import_a11y_status.setStatus)(automaticMessage);
  }, [state.isOpen, state.selectedItems]);
  (0, import_react.useEffect)(() => {
    if (customA11yStatusMessage) {
      (0, import_a11y_status.setStatus)(customA11yStatusMessage);
    }
  }, [customA11yStatusMessage]);
}
function useOuterEventListener(refs, state, { outerMouseUp: outerMouseUp2, outerTouchEnd: outerTouchEnd2 }) {
  const context = (0, import_react.useRef)({
    isMouseDown: false,
    isTouchMove: false,
    lastBlurred: void 0
  });
  const isOpen = (0, import_react.useRef)(state.isOpen);
  isOpen.current = state.isOpen;
  const targetWithinMultishift = (target, checkActiveElement = true) => [
    refs.comboBox.current,
    refs.menu.current,
    refs.toggleButton.current,
    refs.input.current,
    ...refs.ignored.current,
    ...refs.items.current
  ].some(
    (node) => node && (isOrContainsNode(node, target) || checkActiveElement && isOrContainsNode(node, window.document.activeElement))
  );
  useEffectOnce(() => {
    const onMouseDown = () => {
      context.current.isMouseDown = true;
    };
    const onMouseUp = (event) => {
      context.current.isMouseDown = false;
      const contextWithinMultishift = targetWithinMultishift(event.target);
      if (!contextWithinMultishift && isOpen.current) {
        outerMouseUp2();
      }
    };
    const onTouchStart = () => {
      context.current.isTouchMove = false;
    };
    const onTouchMove = () => {
      context.current.isTouchMove = true;
    };
    const onTouchEnd = (event) => {
      const contextWithinMultishift = targetWithinMultishift(event.target, false);
      if (!context.current.isTouchMove && !contextWithinMultishift && isOpen.current) {
        outerTouchEnd2();
      }
    };
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  });
  return context;
}
function useTimeouts() {
  const timeoutIds = (0, import_react.useRef)([]);
  const setHookTimeout = (fn, time = 1) => {
    const id = setTimeout(() => {
      timeoutIds.current = timeoutIds.current.filter((timeoutId) => timeoutId !== id);
      fn();
    }, time);
    timeoutIds.current.push(id);
  };
  const clearHookTimeouts = () => {
    timeoutIds.current.forEach((id) => {
      clearTimeout(id);
    });
    timeoutIds.current = [];
  };
  useEffectOnce(() => clearHookTimeouts);
  return [setHookTimeout, clearHookTimeouts];
}
function useEffectOnUpdate(effect, dependencies) {
  const isInitialMount = (0, import_react.useRef)(true);
  (0, import_react.useEffect)(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, [...dependencies]);
}
function useEffectOnce(fn) {
  (0, import_react.useEffect)(fn, []);
}

// src/multishift.ts
var useMultishift = (props) => {
  const {
    type,
    customA11yStatusMessage,
    getA11yStatusMessage,
    items,
    getItemId = defaultGetItemId,
    multiple
  } = props;
  const [state, dispatch] = useMultishiftReducer(props);
  const actions = (0, import_react2.useMemo)(() => bindActionCreators(Actions, dispatch), [dispatch]);
  useSetA11y({ state, items, customA11yStatusMessage, getA11yStatusMessage });
  const stateProps = getState(state, props);
  const {
    highlightedIndexes,
    highlightedGroupEndIndex,
    highlightedGroupStartIndex,
    selectedItems,
    hoveredIndex,
    inputValue,
    isOpen,
    jumpText
  } = stateProps;
  const { getItemA11yId, labelId, menuId, toggleButtonId, inputId } = useElementIds(props);
  const refs = useElementRefs();
  const shouldScroll = (0, import_react2.useRef)(true);
  const clearJumpText2 = (0, import_core_helpers4.debounce)(500, actions.clearJumpText);
  const disabled = (0, import_react2.useRef)([]);
  disabled.current = [];
  const contextRef = useOuterEventListener(refs, stateProps, {
    outerMouseUp: actions.outerMouseUp,
    outerTouchEnd: actions.outerTouchEnd
  });
  const [setInternalTimeout, clearTimeouts] = useTimeouts();
  const mostRecentHighlightedIndex = getMostRecentHighlightIndex({
    highlightedGroupEndIndex,
    highlightedGroupStartIndex,
    highlightedIndexes
  });
  useEffectOnce2(() => clearTimeouts());
  useEffectOnUpdate(() => {
    if (!jumpText) {
      return;
    }
    clearJumpText2();
  }, [jumpText]);
  useEffectOnce2(() => {
    if (isOpen) {
      if (type === Type.ComboBox && refs.input.current) {
        refs.input.current.focus();
      } else if (refs.menu.current && type !== Type.ControlledMenu) {
        refs.menu.current.focus();
      }
    }
  });
  useEffectOnUpdate(() => {
    if (isOpen) {
      if (type === Type.ComboBox && refs.input.current) {
        refs.input.current.focus();
      } else if (refs.menu.current && type !== Type.ControlledMenu) {
        refs.menu.current.focus();
      }
    } else if (document.activeElement === refs.menu.current) {
      if (type === Type.ComboBox && refs.input.current) {
        refs.input.current.focus();
      } else if (refs.toggleButton.current) {
        refs.toggleButton.current.focus();
      }
    }
  }, [isOpen]);
  (0, import_react2.useEffect)(() => {
    if (!isValidIndex(mostRecentHighlightedIndex) || !isOpen || (0, import_core_helpers4.isEmptyArray)(refs.items.current)) {
      return;
    }
    if (shouldScroll.current === false) {
      shouldScroll.current = true;
    } else if (refs.menu.current) {
      scrollIntoView(refs.items.current[mostRecentHighlightedIndex], refs.menu.current);
    }
  }, [isOpen, mostRecentHighlightedIndex, refs.items, refs.menu]);
  const itemHighlightedAtIndex = (0, import_react2.useCallback)(
    (index) => {
      const isHovered = index === hoveredIndex;
      return checkItemHighlighted(index, {
        start: highlightedGroupStartIndex,
        end: highlightedGroupEndIndex,
        indexes: highlightedIndexes
      }) || (multiple ? isHovered : !isValidIndex(mostRecentHighlightedIndex) && isHovered);
    },
    [
      highlightedGroupEndIndex,
      highlightedGroupStartIndex,
      highlightedIndexes,
      hoveredIndex,
      mostRecentHighlightedIndex,
      multiple
    ]
  );
  const indexIsHovered = (0, import_react2.useCallback)((index) => index === hoveredIndex, [hoveredIndex]);
  const itemIsHovered = (0, import_react2.useCallback)(
    (item) => item === items[hoveredIndex],
    [hoveredIndex, items]
  );
  const indexIsSelected = (0, import_react2.useCallback)(
    (index) => checkItemHighlighted(index, {
      start: highlightedGroupStartIndex,
      end: highlightedGroupEndIndex,
      indexes: highlightedIndexes
    }),
    [highlightedGroupEndIndex, highlightedGroupStartIndex, highlightedIndexes]
  );
  const itemIsSelected = (0, import_react2.useCallback)(
    (item) => selectedItems.map(getItemId).includes(getItemId(item)),
    [getItemId, selectedItems]
  );
  const indexOfItem = (0, import_react2.useCallback)(
    (item) => items.map(getItemId).indexOf(getItemId(item)),
    [getItemId, items]
  );
  const getComboBoxProps = (0, import_react2.useCallback)(
    (options = {
      refKey: "ref"
    }) => {
      const _a = options, { refKey = "ref", ref } = _a, rest = __objRest(_a, ["refKey", "ref"]);
      if (type !== Type.ComboBox) {
        throw new Error("`getComboBoxProps` is only available for the autocomplete dropdown");
      }
      const extra = (0, import_core_helpers4.isUndefined)(rest["aria-label"]) ? { "aria-labelledby": labelId } : {};
      return __spreadValues(__spreadValues({
        [refKey]: composeRefs(ref, refs.comboBox),
        role: "combobox",
        "aria-expanded": isOpen,
        "aria-haspopup": "listbox",
        "aria-owns": isOpen ? menuId : null
      }, extra), rest);
    },
    [isOpen, labelId, menuId, refs.comboBox, type]
  );
  const getInputProps = (0, import_react2.useCallback)(
    (options = { refKey: "ref" }) => {
      const _a = options, {
        onKeyDown,
        onBlur,
        onChange,
        onInput,
        refKey = "ref",
        ref
      } = _a, rest = __objRest(_a, [
        "onKeyDown",
        "onBlur",
        "onChange",
        "onInput",
        "refKey",
        "ref"
      ]);
      if (type !== Type.ComboBox) {
        throw new Error("`getInputProps` is only available for the `autocomplete` dropdown");
      }
      const activeDescendant = isValidIndex(mostRecentHighlightedIndex) ? {
        "aria-activedescendant": getItemA11yId(mostRecentHighlightedIndex)
      } : {};
      let eventHandlers = {
        onChange: callAllEventHandlers(onChange, onInput, (event) => {
          actions.inputValueChange(event.target.value);
        }),
        onKeyDown: callAllEventHandlers(onKeyDown, (event) => {
          const key = getKeyName(event);
          if ((0, import_core_helpers4.includes)(SPECIAL_INPUT_KEYS, key)) {
            actions.inputSpecialKeyDown(createKeyDownPayload(event, key, disabled.current));
            event.preventDefault();
          }
        }),
        // TODO test this blur handler.
        onBlur: callAllEventHandlers(onBlur, () => {
          setInternalTimeout(() => {
            const multishiftActive = isHTMLElement(document.activeElement) && refs.comboBox.current && refs.comboBox.current.contains(document.activeElement);
            if (!contextRef.current.isMouseDown && !multishiftActive) {
              actions.inputBlur();
            }
          });
        })
      };
      if (rest.disabled) {
        eventHandlers = (0, import_core_helpers4.object)();
      }
      return __spreadValues(__spreadValues(__spreadProps(__spreadValues({
        [refKey]: composeRefs(ref, refs.input),
        "aria-autocomplete": "list"
      }, activeDescendant), {
        "aria-controls": isOpen ? menuId : null,
        "aria-labelledby": labelId,
        // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
        // revert back since autocomplete="nope" is ignored on latest Chrome and
        // Opera
        autoComplete: "off",
        value: inputValue,
        id: inputId
      }), eventHandlers), rest);
    },
    [
      actions,
      contextRef,
      getItemA11yId,
      inputId,
      inputValue,
      isOpen,
      labelId,
      menuId,
      mostRecentHighlightedIndex,
      refs,
      setInternalTimeout,
      type
    ]
  );
  const getMenuProps = (0, import_react2.useCallback)(
    (options = { refKey: "ref" }) => {
      const _a = options, { onKeyDown, onBlur, refKey = "ref", ref } = _a, rest = __objRest(_a, ["onKeyDown", "onBlur", "refKey", "ref"]);
      const multi = multiple ? { "aria-multiselectable": multiple } : {};
      const activeDescendant = !(0, import_core_helpers4.isEmptyArray)(highlightedIndexes) ? {
        "aria-activedescendant": getItemA11yId(mostRecentHighlightedIndex)
      } : {};
      let eventHandlers = {
        onKeyDown: callAllEventHandlers(onKeyDown, (event) => {
          const key = getKeyName(event);
          if ((0, import_core_helpers4.includes)(SPECIAL_MENU_KEYS, key)) {
            actions.menuSpecialKeyDown(createKeyDownPayload(event, key, disabled.current));
            if (key !== "Tab") {
              event.preventDefault();
            }
          } else if (isValidCharacterKey(key)) {
            actions.menuCharacterKeyDown(key);
          }
        }),
        onBlur: callAllEventHandlers(onBlur, (event) => {
          const blurTarget = event.target;
          setInternalTimeout(() => {
            if (!contextRef.current.isMouseDown && ((0, import_core_helpers4.isNullOrUndefined)(document.activeElement) || ![
              refs.comboBox.current,
              refs.input.current,
              refs.toggleButton.current,
              ...refs.items.current,
              ...refs.ignored.current
            ].some((node) => node && isOrContainsNode(node, document.activeElement)) && document.activeElement !== blurTarget)) {
              actions.menuBlur();
            }
          });
        })
      };
      if (rest.disabled) {
        eventHandlers = (0, import_core_helpers4.object)();
      }
      return __spreadValues(__spreadValues(__spreadValues(__spreadValues({
        [refKey]: composeRefs(ref, refs.menu),
        id: menuId,
        role: type === Type.ControlledMenu ? "menu" : "listbox",
        "aria-labelledby": labelId,
        tabIndex: -1
      }, multi), activeDescendant), eventHandlers), rest);
    },
    [
      actions,
      contextRef,
      getItemA11yId,
      highlightedIndexes,
      labelId,
      menuId,
      mostRecentHighlightedIndex,
      multiple,
      refs,
      setInternalTimeout,
      type
    ]
  );
  const getToggleButtonProps = (0, import_react2.useCallback)(
    (options = { refKey: "ref" }) => {
      const _a = options, { onClick, onKeyDown, onBlur, refKey = "ref", ref } = _a, rest = __objRest(_a, ["onClick", "onKeyDown", "onBlur", "refKey", "ref"]);
      if (type === Type.ControlledMenu) {
        throw new Error("The toggle button props should not be used for the controlled menu");
      }
      const isInternalEvent = (event) => [refs.input.current, refs.menu.current, ...refs.items.current].some(
        (node) => node && isOrContainsNode(node, event.target)
      );
      let eventHandlers = {
        onClick: callAllEventHandlers(onClick, () => actions.toggleButtonClick()),
        onKeyDown: callAllEventHandlers(onKeyDown, (event) => {
          const key = getKeyName(event);
          if (isInternalEvent(event)) {
            return;
          }
          if ((0, import_core_helpers4.includes)(SPECIAL_TOGGLE_BUTTON_KEYS, key)) {
            actions.toggleButtonSpecialKeyDown(createKeyDownPayload(event, key, disabled.current));
            event.preventDefault();
          }
        }),
        onBlur: callAllEventHandlers(onBlur, (event) => {
          if (isInternalEvent(event)) {
            return;
          }
          const blurTarget = event.target;
          setInternalTimeout(() => {
            if (!contextRef.current.isMouseDown && ((0, import_core_helpers4.isNullOrUndefined)(document.activeElement) || document.activeElement.id !== menuId) && document.activeElement !== blurTarget) {
              actions.toggleButtonBlur();
            }
          });
        })
      };
      if (rest.disabled) {
        eventHandlers = (0, import_core_helpers4.object)();
      }
      const extra = type === Type.Select ? { "aria-expanded": isOpen } : {};
      const ariaLabel = (0, import_core_helpers4.isUndefined)(rest["aria-label"]) ? { "aria-labelledby": "".concat(labelId, " ").concat(toggleButtonId) } : {};
      return __spreadValues(__spreadValues(__spreadValues(__spreadValues({
        [refKey]: composeRefs(ref, refs.toggleButton),
        type: "button",
        role: "button",
        id: toggleButtonId,
        "aria-haspopup": type === Type.ComboBox ? true : "listbox"
      }, ariaLabel), extra), eventHandlers), rest);
    },
    [actions, contextRef, isOpen, labelId, menuId, refs, setInternalTimeout, toggleButtonId, type]
  );
  const getItemProps = (0, import_react2.useCallback)(
    (options) => {
      const _a = options, {
        item,
        index,
        refKey = "ref",
        ref,
        onMouseMove,
        onMouseLeave,
        onClick
      } = _a, rest = __objRest(_a, [
        "item",
        "index",
        "refKey",
        "ref",
        "onMouseMove",
        "onMouseLeave",
        "onClick"
      ]);
      const itemIndex = getItemIndex(index, item, items);
      if (!isValidIndex(itemIndex)) {
        throw new Error("Pass either item or item index in getItemProps!");
      }
      let eventHandlers = {
        onMouseMove: callAllEventHandlers(onMouseMove, () => actions.itemMouseMove(itemIndex)),
        onMouseLeave: callAllEventHandlers(onMouseLeave, () => actions.itemMouseLeave(itemIndex)),
        onClick: callAllEventHandlers(onClick, (event) => {
          event.preventDefault();
          actions.itemClick(createItemClickPayload(event, itemIndex));
        })
      };
      if (rest.disabled) {
        disabled.current.push(itemIndex);
        eventHandlers = (0, import_core_helpers4.object)();
      }
      return __spreadValues(__spreadValues({
        [refKey]: composeRefs(ref, (itemNode) => {
          if (itemNode) {
            refs.items.current.push(itemNode);
          }
        }),
        role: type === Type.ControlledMenu ? multiple ? "menuitemcheckbox" : "menuitemradio" : "option",
        "aria-current": index === hoveredIndex || index === mostRecentHighlightedIndex,
        "aria-selected": itemHighlightedAtIndex(index) && !rest.disabled,
        id: getItemA11yId(itemIndex)
      }, eventHandlers), rest);
    },
    [
      actions,
      getItemA11yId,
      hoveredIndex,
      itemHighlightedAtIndex,
      items,
      mostRecentHighlightedIndex,
      multiple,
      refs.items,
      type
    ]
  );
  const getIgnoredElementProps = (0, import_react2.useCallback)(
    (options = { refKey: "ref" }) => {
      const _a = options, { refKey = "ref", ref, onMouseMove, onFocus } = _a, rest = __objRest(_a, ["refKey", "ref", "onMouseMove", "onFocus"]);
      let eventHandlers = (0, import_core_helpers4.object)();
      if (rest.disabled) {
        eventHandlers = (0, import_core_helpers4.object)();
      }
      return __spreadValues(__spreadValues({
        [refKey]: composeRefs(ref, (node) => {
          if (node && !rest.disabled) {
            refs.ignored.current.push(node);
          }
        })
      }, eventHandlers), rest);
    },
    [refs.ignored]
  );
  const getLabelProps = (0, import_react2.useCallback)(
    (options = {
      refKey: "ref"
    }) => {
      const _a = options, { refKey = "ref", ref } = _a, rest = __objRest(_a, ["refKey", "ref"]);
      return __spreadValues({
        [refKey]: composeRefs(ref, (node) => {
          if (node) {
            refs.ignored.current.push(node);
          }
        }),
        id: labelId,
        htmlFor: type === "combobox" && refs.input.current ? inputId : menuId
      }, rest);
    },
    [inputId, labelId, menuId, refs, type]
  );
  const getRemoveButtonProps = (0, import_react2.useCallback)(
    (options) => {
      const _a = options, { onClick, item } = _a, rest = __objRest(_a, ["onClick", "item"]);
      let eventHandlers = {
        onClick: callAllEventHandlers(onClick, () => {
          actions.removeSelectedItem(item);
        })
      };
      if (rest.disabled) {
        eventHandlers = (0, import_core_helpers4.object)();
      }
      return __spreadValues(__spreadProps(__spreadValues({}, eventHandlers), {
        role: "button"
      }), rest);
    },
    [actions]
  );
  const focusHelpers = (0, import_react2.useMemo)(
    () => ({
      focusInput: () => {
        if (type !== Type.ComboBox) {
          throw new Error("The input element cannot be focused for this type of dropdown: ".concat(type));
        }
        if (refs.input.current) {
          refs.input.current.focus();
        }
      },
      focusToggleButton: () => {
        if (refs.toggleButton.current) {
          refs.toggleButton.current.focus();
        }
      },
      focusMenu: () => {
        if (refs.menu.current) {
          refs.menu.current.focus();
        }
      },
      focusMenuItem: (index) => {
        var _a;
        if (refs.items.current[index]) {
          (_a = refs.items.current[index]) == null ? void 0 : _a.focus();
        }
      }
    }),
    [refs.input, refs.items, refs.menu, refs.toggleButton, type]
  );
  const stateHelpers = createStateHelpers(props, state);
  return __spreadValues(__spreadProps(__spreadValues({
    // State
    highlightedIndexes,
    highlightedGroupEndIndex,
    highlightedGroupStartIndex,
    selectedItems,
    hoveredIndex,
    inputValue,
    isOpen,
    jumpText
  }, stateHelpers), {
    // Data
    mostRecentHighlightedIndex,
    // Helpers
    itemHighlightedAtIndex,
    indexIsHovered,
    itemIsHovered,
    indexIsSelected,
    itemIsSelected,
    indexOfItem,
    // Actions
    dispatch,
    clearSelection: actions.clearSelection,
    selectItems: actions.selectItems,
    selectItem: actions.selectItem,
    clearHighlighted: actions.clearHighlighted,
    inputValueChange: actions.inputValueChange,
    removeSelectedItem: actions.removeSelectedItem,
    removeSelectedItems: actions.removeSelectedItems,
    setHoverItemIndex: actions.setHoverItemIndex,
    toggleMenu: actions.toggleMenu,
    closeMenu: actions.closeMenu,
    openMenu: actions.openMenu,
    setHighlightedIndexes: actions.setHighlightedIndexes,
    setHighlightedIndex: actions.setHighlightedIndex,
    reset: actions.reset,
    setState: actions.setState,
    clearInputValue: actions.clearInputValue,
    clearJumpText: actions.clearJumpText,
    // Props Getters
    getMenuProps,
    getComboBoxProps,
    getToggleButtonProps,
    getItemProps,
    getInputProps,
    getRemoveButtonProps,
    getLabelProps,
    getIgnoredElementProps
  }), focusHelpers);
};
function useEffectOnce2(fn) {
  (0, import_react2.useEffect)(fn, []);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Actions,
  MultishiftActionTypes,
  SPECIAL_INPUT_KEYS,
  SPECIAL_KEYS,
  SPECIAL_MENU_KEYS,
  SPECIAL_TOGGLE_BUTTON_KEYS,
  Type,
  useMultishift
});
