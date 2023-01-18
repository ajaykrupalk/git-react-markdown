import React from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';

function App({ value }) {
  return (
    // Using pre-built component MarkdownEditor
    // Using the value got from Markdown Editor
    <MarkdownEditor.Markdown source={value}/>
  );
}

export default App;