
import { Context } from "..";
import { InputValueDefinitionNode } from "graphql";
import stringifyProps from "./stringifyProps"
import stringifyInputTypes from "./stringifyInputTypes";
import stringifyFragTypes from "./stringifyFragTypes";
import stringifyOutputTypes from "./stringifyOutputTypes";
import stringifyVariables from "./stringifyVariables";
import generateObjs from "./generateObjs";
import stringifyTypeVars from "./stringifyTypeVars";


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
    stringifyProps(objs),
    stringifyInputTypes(objs),
    stringifyFragTypes(objs, ctx),
    stringifyOutputTypes(objs, ctx),
    stringifyVariables(objs, ctx),
    stringifyTypeVars(objs, ctx),
  ].join("\n\n");
}

