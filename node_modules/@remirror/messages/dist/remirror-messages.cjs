'use strict';

const COPY_LABEL = /*i18n*/{
  id: 'extension.command.copy.label',
  comment: 'Label for copy command.',
  message: 'Copy'
};
const COPY_DESCRIPTION = /*i18n*/{
  id: 'extension.command.copy.description',
  comment: 'Description for copy command.',
  message: 'Copy the selected text'
};
const CUT_LABEL = /*i18n*/{
  id: 'extension.command.cut.label',
  comment: 'Label for cut command.',
  message: 'Cut'
};
const CUT_DESCRIPTION = /*i18n*/{
  id: 'extension.command.cut.description',
  comment: 'Description for cut command.',
  message: 'Cut the selected text'
};
const PASTE_LABEL = /*i18n*/{
  id: 'extension.command.paste.label',
  comment: 'Label for paste command.',
  message: 'Paste'
};
const PASTE_DESCRIPTION = /*i18n*/{
  id: 'extension.command.paste.description',
  comment: 'Description for paste command.',
  message: 'Paste content into the editor'
};
const SELECT_ALL_LABEL = /*i18n*/{
  id: 'extension.command.select-all.label',
  comment: 'Label for select all command.',
  message: 'Select all'
};
const SELECT_ALL_DESCRIPTION = /*i18n*/{
  id: 'extension.command.select-all.description',
  comment: 'Description for select all command.',
  message: 'Select all content within the editor'
};

var coreMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  COPY_DESCRIPTION: COPY_DESCRIPTION,
  COPY_LABEL: COPY_LABEL,
  CUT_DESCRIPTION: CUT_DESCRIPTION,
  CUT_LABEL: CUT_LABEL,
  PASTE_DESCRIPTION: PASTE_DESCRIPTION,
  PASTE_LABEL: PASTE_LABEL,
  SELECT_ALL_DESCRIPTION: SELECT_ALL_DESCRIPTION,
  SELECT_ALL_LABEL: SELECT_ALL_LABEL
});

const ESCAPE_KEY = /*i18n*/{
  id: 'keyboard.shortcut.escape',
  comment: 'Label for escape key in shortcuts.',
  message: 'Enter'
};
const COMMAND_KEY = /*i18n*/{
  id: 'keyboard.shortcut.command',
  comment: 'Label for command key in shortcuts.',
  message: 'Command'
};
const CONTROL_KEY = /*i18n*/{
  id: 'keyboard.shortcut.control',
  comment: 'Label for control key in shortcuts.',
  message: 'Control'
};
const ENTER_KEY = /*i18n*/{
  id: 'keyboard.shortcut.enter',
  comment: 'Label for enter key in shortcuts.',
  message: 'Enter'
};
const SHIFT_KEY = /*i18n*/{
  id: 'keyboard.shortcut.shift',
  comment: 'Label for shift key in shortcuts.',
  message: 'Shift'
};
const ALT_KEY = /*i18n*/{
  id: 'keyboard.shortcut.alt',
  comment: 'Label for alt key in shortcuts.',
  message: 'Alt'
};
const CAPS_LOCK_KEY = /*i18n*/{
  id: 'keyboard.shortcut.capsLock',
  comment: 'Label for caps lock key in shortcuts.',
  message: 'Caps Lock'
};
const BACKSPACE_KEY = /*i18n*/{
  id: 'keyboard.shortcut.backspace',
  comment: 'Label for backspace key in shortcuts.',
  message: 'Backspace'
};
const TAB_KEY = /*i18n*/{
  id: 'keyboard.shortcut.tab',
  comment: 'Label for tab key in shortcuts.',
  message: 'Tab'
};
const SPACE_KEY = /*i18n*/{
  id: 'keyboard.shortcut.space',
  comment: 'Label for space key in shortcuts.',
  message: 'Space'
};
const DELETE_KEY = /*i18n*/{
  id: 'keyboard.shortcut.delete',
  comment: 'Label for delete key in shortcuts.',
  message: 'Delete'
};
const PAGE_UP_KEY = /*i18n*/{
  id: 'keyboard.shortcut.pageUp',
  comment: 'Label for page up key in shortcuts.',
  message: 'Page Up'
};
const PAGE_DOWN_KEY = /*i18n*/{
  id: 'keyboard.shortcut.pageDown',
  comment: 'Label for page down key in shortcuts.',
  message: 'Page Down'
};
const HOME_KEY = /*i18n*/{
  id: 'keyboard.shortcut.home',
  comment: 'Label for home key in shortcuts.',
  message: 'Home'
};
const END_KEY = /*i18n*/{
  id: 'keyboard.shortcut.end',
  comment: 'Label for end key in shortcuts.',
  message: 'End'
};
const ARROW_LEFT_KEY = /*i18n*/{
  id: 'keyboard.shortcut.arrowLeft',
  comment: 'Label for arrow left key in shortcuts.',
  message: 'Arrow Left'
};
const ARROW_RIGHT_KEY = /*i18n*/{
  id: 'keyboard.shortcut.arrowRight',
  comment: 'Label for arrow right key in shortcuts.',
  message: 'Arrow Right'
};
const ARROW_UP_KEY = /*i18n*/{
  id: 'keyboard.shortcut.arrowUp',
  comment: 'Label for arrow up key in shortcuts.',
  message: 'Arrow Up'
};
const ARROW_DOWN_KEY = /*i18n*/{
  id: 'keyboard.shortcut.arrowDown',
  comment: 'Label for arrowDown key in shortcuts.',
  message: 'Arrow Down'
};

var coreUtilsMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ALT_KEY: ALT_KEY,
  ARROW_DOWN_KEY: ARROW_DOWN_KEY,
  ARROW_LEFT_KEY: ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY: ARROW_RIGHT_KEY,
  ARROW_UP_KEY: ARROW_UP_KEY,
  BACKSPACE_KEY: BACKSPACE_KEY,
  CAPS_LOCK_KEY: CAPS_LOCK_KEY,
  COMMAND_KEY: COMMAND_KEY,
  CONTROL_KEY: CONTROL_KEY,
  DELETE_KEY: DELETE_KEY,
  END_KEY: END_KEY,
  ENTER_KEY: ENTER_KEY,
  ESCAPE_KEY: ESCAPE_KEY,
  HOME_KEY: HOME_KEY,
  PAGE_DOWN_KEY: PAGE_DOWN_KEY,
  PAGE_UP_KEY: PAGE_UP_KEY,
  SHIFT_KEY: SHIFT_KEY,
  SPACE_KEY: SPACE_KEY,
  TAB_KEY: TAB_KEY
});

const ADD_ANNOTATION = /*i18n*/{
  id: 'extension.command.add-annotation.label',
  comment: 'Label for adding an annotation.',
  message: 'Add annotation'
};
const UPDATE_ANNOTATION = /*i18n*/{
  id: 'extension.command.update-annotation.label',
  comment: 'Label for updating an annotation.',
  message: 'Update annotation'
};
const REMOVE_ANNOTATION = /*i18n*/{
  id: 'extension.command.remove-annotation.label',
  comment: 'Label for removing an annotation.',
  message: 'Remove annotation'
};

var extensionAnnotationMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ADD_ANNOTATION: ADD_ANNOTATION,
  REMOVE_ANNOTATION: REMOVE_ANNOTATION,
  UPDATE_ANNOTATION: UPDATE_ANNOTATION
});

const LABEL$f = /*i18n*/{
  id: 'extension.command.set-text-direction.label',
  comment: 'Label for setting the text direction.',
  message: `{dir, select, ltr {Left-To-Right}
                          rtl {Right-To-Left}
                          other {Reset Direction}}`
};
const DESCRIPTION$c = /*i18n*/{
  id: 'extension.command.set-text-direction.description',
  comment: 'Description for setting the text direction.',
  message: `{dir, select, ltr {Set the text direction from left to right}
                          rtl {Set the text direction from right to left}
                          other {Reset text direction}}`
};

var extensionBidiMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$c,
  LABEL: LABEL$f
});

const LABEL$e = /*i18n*/{
  id: 'extension.command.toggle-blockquote.label',
  comment: 'Label for blockquote formatting command.',
  message: 'Blockquote'
};
const DESCRIPTION$b = /*i18n*/{
  id: 'extension.command.toggle-blockquote.description',
  comment: 'Description for blockquote formatting command.',
  message: 'Add blockquote formatting to the selected text'
};

var extensionBlockquoteMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$b,
  LABEL: LABEL$e
});

const LABEL$d = /*i18n*/{
  id: 'extension.command.toggle-bold.label',
  comment: 'Label for bold formatting command.',
  message: 'Bold'
};
const DESCRIPTION$a = /*i18n*/{
  id: 'extension.command.toggle-bold.description',
  comment: 'Description for bold formatting command.',
  message: 'Add bold formatting to the selected text'
};

var extensionBoldMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$a,
  LABEL: LABEL$d
});

const LABEL$c = /*i18n*/{
  id: 'extension.command.toggle-callout.label',
  comment: 'Label for callout command with support for callout types.',
  message: `{type, select, info {Information Callout}
                            warning {Warning Callout}
                            error {Error Callout}
                            success {Success Callout}
                            other {Callout}}`
};
const DESCRIPTION$9 = /*i18n*/{
  id: 'extension.command.toggle-callout.description',
  comment: 'Description of the callout command with support for callout types.',
  message: `{type, select, info {Create an information callout block}
                            warning {Create a warning callout block}
                            error {Create an error callout block}
                            success {Create a success callout block}
                            other {Create a callout block}}`
};

var extensionCalloutMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$9,
  LABEL: LABEL$c
});

const LABEL$b = /*i18n*/{
  id: 'extension.command.toggle-code-block.label',
  comment: 'Label for the code block command.',
  message: 'Codeblock'
};
const DESCRIPTION$8 = /*i18n*/{
  id: 'extension.command.toggle-code-block.description',
  comment: 'Description for the code block command.',
  message: 'Add a code block'
};

var extensionCodeBlockMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$8,
  LABEL: LABEL$b
});

const LABEL$a = /*i18n*/{
  id: 'extension.command.toggle-code.label',
  comment: 'Label for the inline code formatting.',
  message: 'Code'
};
const DESCRIPTION$7 = /*i18n*/{
  id: 'extension.command.toggle-code.description',
  comment: 'Description for the inline code formatting command.',
  message: 'Add inline code formatting to the selected text'
};

var extensionCodeMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$7,
  LABEL: LABEL$a
});

const LABEL$9 = /*i18n*/{
  id: 'extension.command.toggle-columns.label',
  comment: 'Label for columns command with support for number of columns counts.',
  message: `{count, select, 2 {Two Column Block}
                            3 {Three Column Block}
                            4 {Four Column Block}
                            other {Multi Column Block}}`
};
const DESCRIPTION$6 = /*i18n*/{
  id: 'extension.command.toggle-columns.description',
  comment: 'Description of the columns command with support for number of columns counts.',
  message: `{count, select, 2 {Split the block into two columns}
                            3 {Split the current block into three columns}
                            4 {Split the current block into four columns}
                            other {Split the current block into multiple columns}}`
};

var extensionColumnsMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$6,
  LABEL: LABEL$9
});

const INSERT_EMOJI_LABEL = /*i18n*/{
  id: 'extension.command.insert-emoji.label',
  comment: 'Label for inserting an emoji.',
  message: 'Insert Emoji'
};

var extensionEmojiMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  INSERT_EMOJI_LABEL: INSERT_EMOJI_LABEL
});

