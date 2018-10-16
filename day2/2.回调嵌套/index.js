//setTimeout(() => {
//	console.log(1)
//	setTimeout(() => {
//		console.log(2)
//		setTimeout(() => {
//			console.log(3)
//		}, 1000)
//	}, 1000)
//}, 1000);

function buyPizza() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("买披萨");
			resolve()
		}, 1000);
	})
}
function buyDrink() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("买饮料");
			resolve()
		}, 1000);
	})
}
function eatMeal() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("吃东西");
			//resolve()
		}, 1000);
	})
}
buyPizza().then(buyDrink).then(eatMeal)
