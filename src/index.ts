
import {
  parse,
  InputValueDefinitionNode,
  FieldDefinitionNode,
  EnumValueDefinitionNode,
  DirectiveNode
} from "graphql";
import stringifyEnumTypes from "./stringifyEnumTypes";
import stringifyInputTypes from "./stringifyInputTypes";
import stringifyObjectTypes from "./stringifyObjectTypes";
import stringifyOperations from "./stringifyOperations";
import stringifyBoilerplate from "./stringifyBoilerplate";
import groupDefinitions from "./groupDefinitions";
import { stringifyTypeDirectives } from "./stringifyTypeDirectives";

interface Context {
  typeDirectives: Record<string, DirectiveNode[]>;
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
    typeDirectives: {},
  };

  groupDefinitions(ctx, ast.definitions);

  const code = [
    "/* eslint-disable */",
    stringifyBoilerplate(),
    stringifyEnumTypes(ctx),
    stringifyInputTypes(ctx),
    stringifyObjectTypes(ctx),
    stringifyOperations(ctx),
    stringifyTypeDirectives(ctx),
    "",
  ].join("\n\n").replace(/\n\n\n+/g, "\n\n");

  return code;

}

export { Context };
