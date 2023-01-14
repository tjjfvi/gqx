/* dprint-ignore-file */

import { $Scalars } from "./scalars"

declare const $fragTypes: unique symbol

export class $Fragment {
  declare private _gqxFragment
  private _props = new Map<string, $Fragment | null>()
  private constructor() {}
  static merge(...frags: $Fragment[]): $Fragment {
    if (frags.length === 1) return frags[0]
    const result = new $Fragment()
    for (const frag of frags) {
      result._mergeWith(frag)
    }
    return result
  }
  private _mergeWith(frag: $Fragment) {
    for (const [key, sub] of frag._props) {
      let existing = this._props.get(key)
      if (existing === undefined) {
        this._props.set(key, sub)
      } else {
        if (existing && sub) {
          existing._mergeWith(sub)
        } else if (existing || sub) {
          throw new Error("Cannot merge scalar fragment with object fragment")
        }
      }
    }
  }
  toString() {
    const typeMap = new Map<string, string[]>()
    for (const [ckey, frag] of this._props) {
      const [type, key] = ckey.split("$") as [string, string]
      typeMap.set(type, typeMap.get(type) ?? [])
      typeMap.get(type)!.push(frag ? `${key} { ${frag} }` : key)
    }
    return [...typeMap].map(([type, entries]) => `... on ${type} { ${entries.join(" ")} }`).join(
      " ",
    )
  }
  static _create(key: string, value: $Fragment | null) {
    const frag = new $Fragment()
    frag._props.set(key, value)
    return frag
  }
}

export interface $Hkt<in I = unknown, out O = unknown> {
  _input: (x: I) => void
  type: (value: $Hkt.Input<this>) => O
}

export namespace $Hkt {
  export type Input<T extends $Hkt<never>> = Parameters<T["_input"]>[0]
  export type Call<T extends $Hkt<I>, I> = ReturnType<(T & { _input: (x: I) => void })["type"]>
  export interface Compose<
    A extends $Hkt<J, O>,
    B extends $Hkt<I, J>,
    I = unknown,
    J = unknown,
    O = unknown,
  > extends $Hkt<I, O> {
    type: (_: Input<this>) => $Hkt.Call<A, $Hkt.Call<B, typeof _>>
  }
}

type $_ExpandDeep<T> = T extends unknown[]
  ? T[number][] extends T ? $ExpandDeep<T[number]>[] : { [K in keyof T]: $ExpandDeep<T[K]> }
  : { [K in keyof T]: $ExpandDeep<T[K]> }
type $ExpandDeep<T> = $_ExpandDeep<T> extends infer X extends T ? X : never

interface $FieldWrapHkt<K extends keyof $FieldWrap<any>> extends $Hkt {
  type: (_: $Hkt.Input<this>) => $FieldWrap<typeof _>[K]
}

export type $Field = keyof $FieldWrap<any> & string
export type $OperationField = Extract<$Field, `${$OperationTypes}$${string}`>

/* --- End Boilerplate --- */

export type ID = $Scalars["ID"]

export type String = $Scalars["String"]

export type Int = $Scalars["Int"]

export type Float = $Scalars["Float"]

export type Boolean = $Scalars["Boolean"]

interface _$Query$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => Query.$<typeof _>
}

interface _$Query<T extends $Hkt> {
  $<F extends Query.$>(frag: F): $Hkt.Call<T, Query<F>>
  $<F extends Query.$[]>(...frag: F): $Hkt.Call<T, Query<F>>
  version: $Hkt.Call<T, $FieldWrap<String>["Query$version"]>
  getBook: _$Book<$Hkt.Compose<T, $FieldWrapHkt<"Query$getBook">>>
  getPeople: _$Person<$Hkt.Compose<T, $FieldWrapHkt<"Query$getPeople">>>
}

const _$Query = (f: (x: $Fragment) => any): any => ({
  $: (...a: $Fragment[]) => f($Fragment.merge(...a)),
  get version(){ return f($Fragment._create("Query$version", null)) },
  get getBook(){ return _$Book(x => $Fragment._create("Query$getBook", f(x))) },
  get getPeople(){ return _$Person(x => $Fragment._create("Query$getPeople", f(x))) },
})

