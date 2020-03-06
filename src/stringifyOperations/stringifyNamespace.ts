import { Obj } from "."
import stringifyId from "./stringifyId"
import { Prop } from ".";

export default (
  name: string,
  objs: Obj[],
  f: (obj: Obj, prop: Prop) => string,
  extraGenerics = "",
  cond = (o: Obj, p: Prop) =>
    `    T extends typeof ${stringifyId(p.id)} ? ${o.type}.${p.id.prop} :`
) =>
  `
export namespace ${name} {
${
  objs.map(o =>
    `  export namespace ${o.type} {\n${o.props.map(p =>
      `    export ` + f(o, p) + `\n`
    ).join("")}  }\n`
  ).join("")
}
  export type $<T${extraGenerics}> =
${
  objs.map(o => o.props.map(p =>
    cond(o, p)
  ).join("\n")).join("\n")
}
    never
}
`.trim()
