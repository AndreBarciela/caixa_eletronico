var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLFloat = require('graphql').GraphQLFloat;
var contaType = require('../types/ContaType');
var contaModel = require('../../models/Conta');

exports.update = {
    type: contaType.ContaType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        conta: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        saldo: {
            type: new GraphQLNonNull(GraphQLFloat)
        }
    },
    resolve: async(root, args) =>{
        const UpdatedConta = await contaModel.findByIdAndUpdate(args.id, args);
        if (!UpdatedConta) {
          throw new Error('Error')
        }
        return UpdatedConta;
    }
}