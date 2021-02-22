const rlSync = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "fire", "air", "water", "sponge"];
const WINNING_SCORE = 5;
const OPTIONS_MSG = `Type
   r to choose rock,
   p for paper,
   sc for scissors,
   f for fire,
   a for air,
   w for water,
   sp for sponge.`;
const prompt = message => console.log(`=> ${message}`);
let userWins = 0;
let computerWins = 0;

function getUserChoice() {
  let userChoice = rlSync.question(prompt(OPTIONS_MSG)).toLowerCase().trim();
  userChoice = matchUserChoice(userChoice);
  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice. Please try again:");
    userChoice = rlSync.question().toLowerCase();
    userChoice = matchUserChoice(userChoice);
  }

  return userChoice;
}

function matchUserChoice(userInput) {
  switch (userInput) {
    case "r": return "rock";
    case "p": return "paper";
    case "sc": return "scissors";
    case "f": return "fire";
    case "a": return "air";
    case "w": return "water";
    case "sp": return "sponge";
  }
  return undefined;
}

function clearOrGreet(answer) {
  // eslint-disable-next-line no-unused-expressions
  answer[0] === "y" ? console.clear() : prompt("Goodbye!");
}

function incrementWins(userChoice, pcChoice) {
  if (whoWins(userChoice, pcChoice) && userWins < WINNING_SCORE) {
    userWins += 1;
  } else if (whoWins(pcChoice, userChoice) && computerWins < WINNING_SCORE) {
    computerWins += 1;
  }
}

//Object solution with seven gestures

const WINNING_COMBOS = {
  rock: ["scissors", "sponge", "fire"],
  scissors: ["paper", "air", "sponge"],
  paper: ["rock", "air", "water"],
  fire: ["paper", "scissors", "sponge"],
  air: ["water", "rock", "fire"],
  water: ["fire", "scissors", "rock"],
  sponge: ["water", "air", "paper"]
};

function whoWins(firstPlayerChoice, secondPlayerChoice) {
  return WINNING_COMBOS[firstPlayerChoice].includes(secondPlayerChoice);
}

function displayWinner(userChoice, pcChoice) {
  if (whoWins(userChoice, pcChoice)) {
    prompt("You win!");
  } else if (userChoice === pcChoice) {
    prompt("It's a tie!");
  } else {
    prompt("The computer wins!");
  }
}

function displayGrandWinner() {
  prompt(userWins === WINNING_SCORE ? "You are the Grand Winner!" : "The computer is the Grand Winner!");
}

prompt(`Welcome to Rock, Paper, Scissors, Fire, Air, Water, Sponge!
   He who wins ${WINNING_SCORE} times first becomes the Grand Winner!`);
let playAgain = "yes";
while (playAgain[0] === "y") {
  let choice = getUserChoice();

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
  prompt(`Your score: ${userWins} --- Computer score: ${computerWins}`);

  if (userWins < WINNING_SCORE && computerWins < WINNING_SCORE) {
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