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
router.get('/', controller.getAll);

router.post('/signup', controller.createOne);

passport.use(new Strategy(
  function(username,password,cb){
    User.findOne({username: username}, function (err, user) {
    if (err) cb(err);

    if(!user){
      cb(null,false);
    }
    else {
    // Verifying a hash
      passwordHash(password).verifyAgainst(user.password, function(error, verified) {
          if(error)
              throw new Error('Something went wrong!');
          if(!verified) {
              cb("Email or password invalid!");
          } else {
            let token = jwt.sign({
              id: user._id,
              name: user.name,
              username: username
              },
              process.env.SECRET,
              {expiresIn: '1h'});
            cb(null, token);
          }
      });
    }
  }
)
}));

router.use(passport.initialize());

router.post('/login', passport.authenticate('local', {session:false}), function(req,res){
  res.send(req.user);
})


module.exports = router;
