var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLString = require('graphql').GraphQLString;
//import conta model 
var ContaModel = require('../../models/Conta');
//import GraphQL ContaType
var contaType = require('../types/ContaType').ContaType;

// Query
exports.ContaQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      saldo: {
        type: new GraphQLNonNull(GraphQLString),
        args: {
          conta: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: async (root, args)=> {
          var query = {conta: args.conta};
          const conta = await ContaModel.findOne(query);
          if (!conta) {
            throw new Error('error while fetching data');
          }
          return conta["saldo"];
        }
      }
    }
  }
})