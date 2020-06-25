

import { Obj } from ".";

export default (objs: Obj[]) =>
  objs.map(obj =>
    `export type ${obj.type}$ = $$ObjectTypeInfoMap["${obj.type}"]["Frag"];`
  ).join("\n")
