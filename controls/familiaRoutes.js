// routes/familiaRoutes.js
const express = require('express');
const Familia = require('../models/familia');
const fs = require('fs');					 
const router = express.Router();


router.post('/familia', async (req, res) => {
  try {
    const familia= new Familia(req.body);
    await familia.save();
    res.redirect('/crud-familia-productos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar la familia.');
  }
});

router.post('/familia/:id/eliminar', async (req, res) => {
  const familiaId = req.params.id;
  try {
    await Familia.findByIdAndRemove(familiaId);
    res.redirect('/crud-familia-productos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la familia.');
  }
});

router.get('/crud-familia-productos', async (req, res) => {
  try {
    const familias = await Familia.find();
    res.render('crud-familia-productos', { familias });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las familias.');
  }
});



module.exports = router;