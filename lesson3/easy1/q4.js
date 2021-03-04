let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let munstersDescCap = munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.slice(1).toLowerCase();
console.log(munstersDescCap);