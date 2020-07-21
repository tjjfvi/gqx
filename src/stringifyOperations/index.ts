
import { Context } from "..";
import { InputValueDefinitionNode } from "graphql";
import { stringifyObjectGen } from "./stringifyObjectGen";
import { generateObjs } from "./generateObjs";


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
  const [objs] = generateObjs(ctx);

  return [
    stringifyObjectGen(objs),
  ].join("\n\n");
}

