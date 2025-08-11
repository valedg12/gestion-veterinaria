const express = require('express');
const router = express.Router();
const Mascota = require('../models/mascota');
const Cliente = require('../models/cliente');


router.get('/mascotas', async (req, res) => {
  try {
    const { cliente_id } = req.query;
    const filtro = cliente_id ? { cliente_id } : {};
    const mascotas = await Mascota.find(filtro).populate('cliente_id', 'nombre email');
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mascotas' });
  }
});


router.post('/mascotas', async (req, res) => {
  try {
    const { cliente_id } = req.body;
    const clienteExiste = await Cliente.findById(cliente_id);
    if (!clienteExiste) return res.status(400).json({ error: 'Cliente no existe' });

    const nuevaMascota = new Mascota(req.body);
    await nuevaMascota.save();
    res.status(201).json(nuevaMascota);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
