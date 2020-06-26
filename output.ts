/* eslint-disable */

import { $$Scalars } from "./scalars";

export interface $<F, L> { readonly f: F; readonly l: L }
export const $ = <F, L>(f: F, l: L) => ({ f, l });

export interface $$HKT<I = unknown> {
  input: I;
  return: unknown;
}

export type $$CallHKT<HKT extends $$HKT, I extends HKT["input"]> = (HKT & { input: I })["return"];

interface DeepFragRecurseGuard<F, Lo> extends $<F, Values<Lo>> { readonly l: Values<Lo> }

export type $$Type = $$EnumType | $$ScalarType | $$ObjectType;
export type $$EnumType = keyof $$EnumTypes;
export type $$ScalarType = keyof $$Scalars;

export type $$AnyFrag = $$ObjectTypeInfoMap[$$ObjectType]["Frag"];
export type $$AnyProp = $$ObjectTypeInfoMap[$$ObjectType]["Prop"];

export type $$Input<T extends $$AnyProp> = $$PropToInputType[T];

type _$$Frag<T extends $$Type> = T extends $$ObjectType ? $$ObjectTypeInfoMap[T]["Frag"] : never;
export type $$Frag<T extends $$AnyProp> = $$DeepArray<_$$Frag<$$PropToOutput[T]>>;

type _$$Output<T extends $$Type, F extends _$$Frag<T>> =
  T extends $$ObjectType ?
    $$Result<T, F> :
    T extends $$ScalarType ?
      $$Scalars[T] :
      T extends $$EnumType ?
        $$EnumTypes[T] :
        never
export type $$Output<T extends $$AnyProp, F extends $$Frag<T>> =
  $$CallHKT<$$PropToWrap[T], _$$Output<$$PropToOutput[T], $$UnwrapDeepArray<F, _$$Frag<$$PropToOutput[T]>>>>;

export type $$ObjectTypeInfoMap = typeof $$objectTypeInfoMap;

type __$$DeepFrag<O extends _$$ObjectTypeInfo, F extends O["DeepProp"]> =
  _$$DeepFrag<O> & { $$shallow: O["ShallowFrag"] }

type _$$DeepFrag<O extends _$$ObjectTypeInfo> =
  { [F in O["DeepProp"]]: DeepFragRecurseGuard<F, __$$DeepFrag<$$ObjectTypeInfoMap[O["DeepType"][F]], F>> }

type Values<T> = T[keyof T];

