/* eslint-disable */

export interface $$Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Float: number;
  Int: number;
}

export interface $<F, L> { readonly f: F; readonly l: L }
export const $ = <F, L>(f: F, l: L) => ({ f, l });

export interface $$HKT<I = unknown> {
  input: I;
  return: unknown;
}

export type $$CallHKT<HKT extends $$HKT, I extends HKT["input"]> = (HKT & { input: I })["return"];

interface DeepFragRecurseGuard<F, Lo> extends $<F, Values<Lo>> { readonly l: Values<Lo> }

type $$Type = $$EnumType | $$ScalarType | $$ObjectType;
type $$EnumType = keyof $$EnumTypes;
type $$ScalarType = keyof $$Scalars;

type $$AnyFrag = $$ObjectTypeInfoMap[$$ObjectType]["Frag"];
type $$AnyProp = $$ObjectTypeInfoMap[$$ObjectType]["ShallowFrag"];

type __$$Frag<T extends $$Type> = T extends $$ObjectType ? $$ObjectTypeInfoMap[T]["Frag"] : never;
type _$$Frag<O extends _$$ObjectTypeInfo, T extends O["Prop"]> = (
  __$$Frag<$$ObjectTypeInfoMap[$$PropToType[T]]["Type"][T]>
)
export type $$Frag<T extends $$AnyProp> = _$$Frag<$$ObjectTypeInfoMap[$$PropToType[T]], T>

type $$ObjectTypeInfoMap = typeof $$objectTypeInfoMap;

type __$$DeepFrag<O extends _$$ObjectTypeInfo, F extends O["DeepProp"]> =
  _$$DeepFrag<O> & { $$shallow: O["ShallowFrag"] }

type _$$DeepFrag<O extends _$$ObjectTypeInfo> =
  { [F in O["DeepProp"]]: DeepFragRecurseGuard<F, __$$DeepFrag<$$ObjectTypeInfoMap[O["DeepType"][F]], F>> }

type Values<T> = T[keyof T];

type $$InflateObjectType<O extends _$$ObjectTypeInfo, HKT extends $$HKT<O["Prop"]>> = {
  [K in O["Name"]]: $$CallHKT<O["Wrap"][O["NameProp"][K]], $$CallHKT<HKT, O["NameProp"][K]>>
}

type ___$$Result<O extends _$$ObjectTypeInfo, F extends O["Frag"], P extends O["Prop"], T extends $$Type> =
  T extends $$ScalarType ?
  $$Scalars[T] :
  T extends $$EnumType ?
  $$EnumTypes[T] :
  T extends $$ObjectType ?
  $$Result<T, Extract<F, $<P, any>>["l"]> :
  never

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface __$$Result<O extends _$$ObjectTypeInfo, F extends O["Frag"]> extends $$HKT<O["Prop"]> {
  return: ___$$Result<O, F, this["input"], O["Type"][this["input"]]>;
}

type _$$Result<O extends _$$ObjectTypeInfo, F extends O["Frag"]> = (
  Pick<$$InflateObjectType<O, __$$Result<O, F>>, O["PropName"][Extract<F, string> | Extract<F, { f: string }>["f"]]>
)

export type $$Result<O extends $$ObjectType, F extends $$ObjectTypeInfoMap[O]["Frag"]> = (
  _$$Result<$$ObjectTypeInfoMap[O], F>
)

export type _$$ObjectTypeInfo = $$ObjectTypeInfo<any, any, any, any, any, any, any, any, any, any, any, any>;

export type $$PropToType = {
  [K in $$ObjectType]: (contravariant: Record<$$ObjectTypeInfoMap[K]["Prop"], K>) => void
}[$$ObjectType] extends (contravariant: infer T) => void ? T : void;

