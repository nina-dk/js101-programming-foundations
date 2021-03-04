let numbers = [1, 2, 3];
numbers[6] = 5;

//This code will not raise an error. It will simply assign the
//element at index 6 the value 5 and treat the intermediate slots,
//3-5, as empty slots.

numbers[4];  // what will this line return?

//It will return undefined.