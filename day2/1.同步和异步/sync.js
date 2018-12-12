var fs = require("fs");

//异步
fs.readFile('./test.txt',function(err,data2){
	console.log("1",data2.toString());
});


//同步
var data = fs.readFileSync('./test.txt');
console.log("2",data.toString());


$.ajax({
	success(data){
		console.log(data)
	}
})



