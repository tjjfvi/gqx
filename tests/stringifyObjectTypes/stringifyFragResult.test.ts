
import generateObjs from "../../src/stringifyObjectTypes/generateObjs"
import stringifyFragResult from "../../src/stringifyObjectTypes/stringifyFragResult";
import { Obj } from "../../src/stringifyObjectTypes";

describe("stringifyObjectTypes.gql", () => {
  const [objs,, ctx] = generateObjs(utils.getOperations(["stringifyObjectTypes"]));
  test.each(objs.map((o): [string, Obj] => [o.type, o]))("%s", (_, o) => {
    const code = stringifyFragResult(o, ctx);
    expect(code).toParse().toMatchSnapshot();
  })
})

