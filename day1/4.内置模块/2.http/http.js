var http = require('http');
var querystring = require('querystring');
var url = require('url');
var fs = require('fs');
//console.log(http);
var server = http.createServer(function(request, response) {
	var query = url.parse(request.url).query;
	var param = querystring.parse(query);
	console.log(param);
	response.setHeader("Access-Control-Allow-Origin", "*")
	response.end("hello world");
	//echo "hello world";
})
server.listen(12345); //(0,65535)
console.log("启动服务器");