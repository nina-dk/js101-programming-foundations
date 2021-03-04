//Check if there are 4 dot-separated numbers (no more no less)
//return a false condition

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress("10.4.5.11"));
console.log(isDotSeparatedIpAddress("10.4.5"));
console.log(isDotSeparatedIpAddress("10.4.5.11.5"));
console.log(isDotSeparatedIpAddress("10.4.256.0"));