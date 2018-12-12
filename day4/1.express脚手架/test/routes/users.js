var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', function(req, res, next) {
  db.query('SELECT * FROM students',[],(data)=>{
    console.log(data);
    res.send(data);
  })
});

module.exports = router;
