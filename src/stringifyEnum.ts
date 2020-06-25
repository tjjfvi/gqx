
import indent from "./indent";

export const stringifyEnum = (options: string[]) =>
  options.length ? `(\n${options.map(o => indent`| ${o}`).join("\n")}\n)` : "never"

