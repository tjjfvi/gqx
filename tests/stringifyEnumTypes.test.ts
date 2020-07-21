
import { stringifyEnumTypes } from "../src/stringifyEnumTypes";

test("", () => {
  const result = stringifyEnumTypes(utils.getOperations(["stringifyEnumTypes"]));
  expect(result).toParse().toMatchSnapshot();
})
