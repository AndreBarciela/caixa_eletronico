var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
//import conta model 
var ContaModel = require('./Conta');
//import GraphQL ContaType
var contaType = require('./ContaType').contaType;
// Query
exports.ContaQuery = new GraphQLObjectType({
  name: 'Query',
  fields:  (conta) => {
    return {
      contas: {
        type: new GraphQLList(contaType),
        resolve:  async ()=> {
          const contas = await ContaModel.findOne({conta: conta})
          if (!contas) {
            throw new Error('error while fetching data')
          }
          return contas
        }
      }
    }
  }
})