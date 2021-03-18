[1, 2, 3].map(num => {
  num * num;
});

/*
[undefined, undefined, undefined]
`map` returns a new array populated by the return values of its callback
for each element in the calling array. In the code above though, we're not
explicitly returning anything in the callback function. The callback implicitly
returns `undefined` on each iteration, and that's what's added in the new array.
*/