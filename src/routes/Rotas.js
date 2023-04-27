const express = require('express')
const rotas = express.Router();

const listarCategories = require('../Controllers/CategoryControl');

const loginUser = require('../Controllers/UserLogin');
const { cadastrarUser, detalharUser, editarUser } = require('../Controllers/UserControl');
const validationMiddlewareUser = require('../Middlewares/userValidation');
const loginValidationMiddleware = require('../Middlewares/loginValidation')


rotas.get('/', express.static("desafio-front"));
rotas.get('/produtos', express.static("desafio-front"));
rotas.post('/login', loginValidationMiddleware, loginUser);
rotas.post('/usuario', validationMiddlewareUser, cadastrarUser);
rotas.get('/categoria', listarCategories);



rotas.get('/usuario', detalharUser);
rotas.put('/usuario', validationMiddlewareUser, editarUser);

module.exports = rotas;