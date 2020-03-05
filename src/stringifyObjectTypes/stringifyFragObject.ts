
import { Context, Obj } from ".";
import stringifyId from "./stringifyId";

export default (obj: Obj, ctx: Context) => {
  ctx.exports.push(obj.type);
  return `const _${obj.type} = {${
    obj.shallowProps.length ?
      "\n" + obj.shallowProps.map(p =>
        `  ${p.id.prop}: ${stringifyId(p.id)},\n`
      ).join("") :
      ""
  }};\n\n` +
  `const ${obj.type}${obj.deepProps.length ?
    `: typeof _${obj.type} & {\n${
      obj.deepProps.map(p =>
        `  ${p.id.prop}: $$MapWrap<typeof ${p.type}, typeof ${stringifyId(p.id)}>,\n`
      ).join("")
    }} = {\n  ..._${obj.type},\n${
      obj.deepProps.map(p =>
        `  ${p.id.prop}: $$mapWrap(() => ${p.type}, ${stringifyId(p.id)}),\n`
      ).join("")
    }}` :
    `= _${obj.type}`
  }`;
}
