let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleMunsters = Object.values(munsters).filter(chars => {
  return chars.gender === "male";
});

let totalMaleAge = maleMunsters.reduce((sum, obj) => sum + obj.age, 0);
console.log(totalMaleAge);