import { transparentize, lighten, darken, readableColor } from 'color2k';

const EDITOR_WRAPPER = "remirror-editor-wrapper";
const BUTTON_ACTIVE = "remirror-button-active";
const BUTTON = "remirror-button";
const COMPOSITE = "remirror-composite";
const DIALOG = "remirror-dialog";
const DIALOG_BACKDROP = "remirror-dialog-backdrop";
const FORM = "remirror-form";
const FORM_MESSAGE = "remirror-form-message";
const FORM_LABEL = "remirror-form-label";
const FORM_GROUP = "remirror-form-group";
const GROUP = "remirror-group";
const INPUT = "remirror-input";
const MENU = "remirror-menu";
const MENU_PANE = "remirror-menu-pane";
const MENU_PANE_ACTIVE = "remirror-menu-pane-active";
const MENU_DROPDOWN_LABEL = "remirror-menu-dropdown-label";
const MENU_PANE_ICON = "remirror-menu-pane-icon";
const MENU_PANE_LABEL = "remirror-menu-pane-label";
const MENU_PANE_SHORTCUT = "remirror-menu-pane-shortcut";
const MENU_BUTTON_LEFT = "remirror-menu-button-left";
const MENU_BUTTON_RIGHT = "remirror-menu-button-right";
const MENU_BUTTON_NESTED_LEFT = "remirror-menu-button-nested-left";
const MENU_BUTTON_NESTED_RIGHT = "remirror-menu-button-nested-right";
const MENU_BUTTON = "remirror-menu-button";
const MENU_BAR = "remirror-menu-bar";
const FLEX_COLUMN = "remirror-flex-column";
const FLEX_ROW = "remirror-flex-row";
const MENU_ITEM = "remirror-menu-item";
const MENU_ITEM_ROW = "remirror-menu-item-row";
const MENU_ITEM_COLUMN = "remirror-menu-item-column";
const MENU_ITEM_CHECKBOX = "remirror-menu-item-checkbox";
const MENU_ITEM_RADIO = "remirror-menu-item-radio";
const MENU_GROUP = "remirror-menu-group";
const FLOATING_POPOVER = "remirror-floating-popover";
const POPOVER = "remirror-popover";
const ANIMATED_POPOVER = "remirror-animated-popover";
const ROLE = "remirror-role";
const SEPARATOR = "remirror-separator";
const TAB = "remirror-tab";
const TAB_LIST = "remirror-tab-list";
const TABBABLE = "remirror-tabbable";
const TOOLBAR = "remirror-toolbar";
const TOOLTIP = "remirror-tooltip";
const TABLE_SIZE_EDITOR = "remirror-table-size-editor";
const TABLE_SIZE_EDITOR_BODY = "remirror-table-size-editor-body";
const TABLE_SIZE_EDITOR_CELL = "remirror-table-size-editor-cell";
const TABLE_SIZE_EDITOR_CELL_SELECTED = "remirror-table-size-editor-cell-selected";
const TABLE_SIZE_EDITOR_FOOTER = "remirror-table-size-editor-footer";
const COLOR_PICKER = "remirror-color-picker";
const COLOR_PICKER_CELL = "remirror-color-picker-cell";
const COLOR_PICKER_CELL_SELECTED = "remirror-color-picker-cell-selected";

var componentsTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ANIMATED_POPOVER: ANIMATED_POPOVER,
  BUTTON: BUTTON,
  BUTTON_ACTIVE: BUTTON_ACTIVE,
  COLOR_PICKER: COLOR_PICKER,
  COLOR_PICKER_CELL: COLOR_PICKER_CELL,
  COLOR_PICKER_CELL_SELECTED: COLOR_PICKER_CELL_SELECTED,
  COMPOSITE: COMPOSITE,
  DIALOG: DIALOG,
  DIALOG_BACKDROP: DIALOG_BACKDROP,
  EDITOR_WRAPPER: EDITOR_WRAPPER,
  FLEX_COLUMN: FLEX_COLUMN,
  FLEX_ROW: FLEX_ROW,
  FLOATING_POPOVER: FLOATING_POPOVER,
  FORM: FORM,
  FORM_GROUP: FORM_GROUP,
  FORM_LABEL: FORM_LABEL,
  FORM_MESSAGE: FORM_MESSAGE,
  GROUP: GROUP,
  INPUT: INPUT,
  MENU: MENU,
  MENU_BAR: MENU_BAR,
  MENU_BUTTON: MENU_BUTTON,
  MENU_BUTTON_LEFT: MENU_BUTTON_LEFT,
  MENU_BUTTON_NESTED_LEFT: MENU_BUTTON_NESTED_LEFT,
  MENU_BUTTON_NESTED_RIGHT: MENU_BUTTON_NESTED_RIGHT,
  MENU_BUTTON_RIGHT: MENU_BUTTON_RIGHT,
  MENU_DROPDOWN_LABEL: MENU_DROPDOWN_LABEL,
  MENU_GROUP: MENU_GROUP,
  MENU_ITEM: MENU_ITEM,
  MENU_ITEM_CHECKBOX: MENU_ITEM_CHECKBOX,
  MENU_ITEM_COLUMN: MENU_ITEM_COLUMN,
  MENU_ITEM_RADIO: MENU_ITEM_RADIO,
  MENU_ITEM_ROW: MENU_ITEM_ROW,
  MENU_PANE: MENU_PANE,
  MENU_PANE_ACTIVE: MENU_PANE_ACTIVE,
  MENU_PANE_ICON: MENU_PANE_ICON,
  MENU_PANE_LABEL: MENU_PANE_LABEL,
  MENU_PANE_SHORTCUT: MENU_PANE_SHORTCUT,
  POPOVER: POPOVER,
  ROLE: ROLE,
  SEPARATOR: SEPARATOR,
  TAB: TAB,
  TABBABLE: TABBABLE,
  TABLE_SIZE_EDITOR: TABLE_SIZE_EDITOR,
  TABLE_SIZE_EDITOR_BODY: TABLE_SIZE_EDITOR_BODY,
  TABLE_SIZE_EDITOR_CELL: TABLE_SIZE_EDITOR_CELL,
  TABLE_SIZE_EDITOR_CELL_SELECTED: TABLE_SIZE_EDITOR_CELL_SELECTED,
  TABLE_SIZE_EDITOR_FOOTER: TABLE_SIZE_EDITOR_FOOTER,
  TAB_LIST: TAB_LIST,
  TOOLBAR: TOOLBAR,
  TOOLTIP: TOOLTIP
});

/**
 * This is compiled into the class name `remirror-editor` and the css is
 * automatically generated and placed into the `@remirror/styles/core.css` via
 * a `linaria` build script.
 */
const EDITOR$8 = "remirror-editor";

var coreTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EDITOR: EDITOR$8
});

/**
 * This is compiled into the class name `remirror-editor` and the css is
 * automatically generated and placed into the `@remirror/styles/core.css` via
 * a `linaria` build script.
 */
const EDITOR$7 = "remirror-editor";

var extensionBlockquoteTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EDITOR: EDITOR$7
});

/**
 * This is compiled into the class name `remirror-editor` and the css is
 * automatically generated and placed into the `@remirror/styles/core.css` via
 * a `linaria` build script.
 */

const CALLOUT_EMOJI_WRAPPER = 'remirror-callout-emoji-wrapper';
const EDITOR$6 = "remirror-editor";

var extensionCalloutTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CALLOUT_EMOJI_WRAPPER: CALLOUT_EMOJI_WRAPPER,
  EDITOR: EDITOR$6
});

/**
 * Sets the code block to wrap the text.
 */
const WRAP = "remirror-wrap";
const CODE_BLOCK_TOOLS_POSITIONER = "remirror-code-block-tools-positioner";
const LANGUAGE_SELECT_WIDTH = "remirror-language-select-width";

/**
 * a11y-dark theme for JavaScript, CSS, and HTML Based on the okaidia theme:
 * https://github.com/PrismJS/prism/blob/gh-pages/themes/prism-okaidia.css
 * @author ericwbailey
 */
const A11Y_DARK = "remirror-a11y-dark";

/**
 * atom-dark theme for `prism.js` Based on Atom's `atom-dark` theme:
 * https://github.com/atom/atom-dark-syntax
 * @author Joe Gibson (@gibsjose)
 */
const ATOM_DARK = "remirror-atom-dark";

