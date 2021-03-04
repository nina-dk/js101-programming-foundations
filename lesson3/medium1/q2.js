let munstersDescription = "The Munsters are creepy and spooky.";
let characters = munstersDescription.split("");
const lowerCase = /[a-z]/;
let reversedChars = characters.map(char => {
  lowerCase.test(char) ? char = char.toUpperCase() : char = char.toLowerCase();
  return char;
});
console.log(reversedChars.join(""));

//Alternate solution
let reversedStr = "";
for (let char = 0; char < munstersDescription.length; char++) {
  munstersDescription[char] >= "a" && munstersDescription[char] <= "z" ?
    reversedStr += munstersDescription[char].toUpperCase() :
    reversedStr += munstersDescription[char].toLowerCase();
}
console.log(reversedStr);