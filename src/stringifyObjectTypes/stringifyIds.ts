
import { Id, stringifyId } from ".";

export default (ids: Id[]) =>
  ids.map(id => `const ${stringifyId(id)} = Symbol("${stringifyId(id)}");\n`).join("")
