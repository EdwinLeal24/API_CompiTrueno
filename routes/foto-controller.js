const express = require('express');
const router = express.Router();


const modelo = require('../models/index.js');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        //definimos que los nombres de foto tendrán como prefijo el timestamp actual
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage }).single('file');

// nueva foto!
// en el body llega la foto (archivo), el título y el comentario
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

module.exports = router;