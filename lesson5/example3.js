[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/*
We're calling the `map` method on the multi-dimensional array `[[1, 2], [3, 4]]`. `map`
takes a callback as an argument. The callback is passed a subarray from the outer array
on each iteration of `map`, as an argument. Inside the callback function body, there's a
`console.log` method call, which logs the return value of `arr[0]`: that is, the
element reference operator ([]) is accessing the element at index 0 of the subarray `arr`
and returns that element. `console.log` then outputs that value to the console (it has a
side effect) and returns undefined, but its return value is never used.
On line 3, the return value of `arr[0]` is returned by the callback. This value
is used by `map` for transformation. That is, `map` will return a new array containing the
return values of the callback on each iteration as its elements.
So the output of the code above will be:
//1
//3
//=> [1, 3] (return value of `map` which is not actually used)
*/
/*
1. method call (map), called on outer array, returns a new array [1, 3], return value not used,
   no side effects
2. callback, performed on each subarray, returns the element at index 0 of the subarray,
   its return value is used by `map` for transformation, no side effect
3. element reference, performed on each subarray, returns the element at index 0 of the subarray,
   its return value is used by `console.log` (line 2) and is returned by the callback (line 3).
4. method call (console.log), performed on the element at index 0 of each subarray,
   side effects: outputs the string representation of a Number, returns undefined, its return
   value is not used
*/