var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/live', function(req, res, next) {
	res.send('你已经进入直播间了');
});

router.post('/login', function(req, res, next) {
	console.log(req.body)
	if(req.body.username === 'ly' && req.body.password === '123') {
		res.send('success');
	} else {
		res.send('fail');
	}
});

router.post('/register', function(req, res, next) {
	console.log(req.body)
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'lemon',
		password: '123456',
		database: '1806'
	});

	connection.connect();

	function isExistSameName() {
		return new Promise(function(resolve, reject) {
			connection.query('select * from students where ?', [{
				username: req.body.username,
			}], function(error, results, fields) {
				console.log(results)
				if(error) throw error;
				if(results.length > 0) {
					connection.end();
					res.send("fail")
				}else{
					resolve()
				}
			});
		})
	}

	function isInsertUser() {
		return new Promise(function(resolve, reject) {
			console.log(req.body.username,req.body.password)
			connection.query('INSERT INTO students SET ?', [{
				username: req.body.username,
				password: req.body.password
			}], function(error, results, fields) {
				if(error) throw error;
				res.send("success");
				connection.end();
			});
		})
	}
	isExistSameName().then(isInsertUser)

});

module.exports = router;