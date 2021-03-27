let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

//What will the code above output? What will the value of `myArr` be?

//18
//7
//12
//=> undefined
//The value of `myArr` will be `undefined`, which is the return value
//of the `forEach` method.

/*
1.action: variable declaration and assignment (`myArr`)
  side effects: none
  return value: undefined (not used)
2.action: method call (forEach)
  performed on: [[18, 7], [3, 12]]
  side effects: none
  return value: undefined (assigned to `myArr`)
3.action: callback execution
  performed on: each subarray of [[18, 7], [3, 12]]
  side effects: none
  return value: [undefined, undefined] 1st iteration
                [undefined, undefined] 2nd iteration
                (never used)
4.action: method call (map)
  performed on: each subarray
  side effects: no
  return value: [undefined, undefined] 1st iteration
                [undefined, undefined] 2nd iteration
                its return value is returned by the callback that's the argument
                of `forEach`
5.action: callback execution
  performed on: each element (number) of the subarray
  side effects: none
  return value: undefined (it either returns `console.log(num)` which evaluates    ?
                as undefined (if num > 5) or it implicitly returns undefined)
                its return value is used by `map` for transformation
6.action: comparison (>)
  performed on: element of sub-array in the current iteration
  side effects: none
  return value: Boolean (evaluated by the `if` statement)
7.action: method call (console.log)
  performed on: the current element of the subarray
  side effect: outputs the string representation of the value of `num` (Number) 
               to the console
  return value: undefined
                its return value is returned by the callback that's passed
                to `map` as an argument
*/