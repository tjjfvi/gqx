/* eslint-disable */

const _gqx = <I>(id: I) => <T extends $$Frag.$<I>[]>(input: $$Input.$<I>, frag: T): $$Output.$<I, T> => (null as any);

 /* eslint-disable */

type Int = number;
type Float = number;
type String = string;
type ID = string;
type Boolean = boolean;

interface $<F, L> { f: F, l: L }
const $$ = <F, L>(f: F, l: L) => ({ f, l });

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
  new Proxy(() => {}, {
    get: (t, k) => t[k] || (t[k] =
      k !== "$" ?
        $$(f, o()[k]) :
        // @ts-ignore
        (...a: any) => ("$" in o() ? o().$(a) : a).map((a: any) => $$(f, a))
    ),
  })

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

class Author$id { declare private __nominal__: any; }
class Author$name { declare private __nominal__: any; }
class Author$books { declare private __nominal__: any; }
class Author$favoriteBook { declare private __nominal__: any; }
class Book$id { declare private __nominal__: any; }
class Book$author { declare private __nominal__: any; }
class Book$title { declare private __nominal__: any; }
class Book$description { declare private __nominal__: any; }
class Book$categories { declare private __nominal__: any; }

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

class Query$getAuthor { declare private __nominal__: any; }
class Query$getBook { declare private __nominal__: any; }
class Query$listBooks { declare private __nominal__: any; }

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
