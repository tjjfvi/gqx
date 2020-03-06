import stringifyOperations from "../../src/stringifyOperations";

test("", () => {
  const ctx = utils.getOperations(["extensive"]);
  const code = stringifyOperations(ctx);
  expect(code).toParse().toMatchSnapshot();
})
