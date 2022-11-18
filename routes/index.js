var express = require('express');
var router = express.Router();
const articles = require('../articles')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/articles', function(req,res){
  res.status(200).json(articles)
})

module.exports = router;
