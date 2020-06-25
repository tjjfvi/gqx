
import { Obj } from ".";
import stringifyId from "./stringifyId";
import { stringifyObject } from "../stringifyObject";
import indent from "../indent";
import { stringifyEnum } from "../stringifyEnum";

const str = (str: string) => JSON.stringify(str);

export const stringifyObjectTypeInfo = (objs: Obj[]) =>
  `export type $$ObjectType = ${stringifyEnum(objs.map(v => JSON.stringify(v.type)))}\n\n` +
  "const $$objectTypeInfoMap = " + stringifyObject(objs.map(obj =>
    [obj.type, [
      "new $$ObjectTypeInfo(",
      ...[obj.shallowProps, obj.deepProps].flatMap(props =>
        [
          stringifyObject(props.map(prop => [stringifyId(prop.id), str(prop.id.prop)])),
          stringifyObject(props.map(prop => [str(prop.id.prop), stringifyId(prop.id)])),
          "null as any as " + stringifyObject(props.map(prop =>
            [stringifyId(prop.id), str(prop.type)]
          )),
          "null as any as " + stringifyObject(props.map(prop =>
            [stringifyId(prop.id), prop.wrapHKT]
          )),
        ].map(str => indent`${str},`)
      ),
      ")",
    ].join("\n")]
  ))
