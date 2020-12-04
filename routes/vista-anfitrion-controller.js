const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

//get all from vista_anfitriones
router.get('/', (req, res, next) => {
    modelo.vista_anfitrion.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//post anfitrion table
router.post('/', (req, res, next) => {
    modelo.Anfitrion.create(req.body)
        .then(item => res.json(item))
        .catch(err => res.json({ error: err }));
});

//put anfitrion
router.put('/:id', (req, res, next) => {
    let idAnfitrion = req.params.id;
    modelo.Anfitrion.findOne({ where: { id: idAnfitrion } })
        .then(item => item.update(req.body))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;