import React from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';

function App({ value }) {
  return (
    <MarkdownEditor.Markdown source={value}/>
  );
}

export default App;