import generateObjs from "../../src/stringifyOperations/generateObjs"
import stringifyProps from "../../src/stringifyOperations/stringifyProps";

test("", () => {
  let [objs] = generateObjs(utils.getOperations(["stringifyOperations"]));
  let code = stringifyProps(objs);
  expect(code).toParse().toMatchSnapshot();
})