/*
Name:       Base16 Atelier Sulphurpool Light Author:     Bram de Haan
(http://atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool)
Prism template by Bram de Haan
(http://atelierbram.github.io/syntax-highlighting/prism/) Original Base16 color
scheme by Chris Kempson (https://github.com/chriskempson/base16)
*/
const BASE16_ATELIERSULPHURPOOL_LIGHT = "remirror-base16-ateliersulphurpool-light";

/**
 * Based on Plugin: Syntax Highlighter CB Plugin URI:
 * http://wp.tutsplus.com/tutorials/plugins/adding-a-syntax-highlighter-shortcode-using-prism-js
 * Description: Highlight your code snippets with an easy to use shortcode based
 * on Lea Verou's Prism.js. Version: 1.0.0 Author: c.bavota Author URI:
 * http://bavotasan.comhttp://wp.tutsplus.com/tutorials/plugins/adding-a-syntax-highlighter-shortcode-using-prism-js/
 * http://cbavota.bitbucket.org/syntax-highlighter/
 */
const CB = "remirror-cb";

/**
 * Darcula theme
 *
 * Adapted from a theme based on: IntelliJ Darcula Theme
 * (https://github.com/bulenkov/Darcula)
 *
 * @author Alexandre Paradis <service.paradis@gmail.com>
 * @version 1.0
 */
const DARCULA = "remirror-darcula";

/**
 * Dracula Theme originally by Zeno Rocha [@zenorocha] https://draculatheme.com/
 *
 * Ported for PrismJS by Albert Vallverdu [@byverdu]
 */
const DRACULA = "remirror-dracula";

/*
Name: Duotone Dark Author: Simurai, adapted from DuoTone themes for Atom
(http://simurai.com/projects/2016/01/01/duotone-themes)

Conversion: Bram de Haan
(http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
*/

const DUOTONE_DARK = "remirror-duotone-dark";

/**
 * Name:   Duotone Earth Author: Simurai, adapted from DuoTone themes for Atom
 * (http://simurai.com/projects/2016/01/01/duotone-themes)
 *
 * Conversion: Bram de Haan
 * (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-earth-dark.css)
 * Generated with Base16 Builder
 * (https://github.com/base16-builder/base16-builder)
 */
const DUOTONE_EARTH = "remirror-duotone-earth";

/**
 * Name:   Duotone Forest Author: by Simurai, adapted from DuoTone themes for
 * Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
 *
 * Conversion: Bram de Haan
 * (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-forest-dark.css)
 * Generated with Base16 Builder
 * (https://github.com/base16-builder/base16-builder)
 */
const DUOTONE_FOREST = "remirror-duotone-forest";

/**
 * Name:   Duotone Light Author: Simurai, adapted from DuoTone themes for Atom
 * (http://simurai.com/projects/2016/01/01/duotone-themes)
 *
 * Conversion: Bram de Haan
 * (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-morning-light.css)
 * Generated with Base16 Builder
 * (https://github.com/base16-builder/base16-builder)
 */
const DUOTONE_LIGHT = "remirror-duotone-light";

/**
 * Name: Duotone Sea Author: by Simurai, adapted from DuoTone themes by Simurai
 * for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
 *
 * Conversion: Bram de Haan
 * (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-sea-dark.css)
 * Generated with Base16 Builder
 * (https://github.com/base16-builder/base16-builder)
 */
const DUOTONE_SEA = "remirror-duotone-sea";

/**
 * Name: Duotone Space Author: Simurai, adapted from DuoTone themes for Atom
 * (http://simurai.com/projects/2016/01/01/duotone-themes)
 *
 * Conversion: Bram de Haan
 * (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-space-dark.css)
 * Generated with Base16 Builder
 * (https://github.com/base16-builder/base16-builder)
 */
const DUOTONE_SPACE = "remirror-duotone-space";

/**
 * GHColors theme by Avi Aryan (http://aviaryan.in) Inspired by Github syntax
 * coloring
 */
const GH_COLORS = "remirror-gh-colors";

/**
 * Hopscotch by Jan T. Sott https://github.com/idleberg/Hopscotch
 *
 * This work is licensed under the Creative Commons CC0 1.0 Universal License
 */
const HOPSCOTCH = "remirror-hopscotch";

