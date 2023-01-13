/* eslint-disable */

import { $$Scalars } from "./scalars"

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
  type: (value: $Hkt.Input<this, I>) => O
}

export namespace $Hkt {
  export type Input<T extends $Hkt<I>, I = unknown> = "input" extends keyof T
    ? Extract<T["input"], I>
    : I
  export type Call<T extends $Hkt<I>, I> = ReturnType<(T & { input: I })["type"]>
  export interface Compose<
    A extends $Hkt<J, O>,
    B extends $Hkt<I, J>,
    I = unknown,
    J = unknown,
    O = unknown,
  > extends $Hkt<I, O> {
    type: <T extends Input<this, I>>(v: T) => $Hkt.Call<A, $Hkt.Call<B, T>>
  }
}

type $_ExpandDeep<T> = T extends unknown[]
  ? T[number][] extends T ? $ExpandDeep<T[number]>[] : { [K in keyof T]: $ExpandDeep<T[K]> }
  : { [K in keyof T]: $ExpandDeep<T[K]> }
type $ExpandDeep<T> = $_ExpandDeep<T> extends infer X extends T ? X : never

interface $WrapHkt<K extends keyof $Wrap<any>> extends $Hkt {
  type: (_: $Hkt.Input<this>) => $Wrap<typeof _>[K]
}

export type $Prop = keyof $Wrap<any> & string
export type $DeepProp = keyof $DeepPropTypes & string
export type $ShallowProp = keyof $ShallowPropTypes & string
export type $OperationProp = Extract<$Prop, `${$OperationTypes}$${string}`>

/* --- End Boilerplate --- */

export type $$EnumDirectives = {}

export interface $$EnumTypes {}

interface _$Author$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => Author.$<typeof _>
}

interface _$Author<T extends $Hkt> {
  $<F extends Author.$>(frag: F): $Hkt.Call<T, Author<F>>
  $<F extends Author.$[]>(...frag: F): $Hkt.Call<T, Author<F>>
  books: _$Book<$Hkt.Compose<T, $WrapHkt<"Author$books">>>
  id: $Hkt.Call<T, $Wrap<$ShallowPropTypes["Author$id"]>["Author$id"]>
  name: $Hkt.Call<T, $Wrap<$ShallowPropTypes["Author$name"]>["Author$name"]>
}

const _$Author = <T extends $Hkt>(f: (x: $Fragment) => any): _$Author<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get books(){ return _$Book<$Hkt.Compose<T, $WrapHkt<"Author$books">>>(x => $Fragment._create("Author$books", f(x))) },
  get id(){ return f($Fragment._create("Author$id", null)) },
  get name(){ return f($Fragment._create("Author$name", null)) },
})

export const Author = _$Author<_$Author$>(x => x)

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

interface _$Book$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => Book.$<typeof _>
}

interface _$Book<T extends $Hkt> {
  $<F extends Book.$>(frag: F): $Hkt.Call<T, Book<F>>
  $<F extends Book.$[]>(...frag: F): $Hkt.Call<T, Book<F>>
  author: _$Author<$Hkt.Compose<T, $WrapHkt<"Book$author">>>
  description: $Hkt.Call<T, $Wrap<$ShallowPropTypes["Book$description"]>["Book$description"]>
  id: $Hkt.Call<T, $Wrap<$ShallowPropTypes["Book$id"]>["Book$id"]>
  title: $Hkt.Call<T, $Wrap<$ShallowPropTypes["Book$title"]>["Book$title"]>
}

const _$Book = <T extends $Hkt>(f: (x: $Fragment) => any): _$Book<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get author(){ return _$Author<$Hkt.Compose<T, $WrapHkt<"Book$author">>>(x => $Fragment._create("Book$author", f(x))) },
  get description(){ return f($Fragment._create("Book$description", null)) },
  get id(){ return f($Fragment._create("Book$id", null)) },
  get title(){ return f($Fragment._create("Book$title", null)) },
})

