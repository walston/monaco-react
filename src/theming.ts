import { Monaco } from "@monaco-editor/react";

export const LIGHT_THEME = "console-light";
export const DARK_THEME = "console-dark";

export function theme(monaco: Monaco) {
  monaco.editor.defineTheme(DARK_THEME, {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#394555",
    },
  });

  monaco.editor.defineTheme(LIGHT_THEME, {
    base: "vs",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#F0F0F0",
    },
  });
}
