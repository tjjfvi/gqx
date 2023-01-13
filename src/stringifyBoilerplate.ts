import * as fs from "fs"

export const stringifyBoilerplate = (
  boilerplateSource = fs.readFileSync(
    require.resolve("./boilerplate.ts"),
    "utf8",
  ),
) => boilerplateSource.split("/* --- */")[1].trim()
