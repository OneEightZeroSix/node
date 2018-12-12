var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');


// 上传配置的必须的参数
var multer = require('multer');
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        //console.log(file)
        cb(null, 'public') //上传文件夹
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        //给图片加上时间戳格式防止重名名
        //比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
var upload = multer({
    storage: storage
});


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/uploads', upload.single('avatar'), function (req, res, next) {
    console.log(res);
    next();
}, function (req, res, next) {
    res.send("upload success");
});

module.exports = router;