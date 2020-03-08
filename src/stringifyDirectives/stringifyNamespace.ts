import { Obj } from ".";
import stringifyValue from "./stringifyValue";
import indent from "../indent";

export default (objs: Obj[]) =>
  `export namespace $$Directives {\n${
    objs.map(obj =>
      indent`export namespace ${obj.type} {\n${
        obj.props.map(p =>
          indent`export type ${p.prop} = {${
            p.dirs.length ?
              `\n${
                p.dirs.map(dir =>
                  indent`${dir.dirName}: {${
                    dir.dirArgs && dir.dirArgs.length ?
                      indent`\n${
                        dir.dirArgs.map(arg =>
                          `${arg.name.value}: ${stringifyValue(arg.value)},`
                        ).join("\n")
                      }\n` :
                      ""
                  }},`
                ).join("\n")
              }\n` :
              ""
          }}`
        ).join("\n")
      }\n}`
    ).join("\n")
  }\n${
    indent`export type $<T> =${objs.map(o => o.props.map(p =>
      indent`\nT extends ${p.type}$${p.prop} ? ${p.type}.${p.prop} :`
    ).join("")).join("")}\n${indent`never\n`}`
  }}`
