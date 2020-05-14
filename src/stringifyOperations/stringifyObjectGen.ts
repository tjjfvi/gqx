
import { Obj } from "."
import stringifyId from "./stringifyId";
import indent from "../indent";

export default (objs: Obj[]) =>
  `export const $$generateObject = <F extends $$GqxFunc>(f: $$GqxImpl<F>) => ({\n${
    objs.map(o =>
      indent`${o.prop}: {\n${
        o.props.map(p =>
          indent`${p.id.prop}: f(${stringifyId(p.id)}),\n`
        ).join("")
      }},\n`
    ).join("")
  }})`
