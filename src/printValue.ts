import { ValueNode } from "graphql"
import { indent } from "./indent"
import { printObject } from "./printObject"

export function printValue(val: ValueNode): string {
  if (val.kind === "BooleanValue" || val.kind === "StringValue" || val.kind === "EnumValue") {
    return JSON.stringify(val.value)
  }
  if (val.kind === "IntValue" || val.kind === "FloatValue") {
    return val.value
  }
  if (val.kind === "NullValue") {
    return "null"
  }
  if (val.kind === "ListValue") {
    if (!val.values.length) return "[]"
    return `[\n${val.values.map(v => indent`${printValue(v)},\n`).join("")}]`
  }
  if (val.kind === "ObjectValue") {
    return printObject(val.fields.map(f => [f.name.value, printValue(f.value)]))
  }
  throw new Error("unexpected " + val.kind)
}
