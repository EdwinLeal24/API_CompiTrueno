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

// //get all
// router.get('/:id', (req, res, next) => {
//     const idUser = req.params.id;
//     modelo.Login.findOne({ where: { id: idUser } })
//         .then(lista => res.json({ ok: true, data: lista }))
//         .catch(err => res.json({ ok: false, error: err }));
// });



module.exports = router;