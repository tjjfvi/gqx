
import * as fs from "fs";

export default () => fs.readFileSync(require.resolve("./boilerplate"), "utf8").split("/* --- */")[1].trim();
