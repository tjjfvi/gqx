
import { Context, Obj } from ".";
import stringifyId from "./stringifyId";

export default (obj: Obj, ctx: Context) => {
  ctx.exports.push("$" + obj.type);
  return `type $$${obj.type}<F extends ${obj.type}$> =\n${[
    ...obj.shallowProps.map(prop =>
      `  & (typeof ${stringifyId(prop.id)} extends F ? { ${prop.id.prop}: ${prop.wrap(prop.type)} } : {})\n`
    ),
    ...obj.deepProps.map(prop =>
      `${prop.id.prop}: ${prop.wrap(`$$${prop.type}<$$FilterSub<F, typeof ${stringifyId(prop.id)}, ${prop.type}$>>`)}`
    ).map(x => "  & { " + x + " }\n"),
  ].join("")}` +
  `type $${obj.type}<F extends ${obj.type}$[]> = $$${obj.type}<F[number]>;`
}
