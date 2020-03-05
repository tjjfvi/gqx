
import gqx from "../src/index";
import * as fs from "fs";
import path from "path";
import program from "commander";

program
  .option("-s, --schema <path>", "Input GraphQL Schema")
  .option("-t, --template <path>", "Template JS File")
  .option("-o, --output <path>", "Output File");

program.parse(process.argv);

(() => {

  if(!program.schema || !program.template)
    return console.log("Must provide --schema and --template");

  if(program.output) {
    console.log(`Using schema: ${program.schema}`);
    console.log(`Using template: ${program.template}`);
  }

  let schema = (
    fs.statSync(program.schema).isDirectory() ?
      fs.readdirSync(program.schema)
        .filter(f => f.endsWith(".gql") || f.endsWith(".graphql"))
        .map(f => path.join(program.schema, f)) :
      [program.schema]
  ).map(f => fs.readFileSync(f, "utf8")).join("\n\n");

  let template = fs.readFileSync(program.template, "utf8");

  let out = gqx({ schema, template });

  if(program.output) {
    console.log(`Writing output to: ${program.output}`);
    fs.writeFileSync(program.output, out)
    console.log(`Done`);
  } else {
    console.log(out);
  }

})();
