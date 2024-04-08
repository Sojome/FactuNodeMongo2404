// app.js cargar instancias o modulos
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');

// Importar módulos de rutas
const UserRoutes      = require('./controls/userRoutes');
const ProductoRoutes  = require('./controls/productoRoutes');
const FamiliaRoutes   = require('./controls/familiaRoutes');
const FacturaRoutes   = require('./controls/facturaRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/mi_basededatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configuraciones generales
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Rutas relacionadas con User
app.use('/', UserRoutes);

// Rutas relacionadas con Producto
app.use('/', ProductoRoutes);

// Rutas relacionadas con Familia
app.use('/', FamiliaRoutes);

// Rutas relacionadas con Facturas
app.use('/', FacturaRoutes);

// Ruta principal 
app.get('/', (req, res) => {
  res.redirect('/login-propuesto');
});

// Escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});