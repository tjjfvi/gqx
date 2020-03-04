
import { Context, Obj, stringifyId } from ".";

export default (obj: Obj, ctx: Context) => {
  ctx.exports.push("$" + obj.type);
  return `type $${obj.type}<F> = {\n${
    obj.shallowProps.map(prop =>
      `  ${prop.id.prop}: F extends typeof ${stringifyId(prop.id)} ? ${prop.wrap(prop.type)} : never,\n`
    ).join("")
  }${
    obj.deepProps.map(prop =>
      `  ${prop.id.prop}: ${prop.wrap(`$${prop.type}<Extract<F, $<${stringifyId(prop.id)}, ${prop.type}$>>["l"]>`)},\n`
    ).join("")
  }\n}`
}
