let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
let flintsNames = flintstones.flat();
console.log(flintsNames);
//2nd way (reduce)
flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let allFlints = flintstones.reduce((newArr, currentVal) => {
  typeof currentVal === "string" ? newArr.push(currentVal) :
    currentVal.forEach(value => newArr.push(value));
  return newArr;
}, []);
console.log(allFlints);
//3rd way (forEach)
allFlints = [];
flintstones.forEach(name => allFlints = allFlints.concat(name));
console.log(allFlints);