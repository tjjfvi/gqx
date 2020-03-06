
import {
  parse,
  InputValueDefinitionNode,
  FieldDefinitionNode,
  EnumValueDefinitionNode
} from "graphql";
import stringifyEnumTypes from "./stringifyEnumTypes";
import stringifyInputTypes from "./stringifyInputTypes";
import stringifyObjectTypes from "./stringifyObjectTypes";
import stringifyExports from "./stringifyExports";
import stringifyOperations from "./stringifyOperations";
import stringifyBoilerplate from "./stringifyBoilerplate";
import groupDefinitions from "./groupDefinitions";

interface Context {
  exports: string[];
  inputTypes: { [k: string]: InputValueDefinitionNode[] };
  enumTypes: { [k: string]: EnumValueDefinitionNode[] };
  objectTypes: { [k: string]: FieldDefinitionNode[] };
  operations: [string, string][];
  baseTypes: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any;
}

export default ({ schema, template }: { schema: string; template: string }) => {

  const ast = parse(schema);
  const config = JSON.parse(template.match(/\/\/ @gqx (.+)/)[1]);

  const ctx: Context = {
    operations: [],
    baseTypes: [],
    enumTypes: {},
    inputTypes: {},
    objectTypes: {},
    exports: [],
    config,
  };

  groupDefinitions(ctx, ast.definitions);

  const code = [
    stringifyBoilerplate(),
    stringifyEnumTypes(ctx),
    stringifyInputTypes(ctx),
    stringifyObjectTypes(ctx),
    stringifyOperations(ctx),
    stringifyExports(ctx),
  ].join("\n\n").replace(/\n\n\n+/g, "\n\n");

  return template.replace(/\/\/ @gqx .+/, () => code).replace(/^\/\/ @ts-nocheck/, "");

}

export { Context };
