let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()* 10);
}

// console.log(generateTarget());


const compareGuesses = (human, computer, target) => {
    const humanDiff = Math.abs(target - human);
    const computerDiff = Math.abs(target - computer);
    if (human > 10) {
        alert('Max number allowed is 10');
    } else {
    if (humanDiff < computerDiff) {
        return true;
    } else {
        return false;
    }
} 
}


//console.log(compareGuesses()); 

const updateScore = winner => {
    if (winner === 'human') {
        humanScore +=1;
    } else if (winner === 'computer') {
        computerScore =+1;
    }
}

const advanceRound = () => currentRoundNumber +=1;
