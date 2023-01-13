import { Context } from "."
import { stringifyEnum } from "./stringifyEnum"

export const stringifyScalarTypes = (ctx: Context) =>
  ctx.scalarTypes.map(name => `export type ${name} = $$Scalars["${name}"]`).join("\n") + "\n\n"
  + `export type $$ScalarType = ${stringifyEnum(ctx.scalarTypes.map(x => JSON.stringify(x)))}`
