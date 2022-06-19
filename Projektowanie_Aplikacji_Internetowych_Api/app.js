var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

const dotenv = require('dotenv').config();

var accountsRouter = require('./API/V1/Routes/accounts');
var operationsRouter = require('./API/V1/Routes/operations');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/accounts',accountsRouter);
app.use('/operations',operationsRouter);

module.exports = app;
