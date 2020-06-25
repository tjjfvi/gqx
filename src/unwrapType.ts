
import { TypeNode, NamedTypeNode } from "graphql";

const unwrapType = (type: TypeNode, allowVoid = false, skipMaybe = false):
[NamedTypeNode, (x: string) => string, boolean, string] => {
  if(type.kind !== "NonNullType" && !skipMaybe) {
    let _type = unwrapType(type, allowVoid, true);
    return [
      _type[0],
      x => `(${_type[1](x)} | null${allowVoid ? " | void" : ""})`,
      true,
      `$$Optional<${_type[3]}>`
    ];
  }
  if(type.kind === "NonNullType")
    return unwrapType(type.type, allowVoid, true);
  if(type.kind === "ListType") {
    let _type = unwrapType(type.type, allowVoid);
    return [_type[0], t => _type[1](t) + "[]", false, `$$Array<${_type[3]}>`];
  }
  return [type, x => x, false, "$$Identity"];
}

export default unwrapType;
