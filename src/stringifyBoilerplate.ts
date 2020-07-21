
import * as fs from "fs";

export const stringifyBoilerplate = () =>
  fs.readFileSync(require.resolve("./boilerplate.ts"), "utf8").split("/* --- */")[1].trim();
