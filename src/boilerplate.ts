// @ts-nocheck
if(!0) throw new Error("boilerplate.ts should not be imported")
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/* --- */

import { $$Scalars } from "./scalars.ts";

export interface $<F, L> { readonly f: F; readonly l: L }
export const $ = <F, L>(f: F, l: L) => ({ f, l });

export interface $$HKT<I = unknown> {
  input: I;
  return: unknown;
}

export type $$CallHKT<HKT extends $$HKT, I extends HKT["input"]> = (HKT & { input: I })["return"];

interface DeepFragRecurseGuard<F, Lo> extends $<F, Values<Lo>> { readonly l: Values<Lo> }

export type $$Type = $$EnumType | $$ScalarType | $$ObjectType;
export type $$EnumType = keyof $$EnumTypes;
export type $$ScalarType = keyof $$Scalars;

export type $$AnyFrag = $$ObjectTypeInfoMap[$$ObjectType]["Frag"];
export type $$AnyProp = $$ObjectTypeInfoMap[$$ObjectType]["Prop"];

export type $$Input<T extends $$AnyProp> = $$PropToInputType[T];

type _$$Frag<T extends $$Type> = T extends $$ObjectType ? $$ObjectTypeInfoMap[T]["Frag"] : never;
export type $$Frag<T extends $$AnyProp> = $$DeepArray<_$$Frag<$$PropToOutput[T]>>;

type _$$Output<T extends $$Type, F extends _$$Frag<T>> =
  T extends $$ObjectType ?
    $$Result<T, F> :
    T extends $$ScalarType ?
      $$Scalars[T] :
      T extends $$EnumType ?
        $$EnumTypes[T] :
        never
export type $$Output<T extends $$AnyProp, F extends $$Frag<T>> =
  $$CallHKT<$$PropToWrap[T], _$$Output<$$PropToOutput[T], $$UnwrapDeepArray<F, _$$Frag<$$PropToOutput[T]>>>>;

export type $$ObjectTypeInfoMap = typeof $$objectTypeInfoMap;

type __$$DeepFrag<O extends _$$ObjectTypeInfo, F extends O["DeepProp"]> =
  _$$DeepFrag<O> & { $$shallow: O["ShallowFrag"] }

type _$$DeepFrag<O extends _$$ObjectTypeInfo> =
  { [F in O["DeepProp"]]: DeepFragRecurseGuard<F, __$$DeepFrag<$$ObjectTypeInfoMap[O["DeepType"][F]], F>> }

type Values<T> = T[keyof T];

export type $$InflateObjectType<O extends _$$ObjectTypeInfo, HKT extends $$HKT<O["Prop"]>> = {
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

export type _$$ObjectTypeInfo = $$ObjectTypeInfo<any, any, any, any, any, any, any, any, any, any>;

export type $$PropToInputType = {
  [K in keyof $$PropToInfo]: $$PropToInfo[K]["InputTypes"][Extract<K, keyof $$PropToInfo[K]["InputTypes"]>];
}

export type $$PropToWrap = {
  [K in keyof $$PropToInfo]: $$PropToInfo[K]["Wrap"][Extract<K, keyof $$PropToInfo[K]["Wrap"]>];
}

export type $$PropToOutput = {
  [K in keyof $$PropToInfo]: $$PropToInfo[K]["Type"][Extract<K, keyof $$PropToInfo[K]["Type"]>];
}

export type $$PropToInfo = {
  [K in keyof $$PropToType]: $$ObjectTypeInfoMap[$$PropToType[K]]
}

export type $$PropToType = {
  [K in $$ObjectType]: (contravariant: Record<$$ObjectTypeInfoMap[K]["Prop"], K>) => void
}[$$ObjectType] extends (contravariant: infer T) => void ? T : void;

export class $$ObjectTypeInfo<
  ShallowPropName extends Record<string, keyof ShallowNameProp>,
  ShallowNameProp extends Record<string, keyof ShallowPropName>,
  ShallowType extends Record<keyof ShallowPropName, $$ScalarType | $$EnumType>,
  ShallowWrap extends Record<keyof ShallowPropName, $$HKT>,
  DeepPropName extends Record<string, keyof DeepNameProp>,
  DeepNameProp extends Record<string, keyof DeepPropName>,
  DeepType extends Record<keyof DeepPropName, $$ObjectType>,
  DeepWrap extends Record<keyof DeepPropName, $$HKT>,
  InputTypes extends Record<keyof ShallowPropName | keyof DeepPropName, {}>,
  Directives extends Record<keyof ShallowPropName | keyof DeepPropName, Record<string, {}>>,
  > {

  declare ShallowProp: keyof ShallowPropName;
  declare ShallowName: keyof ShallowNameProp;
  declare ShallowPropName: ShallowPropName;
  declare ShallowNameProp: ShallowNameProp;
  declare ShallowType: ShallowType;
  declare ShallowWrap: ShallowWrap;
  declare DeepProp: keyof DeepPropName;
  declare DeepName: keyof DeepNameProp;
  declare DeepPropName: DeepPropName;
  declare DeepNameProp: DeepNameProp;
  declare DeepType: DeepType;
  declare DeepWrap: DeepWrap;
  declare InputTypes: InputTypes;
  declare Directives: Directives;

  declare ShallowFrag: this["ShallowProp"];
  declare DeepFrag: Values<_$$DeepFrag<this>>;
  declare PropName: ShallowPropName & DeepPropName;
  declare NameProp: ShallowNameProp & DeepNameProp;
  declare Wrap: ShallowWrap & DeepWrap;
  declare Type: DeepType & ShallowType;
  declare Prop: this["ShallowProp"] | this["DeepProp"];
  declare Name: this["ShallowName"] | this["DeepName"];
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
    _4: InputTypes,
    public inputTypeStrings: Record<keyof ShallowPropName | keyof DeepPropName, any>,
    public directives: Directives,
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
export type $$UnwrapDeepArray<A extends $$DeepArray<T>, T = any> =
  Extract<A extends $$DeepArray<infer U> ? U : never, T>;

export type $$GqxReturn = $$HKT<$$AnyProp>;
type $$CallGqxReturn<R extends $$GqxReturn, I extends $$AnyProp> = $$CallHKT<R, I>;
export type $$GqxImpl<R extends $$GqxReturn> = <I extends $$AnyProp>(id: I) => $$CallGqxReturn<R, I>;

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

export const $$reconstruct = <I extends $$AnyProp>(id: I, input: $$Input<I>, props: $$Frag<I>) => {
  interface Subs { [k: string]: true | Subs }
  const subs: Subs = {};
  populateSubs(props, subs);
  const frag = genFrag(subs);
  const inputKeys = Object.keys(input);
  const inputDef = inputKeys.length ? `(${inputKeys.map(k =>
    `$${k}: ${$$objectTypeInfoMap[id.split("$")[0]].inputTypes[id][k]}`
  ).join(", ")})` : "";
  const inputPass = inputKeys.length ? `(${inputKeys.map(k =>
    `${k}: $${k}`
  )})` : "";
  const request = `${id.split("$")[0].toLowerCase()}${inputDef} { ${id.split("$")[1]}${inputPass}${frag} }`;
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

/* --- End Boilerplate --- */
