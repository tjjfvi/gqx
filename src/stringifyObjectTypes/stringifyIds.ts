
import { Id } from ".";
import stringifyId from "./stringifyId";

const str = (x: string) => JSON.stringify(x);

export default (ids: Id[]) =>
  ids.map(id =>
    `class ${stringifyId(id)} { private static _: any; static type = ${str(id.type)}; static prop = ${str(id.prop)}; }`
  ).join("\n")
