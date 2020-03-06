import generateObjs from "../../src/stringifyOperations/generateObjs"
import stringifyTypeVars from "../../src/stringifyOperations/stringifyTypeVars";
import { validateConfig } from "../../src/loadConfig";

test.each([
  ["undefined", {}],
  ["empty", { vars: {} }],
  ["exported", { vars: { gqx: ["_gqx"] } }],
  ["unexported", { vars: { gqx: ["_gqx", false] } }],
  ["two", { vars: { gqx1: ["_gqx1"], gqx2: ["_gqx2"] } }],
])("%s", (_, config) => {
  let [objs, ctx] = generateObjs(utils.getOperations(["extensive"]));
  ctx.config = validateConfig(config);
  let code = stringifyTypeVars(objs, ctx);
  expect(code).toParse().toMatchSnapshot();
})