/**
 * Pojoaque Style by Jason Tate
 * http://web-cms-designs.com/ftopict-10-pojoaque-style-for-highlight-js-code-highlighter.html
 * Based on Solarized Style from http://ethanschoonover.com/solarized
 * http://softwaremaniacs.org/media/soft/highlight/test.html
 */
const POJOAQUE = "remirror-pojoaque";

/**
 * VS theme by Andrew Lock (https://andrewlock.net) Inspired by Visual Studio
 * syntax coloring
 */

const VS = "remirror-vs";

/**
 * xonokai theme for JavaScript, CSS and HTML based on:
 * https://github.com/MoOx/sass-prism-theme-base by Maxime Thirouin ~ MoOx -->
 * http://moox.fr/ , which is Loosely based on Monokai textmate theme by
 * http://www.monokai.nl/ license: MIT; http://moox.mit-license.org/
 */
const XONOKAI = "remirror-xonokai";

var extensionCodeBlockTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  A11Y_DARK: A11Y_DARK,
  ATOM_DARK: ATOM_DARK,
  BASE16_ATELIERSULPHURPOOL_LIGHT: BASE16_ATELIERSULPHURPOOL_LIGHT,
  CB: CB,
  CODE_BLOCK_TOOLS_POSITIONER: CODE_BLOCK_TOOLS_POSITIONER,
  DARCULA: DARCULA,
  DRACULA: DRACULA,
  DUOTONE_DARK: DUOTONE_DARK,
  DUOTONE_EARTH: DUOTONE_EARTH,
  DUOTONE_FOREST: DUOTONE_FOREST,
  DUOTONE_LIGHT: DUOTONE_LIGHT,
  DUOTONE_SEA: DUOTONE_SEA,
  DUOTONE_SPACE: DUOTONE_SPACE,
  GH_COLORS: GH_COLORS,
  HOPSCOTCH: HOPSCOTCH,
  LANGUAGE_SELECT_WIDTH: LANGUAGE_SELECT_WIDTH,
  POJOAQUE: POJOAQUE,
  VS: VS,
  WRAP: WRAP,
  XONOKAI: XONOKAI
});

const EDITOR$5 = "remirror-editor";

var extensionCountTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EDITOR: EDITOR$5
});

const EMOJI_IMAGE = "remirror-emoji-image";
const EMOJI_WRAPPER = "remirror-emoji-wrapper";
const EMOJI_POPUP_ITEM = "remirror-emoji-popup-item";
const EMOJI_POPUP_HOVERED = "remirror-emoji-popup-hovered";
const EMOJI_POPUP_HIGHLIGHT = "remirror-emoji-popup-highlight";
const EMOJI_POPUP_WRAPPER = "remirror-emoji-popup-wrapper";
const EMOJI_POPUP_NAME = "remirror-emoji-popup-name";
const EMOJI_POPUP_CHAR = "remirror-emoji-popup-char";

var extensionEmojiTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EMOJI_IMAGE: EMOJI_IMAGE,
  EMOJI_POPUP_CHAR: EMOJI_POPUP_CHAR,
  EMOJI_POPUP_HIGHLIGHT: EMOJI_POPUP_HIGHLIGHT,
  EMOJI_POPUP_HOVERED: EMOJI_POPUP_HOVERED,
  EMOJI_POPUP_ITEM: EMOJI_POPUP_ITEM,
  EMOJI_POPUP_NAME: EMOJI_POPUP_NAME,
  EMOJI_POPUP_WRAPPER: EMOJI_POPUP_WRAPPER,
  EMOJI_WRAPPER: EMOJI_WRAPPER
});

const FILE_ROOT = "remirror-file-root";
const FILE_NAME = "remirror-file-name";
const FILE_SIZE = "remirror-file-size";
const FILE_UPLOAD_PROGRESS = "remirror-file-upload-progress";
const FILE_ERROR = "remirror-file-error";
const FILE_ICON_BUTTON = "remirror-file-icon-button";

var extensionFileTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FILE_ERROR: FILE_ERROR,
  FILE_ICON_BUTTON: FILE_ICON_BUTTON,
  FILE_NAME: FILE_NAME,
  FILE_ROOT: FILE_ROOT,
  FILE_SIZE: FILE_SIZE,
  FILE_UPLOAD_PROGRESS: FILE_UPLOAD_PROGRESS
});

