import { Context } from ".."
// import { stringifyObjectTypeInfo } from "./stringifyObjectTypeInfo";
import { DirectiveNode, InputValueDefinitionNode, Location } from "graphql"
import { indent } from "../indent"
import { stringifyInputType } from "../stringifyInputType"
import { generateObjs } from "./generateObjs"
import { stringifyFrag } from "./stringifyFrag"
import { stringifyId } from "./stringifyId"

interface Id {
  type: string
  prop: string
}

interface Prop {
  id: Id
  type: string
  shallow: boolean
  wrap: (x: string) => string
  args: InputValueDefinitionNode[]
  directives: DirectiveNode[]
  loc?: Location
}

interface Obj {
  type: string
  shallowProps: Prop[]
  deepProps: Prop[]
  props: Prop[]
  subtypes: string[]
  supertypes: string[]
  isBase: boolean
}

export { Context, Id, Obj, Prop }

export default (ctx: Context) => {
  const [objs] = generateObjs(ctx)

  return [
    // stringifyObjectTypeInfo(ctx, objs),
    ...objs.map(o => stringifyFrag(o, objs)),
    `
export interface $Wrap<T> {
${
      objs.flatMap(obj =>
        obj.props.map(prop =>
          indent`${stringifyId(prop.id)}: ${
            obj.subtypes.length
              ? obj.subtypes.map(type => `this["${type}$${prop.id.prop}"]`).join(" | ")
              : `{ __typename: "${obj.type}", ${prop.id.prop}: ${prop.wrap("T")} }`
          }`
        )
      ).join("\n")
    }
}

export interface $PropFrag<T = unknown> {
${
      objs.flatMap(obj =>
        obj.props.map(prop =>
          indent`${stringifyId(prop.id)}: ${prop.shallow ? "never" : `${prop.type}.$<T>`}`
        )
      ).join("\n")
    }
}

export interface $PropOutput<F extends $Fragment[]> {
${
      objs.flatMap(obj =>
        obj.props.map(prop =>
          indent`// @ts-ignore\n${stringifyId(prop.id)}: ${
            prop.wrap(prop.shallow ? prop.type : `${prop.type}<F>`)
          }`
        )
      ).join("\n")
    }
}

export interface $PropType<F extends $Fragment[]> {
${
      objs.flatMap(obj =>
        obj.props.map(prop =>
          indent`// @ts-ignore\n${stringifyId(prop.id)}: ${
            prop.shallow ? prop.type : `${prop.type}<F>`
          }`
        )
      ).join("\n")
    }
}

export interface $Frag<T = unknown> {
${objs.map(obj => indent`${obj.type}: ${obj.type}.$<T>`).join("\n")}
}

export interface $Unfrag<T extends $Fragment | $Fragment[]> {
${objs.map(obj => indent`// @ts-ignore\n${obj.type}: ${obj.type}<T>`).join("\n")}
}

export interface $PropInput {
${
      objs.flatMap(obj =>
        obj.props.map(prop =>
          indent`${stringifyId(prop.id)}: ${stringifyInputType(ctx, prop.args)}`
        )
      ).join("\n")
    }
}

export interface $DeepPropTypes {
${
      objs.flatMap(obj =>
        obj.deepProps.map(prop => indent`${stringifyId(prop.id)}: ${JSON.stringify(prop.type)}`)
      ).join("\n")
    }
}

export interface $ShallowPropTypes {
${
      objs.flatMap(obj =>
        obj.shallowProps.map(prop => indent`${stringifyId(prop.id)}: ${prop.type}`)
      ).join("\n")
    }
}
`,
  ].join("\n\n")
}
