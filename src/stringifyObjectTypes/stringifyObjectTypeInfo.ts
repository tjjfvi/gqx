
import { Obj } from ".";
import stringifyId from "./stringifyId";
import { stringifyObject } from "../stringifyObject";
import indent from "../indent";
import { stringifyEnum } from "../stringifyEnum";
import stringifyInputType from "../stringifyInputType";
import { Context } from "../stringifyOperations";
import { stringifyValue } from "../stringifyValue";

const str = (str: string) => JSON.stringify(str);

export const stringifyObjectTypeInfo = (ctx: Context, objs: Obj[]) =>
  `export type $$ObjectType = ${stringifyEnum(objs.map(v => JSON.stringify(v.type)))}\n\n` +
  "const $$objectTypeInfoMap = " + stringifyObject(objs.map(obj =>
    [obj.type, [
      "new $$ObjectTypeInfo(",
      ...[
        ...[obj.shallowProps, obj.deepProps].flatMap(props =>
          !props.length ?
            "{}, {}, {}, {}" :
            [
              stringifyObject(props.map(prop => [stringifyId(prop.id), str(prop.id.prop)])),
              stringifyObject(props.map(prop => [str(prop.id.prop), stringifyId(prop.id)])),
              "null as any as " + stringifyObject(props.map(prop =>
                [stringifyId(prop.id), str(prop.type)]
              )),
              "null as any as " + stringifyObject(props.map(prop =>
                [stringifyId(prop.id), prop.wrapHKT]
              )),
            ]
        ),
        "null as any as " + stringifyObject(obj.props.map(prop =>
          [stringifyId(prop.id), stringifyInputType(ctx, prop.args)]
        )),
        stringifyObject(obj.props.map(prop =>
          [stringifyId(prop.id), stringifyObject(prop.args.map(arg =>
            [
              arg.name.value,
              JSON.stringify(arg.type.loc?.source.body.slice(arg.type.loc.start, arg.type.loc.end) ?? "")
            ]
          ))]
        )),
        stringifyObject(obj.props.map(prop =>
          [stringifyId(prop.id), stringifyObject(prop.directives.map(directive =>
            [
              directive.name.value,
              stringifyObject(directive.arguments?.map(arg =>
                [arg.name.value, stringifyValue(arg.value)]
              ) ?? [])
            ]
          ))]
        )),
        stringifyObject(obj.props.map(prop =>
          [stringifyId(prop.id), JSON.stringify(prop.loc?.source.name ?? null)]
        )) + " as const",
      ].map(str => indent`${str},`),
      ")",
    ].join("\n")]
  ))
