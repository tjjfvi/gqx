import { Context } from ".";
import { DefinitionNode, SchemaDefinitionNode } from "graphql";

export const groupDefinitions = (ctx: Context, definitions: readonly DefinitionNode[]) => {
  ctx.scalarTypes.push(
    "Int",
    "Float",
    "ID",
    "String",
    "Boolean",
  );

  const schemaDef: undefined | SchemaDefinitionNode =
    definitions.find((d): d is SchemaDefinitionNode => d.kind === "SchemaDefinition");
  const operations: [string, string][] = schemaDef ?
    schemaDef.operationTypes.map(o => [o.operation, o.type.name.value]) :
    [];
  ctx.operations = operations;
  ctx.baseTypes = operations.map(o => o[1]);
  definitions.map(def => {
    const createObjType = () => ({
      fields: [],
      unions: [],
      implements: [],
    });

    if(def.kind === "InputObjectTypeDefinition" || def.kind === "InputObjectTypeExtension")
      return ctx.inputTypes[def.name.value] = (ctx.inputTypes[def.name.value] || []).concat(def.fields ?? []);
    else if(def.kind === "EnumTypeDefinition" || def.kind === "EnumTypeExtension")
      ctx.enumTypes[def.name.value] = (ctx.enumTypes[def.name.value] || []).concat(def.values ?? []);
    else if(def.kind === "UnionTypeDefinition" || def.kind === "UnionTypeExtension")
      (ctx.objectTypes[def.name.value] = ctx.objectTypes[def.name.value] || createObjType())
        .unions.push(...def.types?.map(x => x.name.value) ?? []);
    else if(
      def.kind === "ObjectTypeDefinition" ||
      def.kind === "ObjectTypeExtension" ||
      def.kind === "InterfaceTypeDefinition" ||
      def.kind === "InterfaceTypeExtension" ||
    false) {
      const objType = ctx.objectTypes[def.name.value] = ctx.objectTypes[def.name.value] ?? createObjType();
      objType.fields.push(...def.fields ?? []);
      objType.implements.push(...def.interfaces?.map(i => i.name.value) ?? []);
      for(const { name } of def.interfaces ?? [])
        ((ctx.objectTypes[name.value] = ctx.objectTypes[name.value] ?? createObjType()))
          .unions.push(def.name.value);
    } else if(def.kind === "ScalarTypeDefinition" || def.kind === "ScalarTypeExtension")
      ctx.scalarTypes.push(def.name.value);
    else
      return;
    ctx.typeDirectives[def.name.value] = (ctx.typeDirectives[def.name.value] ?? []).concat(def.directives ?? []);
  });
}
