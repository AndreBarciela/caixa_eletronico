var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLInt = require('graphql').GraphQLInt;
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
        type: new GraphQLList(contaType),
        args: {
          conta: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve:  async (root, args)=> {
          var query = {conta: args.conta};
          const conta = await ContaModel.find(query)
          if (!conta) {
            throw new Error('error while fetching data')
          }
          return conta
        }
      }
    }
  }
})