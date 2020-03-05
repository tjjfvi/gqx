import { Obj } from "."
import stringifyId from "./stringifyId"
import { Prop } from ".";

export default (
  name: string,
  objs: Obj[],
  f: (obj: Obj, prop: Prop) => string,
  x = "",
  y = (o: Obj, p: Prop) =>
    `    T extends ${stringifyId(p.id)} ? ${o.type}.${p.id.prop} :\n`
) =>
  `export namespace ${name} {\n${objs.map(o =>
    `  export namespace ${o.type} {\n${o.props.map(p =>
      `    export ` + f(o, p) + `\n`
    ).join("")}  }\n`
  ).join("")}${
    `  export type $<T${x}> =\n` + objs.map(o => o.props.map(p =>
      y(o, p)
    ).join("")).join("") + `    never\n`
  }}`
