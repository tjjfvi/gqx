
import {
  parse,
  InputValueDefinitionNode,
  FieldDefinitionNode,
  EnumValueDefinitionNode
} from "graphql";
import stringifyEnumTypes from "./stringifyEnumTypes";
import stringifyInputTypes from "./stringifyInputTypes";
import stringifyObjectTypes from "./stringifyObjectTypes";
import stringifyOperations from "./stringifyOperations";
import stringifyBoilerplate from "./stringifyBoilerplate";
import groupDefinitions from "./groupDefinitions";
import stringifyDirectives from "./stringifyDirectives";

interface Context {
  inputTypes: { [k: string]: InputValueDefinitionNode[] };
  enumTypes: { [k: string]: EnumValueDefinitionNode[] };
  objectTypes: { [k: string]: FieldDefinitionNode[] };
  operations: [string, string][];
  baseTypes: string[];
}

export default ({ schema }: { schema: string }) => {

  const ast = parse(schema);

  const ctx: Context = {
    operations: [],
    baseTypes: [],
    enumTypes: {},
    inputTypes: {},
    objectTypes: {},
  };

  groupDefinitions(ctx, ast.definitions);

  const code = [
    "/* eslint-disable */",
    stringifyBoilerplate(),
    stringifyEnumTypes(ctx),
    stringifyInputTypes(ctx),
    stringifyObjectTypes(ctx),
    stringifyOperations(ctx),
    stringifyDirectives(ctx),
  ].join("\n\n").replace(/\n\n\n+/g, "\n\n");

  return code;

}

export { Context };
