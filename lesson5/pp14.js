/*
-create empty array
-iterate over `obj`
  -if the type of a property is `fruit` push its colors to the array
  -if the type is `vegetable` push its size to the array
-iterate over the array
  -if an element is a string, change it to uppercase
  -if it's a subarray, iterate over the subarray
    -capitalize the first letter of each element
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

Object.values(obj).map(product => {
  if (product.type === "fruit") {
    return product.colors.map(color =>
      color[0].toUpperCase() + color.slice(1).toLowerCase());
  }
  return product.size.toUpperCase();
});

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]