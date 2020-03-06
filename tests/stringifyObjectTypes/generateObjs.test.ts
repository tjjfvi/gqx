
import generateObjs from "../../src/stringifyObjectTypes/generateObjs";

test("", () => {
  const ctx = utils.getOperations(["extensive"]);
  const [objs, ids] = generateObjs(ctx);
  expect(ids).toMatchSnapshot();
  expect(objs.map(o => ({ n: o.type, s: o.shallowProps.length, d: o.deepProps.length }))).toMatchSnapshot();
  expect(objs).toMatchSnapshot();
})
