/* eslint-disable */

import { $$Scalars } from "./scalars";

declare const $fragTypes: unique symbol;

class $Fragment {
  declare private _gqxFragment;
  private _props = new Map<string, $Fragment | null>()
  private constructor(){}
  static merge(...frags: $Fragment[]): $Fragment{
      if(frags.length === 1) return frags[0]
      const result = new $Fragment()
      for(const frag of frags){
          result._mergeWith(frag)
      }
      return result
  }
  private _mergeWith(frag: $Fragment){
      for(const [key, sub] of frag._props){
          let existing = this._props.get(key)
          if(existing === undefined){
              this._props.set(key, sub)
          } else {
              if(existing && sub){
                  existing._mergeWith(sub)
              } else if(existing || sub){
                  throw new Error("Cannot merge scalar fragment with object fragment")
              }
          }
      }
  }
  toString(){
      const typeMap = new Map<string, string[]>()
      for(const [ckey, frag] of this._props){
          const [type, key] = ckey.split("$") as [string, string]
          typeMap.set(type, typeMap.get(type) ?? [])
          typeMap.get(type)!.push(frag ? `${key} { ${frag} }` : key)
      }
      return [...typeMap].map(([type, entries]) => `... on ${type} { ${entries.join(" ")} }`).join(" ")
  }
  static _create(key: string, value: $Fragment | null){
      const frag = new $Fragment();
      frag._props.set(key, value)
      return frag
  }
}

export interface $Hkt<I = unknown> {
  input: I;
  return: unknown;
}

export type $CallHkt<F extends $Hkt, I extends F["input"]> = (F & { input: I })["return"];

export interface $Compose<A extends $Hkt, B extends $Hkt> extends $Hkt {
  return: $CallHkt<A, $CallHkt<B, this["input"]>>
}

type $_ExpandDeep<T> = T extends unknown[] ? T[number][] extends T ? $ExpandDeep<T[number]>[] : { [K in keyof T]: $ExpandDeep<T[K]> } : { [K in keyof T]: $ExpandDeep<T[K]> }
type $ExpandDeep<T> = $_ExpandDeep<T> extends infer X extends T ? X : never

interface $WrapHkt<K extends keyof $Wrap<any>> extends $Hkt {
  return: $Wrap<this["input"]>[K]
}

/* --- End Boilerplate --- */

export type $$EnumDirectives = {}

export interface $$EnumTypes {}

interface _$Author$ extends $Hkt {
  return: Author.$<this["input"]>
}

interface _$Author<T extends $Hkt> {
  $<F extends Author.$>(frag: F): $CallHkt<T, Author<F>>
  $<F extends Author.$[]>(...frag: F): $CallHkt<T, Author<F>>
  books: _$Book<$Compose<T, $WrapHkt<"Author$books">>>
  id: $CallHkt<T, $Wrap<$ShallowPropTypes["Author$id"]>["Author$id"]>
  name: $CallHkt<T, $Wrap<$ShallowPropTypes["Author$name"]>["Author$name"]>
}

const _$Author = <T extends $Hkt>(f: (x: $Fragment) => any): _$Author<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get books(){ return _$Book<$Compose<T, $WrapHkt<"Author$books">>>(x => $Fragment._create("Author$books", f(x))) },
  get id(){ return f($Fragment._create("Author$id", null)) },
  get name(){ return f($Fragment._create("Author$name", null)) },
})

export const Author = _$Author<_$Author$>(x => x)

// @ts-ignore
export type Author<F extends Author.$ | Author.$[]> = F extends Author.$<infer X> ? X : $ExpandDeep<{ [K in keyof F]: (x: Author<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace Author {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _Author: T
      _Person: T | { __typename: "User" }
    }
  }
}

interface _$Book$ extends $Hkt {
  return: Book.$<this["input"]>
}

interface _$Book<T extends $Hkt> {
  $<F extends Book.$>(frag: F): $CallHkt<T, Book<F>>
  $<F extends Book.$[]>(...frag: F): $CallHkt<T, Book<F>>
  author: _$Author<$Compose<T, $WrapHkt<"Book$author">>>
  description: $CallHkt<T, $Wrap<$ShallowPropTypes["Book$description"]>["Book$description"]>
  id: $CallHkt<T, $Wrap<$ShallowPropTypes["Book$id"]>["Book$id"]>
  title: $CallHkt<T, $Wrap<$ShallowPropTypes["Book$title"]>["Book$title"]>
}

