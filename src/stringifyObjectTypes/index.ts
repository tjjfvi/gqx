
import { Context } from "..";
import stringifyFragEnums from "./stringifyFragEnums";
import stringifyFragResult from "./stringifyFragResult";
import { stringifyObjectTypeInfo } from "./stringifyObjectTypeInfo";
import stringifyFragObject from "./stringifyFragObject";
import generateObjs from "./generateObjs";
import { InputValueDefinitionNode, DirectiveNode } from "graphql";

interface Id {
  type: string;
  prop: string;
}

interface Prop {
  id: Id;
  type: string;
  shallow: boolean;
  wrap: (x: string) => string;
  wrapHKT: string;
  args: InputValueDefinitionNode[];
  directives: DirectiveNode[];
}

interface Obj {
  type: string;
  shallowProps: Prop[];
  deepProps: Prop[];
  props: Prop[];
  isBase: boolean;
}

export { Id, Prop, Obj, Context };

export default (ctx: Context) => {
  const [objs] = generateObjs(ctx);

  return [
    stringifyObjectTypeInfo(ctx, objs),
    stringifyFragEnums(objs),
    ...objs.map(o => stringifyFragObject(o)),
    objs.map(o => stringifyFragResult(o)).join("\n")
  ].join("\n\n");
}

