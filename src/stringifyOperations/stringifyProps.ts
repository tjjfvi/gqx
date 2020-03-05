
import { Obj } from ".";
import stringifyId from "./stringifyId";

const str = (x: string) => JSON.stringify(x);

export default (objs: Obj[]) =>
  objs.map(obj => obj.props.map(prop => `class ${stringifyId(prop.id)} {
  private static _: any;
  static typeProp = ${str(obj.prop)};
  static type = ${str(obj.type)};
  static prop = ${str(prop.id.prop)};
  static inputTypes = {${prop.args.length ? "\n" + prop.args.map(n =>
    `    ${n.name.value}: ${str(n.type.loc.source.body.slice(n.type.loc.start, n.type.loc.end))},\n`
  ).join("") + "  " : ""}};
}\n\n`).join("")).join("");
