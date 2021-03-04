let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

//Line 1 declares a variable called `str1` and assigns the string "hello there"
//to it. Line 2 declares another variable `str2` and assigns to it a new copy
//of the value of `str1`, which is the string "hello there", since strings are
//primitive values and are thus, immutable. Then line 3 reassigns `str2` to
//a different value, the string "goodbye!". Finally, on line 4 we log `str1`
//to the console which will output the string "hello there" since the variables
//`str1` and `str2` are independent to one another.