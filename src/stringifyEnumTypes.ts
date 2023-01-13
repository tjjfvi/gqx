import { Context } from "."
import { stringifyEnum } from "./stringifyEnum"
import { stringifyObject } from "./stringifyObject"
import { stringifyValue } from "./stringifyValue"

export const stringifyEnumTypes = (ctx: Context) =>
  Object.entries(ctx.enumTypes).map(([name, values]) =>
    `export type ${name} = ${stringifyEnum(values.map(v => JSON.stringify(v.name.value)))}`
  ).join("\n\n") + "\n\n"
  + `export type $$EnumDirectives = ${
    stringifyObject(
      Object.entries(ctx.enumTypes).map((
        [name, values],
      ) => [
        name,
        stringifyObject(
          values.filter(v => v.directives?.length).map(
            value => [
              value.name.value,
              stringifyObject(
                value.directives?.map(
                  dir => [
                    dir.name.value,
                    stringifyObject(
                      dir.arguments?.map(arg => [arg.name.value, stringifyValue(arg.value)]) ?? [],
                    ),
                  ],
                ) ?? [],
              ),
            ],
          ),
        ),
      ]),
    )
  }\n\n`
  + `export interface $$EnumTypes ${
    stringifyObject(Object.entries(ctx.enumTypes).map(([name]) => [name, name]))
  }`
