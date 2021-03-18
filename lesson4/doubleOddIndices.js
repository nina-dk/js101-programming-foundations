//Input: array
//output: new array
//Rules: - only elements with odd indices from input array should be doubled
//Data structures: array
//Algorithm:
/*
1.Create an empty `doubledOddIndices` array.
2.Create an `i` variable with a value of 0.
3.If `i` is odd, push the doubled value of the element at index `i` from
  input array in the `doubledOddIndices` array.
4.If `i` is even, push the element from `array` as-is in `doubledOddIndices`.
5.Increment `i` by 1.
5.Repeat steps 3-5 for all elements in input array.
6.Return `doublesOddIndices` array.
*/

function doubleOddIndices(nums) {
  const doubledOddIndices = [];

  for (let i = 0; i < nums.length; i++) {
    doubledOddIndices.push(i % 2 === 1 ? nums[i] * 2 : nums[i]);
  }

  return doubledOddIndices;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleOddIndices(myNumbers);  // => [2, 4, 6, 14, 2, 6]
// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]