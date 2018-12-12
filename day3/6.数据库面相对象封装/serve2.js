var db = require("./db.js");
console.log(db)
db.query("SELECT * FROM students where ?",[{
	username:'qq'
}],function(data){
	console.log(data)
})
