import generateObjs from "../../src/stringifyDirectives/generateObjs";

test("", () => {
  const ctx = utils.getOperations(["stringifyDirectives"]);
  let val = generateObjs(ctx);
  expect(val.map(v => [v.type, v.props.length, v.props.map(p => [p.prop, p.dirs.length])])).toMatchSnapshot();
  expect(val).toMatchSnapshot();
})
