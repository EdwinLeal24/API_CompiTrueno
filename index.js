const express = require('express');
const indexRouter = require('./routes/server-controller');
const usuarioRouter = require('./routes/usuario-controller');
const paisRouter = require('./routes/pais-controller');
const vistaReviewRouter = require('./routes/vista-experiencia-controller');
const vistaAnfitrionRouter = require('./routes/vista-anfitrion-controller');
const vistaViajerosRouter = require('./routes/vista-viajeros-controller');
const comentarioRouter = require('./routes/comentario-controller');
const fotoRouter = require('./routes/foto-controller');

const logger = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use("/img", express.static('uploads'));
app.use(logger('dev'));

app.use(cors());

app.use('/', indexRouter);
app.use('/usuarios', usuarioRouter);
app.use('/paises', paisRouter);
app.use('/experiencias', vistaReviewRouter);
app.use('/anfitriones', vistaAnfitrionRouter);
app.use('/viajeros', vistaViajerosRouter);
app.use('/comentarios', comentarioRouter);
app.use('/fotos', fotoRouter);

const port = 3003;
app.listen(port, ()=>console.log("Listening on port "+port));
