
export default ` /* eslint-disable */

type Int = number;
type Float = number;
type String = string;
type ID = string;
type Boolean = boolean;

interface $<F, L> { f: F, l: L }
const $$ = <F, L>(f: F, l: L) => ({ f, l });

type $$FilterProp<F extends $_, K, T> = F extends K ? T : never;
type $$FilterSub<F extends $_, K, _$> = Extract<F, $<K, _$>>["l"];

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
  new Proxy(() => {}, {
    get: (t, k) => t[k] || (t[k] =
      k !== "$" ?
        $$(f, o()[k]) :
        // @ts-ignore
        (...a: any) => ("$" in o() ? o().$(a) : a).map((a: any) => $$(f, a))
    ),
  })
`
