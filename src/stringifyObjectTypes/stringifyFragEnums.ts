

import { Obj } from ".";

export const stringifyFragEnums = (objs: Obj[]) =>
  objs.map(obj =>
    `export type ${obj.type}$ = $$ObjectTypeInfoMap["${obj.type}"]["Frag"];`
  ).join("\n")
