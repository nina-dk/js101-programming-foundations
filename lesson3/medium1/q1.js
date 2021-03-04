//input/output: - / the string "The Flintstones Rock!" 10 times
// each time indented by 1 extra space to the right of the line
// above it
//data structures: loop, couter for the indentation
//algorithm:
//START
//SET a counter that starts at zero
//SET a number = 10
//WHILE number >= 0
//  Log counter times a space + the string "The Flinstones Rock!"
//  Increment counter, decrement number
//END

let count = 1;
for (let times = 10; times > 0; times--) {
  console.log(" ".repeat(count) + "The Flinstones Rock!");
  count += 1;
}