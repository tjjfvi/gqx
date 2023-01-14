import { indent } from "./indent"
import { printInputType } from "./printInputType"
import { printObjectTypeDef } from "./printObjectTypeDef"
import { NamedType } from "./type"

export function printTypeDef(type: NamedType) {
  if (type.kind === "scalar") {
    return `export type ${type.name} = $Scalars[${JSON.stringify(type.name)}]`
  }
  if (type.kind === "enum") {
    return `export type ${type.name} = ${
      type.values.length ? type.values.map(x => indent`\n| ${JSON.stringify(x)}`).join("") : "never"
    }`
  }
  if (type.kind === "input") {
    return `export interface ${type.name} ${printInputType(type.fields)}`
  }
  return printObjectTypeDef(type)
}
