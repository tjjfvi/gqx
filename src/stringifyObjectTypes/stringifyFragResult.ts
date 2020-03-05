
import { Context, Obj } from ".";
import stringifyId from "./stringifyId";

export default (obj: Obj, ctx: Context) => {
  ctx.exports.push("$" + obj.type);
  return `type $$${obj.type}<F extends ${obj.type}$> = {\n${ [
    ...obj.shallowProps.map(prop =>
      `${prop.id.prop}: $$FilterProp<F, typeof ${stringifyId(prop.id)}, ${prop.wrap(prop.type)}>;`
    ),
    ...obj.deepProps.map(prop =>
      `${prop.id.prop}: ${prop.wrap(`$$${prop.type}<$$FilterSub<F, typeof ${stringifyId(prop.id)}, ${prop.type}$>>`)};`
    ),
  ].map(x => "  " + x).join("\n") }\n}\n` +
  `type $${obj.type}<F extends ${obj.type}$[]> = $$${obj.type}<F[number]>;`
}
