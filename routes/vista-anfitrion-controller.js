const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

//get all from vista_anfitriones

router.get('/', (req, res, next) => {
    modelo.vista_anfitrion.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//GET PARA OBTENER LOS ID DE LA TABLA ANFITRION

router.get('/anfitrion', (req, res, next) => {
    modelo.Anfitrion.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//get by idPais from vista_anfitriones

router.get('/:id', (req, res, next) => {
    let idpais = req.params.id;
    modelo.vista_anfitrion.findAll({ where: { pais_id: idpais }})
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//get by idUsuario from vista_anfitriones

router.get('/usuario/:id', (req, res, next) => {
    let idUsuario = req.params.id;
    modelo.vista_anfitrion.findAll({ where: { id: idUsuario }})
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
    modelo.Anfitrion.findOne({ where: { usuario_id: idAnfitrion } })
        .then(item => item.update(req.body))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});


//get by id_usuario from vista_anfitriones_guardados

router.get('/guardados/:id', (req, res, next) => {
    let idusuario = req.params.id;
    modelo.VistaAnfitrionGuardado.findAll({ where: { usuario_id: idusuario }})
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//post anfitrion a tabla guardado 

router.post('/guardados', (req, res, next) => {
    modelo.AnfitrionGuardado.create(req.body)
        .then(item => res.json(item))
        .catch(err => res.json({ error: err }));
});

// eliminar un post de anfitrion (Tabla anfitrion)

router.delete('/:id', (req, res, next) => {
    let idAnfiTabla = req.params.id;
    modelo.Anfitrion.destroy({ where: { id: idAnfiTabla } })
        .then(item => res.json(item))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;