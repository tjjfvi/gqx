
import generateObjs from "../../src/stringifyObjectTypes/generateObjs"
import stringifyIds from "../../src/stringifyObjectTypes/stringifyIds";

test("", () => {
  const [, ids] = generateObjs(utils.getOperations(["extensive"]));
  const code = stringifyIds(ids);
  expect(code).toParse().toMatchSnapshot();
})