const SET_LABEL$1 = /*i18n*/{
  id: 'extension.command.set-font-size.label',
  comment: 'Label for adding a font size.',
  message: 'Font size'
};
const SET_DESCRIPTION = /*i18n*/{
  id: 'extension.command.set-font-size.description',
  comment: 'Description for adding a font size.',
  message: 'Set the font size for the selected text.'
};
const INCREASE_LABEL = /*i18n*/{
  id: 'extension.command.increase-font-size.label',
  comment: 'Label for increasing the font size.',
  message: 'Increase'
};
const INCREASE_DESCRIPTION = /*i18n*/{
  id: 'extension.command.increase-font-size.description',
  comment: 'Description for increasing the font size.',
  message: 'Increase the font size'
};
const DECREASE_LABEL = /*i18n*/{
  id: 'extension.command.decrease-font-size.label',
  comment: 'Label for decreasing the font size.',
  message: 'Decrease'
};
const DECREASE_DESCRIPTION = /*i18n*/{
  id: 'extension.command.decrease-font-size.description',
  comment: 'Description for decreasing the font size.',
  message: 'Decrease the font size.'
};

var extensionFontSizeMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DECREASE_DESCRIPTION: DECREASE_DESCRIPTION,
  DECREASE_LABEL: DECREASE_LABEL,
  INCREASE_DESCRIPTION: INCREASE_DESCRIPTION,
  INCREASE_LABEL: INCREASE_LABEL,
  SET_DESCRIPTION: SET_DESCRIPTION,
  SET_LABEL: SET_LABEL$1
});

const LABEL$8 = /*i18n*/{
  id: 'extension.command.toggle-heading.label',
  comment: 'Label for heading command with support for levels.',
  message: `{level, select, 1 {Heading 1}
                            2 {Heading 2}
                            3 {Heading 3}
                            4 {Heading 4}
                            5 {Heading 5}
                            6 {Heading 6}
                            other {Heading}}`
};

var extensionHeadingMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LABEL: LABEL$8
});

const UNDO_LABEL = /*i18n*/{
  id: 'extension.command.undo.label',
  comment: 'Label for undo.',
  message: 'Undo'
};
const UNDO_DESCRIPTION = /*i18n*/{
  id: 'extension.command.undo.description',
  comment: 'Description for undo.',
  message: 'Undo the most recent action'
};
const REDO_LABEL = /*i18n*/{
  id: 'extension.command.redo.label',
  comment: 'Label for redo.',
  message: 'Redo'
};
const REDO_DESCRIPTION = /*i18n*/{
  id: 'extension.command.redo.description',
  comment: 'Description for redo.',
  message: 'Redo the most recent action'
};

var extensionHistoryMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  REDO_DESCRIPTION: REDO_DESCRIPTION,
  REDO_LABEL: REDO_LABEL,
  UNDO_DESCRIPTION: UNDO_DESCRIPTION,
  UNDO_LABEL: UNDO_LABEL
});

const LABEL$7 = /*i18n*/{
  id: 'extension.command.insert-horizontal-rule.label',
  comment: 'Label for inserting a horizontal rule (divider) command.',
  message: 'Divider'
};
const DESCRIPTION$5 = /*i18n*/{
  id: 'extension.command.insert-horizontal-rule.description',
  comment: 'Description for inserting a horizontal rule (divider) command.',
  message: 'Separate content with a diving horizontal line'
};

var extensionHorizontalRuleMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$5,
  LABEL: LABEL$7
});

const LABEL$6 = /*i18n*/{
  id: 'extension.command.toggle-italic.label',
  comment: 'Label for italic formatting command.',
  message: 'Italic'
};
const DESCRIPTION$4 = /*i18n*/{
  id: 'extension.command.toggle-italic.description',
  comment: 'Description for italic formatting command.',
  message: 'Italicize the selected text'
};

var extensionItalicMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$4,
  LABEL: LABEL$6
});

const ORDERED_LIST_LABEL = /*i18n*/{
  id: 'extension.command.toggle-ordered-list.label',
  comment: 'Label for inserting an ordered list into the editor.',
  message: 'Ordered list'
};
const BULLET_LIST_LABEL = /*i18n*/{
  id: 'extension.command.toggle-bullet-list.description',
  comment: 'Description for inserting a bullet list into the editor.',
  message: 'Bulleted list'
};
const TASK_LIST_LABEL = /*i18n*/{
  id: 'extension.command.toggle-task-list.description',
  comment: 'Description for inserting a task list into the editor.',
  message: 'Tasked list'
};

var extensionListMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BULLET_LIST_LABEL: BULLET_LIST_LABEL,
  ORDERED_LIST_LABEL: ORDERED_LIST_LABEL,
  TASK_LIST_LABEL: TASK_LIST_LABEL
});

const INCREASE_INDENT_LABEL = /*i18n*/{
  id: 'extension.command.increase-indent.label',
  comment: 'Label for increasing the indentation level.',
  message: 'Increase indentation'
};
const DECREASE_INDENT_LABEL = /*i18n*/{
  id: 'extension.command.decrease-indent.label',
  comment: 'Label for decreasing the indentation level of the current node block.',
  message: 'Decrease indentation'
};
const CENTER_ALIGN_LABEL = /*i18n*/{
  id: 'extension.command.center-align.label',
  comment: 'Center align the text in the current node.',
  message: 'Center align'
};
const JUSTIFY_ALIGN_LABEL = /*i18n*/{
  id: 'extension.command.justify-align.label',
  comment: 'Justify the alignment of the selected nodes.',
  message: 'Justify'
};
const RIGHT_ALIGN_LABEL = /*i18n*/{
  id: 'extension.command.right-align.label',
  comment: 'Right align the selected nodes.',
  message: 'Right align'
};
const LEFT_ALIGN_LABEL = /*i18n*/{
  id: 'extension.command.left-align.label',
  comment: 'Left align the selected nodes.',
  message: 'Left align'
};

var extensionNodeFormattingMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CENTER_ALIGN_LABEL: CENTER_ALIGN_LABEL,
  DECREASE_INDENT_LABEL: DECREASE_INDENT_LABEL,
  INCREASE_INDENT_LABEL: INCREASE_INDENT_LABEL,
  JUSTIFY_ALIGN_LABEL: JUSTIFY_ALIGN_LABEL,
  LEFT_ALIGN_LABEL: LEFT_ALIGN_LABEL,
  RIGHT_ALIGN_LABEL: RIGHT_ALIGN_LABEL
});

const INSERT_LABEL = /*i18n*/{
  id: 'extension.command.insert-paragraph.label',
  comment: 'Label for inserting a paragraph.',
  message: 'Insert Paragraph'
};
const INSERT_DESCRIPTION = /*i18n*/{
  id: 'extension.command.insert-paragraph.description',
  comment: 'Description for inserting a paragraph.',
  message: 'Insert a new paragraph'
};
const CONVERT_LABEL = /*i18n*/{
  id: 'extension.command.convert-paragraph.label',
  comment: 'Label for converting the current node into a paragraph.',
  message: 'Convert Paragraph'
};
const CONVERT_DESCRIPTION = /*i18n*/{
  id: 'extension.command.convert-paragraph.description',
  comment: 'Description for converting a paragraph.',
  message: 'Convert current block into a paragraph block.'
};

var extensionParagraphMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CONVERT_DESCRIPTION: CONVERT_DESCRIPTION,
  CONVERT_LABEL: CONVERT_LABEL,
  INSERT_DESCRIPTION: INSERT_DESCRIPTION,
  INSERT_LABEL: INSERT_LABEL
});

const LABEL$5 = /*i18n*/{
  id: 'extension.command.toggle-strike.label',
  comment: 'Label for strike formatting command.',
  message: 'Strikethrough'
};
const DESCRIPTION$3 = /*i18n*/{
  id: 'extension.command.toggle-strike.description',
  comment: 'Description for strike formatting command.',
  message: 'Strikethrough the selected text'
};

var extensionStrikeMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$3,
  LABEL: LABEL$5
});

const LABEL$4 = /*i18n*/{
  id: 'extension.command.toggle-subscript.label',
  comment: 'Label for toggling a subscript.',
  message: 'Subscript'
};

var extensionSubMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LABEL: LABEL$4
});

const LABEL$3 = /*i18n*/{
  id: 'extension.command.toggle-superscript.label',
  comment: 'Label for toggling a superscript.',
  message: 'Superscript'
};

var extensionSupMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LABEL: LABEL$3
});

const CREATE_COMMAND_LABEL = /*i18n*/{
  id: 'extension.command.create-table.label',
  comment: 'Label for creating a table',
  message: 'Create table'
};
const CREATE_COMMAND_DESCRIPTION = /*i18n*/{
  id: 'extension.command.create-table.description',
  comment: 'Description for creating a table',
  message: 'Create a table with set number of rows and columns.'
};

/**
 * Takes a `{ count: number }` value to denote the number of columns.
 */
const COLUMN_COUNT = /*i18n*/{
  id: 'extension.table.column_count',
  comment: 'The number of columns',
  message: '{count, plural, one {# column} other {# columns}}'
};

/**
 * Takes a `{ count: number }` value to denote the number of rows.
 */
const ROW_COUNT = /*i18n*/{
  id: 'extension.table.row_count',
  comment: 'The number of rows',
  message: '{count, plural, one {# row} other {# rows}}'
};

var extensionTablesMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  COLUMN_COUNT: COLUMN_COUNT,
  CREATE_COMMAND_DESCRIPTION: CREATE_COMMAND_DESCRIPTION,
  CREATE_COMMAND_LABEL: CREATE_COMMAND_LABEL,
  ROW_COUNT: ROW_COUNT
});

const TOGGLE_LABEL = /*i18n*/{
  id: 'extension.command.toggle-upper-case.label',
  comment: 'Label for toggling between upper and lower case.',
  message: `{case, select, upper {Uppercase}
                          lower {Lowercase}
                          capitalize {Sentence case}
                          smallCaps {Small caps}
                          other {Text case}}`
};
const SET_LABEL = /*i18n*/{
  id: 'extension.command.set-casing.label',
  comment: 'Label for setting the case.',
  message: 'Set text case'
};

var extensionTextCaseMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SET_LABEL: SET_LABEL,
  TOGGLE_LABEL: TOGGLE_LABEL
});

