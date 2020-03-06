
import { Context, Obj } from "."
import stringifyId from "./stringifyId";
import stringifyNamespace from "./stringifyNamespace";

export default (objs: Obj[], ctx: Context) =>
  Object.entries(ctx.config.types || {}).map(([k, v]) => {
    if(!(v instanceof Array))
      throw new Error("config.types[string] must be an array");
    let [f, e = true] = v;
    if(typeof f !== "string")
      throw new Error("config.types[string][0] must be a string");
    if(typeof e !== "boolean")
      throw new Error("config.types[string][1] must be a boolean");
    return stringifyNamespace(k, objs, (o, p) =>
      `type ${p.id.prop} = ${f}<${stringifyId(p.id)}>;`
    ).slice(e ? 0 : "export ".length)
  }).join("\n\n")
