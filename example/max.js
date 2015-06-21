var maxBy = require('../max-by');
console.log(maxBy.toString());
var n = maxBy([9,3,4], function (x) { return x % 3 });
console.log(n);