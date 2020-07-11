import { Context } from ".";

export const stringifyScalarTypes = (ctx: Context) =>
  ctx.scalarTypes.map(name =>
    `export type ${name} = $$Scalars["${name}"]`
  ).join("\n")
