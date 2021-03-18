//input: object
//output: new object containing the selected key-value pairs from object
//rules: - return object must contain each property that has a value of 'fruit'
//data structures: object
//Algorithm:
/*
1.Create new empty `fruits` object
2.Iterate over the properties of the input object
  a. If a value of a prop is'Fruit', add this key-value pair in `fruits`
3.Return `fruits` object
*/

function selectFruit(obj) {
  let fruits = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === "Fruit") fruits[key] = value;
  }
  return fruits;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

//2nd way

function selectFruit2(obj) {
  let fruits = {};
  Object.entries(obj).forEach(prop => {
    if (prop[1] === "Fruit") fruits[prop[0]] = prop[1];
  });
  return fruits;
}

//3rd way

function selectFruit3(obj) {
  let fruits = {};

  for (let key in obj) {
    if (obj[key] === "Fruit") fruits[key] = obj[key];
  }

  console.log(fruits);
}