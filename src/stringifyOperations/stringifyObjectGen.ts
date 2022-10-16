
import { Obj } from "."
import { stringifyId } from "./stringifyId";
import { indent } from "../indent";

export const stringifyObjectGen = (objs: Obj[]) =>
  `
export type $OperationTypes = ${objs.map(o => JSON.stringify(o.type)).join(" | ")}
export const $gqx = <F extends $Hkt<$OperationProps>>(f: <P extends $OperationProps>(p: P) => $CallHkt<F, P>) => ({\n${
  objs.map(o =>
    indent`${o.prop}: {\n${
      o.props.map(p =>
        indent`${p.id.prop}: f(${stringifyId(p.id)}),\n`
      ).join("")
    }},\n`
  ).join("")
}})
`.trim()
