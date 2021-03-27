let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

//arr = [2, [5, 8]]
//arr = [4, [5, 8]]
//arr = [4, [3, 8]]

console.log(a); // 2
console.log(b); // [3, 8]