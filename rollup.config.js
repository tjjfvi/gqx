import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import nodeResolve from "@rollup/plugin-node-resolve";
import nodePolyfills from "rollup-plugin-node-polyfills";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import livereload from "rollup-plugin-livereload";
import styles from "rollup-plugin-styles";
import { string } from "rollup-plugin-string";
// import { terser } from "rollup-plugin-terser"

const dev = process.env.NODE_ENV === "development";

export default {
  input: "playground/index.tsx",
  external: ["perf_hooks", "inspector"],
  output: {
    dir: "playground/dist",
    format: "iife",
    sourcemap: dev,
    globals: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      perf_hooks: "undefined",
      inspector: "undefined",
    },
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      preventAssignment: true,
    }),
    typescript({
      tsconfig: "playground.tsconfig.json",
    }),
    commonjs({
      include: /node_modules/,
    }),
    nodePolyfills(),
    nodeResolve(),
    string({
      include: "**/*.txt",
    }),
    ...dev
      ? [
        serve({
          contentBase: ["playground"],
          port: process.env.PORT || 8080,
        }),
        livereload({ watch: "playground/dist" }),
      ]
      : [],
    styles(),
    // ...!dev ? [
    //   terser(),
    // ] : [],
  ],
};
