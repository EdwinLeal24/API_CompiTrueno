const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

//get all from comentario table
router.get('/', (req, res, next) => {
    modelo.Comentario.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//post comentario table
router.post('/', (req, res, next) => {
    modelo.Comentario.create(req.body)
        .then(item => res.json(item))
        .catch(err => res.json({ error: err }));
});

//put comentario
router.put('/:id', (req, res, next) => {
    let idComentario = req.params.id;
    modelo.Comentario.findOne({ where: { id: idComentario } })
        .then(item => item.update(req.body))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;