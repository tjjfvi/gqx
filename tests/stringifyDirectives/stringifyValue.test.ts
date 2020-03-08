import generateObjs from "../../src/stringifyDirectives/generateObjs"
import stringifyValue from "../../src/stringifyDirectives/stringifyValue"
import { ValueNode } from "graphql";

describe("stringifyDirectives.gql", () => {
  test.each(
    generateObjs(utils.getOperations(["stringifyDirectives"]))
      .flatMap(x => x.props)
      .flatMap(p => p.dirs)
      .flatMap(d => d.dirArgs)
      .map(f => f.value)
      .map((v): [string, ValueNode] => [v.loc.source.body.slice(v.loc.start, v.loc.end), v])
  )("%s", (_, v) => {
    let val = stringifyValue(v);
    let code = "type $ = " + val;
    expect(code).toParse().toMatchSnapshot();
  })
})

declare global {
  interface Array<T> {
    flatMap<U>(f: (x: T) => U): Array<U extends Array<infer V> ? V : U>;
  }
}
