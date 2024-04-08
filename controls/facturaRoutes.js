// routes/facturaRoutes.js
const express = require('express');
const Factura = require('../models/factura');
const fs = require('fs');					 
const router = express.Router();

router.post('/factura', async (req, res) => {
  try {
    const factura= new Factura(req.body);
    await factura.save();
    res.redirect('/crud-facturas');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar la factura.');
  }
});

router.post('/factura/:id/eliminar', async (req, res) => {
  const facturaId = req.params.id;
  try {
    await Factura.findByIdAndRemove(facturaId);
    res.redirect('/crud-facturas');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la factura.');
  }
});

router.get('/crud-facturas', async (req, res) => {
  try {
    const facturas = await Factura.find();
    res.render('crud-facturas', { facturas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener facturas.');
  }
});

router.get('/crud-facturas', async (req, res) => {
  try {
    const itemfacturas = await ItemFactura.find();
    res.render('crud-facturas', { itemfacturas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener items de facturas.');
  }
});

module.exports = router;


