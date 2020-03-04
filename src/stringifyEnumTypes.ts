
import { Context } from ".";

export default (ctx: Context) =>
  Object.entries(ctx.enumTypes).map(([name, ast]) => {
    ctx.exports.push(name);
    return `type ${name} =${ast.values.map(v => `\n  | ` + JSON.stringify(v.name.value)).join("")}`
  }).join("\n")
