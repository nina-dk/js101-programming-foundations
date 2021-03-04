let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34
//Because the value assigne to the `answer` variable (line 1) is a primitive value,
//and is thus immutable, when line 7 calls the `messWithIt` function and passes in the
//value of `answer` as an argument to the function, only a copy of that original
//value is being passed in and assigned to the function-scoped variable `someNumber`
//(the function's parameter). Thus, when line 4 reassigns the value of `someNumber`
//to a new number (50), that change doesn't affect the value
//of the globally scoped `answer` variable. Line 7 assigns the `newAnswer` variable
//the return value of that function call, 50.