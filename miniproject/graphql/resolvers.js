const userFacade = require("../facades/userFacade");
//const loginFacade = require("../facades/loginFacade")
//const blogFacade = require("../facades/blogFacade")

const {DateTime} = require("@okgrow/graphql-scalars");

//Resolver map
module.exports = resolvers = {
  DateTime,
  Query: {
    getAllUsers : () => {
      return userFacade.findAllUsers();
    },   
  },
};