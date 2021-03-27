[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

//What will the return value be in this example?
//=> [[2, 4], [6, 8]]
/*
1.action: method call (map)
  performed on: [[1, 2], [3, 4]]
  side effects: none
  return value: [[2, 4], [6, 8]] (not used)
2.action: callback execution
  performed on: each subarray of the outer array
  side effects: none
  return value: its return value is used by the outer `map` method
                for transformation of the outer array
3.action: method call (map)
  performed on: each subarray
  side effects: none
  return value: 1st iteration [2, 4]
                2nd iteration [6, 8]
                its return value is used to determine the return value
                of the outer callback function
4.action: (inner) callback execution
  performed on: each element of the subarray
  side effects: none
  return value: the current element multiplied by 2
                (it will return 2, 4, 6, 8 on each iteration, respectively)
                its return value is used for transformation by the inner `map`
                method
5.action: multiplication (*)
  performed on: the element of subarray on the current iteration
  side effects: none
  return value: a number (the product of `num` multiplied by 2)
                returned by the inner callback
*/