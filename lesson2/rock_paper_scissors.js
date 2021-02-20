//Find grand winner
//START
//SET userWins = 0 and computerWins = 0;
//WHILE userWins and computerWins are < 5
//  IF user wins, increment userWins
//  ELSE increment computerWins
//PRINT grandWinner
//END

const rlSync = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const prompt = message => console.log(`=> ${message}`);
let userWins = 0;
let computerWins = 0;

function matchUserChoice(userInput) {
  switch (userInput) {
    case "r": return "rock";
    case "p": return "paper";
    case "sc": return "scissors";
    case "l": return "lizard";
    case "sp": return "spock";
  }
  return undefined;
}

function clearOrGreet(answer) {
  // eslint-disable-next-line no-unused-expressions
  answer[0] === "y" ? console.clear() : prompt("Goodbye!");
}

function incrementWins(userChoice, pcChoice) {
  if (whoWins(userChoice, pcChoice) && userWins < 5) {
    userWins += 1;
  } else if (whoWins(pcChoice, userChoice) && computerWins < 5) {
    computerWins += 1;
  }
}

//Object solution

const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  lizard: ["paper", "spock"],
  spock: ["scissors", "rock"]
};

function whoWins(firstPlayerChoice, secondPlayerChoice) {
  return WINNING_COMBOS[firstPlayerChoice].includes(secondPlayerChoice);
}


//Without using the object solution

// eslint-disable-next-line no-unused-vars
function whoWon(userChoice, pcChoice) {
  return ((userChoice === "rock" && (pcChoice === "scissors" || pcChoice === "lizard")) ||
  (userChoice === "scissors" && (pcChoice === "paper" || pcChoice === "lizard")) ||
  (userChoice === "paper" && (pcChoice === "rock" || pcChoice === "spock")) ||
  (userChoice === "lizard" && (pcChoice === "paper" || pcChoice === "spock")) ||
  (userChoice === "spock" && (pcChoice === "scissors" || pcChoice === "rock")));
}


function displayWinner(userChoice, pcChoice) {
  if (whoWins(userChoice, pcChoice)) {
    prompt("You win!");
    // incrementWins("user");
  } else if (userChoice === pcChoice) {
    prompt("It's a tie!");
  } else {
    prompt("The computer wins!");
    // incrementWins("computer");
  }
}

function displayGrandWinner() {
  prompt(userWins === 5 ? "You are the Grand Winner!" : "The computer is the Grand Winner!");
}

prompt(`Welcome to Rock, Paper, Scissors, Spock, Lizard!
   He who wins 5 times first becomes the Grand Winner!`);
let playAgain = "yes";
while (playAgain[0] === "y") {
  let choice = rlSync.question(prompt(`Type r to choose rock, p for paper, sc for scissors, l for lizard and sp for spock.`))
    .toLowerCase().trim();
  choice = matchUserChoice(choice);
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice. Please try again:");
    choice = rlSync.question().toLowerCase();
    choice = matchUserChoice(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  /* Alternative solutions using Math.round() and Math.ceil()

  randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  //Not sure about the following one because it doesn't give equal chance
  //to all options. Index 1 has a higher probability of being returned.
  randomIndex = Math.abs(Math.ceil(Math.random() * VALID_CHOICES.length) - 1);
  */
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice} and the computer chose ${computerChoice}.`);
  displayWinner(choice, computerChoice);
  incrementWins(choice, computerChoice);

  if (userWins < 5 && computerWins < 5) {
    playAgain = rlSync.question("Do you want to play again? yes/no\n").toLowerCase();
    while (!["n", "y"].includes(playAgain[0])) {
      prompt("Please enter yes or no.");
      playAgain = rlSync.question().toLowerCase();
    }
  } else {
    displayGrandWinner();
    playAgain = "no";
  }
  clearOrGreet(playAgain);
}