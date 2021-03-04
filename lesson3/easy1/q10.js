let advice = "Few things in life are as important as house training your pet dinosaur.";
// Expected return value:
// => 'Few things in life are as important as '

const regex = /house(.*)/;
console.log(advice.replace(regex, ""));
//alternate solution
console.log(advice.slice(0, advice.indexOf("house")));