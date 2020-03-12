

import { Obj, Context } from ".";
import stringifyId from "./stringifyId";
import indent from "../indent";

export default (objs: Obj[], ctx: Context) =>
  [
    ...objs.map(obj =>
      [
        `export type ${obj.type}$ =\n`,
        ...obj.shallowProps.map(p => indent`| typeof ${stringifyId(p.id)}\n`),
        ...obj.deepProps.map(p => indent`| $<typeof ${stringifyId(p.id)}, ${p.type}$>\n`),
      ].join("")
    ),
    `\nexport type $_ =${objs.map(o => indent`\n| ${o.type}$`).join("")}`,
  ].join("\n")
