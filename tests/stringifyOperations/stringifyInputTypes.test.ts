import generateObjs from "../../src/stringifyOperations/generateObjs"
import stringifyInputTypes from "../../src/stringifyOperations/stringifyInputTypes";

test("", () => {
  let [objs] = generateObjs(utils.getOperations(["stringifyOperations"]));
  let code = stringifyInputTypes(objs);
  expect(code).toParse().toMatchSnapshot();
})

