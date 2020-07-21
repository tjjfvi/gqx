
import { Obj } from "."
import { stringifyId } from "./stringifyId";
import { indent } from "../indent";

export const stringifyObjectGen = (objs: Obj[]) =>
  `export const $$generateObject = <R extends $$GqxReturn>(f: $$GqxImpl<R>) => ({\n${
    objs.map(o =>
      indent`${o.prop}: {\n${
        o.props.map(p =>
          indent`${p.id.prop}: f(${stringifyId(p.id)}),\n`
        ).join("")
      }},\n`
    ).join("")
  }})`
