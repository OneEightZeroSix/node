var request = require('request');
request({
    method: 'GET',
    url: 'https://api.soulapp.cn/v3/post/recommended?firstPostId=303985563&topPostId=303910976',
    headers: {
        'api-sign': 'B68B52DC3356E8635938B21AA30513B72EFDC041',
        'os': 'android',
        'X-Auth-Token': 'LQk4nHU7xbx3gs1BKft+ZtVVf94e7gDX',
        'X-Auth-UserId': '17575795',
        'api-sign-version': 'v4',
        'device-id': 'WglAVxZM0xcDAAcepimglOfm',
        'request-nonce': '8c17c2ec5d8b4c4e93894386c038771c',
        //'Connection': 'close',
        'app-id': '10000003',
        'app-version': '3.0.12',
        'app-time': '1540455644700',
        'User-Agent': '[WIFI;SM-C5000;Android;24;1080*1920;100023;zh_CN]',
        'app-info': '[85]',
        //'Host': 'api.soulapp.cn',
        'Accept-Encoding': 'gzip'
    },
}, (error, response, body) => {
    console.log(body);
    if (!error && response.statusCode == 200) {
        //console.log(body);
    } else {
        console.log("请求出错");
    }
})