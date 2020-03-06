
import { Context, Obj } from "."
import stringifyId from "./stringifyId";
import stringifyNamespace from "./stringifyNamespace";

export default (objs: Obj[], ctx: Context) =>
  Object.entries(ctx.config.types || {}).map(([k, [f, e]]) =>
    stringifyNamespace(k, objs, (o, p) =>
      `type ${p.id.prop} = ${f}<${stringifyId(p.id)}>;`
    ).slice(e ? 0 : "export ".length)
  ).join("\n\n")
