import { Obj } from "."
import stringifyId from "./stringifyId"
import { Prop } from ".";
import indent from "../indent";

export default (
  name: string,
  objs: Obj[],
  f: (obj: Obj, prop: Prop) => string,
  extraGenerics = "",
  cond = (o: Obj, p: Prop) =>
    `T extends typeof ${stringifyId(p.id)} ? ${o.type}.${p.id.prop} : never`
) =>
  `
export namespace ${name} {
${
  objs.map(o =>
    indent`export namespace ${o.type} {\n${o.props.map(p =>
      indent`export ${f(o, p)}\n`
    ).join("")}}\n`
  ).join("")
}
${
  indent`export type $<T${extraGenerics}> =\n${
    objs.flatMap(o => o.props.map(p => [o, p] as [Obj, Prop])).map(([o, p]) =>
      indent`| (${cond(o, p)})`
    ).join("\n")
  }`
}
}
`.trim()
