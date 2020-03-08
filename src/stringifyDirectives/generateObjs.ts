
import { Obj } from ".";
import { Context } from "..";

export default (ctx: Context) =>
  Object.entries(ctx.objectTypes).map(([type, fields]): Obj => ({
    type,
    props: fields.map(f => ({
      type,
      prop: f.name.value,
      dirs: (f.directives || []).map(d => ({
        type,
        prop: f.name.value,
        dirName: d.name.value,
        dirArgs: d.arguments?.slice(),
      }))
    })),
  }))
