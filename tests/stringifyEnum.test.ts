import { stringifyEnum } from "../src/stringifyEnum"

test.each([
  ["none", []],
  ["variedLength", [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ]],
  [
    "sameLength",
    "abcdefghijklmnopqrstuvwxyz".split("").map((l, i, a) => a.slice(i).map(m => l + m)).flatMap(x =>
      x
    ),
  ],
])("%s", (_, options) => {
  expect("type $ = " + stringifyEnum(options)).toParse().toMatchSnapshot()
})
