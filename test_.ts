
import { gqx, Book, Author } from "./output";

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
