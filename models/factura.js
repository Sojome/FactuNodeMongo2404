// factura.js
const mongoose = require('mongoose');
// Define el esquema de factura
const usuarioSchema = new mongoose.Schema({
  num_fac: String,
  ruc_cliente: String,
  cliente: String,
  subtotal: Number,
  IGV : Number,
  total : Number
 });
module.exports = mongoose.model('Factura', usuarioSchema);
