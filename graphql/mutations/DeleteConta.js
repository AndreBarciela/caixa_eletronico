var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var contaType = require('../types/ContaType');
var contaModel = require('../../models/Conta');

exports.remove = {
  type: contaType.ContaType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async(root, args)=> {
    const removedConta = await contaModel.findByIdAndRemove(args.id)
    if (!removedConta) {
      throw new Error('error')
    }
    return removedConta;
  }
}
