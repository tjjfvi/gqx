/* eslint-disable @typescript-eslint/no-explicit-any */

import { Author, $$GqxReturn, $$AnyProp, $$Frag, $$Input, $$Output, $$generateObject, Person, $$reconstruct } from "./output";

const frag = Person.$(
  Person.id,
  Person.favoriteBook.id,
  Author.name,
  Author.books.id,
);

console.log($$reconstruct("Query$getPerson", { id: "id" }, frag));

type GqxOut_<I extends $$AnyProp> = <T extends $$Frag<I>>(input: $$Input<I>, frag: T) => $$Output<I, T>;

interface GqxOut extends $$GqxReturn {
  return: GqxOut_<this["input"]>;
}

const gqx = $$generateObject<GqxOut>(() => null as any);

const result = gqx.query.getPerson({ id: "id" }, frag);

result.id
if(result.__typename === "Author")
  result.favoriteBook
if(result.__typename === "User")
  result.favoriteBook
