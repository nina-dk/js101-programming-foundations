const rlsync = require("readline-sync");
const message = require("./calcMessages.json");

let prompt = message => console.log(`=> ${message}`);
let invalidNumber = number => number.trimStart() === "" || Number.isNaN(Number(number));

let lang = rlsync.question(prompt("Language? "));
while (!message[lang]) {
  console.log(`We don't currently support ${lang}.`);
  lang = rlsync.question();
}

prompt(message[lang].welcome);
calculator();

function calculator() {
  let num1 = rlsync.question(prompt(message[lang].num1));

  while (invalidNumber(num1)) {
    prompt(message[lang].validNumber);
    num1 = rlsync.question();
  }

  num1 = Number(num1);

  let num2 = rlsync.question(prompt(message[lang].num2));

  while (invalidNumber(num2)) {
    prompt(message[lang].validNumber);
    num2 = rlsync.question();
  }

  num2 = Number(num2);

  let operation = rlsync.question(prompt(message[lang].operation));

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(message[lang].validOp);
    operation = rlsync.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = num1 + num2;
      break;
    case "2":
      output = num1 - num2;
      break;
    case "3":
      output = num1 * num2;
      break;
    case "4":
      if (num2 !== 0) {
        output = (num1 / num2).toFixed(2);
      } else {
        output = "-";
        prompt(message[lang].zeroDivision);
      }
      break;
    default:
      break;
  }

  prompt(`${message[lang].result} ${output}.`);
  prompt(message[lang].answer[0]);
  let answer = rlsync.question().toLowerCase();
  if (answer === message[lang].answer[1]) calculator();
}
