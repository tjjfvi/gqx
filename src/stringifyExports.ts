
import { Context } from "./main";

export default (ctx: Context) =>
  `export {\n${ctx.exports.map(e => `  ${e},\n`).join("")}}`;
