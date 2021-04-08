/*
1.Display the initial empty 3x3 board.
2.Ask the user to mark a square.
3.Computer marks a square.
4.Display the updated board state.
5.If it's a winning board, display the winner.
6.If the board is full, display tie.
7.If neither player won and the board is not full, go to #2
8.Play again?
9.If yes, go to #1
10.Goodbye!

---

1.Set players' scores to 0.
2.Do steps 1-5 from above.
3.If there's a winner, increment their score.
4.If someone's score is 5, print the overall winner and set the scores to 0.
5.If it's a tie, move to step 8.
*/

const rlSync = require("readline-sync");
const prompt = message => console.log(`=> ${message}`);
const INITIAL_MARKER = " ";
const USER_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINNING_COMBOS = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
const WINNING_SCORE = 5;
const whoPlaysFirst = ["choose", "player", "computer"];

function joinOr(array, firstSep = ", ", lastSep = "or") {
  if (array.length > 2) {
    let joined = "";
    array.forEach((ele, idx) => {
      if (idx === array.length - 1) joined += lastSep + " " + ele;
      else joined += ele + firstSep;
    });
    return joined;
  } else return array.join(` ${lastSep} `);
}

function initializeBoard() {
  return Array(9).fill(INITIAL_MARKER).reduce((board, key, index) => {
    board[index + 1] = key;
    return board;
  }, {});
}

function displayInfo(userWins, computerWins) {
  console.clear();
  prompt(`Your marker is ${USER_MARKER} and the computer's marker is ${COMPUTER_MARKER}.`);
  console.log(`---Current Score---\nYou: ${userWins || 0}, Computer: ${computerWins || 0}`);
}

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function showcaseNumbering() {
  let board = initializeBoard();

  for (let square in board) {
    board[square] = square;
  }

  prompt("Numbering of the squares goes as follows:");
  displayBoard(board);
}

function getEmptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function whoPlays(turn) {
  if (turn === "choose") {
    turn = rlSync.question(prompt("Who shall play first: (p)layer or (c)omputer?")).toLowerCase();
    while (!["player", "computer", "p", "c"].includes(turn)) {
      turn = rlSync.question(prompt("Please choose between player and computer.")).toLowerCase();
    }
  }

  if (turn === "p") turn = "player";
  if (turn === "c") turn = "computer";

  return turn;
}

function userPlays(board) {
  let emptySquares = getEmptySquares(board);

  let move = rlSync.question(prompt(`Choose a square: ${joinOr(emptySquares)}.`));
  while (!emptySquares.includes(move)) {
    move = rlSync.question(prompt("Please enter one of the empty squares' number."));
  }

  board[move] = USER_MARKER;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "player") userPlays(board);
  else computerPlays(board);
}

const alternatePlayer = currentPlayer => (currentPlayer === "player" ? "computer" : "player");

// eslint-disable-next-line max-lines-per-function
function computerSmartPick(board, emptySquares) {
  let combosWithEmptySquares = [];

  for (let i = 0; i < emptySquares.length; i++) {
    combosWithEmptySquares.push(...WINNING_COMBOS.filter(combo => {
      return combo.includes(Number(emptySquares[i]));
    }));
  }

  combosWithEmptySquares.sort();
  for (let i = 0; i < combosWithEmptySquares.length - 1; i++) {
    if (combosWithEmptySquares[i].every((num, idx) => {
      return num === combosWithEmptySquares[i + 1][idx];
    })) {
      combosWithEmptySquares.splice(i, 1);
      i -= 1;
    }
  }

  let smartCombos = combosWithEmptySquares.filter(combo => {
    return (combo.some(num => board[num] === COMPUTER_MARKER) &&
      !combo.some(num => board[num] === USER_MARKER));
  });

  if (smartCombos.length > 0) {
    let randomIndex = Math.floor(Math.random() * smartCombos.length);
    return smartCombos[randomIndex].find(num => {
      return emptySquares.includes(String(num));
    });
  }

  return false;
}


function riskyOrWinningSquare(board, emptySquares, marker) {
  for (let i = 0; i < emptySquares.length; i++) {
    let combosWithEmptySquares = WINNING_COMBOS.filter(combo => {
      return combo.includes(Number(emptySquares[i]));
    });

    let combosToPlay = combosWithEmptySquares.filter(combo => {
      return combo.every(num => {
        if (num === Number(emptySquares[i])) return true;
        return board[num] === marker;
      });
    });

    if (combosToPlay.length > 0) return emptySquares[i];
  }

  return false;
}

function computerPlays(board) {
  let emptySquares = getEmptySquares(board);
  let computerSquare = riskyOrWinningSquare(board, emptySquares, COMPUTER_MARKER);

  if (!computerSquare) {
    computerSquare = riskyOrWinningSquare(board, emptySquares, USER_MARKER);
  }
  if (!computerSquare && emptySquares.includes("5")) computerSquare = 5;
  else if (!computerSquare) {
    computerSquare = computerSmartPick(board, emptySquares);
  }
  if (!computerSquare) {
    let randomIndex = Math.floor(Math.random() * emptySquares.length);
    computerSquare = emptySquares[randomIndex];
  }

  board[computerSquare] = COMPUTER_MARKER;
}

function askToPlayAgain() {
  let playAgain = rlSync.question(prompt("Want a rematch? (yes/no)")).toLowerCase();
  while (!["yes", "no"].includes(playAgain)) {
    playAgain = rlSync.question(prompt('Please answer with "yes" or "no".')).toLowerCase();
  }

  return playAgain;
}

function someoneWon(board) {
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    let marker = board[WINNING_COMBOS[i][0]];
    if (marker === INITIAL_MARKER) continue;
    if (WINNING_COMBOS[i].every(num => board[num] === marker)) return marker;
  }
  return false;
}

function playSingleRound(board, currentPlayer, userWins, computerWins) {
  while (true) {
    displayInfo(userWins, computerWins);
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || getEmptySquares(board).length === 0) break;
  }
}


// eslint-disable-next-line max-lines-per-function
function playFullMatch() {
  let [userWins, computerWins] = [0, 0];
  let turn = whoPlays(whoPlaysFirst[0]);

  while (userWins < WINNING_SCORE && computerWins < WINNING_SCORE) {
    let board = initializeBoard();

    playSingleRound(board, turn, userWins, computerWins);
    turn = alternatePlayer(turn);

    displayInfo(userWins, computerWins);
    displayBoard(board);

    if (someoneWon(board) === USER_MARKER) {
      userWins += 1;
      prompt("You won this round!");
    } else if (someoneWon(board) === COMPUTER_MARKER) {
      computerWins += 1;
      prompt("Computer won this round!");
    } else prompt("It's a tie!");

    rlSync.question(prompt("Press Enter/Return to continue."));
  }

  if (userWins === WINNING_SCORE) prompt("You're the GRAND WINNER!");
  else if (computerWins === WINNING_SCORE) prompt("The computer is the GRAND WINNER!");
}

console.clear();
console.log("\n");
prompt("Welcome to Tic Tac Toe!\n");
prompt("The first to win 5 times will be crowned GRAND WINNER!");
showcaseNumbering();
let playAgain = "yes";

do {
  playFullMatch();
  playAgain = askToPlayAgain();

} while (playAgain === "yes");

prompt("Goodbye!");