var express = require('express');
var router = express.Router();

/* GET home page. */
var counter=0;
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Build your CV', counter: counter });
});

router.post('/add', function (req, res) {
  counter++;
  console.log(req.body.fn + " " + req.body.sn);
  res.redirect('/');
});


module.exports = router;
