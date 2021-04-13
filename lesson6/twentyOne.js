const rlSync = require("readline-sync");
const WINNING_SCORE = 5;
const MAX_VAL = 21;
const DEALER_LIMIT = 17;
const FIGURE_VAL = 10;
const ACE_VAL = [1, 11];
const figures = ["J", "Q", "K"];
const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const DECK = [];

VALUES.forEach(val => {
  SUITS.forEach(suit => DECK.push([suit, val]));
});

const prompt = msg => console.log(`=> ${msg}`);
const initialDeal = deck => [deck.pop(), deck.pop()];

function decorateMsg(msg) {
  const PATTERN = "♥♦♠♣";
  let repeatedPattern = PATTERN;
  while (repeatedPattern.length < msg.length + 4) {
    repeatedPattern += PATTERN;
  }
  let difference = repeatedPattern.length - msg.length - 2;

  console.log(repeatedPattern);
  console.log(`♦${" ".repeat(repeatedPattern.length - 2)}♦
♠${" ".repeat(Math.floor(difference / 2))}${msg}${" ".repeat(Math.ceil(difference / 2))}♠
♣${" ".repeat(repeatedPattern.length - 2)}♣`);
  console.log(repeatedPattern);
}

function shuffleCards(cards) {
  let deckCopy = cards.slice();
  let shuffledDeck = [];

  while (deckCopy.length > 0) {
    let randomIdx = Math.floor(Math.random() * deckCopy.length);
    shuffledDeck.unshift(...deckCopy.splice(randomIdx, 1));
  }

  return shuffledDeck;
}

function deal(cards, currentPlayerCards) {
  currentPlayerCards.push(cards.pop());
}

function hand(player, cards) {
  return (` ${player} hand: ${cards.map(card => card.join(" ")).join("  |  ")}\n`);
}

function displayCards(playerCards, dealerCards) {
  console.log(`\n Dealer hand: ${dealerCards[0].join(" ")} |  ?\n`);
  console.log(hand("Your", playerCards));
}

function calcTotal(cards) {
  let values = cards.map(card => {
    if (figures.includes(card[1])) return FIGURE_VAL;
    if (card[1] === "A") return ACE_VAL[1];
    return Number(card[1]);
  });

  let total = values.reduce((sum, val) => sum + val);

  while (total > MAX_VAL) {
    values.sort((a, b) => a - b);

    if (values[values.length - 1] === 11) {
      values[values.length - 1] = ACE_VAL[0];
    } else break;

    total = values.reduce((sum, val) => sum + val);
  }

  return total;
}

const busted = (total) => total > MAX_VAL;

function hitOrStay() {
  let playerMove = rlSync.question(prompt("Do you want to hit or stay? (h/s)")).toLowerCase();
  while (!["hit", "h", "stay", "s"].includes(playerMove)) {
    playerMove = rlSync.question(prompt("You need to either hit or stay. (h/s)")).toLowerCase();
  }

  return playerMove;
}

function playerTurn(deck, playerCards, dealerCards) {
  let playerTotal = calcTotal(playerCards);

  while (true) {
    displayCards(playerCards, dealerCards);
    prompt(`Your current total is: ${playerTotal}.`);

    let playerMove = hitOrStay();
    console.clear();

    if (["h", "hit"].includes(playerMove)) deal(deck, playerCards);
    playerTotal = calcTotal(playerCards);

    if (["s", "stay"].includes(playerMove) || busted(playerTotal)) break;
  }

  return playerTotal;
}

function dealerTurn(deck, dealerCards, dealerTotal) {
  prompt("Dealer's turn...\n");
  while (true) {
    if (dealerTotal >= DEALER_LIMIT) break;
    prompt("Dealer hits.\n");

    deal(deck, dealerCards);
    dealerTotal = calcTotal(dealerCards);

    console.log(hand("Dealer", dealerCards));
  }

  return dealerTotal;
}

