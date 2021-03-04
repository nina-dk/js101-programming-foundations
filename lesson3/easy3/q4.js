let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

//logs: [{ first: 42 }, { second: "value2" }, 3, 4, 5]
//Line 1 declares a variable called `arr1` and assigns a reference
//to an array to it. Line 2 declares a new variable `arr2` and assigns
//a shallow copy of `arr1` to it, which is the return value of calling
//the `slice()` method on `arr1`. Then, line 3 reassigns the value of
//the property with the key `first` of the object that is at index 0 in `arr2`.
//Finally, line 4 logs `arr1` to the console, which reflects the changes made
//to `arr2` because both variables point to arrays that contain references to
//the same objects.