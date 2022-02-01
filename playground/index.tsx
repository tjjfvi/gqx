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

// @ts-ignore
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

writeTsFile("/scalars.ts", `export type { $$Scalars } from "./gqx"`)
writeTsFile("/gqx.ts", `
export * from "./output";

import { $$GqxReturn, $$AnyProp, $$Frag, $$Input, $$Output, $$generateObject } from "./output";

// Type of e.g. gqx.query.getBook
type GqxOut_<I extends $$AnyProp> =
  <T extends $$Frag<I>>(input: $$Input<I>, frag: T)
    => Promise<$$Output<I, T>>

// HKT encoding to pass to $$generateObject
interface GqxOut extends $$GqxReturn {
  return: GqxOut_<this["input"]>;
}

// Imported by codegen output
export interface $$Scalars {
  String: string;
  Boolean: boolean;
  Float: number;
  Int: number;
  ID: string;
}

export const gqx = $$generateObject<GqxOut>(() => null!)
`)

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

loader.init().then(monaco => monaco.editor.defineTheme("eglint", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#151820",
  },
}))

const defaultGqlText = `
# gql schema file

schema {
  query: Query
}

type Query {
  getPerson(id: ID!): Person!
  getAuthor(id: ID!): Author!
  getBook(id: ID!): Book!
  listBooks(cursor: Cursor, filter: BookFilter): [Book!]!
}

input Cursor {
  start: Int!
  limit: Int!
}

type Book {
  id: ID!
  language: Language!
  author: Author!
  title: String!
  description: String!
  categories: [Category!]!
  translation(language: Language!): Book
}

input BookFilter {
  title: String
  author: AuthorFilter
  categories: [Category!]
}

type Author implements Person {
  id: ID!
  name: String!
  books: [Book!]!
  favoriteBook: Book!
}

type User implements Person {
  id: ID!
  name: String
  favoriteBook: Book
}

interface Person {
  id: ID!
  name: String
  favoriteBook: Book
}

input AuthorFilter {
  name: String
}

enum Category {
  Horror
  SciFi
  Fiction
  Fantasy
  NonFiction
  Romance
  Historical
  Mystery
  Childrens
  Dystopian
  Utopian
  Religous
}


enum Language {
  ab ae af ak am an ar as av ay az ba be bg bh bi bm bn bo br bs ca ce ch co cr cs cu cv cy
  da de dv dz ee el en eo es et eu fa ff fi fj fo fr fy ga gd gl gn gu gv ha he hi ho hr ht
  hu hy hz ia id ie ig ii ik io is it iu ja jv ka kg ki kj kk kl km kn ko kr ks ku kv kw ky
  la lb lg li ln lo lt lu lv mg mh mi mk ml mn mr ms mt my na nb nd ne ng nl nn no nr nv ny
  oc oj om or os pa pi pl ps pt qu rm rn ro ru rw sa sc sd se sg si sk sl sm sn so sq sr ss
  st su sv sw ta te tg th ti tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa wo xh yi yo
  za zh zu
}
`

const defaultTsText = `
import { gqx, Author, Book, Person } from "./gqx";

const authorFrag = Author.$(
  Author.id,
  Author.name,
);

const bookFrag1 = Book.$(
  Book.id,
  Book.title,
  Book.author.name,
);

const bookFrag2 = Book.$(
  Book.id,
  Book.author.$(authorFrag)
);

const bookFragCombined = Book.$(
  bookFrag1,
  bookFrag2,
);

gqx.query.getBook({ id: "abc" }, bookFragCombined).then(book => {
  book; // Hover
  /*
    (parameter) book: {
      __typename: "Book";
      id: string;
      title: string;
      author: {
        __typename: "Author";
        id: string;
        name: string;
      };
    }
  */
})

const personFrag = Person.$(
  Person.name,
  // Author implements the interface Person
  Author.books.id,
)

gqx.query.getPerson({ id: "foo" }, personFrag).then(person => {
  person; // Hover
  /*
    (parameter) person: {
        __typename: "Author";
        name: string;
        books: {
            __typename: "Book";
            id: string;
        }[];
    } | {
        __typename: "User";
        name: string;
    }
  */
  // @ts-expect-error may not exist
  person.books
  if(person.__typename === "Author"){
    person.books[0].id // string
  }
})
`

ReactDOM.render(<App/>, document.getElementById("root"))
