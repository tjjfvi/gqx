 /* eslint-disable */

type Int = number;
type Float = number;
type String = string;
type ID = string;
type Boolean = boolean;

interface $<F, L> { f: F, l: L }
const $$ = <F, L>(f: F, l: L) => ({ f, l });

type $$FilterProp<F extends $_, K, T> = F extends K ? T : never;
type $$FilterSub<F extends $_, K, _$> = Extract<F, $<K, _$>>["l"];

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
  title?: (String | null);
  author?: (AuthorFilter | null);
  categories?: (Category[] | null);
}

interface AuthorFilter {
  name?: (String | null);
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

type $$Author<F extends Author$> = {
  id: $$FilterProp<F, typeof Author$id, ID>;
  name: $$FilterProp<F, typeof Author$name, String>;
  books: $$Book<$$FilterSub<F, typeof Author$books, Book$>>[];
  favoriteBook: $$Book<$$FilterSub<F, typeof Author$favoriteBook, Book$>>;
}
type $Author<F extends Author$[]> = $$Author<F[number]>;

type $$Book<F extends Book$> = {
  categories: $$FilterProp<F, typeof Book$categories, Category[]>;
  description: $$FilterProp<F, typeof Book$description, String>;
  id: $$FilterProp<F, typeof Book$id, ID>;
  title: $$FilterProp<F, typeof Book$title, String>;
  author: $$Author<$$FilterSub<F, typeof Book$author, Author$>>;
}
type $Book<F extends Book$[]> = $$Book<F[number]>;

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
}