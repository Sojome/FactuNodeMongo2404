// routes/userRoutes.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/login-propuesto', (req, res) => {
  res.render('login-propuesto');
});

router.post('/login-propuesto', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.redirect('/dashboard');
  } else {
    res.redirect('/login-propuesto');
  }
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
