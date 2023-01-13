import { generateObjs } from "../../src/stringifyOperations/generateObjs"
import { stringifyObjectGen } from "../../src/stringifyOperations/stringifyObjectGen"

test("", () => {
  let [objs] = generateObjs(utils.getOperations(["stringifyOperations"]))
  let code = stringifyObjectGen(objs)
  expect(code).toParse().toMatchSnapshot()
})
