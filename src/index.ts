
import {
  parse,
  SchemaDefinitionNode,
  EnumTypeDefinitionNode,
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

  // @ts-ignore
  const schemaDef: SchemaDefinitionNode = ast.definitions.find(d => d.kind === "SchemaDefinition");
  const operations: [string, string][] = schemaDef.operationTypes.map(o => [o.operation, o.type.name.value]);
  const ctx: Context = {
    operations,
    baseTypes: operations.map(o => o[1]),
    enumTypes: {},
    inputTypes: {},
    objectTypes: {},
    exports: [],
    config,
  };

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