export class $$ObjectTypeInfo<
  ShallowProp extends keyof ShallowPropName & string,
  ShallowName extends keyof ShallowNameProp & string,
  ShallowPropName extends Record<ShallowProp, ShallowName>,
  ShallowNameProp extends Record<ShallowName, ShallowProp>,
  ShallowType extends Record<ShallowProp, $$ScalarType | $$EnumType>,
  ShallowWrap extends Record<ShallowProp, $$HKT>,
  DeepProp extends keyof DeepPropName & string,
  DeepName extends keyof DeepNameProp & string,
  DeepPropName extends Record<DeepProp, DeepName>,
  DeepNameProp extends Record<DeepName, DeepProp>,
  DeepType extends Record<DeepProp, $$ObjectType>,
  DeepWrap extends Record<DeepProp, $$HKT>,
  > {

  declare ShallowProp: ShallowProp;
  declare ShallowName: ShallowName;
  declare ShallowPropName: ShallowPropName;
  declare ShallowNameProp: ShallowNameProp;
  declare ShallowType: ShallowType;
  declare ShallowWrap: ShallowWrap;
  declare DeepProp: DeepProp;
  declare DeepName: DeepName;
  declare DeepPropName: DeepPropName;
  declare DeepNameProp: DeepNameProp;
  declare DeepType: DeepType;
  declare DeepWrap: DeepWrap;

  declare ShallowFrag: ShallowProp;
  declare DeepFrag: Values<_$$DeepFrag<this>>;
  declare PropName: ShallowPropName & DeepPropName;
  declare NameProp: ShallowNameProp & DeepNameProp;
  declare Wrap: ShallowWrap & DeepWrap;
  declare Type: DeepType & ShallowType;
  declare Prop: ShallowProp | DeepProp;
  declare Name: ShallowName | DeepName;
  declare Frag: this["ShallowFrag"] | this["DeepFrag"];

  constructor(
    public shallowPropToName: ShallowPropName,
    public shallowNameToProp: ShallowNameProp,
    _0: ShallowType,
    _1: ShallowWrap,
    public deepPropToName: DeepPropName,
    public deepNameToProp: DeepNameProp,
    _2: DeepType,
    _3: DeepWrap,
  ){

  }

}

export interface $$Identity<I = unknown> extends $$HKT<I> {
  return: this["input"];
}

export interface $$Optional<HKT extends $$HKT = $$Identity> extends $$HKT {
  return: $$CallHKT<HKT, this["input"]> | null;
}

export interface $$Array<HKT extends $$HKT = $$Identity> extends $$HKT {
  return: $$CallHKT<HKT, this["input"]>[];
}

export type $$DeepArray<T> = (T | $$DeepArray<T>)[];
export type $$UnwrapDeepArray<T extends $$DeepArray<any>> = T extends $$DeepArray<infer U> ? U : never;

export type $$GqxReturn = $$HKT<$$OperationId>;
type $$CallGqxReturn<R extends $$GqxReturn, I extends $$OperationId> = (R & { id: I })["return"];
export type $$GqxImpl<R extends $$GqxReturn> = <I extends $$OperationId>(id: I) => $$CallGqxReturn<R, I>;

const __wrap__ = Symbol();

type $$Wrap<X, Y> = X extends $<infer F, infer L> ? $<F, $$Wrap<L, Y>> : never;
type $$MapWrap<O, F> = {
  [K in keyof O | typeof __wrap__ | "$"]:
  K extends "$" ?
  <T extends $$AnyFrag>(x: $$DeepArray<T>) =>
    $<F, O extends { [__wrap__]: infer X } ? $$Wrap<X, T> : T>[] :
  K extends keyof O ?
  O[K] extends $$AnyFrag ?
  $<F, O[K]> :
  $$MapWrap<O[K], F> :
  $<F, null>
}

const $$mapWrap = <O, F>(o: () => O, f: F): $$MapWrap<O, F> =>
  // @ts-ignore
  new Proxy(Object.create(null), {
    get: (t, k: string) => t[k] || (t[k] =
      k !== "$" ?
        o()[k].$ ?
          $$mapWrap(() => o()[k], f) :
          $(f, o()[k]) :
        // @ts-ignore
        (a: any) => ("$" in o() ? o().$(a) : a).flat(Infinity).map((a: any) => $(f, a))
    ),
  })

export const $$reconstruct = <I extends $$OperationId>(id: I, input: $$Input<I>, props: $$Frag<I>) => {
  interface Subs { [k: string]: true | Subs }
  const subs: Subs = {};
  populateSubs(props, subs);
  const frag = genFrag(subs);
  const inputKeys = Object.keys(input);
  const inputDef = inputKeys.length ? `(${inputKeys.map(k =>
    `$${k}: ${id.inputTypes[k]}`
  ).join(", ")})` : "";
  const inputPass = inputKeys.length ? `(${inputKeys.map(k =>
    `${k}: $${k}`
  )})` : "";
  const request = `${id.typeProp}${inputDef} { ${id.prop}${inputPass}${frag} }`;
  return request;

  function genFrag(subs: Subs){
    return (
      Object.keys(subs).length ?
        `{ ${Object.entries(subs).map(([k, v]) => v === true ? k : k + " " + genFrag(v)).join(" ")} }` :
        ""
    );
  }

  function populateSubs(prop: $$AnyFrag | $$DeepArray<$$AnyFrag>, subs: Subs | true){
    if(prop instanceof Array)
      return prop.map(p => populateSubs(p, subs));
    if(subs === true)
      return;
    if(typeof prop === "string")
      return subs[prop.split("$")[1]] = true;
    const name = prop.f.split("$")[1];
    populateSubs(prop.l, subs[name] = (subs[name] || {}));
  }
}

