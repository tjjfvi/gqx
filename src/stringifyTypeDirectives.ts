import { Context } from "./stringifyOperations";
import { stringifyObject } from "./stringifyObject";
import { stringifyValue } from "./stringifyValue";

export const stringifyTypeDirectives = (ctx: Context) =>
  `export type $$TypeDirectives = typeof $$typeDirectives;\n` +
  `export const $$typeDirectives = ` +
  stringifyObject(Object.entries(ctx.typeDirectives).map(([type, directives]) =>
    [type, stringifyObject(directives.map(directive =>
      [
        directive.name.value,
        stringifyObject(directive.arguments?.map(arg =>
          [arg.name.value, stringifyValue(arg.value)]
        ) ?? [])
      ]
    ))]
  ))
