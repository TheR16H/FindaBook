const { gql } = require("apollo-server-express");
 
const typeDefs = gql 
type User {
    id: ID
    username: String
    email: String
    bookCount: INTEGER
    savedBooks: [book] //array of "book" type
}
`Book` type:

      * `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)

      * `authors` (An array of strings, as there may be more than one author.)

      * `description`

      * `title`

      * `image`

      * `link`
`Query` type:

      * `me`: Which returns a `User` type.
  
    * `Mutation` type:

      * `login`: Accepts an email and password as parameters; returns an `Auth` type.

      * `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

      * `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

      * `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.


    * `Auth` type:

      * `token`

      * `user` (References the `User` type.)

module.exports = typeDefs;