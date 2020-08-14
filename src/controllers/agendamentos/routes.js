const routes = require('express').Router();
const BuscaTelefone = require('./buscaTelefone');

routes.post('/busca/paciente', BuscaTelefone.index);

module.exports = routes;
