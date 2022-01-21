const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Item {
    id: ID
    name: String
    details: String
  }

  type Query {
    getAllItems: [Item]
    getSingleItem(id: ID): Item
  }
  input ItemInput {
    name: String
    details: String
  }
  type Mutation {
    createItem(item: ItemInput): Item
    deleteItem(id: ID): String
    updateItem(id: ID, item: ItemInput): Item
  }
`;

module.exports = typeDefs;
