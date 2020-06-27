
import gqx from "../src";

test("", () => {
  expect(gqx({ schemaPath: utils.gqlPath("extensive") })).toParse().toMatchSnapshot();
})