/**
 * This is compiled into the class name `remirror-editor` and the css is
 * automatically generated and placed into the `@remirror/styles/core.css` via
 * a `linaria` build script.
 */
const EDITOR$4 = "remirror-editor";

var extensionGapCursorTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EDITOR: EDITOR$4
});

/**
 * A class for the default media loader.
 */
const IMAGE_LOADER = "remirror-image-loader";

var extensionImageTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IMAGE_LOADER: IMAGE_LOADER
});

const LIST_ITEM_WITH_CUSTOM_MARKER = 'remirror-list-item-with-custom-mark';
const UL_LIST_CONTENT = 'remirror-ul-list-content';
const EDITOR$3 = "remirror-editor";
const LIST_ITEM_MARKER_CONTAINER = "remirror-list-item-marker-container";
const LIST_ITEM_CHECKBOX = "remirror-list-item-checkbox";
const COLLAPSIBLE_LIST_ITEM_CLOSED = "remirror-collapsible-list-item-closed";
const COLLAPSIBLE_LIST_ITEM_BUTTON = "remirror-collapsible-list-item-button";
const LIST_SPINE = "remirror-list-spine";

var extensionListTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  COLLAPSIBLE_LIST_ITEM_BUTTON: COLLAPSIBLE_LIST_ITEM_BUTTON,
  COLLAPSIBLE_LIST_ITEM_CLOSED: COLLAPSIBLE_LIST_ITEM_CLOSED,
  EDITOR: EDITOR$3,
  LIST_ITEM_CHECKBOX: LIST_ITEM_CHECKBOX,
  LIST_ITEM_MARKER_CONTAINER: LIST_ITEM_MARKER_CONTAINER,
  LIST_ITEM_WITH_CUSTOM_MARKER: LIST_ITEM_WITH_CUSTOM_MARKER,
  LIST_SPINE: LIST_SPINE,
  UL_LIST_CONTENT: UL_LIST_CONTENT
});

const MENTION_ATOM = "remirror-mention-atom";
const SUGGEST_ATOM = "remirror-suggest-atom";
const MENTION_ATOM_POPUP_ITEM = "remirror-mention-atom-popup-item";
const MENTION_ATOM_POPUP_HOVERED = "remirror-mention-atom-popup-hovered";
const MENTION_ATOM_POPUP_HIGHLIGHT = "remirror-mention-atom-popup-highlight";
const MENTION_ATOM_POPUP_WRAPPER = "remirror-mention-atom-popup-wrapper";
const MENTION_ATOM_POPUP_NAME = "remirror-mention-atom-popup-name";
const MENTION_ATOM_ZERO_ITEMS = "remirror-mention-atom-zero-items";
const MENTION_ATOM_POPUP_CHAR = "remirror-mention-atom-popup-char";

var extensionMentionAtomTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MENTION_ATOM: MENTION_ATOM,
  MENTION_ATOM_POPUP_CHAR: MENTION_ATOM_POPUP_CHAR,
  MENTION_ATOM_POPUP_HIGHLIGHT: MENTION_ATOM_POPUP_HIGHLIGHT,
  MENTION_ATOM_POPUP_HOVERED: MENTION_ATOM_POPUP_HOVERED,
  MENTION_ATOM_POPUP_ITEM: MENTION_ATOM_POPUP_ITEM,
  MENTION_ATOM_POPUP_NAME: MENTION_ATOM_POPUP_NAME,
  MENTION_ATOM_POPUP_WRAPPER: MENTION_ATOM_POPUP_WRAPPER,
  MENTION_ATOM_ZERO_ITEMS: MENTION_ATOM_ZERO_ITEMS,
  SUGGEST_ATOM: SUGGEST_ATOM
});

/**
 * The styles for the placeholder which denotes the document is empty.
 */
const IS_EMPTY = "remirror-is-empty";

var extensionPlaceholderTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IS_EMPTY: IS_EMPTY
});

const EDITOR$2 = "remirror-editor";
const POSITIONER = "remirror-positioner";
const POSITIONER_WIDGET = "remirror-positioner-widget";

var extensionPositionerTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EDITOR: EDITOR$2,
  POSITIONER: POSITIONER,
  POSITIONER_WIDGET: POSITIONER_WIDGET
});

