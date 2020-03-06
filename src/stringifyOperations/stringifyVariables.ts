
import { Context, Obj } from "."
import stringifyId from "./stringifyId";

export default (objs: Obj[], ctx: Context) =>
  Object.entries(ctx.config.vars).map(([k, [f, e]]) => {
    if(e) ctx.exports.push(k);
    return `const ${k} = {\n${
      objs.map(o =>
        `  ${o.prop}: {\n${
          o.props.map(p =>
            `    ${p.id.prop}: ${f}<typeof ${stringifyId(p.id)}>(${stringifyId(p.id)}),\n`
          ).join("")
        }  },\n`
      ).join("")
    }}`
  }).join("\n\n")
