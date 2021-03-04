function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor > 0);
  return factors;
}

//Line 1 declares a function called `factors` with one parameter (`number`).
//Inside the function, line 2 declares a variable `divisor` and sets its value
//to whatever will be passed to the function as an argument (that is, to a copy
//of the value of `number`). Line 3 declares a variable called `factors` and
//assigns an empty array to it. Line 4 initializes a `do/while` loop. Inside the
//loop, on line 5, there's a conditional checking if the remainder of dividing
//the value of `number` by that of `divisor` is 0, and if so, pushes the result
//of that division in the `factors` array. Then line 8, decrements the value
//of `divisor` by one. The loop has a condition that the value of `divisor` is
//not 0. Finally, the function returns the `factors` array.

function factors(number) {
  if (number === 0) return "Every number is a factor of 0.";
  if (number < 0) return "Please provide a positive number.";
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
//Bonus answer
//The purpose of `number % divisor === 0` is to check whether
//the value currently assigned to `divisor` is equally divided by
//number, and thus, is a factor of `number`.