const _$Book = <T extends $Hkt>(f: (x: $Fragment) => any): _$Book<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get author(){ return _$Author<$Compose<T, $WrapHkt<"Book$author">>>(x => $Fragment._create("Book$author", f(x))) },
  get description(){ return f($Fragment._create("Book$description", null)) },
  get id(){ return f($Fragment._create("Book$id", null)) },
  get title(){ return f($Fragment._create("Book$title", null)) },
})

export const Book = _$Book<_$Book$>(x => x)

// @ts-ignore
export type Book<F extends Book.$ | Book.$[]> = F extends Book.$<infer X> ? X : $ExpandDeep<{ [K in keyof F]: (x: Book<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace Book {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _Book: T

    }
  }
}

interface _$Person$ extends $Hkt {
  return: Person.$<this["input"]>
}

interface _$Person<T extends $Hkt> {
  $<F extends Person.$>(frag: F): $CallHkt<T, Person<F>>
  $<F extends Person.$[]>(...frag: F): $CallHkt<T, Person<F>>
  id: $CallHkt<T, $Wrap<$ShallowPropTypes["Person$id"]>["Person$id"]>
  name: $CallHkt<T, $Wrap<$ShallowPropTypes["Person$name"]>["Person$name"]>
}

const _$Person = <T extends $Hkt>(f: (x: $Fragment) => any): _$Person<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get id(){ return f($Fragment._create("Person$id", null)) },
  get name(){ return f($Fragment._create("Person$name", null)) },
})

export const Person = _$Person<_$Person$>(x => x)

// @ts-ignore
export type Person<F extends Person.$ | Person.$[]> = F extends Person.$<infer X> ? X : $ExpandDeep<{ [K in keyof F]: (x: Person<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace Person {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _Person: T

    }
  }
}

interface _$Query$ extends $Hkt {
  return: Query.$<this["input"]>
}

interface _$Query<T extends $Hkt> {
  $<F extends Query.$>(frag: F): $CallHkt<T, Query<F>>
  $<F extends Query.$[]>(...frag: F): $CallHkt<T, Query<F>>
  getBook: _$Book<$Compose<T, $WrapHkt<"Query$getBook">>>
  getPeople: _$Person<$Compose<T, $WrapHkt<"Query$getPeople">>>
}

const _$Query = <T extends $Hkt>(f: (x: $Fragment) => any): _$Query<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get getBook(){ return _$Book<$Compose<T, $WrapHkt<"Query$getBook">>>(x => $Fragment._create("Query$getBook", f(x))) },
  get getPeople(){ return _$Person<$Compose<T, $WrapHkt<"Query$getPeople">>>(x => $Fragment._create("Query$getPeople", f(x))) },
})

export const Query = _$Query<_$Query$>(x => x)

// @ts-ignore
export type Query<F extends Query.$ | Query.$[]> = F extends Query.$<infer X> ? X : $ExpandDeep<{ [K in keyof F]: (x: Query<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace Query {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _Query: T

    }
  }
}

interface _$User$ extends $Hkt {
  return: User.$<this["input"]>
}

interface _$User<T extends $Hkt> {
  $<F extends User.$>(frag: F): $CallHkt<T, User<F>>
  $<F extends User.$[]>(...frag: F): $CallHkt<T, User<F>>
  id: $CallHkt<T, $Wrap<$ShallowPropTypes["User$id"]>["User$id"]>
  name: $CallHkt<T, $Wrap<$ShallowPropTypes["User$name"]>["User$name"]>
  username: $CallHkt<T, $Wrap<$ShallowPropTypes["User$username"]>["User$username"]>
}

const _$User = <T extends $Hkt>(f: (x: $Fragment) => any): _$User<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
  get id(){ return f($Fragment._create("User$id", null)) },
  get name(){ return f($Fragment._create("User$name", null)) },
  get username(){ return f($Fragment._create("User$username", null)) },
})

export const User = _$User<_$User$>(x => x)

// @ts-ignore
export type User<F extends User.$ | User.$[]> = F extends User.$<infer X> ? X : $ExpandDeep<{ [K in keyof F]: (x: User<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

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
  "User$id": { __typename: "User", id: T }
  "User$name": { __typename: "User", name: (T | null) }
  "User$username": { __typename: "User", username: T }
}
    

export interface $ShallowPropTypes {
  "Author$id": ID
  "Author$name": String
  "Book$description": String
  "Book$id": ID
  "Book$title": String
  "Person$id": ID
  "Person$name": String
  "User$id": ID
  "User$name": String
  "User$username": String
}

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


