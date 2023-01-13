import { indent } from "../indent"
import { Obj } from "."
import { stringifyId } from "./stringifyId"

export const stringifyObjectGen = (objs: Obj[]) =>
  `
export type $OperationTypes = ${objs.map(o => JSON.stringify(o.type)).join(" | ")}
export const $gqx = <F extends $Hkt<$OperationProp>>(f: <P extends $OperationProp>(p: P) => $Hkt.Call<F, P>) => ({\n${
    objs.map(o =>
      indent`${o.prop}: {\n${
        o.props.map(p => indent`${p.id.prop}: f(${stringifyId(p.id)}),\n`).join("")
      }},\n`
    ).join("")
  }})
`.trim()
