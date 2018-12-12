var mysql = require('mysql');
var config = require("./config.js")

function query(sql, params, callback) {
	var connection = mysql.createConnection({
		host: config.host,
		user: config.user,
		password: config.password,
		database: config.database
	});
	connection.connect();
	connection.query(sql, params, function(error, results, fields) {
		if(error) throw error;
		callback(results);
		connection.end();
	});
}

module.exports = {
	query: query
}