
import stringifyInputType from "./stringifyInputType";
import { Context } from ".";

export default (ctx: Context) =>
  Object.entries(ctx.inputTypes).map(([name, fields]) => {
    ctx.exports.push(name);
    return stringifyInputType(name, fields)
  }).join("\n\n")
