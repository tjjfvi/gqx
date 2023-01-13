import { Context } from "."
import { stringifyInputType } from "./stringifyInputType"

export const stringifyInputTypes = (ctx: Context) =>
  Object.entries(ctx.inputTypes).map(([name, fields]) =>
    `export interface ${name} ` + stringifyInputType(ctx, fields)
  ).join("\n\n")
