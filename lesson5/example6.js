[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
/*
1.action: method call (filter)
  performed on: original array [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }]
  side effects: none
  return value: a new array [ { c: 'cat', d: 'dog' } ] (not used)
2.action: outer callback execution
  performed on: each object in the original array
  side effects: none
  return value:
3.action: method call (Object.keys)
  performed on: each object
  side effects: none
  return value: array containing the keys of that object
                (used to call the `every` method on)
4.action: method call (every)
  performed on: the array returned by `Object.keys` on each iteration
  side effects: none
  return value: boolean (used to determine the return value of outer callback)
5.action: inner callback execution
  performed on: each element (string) in the array of keys
  side effects: none
  return value: boolean (used to determine the return value of `every`)
6.action: comparison (===)
  performed on: the letter at index 0 of the value of the key being iterated
                over in the object (string) and the key itself (string)
  side effects: none
  return value: boolean (it is returned by the inner callback)
7.action: element reference (object[key])
  performed on: the object on that iteration
  side effects: none
  return value: the value of the key on that iteration
                it's used to access the first letter of the value by []
8.action: element reference (object[key][0])
  performed on: object[key] (the value of `key`)
  side effects: none
  return value: string (the letter at index 0 of the value of `key`)
                it's used to perform comparison (===)
*/

//What would happen if, instead of using every, we used some?
//How would this affect the return value of filter?

/*
`some` returns a boolean if there's at least one element in the calling array
for which the callback (passed to `some` as an argument) returns a truthy value.
So if instead of `every` we used `some` in the outer callback, both objects of
the original array would be added to the new array returned by `filter`.
That's because `object[key][0] === key` would return `true` for the key `a`
in the first object, and so `some` would in turn, return `true`.
*/