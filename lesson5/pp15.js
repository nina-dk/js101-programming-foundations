/*
-create an empty array
-iterate over `arr`
  -get the values of the properties of each object
    -iterate over the values
    -if all the values are even numbers, push that object to the empty array
*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evensArr = arr.filter(obj => {
  return Object.values(obj).every(subarr =>
    subarr.every(num => num % 2 === 0));
});

console.log(evensArr);