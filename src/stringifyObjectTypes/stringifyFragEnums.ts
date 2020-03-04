
import { Obj, stringifyId, Context } from ".";

export default (objs: Obj[], ctx: Context) =>
  objs.map(obj => {
    ctx.exports.push(obj.type + "$");
    return `type ${obj.type}$ =` +
    obj.shallowProps.map(p => `  | typeof ${stringifyId(p.id)}\n`).join("") +
    obj.deepProps.map(p => `  | $<${stringifyId(p.id)}, ${p.type}$>\n`).join("")
  }).join("\n");
