function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo()); // no
//The return value of the `foo` function is always the string "yes".
//So it's like calling the `bar` function and passing "yes" as an argument.
//Line 6 returns "yes" if the value assigned to the `param` variable is "no",
//"no" otherwise. In this case, param === "yes", so it'll return "no".