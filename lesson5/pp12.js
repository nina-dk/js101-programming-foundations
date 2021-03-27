/*
-identical strucure (nested array)
-only numbers that are multiples of 3
-use `filter`
*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(subarr => subarr.filter(num => num % 3 === 0));