/*
PROBLEM STATEMENT:
    Input:
      -none
    Output:
      -string
    Explicit requirements:
      -each UUID consists of 32 hexadecimal characters
      -a UUID can be comprised of the digits 0-9 and the letters a-f
      -the UUID will be represented as a string
      -The value is typically broken into 5 sections in an 8-4-4-4-12 pattern
    Implicit requirements:
      -
    Questions:
      -
Examples/ Test Cases:

'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

Data Structures:
POTENTIAL DATA STRUCTURES
    -array
    -string
POTENTIAL METHODS / CODE
    -join
Algorithm:
  1.Create an array `chars` of all possible characters (0-9, a-f).
  2.Create an empty string `UUID`.
  3.While the length of the string is less than 32
    a.Add a random character from `chars` to the string
  4.Return `UUID`.
*/

function createUUID() {
  const UUIDlength = 32;
  const chars = "abcdef0123456789".split("");
  let uuidChars = [];

  while (uuidChars.length < UUIDlength) {
    let randomIdx = Math.floor(Math.random() * chars.length);
    uuidChars.push(chars[randomIdx]);
  }

  return formatUUID(uuidChars);
}

function formatUUID(chars) {
  let dashIndices = [8, 13, 18, 23];
  dashIndices.forEach(dashSpot => {
    chars.splice(dashSpot, 0, "-");
  });

  return chars.join("");
}

createUUID();
