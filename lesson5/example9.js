[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

//What will the final return value be?

/*
On line 1 the `map` method is being called on the three-level nested array
`[[[1, 2], [3, 4]], [5, 6]]`. `map` takes a callback as an argument which is
executed once for each sub-array in the calling array, having that sub-array
passed in to it as an argument, and returns the return value of calling `map`
on that sub-array. The inner `map` in turn, takes a callback as an argument
which is executed for each element of the sub-array. Inside the callback,
the return value of the expression `typeof elem === 'number'` is evaluated by
the `if` statement, an if it evalutes as true (that is, if the current value
assigned to `elem` is a number), the callback returns the return value of:
`elem + 1` (a number).
Otherwise, the callback returns the return value of calling the `map`
method on the sub-array assigned to `elem` on that iteration. This innermost
`map` takes a callback which, on each iteration, returns a number, using the
return value of `number + 1`, where `number` is the value of the currently
iterated element of the sub-array.
The first sub-array in the outer array is itself a two-level nested array,
so the second `map` call for that sub-array, will return a new nested array:
`[[2, 3], [4, 5]]`, with each element inside the nested sub-arrays incremented
by 1 (because of the innermost callback's return value).
The 2nd sub-array of the outer array is an array of numbers, so the 2nd `map`
method will return the array with each number incremented by 1: `[6, 7]`.
Finally, the outer `map` will use these return values which are being returned
by the outer callback, to transform the outer array and return:
[[[2, 3], [4, 5]], [6, 7]].
*/