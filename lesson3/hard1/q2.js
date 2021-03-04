//Question 2
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
//It outputs: { first: [1, 2] }. Line 3 assigns the numArray variable
//a reference to the same array that the property name "first" in the object
//Object points to. Thus, when line 4 mutates that array (since arrays are
//mutable like any object) by pushing another element to the end of it, the
//original array in the object will reflect those changes too.