// following two class names are provided by `prosemirror-tables`
const COLUMN_RESIZE_HANDLE = 'column-resize-handle';
const SELECTED_CELL = 'selectedCell';

/////////////////////////////////////////////////////////////////

const EDITOR$1 = "remirror-editor";

/////////////////////////////////////////////////////////////////

const TABLE = 'remirror-table';
const TABLE_SHOW_CONTROLLERS = 'remirror-table-show-controllers';
const TABLE_CONTROLLER = 'remirror-table-controller';
const TABLE_CONTROLLER_WRAPPER = 'remirror-table-controller-wrapper';
const TABLE_CONTROLLER_TRIGGER_AREA = 'remirror-table-controller-trigger-area';
const TABLE_CONTROLLER_MARK_ROW_CORNER = 'remirror-table-controller-mark-row-corner';
const TABLE_CONTROLLER_MARK_COLUMN_CORNER = 'remirror-table-controller-mark-column-corner';

/**
 * A set of CSS style segements that can be reused multiple times later
 *
 * Since linaria has a limit ability to extend style (compared to emotion), we
 * need to write the CSS style segements as string values and then use then in
 * the `css` template literals.
 */

const TABLE_COLGROUP = "remirror-table-colgroup";

// Any element with this class will be hidden when the controllers are hidden
const CONTROLLERS_TOGGLE = "remirror-controllers-toggle";
const TABLE_INSERT_BUTTON = "remirror-table-insert-button";
const TABLE_DELETE_INNER_BUTTON = "remirror-table-delete-inner-button";
const TABLE_DELETE_TABLE_INNER_BUTTON = "remirror-table-delete-table-inner-button";
const TABLE_DELETE_ROW_COLUMN_INNER_BUTTON = "remirror-table-delete-row-column-inner-button";
const TABLE_WITH_CONTROLLERS = "remirror-table-with-controllers";
const TABLE_WAITTING_CONTROLLERS = "remirror-table-waitting-controllers";
const TABLE_TBODY_WITH_CONTROLLERS = "remirror-table-tbody-with-controllers";
const TABLE_PRESELECT_ALL = "remirror-table-preselect-all";
const TABLE_SHOW_PREDELETE = "remirror-table-show-predelete";

var extensionTablesTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  COLUMN_RESIZE_HANDLE: COLUMN_RESIZE_HANDLE,
  CONTROLLERS_TOGGLE: CONTROLLERS_TOGGLE,
  EDITOR: EDITOR$1,
  SELECTED_CELL: SELECTED_CELL,
  TABLE: TABLE,
  TABLE_COLGROUP: TABLE_COLGROUP,
  TABLE_CONTROLLER: TABLE_CONTROLLER,
  TABLE_CONTROLLER_MARK_COLUMN_CORNER: TABLE_CONTROLLER_MARK_COLUMN_CORNER,
  TABLE_CONTROLLER_MARK_ROW_CORNER: TABLE_CONTROLLER_MARK_ROW_CORNER,
  TABLE_CONTROLLER_TRIGGER_AREA: TABLE_CONTROLLER_TRIGGER_AREA,
  TABLE_CONTROLLER_WRAPPER: TABLE_CONTROLLER_WRAPPER,
  TABLE_DELETE_INNER_BUTTON: TABLE_DELETE_INNER_BUTTON,
  TABLE_DELETE_ROW_COLUMN_INNER_BUTTON: TABLE_DELETE_ROW_COLUMN_INNER_BUTTON,
  TABLE_DELETE_TABLE_INNER_BUTTON: TABLE_DELETE_TABLE_INNER_BUTTON,
  TABLE_INSERT_BUTTON: TABLE_INSERT_BUTTON,
  TABLE_PRESELECT_ALL: TABLE_PRESELECT_ALL,
  TABLE_SHOW_CONTROLLERS: TABLE_SHOW_CONTROLLERS,
  TABLE_SHOW_PREDELETE: TABLE_SHOW_PREDELETE,
  TABLE_TBODY_WITH_CONTROLLERS: TABLE_TBODY_WITH_CONTROLLERS,
  TABLE_WAITTING_CONTROLLERS: TABLE_WAITTING_CONTROLLERS,
  TABLE_WITH_CONTROLLERS: TABLE_WITH_CONTROLLERS
});

