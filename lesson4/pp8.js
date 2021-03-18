/*
Input: array
Output: object
Rules:
  -returned object should have the elements of the array as keys and the indices
   of each element as its value.
Algorithm:
  1.Create `i` variable equal to 0.
  2.Create empty object `obj`.
  3.Add the element at index `i` in input array with a value of `i` in `obj`.
  4.Increment `i`.
  5.Repeat steps 3-4 for all elements in the input array.
  6.Return `obj`.
*/

function createObj(array) {
  const obj = {};

  for (let i in array) {
    obj[array[i]] = Number(i);
  }

  return obj;
}

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
createObj(flintstones);
//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }