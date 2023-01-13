import { Obj } from "../../src/stringifyObjectTypes"
import { generateObjs } from "../../src/stringifyObjectTypes/generateObjs"
import { stringifyFragObject } from "../../src/stringifyObjectTypes/stringifyFragObject"

describe("stringifyObjectTypes.gql", () => {
  const [objs] = generateObjs(utils.getOperations(["stringifyObjectTypes"]))
  test.each(objs.map((o): [string, Obj] => [o.type, o]))("%s", (_, o) => {
    const code = stringifyFragObject(o)
    expect(code).toParse().toMatchSnapshot()
  })
})
