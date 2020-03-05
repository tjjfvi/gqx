
import { Context } from ".";

export default (ctx: Context) =>
  Object.entries(ctx.enumTypes).map(([name, values]) => {
    ctx.exports.push(name);
    return `type ${name} =${values.map(v => `\n  | ` + JSON.stringify(v.name.value)).join("")}`
  }).join("\n")
