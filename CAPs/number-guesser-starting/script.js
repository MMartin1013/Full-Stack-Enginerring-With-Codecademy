let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1,num2) => Math.abs(num1 - num2);

const alert = () => 'Your number is out of range';

function compareGuesses(userGuess,comGuess,target){
    if (userGuess < 0 || userGuess > 9){
        alert();
    }
    let userDis = getAbsoluteDistance(userGuess,target)
    let comDis = getAbsoluteDistance(comGuess,target)

    if (userDis > comDis){
        return false;
    }else{
        return true;
    }
}

function updateScore(winner){
    if(winner ==  'human'){
        humanScore++;
    }else{
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}