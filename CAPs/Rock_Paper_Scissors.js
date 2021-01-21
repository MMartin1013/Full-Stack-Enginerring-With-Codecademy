//Function to obtain users choice
const getUserChoice = userInput => userInput.toLowerCase() == 'rock' || userInput.toLowerCase() == 'paper' || userInput.toLowerCase() == 'scissors' || userInput.toLowerCase() == 'bomb' ? userInput.toLowerCase() : console.log('Error');

//Computer choice generated at random
const getComputerChoice = function(){
  switch (Math.floor(Math.random() * 3)){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

/*Based on rock paper scissiors rules a winner is chosen. Typing in 
bomb as the user yields an automatic win*/
function determineWinner(userChoice,computerChoice){
  if(userChoice == 'bomb'){
    return 'Game is a win'
  }else if(userChoice == computerChoice){
    return 'Game is a tie';
  }else{
    if(userChoice == 'paper'){
      if(computerChoice == 'rock'){
        return 'Game is a win';
      }else{
        return 'Game is a loss';
      }
    }else if(userChoice == 'rock'){
      if(computerChoice == 'scissors'){
        return 'Game is a win';
      }else{
        return 'Game is a loss';
      }
    }else{
      if(computerChoice == 'paper'){
        return 'Game is a win';
      }else{
        return 'Game is a loss';
      }
    }
  }
}

//Runs the game using previous 3 functions
const playGame = function(){
  let userChoice = getUserChoice('SciSSors');
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice)
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