export const Book = _$Book<_$Book$>(x => x)

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
  id: $Hkt.Call<T, $Wrap<$ShallowPropTypes["Person$id"]>["Person$id"]>
  name: $Hkt.Call<T, $Wrap<$ShallowPropTypes["Person$name"]>["Person$name"]>
}

const _$Person = <T extends $Hkt>(f: (x: $Fragment) => any): _$Person<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get id(){ return f($Fragment._create("Person$id", null)) },
  get name(){ return f($Fragment._create("Person$name", null)) },
})

export const Person = _$Person<_$Person$>(x => x)

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

interface _$Query$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => Query.$<typeof _>
}

interface _$Query<T extends $Hkt> {
  $<F extends Query.$>(frag: F): $Hkt.Call<T, Query<F>>
  $<F extends Query.$[]>(...frag: F): $Hkt.Call<T, Query<F>>
  getBook: _$Book<$Hkt.Compose<T, $WrapHkt<"Query$getBook">>>
  getPeople: _$Person<$Hkt.Compose<T, $WrapHkt<"Query$getPeople">>>
  version: $Hkt.Call<T, $Wrap<$ShallowPropTypes["Query$version"]>["Query$version"]>
}

const _$Query = <T extends $Hkt>(f: (x: $Fragment) => any): _$Query<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get getBook(){ return _$Book<$Hkt.Compose<T, $WrapHkt<"Query$getBook">>>(x => $Fragment._create("Query$getBook", f(x))) },
  get getPeople(){ return _$Person<$Hkt.Compose<T, $WrapHkt<"Query$getPeople">>>(x => $Fragment._create("Query$getPeople", f(x))) },
  get version(){ return f($Fragment._create("Query$version", null)) },
})

export const Query = _$Query<_$Query$>(x => x)

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

interface _$User$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => User.$<typeof _>
}

interface _$User<T extends $Hkt> {
  $<F extends User.$>(frag: F): $Hkt.Call<T, User<F>>
  $<F extends User.$[]>(...frag: F): $Hkt.Call<T, User<F>>
  id: $Hkt.Call<T, $Wrap<$ShallowPropTypes["User$id"]>["User$id"]>
  name: $Hkt.Call<T, $Wrap<$ShallowPropTypes["User$name"]>["User$name"]>
  username: $Hkt.Call<T, $Wrap<$ShallowPropTypes["User$username"]>["User$username"]>
}

const _$User = <T extends $Hkt>(f: (x: $Fragment) => any): _$User<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get id(){ return f($Fragment._create("User$id", null)) },
  get name(){ return f($Fragment._create("User$name", null)) },
  get username(){ return f($Fragment._create("User$username", null)) },
})

export const User = _$User<_$User$>(x => x)

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

export interface $Wrap<T> {
  "Author$books": { __typename: "Author", books: T[] }
  "Author$id": { __typename: "Author", id: T }
  "Author$name": { __typename: "Author", name: T }
  "Book$author": { __typename: "Book", author: T }
  "Book$description": { __typename: "Book", description: T }
  "Book$id": { __typename: "Book", id: T }
  "Book$title": { __typename: "Book", title: T }
  "Person$id": this["Author$id"] | this["User$id"]
  "Person$name": this["Author$name"] | this["User$name"]
  "Query$getBook": { __typename: "Query", getBook: T }
  "Query$getPeople": { __typename: "Query", getPeople: T[] }
  "Query$version": { __typename: "Query", version: (T | null) }
  "User$id": { __typename: "User", id: T }
  "User$name": { __typename: "User", name: (T | null) }
  "User$username": { __typename: "User", username: T }
}

export interface $PropFrag<T = unknown> {
  "Author$books": Book.$<T>
  "Author$id": never
  "Author$name": never
  "Book$author": Author.$<T>
  "Book$description": never
  "Book$id": never
  "Book$title": never
  "Person$id": never
  "Person$name": never
  "Query$getBook": Book.$<T>
  "Query$getPeople": Person.$<T>
  "Query$version": never
  "User$id": never
  "User$name": never
  "User$username": never
}

