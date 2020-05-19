/* eslint-disable */

type Int = number;
type Float = number;
type String = string;
type ID = string;
type Boolean = boolean;

interface $<F, L> { f: F; l: L }
const $$ = <F, L>(f: F, l: L) => ({ f, l });

export type $$DeepArray<T> = (T | $$DeepArray<T>)[];
export type $$UnwrapDeepArray<T extends $$DeepArray<any>> = T extends $$DeepArray<infer U> ? U : never;

export interface $$GqxFunc {
  id: $$OperationId;
  result: unknown;
}
type $$CallGqxFunc<F extends $$GqxFunc, I extends $$OperationId> = (F & { id: I })["result"];
export type $$GqxImpl<F extends $$GqxFunc> = <I extends $$OperationId>(id: I) => $$CallGqxFunc<F, I>;

export interface $$OperationId {
  typeProp: string;
  type: string;
  prop: string;
  inputTypes: { [x: string]: string };
}

const __wrap__ = Symbol();

type $$Wrap<X, Y> = X extends $<infer F, infer L> ? $<F, $$Wrap<L, Y>> : never;
type $$MapWrap<O, F> = {
  [K in keyof O | typeof __wrap__ | "$"]:
    K extends "$" ?
      <T extends $_>(x: $$DeepArray<T>) =>
        $<F, O extends { [__wrap__]: infer X } ? $$Wrap<X, T> : T>[] :
      K extends keyof O ?
        O[K] extends $_ ?
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
          $$(f, o()[k]) :
        // @ts-ignore
        (a: any) => ("$" in o() ? o().$(a) : a).flat(Infinity).map((a: any) => $$(f, a))
    ),
  })

const $$reconstruct = <I extends $$OperationId>(id: I, input: $$Input.$<I>, props: $$Frag.$<I>) => {
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

  function populateSubs(prop: $_ | $$DeepArray<$_>, subs: Subs | true){
    if(prop instanceof Array)
      return prop.map(p => populateSubs(p, subs));
    if(subs === true)
      return;
    if("prop" in prop)
      subs[prop.prop] = true;
    else
      populateSubs(prop.l, subs[prop.f.prop] = (subs[prop.f.prop] || {}));
  }
}

export type Category =
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
export type Language =
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

export interface Cursor {
  start: Int;
  limit: Int;
}

export interface BookFilter {
  title?: (String | null | void);
  author?: (AuthorFilter | null | void);
  categories?: (Category[] | null | void);
}

export interface AuthorFilter {
  name?: (String | null | void);
}

class Author$id { private static _: any; static type = "Author"; static prop = "id"; }
class Author$name { private static _: any; static type = "Author"; static prop = "name"; }
class Author$books { private static _: any; static type = "Author"; static prop = "books"; }
class Author$favoriteBook { private static _: any; static type = "Author"; static prop = "favoriteBook"; }
class Book$id { private static _: any; static type = "Book"; static prop = "id"; }
class Book$language { private static _: any; static type = "Book"; static prop = "language"; }
class Book$author { private static _: any; static type = "Book"; static prop = "author"; }
class Book$title { private static _: any; static type = "Book"; static prop = "title"; }
class Book$description { private static _: any; static type = "Book"; static prop = "description"; }
class Book$categories { private static _: any; static type = "Book"; static prop = "categories"; }
class Book$translation { private static _: any; static type = "Book"; static prop = "translation"; }

export type Author$ =
  | typeof Author$id
  | typeof Author$name
  | $<typeof Author$books, Book$>
  | $<typeof Author$favoriteBook, Book$>

export type Book$ =
  | typeof Book$categories
  | typeof Book$description
  | typeof Book$id
  | typeof Book$language
  | typeof Book$title
  | $<typeof Book$author, Author$>
  | $<typeof Book$translation, Book$>

export type $_ =
  | Author$
  | Book$

const _Author = {
  id: Author$id,
  name: Author$name,
};

export const Author: typeof _Author & {
  books: $$MapWrap<typeof$Book, typeof Author$books>,
  favoriteBook: $$MapWrap<typeof$Book, typeof Author$favoriteBook>,
} = {
  ..._Author,
  books: $$mapWrap(() => Book, Author$books),
  favoriteBook: $$mapWrap(() => Book, Author$favoriteBook),
};

type typeof$Author = typeof Author

const _Book = {
  categories: Book$categories,
  description: Book$description,
  id: Book$id,
  language: Book$language,
  title: Book$title,
};

export const Book: typeof _Book & {
  author: $$MapWrap<typeof$Author, typeof Book$author>,
  translation: $$MapWrap<typeof$Book, typeof Book$translation>,
} = {
  ..._Book,
  author: $$mapWrap(() => Author, Book$author),
  translation: $$mapWrap(() => Book, Book$translation),
};

type typeof$Book = typeof Book

interface $Author$id { id: ID; }
interface $Author$name { name: String; }
interface $Author$books<F extends Author$> { books: _$Book<Extract<F, $<typeof Author$books, Book$>>["l"]>[]; }
interface $Author$favoriteBook<F extends Author$> { favoriteBook: _$Book<Extract<F, $<typeof Author$favoriteBook, Book$>>["l"]>; }

