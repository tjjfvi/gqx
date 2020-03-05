
import stringifyInputType from "../src/stringifyInputType";
import stringifyInputTypes from "../src/stringifyInputTypes";

describe("stringifyInputTypes.gql", () => {
  const ctx = utils.getOperations(["stringifyInputTypes"]);
  Object.entries(ctx.inputTypes).map(([k, v]) => {
    test(k, () => {
      const result = stringifyInputType(k, v);
      expect(result).toParse().toMatchSnapshot();
    })
  })
  test("all", () => {
    expect(stringifyInputTypes(ctx)).toParse().toMatchSnapshot();
  });
})
