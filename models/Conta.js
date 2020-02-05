var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContaSchema = new Schema({
  conta: {
    type: Integer,
    required: true
  },
  saldo: {
    type: Double,
    required: true
  }
});

var Model = mongoose.model('conta', ContaSchema);
module.exports = Model;