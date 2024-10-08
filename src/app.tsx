import React, { useState } from 'react';
import Editor from './Editor';

export function App() {
  const [value, setValue] = useState();
  return (
    <>
      <Editor />
      <pre>
        <code>{value}</code>
      </pre>
    </>
  );
}
export default App;
