
import { Obj } from ".";

export const stringifyFragResult = (obj: Obj) =>
  `export type $${obj.type}<F extends $$DeepArray<${obj.type}$>> = $$Result<"${obj.type}", $$UnwrapDeepArray<F>>`
