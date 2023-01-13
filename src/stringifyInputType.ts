import { InputValueDefinitionNode } from "graphql"
import { stringifyObject } from "./stringifyObject"
import { Context } from "./stringifyOperations"
import { unwrapType } from "./unwrapType"

export const stringifyInputType = (ctx: Context, fields: InputValueDefinitionNode[]) =>
  stringifyObject(
    fields.map(field => {
      const [{ name: { value: typeName } }, wrap, maybe] = unwrapType(field.type, true)
      const type = (
        typeName in ctx.objectTypes || typeName in ctx.inputTypes || typeName in ctx.enumTypes
          ? typeName
          : `$$Scalars[${JSON.stringify(typeName)}]`
      )
      const typeStr = wrap(type)
      return [field.name.value, maybe, typeStr]
    }),
  )
