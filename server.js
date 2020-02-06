const express = require('express');
const app = express();
const mongoose = require('mongoose');
const graphqlExpress = require("express-graphql");
const contaSchema = require('./graphql/ContaSchema').ContaSchema;
const getErrorCode = require('./utils/errors');
const ContaModel = require('./models/Conta');

mongoose.connect('mongodb://mongo/caixaeletronicodb', (err) => {
    if (err) throw err;
    console.log("connected to mongo");

    ContaModel.find({}, (error, doc) => {
        console.log("linhas encontradas: "+doc.length);
        if (doc.length == 0) {
            let initialValues = [
                {conta: 123, saldo: 100},
                {conta: 456, saldo: 200},
                {conta: 789, saldo: 300},
                {conta: 54321, saldo: 400}
            ];

            ContaModel.insertMany(initialValues, function (err, value) {
                if (err) {
                    console.log(err);
                };
                console.log(value);
            });
        }
    });
});



app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'),  () =>{
    console.log("Node app is running at localhost:" + app.get('port'));
});

app.use('/graphql', graphqlExpress({
    schema: contaSchema,
    graphiql: true,
    formatError: (err) => {
        const error = getErrorCode(err.message);
        return ({ message: error.message, statusCode: error.statusCode });
    }
}));

app.get('/', (req, res) => {
    res.send("hello world ! ");
});