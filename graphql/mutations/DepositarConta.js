var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLInt = require('graphql').GraphQLInt;
var contaType = require('../types/ContaType');
var ContaModel = require('../../models/Conta');
const { errorName } = require('../../constants');

exports.depositar = {
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
        if (args.valor <= 0) {
            throw new Error(errorName.VALORZERODEPOSITO);
        }

        var query = {conta: args.conta};
        const conta = await ContaModel.findOne(query);

        var valorAtualizado = conta["saldo"] + args.valor;
        const UpdatedConta = await ContaModel.findByIdAndUpdate(conta["id"], {saldo: valorAtualizado}, {new: true});
        if (!UpdatedConta) {
            throw new Error(errorName.UPDATEERROR)
        }
        return UpdatedConta;
        
    }
}