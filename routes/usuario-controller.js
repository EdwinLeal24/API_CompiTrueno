const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');
const bcrypt = require('bcrypt');
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

//post usuario registro
router.post('/', (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }

        const hash = bcrypt.hashSync(req.body.contrasenya, 10);
        //reemplazamos el password con su versión encriptada
        req.body.contrasenya = hash;

        const nuevoUsuario = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            nacimiento: req.body.nacimiento,
            correo: req.body.correo,
            contrasenya: req.body.contrasenya,
            foto: req.file.filename //DATO FOTO PARA TESTEAR EN POSTMAN, CAMBIAR FOTO POR FILE
        }
        

        modelo.Usuario.create(nuevoUsuario)
            .then((item) => item.save())
            .then(item => res.json({ ok: true, data: item }))
            .catch(err => res.json({ ok: false, error: err }));
    })
});

/* POST LOGIN */
router.post('/login', (req, res) => {
    //leemos nombre y password del body
    const { correo, contrasenya } = req.body;
    // si nombre / password no se han facilitado devolvemos error con código de estado 400
    if (!correo || !contrasenya) {
      return res.status(400).json({ ok: false, error: "correo o contraseña no recibidos" });
    }
  
    //buscamos usuario y comprobamos si password coincide
    //findOne es un método de sequelize, si no encuentra nada devolverá error
    modelo.Usuario.findOne({ where: { correo } })
      .then((usuario) => {
        //comparamos el password recibido con el password del usuario guardado en bdd, ambos encriptados
        if (bcrypt.compareSync(contrasenya, usuario.contrasenya)) {
          //si ok, devolvemos usuario a siguiente "then" 
          return usuario;
        } else {
          // si no coinciden pasamos msg error a "catch"
          throw "La contraseña no coincide";
        }
      })
      .then((usuario) => {
        //ok, login correcto, creamos un token aleatorio
        let token = '';
        const caracteresPossibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const longitud = 15;
        for (var i = 0; i < longitud; i++) {
          token += caracteresPossibles.charAt(
            Math.floor(Math.random() * caracteresPossibles.length)
          );
        }
        //devolvemos un nuevo objeto "token" al siguiente then, que incluye id y nombre de usuario
        return modelo.Token.create({ token, usuario_id: usuario.id })
      })
      .then((token) => res.json({ ok: true, data: token })) //enviamos respuesta con el token completo en json
      .catch((error) => res.json({ ok: false, error: "error en el ultimo catch" + error }));
  
  });

  /* METODO DELETE PARA HACER LOGOUT */
  
  router.delete('/logout',  (req, res) => {
    const {token } = req.body;
    //si no existe el token no aceptamos logout
    if (!token) {
      return res.status(400).json({ok:false, error:"token no recibido"});
    }
    // si lo recibimos, intentamos eliminarlo
    modelo.Token.destroy({ where: { token } })
    .then(()=>res.json({ok:true}))
    .catch((error)=>res.json({ok:false, error:error}));

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