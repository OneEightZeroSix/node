function getProductList() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			type: "get",
			url: "http://localhost:3000/product/showproductlist",
			async: true,
			success: function(data) {
				resolve(data);
			}
		});
	})
}
function renderTable(data) {
	console.log(data);
	var html = data.product.map(function(item,index){
		return `
			<tr>
				<td>${index}</td>
				<td>${item.firstname}</td>
				<td>${item.lastname}</td>
				<td>${item.username}</td>
				<td>${item.city}</td>
				<td>${item.state}</td>
				<td>${item.zip}</td>
			</tr>
		`
	}).join("")
	$("#productList").html(html);
}
getProductList().then(renderTable)