// Define game variables
let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

// Create function that randomly returns either "rock," "raper," or "scissors"
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomChoice];
  return computerChoice;
}

// Create a function that plays a single round of game
function playRound(playerSelection, computerSelection) {
  if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return `You won! ${playerSelection} beats ${computerSelection}.`;
  } else if (
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    compScore++;
    return `You lost! ${computerSelection} beats ${playerSelection}.`;
  } else {
    return `You tied! Both picked ${playerSelection}`;
  }
}

// test
// console.log(playRound(playerSelection, computerSelection));
// console.log(playerScore, compScore);

// Create game() function to play best-of-five
function game() {

  while (compScore < 3 && playerScore < 3) {
    let playerSelection = prompt('Pick rock, paper, or scissors:').toLowerCase(); // prompts the player to choose and make the input case-insensitive
    const computerSelection = getComputerChoice();

    console.log('Computer chose:', computerSelection);
    console.log('You chose:', playerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Your score: ${playerScore},`,`Computer score: ${compScore}`);
  }

  if (playerScore === 3 && compScore < 3) {
    return 'You outsmarted the computer! Congrats, you won the game!';
  } else if (compScore === 3 && playerScore < 3) {
    return 'You suck! Guess better next time!';
  } 
}

console.log(game());