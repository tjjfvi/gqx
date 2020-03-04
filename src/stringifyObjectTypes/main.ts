
import { unwrapType, Context, stringifyFragResult, stringifyIds, stringifyFragEnums } from "."

interface Id {
  type: string;
  prop: string;
}

interface Prop {
  id: Id;
  type: string;
  shallow: boolean;
  wrap: (x: string) => string;
}

interface Obj {
  type: string;
  shallowProps: Prop[];
  deepProps: Prop[];
}

export { Id, Prop, Obj };

export default (ctx: Context) => {
  const ids: Id[] = [];

  const objs: Obj[] =
    Object.keys(ctx.objectTypes)
      .filter(k => !ctx.baseTypes.includes(k))
      .sort()
      .map(name => {
        const fields = ctx.objectTypes[name];
        const props = fields.map(field => {
          const id: Id = {
            type: name,
            prop: field.name.value,
          };
          ids.push(id);
          const [{ name: { value: typeName } }, wrap] = unwrapType(field.type);
          const shallow = typeName in ctx.objectTypes;
          let prop: Prop = {
            id,
            type: typeName,
            shallow,
            wrap,
          };
          return prop;
        }).sort((p, q) => p.id.prop > q.id.prop ? 1 : -1);
        const shallowProps = props.filter(p => p.shallow);
        const deepProps = props.filter(p => !p.shallow);
        const obj: Obj = {
          type: name,
          shallowProps,
          deepProps,
        };
        return obj;
      })

  return [
    stringifyIds(ids),
    stringifyFragEnums(objs, ctx),
    ...objs.map(o => stringifyFragResult(o, ctx))
  ].join("\n\n");
}

