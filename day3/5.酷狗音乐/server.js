var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
request('http://www.kugou.com/yy/singer/home/3060.html', function(error, response, body) {
	//console.log('body:', body); // Print the HTML for the Google homepage.
	const $ = cheerio.load(body);
	$(".song_hid").each((i, e) => {
		var mp = $(e).val().split("|");
		var src = mp[1];
		// console.log(src);
		// request(src).pipe(fs.createWriteStream(`./mp3/${i}.mp3`));
		var htp = `http://www.kugou.com/yy/index.php?r=play/getdata&hash=${src}`;
		// console.log(htp);

		request(htp, function(error, response, body) {
			var body = JSON.parse(body);
			for(var key in body.data) {
				var name = body.data["audio_name"];
				var music = body.data["play_url"];
				request(music).pipe(fs.createWriteStream(`./mp3/${name}.mp3`));
			}

		});
	});
});

console.log("开始请求");