/* eslint-disable @typescript-eslint/no-namespace */

import "jest-chain";

import ts from "typescript";
import utils from "./utils";
type Utils = typeof utils;

expect.extend({
  toParse: (source: string) => {
    let result = ts.transpileModule(source, {});
    result;
    return {
      message: () => `It parsed!`,
      pass: true,
    }
  }
})

declare global {
  namespace jest {
    interface Matchers<R> {
      toParse(): R;
    }
  }
  namespace NodeJS {
    interface Global {
      utils: Utils;
    }
  }
  const utils: Utils;
}

global.utils = utils;

