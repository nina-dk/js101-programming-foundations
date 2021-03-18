/*
Input: object
Output: number
Rules:
  -output number must be the sum of all the values from input object
Data structures:
  array of the object's values
Algorithm:
  1.Create an array from the object's values.
  2.Reduce
*/

function sumObjValues(obj) {
  return Object.values(obj).reduce((sum, value) => sum + value);
}

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(sumObjValues(ages));