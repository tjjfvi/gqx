import { Context } from ".";
import { DefinitionNode } from "graphql";

export default (ctx: Context, definitions: readonly DefinitionNode[]) => {
  definitions.map(def => {
    if(def.kind === "InputObjectTypeDefinition" || def.kind === "InputObjectTypeExtension")
      ctx.inputTypes[def.name.value] = (ctx.inputTypes[def.name.value] || []).concat(def.fields);
    else if(def.kind === "EnumTypeDefinition")
      ctx.enumTypes[def.name.value] = (ctx.enumTypes[def.name.value] || []).concat(def.values);
    else if(def.kind === "ObjectTypeDefinition" || def.kind === "ObjectTypeExtension")
      ctx.objectTypes[def.name.value] = (ctx.objectTypes[def.name.value] || []).concat(def.fields);
  });
}
