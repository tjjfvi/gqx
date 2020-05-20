
import { Obj, Context } from ".";
import stringifyNamespace from "./stringifyNamespace";

export default (objs: Obj[], ctx: Context) =>
  stringifyNamespace("$$Frag", objs, (o, p) =>
    `type ${p.id.prop} = $$DeepArray<${(p.type in ctx.objectTypes ? `${p.type}$` : "never")}>;`
  )
