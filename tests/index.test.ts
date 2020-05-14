
import gqx from "../src";

test("", () => {
  const schema = utils.readGql("extensive");
  expect(gqx({ schema })).toParse().toMatchSnapshot();
})
