import * as fs from "fs"

export const printBoilerplate = (
  boilerplateSource = fs.readFileSync(
    require.resolve("./boilerplate.ts"),
    "utf8",
  ),
) => boilerplateSource.split("/* --- */")[1].trim()
