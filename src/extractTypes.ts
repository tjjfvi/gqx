import { DocumentNode, TypeNode } from "graphql"
import { Context } from "vm"
import { InputField, NamedType, Type, UnresolvedType } from "./type"

const baseScalars = ["ID", "String", "Int", "Float", "Boolean"]

export function extractTypes(documents: DocumentNode[]) {
  const types = new Map<string, NamedType>()

  for (const name of baseScalars) {
    types.set(name, {
      kind: "scalar",
      name,
      directives: [],
    })
  }

  const definitions = documents.flatMap(x => x.definitions)

  for (const typeDef of definitions) {
    if (typeDef.kind === "SchemaDefinition" || typeDef.kind === "SchemaExtension") {
      for (const operation of typeDef.operationTypes ?? []) {
        const type = getNamedType(operation.type.name.value)
        setKind(type, "object", { fields: [], subtypes: [], supertypes: [] })
        type.operationKey = operation.operation
      }
    }

    if (!("name" in typeDef) || !typeDef.name) continue

    const name = typeDef.name.value
    const type = getNamedType(name)

    if ("directives" in typeDef && typeDef.directives) {
      type.directives.push(...typeDef.directives)
    }

    if (typeDef.kind === "ScalarTypeDefinition" || typeDef.kind === "ScalarTypeExtension") {
      setKind(type, "scalar", {})
    } else if (
      typeDef.kind === "InputObjectTypeDefinition"
      || typeDef.kind === "InputObjectTypeExtension"
    ) {
      setKind(type, "input", { fields: [] })
      for (const fieldDef of typeDef.fields ?? []) {
        const key = fieldDef.name.value
        const fieldType = getType(fieldDef.type)
        type.fields.push({
          key,
          type: fieldType,
          directives: fieldDef.directives?.slice() ?? [],
        })
      }
    } else if (
      typeDef.kind === "ObjectTypeDefinition"
      || typeDef.kind === "ObjectTypeExtension"
      || typeDef.kind === "InterfaceTypeDefinition"
      || typeDef.kind === "InterfaceTypeExtension"
    ) {
      setKind(type, "object", { fields: [], subtypes: [], supertypes: [] })
      for (const fieldDef of typeDef.fields ?? []) {
        const key = fieldDef.name.value
        const fullType = getType(fieldDef.type)
        const namedType = getNamedTypeOfType(fullType)
        const name = `${type.name}$${key}`
        type.fields.push({
          str: JSON.stringify(name),
          name,
          base: type,
          key,
          namedType,
          fullType,
          directives: fieldDef.directives?.slice() ?? [],
          input: fieldDef.arguments?.map((arg): InputField => ({
            key: arg.name.value,
            type: getType(arg.type),
            directives: arg.directives?.slice() ?? [],
          })) ?? [],
        })
      }
      if ("interfaces" in typeDef) {
        for (const supertypeDef of typeDef.interfaces ?? []) {
          const supertype = getNamedType(supertypeDef.name.value)
          setKind(supertype, "object", { fields: [], subtypes: [], supertypes: [] })
          type.supertypes.push(supertype)
          supertype.subtypes.push(type)
        }
      }
    } else if (typeDef.kind === "UnionTypeDefinition" || typeDef.kind === "UnionTypeExtension") {
      setKind(type, "object", { fields: [], subtypes: [], supertypes: [] })
      for (const subtypeDef of typeDef.types ?? []) {
        const subtype = getNamedType(subtypeDef.name.value)
        setKind(subtype, "object", { fields: [], subtypes: [], supertypes: [] })
        type.subtypes.push(subtype)
        subtype.supertypes.push(type)
      }
    } else if (typeDef.kind === "EnumTypeDefinition" || typeDef.kind === "EnumTypeExtension") {
      setKind(type, "enum", { values: [] })
      for (const value of typeDef.values ?? []) {
        type.values.push({
          name: value.name.value,
          directives: value.directives?.slice() ?? [],
        })
      }
    } else {
      types.delete(name)
    }
  }

  return [...types.values()]

  function getNamedType(name: string): NamedType {
    const existing = types.get(name)
    if (existing !== undefined) {
      return existing
    }
    const value = { kind: "unresolved", name, directives: [] } as any as NamedType
    types.set(name, value)
    return value
  }

  function getType(node: TypeNode): Type {
    let nullable = true
    if (node.kind === "NonNullType") {
      node = node.type
      nullable = false
    }
    let type: Type
    if (node.kind === "NamedType") {
      type = getNamedType(node.name.value)
    } else {
      type = { kind: "array", inner: getType(node.type) }
    }
    if (nullable) {
      type = { kind: "nullable", inner: type }
    }
    return type
  }

  function setKind<K extends NamedType["kind"]>(
    type: NamedType | UnresolvedType,
    kind: K,
    init: Omit<Extract<NamedType, { kind: K }>, keyof UnresolvedType>,
  ): asserts type is Extract<NamedType, { kind: K }> {
    if ((type.kind === "unresolved") as boolean) {
      type.kind = kind
      Object.assign(type, init)
    }
    if (type.kind !== kind) throw new Error("Conflicting definitions for type " + type.name)
  }

  function getNamedTypeOfType(type: Type): NamedType {
    while (type.kind === "nullable" || type.kind === "array") {
      type = type.inner
    }
    return type
  }
}

export { Context }
