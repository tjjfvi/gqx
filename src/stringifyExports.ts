
import { Context } from ".";
import indent from "./indent";

export default (ctx: Context) =>
  `export {\n${ctx.exports.map(e => indent`${e},\n`).join("")}}`;
