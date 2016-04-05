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
	pic: "data:image/png;base64,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",
	education: [{}]
}
person.education[0] = edu2;
var full_name="Alexandru Oat";

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
	person.pic = req.body.pic;  	
  	var edu = {}
  	edu.university = req.body.university;
  	edu.faculty = req.body.faculty;
  	edu.from = req.body.edu_from;
  	edu.till = req.body.edu_till;
  	person.education.push(edu);

  	console.log(req.body.pic);
 	// console.log(req.body.uni+"....////......");
  	res.redirect('/');
});

console.log(person.education.length);
module.exports = router;
