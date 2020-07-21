
import { generateObjs } from "../../src/stringifyObjectTypes/generateObjs"
import { stringifyFragEnums } from "../../src/stringifyObjectTypes/stringifyFragEnums";

test("", () => {
  const [objs] = generateObjs(utils.getOperations(["stringifyObjectTypes"]));
  const code = stringifyFragEnums(objs);
  expect(code).toParse().toMatchSnapshot();
})
