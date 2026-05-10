const uniq = require('uniq');
// const uniq = require('./node_modules/uniq');(uniq.js)
let arr = [1, 2, 3, 4, 5, 5, 6];
const result = uniq(arr);
console.log(result);