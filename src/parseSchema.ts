import path from "path";
import fs from "fs";
import { parse, Source, DocumentNode, createLexer } from "graphql";

export const parseSchema = (basePath: string) => {
  const parseFile = (path: string, name: string) => {
    const body = fs.readFileSync(path, "utf8");
    const source = new Source(body, name);
    const firstToken = createLexer(source, {}).advance();
    if(firstToken.kind === "<EOF>")
      return [];
    return [parse(new Source(body, name))];
  }

  const findAllFiles = (curPath: string, name: string, isRoot = false): DocumentNode[] =>
    fs.statSync(curPath).isDirectory() ?
      fs.readdirSync(curPath).flatMap(sub =>
        findAllFiles(path.join(curPath, sub), (isRoot ? "" : name + "/") + path.parse(sub).name, false)
      ) :
      curPath.endsWith(".gql") || curPath.endsWith(".graphql") ?
        parseFile(curPath, name) :
        []

  const asts = findAllFiles(basePath, path.parse(basePath).name, true);

  return asts;
}
