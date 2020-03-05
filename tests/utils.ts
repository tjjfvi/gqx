
import { readFileSync } from "fs";
import { parse } from "graphql";
import { Context } from "../src";
import groupDefinitions from "../src/groupDefinitions";

const parseGql = (...names: string[]) => parse(names.map(name =>
  readFileSync(__dirname + "/gql/" + name + ".gql", "utf8")
).join("\n\n\n"));

const emptyCtx = (): Context => ({
  exports: [],
  baseTypes: [],
  enumTypes: {},
  inputTypes: {},
  objectTypes: {},
  operations: [],
  config: {},
});

const getOperations = (names: string[], ctx = emptyCtx()) => {
  groupDefinitions(ctx, parseGql(...names).definitions);
  return ctx;
}

const utils = { parseGql, emptyCtx, getOperations };

export default utils;
