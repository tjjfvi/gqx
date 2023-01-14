// @ts-nocheck
if (!0) throw new Error("boilerplate.ts should not be imported")

/* --- */

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
