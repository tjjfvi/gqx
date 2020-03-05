

import { Obj, Context } from ".";
import stringifyId from "./stringifyId";

export default (objs: Obj[], ctx: Context) =>
  objs.map(obj => {
    ctx.exports.push(obj.type + "$");
    return `type ${obj.type}$ =\n` +
    obj.shallowProps.map(p => `  | typeof ${stringifyId(p.id)}\n`).join("") +
    obj.deepProps.map(p => `  | $<typeof ${stringifyId(p.id)}, ${p.type}$>\n`).join("")
  }).join("\n") +
    `\ntype $_ =${objs.map(o => `\n  | ${o.type}$`).join("")}`
