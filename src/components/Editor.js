import React from 'react';
import MonacoEditor from '@uiw/react-monacoeditor';

function App(props) {
    const { value, onChange } = props;
    
    function setMarkdown(value) {
        onChange(value);
    }

    return (
        <MonacoEditor
            onChange={setMarkdown}
            language="markdown"
            value="# This is title"
            options={{
                theme: 'vs-dark',
            }}
        />
    );
}

export default App;
