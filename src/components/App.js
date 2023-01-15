import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import Preview from './Preview';

export default function App() {
  const [input, setInput] = useState('');
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(input)
  }, 250)

    return () => clearTimeout(timeout)
  }, [input])

  return (
    <>
      {/* Editor Pane */}
      <div class="m-10">
        <div class="flex justify-center">
          <div class="h-screen w-6/12 border border-gray-500 rounded-tl rounded-bl">
            <Editor onChange={setInput} value={input}  />
          </div>
          {/* Preview Pane */}
          <div class="p-10 h-screen w-6/12 border border-gray-500 overflow-scroll rounded-tr rounded-br">
            <Preview value={srcDoc}/>
          </div>
        </div>
      </div>
    </>
  );
}