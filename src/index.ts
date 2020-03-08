
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
import loadConfig, { Config } from "./loadConfig";
import stringifyDirectives, { Prop as DirProp } from "./stringifyDirectives";

interface Context {
  exports: string[];
  inputTypes: { [k: string]: InputValueDefinitionNode[] };
  enumTypes: { [k: string]: EnumValueDefinitionNode[] };
  objectTypes: { [k: string]: FieldDefinitionNode[] };
  operations: [string, string][];
  baseTypes: string[];
  config: Config;
}

export default ({ schema, template }: { schema: string; template: string }) => {

  const ast = parse(schema);
  const [config, wrapper] = loadConfig(template);

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
    stringifyDirectives(ctx),
    stringifyExports(ctx),
  ].join("\n\n").replace(/\n\n\n+/g, "\n\n");

  return wrapper(code);

}

export { Context };
