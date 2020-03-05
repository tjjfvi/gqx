
/* eslint-disable */

const _gqx = <I>(id: I) => <T extends $$Frag.$<I>[]>(input: $$Input.$<I>, frag: T): $$Output.$<I, T> => (null as any);

type Int = number;
type Float = number;
type String = string;
type ID = string;
type Boolean = boolean;

interface $<F, L> { f: F; l: L }
const $$ = <F, L>(f: F, l: L) => ({ f, l });

interface $$OperationId {
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
      <T extends $_>(x: T[]) => $<F, O extends { [__wrap__]: infer X } ? $$Wrap<X, T> : T>[] :
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
        (...a: any) => ("$" in o() ? o().$(a) : a).map((a: any) => $$(f, a))
    ),
  })

const $$reconstruct = <I extends $$OperationId>(id: I, input: $$Input.$<I>, props: $$Frag.$<I>[]) => {
  interface Subs { [k: string]: true | Subs }
  const subs: Subs = {};
  props.map(prop => populateSubs(prop, subs));
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
    return `{ ${Object.entries(subs).map(([k, v]) => v === true ? k : k + " " + genFrag(v)).join(" ")} }`;
  }

  function populateSubs(prop: $_, subs: Subs | true){
    if(subs === true)
      return;
    if("prop" in prop)
      subs[prop.prop] = true;
    else
      populateSubs(prop.l, subs[prop.f.prop] = (subs[prop.f.prop] || {}));
  }
}

type Category =
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

interface Cursor {
  start: Int;
  limit: Int;
}

interface BookFilter {
  title?: (String | null | void);
  author?: (AuthorFilter | null | void);
  categories?: (Category[] | null | void);
}

interface AuthorFilter {
  name?: (String | null | void);
}

class Author$id { private static _: any; static type = "Author"; static prop = "id"; }
class Author$name { private static _: any; static type = "Author"; static prop = "name"; }
class Author$books { private static _: any; static type = "Author"; static prop = "books"; }
class Author$favoriteBook { private static _: any; static type = "Author"; static prop = "favoriteBook"; }
class Book$id { private static _: any; static type = "Book"; static prop = "id"; }
class Book$author { private static _: any; static type = "Book"; static prop = "author"; }
class Book$title { private static _: any; static type = "Book"; static prop = "title"; }
class Book$description { private static _: any; static type = "Book"; static prop = "description"; }
class Book$categories { private static _: any; static type = "Book"; static prop = "categories"; }

type Author$ =
  | typeof Author$id
  | typeof Author$name
  | $<typeof Author$books, Book$>
  | $<typeof Author$favoriteBook, Book$>

type Book$ =
  | typeof Book$categories
  | typeof Book$description
  | typeof Book$id
  | typeof Book$title
  | $<typeof Book$author, Author$>

type $_ =
  | Author$
  | Book$

const _Author = {
  id: Author$id,
  name: Author$name,
};

const Author: typeof _Author & {
  books: $$MapWrap<typeof Book, typeof Author$books>,
  favoriteBook: $$MapWrap<typeof Book, typeof Author$favoriteBook>,
} = {
  ..._Author,
  books: $$mapWrap(() => Book, Author$books),
  favoriteBook: $$mapWrap(() => Book, Author$favoriteBook),
}

const _Book = {
  categories: Book$categories,
  description: Book$description,
  id: Book$id,
  title: Book$title,
};

const Book: typeof _Book & {
  author: $$MapWrap<typeof Author, typeof Book$author>,
} = {
  ..._Book,
  author: $$mapWrap(() => Author, Book$author),
}

type _$Author<F extends Author$> =
  & (typeof Author$id extends F ? { id: ID } : {})
  & (typeof Author$name extends F ? { name: String } : {})
  & ($<typeof Author$books, any> extends F ? { books: _$Book<Extract<F, $<typeof Author$books, Book$>>["l"]>[] } : {})
  & ($<typeof Author$favoriteBook, any> extends F ? { favoriteBook: _$Book<Extract<F, $<typeof Author$favoriteBook, Book$>>["l"]> } : {})
type $Author<F extends Author$[]> = _$Author<F[number]>;

type _$Book<F extends Book$> =
  & (typeof Book$categories extends F ? { categories: Category[] } : {})
  & (typeof Book$description extends F ? { description: String } : {})
  & (typeof Book$id extends F ? { id: ID } : {})
  & (typeof Book$title extends F ? { title: String } : {})
  & ($<typeof Book$author, any> extends F ? { author: _$Author<Extract<F, $<typeof Book$author, Author$>>["l"]> } : {})
type $Book<F extends Book$[]> = _$Book<F[number]>;

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
    T extends typeof Query$getAuthor ? Query.getAuthor :
    T extends typeof Query$getBook ? Query.getBook :
    T extends typeof Query$listBooks ? Query.listBooks :
    never
}

export namespace $$Frag {
  export namespace Query {
    export type getAuthor = Author$;
    export type getBook = Book$;
    export type listBooks = Book$;
  }
  export type $<T> =
    T extends typeof Query$getAuthor ? Query.getAuthor :
    T extends typeof Query$getBook ? Query.getBook :
    T extends typeof Query$listBooks ? Query.listBooks :
    never
}

export namespace $$Output {
  export namespace Query {
    export type getAuthor<F extends $$Frag.$<typeof Query$getAuthor>[]> = $Author<F>
    export type getBook<F extends $$Frag.$<typeof Query$getBook>[]> = $Book<F>
    export type listBooks<F extends $$Frag.$<typeof Query$listBooks>[]> = $Book<F>[]
  }
  export type $<T, F extends $$Frag.$<T>[]> =
    F extends $$Frag.$<typeof Query$getAuthor>[] ? Query.getAuthor<F> :
    F extends $$Frag.$<typeof Query$getBook>[] ? Query.getBook<F> :
    F extends $$Frag.$<typeof Query$listBooks>[] ? Query.listBooks<F> :
    never
}

const gqx = {
  query: {
    getAuthor: _gqx<typeof Query$getAuthor>(Query$getAuthor),
    getBook: _gqx<typeof Query$getBook>(Query$getBook),
    listBooks: _gqx<typeof Query$listBooks>(Query$listBooks),
  },
}

export {
  Category,
  Cursor,
  BookFilter,
  AuthorFilter,
  Author$,
  Book$,
  Author,
  Book,
  $Author,
  $Book,
  gqx,
}
