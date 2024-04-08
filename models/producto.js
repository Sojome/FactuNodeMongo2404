// producto.js
const mongoose = require('mongoose');
// Define el esquema de usuario
const usuarioSchema = new mongoose.Schema({
  codigo: String,
  nombreProd: String,
  precio: Number,
  stock: Number
});
// Crea el modelo de usuario
//const User = mongoose.model('Producto', usuarioSchema);
//module.exports = User;
//se hace el proceso directo
module.exports = mongoose.model('Producto', usuarioSchema);