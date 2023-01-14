export * from "./output"

import {
  $FieldFrag,
  $FieldInput,
  $FieldOutput,
  $Fragment,
  $gqx,
  $Hkt,
  $OperationField,
  Author,
  Book,
} from "./output"

// Type of e.g. gqx.query.getBook
type GqxOut_<P extends $OperationField> = [
  <F extends $FieldFrag[P][]>(
    input: $FieldInput[P],
    ...frag: [...F]
  ) => Promise<$FieldOutput<F>[P]>,
][0]
// HKT encoding to pass to $$generateObject
interface GqxOut extends $Hkt<$OperationField> {
  type: (_: $Hkt.Input<this>) => GqxOut_<typeof _>
}

export const gqx = $gqx<GqxOut>(
  (prop) => async (input, ...frag) => {
    console.log(input, $Fragment.merge(...frag).toString())
    return null!
  },
)

const frag = Book.$(
  Book.id,
  Book.description,
  Book.author.$(
    Author.id,
    Author.name,
  ),
)

const v = gqx.query.getBook({ id: "a" }, frag)
