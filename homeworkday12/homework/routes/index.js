var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('one and only', { title: 'Express' });
});
router.get('/pasteto', function(req, res, next) {
    res.render('second page', { title: 'Express' });
});

module.exports = router;
