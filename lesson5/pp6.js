let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(member => {
  console.log(
    `${member[0][0].toUpperCase() + member[0].slice(1)} is a ${member[1].age}-year-old ${member[1].gender}.`
  );
});

//(Name) is a (age)-year-old (male or female).