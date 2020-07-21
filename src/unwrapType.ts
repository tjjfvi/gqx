
import { TypeNode, NamedTypeNode } from "graphql";

export const unwrapType = (type: TypeNode, allowUndefined = false, skipMaybe = false):
[NamedTypeNode, (x: string) => string, boolean, string] => {
  if(type.kind !== "NonNullType" && !skipMaybe) {
    let _type = unwrapType(type, allowUndefined, true);
    return [
      _type[0],
      x => `(${_type[1](x)} | null${allowUndefined ? " | undefined" : ""})`,
      true,
      `$$Optional<${_type[3]}>`
    ];
  }
  if(type.kind === "NonNullType")
    return unwrapType(type.type, allowUndefined, true);
  if(type.kind === "ListType") {
    let _type = unwrapType(type.type, allowUndefined);
    return [_type[0], t => _type[1](t) + "[]", false, `$$Array<${_type[3]}>`];
  }
  return [type, x => x, false, "$$Identity"];
}
