import { DirectiveNode } from "graphql"
import { printObject } from "./printObject"
import { printValue } from "./printValue"

export function printDirectives(directives: DirectiveNode[]) {
  return printObject(directives.map(directive => [
    directive.name.value,
    printObject(
      directive.arguments?.map(arg => [arg.name.value, printValue(arg.value)]) || [],
    ),
  ]))
}
