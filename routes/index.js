var express = require('express');
var router = express.Router();
// TO DO 
// MAKE CV OBJECT with name, edu and other fields
//
/* GET home page. */
var fn="anon";
var ln="anon";
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Build your CV', fn:fn, ln:ln, });
});

/* handling POST request from form */
router.post('/add', function (req, res) {
  fn = req.body.fn;
  ln = req.body.ln;
  console.log(req.body.fn + " " + req.body.ln);
  res.redirect('/');
});


module.exports = router;
