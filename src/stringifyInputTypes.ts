
import { unwrapType } from ".";
import { Context } from "./main";

export default (ctx: Context) =>
  Object.entries(ctx.inputTypes).map(([name, fields]) => {
    ctx.exports.push(name);
    return `interface ${name} ` + (
      fields.length ?
        `{\n${fields.map(field => {
          let [type, wrap, maybe] = unwrapType(field.type);
          let typeStr = wrap(type.name.value);
          let colon = maybe ? "?: " : ": ";
          return `  ${field.name.value}${colon}${typeStr},`;
        }).join("\n")}\n};` :
        "{}"
    );
  }).join("\n\n")
