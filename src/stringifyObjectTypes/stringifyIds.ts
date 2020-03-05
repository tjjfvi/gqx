
import { Id } from ".";
import stringifyId from "./stringifyId";

export default (ids: Id[]) =>
  ids.map(id => `class ${stringifyId(id)} { declare private __nominal__: any; }\n`).join("")
