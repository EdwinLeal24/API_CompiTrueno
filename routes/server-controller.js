const express = require('express');
const router = express.Router();

router.all('/',(req,res,next)=>{
    res.send("Bienvenidos a la API CompiTrueno!");
});


module.exports = router;