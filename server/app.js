'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
let Strategy = require('passport-local').Strategy;

let index = require('./routes/index');
let users = require('./routes/users');
let articles = require('./routes/articles');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogging-system');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors);

app.use('/', index);
app.use('/users', users);
app.use('/articles', articles);

app.listen(3000);

module.exports = app;
