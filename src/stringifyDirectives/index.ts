import { ArgumentNode } from "graphql";
import { Context } from "..";
import generateObjs from "./generateObjs";
import stringifyNamespace from "./stringifyNamespace";

interface Dir {
  type: string;
  prop: string;
  dirName: string;
  dirArgs?: ArgumentNode[];
}

interface Obj {
  type: string;
  props: Prop[];
}

interface Prop {
  type: string;
  prop: string;
  dirs: Dir[];
}

export { Dir, Obj, Prop };

export default (ctx: Context) =>
  stringifyNamespace(generateObjs(ctx))
