const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const response = require('./Middlewares/Response');
const checkJwt = require('./Middlewares/Jwt');


const app = express();

app.use(cors());
app.use(response);
app.use(checkJwt);

 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
module.exports = app;