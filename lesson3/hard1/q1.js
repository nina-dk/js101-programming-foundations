function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());
//No. The first function will return the object { prop1: "hi there"} but the
//second function returns undefined. This is because JavaScript inserts semi
//colons where it deems necessary. So on line 9 in the second function, it
//places a semicolon after the return statement and the object below it is never
//reached.