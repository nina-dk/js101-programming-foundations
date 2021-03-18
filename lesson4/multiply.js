//Input: 1. array 2. transformation criterion (number to multiply with)
//Output: array with each number multiplied by the 2nd argument
//Questions: -Is the returned array a new array? (assume it's not)
//Data structures: (same) array
//Algorithm:
/*
1.Create `i` variable equal to 0.
2.Reassign the element at index `i` in the input array to its current value
  multplied by the number provided as a 2nd argument to the function.
3.Increment `i` by 1.
4.Repeat steps 2-3 for all elements of the input array.
5.Return the array.
*/

function multiply(nums, multiplier) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= multiplier;
  }

  return nums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers);