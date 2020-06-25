// @ts-nocheck
if(!0) throw new Error("boilerplate.ts should not be imported")
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/* --- */

export interface $$Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Float: number;
  Int: number;
}

export interface $<F, L> { readonly f: F; readonly l: L }
export const $ = <F, L>(f: F, l: L) => ({ f, l });

export interface $$HKT<I = unknown> {
  input: I;
  return: unknown;
}

export type $$CallHKT<HKT extends $$HKT, I extends HKT["input"]> = (HKT & { input: I })["return"];

interface DeepFragRecurseGuard<F, Lo> extends $<F, Values<Lo>> { readonly l: Values<Lo> }

type $$Type = $$EnumType | $$ScalarType | $$ObjectType;
type $$EnumType = keyof $$EnumTypes;
type $$ScalarType = keyof $$Scalars;

type $$AnyFrag = $$ObjectTypeInfoMap[$$ObjectType]["Frag"];
type $$AnyProp = $$ObjectTypeInfoMap[$$ObjectType]["ShallowFrag"];

type __$$Frag<T extends $$Type> = T extends $$ObjectType ? $$ObjectTypeInfoMap[T]["Frag"] : never;
type _$$Frag<O extends _$$ObjectTypeInfo, T extends O["Prop"]> = (
  __$$Frag<$$ObjectTypeInfoMap[$$PropToType[T]]["Type"][T]>
)
export type $$Frag<T extends $$AnyProp> = _$$Frag<$$ObjectTypeInfoMap[$$PropToType[T]], T>

type $$ObjectTypeInfoMap = typeof $$objectTypeInfoMap;

type __$$DeepFrag<O extends _$$ObjectTypeInfo, F extends O["DeepProp"]> =
  _$$DeepFrag<O> & { $$shallow: O["ShallowFrag"] }

type _$$DeepFrag<O extends _$$ObjectTypeInfo> =
  { [F in O["DeepProp"]]: DeepFragRecurseGuard<F, __$$DeepFrag<$$ObjectTypeInfoMap[O["DeepType"][F]], F>> }

type Values<T> = T[keyof T];

type $$InflateObjectType<O extends _$$ObjectTypeInfo, HKT extends $$HKT<O["Prop"]>> = {
  [K in O["Name"]]: $$CallHKT<O["Wrap"][O["NameProp"][K]], $$CallHKT<HKT, O["NameProp"][K]>>
}

type ___$$Result<O extends _$$ObjectTypeInfo, F extends O["Frag"], P extends O["Prop"], T extends $$Type> =
  T extends $$ScalarType ?
  $$Scalars[T] :
  T extends $$EnumType ?
  $$EnumTypes[T] :
  T extends $$ObjectType ?
  $$Result<T, Extract<F, $<P, any>>["l"]> :
  never

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface __$$Result<O extends _$$ObjectTypeInfo, F extends O["Frag"]> extends $$HKT<O["Prop"]> {
  return: ___$$Result<O, F, this["input"], O["Type"][this["input"]]>;
}

type _$$Result<O extends _$$ObjectTypeInfo, F extends O["Frag"]> = (
  Pick<$$InflateObjectType<O, __$$Result<O, F>>, O["PropName"][Extract<F, string> | Extract<F, { f: string }>["f"]]>
)

export type $$Result<O extends $$ObjectType, F extends $$ObjectTypeInfoMap[O]["Frag"]> = (
  _$$Result<$$ObjectTypeInfoMap[O], F>
)

export type _$$ObjectTypeInfo = $$ObjectTypeInfo<any, any, any, any, any, any, any, any, any, any, any, any>;

export type $$PropToType = {
  [K in $$ObjectType]: (contravariant: Record<$$ObjectTypeInfoMap[K]["Prop"], K>) => void
}[$$ObjectType] extends (contravariant: infer T) => void ? T : void;

export class $$ObjectTypeInfo<
  ShallowProp extends keyof ShallowPropName & string,
  ShallowName extends keyof ShallowNameProp & string,
  ShallowPropName extends Record<ShallowProp, ShallowName>,
  ShallowNameProp extends Record<ShallowName, ShallowProp>,
  ShallowType extends Record<ShallowProp, $$ScalarType | $$EnumType>,
  ShallowWrap extends Record<ShallowProp, $$HKT>,
  DeepProp extends keyof DeepPropName & string,
  DeepName extends keyof DeepNameProp & string,
  DeepPropName extends Record<DeepProp, DeepName>,
  DeepNameProp extends Record<DeepName, DeepProp>,
  DeepType extends Record<DeepProp, $$ObjectType>,
  DeepWrap extends Record<DeepProp, $$HKT>,
  > {

  declare ShallowProp: ShallowProp;
  declare ShallowName: ShallowName;
  declare ShallowPropName: ShallowPropName;
  declare ShallowNameProp: ShallowNameProp;
  declare ShallowType: ShallowType;
  declare ShallowWrap: ShallowWrap;
  declare DeepProp: DeepProp;
  declare DeepName: DeepName;
  declare DeepPropName: DeepPropName;
  declare DeepNameProp: DeepNameProp;
  declare DeepType: DeepType;
  declare DeepWrap: DeepWrap;

  declare ShallowFrag: ShallowProp;
  declare DeepFrag: Values<_$$DeepFrag<this>>;
  declare PropName: ShallowPropName & DeepPropName;
  declare NameProp: ShallowNameProp & DeepNameProp;
  declare Wrap: ShallowWrap & DeepWrap;
  declare Type: DeepType & ShallowType;
  declare Prop: ShallowProp | DeepProp;
  declare Name: ShallowName | DeepName;
  declare Frag: this["ShallowFrag"] | this["DeepFrag"];

  constructor(
    public shallowPropToName: ShallowPropName,
    public shallowNameToProp: ShallowNameProp,
    _0: ShallowType,
    _1: ShallowWrap,
    public deepPropToName: DeepPropName,
    public deepNameToProp: DeepNameProp,
    _2: DeepType,
    _3: DeepWrap,
  ){

  }

}

export interface $$Identity<I = unknown> extends $$HKT<I> {
  return: this["input"];
}

export interface $$Optional<HKT extends $$HKT = $$Identity> extends $$HKT {
  return: $$CallHKT<HKT, this["input"]> | null;
}

export interface $$Array<HKT extends $$HKT = $$Identity> extends $$HKT {
  return: $$CallHKT<HKT, this["input"]>[];
}

export type $$DeepArray<T> = (T | $$DeepArray<T>)[];
export type $$UnwrapDeepArray<T extends $$DeepArray<any>> = T extends $$DeepArray<infer U> ? U : never;

export type $$GqxReturn = $$HKT<$$OperationId>;
type $$CallGqxReturn<R extends $$GqxReturn, I extends $$OperationId> = (R & { id: I })["return"];
export type $$GqxImpl<R extends $$GqxReturn> = <I extends $$OperationId>(id: I) => $$CallGqxReturn<R, I>;

const __wrap__ = Symbol();

type $$Wrap<X, Y> = X extends $<infer F, infer L> ? $<F, $$Wrap<L, Y>> : never;
type $$MapWrap<O, F> = {
  [K in keyof O | typeof __wrap__ | "$"]:
  K extends "$" ?
  <T extends $$AnyFrag>(x: $$DeepArray<T>) =>
    $<F, O extends { [__wrap__]: infer X } ? $$Wrap<X, T> : T>[] :
  K extends keyof O ?
  O[K] extends $$AnyFrag ?
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
          $(f, o()[k]) :
        // @ts-ignore
        (a: any) => ("$" in o() ? o().$(a) : a).flat(Infinity).map((a: any) => $(f, a))
    ),
  })

export const $$reconstruct = <I extends $$OperationId>(id: I, input: $$Input<I>, props: $$Frag<I>) => {
  interface Subs { [k: string]: true | Subs }
  const subs: Subs = {};
  populateSubs(props, subs);
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

  function populateSubs(prop: $$AnyFrag | $$DeepArray<$$AnyFrag>, subs: Subs | true){
    if(prop instanceof Array)
      return prop.map(p => populateSubs(p, subs));
    if(subs === true)
      return;
    if(typeof prop === "string")
      return subs[prop.split("$")[1]] = true;
    const name = prop.f.split("$")[1];
    populateSubs(prop.l, subs[name] = (subs[name] || {}));
  }
}

/* --- */

// type $$ObjectType = "A" | "B";
// const $$objectTypeInfoMap = {
//   A: new $$ObjectTypeInfo(
//     { A$x: "x", A$y: "y" },
//     { x: "A$x", y: "A$y" },
//     null as any as { A$x: "String"; A$y: "Boolean" },
//     null as any as { A$x: $$Identity; A$y: $$Array },
//     { A$a: "a", A$b: "b" },
//     { a: "A$a", b: "A$b" },
//     null as any as { A$a: "A"; A$b: "B" },
//     null as any as { A$a: $$Identity; A$b: $$Optional },
//   ),
//   B: new $$ObjectTypeInfo(
//     { B$u: "u", B$v: "v" },
//     { u: "B$u", v: "B$v" },
//     null as any as { B$u: "String"; B$v: "Boolean" },
//     null as any as { B$u: $$Array; B$v: $$Optional },
//     { B$a: "a" },
//     { a: "B$a" },
//     null as any as { B$a: "A" },
//     null as any as { B$a: $$Array },
//   ),
// }

// export interface $$EnumTypes {
//   Test: "a" | "b";
// }
