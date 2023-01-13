export * from "./output"

import {
  $DeepPropTypes,
  $Frag,
  $Fragment,
  $gqx,
  $Hkt,
  $OperationProp,
  $PropFrag,
  $PropInput,
  $PropType,
  $Unfrag,
  Author,
  Book,
} from "./output"

// Type of e.g. gqx.query.getBook
type GqxOut_<P extends $OperationProp> = [
  <F extends $PropFrag[P][]>(
    input: $PropInput[P],
    ...frag: [...F]
  ) => Promise<$PropType<F>[P]>,
][0]
// HKT encoding to pass to $$generateObject
interface GqxOut extends $Hkt<$OperationProp> {
  type: (_: $Hkt.Input<this, $OperationProp>) => GqxOut_<typeof _>
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

gqx.query.getBook({ id: "a" }, Book.author.id)
