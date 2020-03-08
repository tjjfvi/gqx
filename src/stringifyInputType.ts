
import unwrapType from "./unwrapType";
import { InputValueDefinitionNode } from "graphql";
import indent from "./indent";

export default (name: string, fields: InputValueDefinitionNode[]) =>
  `interface ${name} ` + (
    fields.length ?
      `{\n${fields.map(field => {
        let [type, wrap, maybe] = unwrapType(field.type, true);
        let typeStr = wrap(type.name.value);
        let colon = maybe ? "?: " : ": ";
        return indent`${field.name.value}${colon}${typeStr};`;
      }).join("\n")}\n}` :
      "{}"
  )
