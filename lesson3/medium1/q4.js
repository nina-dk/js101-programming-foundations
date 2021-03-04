
let buff = [1, 2, 3];
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
console.log(addToRollingBuffer1(buff, 3, 4), buff);

buff = [1, 2, 3];
function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log(addToRollingBuffer2(buff, 3, 4), buff);
//`addToRollingBuffer1` mutates the argument represented by `buffer` whereas,
//the second function returns the same value, but doesn't mutate the value
//of buffer outside the function scope. That is, `buff` will still contain
//the same values it did before calling `addToRollingBuffer2`.