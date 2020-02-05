var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContaSchema = new Schema({
  conta: {
    type: Number,
    required: true
  },
  saldo: {
    type: Number,
    required: true
  }
});

var Model = mongoose.model('conta', ContaSchema);
module.exports = Model;