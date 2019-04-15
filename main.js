let add = function(a, b) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(a + b)
		}, 2000)
	});
}

add(1, 2).then(function(sum) {
	console.log('sum', sum);
})

let subtract = function(a, b) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(a - b)
		}, 4000)
	});
}

subtract(10, 5).then(function(difference) {
	console.log('difference', difference);
})


add(8, 2).then(function(sum) {
	subtract(sum, 4).then(function(final) {
		console.log('final', final);
	})
})
