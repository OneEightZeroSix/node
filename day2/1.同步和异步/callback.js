//异步要有回调才有意义，异步必须要有回调
//如果有回调，那就是异步

function a(callback){
	console.log(1)
	callback()
}


a(function b(){
	console.log(2)
});



a();
function b(){
	console.log(2)
}
b();
