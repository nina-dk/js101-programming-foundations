//Input: array
//Output: the same array mutated
//Rules: - each number in array should be doubled in place
//Algorithm:
/*
1.Create `i` variable equal to 0.
2.Reassign the number at index `i` in the input array to its double.
3.Repeat step 2 for all the elements in the array.
4.Return the array
*/

function doubleNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= 2;
  }
  return nums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);   // => [2, 8, 6, 14, 4, 12]