
import stringifyInputType from "./stringifyInputType";
import { Context } from ".";

export default (ctx: Context) =>
  Object.entries(ctx.inputTypes).map(([name, fields]) =>
    stringifyInputType(name, fields)
  ).join("\n\n")
