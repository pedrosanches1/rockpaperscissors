// This function is only to lower the case of any user input like "Rock" or "PAPER" and to return an "Error" if the user types anything else than "rock / "paper" / "scissors".
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
  console.log('Error!');
  }
}

// This funtion generates the computer choice.
const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
    break;
    default:
    return 'Error in getComputerChoice';
  }
}

// This functions determines the winner by comparing the user choice with the computer choice. Both userChoice and computerChoice haven't been declared yet.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  return 'It\s a tie!'
} if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!'
  } if (computerChoice === 'scissors') {
    return 'You won!'
  } 
} if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!'
  } if (computerChoice === 'rock') {
    return 'You won!'
  }
} if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!'
  } if (computerChoice === 'paper') {
    return 'You won!'}
  } if (userChoice === 'bomb') {
    return 'You won!'}
  }

// This functions plays the game. It also declaresuserChoice and computerChoice, which were used as parameters in the function determineWinner but haven't beed declared yet. 
const playGame = () => {
const userChoice = getUserChoice('Bomb');
const computerChoice = getComputerChoice();
console.log('You choose: ' + userChoice);
console.log('The computer choose: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice))
}

playGame()
