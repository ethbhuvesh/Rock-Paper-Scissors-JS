let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let guess = parseFloat(Math.random().toFixed(2));
    if (guess < 0.33) {
        return "rock";
    }
    else if (guess >= 0.33 && guess<0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let isCorrect = 0;
    while(isCorrect == 0) {
        let userGuess = prompt("rock, paper or scissors?").toString().toLowerCase();
        if(userGuess == "rock" || userGuess == "paper" || userGuess == "scissors") {
            isCorrect = 1;
            return userGuess;
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice)
    {
        console.log("It's a draw!");
    }
    else {
        if((humanChoice == "rock" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="scissors") || (humanChoice=="scissors" && computerChoice=="rock")){
            console.log("Computer Won! " + computerChoice + " over " + humanChoice);
            computerScore++;
        }
        else{
            console.log("Human Won! " + humanChoice + " over " + computerChoice);
            humanScore++;
        }
    }
}


function playGame() {
    
    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

console.log(playGame());




