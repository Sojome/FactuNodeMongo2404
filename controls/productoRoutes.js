// routes/productoRoutes.js
const express = require('express');
const Producto = require('../models/producto');
const fs = require('fs');					 
const router = express.Router();

router.post('/producto', async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.redirect('/crud-productos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar el producto.');
  }
});

router.post('/producto/:id/eliminar', async (req, res) => {
  const productoId = req.params.id;
  try {
    await Producto.findByIdAndRemove(productoId);
    res.redirect('/crud-productos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el producto.');
  }
});

router.get('/crud-productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.render('crud-productos', { productos });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener productos.');
  }
});



module.exports = router;