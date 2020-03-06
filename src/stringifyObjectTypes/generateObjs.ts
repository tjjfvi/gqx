
import { Context, Obj, Id, Prop } from ".";
import unwrapType from "../unwrapType";

export default (ctx: Context): [Obj[], Id[], Context] => {
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
          const shallow = !(typeName in ctx.objectTypes);
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
      });
  return [objs, ids, ctx];
}