export interface $PropOutput<F extends $Fragment[]> {
  // @ts-ignore
  "Author$books": Book<F>[]
  // @ts-ignore
  "Author$id": ID
  // @ts-ignore
  "Author$name": String
  // @ts-ignore
  "Book$author": Author<F>
  // @ts-ignore
  "Book$description": String
  // @ts-ignore
  "Book$id": ID
  // @ts-ignore
  "Book$title": String
  // @ts-ignore
  "Person$id": ID
  // @ts-ignore
  "Person$name": (String | null)
  // @ts-ignore
  "Query$getBook": Book<F>
  // @ts-ignore
  "Query$getPeople": Person<F>[]
  // @ts-ignore
  "Query$version": (String | null)
  // @ts-ignore
  "User$id": ID
  // @ts-ignore
  "User$name": (String | null)
  // @ts-ignore
  "User$username": String
}

export interface $PropType<F extends $Fragment[]> {
  // @ts-ignore
  "Author$books": Book<F>
  // @ts-ignore
  "Author$id": ID
  // @ts-ignore
  "Author$name": String
  // @ts-ignore
  "Book$author": Author<F>
  // @ts-ignore
  "Book$description": String
  // @ts-ignore
  "Book$id": ID
  // @ts-ignore
  "Book$title": String
  // @ts-ignore
  "Person$id": ID
  // @ts-ignore
  "Person$name": String
  // @ts-ignore
  "Query$getBook": Book<F>
  // @ts-ignore
  "Query$getPeople": Person<F>
  // @ts-ignore
  "Query$version": String
  // @ts-ignore
  "User$id": ID
  // @ts-ignore
  "User$name": String
  // @ts-ignore
  "User$username": String
}

export interface $Frag<T = unknown> {
  Author: Author.$<T>
  Book: Book.$<T>
  Person: Person.$<T>
  Query: Query.$<T>
  User: User.$<T>
}

export interface $Unfrag<T extends $Fragment | $Fragment[]> {
  // @ts-ignore
  Author: Author<T>
  // @ts-ignore
  Book: Book<T>
  // @ts-ignore
  Person: Person<T>
  // @ts-ignore
  Query: Query<T>
  // @ts-ignore
  User: User<T>
}

export interface $PropInput {
  "Author$books": {}
  "Author$id": {}
  "Author$name": {}
  "Book$author": {}
  "Book$description": {}
  "Book$id": {}
  "Book$title": {}
  "Person$id": {}
  "Person$name": {}
  "Query$getBook": {
    id: $$Scalars["ID"],
  }
  "Query$getPeople": {
    filter: $$Scalars["String"],
  }
  "Query$version": {
    x?: ($$Scalars["String"] | null | undefined),
  }
  "User$id": {}
  "User$name": {}
  "User$username": {}
}

export interface $DeepPropTypes {
  "Author$books": "Book"
  "Book$author": "Author"
  "Query$getBook": "Book"
  "Query$getPeople": "Person"
}

export interface $ShallowPropTypes {
  "Author$id": ID
  "Author$name": String
  "Book$description": String
  "Book$id": ID
  "Book$title": String
  "Person$id": ID
  "Person$name": String
  "Query$version": String
  "User$id": ID
  "User$name": String
  "User$username": String
}

export type $OperationTypes = "Query"
export const $gqx = <F extends $Hkt<$OperationProp>>(f: <P extends $OperationProp>(p: P) => $Hkt.Call<F, P>) => ({
  query: {
    getBook: f("Query$getBook"),
    getPeople: f("Query$getPeople"),
    version: f("Query$version"),
  },
})

export type $$TypeDirectives = typeof $$typeDirectives;
export const $$typeDirectives = {
  Query: {},
  Book: {},
  Person: {},
  Author: {},
  User: {},
}

export type Int = $$Scalars["Int"]
export type Float = $$Scalars["Float"]
export type ID = $$Scalars["ID"]
export type String = $$Scalars["String"]
export type Boolean = $$Scalars["Boolean"]

export type $$ScalarType = (
  | "Boolean"
  | "Float"
  | "ID"
  | "Int"
  | "String"
)