export type Category = (
  | "Horror"
  | "SciFi"
  | "Fiction"
  | "Fantasy"
  | "NonFiction"
  | "Romance"
  | "Historical"
  | "Mystery"
  | "Childrens"
  | "Dystopian"
  | "Utopian"
  | "Religous"
)

export type Language = (
  | "aa"
  | "ab"
  | "af"
  | "ak"
  | "sq"
  | "am"
  | "ar"
  | "an"
  | "hy"
  | "as"
  | "av"
  | "ae"
  | "ay"
  | "az"
  | "ba"
  | "bm"
  | "eu"
  | "be"
  | "bn"
  | "bh"
  | "bi"
  | "bo"
  | "bs"
  | "br"
  | "bg"
  | "my"
  | "ca"
  | "cs"
  | "ch"
  | "ce"
  | "zh"
  | "cu"
  | "cv"
  | "kw"
  | "co"
  | "cr"
  | "cy"
  | "cs"
  | "da"
  | "de"
  | "dv"
  | "nl"
  | "dz"
  | "el"
  | "en"
  | "eo"
  | "et"
  | "eu"
  | "ee"
  | "fo"
  | "fa"
  | "fj"
  | "fi"
  | "fr"
  | "fr"
  | "fy"
  | "ff"
  | "ka"
  | "de"
  | "gd"
  | "ga"
  | "gl"
  | "gv"
  | "el"
  | "gn"
  | "gu"
  | "ht"
  | "ha"
  | "he"
  | "hz"
  | "hi"
  | "ho"
  | "hr"
  | "hu"
  | "hy"
  | "ig"
  | "is"
  | "io"
  | "ii"
  | "iu"
  | "ie"
  | "ia"
  | "id"
  | "ik"
  | "is"
  | "it"
  | "jv"
  | "ja"
  | "kl"
  | "kn"
  | "ks"
  | "ka"
  | "kr"
  | "kk"
  | "km"
  | "ki"
  | "rw"
  | "ky"
  | "kv"
  | "kg"
  | "ko"
  | "kj"
  | "ku"
  | "lo"
  | "la"
  | "lv"
  | "li"
  | "ln"
  | "lt"
  | "lb"
  | "lu"
  | "lg"
  | "mk"
  | "mh"
  | "ml"
  | "mi"
  | "mr"
  | "ms"
  | "mk"
  | "mg"
  | "mt"
  | "mn"
  | "mi"
  | "ms"
  | "my"
  | "na"
  | "nv"
  | "nr"
  | "nd"
  | "ng"
  | "ne"
  | "nl"
  | "nn"
  | "nb"
  | "no"
  | "ny"
  | "oc"
  | "oj"
  | "or"
  | "om"
  | "os"
  | "pa"
  | "fa"
  | "pi"
  | "pl"
  | "pt"
  | "ps"
  | "qu"
  | "rm"
  | "ro"
  | "ro"
  | "rn"
  | "ru"
  | "sg"
  | "sa"
  | "si"
  | "sk"
  | "sk"
  | "sl"
  | "se"
  | "sm"
  | "sn"
  | "sd"
  | "so"
  | "st"
  | "es"
  | "sq"
  | "sc"
  | "sr"
  | "ss"
  | "su"
  | "sw"
  | "sv"
  | "ty"
  | "ta"
  | "tt"
  | "te"
  | "tg"
  | "tl"
  | "th"
  | "bo"
  | "ti"
  | "to"
  | "tn"
  | "ts"
  | "tk"
  | "tr"
  | "tw"
  | "ug"
  | "uk"
  | "ur"
  | "uz"
  | "ve"
  | "vi"
  | "vo"
  | "cy"
  | "wa"
  | "wo"
  | "xh"
  | "yi"
  | "yo"
  | "za"
  | "zh"
  | "zu"
)

export interface $$EnumTypes {
  Category: Category,
  Language: Language,
}

export interface Cursor {
  start: $$Scalars["Int"],
  limit: $$Scalars["Int"],
}

export interface BookFilter {
  title?: ($$Scalars["String"] | null | void),
  author?: (AuthorFilter | null | void),
  categories?: (Category[] | null | void),
}

export interface AuthorFilter {
  name?: ($$Scalars["String"] | null | void),
}

export type $$ObjectType = (
  | "Author"
  | "Book"
)

