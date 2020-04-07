
import { Context } from "..";
import stringifyFragEnums from "./stringifyFragEnums";
import stringifyFragResult from "./stringifyFragResult";
import stringifyIds from "./stringifyIds";
import stringifyFragObject from "./stringifyFragObject";
import generateObjs from "./generateObjs";

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

export { Id, Prop, Obj, Context };

export default (ctx: Context) => {
  const [objs, ids] = generateObjs(ctx);

  return [
    stringifyIds(ids),
    stringifyFragEnums(objs, ctx),
    ...objs.map(o => stringifyFragObject(o, ctx)),
    ...objs.map(o => stringifyFragResult(o))
  ].join("\n\n");
}

