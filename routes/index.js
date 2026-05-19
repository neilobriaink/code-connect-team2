var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET dashboard page. */
router.get('/dashboard', (req, res, next) => {
  res.render('dashboard');
});

module.exports = router;
