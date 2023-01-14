import { printObject } from "./printObject"
import { printType } from "./printType"
import { InputField } from "./type"

export function printInputType(fields: InputField[]) {
  return printObject(fields.map(field => [
    field.key,
    field.type.kind === "nullable",
    printType(field.type),
  ]))
}
