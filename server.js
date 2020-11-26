const express = require('express');
const indexRouter = require('./routes/index-controller');
const contactoRouter = require('./routes/contacto-controller');

const logger = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use("/img", express.static('uploads'));
app.use(logger('dev'));

app.use(cors());

app.use('/', indexRouter);
app.use('/contactos', contactoRouter);

const port = 3000;
app.listen(port, ()=>console.log("Listening on port "+port));
