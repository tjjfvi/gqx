export * from "./output"

import { $DeepPropTypes, $Frag, $gqx, $Hkt, $Input, $OperationProps, $Output, Book } from "./output"

// Type of e.g. gqx.query.getBook
type GqxOut_<I extends $OperationProps> = <F extends $Frag[$DeepPropTypes[I]]>(
  input: $Input[I],
  frag: F,
) => Promise<$Output<F>[$DeepPropTypes[I]]>

// HKT encoding to pass to $$generateObject
interface GqxOut extends $Hkt<$OperationProps> {
  return: GqxOut_<this["input"]>
}

// Imported by codegen output
export interface $$Scalars {
  String: string
  Boolean: boolean
  Float: number
  Int: number
  ID: string
}

export const gqx = $gqx<GqxOut>(() => null!)

gqx.query.getBook({ id: "a" }, Book.author.id)
