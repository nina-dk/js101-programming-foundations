/*
Input: object
Output: number
Rules:
  -output number must be the smallest of the object's values
Questions:
  -work for every case or just the current object?
Data structures:
  array of the object's values
Algorithm:
  1.Create an array of the object's values.
  2.Create a variable `i` and `minAge` equal to 0.
  3.If the element at index `i` in the array is < `minAge`, reassign `minAge`
   to its value.
  4.Increment `i`.
  5.Repeat steps 3-4 for all elements in the array.
  6.Return `minAge`.
*/
function findMinAge(obj) {
  return Object.values(obj).sort((a, b) => a - b).shift();
}

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(findMinAge(ages));