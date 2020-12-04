const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

//get all
router.get('/', (req, res, next) => {
    modelo.Pais.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//get pais
router.get('/:nombre', (req, res, next) => {
    let nombrepais = req.params.nombre;
    modelo.Pais.findOne({ where: { nombre: nombrepais } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

//post pais
router.post('/', (req, res, next) => {
    modelo.Pais.create(req.body)
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;