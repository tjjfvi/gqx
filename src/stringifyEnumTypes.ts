
import { Context } from ".";
import indent from "./indent";

export default (ctx: Context) =>
  Object.entries(ctx.enumTypes).map(([name, values]) =>
    `export type ${name} =${values.map(v => indent`\n| ${JSON.stringify(v.name.value)}`).join("")}`
  ).join("\n")
