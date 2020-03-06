
import stringifyObjectTypes from "../../src/stringifyObjectTypes";

test("", () => {
  const ctx = utils.getOperations(["extensive"]);
  const code = stringifyObjectTypes(ctx);
  expect(code).toParse().toMatchSnapshot();
})