/**
 * This generates the `css` for the package `@remirror/extension-whitespace`.
 */
const EDITOR = "remirror-editor";

var extensionWhitespaceTheme = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EDITOR: EDITOR
});

var reactEditorsTheme = /*#__PURE__*/Object.freeze({
  __proto__: null
});

/**
 * Create the theme variables from the provided theme.
 * The class name for adding theme styles to the remirror editor.
 */
const THEME = "remirror-theme";

/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Create the theme variables from the provided theme.
 *
 * This function can't use anything from `@remirror/core-helpers` due to being
 * used in the `themeStyles` css. Babel can't resolve the imported functions in
 * development.
 */
function createThemeVariables(theme = {}) {
  const cssVariableString = [];
  const cssVariableObject = {};
  function addCssVariable(keys, value) {
    if (typeof value === 'string' || typeof value === 'number') {
      cssVariableString.push(`${getCustomPropertyName(keys)}: ${value};`);
      cssVariableObject[getCustomPropertyName(keys)] = value;
      return;
    }
    if (typeof value !== 'object' || !value) {
      return;
    }
    for (const [key, v] of Object.entries(value)) {
      addCssVariable([...keys, key], v);
    }
    return;
  }
  for (const [key, value] of Object.entries(theme)) {
    addCssVariable([key], value);
  }
  return {
    css: cssVariableString.join('\n'),
    styles: cssVariableObject
  };
}

/**
 * Aliased name for the color type. It's just a string.
 */

/**
 * A hue is a color split into ten hues.
 */

/**
 * The Remirror Theme Type which can be extended by adding properties to the
 * global Remirror.Theme namespace.
 */

