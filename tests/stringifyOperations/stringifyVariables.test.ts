import generateObjs from "../../src/stringifyOperations/generateObjs"
import stringifyVariables from "../../src/stringifyOperations/stringifyVariables";
import { validateConfig } from "../../src/loadConfig";

test.each([
  ["undefined", {}],
  ["empty", { vars: {} }],
  ["one", { vars: { gqx: ["_gqx"] } }],
  ["two", { vars: { gqx1: ["_gqx1"], gqx2: ["_gqx2"] } }],
])("%s", (_, config) => {
  let [objs, ctx] = generateObjs(utils.getOperations(["extensive"]));
  ctx.config = validateConfig(config);
  let code = stringifyVariables(objs, ctx);
  expect(code).toParse().toMatchSnapshot();
})
