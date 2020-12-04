const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

//get all from vista_viajeros
router.get('/', (req, res, next) => {
    modelo.vista_viajeros.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//post viajeros table
router.post('/', (req, res, next) => {
    modelo.Viajeros.create(req.body)
        .then(item => res.json(item))
        .catch(err => res.json({ error: err }));
});

//put viajero
router.put('/:id', (req, res, next) => {
    let idViajero = req.params.id;
    modelo.Viajero.findOne({ where: { id: idViajero } })
        .then(item => item.update(req.body))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});


module.exports = router;