const $$objectTypeInfoMap = {
  Author: new $$ObjectTypeInfo(
    {
      "Author$id": "id",
      "Author$name": "name",
    },
    {
      "id": "Author$id",
      "name": "Author$name",
    },
    null as any as {
      "Author$id": "ID",
      "Author$name": "String",
    },
    null as any as {
      "Author$id": $$Identity,
      "Author$name": $$Identity,
    },
    {
      "Author$books": "books",
      "Author$favoriteBook": "favoriteBook",
    },
    {
      "books": "Author$books",
      "favoriteBook": "Author$favoriteBook",
    },
    null as any as {
      "Author$books": "Book",
      "Author$favoriteBook": "Book",
    },
    null as any as {
      "Author$books": $$Array<$$Identity>,
      "Author$favoriteBook": $$Identity,
    },
  ),
  Book: new $$ObjectTypeInfo(
    {
      "Book$categories": "categories",
      "Book$description": "description",
      "Book$id": "id",
      "Book$language": "language",
      "Book$title": "title",
    },
    {
      "categories": "Book$categories",
      "description": "Book$description",
      "id": "Book$id",
      "language": "Book$language",
      "title": "Book$title",
    },
    null as any as {
      "Book$categories": "Category",
      "Book$description": "String",
      "Book$id": "ID",
      "Book$language": "Language",
      "Book$title": "String",
    },
    null as any as {
      "Book$categories": $$Array<$$Identity>,
      "Book$description": $$Identity,
      "Book$id": $$Identity,
      "Book$language": $$Identity,
      "Book$title": $$Identity,
    },
    {
      "Book$author": "author",
      "Book$translation": "translation",
    },
    {
      "author": "Book$author",
      "translation": "Book$translation",
    },
    null as any as {
      "Book$author": "Author",
      "Book$translation": "Book",
    },
    null as any as {
      "Book$author": $$Identity,
      "Book$translation": $$Optional<$$Identity>,
    },
  ),
}

export type Author$ = $$ObjectTypeInfoMap["Author"]["Frag"];
export type Book$ = $$ObjectTypeInfoMap["Book"]["Frag"];

const _Author = {
  id: "Author$id",
  name: "Author$name",
};

export const Author: typeof _Author & {
  books: $$MapWrap<typeof$Book, "Author$books">,
  favoriteBook: $$MapWrap<typeof$Book, "Author$favoriteBook">,
} = {
  ..._Author,
  books: $$mapWrap(() => Book, "Author$books"),
  favoriteBook: $$mapWrap(() => Book, "Author$favoriteBook"),
};

type typeof$Author = typeof Author

const _Book = {
  categories: "Book$categories",
  description: "Book$description",
  id: "Book$id",
  language: "Book$language",
  title: "Book$title",
};

export const Book: typeof _Book & {
  author: $$MapWrap<typeof$Author, "Book$author">,
  translation: $$MapWrap<typeof$Book, "Book$translation">,
} = {
  ..._Book,
  author: $$mapWrap(() => Author, "Book$author"),
  translation: $$mapWrap(() => Book, "Book$translation"),
};

type typeof$Book = typeof Book

export type $Author<F extends $$DeepArray<Author$>> = $$Result<"Author", $$UnwrapDeepArray<F>>

export type $Book<F extends $$DeepArray<Book$>> = $$Result<"Book", $$UnwrapDeepArray<F>>

export const $$generateObject = <R extends $$GqxReturn>(f: $$GqxImpl<R>) => ({
  query: {
    getAuthor: f("Query$getAuthor"),
    getBook: f("Query$getBook"),
    listBooks: f("Query$listBooks"),
  },
})

export namespace $$Directives {
  export namespace Query {
    export type getAuthor = {}
    export type getBook = {}
    export type listBooks = {}
  }
  export namespace Book {
    export type id = {}
    export type language = {}
    export type author = {}
    export type title = {}
    export type description = {}
    export type categories = {}
    export type translation = {}
  }
  export namespace Author {
    export type id = {}
    export type name = {}
    export type books = {}
    export type favoriteBook = {}
  }
  export type $<T> =
    T extends typeof Query$getAuthor ? Query.getAuthor :
    T extends typeof Query$getBook ? Query.getBook :
    T extends typeof Query$listBooks ? Query.listBooks :
    T extends typeof Book$id ? Book.id :
    T extends typeof Book$language ? Book.language :
    T extends typeof Book$author ? Book.author :
    T extends typeof Book$title ? Book.title :
    T extends typeof Book$description ? Book.description :
    T extends typeof Book$categories ? Book.categories :
    T extends typeof Book$translation ? Book.translation :
    T extends typeof Author$id ? Author.id :
    T extends typeof Author$name ? Author.name :
    T extends typeof Author$books ? Author.books :
    T extends typeof Author$favoriteBook ? Author.favoriteBook :
    never
}