#!/usr/bin/env node

import gqx from "../src/index";
import * as fs from "fs";
import program from "commander";

program
  .option("-s, --schema <path>", "Input GraphQL Schema")
  .option("-o, --output <path>", "Output File");

program.parse(process.argv);

(() => {

  if(!program.schema)
    return console.log("Must provide --schema");

  if(program.output)
    console.log(`Using schema: ${program.schema}`);

  let out = gqx({ schemaPath: program.schema });

  if(program.output) {
    console.log(`Writing output to: ${program.output}`);
    fs.writeFileSync(program.output, out)
    console.log(`Done`);
  } else {
    console.log(out);
  }

})();
