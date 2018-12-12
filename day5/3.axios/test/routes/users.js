var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/test', function(req, res, next) {
  res.append("Access-Control-Allow-Origin","*");
  console.log(req.body);
  console.log(req.body.is_iso);
  res.send('respond with a resource');
});

module.exports = router;
