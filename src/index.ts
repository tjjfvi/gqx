
import {
  parse,
  SchemaDefinitionNode,
  EnumTypeDefinitionNode,
  InputValueDefinitionNode,
  FieldDefinitionNode
} from "graphql";
import stringifyEnumTypes from "./stringifyEnumTypes";
import stringifyInputTypes from "./stringifyInputTypes";
import stringifyObjectTypes from "./stringifyObjectTypes";
import stringifyExports from "./stringifyExports";
import boilerplate from "./boilerplate";
import stringifyOperations from "./stringifyOperations";

interface Context {
  exports: string[];
  inputTypes: { [k: string]: InputValueDefinitionNode[] };
  enumTypes: { [k: string]: EnumTypeDefinitionNode };
  objectTypes: { [k: string]: FieldDefinitionNode[] };
  operations: [string, string][];
  baseTypes: string[];
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
  };

  ast.definitions.map(def => {
    if(def.kind === "InputObjectTypeDefinition" || def.kind === "InputObjectTypeExtension")
      ctx.inputTypes[def.name.value] = (ctx.inputTypes[def.name.value] || []).concat(def.fields);
    else if(def.kind === "EnumTypeDefinition")
      ctx.enumTypes[def.name.value] = def;
    else if(def.kind === "ObjectTypeDefinition" || def.kind === "ObjectTypeExtension")
      ctx.objectTypes[def.name.value] = (ctx.objectTypes[def.name.value] || []).concat(def.fields);
  });

  const code = [
    boilerplate,
    stringifyEnumTypes(ctx),
    stringifyInputTypes(ctx),
    stringifyObjectTypes(ctx),
    stringifyOperations(ctx),
    stringifyExports(ctx),
  ].join("\n\n").replace(/\n\n\n+/g, "\n\n");

  return code;

}

export { Context };