const SET_COLOR_LABEL = /*i18n*/{
  id: 'extension.command.set-text-color.label',
  comment: 'Label for color formatting command.',
  message: 'Text color'
};
const SET_COLOR_DESCRIPTION = /*i18n*/{
  id: 'extension.command.set-text-color.description',
  comment: 'Description for color formatting command.',
  message: 'Set the text color for the selected text.'
};
const TRANSPARENT = /*i18n*/{
  id: 'ui.text-color.transparent',
  comment: 'Transparent color label.',
  message: 'Transparent'
};
const WHITE = /*i18n*/{
  id: 'ui.text-color.white',
  comment: 'White color.',
  message: 'White'
};
const BLACK = /*i18n*/{
  id: 'ui.text-color.black',
  comment: 'Black color.',
  message: 'Black'
};
const GRAY = /*i18n*/{
  id: 'ui.text-color.gray',
  comment: 'Gray color.',
  message: `Gray`
};
const GRAY_HUE = /*i18n*/{
  id: 'ui.text-color.gray.hue',
  comment: 'Gray color hues.',
  message: `Gray {hue}`
};
const RED = /*i18n*/{
  id: 'ui.text-color.red',
  comment: 'Red color.',
  message: `Red`
};
const RED_HUE = /*i18n*/{
  id: 'ui.text-color.red.hue',
  comment: 'Red color hues.',
  message: `Red {hue}`
};
const PINK = /*i18n*/{
  id: 'ui.text-color.pink',
  comment: 'Pink color.',
  message: `Pink`
};
const PINK_HUE = /*i18n*/{
  id: 'ui.text-color.pink.hue',
  comment: 'Pink color hues.',
  message: `Pink {hue}`
};
const GRAPE = /*i18n*/{
  id: 'ui.text-color.grape',
  comment: 'Grape color.',
  message: `Grape`
};
const GRAPE_HUE = /*i18n*/{
  id: 'ui.text-color.grape.hue',
  comment: 'Grape color hues.',
  message: `Grape {hue}`
};
const VIOLET = /*i18n*/{
  id: 'ui.text-color.violet',
  comment: 'Violet color.',
  message: `Violet`
};
const VIOLET_HUE = /*i18n*/{
  id: 'ui.text-color.violet.hue',
  comment: 'Violet color hues.',
  message: `Violet {hue}`
};
const INDIGO = /*i18n*/{
  id: 'ui.text-color.indigo',
  comment: 'Indigo color.',
  message: `Indigo`
};
const INDIGO_HUE = /*i18n*/{
  id: 'ui.text-color.indigo.hue',
  comment: 'Indigo color hues.',
  message: `Indigo {hue}`
};
const BLUE = /*i18n*/{
  id: 'ui.text-color.blue',
  comment: 'Blue color.',
  message: `Blue`
};
const BLUE_HUE = /*i18n*/{
  id: 'ui.text-color.blue.hue',
  comment: 'Blue color hues.',
  message: `Blue {hue}`
};
const CYAN = /*i18n*/{
  id: 'ui.text-color.cyan',
  comment: 'Cyan color.',
  message: `Cyan`
};
const CYAN_HUE = /*i18n*/{
  id: 'ui.text-color.cyan.hue',
  comment: 'Cyan color hues.',
  message: `Cyan {hue}`
};
const TEAL = /*i18n*/{
  id: 'ui.text-color.teal',
  comment: 'Teal color.',
  message: `Teal`
};
const TEAL_HUE = /*i18n*/{
  id: 'ui.text-color.teal.hue',
  comment: 'Teal color hues.',
  message: `Teal {hue}`
};
const GREEN = /*i18n*/{
  id: 'ui.text-color.green',
  comment: 'Green color.',
  message: `Green`
};
const GREEN_HUE = /*i18n*/{
  id: 'ui.text-color.green.hue',
  comment: 'Green color hues.',
  message: `Green {hue}`
};
const LIME = /*i18n*/{
  id: 'ui.text-color.lime',
  comment: 'Lime color.',
  message: `Lime`
};
const LIME_HUE = /*i18n*/{
  id: 'ui.text-color.lime.hue',
  comment: 'Lime color hues.',
  message: `Lime {hue}`
};
const YELLOW = /*i18n*/{
  id: 'ui.text-color.yellow',
  comment: 'Yellow color.',
  message: `Yellow`
};
const YELLOW_HUE = /*i18n*/{
  id: 'ui.text-color.yellow.hue',
  comment: 'Yellow color hues.',
  message: `Yellow {hue}`
};
const ORANGE = /*i18n*/{
  id: 'ui.text-color.orange',
  comment: 'Orange color.',
  message: `Orange`
};
const ORANGE_HUE = /*i18n*/{
  id: 'ui.text-color.orange.hue',
  comment: 'Orange color hues.',
  message: `Orange {hue}`
};

var extensionTextColorMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BLACK: BLACK,
  BLUE: BLUE,
  BLUE_HUE: BLUE_HUE,
  CYAN: CYAN,
  CYAN_HUE: CYAN_HUE,
  GRAPE: GRAPE,
  GRAPE_HUE: GRAPE_HUE,
  GRAY: GRAY,
  GRAY_HUE: GRAY_HUE,
  GREEN: GREEN,
  GREEN_HUE: GREEN_HUE,
  INDIGO: INDIGO,
  INDIGO_HUE: INDIGO_HUE,
  LIME: LIME,
  LIME_HUE: LIME_HUE,
  ORANGE: ORANGE,
  ORANGE_HUE: ORANGE_HUE,
  PINK: PINK,
  PINK_HUE: PINK_HUE,
  RED: RED,
  RED_HUE: RED_HUE,
  SET_COLOR_DESCRIPTION: SET_COLOR_DESCRIPTION,
  SET_COLOR_LABEL: SET_COLOR_LABEL,
  TEAL: TEAL,
  TEAL_HUE: TEAL_HUE,
  TRANSPARENT: TRANSPARENT,
  VIOLET: VIOLET,
  VIOLET_HUE: VIOLET_HUE,
  WHITE: WHITE,
  YELLOW: YELLOW,
  YELLOW_HUE: YELLOW_HUE
});

