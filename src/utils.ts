import { loader } from "@monaco-editor/react";
import {
  configureMonacoYaml,
  JSONSchema,
  MonacoYamlOptions,
} from "monaco-yaml";
import { theme } from "./theming";
import schema_1 from "./schema1.json";

type Reconfigure = (options?: MonacoYamlOptions) => void;
let capture: null | Reconfigure = null;

loader.init().then((monaco) => {
  theme(monaco);
  // there's a weird "Loading…" when hovering over tokens.
  // What causes that? I'm guessing it's loading schemas
  const monacoYaml = configureMonacoYaml(monaco, {
    schemas: [
      {
        uri: schema_1.$schema,
        fileMatch: ["yaml"],
        schema: schema_1 as JSONSchema,
      },
    ],
  });
  capture = (options = {}) => monacoYaml.update(options);
});

export function update(options?: MonacoYamlOptions) {
  if (!capture) return;
  capture(options);
}

window.MonacoEnvironment = {
  getWorker(moduleId, label) {
    switch (label) {
      case "yaml":
        return new Worker(new URL("monaco-yaml/yaml.worker", import.meta.url));
      default:
        throw new Error(`Unknown label ${label}`);
    }
  },
};
