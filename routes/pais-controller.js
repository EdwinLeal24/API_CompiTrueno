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
    modelo.Pais.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

//post pais
router.post('/', (req, res, next) => {
    modelo.Pais.create(req.body)
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;