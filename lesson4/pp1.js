[1, 2, 3].filter(num => 'hi');

/*
The return value of `filter` on line 1 will be a new array comprised of
the same values as the calling array `[1, 2, 3]`. This is because, the way the
`filter` method works is that it selects only the elements from the calling
array for which its callback function returns a truthy value, and returns a new
array with those elements in it. In this case, the return value of the callback
provided as an argument to `filter` is always the string 'hi', which evaluates
as true. Thus, on every iteration, callback returns a truthy value and so
`filter` selects every element from the calling array and returns a new array
with all of the elements: `[1, 2, 3]`.
*/