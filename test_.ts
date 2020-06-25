/* eslint-disable @typescript-eslint/no-explicit-any */

import { Book, Author, $$GqxReturn, $$AnyProp, $$Frag, $$Input, $$Output, $$generateObject  } from "./output";

type GqxOut_<I extends $$AnyProp> = <T extends $$Frag<I>>(input: $$Input<I>, frag: T) => $$Output<I, T>;

interface GqxOut extends $$GqxReturn {
  return: GqxOut_<this["input"]>;
}

const gqx = $$generateObject<GqxOut>(() => null as any);

const frag = [
  Book.id,
  Book.categories,
  Book.author.name,
  ...Book.author.$([Author.id, Author.books.title])
];
const result = gqx.query.getBook({ id: "id" }, frag);

result.id
result.categories
result.author.id
result.author.name
result.author.books[0].title