export type $$InflateObjectType<O extends _$$ObjectTypeInfo, HKT extends $$HKT<O["Prop"]>> = {
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

export type $$Result<O extends $$ObjectType, F extends $$ObjectTypeInfoMap[O]["Frag"]> =
  $$Expand<_$$Result<$$ObjectTypeInfoMap[O], F>>

export type $$Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

export type _$$ObjectTypeInfo = $$ObjectTypeInfo<any, any, any, any, any, any, any, any, any, any>;

export type $$PropToInputType = {
  [K in keyof $$PropToInfo]: $$PropToInfo[K]["InputTypes"][Extract<K, keyof $$PropToInfo[K]["InputTypes"]>];
}

export type $$PropToWrap = {
  [K in keyof $$PropToInfo]: $$PropToInfo[K]["Wrap"][Extract<K, keyof $$PropToInfo[K]["Wrap"]>];
}

export type $$PropToOutput = {
  [K in keyof $$PropToInfo]: $$PropToInfo[K]["Type"][Extract<K, keyof $$PropToInfo[K]["Type"]>];
}

export type $$PropToInfo = {
  [K in keyof $$PropToType]: $$ObjectTypeInfoMap[$$PropToType[K]]
}

export type $$PropToType = {
  [K in $$ObjectType]: (contravariant: Record<$$ObjectTypeInfoMap[K]["Prop"], K>) => void
}[$$ObjectType] extends (contravariant: infer T) => void ? T : void;

export class $$ObjectTypeInfo<
  ShallowPropName extends Record<string, keyof ShallowNameProp>,
  ShallowNameProp extends Record<string, keyof ShallowPropName>,
  ShallowType extends Record<keyof ShallowPropName, $$ScalarType | $$EnumType>,
  ShallowWrap extends Record<keyof ShallowPropName, $$HKT>,
  DeepPropName extends Record<string, keyof DeepNameProp>,
  DeepNameProp extends Record<string, keyof DeepPropName>,
  DeepType extends Record<keyof DeepPropName, $$ObjectType>,
  DeepWrap extends Record<keyof DeepPropName, $$HKT>,
  InputTypes extends Record<keyof ShallowPropName | keyof DeepPropName, {}>,
  Directives extends Record<keyof ShallowPropName | keyof DeepPropName, Record<string, {}>>,
  > {

  declare ShallowProp: keyof ShallowPropName;
  declare ShallowName: keyof ShallowNameProp;
  declare ShallowPropName: ShallowPropName;
  declare ShallowNameProp: ShallowNameProp;
  declare ShallowType: ShallowType;
  declare ShallowWrap: ShallowWrap;
  declare DeepProp: keyof DeepPropName;
  declare DeepName: keyof DeepNameProp;
  declare DeepPropName: DeepPropName;
  declare DeepNameProp: DeepNameProp;
  declare DeepType: DeepType;
  declare DeepWrap: DeepWrap;
  declare InputTypes: InputTypes;
  declare Directives: Directives;

  declare ShallowFrag: this["ShallowProp"];
  declare DeepFrag: Values<_$$DeepFrag<this>>;
  declare PropName: ShallowPropName & DeepPropName;
  declare NameProp: ShallowNameProp & DeepNameProp;
  declare Wrap: ShallowWrap & DeepWrap;
  declare Type: DeepType & ShallowType;
  declare Prop: this["ShallowProp"] | this["DeepProp"];
  declare Name: this["ShallowName"] | this["DeepName"];
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
    _4: InputTypes,
    public inputTypeStrings: Record<keyof ShallowPropName | keyof DeepPropName, any>,
    public directives: Directives,
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
export type $$UnwrapDeepArray<A extends $$DeepArray<T>, T = any> =
  Extract<A extends $$DeepArray<infer U> ? U : never, T>;

export type $$GqxReturn = $$HKT<$$AnyProp>;
type $$CallGqxReturn<R extends $$GqxReturn, I extends $$AnyProp> = $$CallHKT<R, I>;
export type $$GqxImpl<R extends $$GqxReturn> = <I extends $$AnyProp>(id: I) => $$CallGqxReturn<R, I>;

declare const __wrap__: unique symbol;

type $$Wrap<X, Y> = X extends $<infer F, infer L> ? $<F, $$Wrap<L, Y>> : never;
type $$MapWrap<O, F> = {
  [K in keyof O | typeof __wrap__ | "$"]:
  K extends "$" ?
  <T extends $$DeepArray<$$AnyFrag>>(...x: T) =>
    $<F, O extends { [__wrap__]: infer X } ? $$Wrap<X, $$UnwrapDeepArray<T>> : $$UnwrapDeepArray<T>>[] :
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
        (o as any)()[k].$ ?
          $$mapWrap(() => (o as any)()[k], f) :
          $(f, (o as any)()[k]) :
        // @ts-ignore
        (...a: any) => ("$" in o() ? o().$(...a) : a).flat(Infinity).map((a: any) => $(f, a))
    ),
  })

export const $$reconstruct = <I extends $$AnyProp>(id: I, input: $$Input<I>, props: $$Frag<I>) => {
  interface Subs { [k: string]: true | Subs }
  const subs: Subs = {};
  populateSubs(props, subs);
  const frag = genFrag(subs);
  const inputKeys = Object.keys(input);
  const inputDef = inputKeys.length ? `(${inputKeys.map(k =>
    `$${k}: ${($$objectTypeInfoMap as any)[id.split("$")[0]].inputTypeStrings[id][k]}`
  ).join(", ")})` : "";
  const inputPass = inputKeys.length ? `(${inputKeys.map(k =>
    `${k}: $${k}`
  )})` : "";
  const request = `${id.split("$")[0].toLowerCase()}${inputDef} { ${id.split("$")[1]}${inputPass}${frag} }`;
  return request;

  function genFrag(subs: Subs): string{
    return (
      Object.keys(subs).length ?
        `{ ${Object.entries(subs).map(([k, v]) => v === true ? k : k + " " + genFrag(v)).join(" ")} }` :
        ""
    );
  }

  function populateSubs(prop: $$AnyFrag | $$DeepArray<$$AnyFrag>, subs: Subs | true): void{
    if(prop instanceof Array)
      prop.map(p => populateSubs(p, subs));
    else if(subs === true)
      return;
    else if(typeof prop === "string")
      subs[prop.split("$")[1]] = true;
    else {
      const name = prop.f.split("$")[1];
      populateSubs(prop.l, subs[name] = (subs[name] || {}));
    }
  }
}

export type Category = (
  | "Childrens"
  | "Dystopian"
  | "Fantasy"
  | "Fiction"
  | "Historical"
  | "Horror"
  | "Mystery"
  | "NonFiction"
  | "Religous"
  | "Romance"
  | "SciFi"
  | "Utopian"
)

