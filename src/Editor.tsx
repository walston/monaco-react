import React, { useLayoutEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
// import { MonacoYaml } from "monaco-yaml";
import "./Editor.css";

/**
==  Open Questions  ==
 * How do we get YAML syntax highlighting
 * How do we provide styling? monaco themes?
 * How can we handle the “chrome” edges (where we add the filename and errors)
 * Can this approach be dynamically sized? is there a small version we could put on a builder-tile?
 * How are validation and syntax errors handled?
 * ---------------------------------------------
 * Claim 1: “cannot be used with monaco-yaml”. I see a monaco-editor/react module export for the monaco global, so this is likely possible now (if it wasn’t then).
 * Claim 2: “real-time validation is not possible”. This would need to be exposed by BE, and is not a trivial lift by any means. there are tons of questions about what a valid config is at any given point in time, and the complexity of this has led us to not even try despite technically being able to.
 * Supposition: We won’t have much work to do to handle the props-api. just pass directly to and only worry about styling/async validation
 */

const DEFAULT_VALUE = `foo: hello
bar:
  - baz
  - bing
  - boingo
`;

export default function ConsoleEditor() {
  return (
    <div className="Editor">
      <div style={{ gridArea: "header" }}>something</div>
      <div style={{ gridArea: "editor" }}>
        <Editor
          theme="vs-dark"
          defaultLanguage="yaml"
          defaultValue={DEFAULT_VALUE}
        />
      </div>
      <div style={{ gridArea: "sidebar" }}></div>
    </div>
  );
}
