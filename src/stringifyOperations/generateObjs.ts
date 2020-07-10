
import { Context, Obj, Id, Prop } from ".";
import unwrapType from "../unwrapType";

export default (ctx: Context): [Obj[], Context] => {
  const objs: Obj[] =
    ctx.operations
      .map(([prop, name]) => {
        const { fields } = ctx.objectTypes[name];
        const props = fields.map(field => {
          const id: Id = {
            type: name,
            prop: field.name.value,
          };
          const [{ name: { value: typeName } }, wrap] = unwrapType(field.type);
          let prop: Prop = {
            id,
            type: typeName,
            wrap,
            args: field.arguments?.slice() ?? [],
          };
          return prop;
        }).sort((p, q) => p.id.prop > q.id.prop ? 1 : -1);
        const obj: Obj = {
          type: name,
          prop,
          props,
        };
        return obj;
      })
  return [objs, ctx];
}
