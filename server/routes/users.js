'use strict'

const express = require('express');
let router = express.Router();
let controller = require('../controllers/userController');
const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash-and-salt');
const passport = require('passport');
let Strategy = require('passport-local').Strategy;
let User = require('../models/user');
require('dotenv').config()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});



module.exports = router;
