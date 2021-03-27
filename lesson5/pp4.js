let arr1 = [1, [2, 3], 4];
arr1[1][1] += 1;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] += 1;

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] += 1;

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] += 1;