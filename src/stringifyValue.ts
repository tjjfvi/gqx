import { ValueNode } from "graphql";
import { inspect } from "util";
import indent from "./indent";


export const stringifyValue = (val: ValueNode): string =>
  val.kind === "BooleanValue" || val.kind === "StringValue" || val.kind === "EnumValue" ?
    JSON.stringify(val.value) :
    val.kind === "IntValue" || val.kind === "FloatValue" ?
      val.value :
      val.kind === "Variable" || val.kind === "NullValue" ?
        "null" :
        val.kind === "ListValue" ?
          `[\n${val.values.map(v => indent`${stringifyValue(v)},\n`).join("")}]` :
          val.kind === "ObjectValue" ?
            `{\n${val.fields.map(f =>
              indent`${f.name.value}: ${stringifyValue(f.value)},\n`
            ).join("")}}` :
            ((val: never) => {
              throw new Error("Invalid ValueNode " + inspect(val));
            })(val)
