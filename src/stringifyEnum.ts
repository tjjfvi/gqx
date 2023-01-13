import { indent } from "./indent"

export const stringifyEnum = (options: string[], maxLineLength = 80) => {
  if (!options.length) {
    return "never"
  }

  options = options.slice().sort()

  const prefixedOptions = options.map(o => "| " + o)

  const maxLength = Math.max(...prefixedOptions.map(o => o.length))
  const allSameLength = prefixedOptions.every(o => o.length === maxLength)

  const listOptions = prefixedOptions.join("\n")

  const blockOptions = prefixedOptions.reduce<Array<string | null>>((acc, op) => {
    let [line] = acc
    if (line === null) {
      return [op, ...acc.slice(1)]
    }
    line += " " + op
    acc[0] = line
    if (line.length + maxLength + 1 > maxLineLength) {
      acc.unshift(null)
    }
    return acc
  }, [null]).reverse().filter((x): x is string => !!x).join("\n")

  return `(\n${indent(allSameLength ? blockOptions : listOptions)}\n)`
}
