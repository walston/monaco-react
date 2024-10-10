import React, { useState } from "react";
import Editor from "./Editor";

const DEFAULT_VALUE = `foo: hello
bar:
  - baz
  - bing
  - boingo
`;

export function App() {
  const [value, setValue] = useState(DEFAULT_VALUE);
  return (
    <>
      <Editor
        defaultPath="a"
        defaultValue={DEFAULT_VALUE}
        onChange={(val) => setValue(val ?? "")}
      />
      <pre>
        <code>{value}</code>
      </pre>
    </>
  );
}
export default App;
