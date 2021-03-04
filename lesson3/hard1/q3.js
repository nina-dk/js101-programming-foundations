//A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three); // messWithVars(["one"], ["two"], ["three"])

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: two
console.log(`three is: ${three}`); //three is: three
//B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
//C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//In all three code snippets, the local variables one, two and three of
//the function messWithVars shadow the global variables one, two and three
//because they have the same name. Thus, the global variables aren't accessible
//inside the function and the local variables one, two, three are not the same
//as the global variables, even though they share the same names.
//A and B will log:
//one is: one
//two is: two
//three is: three
//In those snippets, we're assigning the local variables one, two and
//three of the function messWithVars to reference the same objects (arrays)
//as the global variables one, two and three. However, inside the function
//we're the reassigning all three variables to reference different arrays.
//Reassignement is not a destructive operation in JS, thus the global variables
//won't be affected by this change.
//C will log:
//one is: two
//two is: three
//three is: one
//In the C snippet, we're again, passing references to the same arrays as
//those pointed to by the global variables one, two and three, in the function.
//Then, on lines 35-37, we're calling the splice method on each variable, which
//is a destructive method that removes and/or adds an element to the array. Because
//global variables and local variables one, two, three reference the same objects
//and splice is destructive, the changes will affect the global variables as well.