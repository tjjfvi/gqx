
import { Context } from "..";
import unwrapType from "../unwrapType";
import { InputValueDefinitionNode } from "graphql";
import stringifyProps from "./stringifyProps"
import stringifyInputTypes from "./stringifyInputTypes";
import stringifyFragTypes from "./stringifyFragTypes";
import stringifyOutputTypes from "./stringifyOutputTypes";
import stringifyVariables from "./stringifyVariables";


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

  return [
    stringifyProps(objs),
    stringifyInputTypes(objs),
    stringifyFragTypes(objs, ctx),
    stringifyOutputTypes(objs, ctx),
    stringifyVariables(objs, ctx),
  ].join("\n\n");
}

