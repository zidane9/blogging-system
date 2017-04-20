'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let userSchema = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

//the schema is useless so far
//we need to create a model using it
let User = mongoose.model('User', userSchema);


module.exports = User;
