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

module.exports = router;