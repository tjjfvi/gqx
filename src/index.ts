import {
  DirectiveNode,
  EnumValueDefinitionNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
} from "graphql"
import { groupDefinitions } from "./groupDefinitions"
import { parseSchema } from "./parseSchema"
import { stringifyBoilerplate } from "./stringifyBoilerplate"
import { stringifyEnumTypes } from "./stringifyEnumTypes"
import { stringifyInputTypes } from "./stringifyInputTypes"
import stringifyObjectTypes from "./stringifyObjectTypes"
import stringifyOperations from "./stringifyOperations"
import { stringifyScalarTypes } from "./stringifyScalarTypes"
import { stringifyTypeDirectives } from "./stringifyTypeDirectives"

interface Context {
  typeDirectives: Record<string, DirectiveNode[]>
  inputTypes: { [k: string]: InputValueDefinitionNode[] }
  enumTypes: { [k: string]: EnumValueDefinitionNode[] }
  objectTypes: {
    [k: string]: {
      fields: FieldDefinitionNode[]
      subtypes: string[]
      supertypes: string[]
    }
  }
  operations: [string, string][]
  baseTypes: string[]
  scalarTypes: string[]
}

export default ({ schemaPath }: { schemaPath: string }) => {
  const ctx: Context = {
    operations: [],
    baseTypes: [],
    scalarTypes: [],
    enumTypes: {},
    inputTypes: {},
    objectTypes: {},
    typeDirectives: {},
  }

  const asts = parseSchema(schemaPath)

  groupDefinitions(ctx, asts.flatMap(x => x.definitions))

  const code = [
    "/* eslint-disable */",
    stringifyBoilerplate(),
    stringifyEnumTypes(ctx),
    stringifyInputTypes(ctx),
    stringifyObjectTypes(ctx),
    stringifyOperations(ctx),
    stringifyTypeDirectives(ctx),
    stringifyScalarTypes(ctx),
    "",
  ].join("\n\n").replace(/\n\n\n+/g, "\n\n")

  return code
}

export { Context }
