const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const response = require('./Middlewares/Response');

const app = express();

app.use(response);

app.use(cors());
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
module.exports = app;