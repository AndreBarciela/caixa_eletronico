var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLString = require('graphql').GraphQLString;
var ContaModel = require('../../models/Conta');
const { errorName } = require('../../constants');

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
            throw new Error(errorName.ACCOUNTNOTEXIST);
          }
          return conta["saldo"];
        }
      }
    }
  }
})