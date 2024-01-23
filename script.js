// Define game variables
let choices = ['rock', 'paper', 'scissors'];
const playerSelection = "rock";
const computerSelection = getComputerChoice();



// Create function that randomly returns either "Rock," "Paper," or "Scissors"
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
    return 'You won!'
  } else if (
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return 'You lost!'
  } else {
    return 'You tied!'
  }
}

// test
// console.log(playRound(playerSelection, computerSelection));