var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
var mongo = require('../lib/mongo.js')
router.post('/addproduct', function(req, res, next) {
	console.log(req.body);
	console.log(db);
	db.query(function(db) {
		db.collection("product").insertMany([req.body], function(err, result) {
			console.log("Inserted 1 document into the collection");
			res.send('respond with a resource');
		});
	})
});

router.get('/showproductlist', function(req, res, next) {
	console.log(req.body);
	console.log(db);
	db.query(function(db) {
		db.collection("product").find({}).toArray(function(err, docs) {
			console.log(docs)
			res.json({
				product: docs
			});
		});
	})
});

router.get('/test', function(req, res, next) {
	mongo.findOne('product', {
		zip: 111
	}, function(err, result) {
		console.log(result);
		res.send(result)
	});
})

module.exports = router;