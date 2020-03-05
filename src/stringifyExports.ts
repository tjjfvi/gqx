
import { Context } from ".";

export default (ctx: Context) =>
  `export {\n${ctx.exports.map(e => `  ${e},\n`).join("")}}`;
