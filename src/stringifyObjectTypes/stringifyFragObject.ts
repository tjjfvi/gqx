
import { Obj, Prop } from ".";
import stringifyId from "./stringifyId";
import indent from "../indent";

export default (obj: Obj) => {
  const typeofType = `\n\ntype typeof$${obj.type} = typeof ${obj.type}`

  const fragCast = `const ${obj.type}$ = <F extends $$DeepArray<${obj.type}$>>(...frag: F) => [...frag];\n\n`

  const shallowObj = genObj(
    obj.shallowProps,
    p => stringifyId(p.id),
    indent`$: ${obj.type}$,\n`
  ) + " as const";

  const deepType = genObj(obj.deepProps, p =>
    `$$MapWrap<typeof$${p.type}, ${stringifyId(p.id)}>`,
  obj.shallowProps.length ? "" : indent`$: typeof ${obj.type}$,\n`);

  const deepObj = genObj(obj.deepProps, p =>
    `$$mapWrap(() => ${p.type}, ${stringifyId(p.id)})`,
  obj.shallowProps.length ? indent`..._${obj.type},\n` : indent`$: ${obj.type}$,\n`);

  if(!obj.deepProps.length)
    return fragCast + `export const ${obj.type} = ${shallowObj};` + typeofType;

  if(!obj.shallowProps.length)
    return fragCast + `export const ${obj.type}: ${deepType} = ${deepObj};` + typeofType;


  return fragCast + `
const _${obj.type} = ${shallowObj};

export const ${obj.type}: typeof _${obj.type} & ${deepType} = ${deepObj};
`.trim() + typeofType;
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