type _$Author<F extends Author$> =
  & (typeof Author$id extends F ? $Author$id : {})
  & (typeof Author$name extends F ? $Author$name : {})
  & ($<typeof Author$books, any> extends F ? $Author$books<F> : {})
  & ($<typeof Author$favoriteBook, any> extends F ? $Author$favoriteBook<F> : {})
export type $Author<F extends $$DeepArray<Author$>> = _$Author<$$UnwrapDeepArray<F>>;

interface $Book$categories { categories: Category[]; }
interface $Book$description { description: String; }
interface $Book$id { id: ID; }
interface $Book$language { language: Language; }
interface $Book$title { title: String; }
interface $Book$author<F extends Book$> { author: _$Author<Extract<F, $<typeof Book$author, Author$>>["l"]>; }
interface $Book$translation<F extends Book$> { translation: (_$Book<Extract<F, $<typeof Book$translation, Book$>>["l"]> | null); }

type _$Book<F extends Book$> =
  & (typeof Book$categories extends F ? $Book$categories : {})
  & (typeof Book$description extends F ? $Book$description : {})
  & (typeof Book$id extends F ? $Book$id : {})
  & (typeof Book$language extends F ? $Book$language : {})
  & (typeof Book$title extends F ? $Book$title : {})
  & ($<typeof Book$author, any> extends F ? $Book$author<F> : {})
  & ($<typeof Book$translation, any> extends F ? $Book$translation<F> : {})
export type $Book<F extends $$DeepArray<Book$>> = _$Book<$$UnwrapDeepArray<F>>;

class Query$getAuthor {
  private static _: any;
  static typeProp = "query";
  static type = "Query";
  static prop = "getAuthor";
  static inputTypes = {
    id: "ID!",
  };
}

class Query$getBook {
  private static _: any;
  static typeProp = "query";
  static type = "Query";
  static prop = "getBook";
  static inputTypes = {
    id: "ID!",
  };
}

class Query$listBooks {
  private static _: any;
  static typeProp = "query";
  static type = "Query";
  static prop = "listBooks";
  static inputTypes = {
    cursor: "Cursor",
    filter: "BookFilter",
  };
}

export namespace $$Input {
  export namespace Query {
    export interface getAuthor {
      id: ID;
    }
    export interface getBook {
      id: ID;
    }
    export interface listBooks {
      cursor?: (Cursor | null | void);
      filter?: (BookFilter | null | void);
    }
  }

  export type $<T> =
    T extends typeof Query$getAuthor ? Query.getAuthor : $$1<T>;
  type $$1<T> =
    T extends typeof Query$getBook ? Query.getBook : $$2<T>;
  type $$2<T> =
    T extends typeof Query$listBooks ? Query.listBooks : never;
}

export namespace $$Frag {
  export namespace Query {
    export type getAuthor = $$DeepArray<Author$>;
    export type getBook = $$DeepArray<Book$>;
    export type listBooks = $$DeepArray<Book$>;
  }

  export type $<T> =
    T extends typeof Query$getAuthor ? Query.getAuthor : $$1<T>;
  type $$1<T> =
    T extends typeof Query$getBook ? Query.getBook : $$2<T>;
  type $$2<T> =
    T extends typeof Query$listBooks ? Query.listBooks : never;
}

export namespace $$Output {
  export namespace Query {
    export type getAuthor<F extends $$Frag.$<typeof Query$getAuthor>> = $Author<F>
    export type getBook<F extends $$Frag.$<typeof Query$getBook>> = $Book<F>
    export type listBooks<F extends $$Frag.$<typeof Query$listBooks>> = $Book<F>[]
  }

  export type $<T, F extends $$Frag.$<T>> =
    T extends typeof Query$getAuthor ? F extends $$Frag.$<typeof Query$getAuthor> ? Query.getAuthor<F> : $$1<T, F> : $$1<T, F>;
  type $$1<T, F extends $$Frag.$<T>> =
    T extends typeof Query$getBook ? F extends $$Frag.$<typeof Query$getBook> ? Query.getBook<F> : $$2<T, F> : $$2<T, F>;
  type $$2<T, F extends $$Frag.$<T>> =
    T extends typeof Query$listBooks ? F extends $$Frag.$<typeof Query$listBooks> ? Query.listBooks<F> : never : never;
}

export const $$generateObject = <F extends $$GqxFunc>(f: $$GqxImpl<F>) => ({
  query: {
    getAuthor: f(Query$getAuthor),
    getBook: f(Query$getBook),
    listBooks: f(Query$listBooks),
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
    T extends Query$getAuthor ? Query.getAuthor :
    T extends Query$getBook ? Query.getBook :
    T extends Query$listBooks ? Query.listBooks :
    T extends Book$id ? Book.id :
    T extends Book$language ? Book.language :
    T extends Book$author ? Book.author :
    T extends Book$title ? Book.title :
    T extends Book$description ? Book.description :
    T extends Book$categories ? Book.categories :
    T extends Book$translation ? Book.translation :
    T extends Author$id ? Author.id :
    T extends Author$name ? Author.name :
    T extends Author$books ? Author.books :
    T extends Author$favoriteBook ? Author.favoriteBook :
    never
}