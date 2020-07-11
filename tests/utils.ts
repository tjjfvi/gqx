
import { readFileSync } from "fs";
import { parse } from "graphql";
import { Context } from "../src";
import groupDefinitions from "../src/groupDefinitions";

const gqlPath = (name: string) => __dirname + "/gql/" + name + ".gql";

const readGql = (...names: string[]) => names.map(name =>
  readFileSync(gqlPath(name), "utf8")
).join("\n\n\n");

const parseGql = (...names: string[]) => parse(readGql(...names));

const emptyCtx = (): Context => ({
  baseTypes: [],
  operations: [],
  scalarTypes: [],
  enumTypes: {},
  inputTypes: {},
  objectTypes: {},
  typeDirectives: {},
});

const getOperations = (names: string[], ctx = emptyCtx()) => {
  groupDefinitions(ctx, parseGql(...names).definitions);
  return ctx;
}

const utils = { gqlPath, readGql, parseGql, emptyCtx, getOperations };

export default utils;
