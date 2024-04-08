// user.js
const mongoose = require('mongoose');
// Define el esquema de usuario
const usuarioSchema = new mongoose.Schema({
   username: String,
  password: String
});
// Crea el modelo de usuario
//const User = mongoose.model('Usuario', usuarioSchema);
//module.exports = User;
//se hace el proceso directo
module.exports = mongoose.model('User', usuarioSchema);
