import { stringifyBoilerplate } from "../src/stringifyBoilerplate"

test("", () => {
  const code = stringifyBoilerplate()
  expect(code).toParse()
})
