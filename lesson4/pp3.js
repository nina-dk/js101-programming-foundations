[1, 2, 3].map(num => num * num);

/*
[1, 4, 9]
`map` returns a new array with each element from the calling array
replaced in the new array by what is being returned by the callback
function. In this case, on each iteration the callback returns the number
that is currently iterated squared (doubled), so the new array contains
the numbers from the calling array doubled. This happens because when there
are no braces surrounding the function body and it only includes a single
statement, the arrow function returns the computed value.
*/