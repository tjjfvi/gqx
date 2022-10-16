
import { Context } from "..";
// import { stringifyObjectTypeInfo } from "./stringifyObjectTypeInfo";
import { stringifyFrag } from "./stringifyFrag";
import { generateObjs } from "./generateObjs";
import { InputValueDefinitionNode, DirectiveNode, Location } from "graphql";
import { stringifyId } from "./stringifyId";
import { indent } from "../indent";
import { stringifyInputType } from "../stringifyInputType";

interface Id {
  type: string;
  prop: string;
}

interface Prop {
  id: Id;
  type: string;
  shallow: boolean;
  wrap: (x: string) => string;
  args: InputValueDefinitionNode[];
  directives: DirectiveNode[];
  loc?: Location;
}

interface Obj {
  type: string;
  shallowProps: Prop[];
  deepProps: Prop[];
  props: Prop[];
  subtypes: string[];
  supertypes: string[];
  isBase: boolean;
}

export { Id, Prop, Obj, Context };

export default (ctx: Context) => {
  const [objs] = generateObjs(ctx);

  return [
    // stringifyObjectTypeInfo(ctx, objs),
    ...objs.map(o => stringifyFrag(o, objs)),
    `
export interface $Wrap<T> {
${
  objs.flatMap(obj => obj.props.map(prop =>
    indent`${stringifyId(prop.id)}: ${
      obj.subtypes.length ?
        obj.subtypes.map(type => `this["${type}$${prop.id.prop}"]`).join(" | ") :
        `{ __typename: "${obj.type}", ${prop.id.prop}: ${prop.wrap("T")} }`
    }`
  )).join("\n")
}
}

export interface $Frag<T = unknown> {
${
  objs.map(obj =>
    indent`${obj.type}: ${obj.type}.$<T>`
  ).join("\n")
}
}

export interface $Output<T extends $Fragment | $Fragment[]> {
${
  objs.map(obj =>
    indent`// @ts-ignore\n${obj.type}: ${obj.type}<T>`
  ).join("\n")
}
}

export interface $Input {
${
  objs.flatMap(obj => obj.props.map(prop =>
    indent`${stringifyId(prop.id)}: ${stringifyInputType(ctx, prop.args)}`
  )).join("\n")
}
}

export interface $DeepPropTypes {
${
  objs.flatMap(obj => obj.deepProps.map(prop =>
    indent`${stringifyId(prop.id)}: ${JSON.stringify(prop.type)}`
  )).join("\n")
}
}

export interface $ShallowPropTypes {
${
  objs.flatMap(obj => obj.shallowProps.map(prop =>
    indent`${stringifyId(prop.id)}: ${prop.type}`
  )).join("\n")
}
}
`
  ].join("\n\n");
}

