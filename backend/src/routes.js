const express = require('express');
const routes = express.Router();

const AuthController = require('./Controllers/AuthController');
const LinkController = require('./Controllers/LinkController');

const { checkJwt } = require('./Middlewares/Jwt');


const { AccountSignUp, AccountSignIn } = require('./Validators/AccountValidator');

routes.post('/auth/sign-in', AccountSignIn, AuthController.login);
routes.post('/auth/sign-up', AccountSignUp, AuthController.create);
routes.post('/auth/refresh', AuthController.refresh);

routes.get('/links', LinkController.index);
routes.get('/links/:id', LinkController.show);
routes.post('/links', LinkController.store);
routes.put('/links/:id', LinkController.update);
routes.delete('/links/:id', LinkController.destroy);


module.exports = routes;