export type Language = (
  | "aa" | "ab" | "ae" | "af" | "ak" | "am" | "an" | "ar" | "as" | "av" | "ay"
  | "az" | "ba" | "be" | "bg" | "bh" | "bi" | "bm" | "bn" | "bo" | "bo" | "br"
  | "bs" | "ca" | "ce" | "ch" | "co" | "cr" | "cs" | "cs" | "cu" | "cv" | "cy"
  | "cy" | "da" | "de" | "de" | "dv" | "dz" | "ee" | "el" | "el" | "en" | "eo"
  | "es" | "et" | "eu" | "eu" | "fa" | "fa" | "ff" | "fi" | "fj" | "fo" | "fr"
  | "fr" | "fy" | "ga" | "gd" | "gl" | "gn" | "gu" | "gv" | "ha" | "he" | "hi"
  | "ho" | "hr" | "ht" | "hu" | "hy" | "hy" | "hz" | "ia" | "id" | "ie" | "ig"
  | "ii" | "ik" | "io" | "is" | "is" | "it" | "iu" | "ja" | "jv" | "ka" | "ka"
  | "kg" | "ki" | "kj" | "kk" | "kl" | "km" | "kn" | "ko" | "kr" | "ks" | "ku"
  | "kv" | "kw" | "ky" | "la" | "lb" | "lg" | "li" | "ln" | "lo" | "lt" | "lu"
  | "lv" | "mg" | "mh" | "mi" | "mi" | "mk" | "mk" | "ml" | "mn" | "mr" | "ms"
  | "ms" | "mt" | "my" | "my" | "na" | "nb" | "nd" | "ne" | "ng" | "nl" | "nl"
  | "nn" | "no" | "nr" | "nv" | "ny" | "oc" | "oj" | "om" | "or" | "os" | "pa"
  | "pi" | "pl" | "ps" | "pt" | "qu" | "rm" | "rn" | "ro" | "ro" | "ru" | "rw"
  | "sa" | "sc" | "sd" | "se" | "sg" | "si" | "sk" | "sk" | "sl" | "sm" | "sn"
  | "so" | "sq" | "sq" | "sr" | "ss" | "st" | "su" | "sv" | "sw" | "ta" | "te"
  | "tg" | "th" | "ti" | "tk" | "tl" | "tn" | "to" | "tr" | "ts" | "tt" | "tw"
  | "ty" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "wa" | "wo" | "xh"
  | "yi" | "yo" | "za" | "zh" | "zh" | "zu"
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
  title?: ($$Scalars["String"] | null | undefined),
  author?: (AuthorFilter | null | undefined),
  categories?: (Category[] | null | undefined),
}

export interface AuthorFilter {
  name?: ($$Scalars["String"] | null | undefined),
}

export type $$ObjectType = (
  | "Author"
  | "Book"
  | "Query"
)

const $$objectTypeInfoMap = {
  Author: new $$ObjectTypeInfo(
    {
      Author$id: "id",
      Author$name: "name",
    },
    {
      id: "Author$id",
      name: "Author$name",
    },
    null as any as {
      Author$id: "ID",
      Author$name: "String",
    },
    null as any as {
      Author$id: $$Identity,
      Author$name: $$Identity,
    },
    {
      Author$books: "books",
      Author$favoriteBook: "favoriteBook",
    },
    {
      books: "Author$books",
      favoriteBook: "Author$favoriteBook",
    },
    null as any as {
      Author$books: "Book",
      Author$favoriteBook: "Book",
    },
    null as any as {
      Author$books: $$Array<$$Identity>,
      Author$favoriteBook: $$Identity,
    },
    null as any as {
      Author$books: {},
      Author$favoriteBook: {},
      Author$id: {},
      Author$name: {},
    },
    {
      Author$books: {},
      Author$favoriteBook: {},
      Author$id: {},
      Author$name: {},
    },
    {
      Author$books: {},
      Author$favoriteBook: {},
      Author$id: {},
      Author$name: {},
    },
  ),
  Book: new $$ObjectTypeInfo(
    {
      Book$categories: "categories",
      Book$description: "description",
      Book$id: "id",
      Book$language: "language",
      Book$title: "title",
    },
    {
      categories: "Book$categories",
      description: "Book$description",
      id: "Book$id",
      language: "Book$language",
      title: "Book$title",
    },
    null as any as {
      Book$categories: "Category",
      Book$description: "String",
      Book$id: "ID",
      Book$language: "Language",
      Book$title: "String",
    },
    null as any as {
      Book$categories: $$Array<$$Identity>,
      Book$description: $$Identity,
      Book$id: $$Identity,
      Book$language: $$Identity,
      Book$title: $$Identity,
    },
    {
      Book$author: "author",
      Book$translation: "translation",
    },
    {
      author: "Book$author",
      translation: "Book$translation",
    },
    null as any as {
      Book$author: "Author",
      Book$translation: "Book",
    },
    null as any as {
      Book$author: $$Identity,
      Book$translation: $$Optional<$$Identity>,
    },
    null as any as {
      Book$author: {},
      Book$categories: {},
      Book$description: {},
      Book$id: {},
      Book$language: {},
      Book$title: {},
      Book$translation: {
        language: Language,
      },
    },
    {
      Book$author: {},
      Book$categories: {},
      Book$description: {},
      Book$id: {},
      Book$language: {},
      Book$title: {},
      Book$translation: {
        language: "Language!",
      },
    },
    {
      Book$author: {},
      Book$categories: {},
      Book$description: {},
      Book$id: {},
      Book$language: {},
      Book$title: {},
      Book$translation: {},
    },
  ),
  Query: new $$ObjectTypeInfo(
    {}, {}, {}, {},
    {
      Query$getAuthor: "getAuthor",
      Query$getBook: "getBook",
      Query$listBooks: "listBooks",
    },
    {
      getAuthor: "Query$getAuthor",
      getBook: "Query$getBook",
      listBooks: "Query$listBooks",
    },
    null as any as {
      Query$getAuthor: "Author",
      Query$getBook: "Book",
      Query$listBooks: "Book",
    },
    null as any as {
      Query$getAuthor: $$Identity,
      Query$getBook: $$Identity,
      Query$listBooks: $$Array<$$Identity>,
    },
    null as any as {
      Query$getAuthor: {
        id: $$Scalars["ID"],
      },
      Query$getBook: {
        id: $$Scalars["ID"],
      },
      Query$listBooks: {
        cursor?: (Cursor | null | undefined),
        filter?: (BookFilter | null | undefined),
      },
    },
    {
      Query$getAuthor: {
        id: "ID!",
      },
      Query$getBook: {
        id: "ID!",
      },
      Query$listBooks: {
        cursor: "Cursor",
        filter: "BookFilter",
      },
    },
    {
      Query$getAuthor: {},
      Query$getBook: {},
      Query$listBooks: {},
    },
  ),
}

