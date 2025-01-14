import React from 'react';
import { Remirror, useRemirror } from '@remirror/react';
import { BoldExtension, ItalicExtension } from '@remirror/core';
import { EditorState } from '@remirror/pm/state';

const EditorComponent = ({ documentContent, onContentChange }) => {
  const extensions = () => [new BoldExtension(), new ItalicExtension()];

  const { manager, state, onChange } = useRemirror({
    extensions,
    content: documentContent,
    stringHandler: 'html', // Load initial content as HTML
  });

  return (
    <Remirror
      manager={manager}
      state={state}
      onChange={(event) => {
        onChange(event);
        // Call the callback function to send the updated content
        onContentChange(event.state.doc.toString());
      }}
      placeholder='Start editing...'
    />
  );
};

export default EditorComponent;
