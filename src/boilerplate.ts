// @ts-nocheck
throw new Error("boilerplate.ts should not be imported")
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/* --- */

type Int = number;
type Float = number;
type String = string;
type ID = string;
type Boolean = boolean;

interface $<F, L> { f: F; l: L }
const $$ = <F, L>(f: F, l: L) => ({ f, l });

interface $$OperationId {
  typeProp: string;
  type: string;
  prop: string;
  inputTypes: { [x: string]: string };
}

const __wrap__ = Symbol();

type $$Wrap<X, Y> = X extends $<infer F, infer L> ? $<F, $$Wrap<L, Y>> : never;
type $$MapWrap<O, F> = {
  [K in keyof O | typeof __wrap__ | "$"]:
    K extends "$" ?
      <T extends $_>(x: T[]) => $<F, O extends { [__wrap__]: infer X } ? $$Wrap<X, T> : T>[] :
      K extends keyof O ?
        O[K] extends $_ ?
          $<F, O[K]> :
          $$MapWrap<O[K], F> :
        $<F, null>
}

const $$mapWrap = <O, F>(o: () => O, f: F): $$MapWrap<O, F> =>
  // @ts-ignore
  new Proxy(Object.create(null), {
    get: (t, k: string) => t[k] || (t[k] =
      k !== "$" ?
        o()[k].$ ?
          $$mapWrap(() => o()[k], f) :
          $$(f, o()[k]) :
        // @ts-ignore
        (a: any) => ("$" in o() ? o().$(a) : a).map((a: any) => $$(f, a))
    ),
  })

const $$reconstruct = <I extends $$OperationId>(id: I, input: $$Input.$<I>, props: $$Frag.$<I>[]) => {
  interface Subs { [k: string]: true | Subs }
  const subs: Subs = {};
  props.map(prop => populateSubs(prop, subs));
  const frag = genFrag(subs);
  const inputKeys = Object.keys(input);
  const inputDef = inputKeys.length ? `(${inputKeys.map(k =>
    `$${k}: ${id.inputTypes[k]}`
  ).join(", ")})` : "";
  const inputPass = inputKeys.length ? `(${inputKeys.map(k =>
    `${k}: $${k}`
  )})` : "";
  const request = `${id.typeProp}${inputDef} { ${id.prop}${inputPass}${frag} }`;
  return request;

  function genFrag(subs: Subs){
    return (
      Object.keys(subs).length ?
        `{ ${Object.entries(subs).map(([k, v]) => v === true ? k : k + " " + genFrag(v)).join(" ")} }` :
        ""
    );
  }

  function populateSubs(prop: $_, subs: Subs | true){
    if(subs === true)
      return;
    if("prop" in prop)
      subs[prop.prop] = true;
    else
      populateSubs(prop.l, subs[prop.f.prop] = (subs[prop.f.prop] || {}));
  }
}
