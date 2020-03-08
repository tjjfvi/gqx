
import { Obj } from ".";
import stringifyInputType from "../stringifyInputType";
import stringifyNamespace from "./stringifyNamespace";

export default (objs: Obj[]) =>
  stringifyNamespace("$$Input", objs, (o, p) => stringifyInputType(p.id.prop, p.args))
