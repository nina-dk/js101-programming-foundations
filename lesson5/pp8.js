let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = "aeoiu".split("");

Object.values(obj).forEach(arr => {
  arr.forEach(string => {
    string.split("").forEach(letter => {
      if (VOWELS.includes(letter.toLowerCase())) console.log(letter);
    });
  });
});