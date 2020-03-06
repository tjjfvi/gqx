
import generateObjs from "../../src/stringifyObjectTypes/generateObjs"
import stringifyFragResult from "../../src/stringifyObjectTypes/stringifyFragResult";

describe("extensive.gql", () => {
  const [objs,, ctx] = generateObjs(utils.getOperations(["extensive"]));
  objs.map(o => {
    test(o.type, () => {
      const code = stringifyFragResult(o, ctx);
      expect(code).toParse().toMatchSnapshot();
    })
  })
})

