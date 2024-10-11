import { loader } from "@monaco-editor/react";
import { configureMonacoYaml, MonacoYamlOptions } from "monaco-yaml";

type Reconfigure = (options?: MonacoYamlOptions) => void;
let capture: null | Reconfigure = null;

loader.init().then((monaco) => {
  const monacoYaml = configureMonacoYaml(monaco, {});
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
