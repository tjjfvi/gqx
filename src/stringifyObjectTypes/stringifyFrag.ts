/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { indent } from "../indent"
import { Obj } from "."
import { stringifyId } from "./stringifyId"

export const stringifyFrag = (obj: Obj, objs: Obj[]) =>
  `
interface _$${obj.type}$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => ${obj.type}.$<typeof _>
}

interface _$${obj.type}<T extends $Hkt> {
  $<F extends ${obj.type}.$>(frag: F): $Hkt.Call<T, ${obj.type}<F>>
  $<F extends ${obj.type}.$[]>(...frag: F): $Hkt.Call<T, ${obj.type}<F>>
${
    obj.props.map(prop =>
      indent`${prop.id.prop}: ${
        prop.shallow
          ? `$Hkt.Call<T, $Wrap<$ShallowPropTypes[${stringifyId(prop.id)}]>[${
            stringifyId(prop.id)
          }]>`
          : `_$${prop.type}<$Hkt.Compose<T, $WrapHkt<${stringifyId(prop.id)}>>>`
      }`
    ).join("\n")
  }
}

const _$${obj.type} = <T extends $Hkt>(f: (x: $Fragment) => any): _$${obj.type}<T> => ({
  $: ((...a: $Fragment[]) => f($Fragment.merge(...a))) as any,
${
    obj.props.map(prop =>
      indent`get ${prop.id.prop}(){ return ${
        prop.shallow
          ? `f($Fragment._create(${stringifyId(prop.id)}, null))`
          : `_$${prop.type}<$Hkt.Compose<T, $WrapHkt<${
            stringifyId(prop.id)
          }>>>(x => $Fragment._create(${stringifyId(prop.id)}, f(x)))`
      } },`
    ).join("\n")
  }
})

export const ${obj.type} = _$${obj.type}<_$${obj.type}$>(x => x)

export type ${obj.type}<F extends ${obj.type}.$ | ${obj.type}.$[]> =
  F extends ${obj.type}.$<infer X> ? X :
  // @ts-ignore
  $ExpandDeep<{ [K in keyof F]: (x: ${obj.type}<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace ${obj.type} {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
${
    indent(indent(indent(
      [
        `_${obj.type}: T`,
        ...obj.supertypes.map(type =>
          `_${type}: T${
            objs
              .find(x => x.type === type)!
              .subtypes
              .filter(x => x !== obj.type)
              .map(x => ` | { __typename: ${JSON.stringify(x)} }`)
              .join("")
          }`
        ),
      ].join("\n"),
    )))
  }
    }
  }
}
`.trim()
