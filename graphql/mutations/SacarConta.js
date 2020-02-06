var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLString = require('graphql').GraphQLString;
var contaType = require('../types/ContaType');
var ContaModel = require('../../models/Conta');
const { errorName } = require('../../constants');

exports.sacar = {
    type: GraphQLString,
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
            throw new Error(errorName.UNAUTHORIZED)
        } else {
            return "Pode sacar...";
        }

        // const UpdatedConta = await contaModel.findByIdAndUpdate(args.id, args);
        // if (!UpdatedConta) {
        //   throw new Error('Error')
        // }
        // return UpdatedConta;
    }
}