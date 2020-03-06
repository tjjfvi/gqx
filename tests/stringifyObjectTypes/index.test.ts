
import stringifyObjectTypes from "../../src/stringifyObjectTypes";

test("", () => {
  const ctx = utils.getOperations(["stringifyObjectTypes"]);
  const code = stringifyObjectTypes(ctx);
  expect(code).toParse().toMatchSnapshot();
})
