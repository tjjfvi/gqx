
import { Context } from ".";
import { stringifyObject } from "./stringifyObject";
import { stringifyEnum } from "./stringifyEnum";

export default (ctx: Context) =>
  Object.entries(ctx.enumTypes).map(([name, values]) =>
    `export type ${name} = ${stringifyEnum(values.map(v => JSON.stringify(v.name.value)))}`
  ).join("\n\n") + "\n\n" +
  `export interface $$EnumTypes ${stringifyObject(Object.entries(ctx.enumTypes).map(([name]) => [name, name]))}`

