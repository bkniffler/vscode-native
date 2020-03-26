import "./index.css";
import * as monaco from "monaco-editor";
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired

monaco.editor.create(document.body, {
  value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
  language: "typescript",
  theme: "vs-dark"
});
