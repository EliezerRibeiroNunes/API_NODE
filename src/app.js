'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//traz as rotas
const indexRoutes = require('./routes/index_route');
const productRoutes = require('./routes/procuct_route');


//body-parser: converte o corpo da requisição em json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/products', productRoutes);
module.exports = app;

