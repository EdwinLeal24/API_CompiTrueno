const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

//get all from vista_viajeros
router.get('/', (req, res, next) => {
    modelo.vista_viajeros.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//GET PARA OBTENER LOS ID DE LA TABLA VIAJERO
router.get('/viajes', (req, res, next) => {
    modelo.Viajeros.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//get by id del pais from vista_viajeros
router.get('/:id', (req, res, next) => {
    let idpais = req.params.id;
    modelo.vista_viajeros.findAll({ where: { pais_id: idpais } })
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//get by id del USUARIO from vista_viajeros
router.get('/usuario/:id', (req, res, next) => {
    let idUsuario = req.params.id;
    modelo.vista_viajeros.findAll({ where: { id: idUsuario } })
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
    modelo.Viajeros.findOne({ where: { id: idViajero } })
        .then(item => item.update(req.body))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

//get by id_usuario from vista_viajeros_guardados
router.get('/guardados/:id', (req, res, next) => {
    let idusuario = req.params.id;
    modelo.ViajeroGuardado.findAll({ where: { usuario_id: idusuario } })
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//post viajero guardado table
router.post('/guardados', (req, res, next) => {
    modelo.ViajeroGuardado.create(req.body)
        .then(item => res.json(item))
        .catch(err => res.json({ error: err }));
});

// eliminar un post de viajero (Tabla viajero)
router.delete('/:id', (req, res, next) => {
    let idViajeroTabla = req.params.id;
    modelo.Viajeros.destroy({ where: { id: idViajeroTabla } })
        .then(item => res.json(item))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;