import indent from "./indent";

export type ObjectEntry = [string, string] | [string, boolean, string]
export const stringifyObject = (entries: ObjectEntry[], multiline = true) => {
  if(!entries.length)
    return "{}"
  let sep = multiline ? "\n" : "";
  return `{${sep}${entries.map(entry => {
    const fullEntry = entry.length === 2 ? [entry[0], false, entry[1]] as const : entry;
    const str = `${fullEntry[0]}${fullEntry[1] ? "?" : ""}: ${fullEntry[2]},`;
    return multiline ? indent(str) : str
  }).join(sep)}${sep}}`
}
