// eslint-disable-next-line spaced-comment
/// <reference lib="dom"/>

import "./index.styl"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Context } from "../src"
import _Editor, { loader } from "@monaco-editor/react"
import { groupDefinitions } from "../src/groupDefinitions"
import { stringifyBoilerplate } from "../src/stringifyBoilerplate"
import { stringifyEnumTypes } from "../src/stringifyEnumTypes"
import { stringifyInputTypes } from "../src/stringifyInputTypes"
import stringifyObjectTypes from "../src/stringifyObjectTypes"
import stringifyOperations from "../src/stringifyOperations"
import { stringifyScalarTypes } from "../src/stringifyScalarTypes"
import { stringifyTypeDirectives } from "../src/stringifyTypeDirectives"
import { parse } from "graphql";
import { Icon } from "@mdi/react"
import { mdiClose } from "@mdi/js"

import boilerplate from "./boilerplate.txt"

export interface EditorProps {
  language: string;
  defaultText: string;
  onChange?: (text: string) => void;
  path?: string;
}

export const Editor = ({ language, defaultText, onChange, path }: EditorProps) => <div className="Editor">
  <_Editor
    defaultLanguage={language}
    defaultValue={defaultText}
    onChange={x => onChange?.(x ?? "")}
    path={path}
    theme="eglint"
    options={{
      automaticLayout: true,
      minimap: {
        enabled: false,
      },
    }}
  />
</div>

export const App = () => {
  const [gqlText, setGqlText] = useState(defaultGqlText)
  let error = false
  let output
  try {
    output = genOutput(gqlText)
    writeTsFile("/output.ts", output)
  } catch (e) {
    error = true
  }
  return <>
    <Editor language="graphql" defaultText={defaultGqlText} onChange={setGqlText}/>
    <Editor language="typescript" defaultText={defaultTsText} path="/main.ts"/>
    {error ? <div className="error"><Icon path={mdiClose}/></div> : null}
  </>
}

import userGqxTs from './example/userGqx.ts.txt'
writeTsFile("/gqx.ts", userGqxTs)
writeTsFile("/scalars.ts", `export type { $$Scalars } from "./gqx"`)

async function writeTsFile(path: string, content: string){
  let monaco = await loader.init()
  let uri = monaco.Uri.file(path);
  (monaco.editor.getModel(uri) ?? monaco.editor.createModel(content, "typescript", uri)).setValue(content)
  monaco.languages.typescript.typescriptDefaults.addExtraLib(content)
}

function genOutput(gql: string){
  const ctx: Context = {
    operations: [],
    baseTypes: [],
    scalarTypes: [],
    enumTypes: {},
    inputTypes: {},
    objectTypes: {},
    typeDirectives: {},
  };

  groupDefinitions(ctx, parse(gql).definitions);

  const code = [
    "/* eslint-disable */",
    stringifyBoilerplate(boilerplate),
    stringifyEnumTypes(ctx),
    stringifyInputTypes(ctx),
    stringifyObjectTypes(ctx),
    stringifyOperations(ctx),
    stringifyTypeDirectives(ctx),
    stringifyScalarTypes(ctx),
  ].join("\n\n").replace(/\n\n\n+/g, "\n\n");

  return code;
}

loader.init().then(monaco => {
  monaco.editor.defineTheme("eglint", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#151820",
    },
  })
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    module: monaco.languages.typescript.ModuleKind.ESNext,
    target: monaco.languages.typescript.ScriptTarget.ESNext
  })
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    diagnosticCodesToIgnore: [ 6133 ],
  })
})

import defaultGqlText from "./example/schema.gql.txt"

import defaultTsText from "./example/usage.ts.txt"

ReactDOM.render(<App/>, document.getElementById("root"))
