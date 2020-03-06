
import stringifyInputType from "../src/stringifyInputType";
import stringifyInputTypes from "../src/stringifyInputTypes";

describe("stringifyInputTypes.gql", () => {
  const ctx = utils.getOperations(["stringifyInputTypes"]);
  test.each(Object.entries(ctx.inputTypes))("%s", (k, v) => {
    const result = stringifyInputType(k, v);
    expect(result).toParse().toMatchSnapshot();
  })
  test("*", () => {
    expect(stringifyInputTypes(ctx)).toParse().toMatchSnapshot();
  });
})
