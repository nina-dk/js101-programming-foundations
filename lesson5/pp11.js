let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  let objCopy = Object.assign({}, obj);
  Object.keys(objCopy).forEach(key => objCopy[key] += 1);
  return objCopy;
});

console.log(arr);