const LABEL$2 = /*i18n*/{
  id: 'extension.command.set-text-highlight.label',
  comment: 'Label for adding a text highlight.',
  message: 'Text highlight'
};
const DESCRIPTION$2 = /*i18n*/{
  id: 'extension.command.set-text-highlight.description',
  comment: 'Description for adding a text highlight.',
  message: 'Set the text highlight color for the selected text.'
};

var extensionTextHighlightMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$2,
  LABEL: LABEL$2
});

const LABEL$1 = /*i18n*/{
  id: 'extension.command.toggle-underline.label',
  comment: 'Label for underline formatting command.',
  message: 'Underline'
};
const DESCRIPTION$1 = /*i18n*/{
  id: 'extension.command.toggle-underline.description',
  comment: 'Description for underline formatting command.',
  message: 'Underline the selected text'
};

var extensionUnderlineMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION$1,
  LABEL: LABEL$1
});

const LABEL = /*i18n*/{
  id: 'extension.command.toggle-whitespace.label',
  comment: 'Label for displaying whitespace characters.',
  message: 'Toggle Whitespace'
};
const DESCRIPTION = /*i18n*/{
  id: 'extension.command.toggle-whitespace.description',
  comment: 'Description for displaying whitespace characters.',
  message: 'Show hidden whitespace characters in your editor.'
};

var extensionWhitespaceMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DESCRIPTION: DESCRIPTION,
  LABEL: LABEL
});

const NO_ITEMS_AVAILABLE = /*i18n*/{
  id: 'react-components.mention-atom-component.zero-items',
  comment: 'Shown when no popup items are available',
  message: 'No items available'
};

var reactComponentsMessages = /*#__PURE__*/Object.freeze({
  __proto__: null,
  NO_ITEMS_AVAILABLE: NO_ITEMS_AVAILABLE
});

exports.CoreMessages = coreMessages;
exports.CoreUtilsMessages = coreUtilsMessages;
exports.ExtensionAnnotationMessages = extensionAnnotationMessages;
exports.ExtensionBidiMessages = extensionBidiMessages;
exports.ExtensionBlockquoteMessages = extensionBlockquoteMessages;
exports.ExtensionBoldMessages = extensionBoldMessages;
exports.ExtensionCalloutMessages = extensionCalloutMessages;
exports.ExtensionCodeBlockMessages = extensionCodeBlockMessages;
exports.ExtensionCodeMessages = extensionCodeMessages;
exports.ExtensionColumnsMessages = extensionColumnsMessages;
exports.ExtensionEmojiMessages = extensionEmojiMessages;
exports.ExtensionFontSizeMessages = extensionFontSizeMessages;
exports.ExtensionHeadingMessages = extensionHeadingMessages;
exports.ExtensionHistoryMessages = extensionHistoryMessages;
exports.ExtensionHorizontalRuleMessages = extensionHorizontalRuleMessages;
exports.ExtensionItalicMessages = extensionItalicMessages;
exports.ExtensionListMessages = extensionListMessages;
exports.ExtensionNodeFormattingMessages = extensionNodeFormattingMessages;
exports.ExtensionParagraphMessages = extensionParagraphMessages;
exports.ExtensionStrikeMessages = extensionStrikeMessages;
exports.ExtensionSubMessages = extensionSubMessages;
exports.ExtensionSupMessages = extensionSupMessages;
exports.ExtensionTablesMessages = extensionTablesMessages;
exports.ExtensionTextCaseMessages = extensionTextCaseMessages;
exports.ExtensionTextColorMessages = extensionTextColorMessages;
exports.ExtensionTextHighlightMessages = extensionTextHighlightMessages;
exports.ExtensionUnderlineMessages = extensionUnderlineMessages;
exports.ExtensionWhitespaceMessages = extensionWhitespaceMessages;
exports.ReactComponentMessages = reactComponentsMessages;
