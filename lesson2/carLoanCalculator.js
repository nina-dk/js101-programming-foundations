/* eslint-disable max-statements */
//given: loan amount, APR, loan duration
//return the monthly payment

//calc monthly interest rate
//APR / 12

//calc loan duration in months
//loan duration in years * 12

const rlSync = require("readline-sync");

let positiveInput = input => {
  while (!Number(input) || (Number(input) <= 0)) {
    console.log("You must provide a positive number.");
    input = rlSync.question();
  }
  return input;
};

let invalidInput = input => {
  while ((!Number(input) && Number(input) !== 0) || (Number(input) < 0)) {
    console.log("Please enter a non-negative number.");
    input = rlSync.question();
  }
  return input;
};

console.log(`Welcome to Car Loan Calculator!
${"---".padStart((31 / 2) + 1)}`);
carLoanCalculator();

// eslint-disable-next-line max-lines-per-function
function carLoanCalculator() {
  let totalLoan = Number(rlSync.question("Enter the total amount of your loan: "));
  totalLoan = Number(positiveInput(totalLoan));
  console.log(totalLoan, typeof totalLoan);
  let APR = Number(rlSync.question("Enter your APR in percentage form (i.e. 10 for 10%): "));
  APR = Number(invalidInput(APR));
  let durationInYears = Number(rlSync.question("Enter your loan duration. Years: "));
  durationInYears = Number(invalidInput(durationInYears));
  let durationInMonths = Number(rlSync.question("Months: "));
  durationInMonths = Number((durationInYears === 0) ?
    positiveInput(durationInMonths) :
    invalidInput(durationInMonths));

  let monthlyCost;
  let duration = (durationInYears * 12) + durationInMonths;
  if (APR === 0) monthlyCost = totalLoan / duration;
  else {
    let monthlyIntRate = (APR / 100) / 12;
    // eslint-disable-next-line max-len
    monthlyCost = totalLoan * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-duration))));
  }
  console.log(`Your monthly payment is: $${monthlyCost.toFixed(2)}.`);
  const again = rlSync.question("Do you want to perform another calculation? (yes/no)\n").toLowerCase();
  // eslint-disable-next-line no-unused-expressions
  if (again[0] === "y") {
    console.clear();
    carLoanCalculator();
  } else {
    console.log("Goodbye!");
  }
}