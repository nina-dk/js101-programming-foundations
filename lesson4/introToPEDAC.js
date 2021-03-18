// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

//input: string
//output: array of substrings that are palindromes
//rules: -substrings should be of length 2 or more
//       - if there are no palindromes or input is an empty string return []
// Test cases:

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// should return: ["ili"]
//
console.log(palindromeSubstrings("abcddcbA"));
// should return: ["bcddcb", "cddc", "dd"]
//
console.log(palindromeSubstrings("palindrome"));
// should log: []
//
console.log(palindromeSubstrings(""));
// should log: []

//data structures: array
//Algorithm:
//Create an empty array called `palindromes`
//Create an array called `substrings`
//Iterate over the input string and push every possible substring in the
//substrings array.

//For the `getSubstrings` function
//Create `substrings` array
//Create a `count` equal to 0
//Create a `length` equal to 2
//Loop through the input `string`
//  push the substring starting at index `count` until `length`
//  increment `length` by 1
//Increment `count`

//For each substring in `substrings` if it is a palindrome (it equals its
//reversed self) push it in the `palindromes` array.
//Return `palindromes`

function getSubstrings(string) {
  let substrings = [];
  for (let i = 0; i < string.length - 1; i++) {
    let length = 2 + i;

    while (length <= string.length) {
      substrings.push(string.slice(i, length));
      length += 1;
    }
  }
  return substrings;
}

function palindromeSubstrings(string) {
  let palindromes = [];
  let substrings = getSubstrings(string);

  substrings.forEach(substr => {
    if (substr === substr.split("").reverse().join("")) palindromes.push(substr);
  });

  return palindromes;
}