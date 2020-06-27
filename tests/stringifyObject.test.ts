import { stringifyObject, ObjectEntry } from "../src/stringifyObject"

test.each<[string, ObjectEntry[], boolean?]>([
  ["noProps", []],
  ["singleLine", [
    ["singular", "line"],
  ], false],
  ["keyEdgeCases", [
    ['"this"', "doesntNeedQuotes"],
    ["this definitely", "does"],
    ['"as does"', "this"],
  ]],
  ["optional", [
    ["this", true, "isOptional"],
    ["however", "thisIsnt"],
    ["and", false, "thisDefinitelyIsnt"]
  ]]
])("%s", (_, ...args) => {
  expect(stringifyObject(...args)).toParse().toMatchSnapshot();
})
