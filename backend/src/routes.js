const express = require('express');
const routes = express.Router();

const AuthController = require('./Controllers/AuthController');

const { AccountSignUp, AccountSignIn} = require('./Validators/AccountValidator');

routes.post('/auth/sign-in', AccountSignIn, AuthController.login);
routes.post('/auth/sign-up', AccountSignUp, AuthController.create);

module.exports = routes;