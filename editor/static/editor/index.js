import React from 'react';
import ReactDOM from 'react-dom';
import EditorComponent from './editor_component';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('editor-root');
    if (rootElement) {
        const initialContent = rootElement.dataset.content;

        ReactDOM.render(
            <EditorComponent
                documentContent={initialContent}
                onContentChange={(newContent) => {
                    // Send updated content to the WebSocket server here (if needed)
                    console.log("Document updated content: ", newContent);
                }}
            />,
            rootElement
        );

        ReactDOM.render(<VersionHistory />, document.getElementById('version-history-root'));
    }
});