export const Query: _$Query<_$Query$> = _$Query(x => x)

export type Query<F extends Query.$ | Query.$[]> =
  F extends Query.$<infer X> ? X :
  // @ts-ignore
  $ExpandDeep<{ [K in keyof F]: (x: Query<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace Query {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _Query: T

    }
  }
}

interface _$Book$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => Book.$<typeof _>
}

interface _$Book<T extends $Hkt> {
  $<F extends Book.$>(frag: F): $Hkt.Call<T, Book<F>>
  $<F extends Book.$[]>(...frag: F): $Hkt.Call<T, Book<F>>
  id: $Hkt.Call<T, $FieldWrap<ID>["Book$id"]>
  author: _$Author<$Hkt.Compose<T, $FieldWrapHkt<"Book$author">>>
  title: $Hkt.Call<T, $FieldWrap<String>["Book$title"]>
  description: $Hkt.Call<T, $FieldWrap<String>["Book$description"]>
}

const _$Book = (f: (x: $Fragment) => any): any => ({
  $: (...a: $Fragment[]) => f($Fragment.merge(...a)),
  get id(){ return f($Fragment._create("Book$id", null)) },
  get author(){ return _$Author(x => $Fragment._create("Book$author", f(x))) },
  get title(){ return f($Fragment._create("Book$title", null)) },
  get description(){ return f($Fragment._create("Book$description", null)) },
})

export const Book: _$Book<_$Book$> = _$Book(x => x)

export type Book<F extends Book.$ | Book.$[]> =
  F extends Book.$<infer X> ? X :
  // @ts-ignore
  $ExpandDeep<{ [K in keyof F]: (x: Book<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace Book {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _Book: T

    }
  }
}

interface _$Person$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => Person.$<typeof _>
}

interface _$Person<T extends $Hkt> {
  $<F extends Person.$>(frag: F): $Hkt.Call<T, Person<F>>
  $<F extends Person.$[]>(...frag: F): $Hkt.Call<T, Person<F>>
  id: $Hkt.Call<T, $FieldWrap<ID>["Person$id"]>
  name: $Hkt.Call<T, $FieldWrap<String>["Person$name"]>
}

const _$Person = (f: (x: $Fragment) => any): any => ({
  $: (...a: $Fragment[]) => f($Fragment.merge(...a)),
  get id(){ return f($Fragment._create("Person$id", null)) },
  get name(){ return f($Fragment._create("Person$name", null)) },
})

export const Person: _$Person<_$Person$> = _$Person(x => x)

export type Person<F extends Person.$ | Person.$[]> =
  F extends Person.$<infer X> ? X :
  // @ts-ignore
  $ExpandDeep<{ [K in keyof F]: (x: Person<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace Person {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _Person: T

    }
  }
}

interface _$Author$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => Author.$<typeof _>
}

interface _$Author<T extends $Hkt> {
  $<F extends Author.$>(frag: F): $Hkt.Call<T, Author<F>>
  $<F extends Author.$[]>(...frag: F): $Hkt.Call<T, Author<F>>
  id: $Hkt.Call<T, $FieldWrap<ID>["Author$id"]>
  name: $Hkt.Call<T, $FieldWrap<String>["Author$name"]>
  books: _$Book<$Hkt.Compose<T, $FieldWrapHkt<"Author$books">>>
}

const _$Author = (f: (x: $Fragment) => any): any => ({
  $: (...a: $Fragment[]) => f($Fragment.merge(...a)),
  get id(){ return f($Fragment._create("Author$id", null)) },
  get name(){ return f($Fragment._create("Author$name", null)) },
  get books(){ return _$Book(x => $Fragment._create("Author$books", f(x))) },
})

export const Author: _$Author<_$Author$> = _$Author(x => x)

