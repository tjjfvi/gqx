
const unwrapType = require("./unwrapType");
const stringifyMap = require("./stringifyMap");
const inputTypeToCode = require("./inputTypeToCode");

module.exports = (ops, ctx) => {
  const classes = [];
  const inputTypes = [];
  const inputMap = [];
  const outputMap = [];

  ops.map(([prop, typeName]) => {
    let type = ctx.types[typeName];
    type.map(([name, ret, args]) => {
      const [{ name: { value: retTypeName } }, wrap] = unwrapType(ret);
      const className = typeName + "$" + name;
      const inputName = "Input$" + prop + "$" + name;

      inputTypes.push(inputTypeToCode(null, ctx, inputName, args))
      inputMap.push([className, inputName]);
      outputMap.push([className, wrap(retTypeName in ctx.types ? "R" : retTypeName)]);

      const argsObj = Object.assign({}, ...args.map(arg => ({
        [arg.name.value]: ctx.schema.slice(arg.type.loc.start, arg.type.loc.end),
      })))
      classes.push([
        `class ${className} {`,
        `  static obj = ${JSON.stringify(prop)};`,
        `  static func = ${JSON.stringify(name)};`,
        `  static args = ${JSON.stringify(argsObj)}`,
        "};",
      ].join("\n"));
    })
  })

  const vars = Object.entries(ctx.config.vars).map(([varName, [func]]) => {
    ctx.varExports.push(varName);
    return `let ${varName} = {\n${ ops.map(([prop, typeName]) => {
      let type = ctx.types[typeName];
      return `  ${prop}: {\n${type.map(([name, ret]) => {
        const [{ name: { value: retTypeName } }] = unwrapType(ret);
        const inputName = "Input$" + prop + "$" + name;
        const className = typeName + "$" + name;
        const R = retTypeName in ctx.types ? retTypeName + "$" : "empty";
        return `    ${name}: ${func}<typeof ${className}, ${inputName}, ${R}>(${className}),`;
      }).join("\n")}\n  },`
    }).join("\n") }\n}`
  });

  ctx.typeExports.push("$$Input", "$$Output");

  return [
    "",
    classes.join("\n"),
    inputTypes.join("\n"),
    `type $$Input<C> = $Call<${stringifyMap(inputMap, "typeof ")}, C>`,
    `type $$Output<C, T> = $Call<$Call<${stringifyMap(outputMap, "typeof ", "<R>(R) => ")}, C>, $$Result<T>>`,
    ...vars,
  ].join("\n\n");
}
