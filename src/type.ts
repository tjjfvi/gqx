import { DirectiveNode } from "graphql"

export type Type = NamedType | NullableType | ArrayType

export interface NullableType {
  kind: "nullable"
  inner: Type
}

export interface ArrayType {
  kind: "array"
  inner: Type
}

export type NamedType = EnumType | ObjectType | ScalarType | InputType

export interface BaseNamedType {
  name: string
  directives: Directives
}

export interface UnresolvedType extends BaseNamedType {
  kind: "unresolved"
}

export interface EnumType extends BaseNamedType {
  kind: "enum"
  values: EnumValue[]
}

export interface EnumValue {
  name: string
  directives: Directives
}

export interface ObjectType extends BaseNamedType {
  kind: "object"
  fields: Field[]
  operationKey?: string
  subtypes: ObjectType[]
  supertypes: ObjectType[]
}

export interface Field {
  str: string
  name: string
  base: ObjectType
  key: string
  fullType: Type
  namedType: NamedType
  directives: Directives
  input: InputField[]
}

export interface ScalarType extends BaseNamedType {
  kind: "scalar"
}

export interface InputType extends BaseNamedType {
  kind: "input"
  fields: InputField[]
}

export interface InputField {
  key: string
  type: Type
  directives: Directives
}

export type Directives = DirectiveNode[]
