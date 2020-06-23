
import { Id } from ".";
import stringifyId from "./stringifyId";
import indent from "../indent";

const str = (x: string) => JSON.stringify(x);

export default (ids: Id[]) =>
  ids.map(id =>
    [
      `export class ${stringifyId(id)} {`,
      indent`private static _: any;`,
      indent`static type = ${str(id.type)} as const;`,
      indent`static prop = ${str(id.prop)} as const;`,
      indent`static f = ${stringifyId(id)};`,
      `}`,
    ].join("\n")
  ).join("\n")
