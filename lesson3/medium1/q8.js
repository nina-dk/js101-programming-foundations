let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

//Yes it will. Line 16 calls the messWithDemographics function and passes in a
//reference to the `munsters` object as an argument to it.
//The Object.values() method on line 10 inside the function, returns an array
//containg the object's that's passed in as an argument property values.
//Because the munsters object's property values are objects themselves, the array
//returned will instead contain pointers to those objects, as does the original
//object. Therefore, when calling the forEach() method on that array all destructive
//changes will be reflected by the original object, as well.
//Line 11 increments the value of the "age" key in each nested object by 42 and
//line 12 changes the value of the "gender" key to the string "other".
//Those changes will affect the original object since it references the same
//objects as the array.
console.log(munsters);