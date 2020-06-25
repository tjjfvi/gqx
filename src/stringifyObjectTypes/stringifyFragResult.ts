
import { Obj } from ".";

export default (obj: Obj) =>
  `export type $${obj.type}<F extends $$DeepArray<${obj.type}$>> = $$Result<"${obj.type}", $$UnwrapDeepArray<F>>`
