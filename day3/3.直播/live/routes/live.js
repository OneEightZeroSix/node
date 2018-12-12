var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/live', function(req, res, next) {
  res.send('你已经进入直播间了');
});

router.post('/live', function(req, res, next) {
	console.log(req.body)
	if(req.body.username==='ly'&&req.body.password==='123'){
		res.send('success');
	}else{
		res.send('fail');
	}
});

module.exports = router;
