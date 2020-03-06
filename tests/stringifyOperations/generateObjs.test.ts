import generateObjs from "../../src/stringifyOperations/generateObjs";

test("", () => {
  const [objs] = generateObjs(utils.getOperations(["extensive"]));
  expect(objs.map(o => ({ n: o.type, p: o.props.length }))).toMatchSnapshot();
  expect(objs).toMatchSnapshot();
});
