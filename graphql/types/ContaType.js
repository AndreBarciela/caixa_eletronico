var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLFloat = require('graphql').GraphQLFloat;

exports.contaType = new GraphQLObjectType({
    name: 'conta',
    fields:  () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },      
            conta: {
                type: GraphQLInt
            },     
            saldo: {
                type: GraphQLFloat
            }
        }
    }
});