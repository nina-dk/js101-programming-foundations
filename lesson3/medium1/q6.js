let nanArray = [NaN];
console.log(nanArray[0] === NaN); // false
//NaN compares unequal to any other value in JS, even to another NaN value.
//To check whether a value is NaN, we can use the Number.isNaN() method.
console.log(Number.isNaN(nanArray[0])); // true