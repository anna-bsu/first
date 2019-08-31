var myLodash = require( './myLodash.js');
console.log(myLodash.chunk([undefined, null, 0, 'd'], 2));

console.log(myLodash.compact([0, 1, false, 2, '', 3]));
console.log(myLodash.compact([0, 1, false, 2, '', undefined, null]));

console.log(myLodash.drop([1, 2, 3], 0));
console.log(myLodash.drop([1, 2, 3], 5));
console.log(myLodash.drop([1, 2, 3, null], 1));

let users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];
console.log(myLodash.dropWhile(users, function(o) { return !o.active; }));

console.log(myLodash.take([1, 2, 3], 5));
console.log(myLodash.take([1, 2, 3], null));
console.log(myLodash.take([1, 2, 3], 2));

console.log(myLodash.filter([1,2,3,6,11,180,0,null,undefined], item => item%2 === 0));
console.log(myLodash.find([1,6,7,90,56,null,undefined], item => item%2 === 0, 2));

console.log(myLodash.includes([1,6,7,90,56,null,undefined], null, -1));
console.log(myLodash.includes([1, 2, 3], 1, 2));

console.log(myLodash.zip(['a', 'b'], [1, 2], [true, false]));
console.log(myLodash.zip(['a', 'b'], [1, 2], [true, false],[null, undefined]));
console.log(myLodash.zip(['a', 'b','v'], [1, 2], [true, false]));

function square(n) {
    return n * n;
}
console.log(myLodash.map([4, 8], square));
console.log(myLodash.map([4, 8, null, undefined], item => item*2));

let object = { 'a': 1, 'b': '2', 'c': 3 };
console.log(myLodash.omit(object, ['a', 'c'], ));

let obj = {'a': 1, 'b': '2', 'c': 3,'d':null, 'e': undefined };
console.log(myLodash.omitBy(obj, item => item%2 === 0));

console.log(myLodash.pick(object, ['a', 'c']));

function even(item){
    return item%2=== 0;
}
console.log(myLodash.pickBy(obj, even));