export type Author$ = $$ObjectTypeInfoMap["Author"]["Frag"];
export type Book$ = $$ObjectTypeInfoMap["Book"]["Frag"];
export type Query$ = $$ObjectTypeInfoMap["Query"]["Frag"];

const Author$$ = <F extends $$DeepArray<Author$>>(...frag: F): F[number][] => frag;

const _Author = {
  $: Author$$,
  id: "Author$id",
  name: "Author$name",
} as const;

export const Author: typeof _Author & {
  books: $$MapWrap<typeof$Book, "Author$books">,
  favoriteBook: $$MapWrap<typeof$Book, "Author$favoriteBook">,
} = {
  ..._Author,
  books: $$mapWrap(() => Book, "Author$books"),
  favoriteBook: $$mapWrap(() => Book, "Author$favoriteBook"),
};

type typeof$Author = typeof Author

const Book$$ = <F extends $$DeepArray<Book$>>(...frag: F): F[number][] => frag;

const _Book = {
  $: Book$$,
  categories: "Book$categories",
  description: "Book$description",
  id: "Book$id",
  language: "Book$language",
  title: "Book$title",
} as const;

export const Book: typeof _Book & {
  author: $$MapWrap<typeof$Author, "Book$author">,
  translation: $$MapWrap<typeof$Book, "Book$translation">,
} = {
  ..._Book,
  author: $$mapWrap(() => Author, "Book$author"),
  translation: $$mapWrap(() => Book, "Book$translation"),
};

type typeof$Book = typeof Book

const Query$$ = <F extends $$DeepArray<Query$>>(...frag: F): F[number][] => frag;

export const Query: {
  $: typeof Query$$,
  getAuthor: $$MapWrap<typeof$Author, "Query$getAuthor">,
  getBook: $$MapWrap<typeof$Book, "Query$getBook">,
  listBooks: $$MapWrap<typeof$Book, "Query$listBooks">,
} = {
  $: Query$$,
  getAuthor: $$mapWrap(() => Author, "Query$getAuthor"),
  getBook: $$mapWrap(() => Book, "Query$getBook"),
  listBooks: $$mapWrap(() => Book, "Query$listBooks"),
};

type typeof$Query = typeof Query

export type $Author<F extends $$DeepArray<Author$>> = $$Result<"Author", $$UnwrapDeepArray<F>>
export type $Book<F extends $$DeepArray<Book$>> = $$Result<"Book", $$UnwrapDeepArray<F>>
export type $Query<F extends $$DeepArray<Query$>> = $$Result<"Query", $$UnwrapDeepArray<F>>

export const $$generateObject = <R extends $$GqxReturn>(f: $$GqxImpl<R>) => ({
  query: {
    getAuthor: f("Query$getAuthor"),
    getBook: f("Query$getBook"),
    listBooks: f("Query$listBooks"),
  },
})

export type $$TypeDirectives = typeof $$typeDirectives;
export const $$typeDirectives = {
  Query: {},
  Book: {},
  Author: {
    testOnAuthor: {},
  },
  Category: {},
  Language: {},
}

