var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLFloat = require('graphql').GraphQLFloat;
var contaType = require('../types/ContaType');
var contaModel = require('../../models/Conta');

exports.addConta = {
  type: contaType.contaType,

  args: {
    conta: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    saldo: {
      type: new GraphQLNonNull(GraphQLFloat),
    }
  },
  resolve: async(root, args)=> {
    const uModel = new contaModel(args);
    const newConta = await uModel.save();
    if (!newConta) {
      throw new Error('error');
    }
    return newConta
  }
}