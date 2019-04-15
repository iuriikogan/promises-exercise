var difference = function (b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(c - b);
            resolve(c - b);
        }, 4000);
    })
}
difference(10).then(function (difference) {}).catch(function (error) {
    console.log('Error', 'your code sucks');
});
var c;
var sum = function sumFunc(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(a + b);
            resolve(c = a + b);
        }, 2000);
    })
}
sum(5, 42).then().catch('oops');
