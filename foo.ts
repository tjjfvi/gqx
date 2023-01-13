import { Author, Book } from "./output"

console.log(
  Book.$(
    Book.id,
    Book.author.id,
    Book.author.$(
      Author.name,
      Author.books.id,
    ),
  ).toString(),
)
