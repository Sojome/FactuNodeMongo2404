// familia.js
const mongoose = require('mongoose');
// Define el esquema de familia
const usuarioSchema = new mongoose.Schema({
  codigo: String,
  nombreFamilia: String
});
// Crea el modelo de familia
//const User = mongoose.model('Familia', usuarioSchema);
//module.exports = Familia;
//se hace el proceso directo
module.exports = mongoose.model('Familia', usuarioSchema);