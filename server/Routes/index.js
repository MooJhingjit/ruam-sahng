const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', 
  [
    require('./auth'),
    require('./app')
  ]
);

module.exports = app;