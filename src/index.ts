import { extractTypes } from "./extractTypes"
import { parseSchema } from "./parseSchema"
import { printBoilerplate } from "./printBoilerplate"
import { printFieldDefs } from "./printFieldDefs"
import { printOperationDefs } from "./printOperationDefs"
import { printTypeDef } from "./printTypeDef"

export default ({ schemaPath }: { schemaPath: string }) => {
  const types = extractTypes(parseSchema(schemaPath))
  const fields = types.flatMap(x => x.kind === "object" ? x.fields : [])

  const code = [
    "/* dprint-ignore-file */",
    printBoilerplate(),
    ...types.map(printTypeDef),
    printFieldDefs(fields),
    printOperationDefs(types),
  ].join("\n\n").replace(/\n\n\n+/g, "\n\n")

  return code
}
