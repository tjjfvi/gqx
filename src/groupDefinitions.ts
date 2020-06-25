import { Context } from ".";
import { DefinitionNode, SchemaDefinitionNode } from "graphql";

export default (ctx: Context, definitions: readonly DefinitionNode[]) => {
  const schemaDef: undefined | SchemaDefinitionNode =
    definitions.find((d): d is SchemaDefinitionNode => d.kind === "SchemaDefinition");
  const operations: [string, string][] = schemaDef ?
    schemaDef.operationTypes.map(o => [o.operation, o.type.name.value]) :
    [];
  ctx.operations = operations;
  ctx.baseTypes = operations.map(o => o[1]);
  definitions.map(def => {
    if(def.kind === "InputObjectTypeDefinition" || def.kind === "InputObjectTypeExtension")
      ctx.inputTypes[def.name.value] = (ctx.inputTypes[def.name.value] || []).concat(def.fields ?? []);
    else if(def.kind === "EnumTypeDefinition")
      ctx.enumTypes[def.name.value] = (ctx.enumTypes[def.name.value] || []).concat(def.values ?? []);
    else if(def.kind === "ObjectTypeDefinition" || def.kind === "ObjectTypeExtension")
      ctx.objectTypes[def.name.value] = (ctx.objectTypes[def.name.value] || []).concat(def.fields ?? []);
  });
}
