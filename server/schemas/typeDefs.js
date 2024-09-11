const { gql } = require("apollo-server-express");
 
const typeDefs = gql 
type User {
    id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book] //array of "book" type
}
type Book {
    bookId: ID // (Not the `_id`, but the book's `id` value returned from Google's Book API.)
    authors: [String] // (An array of strings, as there may be more than one author.)
    description: String!
    title: String!
    image: String!
    link: String!
}
 type Auth {
    token: ID!
    user: User
  }
type Mutation {

    login(email: String!, password: String!): Auth // Accepts an email and password as parameters; returns an `Auth` type.
    addUser(username: String!, email: String!, password: String!): Auth //Accepts a username, email, and password as parameters; returns an `Auth` type.
    saveBook(
    authors: [String]! 
    description: String!
    title: String!
    bookId: ID!
    image: String!
 )  //Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)
    removeBook(bookId: ID!): User // Accepts a book's `bookId` as a parameter; returns a `User` type.

}
    type Query {
    me: User
  }
 
 ;
module.exports = typeDefs;