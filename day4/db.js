var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'lemon',
    password: '123456',
    database: '1806'
});
connection.connect();
connection.query('SELECT * FROM students', [], function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    connection.end();
});