
import { Obj, Prop } from ".";
import stringifyId from "./stringifyId";
import indent from "../indent";

type P = [Prop, string];

export default (obj: Obj) => {
  const shallows = obj.shallowProps.map((prop): P =>
    [prop, prop.type]
  );

  const deeps = obj.deepProps.map((prop): P =>
    [prop, `_$${prop.type}<Extract<F, $<typeof ${stringifyId(prop.id)}, ${prop.type}$>>["l"]>`]
  );

  const interfaceProps = [...shallows, ...deeps].map(x =>
    indent`${x[0].id.prop}: ${x[0].wrap(x[1])},`
  ).join("\n");

  const full = `interface __$${obj.type}<F extends ${obj.type}$> {\n${interfaceProps}\n}`;

  const filtered =
    `type _$${obj.type}<F extends ${obj.type}$> = Pick<__$${obj.type}<F>, F["f"]["prop"]>;`

  const alias =
    `export type $${obj.type}<F extends $$DeepArray<${obj.type}$>> = _$${obj.type}<$$UnwrapDeepArray<F>>`

  return [full, filtered, alias].join("\n");
}
