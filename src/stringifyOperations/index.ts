import { InputValueDefinitionNode } from "graphql"
import { Context } from ".."
import { generateObjs } from "./generateObjs"
import { stringifyObjectGen } from "./stringifyObjectGen"

interface Id {
  type: string
  prop: string
}

interface Prop {
  id: Id
  type: string
  wrap: (x: string) => string
  args: InputValueDefinitionNode[]
}

interface Obj {
  type: string
  prop: string
  props: Prop[]
}

export { Context, Id, Obj, Prop }

export default (ctx: Context) => {
  const [objs] = generateObjs(ctx)

  return [
    stringifyObjectGen(objs),
  ].join("\n\n")
}
