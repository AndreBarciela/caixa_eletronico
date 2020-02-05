var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInteger = require('graphql').GraphQLInteger;
var GraphQLDouble = require('graphql').GraphQLDouble;

exports.bookType = new GraphQLObjectType({
    name: 'conta',
    fields:  () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },      
            conta: {
                type: GraphQLInteger
            },     
            saldo: {
                type: GraphQLDouble
            }
        }
    }
});