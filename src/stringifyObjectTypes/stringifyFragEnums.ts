

import { Obj, Context } from ".";
import stringifyId from "./stringifyId";

export default (objs: Obj[], ctx: Context) => {
  ctx.exports.push("$_");
  return [
    ...objs.map(obj => {
      ctx.exports.push(obj.type + "$");
      return [
        `type ${obj.type}$ =\n`,
        ...obj.shallowProps.map(p => `  | typeof ${stringifyId(p.id)}\n`),
        ...obj.deepProps.map(p => `  | $<typeof ${stringifyId(p.id)}, ${p.type}$>\n`),
      ].join("");
    }),
    `\ntype $_ =${objs.map(o => `\n  | ${o.type}$`).join("")}`,
  ].join("\n")
}
