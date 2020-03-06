
import generateObjs from "../../src/stringifyObjectTypes/generateObjs"
import stringifyFragEnums from "../../src/stringifyObjectTypes/stringifyFragEnums";

test("", () => {
  const [objs, , ctx] = generateObjs(utils.getOperations(["extensive"]));
  const code = stringifyFragEnums(objs, ctx);
  expect(code).toParse().toMatchSnapshot();
})
