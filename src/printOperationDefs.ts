import { printObject } from "./printObject"
import { NamedType, ObjectType } from "./type"

export function printOperationDefs(types: NamedType[]) {
  const operations = types.filter((t): t is ObjectType =>
    t.kind === "object" && t.operationKey != null
  )
  return `
export type $OperationTypes = ${operations.map(o => JSON.stringify(o.name)).join(" | ")}
export const $gqx = <F extends $Hkt<$OperationField>>(f: <P extends $OperationField>(p: P) => $Hkt.Call<F, P>) => (${
    printObject(operations.map(
      operation => [
        operation.operationKey!,
        printObject(operation.fields.map(field => [field.key, `f(${field.str})`])),
      ],
    ))
  })
`.trim()
}
