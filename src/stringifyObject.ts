import indent from "./indent";

export type ObjectEntry = [string, string] | [string, boolean, string]
export const stringifyObject = (entries: ObjectEntry[], multiline = true) => {
  if(!entries.length)
    return "{}"
  let sep = multiline ? "\n" : "";
  return `{${sep}${entries.map(entry => {
    const [originalKey, optional, value] = entry.length === 2 ? [entry[0], false, entry[1]] as const : entry;

    const unquotedKey =
      originalKey[0] === '"' && originalKey[originalKey.length - 1] === '"' ?
        JSON.parse(originalKey) :
        originalKey
    const requotedProp = unquotedKey.match(/^(?!\d)\w\w*$/) ? unquotedKey : JSON.stringify(unquotedKey);

    const str = `${requotedProp}${optional ? "?" : ""}: ${value},`;
    return multiline ? indent(str) : str
  }).join(sep)}${sep}}`
}
