var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
request('http://www.27270.com/ent/meinvtupian/', function(error, response, body) {
	//console.log('body:', body); // Print the HTML for the Google homepage.
	const $ = cheerio.load(body);
	$("img").each((i,e)=>{
		console.log($(e).attr("src"))
		var src = $(e).attr("src");
		request(src).pipe(fs.createWriteStream(`./imgs/${i}.png`))
	})
});

console.log("开始请求");