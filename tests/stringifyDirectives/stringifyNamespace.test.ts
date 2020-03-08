import stringifyNamespace from "../../src/stringifyDirectives/stringifyNamespace"
import generateObjs from "../../src/stringifyDirectives/generateObjs"

test("", () => {
  let code = stringifyNamespace(generateObjs(utils.getOperations(["stringifyDirectives"])));
  expect(code).toParse().toMatchSnapshot();
})
