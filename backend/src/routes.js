const express = require('express');
const routes = express.Router();

const AuthController = require('./Controllers/AuthController');

const {AccountSignUp} = require('./Validators/AccountValidator');

routes.get('/auth/sign-in', AuthController.login);
routes.post('/auth/sign-up', AccountSignUp, AuthController.create);

module.exports = routes;