import loadConfig, { validateConfig } from "../src/loadConfig"

describe("load from template", () => {
  test.each([
    ["single line, no config", "// @gqx"],
    ["single line, empty config", "// @gqx {}"],
    ["multiline, no config", "/* @gqx */"],
    ["multiline, empty config", "/* @gqx {} */"],
    ["multiline, json config", '/* @gqx {"vars":{"gqf":["_gqf"]}} */'],
    ["multiline, yaml config", `
/* @gqx
vars:
  gqf: _gqf
*/
`.trim()],
  ])("%s", (_, str) => {
    const [config, wrap] = loadConfig("---\n" + str + "\n---");
    expect(config).toMatchSnapshot();
    expect(wrap("!!!")).toBe("---\n!!!\n---");
  })
})

test("strip // @ts-nocheck", () => {
  const [, wrap] = loadConfig("// @ts-nocheck\n// @gqx");
  expect(wrap("---")).toBe("\n---");
})

test.each([
  ["config is number", 5],
  ["config is string", "str"],
  ["config is boolean", true],
  ["config.vars is number", { vars: 5 }],
  ["config.vars[string] is number", { vars: { x: 5 } }],
  ["config.vars[string] is [number]", { vars: { x: [5] } }],
  ["config.vars[string] is [string, number]", { vars: { x: ["str", 5] } }],
  ["config.types is number", { types: 5 }],
  ["config.types[string] is number", { types: { x: 5 } }],
  ["config.types[string] is [number]", { types: { x: [5] } }],
  ["config.types[string] is [string, number]", { types: { x: ["str", 5] } }],
])("errors on %s", (_, x) => {
  expect(() => validateConfig(x)).toThrowErrorMatchingSnapshot();
})
