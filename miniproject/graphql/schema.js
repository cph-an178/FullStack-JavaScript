const {makeExecutableSchema} = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Job {
  type : String
  company : String
  companyUrl : String
}

scalar DateTime

type User {
  _id: ID
  firstName : String
  lastName : String
  userName : String
  password : String
  job : [Job]
  created : DateTime
  lastUpdated : DateTime
}

input userInput {
  userName : String
  password : String
  firstName : String
  lastName : String
}

input userName {
  userName: String
}

type Query {
  findAllUsers : [User]
  findByUsername(input : userName): User
}

type Mutation {
  addUser(input : userInput) : User
}`

const schema = makeExecutableSchema({typeDefs,resolvers});
module.exports = {schema};