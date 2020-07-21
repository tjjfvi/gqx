import { generateObjs } from "../../src/stringifyObjectTypes/generateObjs";
import { stringifyObjectTypeInfo } from "../../src/stringifyObjectTypes/stringifyObjectTypeInfo";

test("", () => {
  const [objs,, ctx] = generateObjs(utils.getOperations(["stringifyObjectTypes"]));
  const code = stringifyObjectTypeInfo(ctx, objs);
  expect(code).toParse().toMatchSnapshot();
})
