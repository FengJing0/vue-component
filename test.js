// setTimeout(() => {
//   console.log(1)
// }, 0);
// new Promise(function executor (resolve) {
//   console.log(2)
//   for (var i = 0; i < 10000; i++) {
//     i==9999&&resolve()    
//   }
//   console.log(3)
// }).then(function () {
//   console.log(4)
// })
// console.log(5)

var str = '["a","b"]'

// var arr = new Function('return '+str)()
var arr = new Function('a', 'b', 'return a+b')(1, 2)

console.log(arr)