import stringifyOperations from "../../src/stringifyOperations";

test("", () => {
  const ctx = utils.getOperations(["stringifyOperations"]);
  const code = stringifyOperations(ctx);
  expect(code).toParse().toMatchSnapshot();
})
