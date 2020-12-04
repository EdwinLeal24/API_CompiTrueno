const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

//get all
router.get('/', (req, res, next) => {
    modelo.VistaExperiencia.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

router.get('/:pais_id', (req, res, next) => {
    const pais = req.params.pais_id
    modelo.VistaExperiencia.findOne({ where: { pais_id: pais }})
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

router.get('/user/:id', (req, res, next) => {
    const id_usuario = req.params.id
    modelo.VistaExperiencia.findOne({ where: { id: id_usuario }})
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//post experiencia
router.post('/', (req, res, next) => {
    modelo.Experiencia.create(req.body)
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

//put experiencia
router.put('/:id', (req, res, next) => {
    let idExperiencia = req.params.id;
    modelo.Experiencia.findOne({ where: { id: idExperiencia } })
        .then(item => item.update(req.body))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;