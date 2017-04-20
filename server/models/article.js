'use strict'

const mongoose = require('mongoose');
const stampIt = require('mongoose-stamp');

let articlesSchema = new mongoose.Schema({
  title: String,
  content: String,
  author : { type : Schema.Types.ObjectId, ref : 'User' },
});

articlesSchema.plugin(stampIt);

let Article = mongoose.model('Article', articlesSchema)

module.exports = Article
