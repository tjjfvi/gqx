import generateObjs from "../../src/stringifyOperations/generateObjs"
import stringifyVariables from "../../src/stringifyOperations/stringifyVariables";

test.each([
  ["undefined", {}],
  ["empty", { vars: {} }],
  ["one", { vars: { gqx: ["_gqx"] } }],
  ["two", { vars: { gqx1: ["_gqx1"], gqx2: ["_gqx2"] } }],
])("%s", (_, config) => {
  let [objs, ctx] = generateObjs(utils.getOperations(["extensive"]));
  ctx.config = config;
  let code = stringifyVariables(objs, ctx);
  expect(code).toParse().toMatchSnapshot();
})
