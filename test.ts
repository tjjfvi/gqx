
import { Book, $Book, Author } from "./output";

const frag = [
  Book.id,
  Book.categories,
  Book.author.name,
  ...Book.author.$([Author.id, Author.books.title])
];
type Result = $Book<typeof frag>;
declare const result: Result;

result.id
result.categories
result.author.id
result.author.name
result.author.books[0].title
