
import { Context, Obj } from "."
import stringifyId from "./stringifyId";
import indent from "../indent";

export default (objs: Obj[], ctx: Context) =>
  Object.entries(ctx.config.vars).map(([k, [f, e]]) => {
    if(e) ctx.exports.push(k);
    return `const ${k} = {\n${
      objs.map(o =>
        indent`${o.prop}: {\n${
          o.props.map(p =>
            indent`${p.id.prop}: ${f}<typeof ${stringifyId(p.id)}>(${stringifyId(p.id)}),\n`
          ).join("")
        }},\n`
      ).join("")
    }}`
  }).join("\n\n")
