var addconta = require('./AddConta').add;
var updateconta = require('./UpdateConta').update;
var deleteconta = require('./DeleteConta').remove;
var sacar = require('./SacarConta').sacar;

module.exports = {
  addconta,
  updateconta,
  deleteconta,
  sacar
}