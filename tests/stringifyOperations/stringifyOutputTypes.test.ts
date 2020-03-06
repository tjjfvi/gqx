import generateObjs from "../../src/stringifyOperations/generateObjs"
import stringifyOutputTypes from "../../src/stringifyOperations/stringifyOutputTypes";

test("", () => {
  let [objs, ctx] = generateObjs(utils.getOperations(["extensive"]));
  let code = stringifyOutputTypes(objs, ctx);
  expect(code).toParse().toMatchSnapshot();
})
