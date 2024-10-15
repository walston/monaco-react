import React from "react";
import Editor, { EditorProps } from "@monaco-editor/react";
import { update } from "./utils";

import "./Editor.css";
import { DARK_THEME } from "./theming";

/**
==  Open Questions  ==
 * How do we get YAML syntax highlighting
    easy it's built in.
    monoco-yaml package does some extra work allowing us to load in schemas
 * How do we provide styling? monaco themes?
    easy as well. defineTheme is a function on monaco-editor
 * How can we handle the “chrome” edges (where we add the filename and errors)
    Simple enough using a grid setup.
    There were some circular render issues that vanished… unsure what caused & why they left
 * Can this approach be dynamically sized? is there a small version we could put on a builder-tile?
    Seems to be :+1:
 * How are validation and syntax errors handled?
    mysterious
 * How are file-switches handled? We swap between configs often, how are those handled and stored.
 * ---------------------------------------------
 * Claim 1: “cannot be used with monaco-yaml”. I see a monaco-editor/react module export for the monaco global, so this is likely possible now (if it wasn’t then).
    FALSE: as of 5.0.0 monaco-yaml can be used with @monaco-editor/react
 * Claim 2: “real-time validation is not possible”.
    This would need to be exposed by BE, and is not a trivial lift by any means. there are tons of questions about what a valid config is at any given point in time, and the complexity of this has led us to not even try despite technically being able to.
 * Supposition: We won’t have much work to do to handle the props-api. just pass directly to and only worry about styling/async validation
    This claim was based on an assumption there would be more of a props surface on their Editor…
    There isn't... but maybe we don't need a big surface?
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
        options={editorOptions()}
        theme={DARK_THEME}
        onMount={(_ed) => {
          update();
        }}
        defaultLanguage="yaml"
        {...props}
      />
      <div className="sidebar">
        <p>an issue</p>
        <p>a different issue</p>
        <p>a pro tip</p>
        <p>a suggestion</p>
        <p>check out our docs</p>
      </div>
    </div>
  );
}

function editorOptions(): EditorProps["options"] {
  return { minimap: { enabled: false } };
}
