//given: loan amount, APR, loan duration
//return the monthly payment

//calc monthly interest rate
//APR / 12

//calc loan duration in months
//loan duration in years * 12

const rlSync = require("readline-sync");

console.log(`Welcome to Car Loan Calculator!
${"---".padStart((31 / 2) + 1)}`);
carLoanCalculator();

// eslint-disable-next-line max-lines-per-function
function carLoanCalculator() {
  let values = {
    totalLoan: parseFloat(rlSync.question("Enter the total amount of your loan: ")),
    APR: parseFloat(rlSync.question("Enter your APR in percentage form (i.e. 10 for 10%): ")),
    durationInYears: parseInt(rlSync.question("Enter your loan duration. Years: "), 10),
    durationInMonths: parseInt(rlSync.question("Months: "), 10)
  };

  for (const key in values) {
    while ((!values[key] && values[key] !== 0) || values[key] < 0) {
      console.log(`Please enter a valid number for ${key}.`);
      values[key] = parseFloat(rlSync.question());
    }
  }

  let monthlyCost;
  let duration = (values.durationInYears * 12) + values.durationInMonths;
  if (values.APR === 0) monthlyCost = (values.totalLoan / duration).toFixed(2);
  else {
    let monthlyIntRate = (values.APR / 100) / 12;
    // eslint-disable-next-line max-len
    monthlyCost = values.totalLoan * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-duration))));
  }
  console.log(`Your monthly payment is: $${monthlyCost.toFixed(2)}.`);
  const again = rlSync.question("Do you want to perform another calculation? (yes/no)\n").toLowerCase();
  // eslint-disable-next-line no-unused-expressions
  (again[0] === "y") ? carLoanCalculator() : console.log("Goodbye!");
}