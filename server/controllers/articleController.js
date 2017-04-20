const Article = require('../models/article');
const Helpers = require('../helpers/authentication');

let getAll = (req, res, next) => {
  Article.find()
    .populate('author')
    .exec((err, articles) => {
    if (err) {
      res.json(err);
    } else {
      res.json(articles);
    }
  })
}

let createOne = (req, res, next) => {
  let decoded = Helpers.decodeToken(req.headers.token);
  console.log('--decode',decoded);
  Article.create({
    title : req.body.title,
    content : req.body.content,
    author : decoded.id
  }    , (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

let getOne = (req, res, next) => {
  Article.findOne({
    _id: req.params.id
  })
    .populate('author')
    .exec((err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

let update = (req, res, next) => {

  article.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  }, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

let destroy = (req, res, next) => {
  article.remove({
    _id: req.params.id
  }, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

module.exports= {
  getAll,
  createOne,
  getOne,
  update,
  destroy
}
