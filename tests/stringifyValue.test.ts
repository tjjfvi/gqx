import { stringifyValue } from "../src/stringifyValue"
import { ValueNode } from "graphql";

describe("stringifyDirectives.gql", () => {
  test.each(
    Object.values(utils.getOperations(["stringifyObjectTypes"]).objectTypes)
      .flatMap(x => x.fields)
      .flatMap(x => x.directives?.slice() ?? [])
      .flatMap(d => d.arguments?.slice() ?? [])
      .map(a => a.value)
      .map((v): [string, ValueNode] => [v.loc.source.body.slice(v.loc.start, v.loc.end), v])
  )("%s", (_, v) => {
    let val = stringifyValue(v);
    let code = "const $ = " + val;
    expect(code).toParse().toMatchSnapshot();
  })
})

test("invalid", () => {
  // @ts-expect-error
  expect(() => stringifyValue({ type: "INVALID" })).toThrow();
})

declare global {
  interface Array<T> {
    flatMap<U>(f: (x: T) => U): Array<U extends Array<infer V> ? V : U>;
  }
}
