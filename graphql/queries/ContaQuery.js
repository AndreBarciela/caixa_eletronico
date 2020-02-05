var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLInteger = require('graphql').GraphQLInteger;
//import conta model 
var ContaModel = require('../../models/Conta');
//import GraphQL ContaType
var contaType = require('../types/ContaType').contaType;

// Query
exports.ContaQuery = new GraphQLObjectType({
  name: 'saldo',
  fields: () => {
    return {
      contas: {
        type: new GraphQLList(contaType),
        args: {conta:{type:GraphQLInteger}},
        resolve:  async ()=> {
          const contas = await ContaModel.findOne({conta: args.conta})
          if (!contas) {
            throw new Error('error while fetching data')
          }
          return contas
        }
      }
    }
  }
})