let flintstonesObj = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barneyArry = Object.entries(flintstonesObj).filter(pair => pair[1] === 2).pop();
console.log(barneyArry);