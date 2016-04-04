var express = require('express');
var router = express.Router();
/* TO DO 
 MAKE CV OBJECT with name, edu and other fields
 CHANGE LANGUAGE 
Transform month: numbers to letters Dec. Jan. Feb. etc.

 */
/* GET home page. */
var edu2 = {
	university: "Haaga-Helia University of Applied Sciences",
	faculty: "Business Information Technology",
	from: "Aug. 2013",
	till: "Dec. 2016"
}
var person = {
	fullName: "Alexandru Oat",
	email: "oat.alexandru@gmail.com",
	phone: "+358466360623",
	// gender = 
	born: "23.03.1982",  
	address: "Rälssintie 16 B 14 Helsinki",
	citizenship: "Moldova",
	education: [{}]
}
person.education[0] = edu2;
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
  	
  	var edu = {}
  	edu.university = req.body.university;
  	edu.faculty = req.body.faculty;
  	edu.from = req.body.edu_from;
  	edu.till = req.body.edu_till;
  	person.education.push(edu);
 	// console.log(req.body.uni+"....////......");
  	res.redirect('/');
});

console.log(person.education.length);
module.exports = router;
