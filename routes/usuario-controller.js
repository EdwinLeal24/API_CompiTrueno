const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage }).single('file');

//get all
router.get('/', (req, res, next) => {
    modelo.Usuario.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//get by id
router.get('/:id', (req, res, next) => {
    let idusuario = req.params.id;
    modelo.Usuario.findOne({ where: { id: idusuario } })
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//post usuario
router.post('/', (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        const nuevoUsuario = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            nacimiento: req.body.nacimiento,
            correo: req.body.correo,
            contrasenya: req.body.contrasenya,
            foto: req.file.filename
        }
        modelo.Usuario.create(nuevoUsuario)
            .then(item => res.json({ ok: true, data: item }))
            .catch(err => res.json({ ok: false, error: err }));
    })
});

//put usuario
router.put('/:id', (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        const nuevoUsuario = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            nacimiento: req.body.nacimiento,
            correo: req.body.correo,
            contrasenya: req.body.contrasenya,
            foto: req.file.filename
        }
        let idUsuario = req.params.id;
        modelo.Usuario.findOne({ where: { id: idUsuario } })
            .then(item => item.update(nuevoUsuario))
            .then(item => res.json({ ok: true, data: item }))
            .catch(err => res.json({ ok: false, error: err }));
    })
});

//Get de los comentarios recibidos de un usuario 
router.get('/coment/:id', (req, res, next) => {
    let iduser = req.params.id;
    modelo.ComentRecibidos.findAll({ where: { receptor_id: iduser } })
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});


module.exports = router;