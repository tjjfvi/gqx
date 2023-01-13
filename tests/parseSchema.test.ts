import { parseSchema } from "../src/parseSchema"

test("", () => {
  const result = parseSchema(__dirname + "/gql/parseSchema")
  expect(result.map(r => r.loc?.source.name)).toMatchSnapshot()
  expect(result).toMatchSnapshot()
})
