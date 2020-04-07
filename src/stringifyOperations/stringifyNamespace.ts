import { Obj } from "."
import stringifyId from "./stringifyId"
import { Prop } from ".";
import indent from "../indent";

export default (
  name: string,
  objs: Obj[],
  f: (obj: Obj, prop: Prop) => string,
  extraGenerics = "",
  passGenerics = "",
  cond = (o: Obj, p: Prop, next: string) =>
    `T extends typeof ${stringifyId(p.id)} ? ${o.type}.${p.id.prop} : ${next}`
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
  indent`export ${
    objs.flatMap(o => o.props.map(p => [o, p] as [Obj, Prop])).map(([o, p], i, a) =>
      `type ${i ? "$$" + i : "$"}<T${extraGenerics}> =\n` +
      indent(cond(o, p, (i === a.length - 1 ? "never" : `$$${i + 1}<T${passGenerics}>`))) + ";"
    ).join("\n")
  }`
}
}
`.trim()
