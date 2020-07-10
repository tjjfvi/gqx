
import { Context, Obj, Id, Prop } from ".";
import unwrapType from "../unwrapType";

export default (ctx: Context): [Obj[], Id[], Context] => {
  const ids: Id[] = [];
  const objs: Obj[] =
    Object.keys(ctx.objectTypes)
      .sort()
      .map(name => {
        const { fields, unions, implements: impls } = ctx.objectTypes[name];
        const props = fields.map(field => {
          const id: Id = {
            type: name,
            prop: field.name.value,
          };
          ids.push(id);
          const [{ name: { value: typeName } }, wrap,, wrapHKT] = unwrapType(field.type);
          const shallow = !(typeName in ctx.objectTypes);
          let prop: Prop = {
            id,
            type: typeName,
            shallow,
            wrap,
            wrapHKT,
            args: field.arguments?.slice() ?? [],
            directives: field.directives?.slice() ?? [],
            loc: field.loc,
          };
          return prop;
        }).sort((p, q) => p.id.prop > q.id.prop ? 1 : -1);
        const shallowProps = props.filter(p => p.shallow);
        const deepProps = props.filter(p => !p.shallow);
        const obj: Obj = {
          type: name,
          shallowProps,
          deepProps,
          props,
          unions,
          implements: impls,
          isBase: ctx.baseTypes.includes(name),
        };
        return obj;
      });
  return [objs, ids, ctx];
}
