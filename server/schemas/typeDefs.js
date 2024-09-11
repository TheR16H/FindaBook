const { gql } = require("apollo-server-express");
 
const typeDefs = gql`
type User {
    id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book] //array of "book" type
}
type Book {
    bookId: ID 
    authors: [String] 
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

    login(email: String!, password: String!): Auth 
    addUser(username: String!, email: String!, password: String!): Auth 
    saveBook(
    authors: [String]! 
    description: String!
    title: String!
    bookId: ID!
    image: String!
 )  
    removeBook(bookId: ID!): User 

}
    type Query {
    me: User
  }
 
 `;
module.exports = typeDefs;