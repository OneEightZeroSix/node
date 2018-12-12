var db = require("./db.js");
console.log(db)
db.query("SELECT * FROM students",[],function(data){
	console.log(data)
})
