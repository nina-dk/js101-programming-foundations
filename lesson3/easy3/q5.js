function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

//1st solution
function isColorValid(color) {
 return (color === "blue" || color === "green");
}

//2nd solution
let isColorValid = color => (color === "blue" || color === "green");

//3rd solution
let isColorValid = color => ["blue", "green"].includes(color);