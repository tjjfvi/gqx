import { indent } from "./indent"
import { printInputType } from "./printInputType"
import { printObject } from "./printObject"
import { printType } from "./printType"
import { Field } from "./type"

export function printFieldDefs(fields: Field[]) {
  return `
export interface $FieldFrag<T = unknown> ${
    printObject(fields.map(field => [
      field.name,
      field.namedType.kind === "object" ? `${field.namedType.name}.$<T>` : "never",
    ]))
  }

export interface $FieldInput ${
    printObject(fields.map(field => [
      field.name,
      printInputType(field.input),
    ]))
  }

export interface $FieldWrap<T> ${
    printObject(fields.map(field => [
      field.name,
      field.base.subtypes.length
        ? field.base.subtypes.map(subtype => `this["${subtype.name}$${field.key}"]`).join(" | ")
        : `{ __typename: "${field.base.name}", ${field.key}: ${
          printType(field.fullType, () => "T")
        } }`,
    ]))
  }

export interface $FieldOutput<F extends any[]> ${
    printObject(fields.map(field => [
      field.name,
      printType(
        field.fullType,
        type => (type.kind === "object" ? `${type.name}<F>` : type.name),
      ),
    ]))
  }
`.trim()
}
