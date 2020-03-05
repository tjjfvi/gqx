
import { Context } from "..";
import unwrapType from "../unwrapType";
import { InputValueDefinitionNode } from "graphql";
import stringifyIds from "./stringifyIds"
import stringifyInputTypes from "./stringifyInputTypes";
import stringifyFragTypes from "./stringifyFragTypes";
import stringifyOutputTypes from "./stringifyOutputTypes";


interface Id {
  type: string;
  prop: string;
}

interface Prop {
  id: Id;
  type: string;
  wrap: (x: string) => string;
  args: InputValueDefinitionNode[];
}

interface Obj {
  type: string;
  prop: string;
  props: Prop[];
}

export { Id, Prop, Obj, Context };

export default (ctx: Context) => {
  const ids: Id[] = [];

  const objs: Obj[] =
    ctx.operations
      .map(([prop, name]) => {
        const fields = ctx.objectTypes[name];
        const props = fields.map(field => {
          const id: Id = {
            type: name,
            prop: field.name.value,
          };
          ids.push(id);
          const [{ name: { value: typeName } }, wrap] = unwrapType(field.type);
          let prop: Prop = {
            id,
            type: typeName,
            wrap,
            args: field.arguments.slice(),
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

  ctx.exports.push("$$Input", "$$Output", "$$Frag");

  return [
    stringifyIds(ids),
    stringifyInputTypes(objs),
    stringifyFragTypes(objs, ctx),
    stringifyOutputTypes(objs, ctx),
  ].join("\n\n");
}

