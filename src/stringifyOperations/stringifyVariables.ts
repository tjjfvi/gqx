
import { Context, Obj } from "."
import stringifyId from "./stringifyId";

export default (objs: Obj[], ctx: Context) =>
  Object.entries(ctx.config.vars || {}).map(([k, v]) => {
    if(!(v instanceof Array))
      throw new Error("config.vars[string] must be an array");
    let [f, e = true] = v;
    if(typeof f !== "string")
      throw new Error("config.vars[string][0] must be a string");
    if(typeof e !== "boolean")
      throw new Error("config.vars[string][1] must be a boolean");
    if(e) ctx.exports.push(k);
    return `const ${k} = {\n${objs.map(o =>
      `  ${o.prop}: {\n${o.props.map(p =>
        `    ${p.id.prop}: ${v[0]}<typeof ${stringifyId(p.id)}>(${stringifyId(p.id)}),\n`
      ).join("")}  },\n`
    ).join("")}}`
  }).join("\n\n")
