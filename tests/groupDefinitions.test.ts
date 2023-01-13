import { groupDefinitions } from "../src/groupDefinitions"

test("", () => {
  const schema = utils.parseGql("groupDefinitions")
  const ctx = utils.emptyCtx()
  groupDefinitions(ctx, schema.definitions)
  expect({
    enumTypes: Object.values(ctx.enumTypes).map(x => x.length),
    objectTypes: Object.values(ctx.objectTypes).map(x => x.fields.length),
    inputTypes: Object.values(ctx.inputTypes).map(x => x.length),
  }).toMatchSnapshot()
  expect(ctx).toMatchSnapshot()
})
