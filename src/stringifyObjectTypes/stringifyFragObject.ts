
import { Context, Obj, Prop } from ".";
import stringifyId from "./stringifyId";
import indent from "../indent";

export default (obj: Obj, ctx: Context) => {
  const shallowObj = genObj(obj.shallowProps, p => stringifyId(p.id));

  const deepType = genObj(obj.deepProps, p =>
    `$$MapWrap<typeof ${p.type}, typeof ${stringifyId(p.id)}>`
  );

  const deepObj = genObj(obj.deepProps, p =>
    `$$mapWrap(() => ${p.type}, ${stringifyId(p.id)})`,
  obj.shallowProps.length ? indent`..._${obj.type},\n` : "");

  if(!obj.deepProps.length)
    return `export const ${obj.type} = ${shallowObj};`;

  if(!obj.shallowProps.length)
    return `export const ${obj.type}: ${deepType} = ${deepObj};`;

  return `
const _${obj.type} = ${shallowObj};

export const ${obj.type}: typeof _${obj.type} & ${deepType} = ${deepObj};
`.trim();
}

function genObj(props: Prop[], f: (p: Prop) => string, str = ""){
  if(!props.length)
    return "{}";
  return `{\n${str}${
    props.map(p =>
      indent`${p.id.prop}: ${f(p)},`
    ).join("\n")
  }\n}`;
}
