import path from "path";
import fs from "fs";
import { parse, Source, DocumentNode } from "graphql";

export const parseSchema = (basePath: string) => {
  const findAllFiles = (curPath: string, name: string, isRoot = false): DocumentNode[] =>
    fs.statSync(curPath).isDirectory() ?
      fs.readdirSync(curPath).flatMap(sub =>
        findAllFiles(path.join(curPath, sub), isRoot ? sub : name + "/" + sub, false)
      ) :
      curPath.endsWith(".gql") || curPath.endsWith(".graphql") ?
        [parse(new Source(fs.readFileSync(curPath, "utf8"), name))] :
        []

  const asts = findAllFiles(basePath, path.parse(basePath).base, true);

  return asts;
}
