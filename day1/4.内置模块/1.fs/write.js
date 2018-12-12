var fs = require("fs");
//fs.writeFile(文件路径，文件内容，回调函数)
fs.writeFile('./test.txt', 'Hello Node.js', (err) => {
	if(err) throw err;
	console.log('The file has been saved!');
});