const express = require('express');
const app = express();
const mongoose = require('mongoose');
const graphqlExpress = require("express-graphql");
const contaSchema = require('./graphql/ContaSchema').ContaSchema;

mongoose.connect('mongodb://mongo/myappdb', (err) => {
    console.log("try to connect to mongo");
    if (err) throw err;
    console.log("connected to mongo");
});

app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'),  () =>{
    console.log("Node app is running at localhost:" + app.get('port'));
});

app.use('/graphql', graphqlExpress({
    schema: contaSchema,
    rootValue: global,
    pretty: true,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.send("hello world ! ");
});