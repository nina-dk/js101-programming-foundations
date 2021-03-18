[1, 2, 3].every(num => {
  return num = num * 2;
});

//2
//4
//6
//The return value of the callback is the value being assigned to the
//local variable `num` on each iteration, which is the current value of `num`
//multiplied by 2.

//true
//`every` checks if all of the elements in the calling array satisfy the
//criterion specified by the callback function, by evaluating the truthiness
//of its return value on each iteration. In this case, the return value of the
//callback will always be a number, which is a truthy value, thus `every` will
//return `true`.