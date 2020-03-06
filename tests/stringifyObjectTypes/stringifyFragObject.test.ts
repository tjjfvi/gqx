
import generateObjs from "../../src/stringifyObjectTypes/generateObjs"
import stringifyFragObject from "../../src/stringifyObjectTypes/stringifyFragObject";

describe("extensive.gql", () => {
  const [objs,, ctx] = generateObjs(utils.getOperations(["extensive"]));
  objs.map(o => {
    test(o.type, () => {
      const code = stringifyFragObject(o, ctx);
      expect(code).toParse().toMatchSnapshot();
    })
  })
})
