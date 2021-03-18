let arr = [1, 2, 3, 4, 5, 6];
arr.fill(1, 1, 5);

//`fill` replaces all elements from a starting index (1), until, but not
//including the specified stop index (5) with the value of its first argument
//(1) and returns the modified array. It is destructive.
//To check whether it's destructive we can simply log the original array `arr`.
console.log(arr);