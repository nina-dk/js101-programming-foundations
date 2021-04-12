[1, 2, 3].map(num => num * num);

/*
[1, 4, 9]
`map` returns a new array with each element from the calling array
"transformed" into what is being returned by the callback function.
In this case, on each iteration the callback returns the number
that is currently iterated over squared, since the arrow function's
body only contains one statement and no curly braces surround it.
So the new array contains the numbers from the calling array doubled.
*/