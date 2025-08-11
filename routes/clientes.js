const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

// GET /clientes  (lista todos)
router.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

// GET /clientes/:id 
router.get('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener cliente' });
  }
});

// POST /clientes (crear un cliente)
router.post('/clientes', async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    if (error.code === 11000) { 
      return res.status(400).json({ error: 'Email ya registrado' });
    }
    res.status(400).json({ error: error.message });
  }
});

// PUT /clientes/:id  (actualiza cliente)
router.put('/clientes/:id', async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!clienteActualizado) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(clienteActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /clientes/:id - (elimina cliente)
router.delete('/clientes/:id', async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!clienteEliminado) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ message: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
});

module.exports = router;
