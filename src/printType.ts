import { NamedType, Type } from "./type"

export function printType(
  type: Type,
  printNamedType: (type: NamedType) => string = t => t.name,
): string {
  if (type.kind === "nullable") {
    return `${printType(type.inner, printNamedType)} | null | undefined`
  }
  if (type.kind === "array") {
    return `Array<${printType(type.inner, printNamedType)}>`
  }
  return printNamedType(type)
}
