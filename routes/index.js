var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/froala', function(req, res, next) {
  res.render('froala', { title: 'Express' });
});

router.get('/ckeditor', function(req, res, next) {
  res.render('ckeditor5', { title: 'Express' });
});

router.get('/tinymce', function(req, res, next) {
  res.render('tinymce', { title: 'Express' });
});

module.exports = router;
