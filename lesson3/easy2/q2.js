let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse());
console.log(numbers);

console.log(numbers.slice().sort((num1, num2) => num2 - num1));
console.log(numbers);

//For each number of the numbers array
//IF the currentNum is less than the next number
let copy = [...numbers];
numbers.forEach(num =>  {
  num = copy.pop();
  console.log(num);
});
console.log(numbers);