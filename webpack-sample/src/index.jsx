const _ = require('lodash');
const foo = require('./foo.jsx');

console.log('from index.jsx');
console.log(_.map([1, 2, 3], (x) => { return x * 2; }));

foo();

