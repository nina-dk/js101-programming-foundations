/*
input: multi-dimensional array
output: object
-first element of each subarray from `arr` to be the key in the returned object
-2nd element of each subarray should be the value of that key
-every subarray contains 2 elements
*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

Object.fromEntries(arr);

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }