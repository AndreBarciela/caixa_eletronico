var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLString = require('graphql').GraphQLString;
var contaType = require('../types/ContaType');
var ContaModel = require('../../models/Conta');
const { errorName } = require('../../constants');

exports.sacar = {
    type: contaType.ContaType,
    args: {
        conta: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        valor: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async(root, args) => {
        var query = {conta: args.conta};
        const conta = await ContaModel.findOne(query);

        if (args.valor > conta["saldo"]) {
            throw new Error(errorName.UNAUTHORIZED);
        } else {
            var valorAtualizado = conta["saldo"] - args.valor;
            const UpdatedConta = await ContaModel.findByIdAndUpdate(conta["id"], {saldo: valorAtualizado}, {new: true});
            if (!UpdatedConta) {
                throw new Error(errorName.UPDATEERROR)
            }
            return UpdatedConta;
        }
    }
}