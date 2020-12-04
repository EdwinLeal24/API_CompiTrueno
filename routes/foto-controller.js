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

// get fotos
router.get('/', (req, res, next) => {
    modelo.Foto.findAll()
        .then(lista => res.json(lista))
        .catch(err => res.json({ ok: false, error: err }));
});

// post fotos
router.post('/', (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        const nuevaFoto = {
            url: req.file.filename
        }
        modelo.Foto.create(nuevaFoto)
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
    })
});

// eliminar foto
router.delete('/:id', (req, res, next) => {
    let idfoto = req.params.id;
    modelo.Foto.destroy({ where: { id: idfoto } })
        .then(item => res.json(item))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;