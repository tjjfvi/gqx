
import { Context, Obj, Prop } from ".";
import stringifyId from "./stringifyId";
import indent from "../indent";

type P = [Prop, string, string];

export default (obj: Obj, ctx: Context) => {
  ctx.exports.push("$" + obj.type);

  const shallows = obj.shallowProps.map((prop): P =>
    [prop, "typeof " + stringifyId(prop.id), prop.type]
  );

  const deeps = obj.deepProps.map((prop): [Prop, (x: string) => string] =>
    [prop, x => `$<typeof ${stringifyId(prop.id)}, ${x}>`]
  ).map(([prop, sub]): P =>
    [prop, sub("any"), `_$${prop.type}<Extract<F, ${sub(prop.type + "$")}>["l"]>`]
  );

  const core = `type _$${obj.type}<F extends ${obj.type}$> =\n${
    [...shallows, ...deeps].map(x =>
      indent`& (${x[1]} extends F ? { ${x[0].id.prop}: ${x[0].wrap(x[2])} } : {})\n`
    ).join("")
  }`;

  const alias = `type $${obj.type}<F extends ${obj.type}$[]> = _$${obj.type}<F[number]>;`;

  return core + alias;
}
