
import gqx from "../src";
import { readFileSync } from "fs";

test("", () => {
  const schema = utils.readGql("extensive");
  const template = readFileSync(require.resolve("./template"), "utf8");
  expect(gqx({ schema, template })).toParse().toMatchSnapshot();
})
