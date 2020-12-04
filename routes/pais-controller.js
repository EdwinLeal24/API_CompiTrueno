const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

//get all
router.get('/', (req, res, next) => {
    modelo.Pais.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//get de un pais especifico. si no existe lo crea
router.get('/:nombre', (req, res, next) => {
    let nombrePais = req.params.nombre;
    modelo.Pais.findOrCreate({ where : {nombre : nombrePais }})
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;