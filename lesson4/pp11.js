/*
Input: string
Output: object
Rules:
  -output object will have each letter that occurs in input string as a key,
   and the number of times it occurs in that string as its value.
  -count should be case sensitive
Data structures:
  object
Algorithm:
  1.Create an empty `letterOccs` object.
  2.Create a variable `i` equal to 0.
  3.If `letterOccs` has a key named `statement[i]` increment its value by 1,
    otherwise create a new property with that key and a value of 1.
  4.Increment `i`.
  5.Repeat steps 3-4 for each letter in `statement`.
  6.Return `letterOccs`.
*/
function findLetterOccs(str) {
  const letterOccs = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      letterOccs[str[i]] ? letterOccs[str[i]] += 1 : letterOccs[str[i]] = 1;
    }
  }

  return letterOccs;
}

let statement = "The Flintstones Rock";
console.log(findLetterOccs(statement));
//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }