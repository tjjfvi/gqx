import stringifyFragTypes from "../../src/stringifyOperations/stringifyFragTypes"
import generateObjs from "../../src/stringifyOperations/generateObjs"

test("", () => {
  let [objs, ctx] = generateObjs(utils.getOperations(["extensive"]));
  let code = stringifyFragTypes(objs, ctx);
  expect(code).toParse().toMatchSnapshot();
})
