var express = require('express');
var router = express.Router();
/* TO DO 
 MAKE CV OBJECT with name, edu and other fields
 CHANGE LANGUAGE */
/* GET home page. */
var person = {
	fullName : "Alexandru Oat",
	email : "oat.alexandru@gmail.com",
	phone : "+358466360623",
	// gender = 
	born : "23.03.1982",  
	address : "Rälssintie 16 B 14 Helsinki",
	citizenship : "Moldova",
	education : []
}
var full_name="Alexandru Oat";

var ln = "";
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Build your CV', person:person, });
});

/* handling POST request from form */
router.post('/add', function (req, res) {
  person.fullName = req.body.full_name;
  person.email = req.body.email;
  person.phone = req.body.phone;
  person.address = req.body.address;
  person.citizenship = req.body.citizenship;
  // console.log(req.body.full_name + " " + req.body.ln);
  res.redirect('/');
});


module.exports = router;
