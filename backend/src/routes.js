const express = require('express');
const routes = express.Router();

const AuthController = require('./Controllers/AuthController');

routes.get('/auth/sign-in', AuthController.login);
routes.get('/auth/sign-up', AuthController.create);

module.exports = routes;