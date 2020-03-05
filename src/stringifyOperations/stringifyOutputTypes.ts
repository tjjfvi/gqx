
import { Obj, Context } from ".";
import stringifyNamespace from "./stringifyNamespace";
import stringifyId from "./stringifyId";

export default (objs: Obj[], ctx: Context) =>
  stringifyNamespace("$$Output", objs, (o, p) =>
    `type ${p.id.prop}<F extends $$Frag.$<${stringifyId(p.id)}>[]> = ${p.wrap(
      p.type in ctx.objectTypes ? `$${p.type}<F>` : p.type
    )}`,
  ", F extends $$Frag.$<T>[]", (o, p) =>
    `    F extends $$Frag.$<${stringifyId(p.id)}>[] ? ${o.type}.${p.id.prop}<F> :\n`
  )