function displayFinalHands(playerCards, dealerCards) {
  const PATTERN = "♥♦♠♣";
  let repeatedPattern = PATTERN;
  let playerHand = hand("Your", playerCards);
  let dealerHand = hand("Dealer", dealerCards);
  let longerLength = (playerHand.length >= dealerHand.length ?
    playerHand.length : dealerHand.length);

  while (repeatedPattern.length < longerLength) {
    repeatedPattern += PATTERN;
  }

  console.log(repeatedPattern + "\n");
  console.log(`${hand("Dealer", dealerCards)}`);
  console.log(`${hand("Your", playerCards)}`);
  console.log(repeatedPattern + "\n");
}

function displayResult(playerTotal, dealerTotal, playerWins, dealerWins) {
  prompt(`The Dealer's total is ${dealerTotal} and yours is ${playerTotal}.`);

  if (busted(dealerTotal) ||
    (!busted(playerTotal) && playerTotal > dealerTotal)) {
    if (busted(dealerTotal)) prompt("The Dealer busted!");
    prompt("You won!\n");
  } else if (busted(playerTotal) || playerTotal < dealerTotal) {
    if (busted(playerTotal)) prompt("Oops! Looks like you busted.");
    prompt("The Dealer won!\n");
  } else {
    prompt("It's a tie!\n");
  }

  decorateMsg(`You: ${playerWins}, Dealer: ${dealerWins}`);
}

function getWins(playerTotal, dealerTotal, playerWins, dealerWins) {
  if (playerTotal <= 21 && (playerTotal > dealerTotal || dealerTotal > 21)) {
    playerWins += 1;
  } else if (dealerTotal <= 21 &&
      (dealerTotal > playerTotal || playerTotal > 21)) {
    dealerWins += 1;
  }

  return [playerWins, dealerWins];
}

function playAgain() {
  console.log("\n");
  let playAgain = rlSync.question(prompt("Do you want to play again? (y/n)")).toLowerCase();
  while (!["y", "yes", "n", "no"].includes(playAgain)) {
    playAgain = rlSync.question(prompt("Please respond with y (yes) or n (no)."));
  }

  return playAgain[0] === "y";
}

function playSingleRound(playerWins, dealerWins) {
  let shuffledDeck = shuffleCards(DECK);
  let playerCards = initialDeal(shuffledDeck);
  let dealerCards = initialDeal(shuffledDeck);
  let playerTotal = playerTurn(shuffledDeck, playerCards, dealerCards);
  let dealerTotal = calcTotal(dealerCards);

  if (!busted(playerTotal)) {
    prompt(`You stayed at ${playerTotal}.`);
    dealerTotal = dealerTurn(shuffledDeck, dealerCards, dealerTotal);
  }

  if (!busted(dealerTotal) && !busted(playerTotal)) prompt(`Dealer stayed at ${dealerTotal}.\n`);

  [playerWins, dealerWins] = getWins(playerTotal,
    dealerTotal, playerWins, dealerWins);
  displayFinalHands(playerCards, dealerCards);
  displayResult(playerTotal, dealerTotal, playerWins, dealerWins);

  return [playerWins, dealerWins];
}

console.clear();
decorateMsg("Welcome to another game of Twenty One!");
console.log("\n   Win 5 times to become the GRAND WINNER!\n");

while (true) {
  let [playerWins, dealerWins] = [0, 0];

  while (true) {
    [playerWins, dealerWins] = playSingleRound(playerWins, dealerWins);

    if (!(playerWins < WINNING_SCORE && dealerWins < WINNING_SCORE)) break;

    rlSync.question("\nHit Enter/Return to continue.");
    console.clear();
  }

  if (dealerWins === WINNING_SCORE) decorateMsg("The Dealer is the GRAND WINNER!");
  else decorateMsg("You're the GRAND WINNER!");

  if (!playAgain()) break;
  console.clear();
}

decorateMsg("Thanks for playing with us!");