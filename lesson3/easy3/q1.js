let numbers = [1, 2, 3, 4];

//1st way
while (numbers[0]) {
  numbers.pop();
}
//2nd way
numbers = [1, 2, 3, 4];
numbers.length = 0;
//3rd way
numbers = [1, 2, 3, 4];
while (numbers[0]) {
  numbers.shift();
}
//4th way
numbers = [1, 2, 3, 4];
numbers.splice(0);