function simpleKebabCase(str) {
  return str.replace(/([a-z])([\dA-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
}

/**
 * Get the remirror variable from the keys to access it in the theme object.
 */
function getCustomPropertyName(keys) {
  return `--rmr-${keys.map(simpleKebabCase).join('-')}`;
}

/**
 * Get the custom property from the keys used to access it in the theme object.
 */
function getVar(keys) {
  return `var(${getCustomPropertyName(keys)})`;
}

/**
 * Get the theme custom property wrapped in a `var`.
 *
 * ```ts
 * import { getThemeVar } from '@remirror/theme';
 * getThemeVar('color', 'primary', 'text') => `var(--rmr-color-primary-text)`
 * ```
 */

function getThemeVar(...args) {
  return getVar(args.map(p => p.toString()));
}

/**
 * Get the theme custom property wrapped in a `var`.
 *
 * ```ts
 * import { getThemeVarName } from '@remirror/theme';
 * getThemeVarName('color', 'primary', 'text') => `--rmr-color-primary-text`
 * ```
 */

function getThemeVarName(...args) {
  return getCustomPropertyName(args.map(p => p.toString()));
}

// defaultRemirrorThemeHue is copied from https://github.com/yeun/open-color/blob/v1.7.0/open-color.json
const defaultRemirrorThemeHue = {
  gray: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'],
  red: ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a'],
  pink: ['#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d'],
  grape: ['#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c'],
  violet: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4'],
  indigo: ['#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7'],
  blue: ['#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab'],
  cyan: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'],
  teal: ['#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b'],
  green: ['#ebfbee', '#d3f9d8', '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e'],
  lime: ['#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d'],
  yellow: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
  orange: ['#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f']
};
const foreground = '#000000';
const background = '#ffffff';
const text = '#252103';
const border = transparentize(foreground, 0.75);
const primary = '#7963d2';
const secondary = '#bcd263';
const primaryText = '#fff';
const secondaryText = '#fff';
const muted = defaultRemirrorThemeHue.gray[1];
const shadow1 = 'rgba(10,31,68,0.08)';
const shadow2 = 'rgba(10,31,68,0.10)';
const shadow3 = 'rgba(10,31,68,0.12)';
const faded = lighten(transparentize(foreground, 0.1), 0.13);
const baseColorTheme = {
  background,
  border,
  foreground,
  muted,
  primary,
  secondary,
  primaryText,
  secondaryText,
  text,
  faded
};
const activeColorTheme = {
  ...baseColorTheme,
  background: darken(background, 0.15),
  border: darken(border, 0.15),
  foreground: darken(foreground, 0.15),
  muted: darken(muted, 0.15),
  primary: darken(primary, 0.15),
  secondary: darken(secondary, 0.15),
  get text() {
    return readableColor(this.background);
  },
  get primaryText() {
    return readableColor(this.primary);
  },
  get secondaryText() {
    return readableColor(this.secondary);
  }
};
const hoverColorTheme = {
  ...baseColorTheme,
  background: darken(background, 0.075),
  border: darken(border, 0.075),
  foreground: darken(foreground, 0.075),
  muted: darken(muted, 0.075),
  primary: darken(primary, 0.075),
  secondary: darken(secondary, 0.075),
  get text() {
    return readableColor(this.background);
  },
  get primaryText() {
    return readableColor(this.primary);
  },
  get secondaryText() {
    return readableColor(this.secondary);
  }
};

/**
 * The default remirror theme. This can be mutated with the
 * `mutateRemirrorTheme`.
 */
const defaultRemirrorTheme = {
  color: {
    ...baseColorTheme,
    active: activeColorTheme,
    hover: hoverColorTheme,
    shadow1,
    shadow2,
    shadow3,
    backdrop: transparentize(foreground, 0.1),
    outline: transparentize(primary, 0.6),
    table: {
      default: {
        border: lighten(foreground, 0.8),
        cell: lighten(foreground, 0.4),
        controller: defaultRemirrorThemeHue.gray[3]
      },
      selected: {
        border: defaultRemirrorThemeHue.blue[7],
        cell: defaultRemirrorThemeHue.blue[1],
        controller: defaultRemirrorThemeHue.blue[5]
      },
      preselect: {
        border: defaultRemirrorThemeHue.blue[7],
        cell: lighten(foreground, 0.4),
        controller: defaultRemirrorThemeHue.blue[5]
      },
      predelete: {
        border: defaultRemirrorThemeHue.red[7],
        cell: defaultRemirrorThemeHue.red[1],
        controller: defaultRemirrorThemeHue.red[5]
      },
      mark: '#91919196'
    }
  },
  hue: defaultRemirrorThemeHue,
  radius: {
    border: '0.25rem',
    extra: '0.5rem',
    circle: '50%'
  },
  fontFamily: {
    default: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    mono: 'Menlo, monospace'
  },
  fontSize: {
    0: '12px',
    1: '14px',
    2: '16px',
    3: '20px',
    4: '24px',
    5: '32px',
    6: '48px',
    7: '64px',
    8: '96px',
    default: '16px'
  },
  space: {
    1: '4px',
    2: '8px',
    3: '16px',
    4: '32px',
    5: '64px',
    6: '128px',
    7: '256px',
    8: '512px'
  },
  fontWeight: {
    bold: '700',
    default: '400',
    heading: '700'
  },
  letterSpacing: {
    tight: '-1px',
    default: 'normal',
    loose: '1px',
    wide: '3px'
  },
  lineHeight: {
    heading: '1.25em',
    default: '1.5em'
  },
  boxShadow: {
    1: `0 1px 1px ${shadow1}`,
    2: `0 1px 1px ${shadow2}`,
    3: `0 1px 1px ${shadow3}`
  }
};

export { componentsTheme as ComponentsTheme, coreTheme as CoreTheme, extensionBlockquoteTheme as ExtensionBlockquoteTheme, extensionCalloutTheme as ExtensionCalloutTheme, extensionCodeBlockTheme as ExtensionCodeBlockTheme, extensionCountTheme as ExtensionCountTheme, extensionEmojiTheme as ExtensionEmojiTheme, extensionFileTheme as ExtensionFileTheme, extensionGapCursorTheme as ExtensionGapCursorTheme, extensionImageTheme as ExtensionImageTheme, extensionListTheme as ExtensionListTheme, extensionMentionAtomTheme as ExtensionMentionAtomTheme, extensionPlaceholderTheme as ExtensionPlaceholderTheme, extensionPositionerTheme as ExtensionPositionerTheme, extensionTablesTheme as ExtensionTablesTheme, extensionWhitespaceTheme as ExtensionWhitespaceTheme, reactEditorsTheme as ReactEditorsTheme, THEME, createThemeVariables, defaultRemirrorTheme, getThemeVar, getThemeVarName };
