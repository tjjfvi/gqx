`gqx` aims to provide a type-safe, implementation-agnostic way to express, communicate, and instantiate GraphQL fragments.

```ts
const authorFrag = Author.$(
  Author.id,
  Author.name,
);

const bookFrag1 = Book.$(
  Book.id,
  Book.title,
  Book.author.name,
);

const bookFrag2 = Book.$(
  Book.id,
  Book.author.$(authorFrag)
);

const bookFragCombined = Book.$(
  bookFrag1,
  bookFrag2,
);

gqx.query.getBook({ id: "abc" }, bookFragCombined).then(book => {
  book; // Hover
  /*
    (parameter) book: {
      __typename: "Book";
      id: string;
      title: string;
      author: {
        __typename: "Author";
        id: string;
        name: string;
      };
    }
  */
})
```

[Interactive Playground](https://gqx.t6.fyi/)

It also spews out lots of generic info about the graphql schema (both in types and runtime objects), which can be used to type tangental aspects of the gql schema, like resolver types.