export type Author<F extends Author.$ | Author.$[]> =
  F extends Author.$<infer X> ? X :
  // @ts-ignore
  $ExpandDeep<{ [K in keyof F]: (x: Author<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace Author {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _Author: T

      _Person: T | { __typename: "User" }
    }
  }
}

interface _$User$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => User.$<typeof _>
}

interface _$User<T extends $Hkt> {
  $<F extends User.$>(frag: F): $Hkt.Call<T, User<F>>
  $<F extends User.$[]>(...frag: F): $Hkt.Call<T, User<F>>
  id: $Hkt.Call<T, $FieldWrap<ID>["User$id"]>
  name: $Hkt.Call<T, $FieldWrap<String>["User$name"]>
  username: $Hkt.Call<T, $FieldWrap<String>["User$username"]>
}

const _$User = (f: (x: $Fragment) => any): any => ({
  $: (...a: $Fragment[]) => f($Fragment.merge(...a)),
  get id(){ return f($Fragment._create("User$id", null)) },
  get name(){ return f($Fragment._create("User$name", null)) },
  get username(){ return f($Fragment._create("User$username", null)) },
})

export const User: _$User<_$User$> = _$User(x => x)

export type User<F extends User.$ | User.$[]> =
  F extends User.$<infer X> ? X :
  // @ts-ignore
  $ExpandDeep<{ [K in keyof F]: (x: User<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace User {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _User: T

      _Person: T | { __typename: "Author" }
    }
  }
}

export interface $FieldFrag<T = unknown> {
  Query$version: never,
  Query$getBook: Book.$<T>,
  Query$getPeople: Person.$<T>,
  Book$id: never,
  Book$author: Author.$<T>,
  Book$title: never,
  Book$description: never,
  Person$id: never,
  Person$name: never,
  Author$id: never,
  Author$name: never,
  Author$books: Book.$<T>,
  User$id: never,
  User$name: never,
  User$username: never,
}

export interface $FieldInput {
  Query$version: {
    x?: String | null | undefined,
  },
  Query$getBook: {
    id: ID,
  },
  Query$getPeople: {
    filter: String,
  },
  Book$id: {},
  Book$author: {},
  Book$title: {},
  Book$description: {},
  Person$id: {},
  Person$name: {},
  Author$id: {},
  Author$name: {},
  Author$books: {},
  User$id: {},
  User$name: {},
  User$username: {},
}

export interface $FieldWrap<T> {
  Query$version: { __typename: "Query", version: T | null | undefined },
  Query$getBook: { __typename: "Query", getBook: T },
  Query$getPeople: { __typename: "Query", getPeople: Array<T> },
  Book$id: { __typename: "Book", id: T },
  Book$author: { __typename: "Book", author: T },
  Book$title: { __typename: "Book", title: T },
  Book$description: { __typename: "Book", description: T },
  Person$id: this["Author$id"] | this["User$id"],
  Person$name: this["Author$name"] | this["User$name"],
  Author$id: { __typename: "Author", id: T },
  Author$name: { __typename: "Author", name: T },
  Author$books: { __typename: "Author", books: Array<T> },
  User$id: { __typename: "User", id: T },
  User$name: { __typename: "User", name: T | null | undefined },
  User$username: { __typename: "User", username: T },
}

export interface $FieldOutput<F extends any[]> {
  Query$version: String | null | undefined,
  Query$getBook: Book<F>,
  Query$getPeople: Array<Person<F>>,
  Book$id: ID,
  Book$author: Author<F>,
  Book$title: String,
  Book$description: String,
  Person$id: ID,
  Person$name: String | null | undefined,
  Author$id: ID,
  Author$name: String,
  Author$books: Array<Book<F>>,
  User$id: ID,
  User$name: String | null | undefined,
  User$username: String,
}

export type $OperationTypes = "Query"
export const $gqx = <F extends $Hkt<$OperationField>>(f: <P extends $OperationField>(p: P) => $Hkt.Call<F, P>) => ({
  query: {
    version: f("Query$version"),
    getBook: f("Query$getBook"),
    getPeople: f("Query$getPeople"),
  },
})