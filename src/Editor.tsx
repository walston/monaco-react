import React, { useLayoutEffect, useRef } from "react";
import Editor, { EditorProps } from "@monaco-editor/react";
import { update } from "./utils";

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

type Props = Pick<
  EditorProps,
  "defaultValue" | "defaultPath" | "onChange" | "onMount" | "onValidate"
>;

export default function ConsoleEditor(props: Props) {
  return (
    <div className="Editor">
      <div className="header">something</div>
      <Editor
        theme="vs-dark"
        onMount={(_ed) => {
          update();
        }}
        defaultLanguage="yaml"
        {...props}
      />
      <div className="sidebar">
        <textarea></textarea>
      </div>
    </div>
  );
}
