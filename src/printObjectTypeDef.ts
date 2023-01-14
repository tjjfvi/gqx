import { indent } from "./indent"
import { ObjectType } from "./type"

export function printObjectTypeDef(type: ObjectType) {
  const { name } = type
  return `
interface _$${name}$ extends $Hkt {
  type: (_: $Hkt.Input<this>) => ${name}.$<typeof _>
}

interface _$${name}<T extends $Hkt> {
  $<F extends ${name}.$>(frag: F): $Hkt.Call<T, ${name}<F>>
  $<F extends ${name}.$[]>(...frag: F): $Hkt.Call<T, ${name}<F>>
${
    type.fields.map(field =>
      indent`${field.key}: ${
        field.namedType.kind === "object"
          ? `_$${field.namedType.name}<$Hkt.Compose<T, $FieldWrapHkt<${field.str}>>>`
          : `$Hkt.Call<T, $FieldWrap<${field.namedType.name}>[${field.str}]>`
      }`
    ).join("\n")
  }
}

const _$${name} = (f: (x: $Fragment) => any): any => ({
  $: (...a: $Fragment[]) => f($Fragment.merge(...a)),
${
    type.fields.map(field =>
      indent`get ${field.key}(){ return ${
        field.namedType.kind === "object"
          ? `_$${field.namedType.name}(x => $Fragment._create(${field.str}, f(x)))`
          : `f($Fragment._create(${field.str}, null))`
      } },`
    ).join("\n")
  }
})

export const ${name}: _$${name}<_$${name}$> = _$${name}(x => x)

export type ${name}<F extends ${name}.$ | ${name}.$[]> =
  F extends ${name}.$<infer X> ? X :
  // @ts-ignore
  $ExpandDeep<{ [K in keyof F]: (x: ${name}<F[K]>) => void }[number] extends (x: infer X) => void ? X : never>

export declare namespace ${name} {
  export interface $<out T = unknown> extends $Fragment {
    [$fragTypes]: {
      _${name}: T
${
    indent(indent(indent(
      type.supertypes.map(supertype =>
        `\n_${supertype.name}: T${
          supertype.subtypes
            .filter(x => x !== type)
            .map(x => ` | { __typename: ${JSON.stringify(x.name)} }`)
            .join("")
        }`
      ).join(""),
    )))
  }
    }
  }
}
`.trim()
}
