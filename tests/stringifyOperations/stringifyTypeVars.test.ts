import generateObjs from "../../src/stringifyOperations/generateObjs"
import stringifyTypeVars from "../../src/stringifyOperations/stringifyTypeVars";
import { validateConfig } from "../../src/loadConfig";

test.each([
  ["undefined", {}],
  ["empty", { types: {} }],
  ["exported", { types: { gqx: ["_gqx"] } }],
  ["unexported", { types: { gqx: ["_gqx", false] } }],
  ["two", { types: { gqx1: ["_gqx1"], gqx2: ["_gqx2"] } }],
])("%s", (_, config) => {
  let [objs, ctx] = generateObjs(utils.getOperations(["stringifyOperations"]));
  ctx.config = validateConfig(config);
  let code = stringifyTypeVars(objs, ctx);
  expect(code).toParse().toMatchSnapshot();
})
