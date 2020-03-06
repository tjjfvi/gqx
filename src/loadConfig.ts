import yaml from "js-yaml";

interface Config {
  vars: { [x: string]: [string, boolean] };
  types: { [x: string]: [string, boolean] };
}

const regex = /\/\* @gqx\b([^]+?)\*\/|\/\/ @gqx( .+)?/;

export default (template: string): [Config, (x: string) => string] => {
  const match = template.match(regex);
  if(!match)
    throw new Error("No @gqx comment found");
  const str = (match[1] || match[2] || "").trim() || "{}";
  const config = validateConfig(yaml.safeLoad(str));
  return [config, x => template.replace(regex, () => x).replace(/^\/\/ @ts-nocheck/, "")];
}

const validateConfig = (_config: unknown): Config => {
  if(typeof _config !== "object")
    throw new Error("Config must be an object");
  const config: Config = { vars: {}, types: {} };
  const { vars: _vars = {}, types: _types = {} } = (_config as { vars?: unknown; types?: unknown });
  [["vars", _vars], ["types", _types]].map(([name, v]: ["vars"|"types", unknown]) => {
    if(typeof v !== "object")
      throw new Error(`Config.${name} must be an object`);
    Object.entries(v).map(([k, v]: [string, unknown]) => {
      if(typeof v !== "string" && !(v instanceof Array))
        throw new Error(`Config.${name}[string] must be of type: string | [string] | [string, boolean]`);
      let [a, b = true] = typeof v === "string" ? [v] : (v as unknown[]);
      if(typeof a !== "string")
        throw new Error(`Config.${name}[string][0] must be of type: string`);
      if(typeof b !== "boolean" && typeof b !== "undefined")
        throw new Error(`Config.${name}[string][1] must be of type: ?boolean`);
      config[name][k] = [a, b];
    })
  });
  return config;
}

export { Config, validateConfig };
