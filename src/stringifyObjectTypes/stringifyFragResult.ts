
import { Obj, Prop } from ".";
import stringifyId from "./stringifyId";
import indent from "../indent";

type P = [Prop, string, string, boolean];

export default (obj: Obj) => {
  const shallows = obj.shallowProps.map((prop): P =>
    [prop, "typeof " + stringifyId(prop.id), prop.type, false]
  );

  const deeps = obj.deepProps.map((prop): [Prop, (x: string) => string] =>
    [prop, x => `$<typeof ${stringifyId(prop.id)}, ${x}>`]
  ).map(([prop, sub]): P =>
    [prop, sub("any"), `_$${prop.type}<Extract<F, ${sub(prop.type + "$")}>["l"]>`, true]
  );

  const interfaces = [...shallows, ...deeps].map(x =>
    `interface $${stringifyId(x[0].id)}${x[3] ? `<F extends ${obj.type}$>` : ""}` +
    ` { ${x[0].id.prop}: ${x[0].wrap(x[2])}; }`
  ).join("\n");

  const core = `type _$${obj.type}<F extends ${obj.type}$> =\n${
    [...shallows, ...deeps].map(x =>
      indent`& (${x[1]} extends F ? $${stringifyId(x[0].id)}${x[3] ? "<F>" : ""} : {})\n`
    ).join("")
  }`;

  const alias = `export type $${obj.type}<F extends ${obj.type}$[]> = _$${obj.type}<F[number]>;`;

  return interfaces + "\n\n" + core + alias;
}
